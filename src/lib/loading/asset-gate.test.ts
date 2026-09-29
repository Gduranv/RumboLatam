import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { DEFAULT_GATE_TIMEOUT_MS, gateAssets, warmAssets } from "./asset-gate";

/**
 * jsdom no descarga imágenes ni dispara load/error, y tampoco implementa
 * decode() ni document.fonts. Este doble nos deja decidir exactamente cuándo
 * resuelve cada asset, que es justo lo que hay que verificar aquí.
 */
class FakeImage {
  static instances: FakeImage[] = [];
  static decodeSupported = true;

  onload: (() => void) | null = null;
  onerror: (() => void) | null = null;
  decoding = "";
  decode?: () => Promise<void>;

  private value = "";

  constructor() {
    FakeImage.instances.push(this);
  }

  get src(): string {
    return this.value;
  }

  set src(next: string) {
    this.value = next;
  }
}

/** Instala decode() según lo que el test quiere simular. */
function settleImages(kind: "load" | "error" = "load") {
  for (const img of FakeImage.instances) {
    if (FakeImage.decodeSupported) img.decode = () => Promise.resolve();
    else delete img.decode;

    if (kind === "load") img.onload?.();
    else img.onerror?.();
  }
}

let originalImage: typeof Image;

beforeEach(() => {
  FakeImage.instances = [];
  FakeImage.decodeSupported = true;
  originalImage = globalThis.Image;
  globalThis.Image = FakeImage as unknown as typeof Image;
});

afterEach(() => {
  globalThis.Image = originalImage;
  vi.useRealTimers();
});

describe("gateAssets", () => {
  it("resuelve cuando todos los assets terminan de decodificar", async () => {
    const pending = gateAssets(["/a.svg", "/b.png", "/c.png"]);
    settleImages("load");
    await expect(pending).resolves.toBeUndefined();
  });

  it("crea un Image por cada url, en orden y sin repetir", async () => {
    const pending = gateAssets(["/a.svg", "/b.png"]);
    expect(FakeImage.instances.map((i) => i.src)).toEqual(["/a.svg", "/b.png"]);
    settleImages("load");
    await pending;
  });

  it("no se cuelga si un asset da 404", async () => {
    const pending = gateAssets(["/roto.png"]);
    settleImages("error");
    await expect(pending).resolves.toBeUndefined();
  });

  it("funciona en navegadores sin decode() (Safari < 15.4)", async () => {
    FakeImage.decodeSupported = false;
    const pending = gateAssets(["/a.svg"]);
    settleImages("load");
    await expect(pending).resolves.toBeUndefined();
  });

  it("no resuelve antes de que un asset termine", async () => {
    const pending = gateAssets(["/a.svg"]);
    let settled = false;
    void pending.then(() => {
      settled = true;
    });
    await Promise.resolve();
    expect(settled).toBe(false);
    settleImages("load");
    await pending;
  });

  it("se rinde al agotarse el timeout aunque un asset nunca llegue", async () => {
    vi.useFakeTimers();
    let settled = false;
    const pending = gateAssets(["/lento-de-morir.png"], { timeoutMs: 100 }).then(
      () => {
        settled = true;
      }
    );

    await vi.advanceTimersByTimeAsync(99);
    expect(settled).toBe(false);

    await vi.advanceTimersByTimeAsync(1);
    expect(settled).toBe(true);
    await pending;
  });

  it("usa un cap corto de 2.5 s por defecto, no de 7 s", () => {
    expect(DEFAULT_GATE_TIMEOUT_MS).toBe(2500);
  });

  it("no espera a nada cuando la lista está vacía", async () => {
    await expect(gateAssets([])).resolves.toBeUndefined();
    expect(FakeImage.instances).toHaveLength(0);
  });

  it("respeta la cancelación por signal", async () => {
    vi.useFakeTimers();
    const controller = new AbortController();
    const pending = gateAssets(["/a.svg"], {
      signal: controller.signal,
      timeoutMs: 10_000,
    });
    controller.abort();
    await vi.advanceTimersByTimeAsync(0);
    await expect(pending).resolves.toBeUndefined();
  });

  it("resuelve de inmediato si ya viene abortado", async () => {
    const controller = new AbortController();
    controller.abort();
    await expect(
      gateAssets(["/a.svg"], { signal: controller.signal })
    ).resolves.toBeUndefined();
    expect(FakeImage.instances).toHaveLength(0);
  });
});

describe("warmAssets", () => {
  it("pide los assets diferidos sin esperar a que carguen", async () => {
    vi.useFakeTimers();
    warmAssets(["/GiaLight.gif", "/FondoHusoHorario/MAR.svg"]);
    // jsdom no tiene requestIdleCallback, así que cae al setTimeout de 200 ms.
    await vi.advanceTimersByTimeAsync(250);
    expect(FakeImage.instances.map((i) => i.src)).toEqual([
      "/GiaLight.gif",
      "/FondoHusoHorario/MAR.svg",
    ]);
  });

  it("no hace nada con la lista vacía", () => {
    vi.useFakeTimers();
    warmAssets([]);
    expect(FakeImage.instances).toHaveLength(0);
  });
});
