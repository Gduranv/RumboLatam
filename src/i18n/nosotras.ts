import type { Locale, NosotrasStrings } from "./types";

const NOSOTRAS_DICTIONARY: Record<Locale, NosotrasStrings> = {
  es: {
    headerTitle: "Nosotras",
    title: "¿Qué hay detrás de este proyecto?",
    titleLine1: "¿Qué hay detrás",
    titleLine2: "de este proyecto?",
    cards: [
      {
        title: "Enfoque en la experiencia",
        titleLine1: "Enfoque en",
        titleLine2: "la experiencia",
        description:
          "Diseñamos siempre pensando en las necesidades del viajero, priorizando la accesibilidad, la intuición y la claridad en cada pantalla para que cualquiera pueda trazar su ruta sin fricciones.",
      },
      {
        title: "Proceso creativo",
        titleLine1: "Proceso",
        titleLine2: "creativo",
        description:
          "Durante la etapa de diseño se combinó investigación, bocetos y prototipos para transformar la idea inicial en una interfaz visualmente atractiva y fácil de usar.",
      },
      {
        title: "Identidad cultural",
        titleLine1: "Identidad",
        titleLine2: "cultural",
        description:
          "Nuestro objetivo es mantener viva la esencia y la riqueza de los destinos latinoamericanos a través de un sistema de diseño que refleje la calidez y diversidad de cada cultura.",
      },
    ],
  },
  en: {
    headerTitle: "About Us",
    title: "What is behind this project?",
    titleLine1: "What is behind",
    titleLine2: "this project?",
    cards: [
      {
        title: "Focus on the experience",
        titleLine1: "Focus on",
        titleLine2: "the experience",
        description:
          "We always design with the traveler's needs in mind, prioritizing accessibility, intuition, and clarity on every screen so anyone can map out their route effortlessly.",
      },
      {
        title: "Creative process",
        titleLine1: "Creative",
        titleLine2: "process",
        description:
          "During the design stage, research, sketches, and prototypes were combined to transform the initial idea into a visually appealing and easy-to-use interface.",
      },
      {
        title: "Cultural identity",
        titleLine1: "Cultural",
        titleLine2: "identity",
        description:
          "Our goal is to keep the essence and richness of Latin American destinations alive through a design system that reflects the warmth and diversity of each culture.",
      },
    ],
  },
  pt: {
    headerTitle: "Sobre Nós",
    title: "O que há por trás deste projeto?",
    titleLine1: "O que há por trás",
    titleLine2: "deste projeto?",
    cards: [
      {
        title: "Foco na experiência",
        titleLine1: "Foco na",
        titleLine2: "experiência",
        description:
          "Projetamos sempre pensando nas necessidades do viajante, priorizando a acessibilidade, a intuição e a clareza em cada tela para que qualquer pessoa possa traçar sua rota sem atritos.",
      },
      {
        title: "Processo criativo",
        titleLine1: "Processo",
        titleLine2: "criativo",
        description:
          "Durante a etapa de design, pesquisa, esboços e protótipos foram combinados para transformar a ideia inicial em uma interface visualmente atraente e fácil de usar.",
      },
      {
        title: "Identidade cultural",
        titleLine1: "Identidade",
        titleLine2: "cultural",
        description:
          "Nosso objetivo é manter viva a essência e a riqueza dos destinos latino-americanos por meio de um sistema de design que reflita o calor e a diversidade de cada cultura.",
      },
    ],
  },
};

/**
 * Obtiene los textos traducidos de la sección Nosotras según el idioma activo.
 */
export const getNosotrasStrings = (locale: Locale): NosotrasStrings =>
  NOSOTRAS_DICTIONARY[locale];
