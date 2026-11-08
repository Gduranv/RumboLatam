import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config";
import { listDestinos, listPaises } from "@/data";

/**
 * Genera el mapa del sitio XML completo con la portada, la sección Nosotras,
 * todos los países, sus rutas de curiosidades activas y todos los destinos.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/nosotras`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];

  for (const pais of listPaises()) {
    entries.push({
      url: `${SITE_URL}/paises/${pais.id}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    });

    if (pais.curiosidades.length > 0) {
      entries.push({
        url: `${SITE_URL}/paises/${pais.id}/curiosidades`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  for (const destino of listDestinos()) {
    entries.push({
      url: `${SITE_URL}/destinos/${destino.id}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  return entries;
}
