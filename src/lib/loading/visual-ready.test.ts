import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  DEFAULT_VISUAL_TIMEOUT_MS,
  isVisuallyReady,
  whenVisuallyReady,
} from "./visual-ready";

/**
 * jsdom no descarga imágenes ni calcula geometría, así que hay que falsear a
 * mano las dos cosas que mira el módulo: `complete` y el rectángulo. Sin esto
 * cualquier <img> tendría tamaño cero y el módulo daría la página por lista
 * siempre, que es justo lo que no se quiere probar.
 */
function addImage(
  opts: {
    complete?: boolean;
    naturalWidth?: number;
    fetchPriority?: string;
    top?: number;
    height?: number;
    left?: number;
    right?: number;
    insideOverlay?: boolean;
  } = {}
): HTMLImageElement {
  const {
    complete = false,
    naturalWidth = 120,
    fetchPriority,
    top = 0,
    height = 240,
    left = 0,
    right = 320,
    insideOverlay = false,
  } = opts;

  let host = document.body;
  if (insideOverlay) {
    let overlay = document.querySelector<HTMLElement>("[data-intro-overlay]");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.setAttribute("data-intro-overlay", "");
      document.body.appendChild(overlay);
    }
    host = overlay;
  }

  const img = document.createElement("img");
  img.setAttribute("src", "/imagen-de-prueba.png");
  Object.defineProperty(img, "complete", { value: complete, configurable: true });
  Object.defineProperty(img, "naturalWidth", {
    value: complete ? naturalWidth : 0,
    configurable: true,
  });
  if (fetchPriority !== undefined) {
    Object.defineProperty(img, "fetchPriority", { value: fetchPriority, configurable: true });
  }
  img.getBoundingClientRect = () =>
    ({ top, bottom: top + height, left, right, width: right - left, height }) as DOMRect;

  host.appendChild(img);
  return img;
}

function finish(img: HTMLImageElement) {
  Object.defineProperty(img, "complete", { value: true, configurable: true });
  Object.defineProperty(img, "naturalWidth", { value: 120, configurable: true });
}

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

beforeEach(() => {
  document.body.innerHTML = "";
  // jsdom sólo expone requestAnimationFrame con pretendToBeVisual; si no está,
  // el módulo se quedaría esperando un frame que nunca llega.
  if (typeof requestAnimationFrame !== "function") {
    vi.stubGlobal("requestAnimationFrame", (cb: FrameRequestCallback) =>
      setTimeout(() => cb(0), 0) as unknown as number
    );
    vi.stubGlobal("cancelAnimationFrame", (id: number) => clearTimeout(id));
  }
});

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("isVisuallyReady", () => {
  it("da la página por lista cuando no hay imágenes", () => {
    expect(isVisuallyReady()).toBe(true);
  });

  it("no está lista con una imagen visible sin terminar", () => {
    addImage({ top: 100 });
    expect(isVisuallyReady()).toBe(false);
  });

  it("ignora lo que queda fuera de pantalla", () => {
    addImage({ top: 20_000 });
    expect(isVisuallyReady()).toBe(true);
  });

  it("cuenta lo que está justo por debajo del borde", () => {
    addImage({ top: 700, height: 200 });
    expect(isVisuallyReady()).toBe(false);
  });

  it("ignora las slides aparcadas a un lado por un carrusel horizontal", () => {
    // El bug real: en el carrusel del "Manual del viajero" las cards siguientes
    // quedan a la derecha del viewport y el navegador no las descarga hasta que
    // el usuario desliza, así que nunca terminan. Con margen horizontal se
    // contaban como pendientes y el loader sólo se retiraba por el tope de
    // seguridad: 11 s en móvil en lugar de 1,3 s en escritorio.
    addImage({ top: 100, left: 1500, right: 1820 });
    expect(isVisuallyReady()).toBe(true);
  });

  it("sigue esperando por la slide que sí está en pantalla", () => {
    addImage({ top: 100, left: 20, right: 340 });
    expect(isVisuallyReady()).toBe(false);
  });

  it("ignora lo marcado con fetchpriority=low", () => {
    // Los dos GIF decorativos: si contaran, el loader se quedaría 20 s en 4G.
    addImage({ top: 100, fetchPriority: "low" });
    expect(isVisuallyReady()).toBe(true);
  });

  it("ignora el logo del propio loader", () => {
    addImage({ top: 100, insideOverlay: true });
    expect(isVisuallyReady()).toBe(true);
  });

  it("no espera por una imagen que falló", () => {
    addImage({ complete: true, naturalWidth: 0, top: 100 });
    expect(isVisuallyReady()).toBe(true);
  });

  it("espera mientras quede cualquiera pendiente", () => {
    addImage({ top: 100, fetchPriority: "low" });
    addImage({ top: 200 });
    expect(isVisuallyReady()).toBe(false);
  });
});

describe("whenVisuallyReady", () => {
  it("resuelve en cuanto termina la última imagen visible", async () => {
    const img = addImage({ top: 100 });
    let listo = false;
    const promesa = whenVisuallyReady({ pollMs: 5, stableChecks: 1 }).then(() => {
      listo = true;
    });

    await wait(60);
    expect(listo).toBe(false);

    finish(img);
    await promesa;
    expect(listo).toBe(true);
  });

  it("exige varios chequeos seguidos para no retirarse antes de tiempo", async () => {
    // Reproduce el fallo real: la imagen aún no está en el DOM cuando se mira,
    // y sin esta exigencia el loader se iba antes de que apareciera.
    addImage({ top: 100 });
    let listo = false;
    const promesa = whenVisuallyReady({ pollMs: 5, stableChecks: 3 }).then(() => {
      listo = true;
    });

    await wait(30);
    expect(listo).toBe(false);

    document.querySelector("img")?.remove();
    await promesa;
    expect(listo).toBe(true);
  });

  it("se rinde con el tope de seguridad si nada carga", async () => {
    addImage({ top: 100 });
    await expect(
      whenVisuallyReady({ pollMs: 5, timeoutMs: 60 })
    ).resolves.toBeUndefined();
  });

  it("se cancela al abortar el signal", async () => {
    addImage({ top: 100 });
    const controller = new AbortController();
    const promesa = whenVisuallyReady({ pollMs: 5, signal: controller.signal });
    controller.abort();
    await expect(promesa).resolves.toBeUndefined();
  });

  it("resuelve de inmediato si ya venía abortado", async () => {
    addImage({ top: 100 });
    const controller = new AbortController();
    controller.abort();
    await expect(
      whenVisuallyReady({ signal: controller.signal })
    ).resolves.toBeUndefined();
  });

  it("tiene un tope por defecto holgado para no atrapar al usuario", () => {
    expect(DEFAULT_VISUAL_TIMEOUT_MS).toBe(10_000);
  });
});
