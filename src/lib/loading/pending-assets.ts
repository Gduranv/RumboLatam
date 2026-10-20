/**
 * Assets críticos que la propia página aporta al gate de navegación.
 *
 * `route-manifest.ts` cubre las rutas cuyo contenido se conoce en el build.
 * En `/paises/[id]` las portadas del carrusel las resuelve el servidor con
 * `fs`, así que la página las registra aquí (ver `RouteAssetsRegistrar`) y
 * RouteGate las suma al gate. El registro ocurre en un `useLayoutEffect`, que
 * siempre corre antes de los `useEffect` de RouteGate, así que el gate lee la
 * lista ya completa.
 */
const registrados = new Map<string, readonly string[]>();

const NADA: readonly string[] = [];

export function registerRouteAssets(pathname: string, urls: readonly string[]): void {
  if (urls.length === 0) {
    registrados.delete(pathname);
  } else {
    registrados.set(pathname, urls);
  }
}

export function getRegisteredRouteAssets(pathname: string): readonly string[] {
  return registrados.get(pathname) ?? NADA;
}

/** Limpia una ruta concreta (al desmontar el registrador) o todo el store. */
export function clearRegisteredRouteAssets(pathname?: string): void {
  if (pathname === undefined) {
    registrados.clear();
  } else {
    registrados.delete(pathname);
  }
}
