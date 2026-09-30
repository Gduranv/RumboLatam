/**
 * "¿Se puede pintar esta página?" — resuelve cuando todo lo que el usuario
 * perceives está en su sitio: las imágenes que ve, las fuentes y un frame
 * pintado por el navegador.
 *
 * Por qué el DOM y no una lista de assets: la lista fija sólo funciona en las
 * rutas cuyo contenido se conoce de antemano. En `/paises/[id]`,
 * `/paises/[id]/curiosidades` y `/destinos/[id]` el contenido lo resuelve el
 * servidor, así que la lista llega vacía y el gate se retiraba a los 464 ms
 * con la página aún en blanco. Lo que sí se puede mirar en todas las rutas es
 * el DOM que acaba de montar el router.
 *
 * Se complementan las dos cosas: el manifiesto sigue cubriendo los assets
 * críticos aunque estén fuera de pantalla, y aquí se revisa lo visible.
 */

/**
 * Tope de seguridad. Si un asset se queda colgado, el loader no puede quedarse
 * arriba para siempre: se retira igualmente y se ve la página con el hueco que
 * haga falta, que es preferible a una pantalla de carga eterna.
 */
export const DEFAULT_VISUAL_TIMEOUT_MS = 10_000;

/** Chequeos seguidos sin pendientes antes de dar la página por lista. */
const DEFAULT_STABLE_CHECKS = 2;
const DEFAULT_POLL_MS = 80;

/**
 * Se cuenta como "en pantalla" lo que está a este borde **por debajo**, para que
 * el appear sea continuo. En horizontal no se aplica margen: ver
 * `isNearViewport`.
 */
const DEFAULT_MARGIN_PX = 400;

const OVERLAY_SELECTOR = "[data-intro-overlay]";

export interface VisualReadyOptions {
  signal?: AbortSignal;
  /** Default 10 s. */
  timeoutMs?: number;
  /** Default 400 px. */
  marginPx?: number;
  pollMs?: number;
  /** Default 2. */
  stableChecks?: number;
}

function viewportWidth(): number {
  return window.innerWidth || document.documentElement.clientWidth || 0;
}

function viewportHeight(): number {
  return window.innerHeight || document.documentElement.clientHeight || 0;
}

function isNearViewport(img: HTMLImageElement, margin: number): boolean {
  const rect = img.getBoundingClientRect();
  // Sin caja todavía significa que React aún no lo ha colocado: no se cuenta.
  if (rect.width === 0 && rect.height === 0) return false;
  return (
    rect.bottom > -margin &&
    rect.top < viewportHeight() + margin &&
    // El margen es sólo vertical, y a propósito. Los carruseles horizontales
    // aparcan el resto de slides fuera de pantalla, a un lado; el navegador no
    // descarga una imagen `loading="lazy"` hasta que entra en el viewport, así
    // que una slide aparcada se queda con `currentSrc` vacío y `complete` en
    // false para siempre. Si el margen horizontal la contara como "a la vista",
    // el loader la esperaría hasta el tope de seguridad: entrar a un destino
    // tardaba 11 s en móvil en lugar de 1,3 s en escritorio, con la página
    // realmente lista en 0,6 s.
    rect.right > 0 &&
    rect.left < viewportWidth()
  );
}

/**
 * Una imagen bloquea la pantalla si está a la vista y todavía no ha terminado.
 *
 * Se quedan fuera tres casos a propósito:
 *
 *  - El logo del propio loader: si no, se esperaría a sí mismo y nunca saldría.
 *  - Lo marcado `fetchpriority="low"`: son los dos GIF decorativos (4.7 MB y
 *    6.3 MB). No son el LCP ni generan el hueco que el usuario nota, y en 4G
 *    esperar por ellos dejaría el loader más de 20 s.
 *  - Las que ya fallaron: una imagen rota queda `complete` con `naturalWidth` 0
 *    y no hay nada más que esperar por ella.
 */
function isBlocking(img: HTMLImageElement, margin: number): boolean {
  if (img.closest(OVERLAY_SELECTOR)) return false;
  if (img.complete) return false;
  if (typeof img.fetchPriority === "string" && img.fetchPriority === "low") return false;
  return isNearViewport(img, margin);
}

/** Chequeo puntual: true si no queda nada visible por cargar. */
export function isVisuallyReady(options: Pick<VisualReadyOptions, "marginPx"> = {}): boolean {
  if (typeof document === "undefined") return true;
  if (document.fonts?.status === "loading") return false;

  const margin = options.marginPx ?? DEFAULT_MARGIN_PX;
  const images = document.getElementsByTagName("img");
  for (let i = 0; i < images.length; i++) {
    if (isBlocking(images[i] as HTMLImageElement, margin)) return false;
  }
  return true;
}

/**
 * Espera a que la página esté lista para pintarse. Siempre resuelve: o llega el
 * momento, o se agota `timeoutMs`, o se aborta por `signal` (una navegación
 * nueva manda sobre la anterior).
 */
export function whenVisuallyReady(options: VisualReadyOptions = {}): Promise<void> {
  const {
    signal,
    timeoutMs = DEFAULT_VISUAL_TIMEOUT_MS,
    marginPx = DEFAULT_MARGIN_PX,
    pollMs = DEFAULT_POLL_MS,
    stableChecks = DEFAULT_STABLE_CHECKS,
  } = options;

  if (typeof document === "undefined" || signal?.aborted) return Promise.resolve();

  return new Promise<void>((resolve) => {
    let stable = 0;
    let settled = false;
    let firstFrame = 0;
    let secondFrame = 0;
    let poll: ReturnType<typeof setInterval> | undefined;

    const finish = () => {
      if (settled) return;
      settled = true;
      cancelAnimationFrame(firstFrame);
      cancelAnimationFrame(secondFrame);
      if (poll) clearInterval(poll);
      if (failsafe) clearTimeout(failsafe);
      signal?.removeEventListener("abort", finish);
      resolve();
    };

    const check = () => {
      if (signal?.aborted) return finish();
      if (isVisuallyReady({ marginPx })) {
        stable += 1;
        if (stable >= stableChecks) return finish();
      } else {
        stable = 0;
      }
    };

    // Dos frames antes del primer chequeo: hay que darle al router a pintar el
    // DOM nuevo, o se mediría la página anterior y el loader se retiraría antes
    // de que apareciera la imagen que falta.
    firstFrame = requestAnimationFrame(() => {
      secondFrame = requestAnimationFrame(() => {
        if (settled) return;
        poll = setInterval(check, pollMs);
        check();
      });
    });

    // El abort se registra al final: hasta aquí no puede ejecutarse `finish`,
    // así que el `const` del tope ya está inicializado cuando se le escuche.
    const failsafe = setTimeout(finish, timeoutMs);
    (failsafe as unknown as { unref?: () => void }).unref?.();
    signal?.addEventListener("abort", finish);
  });
}
