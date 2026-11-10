import { afterEach, beforeEach, describe, expect, it, vi, type Mock } from "vitest";
import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import { RouteGate } from "./RouteGate";
import { DEFAULT_VISUAL_TIMEOUT_MS } from "@/lib/loading/visual-ready";
import { INTRO_EXIT_MS } from "@/components/ui/LoadingScreen";
import { markIntroSeen } from "@/lib/loading/intro-session";
import {
  clearRegisteredRouteAssets,
  registerRouteAssets,
} from "@/lib/loading/pending-assets";

const mocks = vi.hoisted(() => ({ pathname: "/" }));
vi.mock("next/navigation", () => ({ usePathname: () => mocks.pathname }));

const ORANGE = "rgb(255, 114, 35)";

/**
 * jsdom no descarga imágenes, así que el `Image` del gate se dobla para que cada
 * instancia resuelva en el microtask siguiente: si se resolviera en el
 * constructor, gateAssets aún no habría registrado los handlers. Las urls de
 * `bloqueadas` no terminan hasta que el test las suelta a mano.
 */
class FakeImage {
  static instances: FakeImage[] = [];
  static bloqueadas = new Set<string>();

  onload: (() => void) | null = null;
  onerror: (() => void) | null = null;
  decoding = "";
  // Una url bloqueada no termina ni por descarga ni por decodificación.
  decode = () =>
    FakeImage.bloqueadas.has(this.src)
      ? new Promise<void>(() => {})
      : Promise.resolve();
  private value = "";

  constructor() {
    FakeImage.instances.push(this);
    queueMicrotask(() => {
      if (!FakeImage.bloqueadas.has(this.src)) this.onload?.();
    });
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
  window.sessionStorage.clear();
  // El intro se decide en el cliente por sesión: los tests que no lo prueban
  // lo dan por visto para que no aparezca. Los que lo prueban lo limpian.
  markIntroSeen();
  FakeImage.instances = [];
  FakeImage.bloqueadas.clear();
  clearRegisteredRouteAssets();
  originalImage = globalThis.Image;
  globalThis.Image = FakeImage as unknown as typeof Image;
});

afterEach(() => {
  cleanup();
  for (const img of pending) img.remove();
  globalThis.Image = originalImage;
  vi.useRealTimers();
  vi.restoreAllMocks();
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

  it("muestra inmediatamente el loader al hacer clic en un enlace hacia una ruta no visitada", async () => {
    vi.useFakeTimers();
    render(<RouteGate />);
    await advance(FULL_CYCLE_MS);
    expect(overlay()).toBeNull();

    const link = document.createElement("a");
    link.setAttribute("href", "/nosotras");
    document.body.appendChild(link);

    try {
      fireEvent.click(link);
      expect(overlay()).not.toBeNull();
    } finally {
      link.remove();
    }
  });
});

const intro = () => document.querySelector("[data-intro-video]");

describe("intro de video", () => {
  let playSpy: Mock;
  let playOriginal: unknown;

  beforeEach(() => {
    // Esta sesión no lo ha visto todavía.
    window.sessionStorage.clear();
    // jsdom no reproduce vídeo: play() se dobla para que resuelva siempre.
    playSpy = vi.fn().mockResolvedValue(undefined);
    playOriginal = HTMLMediaElement.prototype.play;
    HTMLMediaElement.prototype.play = playSpy as unknown as typeof HTMLMediaElement.prototype.play;
  });

  afterEach(() => {
    if (playOriginal === undefined) {
      Reflect.deleteProperty(HTMLMediaElement.prototype, "play");
    } else {
      HTMLMediaElement.prototype.play = playOriginal as typeof HTMLMediaElement.prototype.play;
    }
  });

  it("se monta detrás del loader y arranca cuando el loader se retira", async () => {
    vi.useFakeTimers();
    render(<RouteGate />);

    // Montado desde la primera carga, detrás del loader, para que el navegador
    // lo descargue mientras la página se prepara; pero todavía no reproduce.
    expect(overlay()).not.toBeNull();
    expect(intro()).not.toBeNull();
    expect(playSpy).not.toHaveBeenCalled();

    await advance(FULL_CYCLE_MS);

    expect(overlay()).toBeNull();
    expect(intro()).not.toBeNull();
    expect(playSpy).toHaveBeenCalledTimes(1);
  });

  it("se va cuando el video termina", async () => {
    vi.useFakeTimers();
    render(<RouteGate />);
    await advance(FULL_CYCLE_MS);

    fireEvent(intro()!.querySelector("video")!, new Event("ended"));
    // Sigue montado mientras dura el fundido de salida...
    expect(intro()).not.toBeNull();

    await advance(INTRO_EXIT_MS + 100);
    expect(intro()).toBeNull();
  });

  it("lo salta el botón", async () => {
    vi.useFakeTimers();
    render(<RouteGate />);
    await advance(FULL_CYCLE_MS);

    fireEvent.click(screen.getByRole("button", { name: "Saltar" }));

    await advance(INTRO_EXIT_MS + 100);
    expect(intro()).toBeNull();
  });

  it("se omite si el usuario pide menos movimiento", async () => {
    vi.useFakeTimers();
    // Este jsdom no define matchMedia, así que se instala a mano y se restaura.
    const original = window.matchMedia;
    window.matchMedia = ((query: string) =>
      ({ matches: query.includes("reduce"), media: query }) as MediaQueryList) as typeof window.matchMedia;

    try {
      render(<RouteGate />);
      await advance(FULL_CYCLE_MS);

      // Sin intro no hay nada que esperar tras el loader: se va directo a la
      // página.
      expect(intro()).toBeNull();
      expect(overlay()).toBeNull();
    } finally {
      window.matchMedia = original;
    }
  });

  it("no se repite en la misma sesión", async () => {
    vi.useFakeTimers();
    const { unmount } = render(<RouteGate />);
    await advance(FULL_CYCLE_MS);

    fireEvent(intro()!.querySelector("video")!, new Event("ended"));
    await advance(INTRO_EXIT_MS + 100);
    expect(intro()).toBeNull();

    // Un reload de la misma pestaña: sessionStorage sigue marcado y el intro
    // no vuelve a aparecer.
    unmount();
    render(<RouteGate />);
    await advance(FULL_CYCLE_MS);
    expect(intro()).toBeNull();
  });

  it("se corta si el usuario navega antes de que termine", async () => {
    vi.useFakeTimers();
    const { rerender } = render(<RouteGate />);
    await advance(FULL_CYCLE_MS);
    expect(intro()).not.toBeNull();

    mocks.pathname = "/paises/mexico";
    rerender(<RouteGate />);
    await advance(FULL_CYCLE_MS);

    expect(intro()).toBeNull();
  });
});

describe("los assets que registra la página", () => {
  it("espera los registrados aunque el DOM parezca listo", async () => {
    vi.useFakeTimers();
    const url = "/Paises/mexico/portada-bloqueada.webp";
    registerRouteAssets("/paises/mexico", [url]);
    FakeImage.bloqueadas.add(url);
    mocks.pathname = "/paises/mexico";
    render(<RouteGate />);

    await advance(FULL_CYCLE_MS);
    // El DOM no tiene ninguna imagen pendiente (las portadas están fuera de
    // pantalla), pero la que la página registró no ha llegado: el loader no
    // puede retirarse todavía.
    expect(overlay()).not.toBeNull();

    // Llega por fin → se retira.
    FakeImage.bloqueadas.delete(url);
    for (const img of FakeImage.instances) img.onload?.();

    await advance(FULL_CYCLE_MS);
    expect(overlay()).toBeNull();
  });

  it("no vuelve a esperarlos al volver a un país ya cargado", async () => {
    vi.useFakeTimers();
    const url = "/Paises/mexico/portada-lista.webp";
    registerRouteAssets("/paises/mexico", [url]);
    mocks.pathname = "/paises/mexico";
    const { rerender } = render(<RouteGate />);
    await advance(FULL_CYCLE_MS);
    expect(overlay()).toBeNull();

    // Se va a casa y vuelve: los assets ya pasaron por el gate y el DOM está
    // limpio, así que no debe aparecer ni un frame de loader.
    mocks.pathname = "/";
    rerender(<RouteGate />);
    await advance(FULL_CYCLE_MS);

    mocks.pathname = "/paises/mexico";
    rerender(<RouteGate />);
    await advance(FULL_CYCLE_MS);
    expect(overlay()).toBeNull();
  });
});
