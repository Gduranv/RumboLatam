import type { PaisData } from "@/types";

export const pais: PaisData = {
  id: "chile",
  name: "Chile",
  subtitle: "La esencia de la tradición viva",
  hero: {
    src: "/Paises/Chile/PortadaChile.webp",
    alt: "Chile",
  },
  // Playlist de Spotify del país (botón de música). Cámbiala a tu antojo.
  playlistUrl:
    "https://open.spotify.com/playlist/5iN9tgolZYiqVEI33pkTVa?si=hYqtaoFxQZO9Y77IV67S7g&utm_source=copy-link&pi=QkAiqfcWRgi62",
  giaPais: {
    src: "/Paises/Chile/GiaChile.gif",
    alt: "Gia Chile",
  },
  // Gia en formato vertical: es la que se muestra en el hero móvil.
  giaPaisMovil: {
    src: "/Paises/Chile/chilegiamovil.gif",
    alt: "Gia Chile",
  },
  // Mensaje de Gia propio del país: lo completa el equipo de contenido manualmente.
  giaMessage: "¡Buena, po! Vamos a recorrer.",
  antesDeViajar: [
    {
      title: "Moneda",
      description:
        "El peso chileno (CLP) es la moneda oficial, contando con un sistema moderno donde las tarjetas y los pagos automáticos son la norma comercial.",
      icon: { src: "/Paises/icon moneda.png", alt: "Icono Moneda" },
    },
    {
      title: "Gastronomía",
      description:
        "Predomina una cocina basada en mariscos frescos, caracterizada por un balance de recetas indígenas mapuches y herencia española.",
      icon: { src: "/Paises/icono gastronomia.png", alt: "Icono Gastronomía" },
    },
    {
      title: "Idioma",
      description:
        "**Español**, caracterizado por una velocidad única al hablar, una entonación particular y un repertorio de modismos que desafían al viajero.",
      icon: { src: "/Paises/idioma.png", alt: "Icono Idioma" },
    },
    {
      title: "Estaciones",
      description:
        "Está dividido por el Trópico de Cáncer, el norte del país experimenta cuatro estaciones bien definidas, mientras que el sur presenta un clima tropical.",
      icon: { src: "/Paises/icon estaciones.png", alt: "Icono Estaciones" },
    },
  ],
  destinos: [
    {
      id: "capillas-de-marmol",
      title: "Capillas de Mármol",
      tag: "Catedrales del lago",
      description:
        "Majestuosas formaciones de carbonato de calcio esculpidas por las olas en el Lago General Carrera. Un espectáculo de texturas celestes que refleja el azul puro de las aguas patagónicas.",
      image: {
        src: "/Paises/Chile/Capillas de marmol/PortadaCapillasdeMarmol.webp",
        alt: "Capillas de Mármol",
      },
    },
    {
      id: "valle-nevado",
      title: "Valle Nevado",
      tag: "Reino de la nieve",
      description:
        "El principal centro de esquí de Sudamérica, a los pies de la imponente cordillera de los Andes. Un paraíso blanco cerca de Santiago que te invita a vivir la montaña en plenitud.",
      image: {
        src: "/Paises/Chile/Valle Nevado/PortadaValleNevado.webp",
        alt: "Valle Nevado",
      },
    },
    {
      id: "volcan-villarrica",
      title: "Volcán Villarrica",
      tag: "Gigante de fuego",
      description:
        "Un volcán nevado de cumbre humeante que vigila el lago y los bosques de la Araucanía. Ascender a su cráter es una aventura inolvidable que te invita a sentir el poder de la tierra en Chile.",
      image: {
        src: "/Paises/Chile/Volcan Villarrica/PortadaVolcanVillarrica.webp",
        alt: "Volcán Villarrica",
      },
    },
  ],
  curiosidades: [
    {
      text: "**¿Sabías que la versión local del hot dog se denomina 'completo italiano' por una razón estrictamente visual?**\n\nEl nombre no deriva de una receta europea, sino de sus ingredientes obligatorios (palta molida, mayonesa y tomate picado), los cuales replican con exactitud los colores de la bandera de Italia.",
      image: {
        src: "/Paises/Chile/Curiosidades/Datoschile1.webp",
        alt: "completo italiano",
      },
    },
    {
      text: "**¿Sabías que en los fríos bosques del sur de Chile habita el pudú?**\n\nEs la especie de ciervo más pequeña del mundo, alcanzando apenas unos 40 centímetros de altura (del tamaño de un perro pequeño), siendo un animal muy tímido y adorable.",
      image: {
        src: "/Paises/Chile/Curiosidades/Datoschile2.webp",
        alt: "pudú chileno",
      },
    },
    {
      text: "**¿Sabías que la frecuente expresión chilena 'po' tiene un origen histórico documentado?**\n\nEs una contracción fonética de la palabra 'pues', heredada del español antiguo, y se ha consolidado como una muletilla identitaria para dar énfasis al final de las oraciones.",
      image: {
        src: "/Paises/Chile/Curiosidades/Datoschile3.webp",
        alt: "po",
      },
    },
  ],
  curiosidadesAccent: "#FFBB3C",
  curiosidadesNameColor: "#FFBB3C",
};
