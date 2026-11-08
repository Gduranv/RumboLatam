import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { JsonLd } from "@/components/seo/JsonLd";
import { getDestino, getPais } from "@/data";
import {
  buildAboutPageJsonLd,
  buildCuriosidadesJsonLd,
  buildDestinoJsonLd,
  buildPaisJsonLd,
  buildWebsiteJsonLd,
  serializeJsonLd,
} from "./jsonLd";

describe("seo/jsonLd", () => {
  it("escapa caracteres < al serializar JSON-LD para prevenir inyecciones XSS", () => {
    const serialized = serializeJsonLd({
      "@context": "https://schema.org",
      name: "</script><script>alert(1)</script>",
    });

    expect(serialized).not.toContain("</script>");
    expect(serialized).toContain("\\u003c/script>");
  });

  it("construye WebSite y Organization válidos para la portada", () => {
    const schema = buildWebsiteJsonLd();
    const graph = schema["@graph"] as Record<string, unknown>[];

    expect(schema["@context"]).toBe("https://schema.org");
    expect(graph.some((node) => node["@type"] === "WebSite")).toBe(true);
    expect(graph.some((node) => node["@type"] === "Organization")).toBe(true);
  });

  it("construye AboutPage y BreadcrumbList para /nosotras", () => {
    const schema = buildAboutPageJsonLd();
    const graph = schema["@graph"] as Record<string, unknown>[];

    expect(graph.some((node) => node["@type"] === "AboutPage")).toBe(true);
    expect(graph.some((node) => node["@type"] === "BreadcrumbList")).toBe(true);
  });

  it("construye Country, ItemList de destinos y BreadcrumbList para un país", () => {
    const venezuela = getPais("venezuela")!;
    const schema = buildPaisJsonLd(
      venezuela,
      "/Paises/Venezuela/portada/FotoVenezuela.png"
    );
    const graph = schema["@graph"] as Record<string, unknown>[];

    const countryNode = graph.find((node) => node["@type"] === "Country");
    const itemListNode = graph.find((node) => node["@type"] === "ItemList");

    expect(countryNode).toMatchObject({
      name: "Venezuela",
      url: "https://rumbolatam.netlify.app/paises/venezuela",
    });
    expect(itemListNode).toBeDefined();
  });

  it("construye FAQPage separando pregunta y respuesta limpias en curiosidades", () => {
    const venezuela = getPais("venezuela")!;
    const schema = buildCuriosidadesJsonLd(venezuela);
    const graph = schema["@graph"] as Record<string, unknown>[];
    const faqNode = graph.find((node) => node["@type"] === "FAQPage") as {
      mainEntity: { name: string; acceptedAnswer: { text: string } }[];
    };

    expect(faqNode).toBeDefined();
    expect(faqNode.mainEntity.length).toBe(venezuela.curiosidades.length);
    expect(faqNode.mainEntity[0].name).toContain("¿Sabías que Venezuela");
    expect(faqNode.mainEntity[0].name).not.toContain("**");
    expect(faqNode.mainEntity[0].acceptedAnswer.text).toContain("Médanos de Coro");
  });

  it("construye TouristDestination con país contenedor y migas de pan", () => {
    const villarrica = getDestino("volcan-villarrica")!;
    const chile = getPais(villarrica.paisId);
    const schema = buildDestinoJsonLd(
      villarrica,
      chile,
      "/Paises/Chile/Volcan Villarrica/PortadaVolcanVillarrica.webp"
    );
    const graph = schema["@graph"] as Record<string, unknown>[];
    const destNode = graph.find((node) => node["@type"] === "TouristDestination");

    expect(destNode).toMatchObject({
      name: "Volcán Villarrica",
      image:
        "https://rumbolatam.netlify.app/Paises/Chile/Volcan%20Villarrica/PortadaVolcanVillarrica.webp",
      containedInPlace: {
        "@type": "Country",
        name: "Chile",
        url: "https://rumbolatam.netlify.app/paises/chile",
      },
    });
  });

  it("renderiza <script type='application/ld+json'> mediante el componente JsonLd", () => {
    const { container } = render(<JsonLd data={buildWebsiteJsonLd()} />);
    const script = container.querySelector('script[type="application/ld+json"]');

    expect(script).not.toBeNull();
    expect(JSON.parse(script!.innerHTML)["@context"]).toBe("https://schema.org");
  });
});

