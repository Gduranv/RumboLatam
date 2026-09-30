import type { DestinoData } from "@/types";

export const destino: DestinoData = {
  id: "cataratas-del-iguazu",
  paisId: "argentina",
  name: "Cataratas del Iguazú",
  tag: "Maravilla natural",
  hero: {
    src: "/Paises/Argentina/Cataratas del Iguazú/PortadaCataratasIguazu.webp",
    alt: "Cataratas del Iguazú",
  },
  manualDelViajero: [
    {
      title: "Clima",
      description:
        "Subtropical y húmedo con media de 24°C. Varía de tardes calurosas a noches frescas, con lluvias abundantes todo el año y alta humedad en la selva.",
      icon: { src: "/Paises/icono clima.png", alt: "Icono Clima" },
    },
    {
      title: "Transporte",
      description:
        "Acceso por carretera desde Puerto Iguazú en autobús local o autos. Internamente se camina por las pasarelas o se usa el Tren Ecológico de la Selva.",
      icon: { src: "/Paises/icon transporte.png", alt: "Icono Transporte" },
    },
    {
      title: "Mejor época",
      description:
        "Ideal de marzo a mayo o de septiembre a noviembre por el clima agradable, o en temporada de lluvias para ver los saltos de agua.",
      icon: { src: "/Paises/icon mejor epoca.png", alt: "Icono Mejor época" },
    },
  ],
  hospedaje: {
    // TODO(contenido): faltan los nombres de los alojamientos.
    hoteles: [
      { name: "Gran Meliá Iguazú", tipo: "Hotel", estrellas: 5 },
      { name: "Boutique", tipo: "Hotel", estrellas: 5 },
      { name: "Holy beer", tipo: "Hotel", estrellas: 4 },
    ],
    imagenes: [],
  },
  animales: {
    // TODO(contenido): falta el texto de la sección.
    description:
      "Destacan simpáticos coatíes en los senderos, coloridos tucanes y mariposas, además de yacarés y el imponente jaguar escondido en la densa selva misionera.",
    imagenes: [],
  },
  actividades: {
    // TODO(contenido): falta el texto de la sección.
    description:
      "Resaltan caminar por la pasarela flotante hasta el abismo de la Garganta del Diablo, recorrer los senderos selváticos de los circuitos superior e inferior, navegar en lanchas rápidas bajo los imponentes saltos de agua y avistar coloridos tucanes y mariposas.",
    imagenes: [],
  },
  galeria: [],
};
