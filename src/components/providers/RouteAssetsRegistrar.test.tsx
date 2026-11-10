import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, render } from "@testing-library/react";
import { RouteAssetsRegistrar } from "./RouteAssetsRegistrar";
import {
  clearRegisteredRouteAssets,
  getRegisteredDeferredRouteAssets,
  getRegisteredRouteAssets,
} from "@/lib/loading/pending-assets";

const mocks = vi.hoisted(() => ({ pathname: "/paises/mexico" }));
vi.mock("next/navigation", () => ({ usePathname: () => mocks.pathname }));

afterEach(() => {
  cleanup();
  mocks.pathname = "/paises/mexico";
  clearRegisteredRouteAssets();
});

describe("RouteAssetsRegistrar", () => {
  it("registra los assets de la ruta al montar y los limpia al desmontar", () => {
    const { unmount } = render(
      <RouteAssetsRegistrar
        urls={["/Paises/mexico/portada.webp"]}
        deferredUrls={["/Paises/mexico/galeria-1.webp"]}
      />
    );
    expect(getRegisteredRouteAssets("/paises/mexico")).toEqual([
      "/Paises/mexico/portada.webp",
    ]);
    expect(getRegisteredDeferredRouteAssets("/paises/mexico")).toEqual([
      "/Paises/mexico/galeria-1.webp",
    ]);

    unmount();
    expect(getRegisteredRouteAssets("/paises/mexico")).toEqual([]);
    expect(getRegisteredDeferredRouteAssets("/paises/mexico")).toEqual([]);
  });

  it("registra bajo la ruta actual, no bajo una fija", () => {
    mocks.pathname = "/paises/argentina";
    render(<RouteAssetsRegistrar urls={["/Paises/argentina/portada.webp"]} />);
    expect(getRegisteredRouteAssets("/paises/argentina")).toEqual([
      "/Paises/argentina/portada.webp",
    ]);
  });

  it("no pinta nada", () => {
    const { container } = render(<RouteAssetsRegistrar urls={[]} />);
    expect(container).toBeEmptyDOMElement();
  });
});
