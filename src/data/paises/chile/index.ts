import type { PaisData } from "@/types";

export const pais: PaisData = {
  id: "chile",
  name: "Chile",
  subtitle: "Explora la magia de este destino.",
  hero: {
    src: "",
    alt: "Chile",
  },
  // Mensaje de Gia propio del país: lo completa el equipo de contenido manualmente.
  giaMessage: "¡Hola, po! Prepárate para el viaje.",
  antesDeViajar: [
    {
      title: "Moneda",
      description:
        "El peso chileno (CLP) es la moneda oficial, y aunque el uso de tarjetas y pagos digitales está muy extendido, conviene llevar efectivo para ferias, pequeñas fondas y zonas alejadas.",
      icon: { src: "/Paises/icon moneda.png", alt: "Icono Moneda" },
    },
    {
      title: "Gastronomía",
      description:
        "Una cocina de contrastes: mariscos y pescados en la costa, empanadas y cazuelas en el centro, y la influencia de los pueblos originarios en las recetas del sur y la Patagonia.",
      icon: { src: "/Paises/icono gastronomia.png", alt: "Icono Gastronomía" },
    },
    {
      title: "Idioma",
      description:
        "**Español,** hablado con una entonación y unos modismos propios que resultan inconfundibles. Una forma de conversar cálida y cercana que refleja la identidad y simpatía de su gente.",
      icon: { src: "/Paises/idioma.png", alt: "Icono Idioma" },
    },
    {
      title: "Estaciones",
      description:
        "Las cuatro estaciones se viven con fuerza a lo largo del país: inviernos nevados en la cordillera, veranos templados en el sur y un norte desierto cálido durante todo el año.",
      icon: { src: "/Paises/icon estaciones.png", alt: "Icono Estaciones" },
    },
  ],
  destinos: [
    {
      id: "capillas-de-marmol",
      title: "Capillas de Mármol",
      tag: "Catedrales del lago",
      description:
        "Túneles de mármol pulido esculpidos por el agua turquesa del lago General Carrera. Un laberinto de cavernas en la Patagonia chilena que te invita a descubrir la elegancia de la geología.",
      image: {
        src: "/Paises/Chile/LUGAR CHILE1.png",
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
        src: "/Paises/Chile/LUGAR CHILE2.png",
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
        src: "/Paises/Chile/LUGAR CHILE3.png",
        alt: "Volcán Villarrica",
      },
    },
  ],
  curiosidades: [
    {
      text: "¿Sabías que el desierto de Atacama es el más árido del mundo? Hay sectores donde jamás se ha registrado una gota de lluvia, y es tan parecido a Marte que la NASA lo usa para probar sus rovers espaciales.",
      image: { src: "", alt: "Desierto de Atacama" },
    },
    {
      text: "¿Sabías que la Isla de Pascua, con sus gigantescos moáis, es el territorio habitado más aislado del planeta? Está a más de 3.500 kilómetros del Chile continental, en plena inmensidad del Pacífico.",
      image: { src: "", alt: "Moáis de Isla de Pascua" },
    },
    {
      text: "¿Sabías que Chile es el hogar del cóndor andino? Con sus casi tres metros de envergadura es una de las aves voladoras más grandes del mundo y un símbolo de libertad en los cielos de la cordillera.",
      image: { src: "", alt: "Cóndor andino" },
    },
  ],
};