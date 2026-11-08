import { SITE_URL } from "@/config";

/**
 * Limpia el formato enriquecido ligero del contenido (marcadores **negrita** y
 * saltos de línea) para obtener texto plano apto para metadatos y JSON-LD.
 */
export const cleanRichText = (raw: string): string => {
  return raw
    .replace(/\*\*/g, "")
    .replace(/\s+/g, " ")
    .trim();
};

/**
 * Recorta un texto para meta description respetando límites de palabra y
 * agregando puntos suspensivos cuando excede la longitud máxima indicada.
 */
export const truncateMetaDescription = (
  text: string,
  maxLength: number = 160
): string => {
  const normalized = cleanRichText(text);
  if (normalized.length <= maxLength) {
    return normalized;
  }

  const sliceLimit = Math.max(1, maxLength - 1);
  const sliced = normalized.slice(0, sliceLimit);
  const lastSpaceIndex = sliced.lastIndexOf(" ");
  const cut =
    lastSpaceIndex > Math.floor(sliceLimit * 0.6)
      ? sliced.slice(0, lastSpaceIndex)
      : sliced;

  return `${cut.replace(/[,:;.\s]+$/, "")}…`;
};

/**
 * Convierte una ruta relativa o URL en una URL absoluta canónica codificando
 * caracteres especiales como espacios en nombres de directorios de /public.
 */
export const toAbsoluteUrl = (
  pathOrUrl: string,
  baseUrl: string = SITE_URL
): string => {
  const cleanBase = baseUrl.replace(/\/+$/, "");

  if (/^https?:\/\//i.test(pathOrUrl)) {
    return encodeURI(decodeURI(pathOrUrl));
  }

  const normalizedPath = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  const fullUrl = normalizedPath === "/" ? cleanBase : `${cleanBase}${normalizedPath}`;
  return encodeURI(decodeURI(fullUrl));
};

