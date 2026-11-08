import { describe, expect, it } from "vitest";
import { cleanRichText, toAbsoluteUrl, truncateMetaDescription } from "./text";

describe("seo/text", () => {
  it("limpia marcadores de negrita y saltos de línea múltiples", () => {
    const raw =
      "**Español,** hablado con una calidez \n única y lleno de expresiones \n\n coloquiales.";
    expect(cleanRichText(raw)).toBe(
      "Español, hablado con una calidez única y lleno de expresiones coloquiales."
    );
  });

  it("trunca descripciones largas en límite de palabra sin exceder el máximo", () => {
    const longText =
      "Rumbo Latam es una guía interactiva por los destinos más asombrosos de América Latina con información detallada sobre clima, transporte, hospedaje, fauna autóctona y actividades imperdibles.";
    const truncated = truncateMetaDescription(longText, 120);

    expect(truncated.length).toBeLessThanOrEqual(120);
    expect(truncated.endsWith("…")).toBe(true);
    expect(truncated).not.toMatch(/\s…$/);
  });

  it("devuelve el texto intacto si ya cabe en el límite", () => {
    expect(truncateMetaDescription("La magia de la tierra de gracia.", 160)).toBe(
      "La magia de la tierra de gracia."
    );
  });

  it("construye URLs absolutas codificando espacios en nombres de carpetas", () => {
    expect(
      toAbsoluteUrl(
        "/Paises/Chile/Volcan Villarrica/PortadaVolcanVillarrica.webp",
        "https://rumbolatam.netlify.app"
      )
    ).toBe(
      "https://rumbolatam.netlify.app/Paises/Chile/Volcan%20Villarrica/PortadaVolcanVillarrica.webp"
    );
  });

  it("respeta URLs que ya son absolutas y codifica espacios si los hubiera", () => {
    expect(
      toAbsoluteUrl("https://cdn.ejemplo.com/foto prueba.webp", "https://rumbolatam.netlify.app")
    ).toBe("https://cdn.ejemplo.com/foto%20prueba.webp");
  });
});

