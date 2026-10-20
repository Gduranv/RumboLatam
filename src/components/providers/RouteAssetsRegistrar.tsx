"use client";

import { useEffect, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import {
  clearRegisteredRouteAssets,
  registerRouteAssets,
} from "@/lib/loading/pending-assets";

/**
 * `useLayoutEffect` avisa en el servidor ("does nothing on the server"). Este
 * componente no pinta nada, así que en el render del servidor cae a
 * `useEffect`, que ahí tampoco hace nada.
 */
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

interface RouteAssetsRegistrarProps {
  /** URLs críticas que la página resolvió en el servidor. */
  urls: readonly string[];
}

/**
 * Registra en el gate las URLs críticas que la página resolvió en el servidor
 * (p. ej. las portadas del carrusel de un país). No pinta nada: existe para
 * que RouteGate sepa qué esperar también en las rutas dinámicas, donde el
 * manifiesto va vacío porque el contenido lo resuelve `fs` en el build.
 */
export function RouteAssetsRegistrar({ urls }: RouteAssetsRegistrarProps) {
  const pathname = usePathname();

  // Layout effect y no effect: el useEffect de RouteGate de esta misma
  // navegación corre después en el mismo commit, así que la lista ya está
  // registrada cuando el gate la lee.
  useIsomorphicLayoutEffect(() => {
    registerRouteAssets(pathname, urls);
    return () => clearRegisteredRouteAssets(pathname);
  }, [pathname, urls]);

  return null;
}
