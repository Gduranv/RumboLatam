import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { act, cleanup, render } from "@testing-library/react";
import { RouteGate } from "./RouteGate";
import { DEFAULT_VISUAL_TIMEOUT_MS } from "@/lib/loading/visual-ready";

const mocks = vi.hoisted(() => ({ pathname: "/" }));
vi.mock("next/navigation", () => ({ usePathname: () => mocks.pathname }));

const ORANGE = "rgb(255, 114, 35)";

/**
 * jsdom no descarga imágenes, así que el `Image` del gate se dobla para que cada
 * instancia resuelva en el microtask siguiente: si se resolviera en el
 * constructor, gateAssets aún no habría registrado los handlers.
 */
class FakeImage {
  onload: (() => void) | null = null;
  onerror: (() => void) | null = null;
  decoding = "";
  decode = () => Promise.resolve();
  private value = "";

  constructor() {
    queueMicrotask(() => this.onload?.());
  }

  set src(next: string) {
    this.value = next;
  }

  get src() {
    return this.value;
  }
}

let originalImage: typeof Image;
let pending: HTMLImageElement[] = [];

/**
 * Imagen de la página que sigue pendiente de cargar. Va fuera del overlay, que
 * es lo que el gate excluye de la cuenta.
 */
function addPendingImage() {
  const img = document.createElement("img");
  img.setAttribute("src", "/Paises/foto.jpg");
  Object.defineProperty(img, "complete", { value: false, configurable: true });
  Object.defineProperty(img, "naturalWidth", { value: 0, configurable: true });
  img.getBoundingClientRect = () =>
    ({ top: 50, bottom: 450, left: 0, right: 320, width: 320, height: 400 }) as DOMRect;
  document.body.appendChild(img);
  pending.push(img);
  return img;
}

beforeEach(() => {
  mocks.pathname = "/";
  pending = [];
  document.documentElement.removeAttribute("data-intro-seen");
  window.sessionStorage.clear();
  originalImage = globalThis.Image;
  globalThis.Image = FakeImage as unknown as typeof Image;
});

afterEach(() => {
  cleanup();
  for (const img of pending) img.remove();
  globalThis.Image = originalImage;
  vi.useRealTimers();
});

const overlay = () => document.querySelector("[data-intro-overlay]");

async function advance(ms: number) {
  await act(async () => {
    await vi.advanceTimersByTimeAsync(ms);
  });
}

/** Ciclo completo: dos frames, los chequeos, el mínimo y el fundido. */
const FULL_CYCLE_MS = 1_500;

describe("RouteGate", () => {
  it("monta el loader en la primera visita", () => {
    vi.useFakeTimers();
    render(<RouteGate />);
    // El estado inicial es "visible" para que el HTML del servidor ya traiga el
    // overlay: una carga en frío no debe enseñar la página vacía un instante.
    expect(overlay()).not.toBeNull();
  });

  it("pinta el fondo de marca y el logo", () => {
    vi.useFakeTimers();
    const { container } = render(<RouteGate />);
    expect(container.querySelector('[role="status"]')).toHaveStyle({
      backgroundColor: ORANGE,
    });
    expect(
      container.querySelector('img[src="/Paises/LogoReducido.png"]')
    ).not.toBeNull();
  });

  it("lo retira cuando la página está lista", async () => {
    vi.useFakeTimers();
    render(<RouteGate />);
    expect(overlay()).not.toBeNull();

    await advance(FULL_CYCLE_MS);

    expect(overlay()).toBeNull();
  });

  it("vuelve a mostrarlo al navegar si la página nueva sigue cargando", async () => {
    vi.useFakeTimers();
    const { rerender } = render(<RouteGate />);
    await advance(FULL_CYCLE_MS);
    expect(overlay()).toBeNull();

    // Se llega a un país cuya foto aún no ha llegado: debe taparse.
    mocks.pathname = "/paises/venezuela";
    rerender(<RouteGate />);
    addPendingImage();

    await advance(FULL_CYCLE_MS);
    expect(overlay()).not.toBeNull();
  });

  it("no lo monta al volver a una página que ya está lista", async () => {
    vi.useFakeTimers();
    const { rerender } = render(<RouteGate />);
    await advance(FULL_CYCLE_MS);
    expect(overlay()).toBeNull();

    // Sin nada pendiente no hay nada que esperar: el loader no debe aparecer ni
    // un frame, que es el "atrás" del navegador.
    mocks.pathname = "/paises/venezuela";
    rerender(<RouteGate />);

    await advance(FULL_CYCLE_MS);
    expect(overlay()).toBeNull();
  });

  it("lo retira cuando por fin cargan las imágenes de la ruta nueva", async () => {
    vi.useFakeTimers();
    const { rerender } = render(<RouteGate />);
    await advance(FULL_CYCLE_MS);

    mocks.pathname = "/paises/venezuela";
    const img = addPendingImage();
    rerender(<RouteGate />);
    await advance(600);
    expect(overlay()).not.toBeNull();

    Object.defineProperty(img, "complete", { value: true, configurable: true });
    Object.defineProperty(img, "naturalWidth", { value: 800, configurable: true });

    await advance(FULL_CYCLE_MS);
    expect(overlay()).toBeNull();
  });

  it("se rinde por el timeout aunque los assets no lleguen nunca", async () => {
    // Ni las imágenes del gate ni las de la página resuelven nunca: sólo puede
    // ganar el tope de seguridad.
    globalThis.Image = class {
      onload: (() => void) | null = null;
      onerror: (() => void) | null = null;
      set src(_v: string) {}
      get src() {
        return "";
      }
    } as unknown as typeof Image;

    vi.useFakeTimers();
    render(<RouteGate />);
    addPendingImage();
    expect(overlay()).not.toBeNull();

    await advance(DEFAULT_VISUAL_TIMEOUT_MS + 1_500);

    expect(overlay()).toBeNull();
  });

  it("deja de anunciarse a lectores de pantalla cuando empieza el fundido", async () => {
    vi.useFakeTimers();
    render(<RouteGate />);
    // Al montar sigue siendo contenido real...
    expect(overlay()).toHaveAttribute("aria-hidden", "false");

    // ...y al entrar en "exiting" se mantiene montado para el fundido, pero
    // fuera del árbol de accesibilidad. Se busca en pasos porque el momento
    // exacto depende de cuándo resuelven los frames, y lo que importa es que
    // el fundido ocurra antes del desmontaje.
    let empezoElFundido = false;
    for (let i = 0; i < 20 && !empezoElFundido; i++) {
      await advance(100);
      if (overlay()?.getAttribute("aria-hidden") === "true") {
        empezoElFundido = true;
      }
    }

    expect(empezoElFundido).toBe(true);

    await advance(FULL_CYCLE_MS);
    expect(overlay()).toBeNull();
  });
});
