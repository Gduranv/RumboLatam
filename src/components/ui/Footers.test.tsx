import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import DesktopNosotras from "@/components/desktop/DesktopNosotras";
import MobileNosotras from "@/components/mobile/MobileNosotras";
import MobileCountry from "@/components/mobile/MobileCountry";
import DesktopCountry from "@/components/desktop/DesktopCountry";
import MobileDestino from "@/components/mobile/MobileDestino";
import DesktopDestino from "@/components/desktop/DesktopDestino";

const mocks = vi.hoisted(() => ({ pathname: "/nosotras" }));
vi.mock("next/navigation", () => ({
  usePathname: () => mocks.pathname,
  useRouter: () => ({ back: vi.fn(), push: vi.fn() }),
}));

afterEach(() => {
  cleanup();
});

describe("Footers en todas las páginas de Rumbo Latam", () => {
  it("DesktopNosotras renderiza el footer institucional con año 2026 y logo URBE", () => {
    const { container } = render(<DesktopNosotras />);
    const footer = container.querySelector("footer");
    expect(footer).not.toBeNull();
    expect(footer).toHaveTextContent("© 2026 Rumbo Latam.");
    expect(footer).toHaveTextContent("Trabajo Especial de Grado - URBE.");
    expect(footer).toHaveTextContent("Todos los derechos reservados.");
    expect(screen.getByAltText("Logo URBE")).toBeInTheDocument();
  });

  it("MobileNosotras renderiza el footer institucional con año 2026 y logo URBE", () => {
    const { container } = render(<MobileNosotras />);
    const footer = container.querySelector("footer");
    expect(footer).not.toBeNull();
    expect(footer).toHaveTextContent("© 2026 Rumbo Latam.");
    expect(footer).toHaveTextContent("Trabajo Especial de Grado - URBE.");
    expect(footer).toHaveTextContent("Todos los derechos reservados.");
    expect(screen.getByAltText("Logo URBE")).toBeInTheDocument();
  });

  it("MobileCountry renderiza de forma correcta el año 2026 (sin 2024)", () => {
    const { container } = render(
      <MobileCountry
        countryId="venezuela"
        dynamicDestinationsResources={{}}
        dynamicHeroImage="/Paises/Venezuela/portada/FotoVenezuela.png"
        dynamicGiaImage="/Paises/Venezuela/gia.png"
        dynamicGiaImageMovil="/Paises/Venezuela/giamovil.png"
      />
    );
    const footer = container.querySelector("footer");
    expect(footer).not.toBeNull();
    expect(footer).toHaveTextContent("© 2026 Rumbo Latam.");
    expect(footer).not.toHaveTextContent("2024");
  });

  it("DesktopCountry renderiza el footer semántico con año 2026", () => {
    const { container } = render(
      <DesktopCountry
        countryId="venezuela"
        dynamicDestinationsResources={{}}
        dynamicHeroImage="/Paises/Venezuela/portada/FotoVenezuela.png"
        dynamicGiaImage="/Paises/Venezuela/gia.png"
      />
    );
    const footer = container.querySelector("footer");
    expect(footer).not.toBeNull();
    expect(footer).toHaveTextContent("© 2026 Rumbo Latam.");
  });

  it("MobileDestino y DesktopDestino renderizan footer con año 2026", () => {
    const mockResources = {
      portadaImage: "/Paises/Venezuela/canaima/portada.webp",
      galeriaImages: [],
      animalesImages: [],
      hospedajeImages: [],
      actividadesImages: [],
    };

    const { container: mobileContainer } = render(
      <MobileDestino destinoId="canaima" dynamicResources={mockResources} />
    );
    expect(mobileContainer.querySelector("footer")).toHaveTextContent("© 2026 Rumbo Latam.");

    cleanup();

    const { container: desktopContainer } = render(
      <DesktopDestino destinoId="canaima" dynamicResources={mockResources} />
    );
    expect(desktopContainer.querySelector("footer")).toHaveTextContent("© 2026 Rumbo Latam.");
  });
});
