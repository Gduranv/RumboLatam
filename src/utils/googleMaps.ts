import type { Hotel } from "@/types";

const GOOGLE_MAPS_SEARCH_URL = "https://www.google.com/maps/search/?api=1&query=";

/**
 * Arma la URL de búsqueda de Google Maps (Maps URLs API oficial) para un texto
 * libre. No requiere API key y abre la app de Maps en móvil.
 */
export const buildGoogleMapsSearchUrl = (query: string): string => {
  const cleanQuery = query.replace(/\s+/g, " ").trim();
  return `${GOOGLE_MAPS_SEARCH_URL}${encodeURIComponent(cleanQuery)}`;
};

/**
 * Devuelve el enlace de Google Maps de un hospedaje. Si el dato trae `link`,
 * se respeta; si no, se busca por "tipo + nombre + destino + país", porque
 * varios nombres son cortos o ambiguos (ej.: "Lira", "HF") y sin la ubicación
 * Maps no encontraría el lugar correcto.
 */
export const getHotelMapsUrl = (
  hotel: Pick<Hotel, "name" | "tipo" | "link">,
  destinoName: string,
  paisName?: string
): string => {
  if (hotel.link) return hotel.link;

  const parts = [hotel.tipo, hotel.name, destinoName, paisName].filter(Boolean);
  return buildGoogleMapsSearchUrl(parts.join(" "));
};
