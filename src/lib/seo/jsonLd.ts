import { SITE_URL } from "@/config";
import type { Curiosidad, DestinoData, PaisData } from "@/types";
import { DEFAULT_OG_IMAGE_PATH } from "./metadata";
import { cleanRichText, toAbsoluteUrl } from "./text";

interface BreadcrumbItem {
  name: string;
  path: string;
}

/**
 * Serializa un objeto JSON-LD escapando el carácter '<' según la guía oficial
 * de Next.js para evitar cierres prematuros de la etiqueta <script>.
 */
export const serializeJsonLd = (data: Record<string, unknown>): string => {
  return JSON.stringify(data).replace(/</g, "\\u003c");
};

/**
 * Construye un nodo Schema.org BreadcrumbList a partir de una secuencia
 * ordenada de migas de pan con nombre y ruta relativa.
 */
const buildBreadcrumbNode = (items: BreadcrumbItem[]) => {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: toAbsoluteUrl(item.path),
    })),
  };
};

/**
 * Divide el texto de una curiosidad en pregunta y respuesta limpias para
 * alimentar un nodo Question/Answer dentro de un esquema FAQPage.
 */
const splitCuriosityQuestionAnswer = (
  curiosidad: Curiosidad,
  paisName: string,
  index: number
) => {
  const paragraphs = curiosidad.text
    .split(/\n\s*\n/)
    .map((part) => cleanRichText(part))
    .filter(Boolean);

  if (paragraphs.length >= 2) {
    return {
      question: paragraphs[0],
      answer: paragraphs.slice(1).join(" "),
    };
  }

  const single = cleanRichText(curiosidad.text);
  const questionMarkIdx = single.indexOf("?");
  if (questionMarkIdx !== -1 && questionMarkIdx < single.length - 10) {
    return {
      question: single.slice(0, questionMarkIdx + 1).trim(),
      answer: single.slice(questionMarkIdx + 1).trim(),
    };
  }

  return {
    question: `Curiosidad ${index + 1} sobre ${paisName}`,
    answer: single,
  };
};

/**
 * Construye el grafo JSON-LD principal (WebSite + Organization) para la portada.
 */
export const buildWebsiteJsonLd = (): Record<string, unknown> => {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "Rumbo Latam",
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: toAbsoluteUrl("/icon-512.png"),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Rumbo Latam",
        inLanguage: "es",
        description:
          "Guía de viaje interactiva por los destinos imperdibles, cultura y naturaleza de América Latina.",
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
      },
    ],
  };
};

/**
 * Construye el grafo JSON-LD (AboutPage + BreadcrumbList) para /nosotras.
 */
export const buildAboutPageJsonLd = (): Record<string, unknown> => {
  const pageUrl = toAbsoluteUrl("/nosotras");

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${pageUrl}#about`,
        url: pageUrl,
        name: "Sobre Nosotras y el Proyecto | Rumbo Latam",
        inLanguage: "es",
        description:
          "Equipo creador y propósito cultural de Rumbo Latam, guía interactiva de turismo latinoamericano.",
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
      },
      buildBreadcrumbNode([
        { name: "Inicio", path: "/" },
        { name: "Nosotras", path: "/nosotras" },
      ]),
    ],
  };
};

/**
 * Construye el grafo JSON-LD de un país (/paises/[id]) combinando la entidad
 * Country, el ItemList de sus destinos turísticos y sus migas de pan.
 */
export const buildPaisJsonLd = (
  pais: PaisData,
  heroImage: string | null
): Record<string, unknown> => {
  const countryUrl = toAbsoluteUrl(`/paises/${pais.id}`);
  const imageUrl = toAbsoluteUrl(
    heroImage || pais.hero?.src || DEFAULT_OG_IMAGE_PATH
  );

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Country",
        "@id": `${countryUrl}#country`,
        name: pais.name,
        url: countryUrl,
        description: cleanRichText(pais.subtitle),
        image: imageUrl,
      },
      {
        "@type": "ItemList",
        name: `Destinos imperdibles en ${pais.name}`,
        itemListElement: pais.destinos.map((dest, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: dest.title,
          url: toAbsoluteUrl(`/destinos/${dest.id}`),
        })),
      },
      buildBreadcrumbNode([
        { name: "Inicio", path: "/" },
        { name: pais.name, path: `/paises/${pais.id}` },
      ]),
    ],
  };
};

/**
 * Construye el grafo JSON-LD de curiosidades (/paises/[id]/curiosidades) como
 * FAQPage para optar a resultados enriquecidos de preguntas frecuentes.
 */
export const buildCuriosidadesJsonLd = (
  pais: PaisData
): Record<string, unknown> => {
  const pageUrl = toAbsoluteUrl(`/paises/${pais.id}/curiosidades`);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        url: pageUrl,
        inLanguage: "es",
        name: `Curiosidades de ${pais.name}`,
        mainEntity: pais.curiosidades.map((curiosidad, index) => {
          const { question, answer } = splitCuriosityQuestionAnswer(
            curiosidad,
            pais.name,
            index
          );
          return {
            "@type": "Question",
            name: question,
            acceptedAnswer: {
              "@type": "Answer",
              text: answer,
            },
          };
        }),
      },
      buildBreadcrumbNode([
        { name: "Inicio", path: "/" },
        { name: pais.name, path: `/paises/${pais.id}` },
        { name: "Curiosidades", path: `/paises/${pais.id}/curiosidades` },
      ]),
    ],
  };
};

/**
 * Construye el grafo JSON-LD de un destino turístico (/destinos/[id]) usando
 * TouristDestination vinculado a su país contenedor y BreadcrumbList.
 */
export const buildDestinoJsonLd = (
  destino: DestinoData,
  pais: PaisData | undefined,
  portadaImage: string | null
): Record<string, unknown> => {
  const destUrl = toAbsoluteUrl(`/destinos/${destino.id}`);
  const imageUrl = toAbsoluteUrl(
    portadaImage || destino.hero?.src || DEFAULT_OG_IMAGE_PATH
  );
  const descriptionParts = [
    cleanRichText(destino.actividades?.description ?? ""),
    cleanRichText(destino.animales?.description ?? ""),
  ].filter(Boolean);

  const breadcrumbs: BreadcrumbItem[] = [{ name: "Inicio", path: "/" }];
  if (pais) {
    breadcrumbs.push({ name: pais.name, path: `/paises/${pais.id}` });
  }
  breadcrumbs.push({ name: destino.name, path: `/destinos/${destino.id}` });

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TouristDestination",
        "@id": `${destUrl}#destination`,
        name: destino.name,
        url: destUrl,
        description: descriptionParts.join(" "),
        image: imageUrl,
        touristType: cleanRichText(destino.tag),
        ...(pais
          ? {
              containedInPlace: {
                "@type": "Country",
                name: pais.name,
                url: toAbsoluteUrl(`/paises/${pais.id}`),
              },
            }
          : {}),
      },
      buildBreadcrumbNode(breadcrumbs),
    ],
  };
};

