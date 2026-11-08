import { describe, expect, it } from "vitest";
import { metadata as homeMetadata } from "./page";
import { metadata as nosotrasMetadata } from "./nosotras/page";
import CountryPage, {
  generateMetadata as generateCountryMetadata,
} from "./paises/[id]/page";
import { generateMetadata as generateCuriosidadesMetadata } from "./paises/[id]/curiosidades/page";
import DestinoPage, {
  generateMetadata as generateDestinoMetadata,
} from "./destinos/[id]/page";

describe("metadatos y soft-404 en rutas de App Router", () => {
  it("exporta metadata único en Home (/) y Nosotras (/nosotras)", () => {
    expect(homeMetadata.alternates?.canonical).toBe(
      "https://rumbolatam.netlify.app"
    );
    expect(nosotrasMetadata.alternates?.canonical).toBe(
      "https://rumbolatam.netlify.app/nosotras"
    );
  });

  it("genera metadata dinámico en /paises/[id] y lanza notFound() ante ID inválido", async () => {
    const meta = await generateCountryMetadata({
      params: Promise.resolve({ id: "venezuela" }),
    });

    expect(meta.title).toContain("Venezuela");
    expect(meta.alternates?.canonical).toBe(
      "https://rumbolatam.netlify.app/paises/venezuela"
    );

    await expect(
      generateCountryMetadata({
        params: Promise.resolve({ id: "pais-inexistente" }),
      })
    ).rejects.toThrow();

    await expect(
      CountryPage({
        params: Promise.resolve({ id: "pais-inexistente" }),
      })
    ).rejects.toThrow();
  });

  it("genera metadata dinámico en /paises/[id]/curiosidades y lanza notFound() ante ID inválido", async () => {
    const meta = await generateCuriosidadesMetadata({
      params: Promise.resolve({ id: "venezuela" }),
    });

    expect(meta.title).toContain("Curiosidades");
    expect(meta.alternates?.canonical).toBe(
      "https://rumbolatam.netlify.app/paises/venezuela/curiosidades"
    );

    await expect(
      generateCuriosidadesMetadata({
        params: Promise.resolve({ id: "pais-inexistente" }),
      })
    ).rejects.toThrow();
  });

  it("genera metadata dinámico en /destinos/[id] y lanza notFound() en lugar de hacer soft-404 a Canaima", async () => {
    const meta = await generateDestinoMetadata({
      params: Promise.resolve({ id: "canaima" }),
    });

    expect(meta.title).toContain("Parque Nacional Canaima");
    expect(meta.alternates?.canonical).toBe(
      "https://rumbolatam.netlify.app/destinos/canaima"
    );

    await expect(
      generateDestinoMetadata({
        params: Promise.resolve({ id: "destino-inexistente" }),
      })
    ).rejects.toThrow();

    await expect(
      DestinoPage({
        params: Promise.resolve({ id: "destino-inexistente" }),
      })
    ).rejects.toThrow();
  });
});

