import React from "react";

/** Duración del fundido de salida, en ms. Debe coincidir con `transition-opacity`. */
export const INTRO_EXIT_MS = 500;

/**
 * Pantalla de introducción de marca: fondo naranja con el logo pulsando.
 *
 * No decide cuándo desaparecer — eso es trabajo de RouteGate. Este componente
 * sólo pinta. Se usa tanto para la intro de sesión como para el fallback de
 * `loading.tsx`, así que no debe llevar `md:hidden`: el loader tiene que ser
 * visible en escritorio también.
 */
export const LoadingScreen: React.FC = () => {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label="Cargando Rumbo Latam"
      className="fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-500"
      style={{ backgroundColor: "#FF7223" }}
    >
      <div className="relative w-32 h-32 md:w-48 md:h-48 animate-pulse">
        {/* eslint-disable-next-line @next/next/no-img-element -- el intro necesita
            el PNG crudo y sin optimizador: son 11 KB y Next no sirve SVG/GIF aquí. */}
        <img
          src="/Paises/LogoReducido.png"
          alt=""
          width={382}
          height={360}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};
