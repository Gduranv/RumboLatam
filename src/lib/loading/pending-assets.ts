/**
 * Assets críticos y diferidos que la propia página aporta al gate de navegación.
 *
 * `route-manifest.ts` cubre las rutas cuyo contenido se conoce en el build.
 * En rutas dinámicas (`/paises/[id]`, `/destinos/[id]`, `/paises/[id]/curiosidades`)
 * las imágenes las resuelve el servidor con `fs`, así que la página las registra
 * aquí (ver `RouteAssetsRegistrar`) y RouteGate las suma al gate. El registro
 * ocurre en un `useLayoutEffect`, que siempre corre antes de los `useEffect` de
 * RouteGate, así que el gate lee la lista ya completa.
 */
const registrados = new Map<string, readonly string[]>();
const diferidosRegistrados = new Map<string, readonly string[]>();

const NADA: readonly string[] = [];

/**
 * Registra los assets críticos de una ruta que deben completarse antes de retirar el loader.
 */
export function registerRouteAssets(pathname: string, urls: readonly string[]): void {
  if (urls.length === 0) {
    registrados.delete(pathname);
  } else {
    registrados.set(pathname, urls);
  }
}

/**
 * Obtiene los assets críticos registrados dinámicamente para la ruta indicada.
 */
export function getRegisteredRouteAssets(pathname: string): readonly string[] {
  return registrados.get(pathname) ?? NADA;
}

/**
 * Registra los assets secundarios de una ruta para precargarlos en segundo plano sin bloquear el loader.
 */
export function registerDeferredRouteAssets(
  pathname: string,
  urls: readonly string[]
): void {
  if (urls.length === 0) {
    diferidosRegistrados.delete(pathname);
  } else {
    diferidosRegistrados.set(pathname, urls);
  }
}

/**
 * Obtiene los assets diferidos registrados dinámicamente para la ruta indicada.
 */
export function getRegisteredDeferredRouteAssets(
  pathname: string
): readonly string[] {
  return diferidosRegistrados.get(pathname) ?? NADA;
}

/**
 * Limpia los assets registrados de una ruta concreta (al desmontar el registrador) o todo el store.
 */
export function clearRegisteredRouteAssets(pathname?: string): void {
  if (pathname === undefined) {
    registrados.clear();
    diferidosRegistrados.clear();
  } else {
    registrados.delete(pathname);
    diferidosRegistrados.delete(pathname);
  }
}
