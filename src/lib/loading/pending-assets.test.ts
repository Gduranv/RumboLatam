import { afterEach, describe, expect, it } from "vitest";
import {
  clearRegisteredRouteAssets,
  getRegisteredRouteAssets,
  registerRouteAssets,
} from "./pending-assets";

afterEach(() => clearRegisteredRouteAssets());

describe("pending-assets", () => {
  it("devuelve las urls registradas para una ruta", () => {
    registerRouteAssets("/paises/mexico", ["/a.webp", "/b.webp"]);
    expect(getRegisteredRouteAssets("/paises/mexico")).toEqual(["/a.webp", "/b.webp"]);
  });

  it("devuelven lista vacía para una ruta sin registrar", () => {
    expect(getRegisteredRouteAssets("/paises/desconocido")).toEqual([]);
  });

  it("no mezcla rutas entre sí", () => {
    registerRouteAssets("/paises/mexico", ["/a.webp"]);
    registerRouteAssets("/paises/argentina", ["/b.webp"]);
    expect(getRegisteredRouteAssets("/paises/mexico")).toEqual(["/a.webp"]);
    expect(getRegisteredRouteAssets("/paises/argentina")).toEqual(["/b.webp"]);
  });

  it("la última registrada gana para la misma ruta", () => {
    registerRouteAssets("/paises/mexico", ["/a.webp"]);
    registerRouteAssets("/paises/mexico", ["/b.webp"]);
    expect(getRegisteredRouteAssets("/paises/mexico")).toEqual(["/b.webp"]);
  });

  it("registrar una lista vacía equivale a no registrar nada", () => {
    registerRouteAssets("/paises/mexico", ["/a.webp"]);
    registerRouteAssets("/paises/mexico", []);
    expect(getRegisteredRouteAssets("/paises/mexico")).toEqual([]);
  });

  it("limpia una ruta concreta sin tocar las demás", () => {
    registerRouteAssets("/paises/mexico", ["/a.webp"]);
    registerRouteAssets("/paises/argentina", ["/b.webp"]);
    clearRegisteredRouteAssets("/paises/mexico");
    expect(getRegisteredRouteAssets("/paises/mexico")).toEqual([]);
    expect(getRegisteredRouteAssets("/paises/argentina")).toEqual(["/b.webp"]);
  });

  it("limpia todo si no se pasa ruta", () => {
    registerRouteAssets("/paises/mexico", ["/a.webp"]);
    clearRegisteredRouteAssets();
    expect(getRegisteredRouteAssets("/paises/mexico")).toEqual([]);
  });
});
