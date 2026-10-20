/**
 * Control del intro de video: se muestra una vez por sesión de pestaña.
 *
 * `sessionStorage` sobrevive a los reloads pero no a una pestaña nueva, que es
 * justo el comportamiento esperado de un intro de marca: cada visitante nuevo
 * lo ve, y nadie lo ve dos veces seguidas.
 */
const SEEN_KEY = "intro-seen";

export function introAlreadySeen(): boolean {
  try {
    return window.sessionStorage.getItem(SEEN_KEY) === "1";
  } catch {
    // Safari en modo privado lanza al tocar sessionStorage: se asume visto
    // para no arriesgar un intro que no se podría registrar como tal.
    return true;
  }
}

export function markIntroSeen(): void {
  try {
    window.sessionStorage.setItem(SEEN_KEY, "1");
  } catch {
    // Sin sessionStorage la próxima carga repetirá el intro: no es grave.
  }
}

/**
 * El intro es contenido en movimiento: quien pidió menos movimiento no debe
 * recibirlo. No es un capricho estético, es la diferencia entre poder usar la
 * web y no poderla usar.
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return false;
  }
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** ¿Toca intro en esta carga? Primera visita de la sesión y sin reduced-motion. */
export function shouldPlayIntro(): boolean {
  return !introAlreadySeen() && !prefersReducedMotion();
}
