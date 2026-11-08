import { describe, expect, it } from "vitest";
import { listDestinos, listPaises } from "@/data";
import sitemap from "./sitemap";
import robots from "./robots";

describe("sitemap y robots", () => {
  it("genera todas las URLs bajo https://rumbolatam.netlify.app incluyendo /nosotras, países, curiosidades y destinos", () => {
    const entries = sitemap();
    const urls = entries.map((entry) => entry.url);

    expect(urls).toContain("https://rumbolatam.netlify.app");
    expect(urls).toContain("https://rumbolatam.netlify.app/nosotras");

    for (const pais of listPaises()) {
      expect(urls).toContain(`https://rumbolatam.netlify.app/paises/${pais.id}`);
      if (pais.curiosidades.length > 0) {
        expect(urls).toContain(
          `https://rumbolatam.netlify.app/paises/${pais.id}/curiosidades`
        );
      }
    }

    for (const destino of listDestinos()) {
      expect(urls).toContain(
        `https://rumbolatam.netlify.app/destinos/${destino.id}`
      );
    }
  });

  it("declara el sitemap canónico de producción en robots.txt", () => {
    const config = robots();
    expect(config.sitemap).toBe("https://rumbolatam.netlify.app/sitemap.xml");
  });
});

