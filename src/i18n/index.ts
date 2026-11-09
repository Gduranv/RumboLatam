import { getPais, getDestino } from "@/data";
import type { PaisData, DestinoData } from "@/types";
import type { Locale, PaisTranslation, DestinoTranslation } from "./types";
import { PAISES_EN } from "./paises/en";
import { PAISES_PT } from "./paises/pt";
import { DESTINOS_EN } from "./destinos/en";
import { DESTINOS_PT } from "./destinos/pt";
import { translateHotelType } from "./ui";

export type {
  Locale,
  PaisTranslation,
  DestinoTranslation,
  UiStrings,
  NosotrasStrings,
  NosotrasCardTranslation,
} from "./types";
export { LocaleProvider, useLocale } from "./LocaleContext";
export { getUiStrings, translateHotelType } from "./ui";
export { getNosotrasStrings } from "./nosotras";

/**
 * Obtiene el diccionario de países correspondiente al idioma solicitado.
 */
const getPaisDictionary = (
  locale: Exclude<Locale, "es">
): Record<string, PaisTranslation> => (locale === "en" ? PAISES_EN : PAISES_PT);

/**
 * Obtiene el diccionario de destinos correspondiente al idioma solicitado.
 */
const getDestinoDictionary = (
  locale: Exclude<Locale, "es">
): Record<string, DestinoTranslation> =>
  locale === "en" ? DESTINOS_EN : DESTINOS_PT;

/**
 * Devuelve los datos de un país localizados según el idioma activo,
 * preservando intactas las rutas de imágenes, íconos y colores de acento.
 */
export const getLocalizedPais = (
  id: string,
  locale: Locale
): PaisData | undefined => {
  const base = getPais(id);
  if (!base || locale === "es") return base;

  const translation = getPaisDictionary(locale)[base.id];
  if (!translation) return base;

  return {
    ...base,
    name: translation.name,
    subtitle: translation.subtitle,
    giaMessage: translation.giaMessage,
    antesDeViajar: base.antesDeViajar.map((card, index) => ({
      ...card,
      title: translation.antesDeViajar[index]?.title ?? card.title,
      description:
        translation.antesDeViajar[index]?.description ?? card.description,
    })),
    destinos: base.destinos.map((dest) => {
      const translatedDest = translation.destinos.find((d) => d.id === dest.id);
      return {
        ...dest,
        title: translatedDest?.title ?? dest.title,
        tag: translatedDest?.tag ?? dest.tag,
        description: translatedDest?.description ?? dest.description,
      };
    }),
    curiosidades: base.curiosidades.map((cur, index) => ({
      ...cur,
      text: translation.curiosidades[index]?.text ?? cur.text,
    })),
  };
};

/**
 * Devuelve los datos de un destino turístico localizados según el idioma activo,
 * preservando imágenes, estrellas, coordenadas de mapa y estructura.
 */
export const getLocalizedDestino = (
  id: string,
  locale: Locale
): DestinoData | undefined => {
  const base = getDestino(id);
  if (!base || locale === "es") return base;

  const translation = getDestinoDictionary(locale)[base.id];
  if (!translation) return base;

  return {
    ...base,
    name: translation.name,
    tag: translation.tag,
    manualDelViajero: base.manualDelViajero.map((card, index) => ({
      ...card,
      title: translation.manualDelViajero[index]?.title ?? card.title,
      description:
        translation.manualDelViajero[index]?.description ?? card.description,
    })),
    hospedaje: {
      ...base.hospedaje,
      hoteles: base.hospedaje.hoteles.map((hotel, index) => ({
        ...hotel,
        tipo:
          translation.hospedajeTipos?.[index] ??
          (hotel.tipo ? translateHotelType(hotel.tipo, locale) : hotel.tipo),
      })),
    },
    animales: {
      ...base.animales,
      description: translation.animalesDescription,
    },
    actividades: {
      ...base.actividades,
      description: translation.actividadesDescription,
    },
  };
};
