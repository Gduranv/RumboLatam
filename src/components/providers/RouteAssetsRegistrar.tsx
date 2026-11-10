"use client";

import { useEffect, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import {
  clearRegisteredRouteAssets,
  registerDeferredRouteAssets,
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
  /** URLs críticas que la página resolvió en el servidor y bloquean el loader. */
  urls: readonly string[];
  /** URLs secundarias de la página que se precargan en segundo plano tras abrir la ruta. */
  deferredUrls?: readonly string[];
}

/**
 * Registra en el gate las URLs críticas y diferidas que la página resolvió en el
 * servidor (p. ej. portadas, héroes y galerías). No pinta nada: existe para que
 * RouteGate sepa qué esperar también en las rutas dinámicas.
 */
export const RouteAssetsRegistrar = ({
  urls,
  deferredUrls,
}: RouteAssetsRegistrarProps) => {
  const pathname = usePathname();

  // Layout effect y no effect: el useEffect de RouteGate de esta misma
  // navegación corre después en el mismo commit, así que la lista ya está
  // registrada cuando el gate la lee.
  useIsomorphicLayoutEffect(() => {
    registerRouteAssets(pathname, urls);
    if (deferredUrls && deferredUrls.length > 0) {
      registerDeferredRouteAssets(pathname, deferredUrls);
    }
    return () => clearRegisteredRouteAssets(pathname);
  }, [pathname, urls, deferredUrls]);

  return null;
};
