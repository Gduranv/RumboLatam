import type { Metadata } from "next";
import { GOOGLE_SITE_VERIFICATION, SITE_URL } from "@/config";
import { listPaises } from "@/data";
import type { DestinoData, PaisData } from "@/types";
import { cleanRichText, toAbsoluteUrl, truncateMetaDescription } from "./text";

export const DEFAULT_OG_IMAGE_PATH = "/og-default.jpg";

/**
 * Construye la definición de imagen Open Graph por defecto o personalizada
 * usando URLs absolutas codificadas para compatibilidad con redes sociales.
 */
const buildOgImageEntry = (imagePath: string | null | undefined, alt: string) => {
  if (!imagePath) {
    return {
      url: toAbsoluteUrl(DEFAULT_OG_IMAGE_PATH),
      width: 1200,
      height: 630,
      alt,
    };
  }

  return {
    url: toAbsoluteUrl(imagePath),
    alt,
  };
};

/**
 * Construye los metadatos globales compartidos en el layout raíz, incluyendo
 * metadataBase, iconos, directivas de rastreo avanzadas y verificación Google.
 */
export const buildRootMetadata = (
  googleVerification: string | undefined = GOOGLE_SITE_VERIFICATION
): Metadata => {
  const defaultTitle = "Rumbo Latam | Guía de viaje interactiva por América Latina";
  const defaultDescription =
    "Descubre los rincones imperdibles de América Latina con Rumbo Latam: guía interactiva de países, destinos turísticos, clima, transporte, hospedaje y cultura.";
  const defaultOgImage = buildOgImageEntry(null, "Rumbo Latam — Guía de viaje por América Latina");

  return {
    metadataBase: new URL(SITE_URL),
    applicationName: "Rumbo Latam",
    title: {
      default: "Rumbo Latam",
      template: "%s | Rumbo Latam",
    },
    description: defaultDescription,
    keywords: [
      "Rumbo Latam",
      "turismo América Latina",
      "guía de viaje Latinoamérica",
      "destinos turísticos Sudamérica",
      "viajar por Latinoamérica",
      "Venezuela",
      "Colombia",
      "México",
      "Perú",
      "Brasil",
      "Argentina",
      "Chile",
      "República Dominicana",
    ],
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/icon.png", type: "image/png", sizes: "32x32" },
        { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
        { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
      ],
      apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
      shortcut: "/favicon.ico",
    },
    manifest: "/manifest.webmanifest",
    openGraph: {
      siteName: "Rumbo Latam",
      locale: "es_LA",
      type: "website",
      url: SITE_URL,
      title: defaultTitle,
      description: defaultDescription,
      images: [defaultOgImage],
    },
    twitter: {
      card: "summary_large_image",
      title: defaultTitle,
      description: defaultDescription,
      images: [defaultOgImage.url],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    ...(googleVerification
      ? {
          verification: {
            google: googleVerification,
          },
        }
      : {}),
  };
};

/**
 * Construye los metadatos específicos de la página de inicio (/) destacando
 * los países disponibles en el mapa interactivo de América Latina.
 */
export const buildHomeMetadata = (): Metadata => {
  const countryNames = listPaises()
    .map((pais) => pais.name)
    .join(", ");
  const title = "Rumbo Latam | Guía de viaje interactiva por América Latina";
  const description = truncateMetaDescription(
    `Explora el mapa interactivo de Rumbo Latam y planifica tu ruta por ${countryNames}: destinos imperdibles, clima, moneda, hospedaje y curiosidades.`,
    160
  );
  const ogImage = buildOgImageEntry(null, title);

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: toAbsoluteUrl("/"),
    },
    openGraph: {
      title,
      description,
      url: toAbsoluteUrl("/"),
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
  };
};

/**
 * Construye los metadatos de la sección institucional /nosotras describiendo
 * el equipo creativo y el propósito educativo y cultural de Rumbo Latam.
 */
export const buildNosotrasMetadata = (): Metadata => {
  const title = "Sobre nosotras y el proyecto";
  const description = truncateMetaDescription(
    "Conoce al equipo detrás de Rumbo Latam y cómo nació esta guía visual e interactiva para celebrar la biodiversidad, cultura y turismo de América Latina.",
    160
  );
  const canonicalUrl = toAbsoluteUrl("/nosotras");
  const ogImage = buildOgImageEntry(
    "/Nosotras/foto-hero-1.png",
    "Equipo detrás de Rumbo Latam"
  );

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${title} | Rumbo Latam`,
      description,
      url: canonicalUrl,
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Rumbo Latam`,
      description,
      images: [ogImage.url],
    },
  };
};

/**
 * Construye los metadatos dinámicos de un país (/paises/[id]) combinando su
 * subtítulo, sus destinos turísticos y su imagen de portada real.
 */
export const buildPaisMetadata = (
  pais: PaisData,
  heroImage: string | null
): Metadata => {
  const title = `${pais.name}: Destinos, moneda, clima y guía de viaje`;
  const destinationNames = pais.destinos.map((d) => d.title).join(", ");
  const subtitleClean = cleanRichText(pais.subtitle).replace(/\.+$/, "");
  const subtitleSentence = subtitleClean
    ? `${subtitleClean.charAt(0).toLocaleLowerCase("es")}${subtitleClean.slice(1)}`
    : "";
  const rawDescription = destinationNames
    ? `${pais.name}: ${subtitleSentence}. Descubre ${destinationNames}, moneda, gastronomía, idioma y consejos antes de viajar.`
    : `${pais.name}: ${subtitleSentence}. Guía práctica con moneda, gastronomía, idioma y estaciones para tu viaje.`;
  const description = truncateMetaDescription(rawDescription, 160);
  const canonicalUrl = toAbsoluteUrl(`/paises/${pais.id}`);
  const ogImage = buildOgImageEntry(
    heroImage || pais.hero?.src || null,
    `Guía de viaje de ${pais.name} en Rumbo Latam`
  );

  return {
    title,
    description,
    keywords: [
      `viajar a ${pais.name}`,
      `turismo en ${pais.name}`,
      `guía de viaje ${pais.name}`,
      ...pais.destinos.map((d) => d.title),
      "Rumbo Latam",
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${title} | Rumbo Latam`,
      description,
      url: canonicalUrl,
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Rumbo Latam`,
      description,
      images: [ogImage.url],
    },
  };
};

/**
 * Construye los metadatos de la ruta de curiosidades (/paises/[id]/curiosidades)
 * a partir del primer dato curioso limpio del país.
 */
export const buildCuriosidadesMetadata = (
  pais: PaisData,
  firstImage: string | null
): Metadata => {
  const title = `Curiosidades y datos asombrosos de ${pais.name}`;
  const firstCuriosity = pais.curiosidades[0]
    ? cleanRichText(pais.curiosidades[0].text)
    : "";
  const rawDescription = firstCuriosity
    ? `Datos curiosos de ${pais.name}. ${firstCuriosity}`
    : `Descubre las tradiciones, naturaleza y curiosidades culturales más sorprendentes de ${pais.name} en Rumbo Latam.`;
  const description = truncateMetaDescription(rawDescription, 160);
  const canonicalUrl = toAbsoluteUrl(`/paises/${pais.id}/curiosidades`);
  const ogImage = buildOgImageEntry(
    firstImage || pais.curiosidades[0]?.image?.src || pais.hero?.src || null,
    `Curiosidades culturales de ${pais.name}`
  );

  return {
    title,
    description,
    keywords: [
      `curiosidades de ${pais.name}`,
      `datos curiosos ${pais.name}`,
      `cultura de ${pais.name}`,
      "Rumbo Latam",
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${title} | Rumbo Latam`,
      description,
      url: canonicalUrl,
      type: "article",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Rumbo Latam`,
      description,
      images: [ogImage.url],
    },
  };
};

/**
 * Construye los metadatos dinámicos de un destino turístico (/destinos/[id])
 * integrando el país al que pertenece, actividades, clima y hospedaje.
 */
export const buildDestinoMetadata = (
  destino: DestinoData,
  pais: PaisData | undefined,
  portadaImage: string | null
): Metadata => {
  const countrySuffix = pais ? `, ${pais.name}` : "";
  const title = `${destino.name}${countrySuffix}: Qué hacer, clima y hospedaje`;
  const tagClean = cleanRichText(destino.tag).toLocaleLowerCase("es");
  const actividadesClean = cleanRichText(destino.actividades?.description ?? "");
  const rawDescription = `${destino.name}${countrySuffix} (${tagClean}). ${actividadesClean} Consulta clima, cómo llegar, mejor época y hoteles.`;
  const description = truncateMetaDescription(rawDescription, 160);
  const canonicalUrl = toAbsoluteUrl(`/destinos/${destino.id}`);
  const ogImage = buildOgImageEntry(
    portadaImage || destino.hero?.src || null,
    `${destino.name}${countrySuffix} — Rumbo Latam`
  );

  return {
    title,
    description,
    keywords: [
      destino.name,
      ...(pais ? [`${destino.name} ${pais.name}`, `turismo ${pais.name}`] : []),
      `qué hacer en ${destino.name}`,
      `cómo llegar a ${destino.name}`,
      `hoteles en ${destino.name}`,
      "Rumbo Latam",
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${title} | Rumbo Latam`,
      description,
      url: canonicalUrl,
      type: "article",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Rumbo Latam`,
      description,
      images: [ogImage.url],
    },
  };
};

