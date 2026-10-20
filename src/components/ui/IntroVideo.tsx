"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { INTRO_EXIT_MS } from "@/components/ui/LoadingScreen";

interface IntroVideoProps {
  /** true cuando el loader ya se retiró y el video puede arrancar. */
  activo: boolean;
  /** Se dispara cuando el video termina, se salta o falla: se retira. */
  onTerminado: () => void;
}

/**
 * Intro de video a pantalla completa. Lo monta RouteGate por debajo del loader
 * para que el navegador lo descargue (`preload="auto"`) mientras la página
 * carga, y arranca cuando el loader se retira.
 *
 * Detalles que no son decorativos:
 *
 *  - Arranca silenciado y con `playsInline`: es la única combinación que los
 *    navegadores dejan reproducir en autoplay. Subir el volumen después ya es
 *    gesto del usuario y no necesita permiso.
 *  - El `<source>` va primero en WebM: cada navegador descarga sólo el que
 *    soporta (VP9 en Chrome/Firefox, H.264 en Safari e iOS).
 *  - Si `play()` rechaza (autoplay bloqueado, red) o el video da error, el
 *    intro se retira en silencio en vez de dejar una pantalla negra encima
 *    de la página.
 */
export function IntroVideo({ activo, onTerminado }: IntroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const skipRef = useRef<HTMLButtonElement>(null);
  const [saliendo, setSaliendo] = useState(false);
  const [silenciado, setSilenciado] = useState(true);
  const terminadoRef = useRef(onTerminado);
  const saliendoRef = useRef(false);

  useEffect(() => {
    terminadoRef.current = onTerminado;
  }, [onTerminado]);

  const terminar = useCallback(() => {
    if (saliendoRef.current) return;
    saliendoRef.current = true;
    setSaliendo(true);
    // El fundido vive aquí y no en RouteGate: una vez que el video empieza a
    // irse, nadie más tiene que acordarse de él.
    window.setTimeout(() => terminadoRef.current(), INTRO_EXIT_MS);
  }, []);

  // Reproducir cuando el loader ya no tapa nada. muted va también como
  // propiedad porque React lo gestiona como tal, no como atributo.
  useEffect(() => {
    if (!activo) return;
    const video = videoRef.current;
    if (!video) return;
    video.muted = silenciado;
    let promesa: unknown;
    try {
      promesa = video.play();
    } catch {
      terminar();
      return;
    }
    // jsdom devuelve undefined y los navegadores una promesa que rechaza si el
    // autoplay está bloqueado; en ambos casos, mejor retirarse.
    if (promesa && typeof (promesa as Promise<void>).catch === "function") {
      (promesa as Promise<void>).catch(() => terminar());
    }
  }, [activo, silenciado, terminar]);

  // Mientras el intro está encima, Escape lo corta y el foco empieza en
  // "Saltar", que es lo primero que quien no quiere esperar va a pulsar.
  useEffect(() => {
    if (!activo) return;
    skipRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") terminar();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activo, terminar]);

  const alternarSonido = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setSilenciado(video.muted);
  }, []);

  return (
    <div
      data-intro-video=""
      className={`fixed inset-0 z-[9998] bg-black transition-opacity duration-500 ${
        saliendo ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* El audio del intro es decorativo y no hay diálogo que transcribir:
          el cierre real es el propio botón "Saltar". */}
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        poster="/videos/intro-poster.jpg"
        preload="auto"
        muted={silenciado}
        playsInline
        aria-hidden="true"
        onEnded={terminar}
        onError={terminar}
      >
        <source src="/videos/intro.webm" type="video/webm" />
        <source src="/videos/intro.mp4" type="video/mp4" />
      </video>

      <div className="absolute bottom-8 right-8 flex items-center gap-3">
        <button
          type="button"
          ref={skipRef}
          onClick={terminar}
          className="rounded-full bg-black/40 px-5 py-2 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-black/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Saltar
        </button>
        <button
          type="button"
          onClick={alternarSonido}
          aria-pressed={!silenciado}
          aria-label={silenciado ? "Activar sonido" : "Silenciar el video"}
          className="rounded-full bg-black/40 p-2 text-white backdrop-blur-sm transition hover:bg-black/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          {silenciado ? "🔇" : "🔊"}
        </button>
      </div>
    </div>
  );
}
