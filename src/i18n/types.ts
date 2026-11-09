export type Locale = "es" | "en" | "pt";

export interface PaisTranslation {
  name: string;
  subtitle: string;
  giaMessage: string;
  antesDeViajar: Array<{
    title: string;
    description: string;
  }>;
  destinos: Array<{
    id: string;
    title: string;
    tag: string;
    description: string;
  }>;
  curiosidades: Array<{
    text: string;
  }>;
}

export interface DestinoTranslation {
  name: string;
  tag: string;
  manualDelViajero: Array<{
    title: string;
    description: string;
  }>;
  hospedajeTipos?: string[];
  animalesDescription: string;
  actividadesDescription: string;
}

export interface UiStrings {
  beforeTravelingTitle: string;
  topDestinationsTitle: string;
  seeMore: string;
  previousDestinationsAria: string;
  nextDestinationsAria: string;
  travelerManualTitle: string;
  travelerManualSubtitle: string;
  lodgingTitle: string;
  nativeAnimalsTitle: string;
  activitiesTitle: string;
  previousHotelsAria: string;
  nextHotelsAria: string;
  previousSlideAria: string;
  nextSlideAria: string;
  curiousFactsPrefix: string;
  curiousFactsHighlight: string;
  curiousFactsIntro: string;
  closeModalAria: string;
  footerDegreeLine: string;
  footerRightsLine: string;
  backButtonAria: string;
  curiousFactsButtonAria: string;
  languageSelectorAria: string;
}

export interface NosotrasCardTranslation {
  title: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
}

export interface NosotrasStrings {
  headerTitle: string;
  title: string;
  titleLine1: string;
  titleLine2: string;
  cards: [
    NosotrasCardTranslation,
    NosotrasCardTranslation,
    NosotrasCardTranslation,
  ];
}
