/**
 * Gate de carga: espera a que un conjunto de assets esté realmente *decodificable*
 * antes de quitar la pantalla de introducción.
 *
 * Diferencias frente al ClientPreloader que este módulo sustituye (eliminado):
 *
 *  - `img.decode()` en vez de `onload`. onload se dispara al terminar la
 *    descarga, pero la imagen todavía no está decodificada: al quitarla aparece
 *    un frame en blanco. decode() resuelve cuando el bitmap está listo para pintar.
 *  - Un cap duro en vez de un timeout de 7 s que bloqueaba la app entera.
 *  - `Promise.allSettled` en vez de contar `onload` a mano: un 404 no cuelga nada.
 *  - Se espera también `document.fonts.ready`, que antes se ignoraba por completo
 *    y provocaba un salto de tipografía al revealed el contenido.
 */

export interface GateOptions {
  /** Tope de espera total. Default 2500 ms. */
  timeoutMs?: number;
  /** Permite cancelar (p. ej. desmontaje del gate). */
  signal?: AbortSignal;
}

export const DEFAULT_GATE_TIMEOUT_MS = 2500;

/**
 * URLs por las que el gate ya pasó en esta sesión: descargadas y decodificadas,
 * o fallidas (un 404 tampoco tiene nada más que esperar). Lo usa RouteGate para
 * que el "atrás" a una ruta ya gateada no vuelva a montar el loader.
 */
const gated = new Set<string>();

/**
 * true si el gate ya resolvió estas urls esta sesión: no hay nada que volver
 * a esperar por ellas.
 */
export function areAssetsLoaded(urls: readonly string[]): boolean {
  return urls.every((url) => gated.has(url));
}

/**
 * Descarga y decodifica una imagen. Nunca rechaza: un 404 o un fallo de red
 * resuelven igual, porque bloquear la navegación por un asset roto es peor que
 * mostrarlo roto.
 */
function loadImage(url: string): Promise<void> {
  return new Promise<void>((resolve) => {
    const img = new Image();
    let settled = false;
    const done = () => {
      if (settled) return;
      settled = true;
      // También un 404 queda registrado: el gate ya hizo todo lo que podía
      // hacer por esta url, y no tiene sentido esperarla de nuevo.
      gated.add(url);
      resolve();
    };

    img.decoding = "async";
    // onload/onerror cubren navegadores sin decode() (Safari < 15.4).
    img.onload = done;
    img.onerror = done;
    img.src = url;

    if (typeof img.decode === "function") {
      img.decode().then(done, done);
    }
  });
}

/** Espera a que las fuentes web estén disponibles. Nunca rechaza. */
function fontsReady(): Promise<void> {
  if (typeof document === "undefined" || !document.fonts) return Promise.resolve();
  return document.fonts.ready.then(
    () => undefined,
    () => undefined
  );
}

/**
 * Espera a que terminen los assets, las fuentes, o que se agote el timeout,
 * lo que ocurra primero. Siempre resuelve.
 */
export async function gateAssets(
  urls: readonly string[],
  options: GateOptions = {}
): Promise<void> {
  const { timeoutMs = DEFAULT_GATE_TIMEOUT_MS, signal } = options;

  if (signal?.aborted) return;

  const work = Promise.allSettled([
    ...urls.map(loadImage),
    fontsReady(),
  ]);

  const timeout = new Promise<void>((resolve) => {
    const id = setTimeout(resolve, timeoutMs);
    // No retener el event loop en Node/tests por un timer vivo.
    (id as unknown as { unref?: () => void }).unref?.();
    signal?.addEventListener("abort", () => {
      clearTimeout(id);
      resolve();
    });
  });

  await Promise.race([work, timeout]);
}

/**
 * Pide los assets diferidos sin esperarlos. Se hace en el hueco de inactividad
 * para que compitan por ancho de banda con las fuentes y el JS, no con el LCP.
 */
export function warmAssets(urls: readonly string[]): void {
  if (typeof window === "undefined" || urls.length === 0) return;

  const run = () => {
    for (const url of urls) {
      const img = new Image();
      img.decoding = "async";
      img.src = url;
    }
  };

  if ("requestIdleCallback" in window) {
    (window as Window & { requestIdleCallback: (cb: () => void, o?: { timeout: number }) => number })
      .requestIdleCallback(run, { timeout: 2000 });
  } else {
    setTimeout(run, 200);
  }
}
