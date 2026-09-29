"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import {
  DEFAULT_GATE_TIMEOUT_MS,
  gateAssets,
  warmAssets,
} from "@/lib/loading/asset-gate";
import {
  DEFAULT_VISUAL_TIMEOUT_MS,
  isVisuallyReady,
  whenVisuallyReady,
} from "@/lib/loading/visual-ready";
import { getRouteAssets } from "@/lib/loading/route-manifest";
import { INTRO_EXIT_MS, LoadingScreen } from "@/components/ui/LoadingScreen";

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
 * cargadas, imágenes visibles descargadas y un frame pintado. La excepción es
 * volver a una página que ya está lista, donde no hay nada que esperar y el
 * loader no se monta.
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

  const move = (next: Phase) => {
    phaseRef.current = next;
    setPhase(next);
  };

  useEffect(() => {
    const { critical, deferred } = getRouteAssets(pathname);
    warmAssets(deferred);

    const controller = new AbortController();
    let exitTimer: ReturnType<typeof setTimeout> | undefined;

    const hideAfterFade = () => {
      move("exiting");
      exitTimer = setTimeout(() => move("hidden"), INTRO_EXIT_MS);
    };

    const run = async () => {
      // `critical` cubre los assets conocidos aunque estén fuera de pantalla;
      // el chequeo del DOM cubre las rutas dinámicas, donde esa lista va vacía.
      const ready = Promise.all([
        gateAssets(critical, {
          timeoutMs: DEFAULT_GATE_TIMEOUT_MS,
          signal: controller.signal,
        }),
        whenVisuallyReady({
          signal: controller.signal,
          timeoutMs: DEFAULT_VISUAL_TIMEOUT_MS,
        }),
      ]);

      await nextFrame();
      if (controller.signal.aborted) return;

      // Ya estaba todo en su sitio: no hay nada que tapar. En una navegación
      // interna esto es el caso de volver a una página ya visitada, y el loader
      // no debe aparecer ni un frame.
      if (isVisuallyReady()) {
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
  }, [pathname]);

  if (phase === "hidden") return null;

  return (
    <div
      data-intro-overlay=""
      aria-hidden={phase === "exiting"}
      className={`transition-opacity duration-500 ${
        phase === "exiting" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <LoadingScreen />
    </div>
  );
}
