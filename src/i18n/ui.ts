import type { Locale, UiStrings } from "./types";

const UI_DICTIONARY: Record<Locale, UiStrings> = {
  es: {
    beforeTravelingTitle: "Antes de viajar:",
    topDestinationsTitle: "3 destinos que no te puedes perder",
    seeMore: "Ver más",
    previousDestinationsAria: "Destinos anteriores",
    nextDestinationsAria: "Siguientes destinos",
    travelerManualTitle: "Manual del viajero",
    travelerManualSubtitle: "Detalles esenciales para planificar tu ruta",
    lodgingTitle: "Hospedaje",
    nativeAnimalsTitle: "Animales autóctonos",
    activitiesTitle: "Actividades para hacer",
    previousHotelsAria: "Hoteles anteriores",
    nextHotelsAria: "Siguientes hoteles",
    previousSlideAria: "Anterior",
    nextSlideAria: "Siguiente",
    curiousFactsPrefix: "Datos",
    curiousFactsHighlight: "curiosos",
    curiousFactsIntro:
      "Descubre los **detalles únicos y asombrosos** sobre cultura, naturaleza y sociedad que hacen especial a cada país y enriquecerán el recorrido a tu destino ideal.",
    closeModalAria: "Cerrar",
    footerDegreeLine: "Trabajo Especial de Grado - URBE.",
    footerRightsLine: "Todos los derechos reservados.",
    backButtonAria: "Volver",
    curiousFactsButtonAria: "Ver datos curiosos",
    languageSelectorAria: "Seleccionar idioma",
  },
  en: {
    beforeTravelingTitle: "Before traveling:",
    topDestinationsTitle: "3 must-see destinations",
    seeMore: "See more",
    previousDestinationsAria: "Previous destinations",
    nextDestinationsAria: "Next destinations",
    travelerManualTitle: "Traveler's Manual",
    travelerManualSubtitle: "Essential details to plan your route",
    lodgingTitle: "Lodging",
    nativeAnimalsTitle: "Native Wildlife",
    activitiesTitle: "Things to Do",
    previousHotelsAria: "Previous hotels",
    nextHotelsAria: "Next hotels",
    previousSlideAria: "Previous",
    nextSlideAria: "Next",
    curiousFactsPrefix: "Fun",
    curiousFactsHighlight: "facts",
    curiousFactsIntro:
      "Discover the **unique and amazing details** about culture, nature, and society that make each country special and will enrich the journey to your ideal destination.",
    closeModalAria: "Close",
    footerDegreeLine: "Undergraduate Thesis Project - URBE.",
    footerRightsLine: "All rights reserved.",
    backButtonAria: "Go back",
    curiousFactsButtonAria: "View fun facts",
    languageSelectorAria: "Select language",
  },
  pt: {
    beforeTravelingTitle: "Antes de viajar:",
    topDestinationsTitle: "3 destinos imperdíveis",
    seeMore: "Ver mais",
    previousDestinationsAria: "Destinos anteriores",
    nextDestinationsAria: "Próximos destinos",
    travelerManualTitle: "Manual do Viajante",
    travelerManualSubtitle: "Detalhes essenciais para planejar sua rota",
    lodgingTitle: "Hospedagem",
    nativeAnimalsTitle: "Animais nativos",
    activitiesTitle: "O que fazer",
    previousHotelsAria: "Hotéis anteriores",
    nextHotelsAria: "Próximos hotéis",
    previousSlideAria: "Anterior",
    nextSlideAria: "Próximo",
    curiousFactsPrefix: "Fatos",
    curiousFactsHighlight: "curiosos",
    curiousFactsIntro:
      "Descubra os **detalhes únicos e surpreendentes** sobre cultura, natureza e sociedade que tornam cada país especial e enriquecerão o percurso até o seu destino ideal.",
    closeModalAria: "Fechar",
    footerDegreeLine: "Trabalho Especial de Graduação - URBE.",
    footerRightsLine: "Todos os direitos reservados.",
    backButtonAria: "Voltar",
    curiousFactsButtonAria: "Ver fatos curiosos",
    languageSelectorAria: "Selecionar idioma",
  },
};

const HOTEL_TYPE_TRANSLATIONS: Record<string, { en: string; pt: string }> = {
  Hotel: { en: "Hotel", pt: "Hotel" },
  Posada: { en: "Inn", pt: "Pousada" },
  Campamento: { en: "Eco-Camp", pt: "Acampamento" },
  Cabañas: { en: "Cabins", pt: "Cabanas" },
  Resort: { en: "Resort", pt: "Resort" },
  Hostel: { en: "Hostel", pt: "Hostel" },
  Hostal: { en: "Hostel", pt: "Hostel" },
  Hostería: { en: "Country Inn", pt: "Pousada" },
  Boutique: { en: "Boutique Hotel", pt: "Hotel Boutique" },
  "Hotel histórico": { en: "Historic Hotel", pt: "Hotel Histórico" },
  "Hotel Restaurant": { en: "Hotel & Restaurant", pt: "Hotel & Restaurante" },
  "Hotel de Lujo": { en: "Luxury Hotel", pt: "Hotel de Luxo" },
};

/**
 * Obtiene el diccionario de textos de interfaz para el idioma solicitado.
 */
export const getUiStrings = (locale: Locale): UiStrings => UI_DICTIONARY[locale];

/**
 * Traduce la categoría de hospedaje (Hotel, Posada, Cabañas, etc.) según el idioma activo.
 */
export const translateHotelType = (tipo: string, locale: Locale): string => {
  if (locale === "es") return tipo;
  const entry = HOTEL_TYPE_TRANSLATIONS[tipo];
  return entry ? entry[locale] : tipo;
};
