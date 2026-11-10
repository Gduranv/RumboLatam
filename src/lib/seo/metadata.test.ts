import { describe, expect, it } from "vitest";
import { getDestino, getPais } from "@/data";
import {
  buildCuriosidadesMetadata,
  buildDestinoMetadata,
  buildHomeMetadata,
  buildNosotrasMetadata,
  buildPaisMetadata,
  buildRootMetadata,
} from "./metadata";

describe("seo/metadata", () => {
  it("genera metadata raíz con metadataBase canónico, robots googleBot y soporte de verificación", () => {
    const rootMeta = buildRootMetadata("codigo-verificacion-123");

    expect(rootMeta.metadataBase?.toString()).toBe("https://rumbolatam.netlify.app/");
    expect(rootMeta.verification?.google).toBe("codigo-verificacion-123");
    expect(rootMeta.robots).toMatchObject({
      index: true,
      follow: true,
    });
  });

  it("genera metadata del Home con título absoluto, canonical e imagen OG 1200x630", () => {
    const homeMeta = buildHomeMetadata();

    expect(homeMeta.title).toEqual({
      absolute: "Rumbo Latam | Guía de viaje interactiva por América Latina",
    });
    expect(homeMeta.alternates?.canonical).toBe("https://rumbolatam.netlify.app");
    expect(homeMeta.description).toContain("Venezuela");
    expect(homeMeta.openGraph?.images).toEqual([
      expect.objectContaining({
        url: "https://rumbolatam.netlify.app/og-default.jpg",
        width: 1200,
        height: 630,
      }),
    ]);
  });

  it("genera metadata de Nosotras con canonical propio", () => {
    const nosotrasMeta = buildNosotrasMetadata();

    expect(nosotrasMeta.title).toBe("Sobre nosotras y el proyecto");
    expect(nosotrasMeta.alternates?.canonical).toBe(
      "https://rumbolatam.netlify.app/nosotras"
    );
    expect(nosotrasMeta.description?.length).toBeLessThanOrEqual(165);
  });

  it("genera metadata dinámica de país incluyendo sus destinos y portada", () => {
    const venezuela = getPais("venezuela")!;
    const meta = buildPaisMetadata(
      venezuela,
      "/Paises/Venezuela/portada/FotoVenezuela.png"
    );

    expect(meta.title).toBe("Venezuela: Destinos, moneda, clima y guía de viaje");
    expect(meta.description).toContain("Parque Nacional Canaima");
    expect(meta.description).not.toContain("**");
    expect(meta.alternates?.canonical).toBe(
      "https://rumbolatam.netlify.app/paises/venezuela"
    );
    expect(meta.openGraph?.images).toEqual([
      expect.objectContaining({
        url: "https://rumbolatam.netlify.app/Paises/Venezuela/portada/FotoVenezuela.png",
      }),
    ]);
  });

  it("genera metadata de curiosidades limpiando negritas markdown", () => {
    const venezuela = getPais("venezuela")!;
    const meta = buildCuriosidadesMetadata(
      venezuela,
      "/Paises/Venezuela/curiosidades/curiosidadesven-medanos.webp"
    );

    expect(meta.title).toBe("Curiosidades y datos asombrosos de Venezuela");
    expect(meta.description).not.toContain("**");
    expect(meta.alternates?.canonical).toBe(
      "https://rumbolatam.netlify.app/paises/venezuela/curiosidades"
    );
  });

  it("genera metadata de destino con país, keywords relevantes e imagen codificada", () => {
    const villarrica = getDestino("volcan-villarrica")!;
    const chile = getPais(villarrica.paisId);
    const meta = buildDestinoMetadata(
      villarrica,
      chile,
      "/Paises/Chile/Volcan Villarrica/PortadaVolcanVillarrica.webp"
    );

    expect(meta.title).toBe(
      "Volcán Villarrica, Chile: Qué hacer, clima y hospedaje"
    );
    expect(meta.description?.length).toBeLessThanOrEqual(165);
    expect(meta.alternates?.canonical).toBe(
      "https://rumbolatam.netlify.app/destinos/volcan-villarrica"
    );
    expect(meta.openGraph?.images).toEqual([
      expect.objectContaining({
        url: "https://rumbolatam.netlify.app/Paises/Chile/Volcan%20Villarrica/PortadaVolcanVillarrica.webp",
      }),
    ]);
  });
});

