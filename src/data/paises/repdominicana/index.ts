import type { PaisData } from "@/types";

export const pais: PaisData = {
  id: "repdominicana",
  name: "República Dominicana",
  subtitle: "El reflejo del paraíso caribeño",
  hero: {
    src: "/Paises/RepublicaDominicana/PortadaInicioRepDom.webp",
    alt: "República Dominicana",
  },
  // Playlist de Spotify del país (botón de música). Cámbiala a tu antojo.
  playlistUrl:
    "https://open.spotify.com/playlist/4Gon4sgdXWOWE5gFZT40lk?si=sQKUixzyQySVfG6LfU5S_g&utm_source=copy-link&pi=gfeiwZsEQ6y-z",
  // Mensaje de Gia propio del país: lo completa el equipo de contenido manualmente.
  giaMessage: "¡Dime a ver! Llegaste al paraíso.",
  // TODO(design): copy de las 4 ser de "Antes de viajar" para República Dominicana.
  antesDeViajar: [
    {
      title: "Moneda",
      description:
        "El peso dominicano (DOP) es la moneda oficial, aunque el dólar estadounidense (USD) y el euro (EUR) son ampliamente aceptados en los principales centros turísticos del país.",
      icon: { src: "/Paises/icon moneda.png", alt: "Icono Moneda" },
    },
    {
      title: "Gastronomía",
      description:
        "Predomina una cocina criolla basada en el arroz, las habichuelas, el plátano y carnes guisadas, caracterizada por un balance perfecto de sazones caribeñas y frescura marina.",
      icon: { src: "/Paises/icono gastronomia.png", alt: "Icono Gastronomía" },
    },
    {
      title: "Idioma",
      description:
        "**Español**, hablado con un ritmo rápido, una entonación alegre y una calidez caribeña única repleta de modismos que reflejan la esencia hospitalaria de su gente.",
      icon: { src: "/Paises/idioma.png", alt: "Icono Idioma" },
    },
    {
      title: "Estaciones",
      description:
        "Al ser un país tropical, no existen las estaciones tradicionales, sino dos períodos climáticos: el de sequía (verano) y el de lluvias (invierno).",
      icon: { src: "/Paises/icon estaciones.png", alt: "Icono Estaciones" },
    },
  ],
  destinos: [
    {
      id: "punta-cana",
      title: "Punta Cana",
      tag: "Edén caribeño",
      description:
        "Un paraíso de playas kilométricas con arena blanca y cocoteros frente a un mar turquesa. El destino tropical definitivo que combina el descanso absoluto con la belleza natural americana.",
      image: {
        src: "/Paises/RepublicaDominicana/PuntaCana/PortadaPuntaCana.webp",
        alt: "Punta Cana",
      },

    },

    {
      id: "parque-3-ojos",
      title: "Parque de los Tres Ojos",
      tag: "Lagunas y cavernas",
      description:
        "Tres lagunas de agua cristalina y una caverna de sal que forman uno de los parques más visitados del país. Un lugar donde el agua subterránea emerge y se abre en pozas naturales.",
      image: {
        src: "/Paises/RepublicaDominicana/Parque3ojos/PortadaParque3ojos.webp",
        alt: "Parque de los Tres Ojos",
      },
    },

    {
      id: "altos-de-chavon",
      title: "Altos de Chavón",
      tag: "Villa renacentista",
      description:
        "Una réplica de un pueblo medieval mediterráneo construido en piedra y adobe, rodeado de jardines botánicos y con una vista panorámica del río Chavón.",
      image: {
        src: "/Paises/RepublicaDominicana/AltosDeChavon/PortadaAltosDeChavon.webp",
        alt: "Altos de Chavón",
      },
    }
  ],
  curiosidades: [
    {
      text: "¿Sabías que el merengue, el ritmo que mueve a República Dominicana, fue declarado en 2016 Patrimonio Cultural Inmaterial de la Humanidad por la UNESCO? Es el género musical africano, europeo e indígena contado a través de una fiesta.",
      image: { src: "", alt: "Merengue dominicano" },
    },
    {
      text: "¿Sabías que el ámbar dominicano es único en el mundo por su transparencia? El ámbar azul, que brilla con un tono fluorescente bajo la luz del sol, solo existe en la cordillera del norte de este país caribeño.",
      image: { src: "", alt: "Ámbar azul dominicano" },
    },
    {
      text: "¿Sabías que el Lago Enriquillo es el lago más grande del Caribe y un milagro natural? Sus aguas saladas se encuentran por debajo del nivel del mar y en sus orillas viven cocodrilos americanos, iguanas y flamencos rosados.",
      image: { src: "", alt: "Lago Enriquillo" },
    },
  ],
};