"use client";

import type { ReactNode } from "react";
import { useSyncExternalStore } from "react";

type ViewportMode = "ssr" | "mobile" | "desktop";

const DESKTOP_MEDIA_QUERY = "(min-width: 768px)";

interface ResponsiveViewportSwitchProps {
  mobile: ReactNode;
  desktop: ReactNode;
}

/**
 * Suscribe un callback a los cambios del breakpoint md (768px) en el navegador.
 */
const subscribeViewport = (onStoreChange: () => void): (() => void) => {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return () => {};
  }
  const mediaQuery = window.matchMedia(DESKTOP_MEDIA_QUERY);
  mediaQuery.addEventListener("change", onStoreChange);
  return () => mediaQuery.removeEventListener("change", onStoreChange);
};

/**
 * Determina el modo de viewport actual en el cliente ('desktop', 'mobile', o 'ssr' en entornos sin matchMedia).
 */
const getClientViewportSnapshot = (): ViewportMode => {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return "ssr";
  }
  return window.matchMedia(DESKTOP_MEDIA_QUERY).matches ? "desktop" : "mobile";
};

/**
 * Devuelve el snapshot durante SSR para conservar el HTML estático completo de cara a SEO.
 */
const getServerViewportSnapshot = (): ViewportMode => "ssr";

/**
 * Renderiza únicamente el árbol activo (móvil o escritorio) en el cliente para
 * evitar doble descarga de imágenes/GIFs y doble árbol DOM, conservando ambos en SSR.
 */
export const ResponsiveViewportSwitch = ({
  mobile,
  desktop,
}: ResponsiveViewportSwitchProps) => {
  const mode = useSyncExternalStore(
    subscribeViewport,
    getClientViewportSnapshot,
    getServerViewportSnapshot
  );

  if (mode === "mobile") {
    return <>{mobile}</>;
  }

  if (mode === "desktop") {
    return <>{desktop}</>;
  }

  return (
    <>
      {mobile}
      {desktop}
    </>
  );
};

export default ResponsiveViewportSwitch;

