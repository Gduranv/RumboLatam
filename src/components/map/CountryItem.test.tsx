import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import DestinationsCarousel from "@/components/carousels/DestinationsCarousel";
import MobileDestinationsCarousel from "@/components/carousels/MobileDestinationsCarousel";
import { HomeSeoSummary } from "@/components/seo/HomeSeoSummary";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { CountryItem } from "./CountryItem";

describe("rastreabilidad SEO de componentes", () => {
  it("CountryItem renderiza un enlace <a href> real hacia la página del país", () => {
    render(
      <CountryItem
        id="venezuela"
        name="Venezuela"
        href="/paises/venezuela"
        svgPath="/Venezuela/mapa.svg"
        position={{ top: "10%", left: "20%", width: "15%" }}
      />
    );

    const link = screen.getByRole("link", { name: /Venezuela/i });
    expect(link).toHaveAttribute("href", "/paises/venezuela");
  });

  it("DestinationsCarousel expone enlaces rastreables a todos los destinos, no solo al primero", () => {
    const sampleDestinations = [
      {
        id: "canaima",
        title: "Parque Nacional Canaima",
        tag: "Patrimonio natural",
        description: "Hogar del Salto Ángel.",
        imageSrc: "/Paises/Venezuela/canaima/portada/CanaimaPortada.webp",
      },
      {
        id: "colonia-tovar",
        title: "Colonia Tovar",
        tag: "Rincón Alemán",
        description: "Poblado europeo en la montaña.",
        imageSrc: "/Paises/Venezuela/coloniaTovar/portada/colonia_tovar_portada.webp",
      },
    ];

    const { container } = render(
      <DestinationsCarousel destinations={sampleDestinations} />
    );
    const hrefs = Array.from(container.querySelectorAll("a")).map((a) =>
      a.getAttribute("href")
    );

    expect(hrefs).toContain("/destinos/canaima");
    expect(hrefs).toContain("/destinos/colonia-tovar");
  });

  it("MobileDestinationsCarousel expone enlaces rastreables a todos los destinos", () => {
    const sampleDestinations = [
      {
        id: "canaima",
        title: "Parque Nacional Canaima",
        tag: "Patrimonio natural",
        description: "Hogar del Salto Ángel.",
        imageSrc: "/Paises/Venezuela/canaima/portada/CanaimaPortada.webp",
      },
      {
        id: "isla-larga",
        title: "Isla Larga",
        tag: "Refugio caribeño",
        description: "Arrecifes de coral.",
        imageSrc: "/Paises/Venezuela/islaLarga/portada/isla_larga_portada.webp",
      },
    ];

    const { container } = render(
      <MobileDestinationsCarousel destinations={sampleDestinations} />
    );
    const hrefs = Array.from(container.querySelectorAll("a")).map((a) =>
      a.getAttribute("href")
    );

    expect(hrefs).toContain("/destinos/canaima");
    expect(hrefs).toContain("/destinos/isla-larga");
  });

  it("LoadingScreen marca su contenedor con data-nosnippet para no contaminar resultados de Google", () => {
    const { container } = render(<LoadingScreen />);
    expect(container.querySelector("[data-nosnippet]")).not.toBeNull();
  });

  it("HomeSeoSummary expone un h1 descriptivo y enlaces rastreables hacia países y destinos", () => {
    const { container } = render(<HomeSeoSummary />);
    const heading = container.querySelector("h1");
    const hrefs = Array.from(container.querySelectorAll("a")).map((a) =>
      a.getAttribute("href")
    );

    expect(heading?.textContent).toContain("Rumbo Latam");
    expect(hrefs).toContain("/nosotras");
    expect(hrefs).toContain("/paises/venezuela");
    expect(hrefs).toContain("/destinos/canaima");
  });
});

