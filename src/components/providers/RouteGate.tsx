"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import {
  DEFAULT_GATE_TIMEOUT_MS,
  areAssetsLoaded,
  gateAssets,
  warmAssets,
} from "@/lib/loading/asset-gate";
import {
  DEFAULT_VISUAL_TIMEOUT_MS,
  isVisuallyReady,
  whenVisuallyReady,
} from "@/lib/loading/visual-ready";
import { getRouteAssets } from "@/lib/loading/route-manifest";
import { getRegisteredRouteAssets } from "@/lib/loading/pending-assets";
import { INTRO_EXIT_MS, LoadingScreen } from "@/components/ui/LoadingScreen";
import { IntroVideo } from "@/components/ui/IntroVideo";
import { markIntroSeen, shouldPlayIntro } from "@/lib/loading/intro-session";

type Phase = "visible" | "exiting" | "hidden";

/**
 * El loader no se retira antes de este tiempo aunque la página esté lista en
 * 30 ms. Sin esto, una navegación con un solo asset pequeño produce un loader
 * que aparece y desaparece en un frame, que se lee como un parpadeo.
 */
const MIN_LOADER_MS = 250;

const nextFrame = () =>
  new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));

/**
 * Loader de navegación. Se monta en el layout raíz, por encima del router, para
 * que cubra la app completa y no dependa de la página actual.
 *
 * El loader aparece en **cada** entrada y navegación —incluido el botón atrás— y
 * sólo se retira cuando la página está realmente lista para pintarse: fuentes
 * cargadas, imágenes visibles descargadas, los assets que aporta la propia
 * página y un frame pintado. La excepción es volver a una página cuyos assets
 * ya pasaron por el gate y está limpia en el DOM: no hay nada que esperar y el
 * loader no se monta.
 *
 * Detrás del loader puede haber un intro de video (una vez por sesión). Se
 * monta ya durante la carga para que el navegador lo descargue mientras la
 * página se prepara, y se reproduce cuando el loader se retira. Una
 * navegación manda sobre la intro: se corta y no vuelve a aparecer.
 *
 * El estado inicial es "visible" a propósito: el HTML del servidor ya lleva el
 * overlay puesto, así que una carga en frío muestra el loader desde el primer
 * frame en lugar de enseñar la página vacía y taparla después. No hay
 * discrepancia de hidratación porque el cliente arranca en el mismo estado.
 */
export function RouteGate() {
  const pathname = usePathname();
  const [phase, setPhase] = useState<Phase>("visible");
  // El efecto lee la fase de la vez anterior para decidir si hace falta un
  // fundido; useState en la dependencia lo reintroduciría en el bucle.
  const phaseRef = useRef<Phase>("visible");

  // Intro de video: se decide una vez por sesión, en la primera carga. El
  // ref sólo guarda el pathname del montaje, que es el único que le importa
  // a la decisión; no se actualiza en render a propósito.
  const [introMontado, setIntroMontado] = useState(false);
  const [introActivo, setIntroActivo] = useState(false);
  const introRef = useRef({ montado: false, activo: false, pathname: "" });
  const pathnameInicial = useRef(pathname);

  const move = (next: Phase) => {
    phaseRef.current = next;
    setPhase(next);
  };

  // La decisión es de la sesión, no de la ruta: dependencias vacías a
  // propósito. No puede tomarse durante el render porque en el servidor no
  // hay sessionStorage y la hidratación no cuadraría; el efecto es el primer
  // momento en el que el cliente puede decidir solo.
  useEffect(() => {
    if (!shouldPlayIntro()) return;
    introRef.current = {
      montado: true,
      activo: false,
      pathname: pathnameInicial.current,
    };
    // Estado que sólo puede init tras la hidratación: es el caso canónico de
    // setState post-mount.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIntroMontado(true);
  }, []);

  const terminarIntro = useCallback(() => {
    introRef.current.montado = false;
    introRef.current.activo = false;
    setIntroMontado(false);
    setIntroActivo(false);
  }, []);

  useEffect(() => {
    // Una navegación manda sobre la intro: se corta y no vuelve a aparecer en
    // esta sesión. La marca de "vista" se pone al arrancar, no al montar, así
    // que quien navega antes de verla no la pierde: la verá en la próxima
    // carga.
    if (introRef.current.montado && introRef.current.pathname !== pathname) {
      terminarIntro();
    }

    const { critical, deferred } = getRouteAssets(pathname);
    // Las portadas del carrusel de un país no están en el manifiesto: las
    // resuelve el servidor y las registra la propia página. Se leen aquí, en
    // el useEffect, que corre después del useLayoutEffect del registrador.
    const pendientes = getRegisteredRouteAssets(pathname);
    const criticos = [...new Set([...critical, ...pendientes])];
    warmAssets(deferred);

    const controller = new AbortController();
    let exitTimer: ReturnType<typeof setTimeout> | undefined;

    const hideAfterFade = () => {
      move("exiting");
      exitTimer = setTimeout(() => {
        move("hidden");
        // El loader ya no tapa nada: es el momento de arrancar la intro. Se
        // marca como vista aquí, y no al montar, para que "vista" signifique
        // "alguien pudo verla" y no "estuvo ahí detrás del loader".
        if (introRef.current.montado && !introRef.current.activo) {
          introRef.current.activo = true;
          markIntroSeen();
          setIntroActivo(true);
        }
      }, INTRO_EXIT_MS);
    };

    const run = async () => {
      // `criticos` cubre los assets conocidos aunque estén fuera de pantalla
      // (los del manifiesto y los que aporta la página); el chequeo del DOM
      // cubre el resto de rutas dinámicas, donde ambas listas van vacías.
      const ready = Promise.all([
        gateAssets(criticos, {
          // Con assets aportados por la página el tope es el del gate visual:
          // las portadas de un país son ~2 MB y en 4G razonable tardan 2-4 s.
          timeoutMs:
            pendientes.length > 0 ? DEFAULT_VISUAL_TIMEOUT_MS : DEFAULT_GATE_TIMEOUT_MS,
          signal: controller.signal,
        }),
        whenVisuallyReady({
          signal: controller.signal,
          timeoutMs: DEFAULT_VISUAL_TIMEOUT_MS,
        }),
      ]);

      await nextFrame();
      if (controller.signal.aborted) return;

      // Ya estaba todo en su sitio y ya pasó por el gate antes: no hay nada
      // que tapar. En una navegación interna esto es el "atrás" a una página
      // visitada, y el loader no debe aparecer ni un frame.
      if (isVisuallyReady() && areAssetsLoaded(criticos)) {
        if (phaseRef.current === "hidden") return;
        hideAfterFade();
        return;
      }

      move("visible");
      const startedAt = Date.now();
      await ready;
      if (controller.signal.aborted) return;

      const remaining = MIN_LOADER_MS - (Date.now() - startedAt);
      if (remaining > 0) {
        await new Promise<void>((resolve) => {
          exitTimer = setTimeout(resolve, remaining);
        });
        if (controller.signal.aborted) return;
      }

      hideAfterFade();
    };

    void run();

    return () => {
      controller.abort();
      if (exitTimer) clearTimeout(exitTimer);
    };
  }, [pathname, terminarIntro]);

  // El intro sigue montado tras ocultarse el loader: es su turno de verse.
  if (phase === "hidden" && !introMontado) return null;

  return (
    <>
      {phase !== "hidden" && (
        <div
          data-intro-overlay=""
          aria-hidden={phase === "exiting"}
          className={`transition-opacity duration-500 ${
            phase === "exiting" ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <LoadingScreen />
        </div>
      )}
      {introMontado && <IntroVideo activo={introActivo} onTerminado={terminarIntro} />}
    </>
  );
}
