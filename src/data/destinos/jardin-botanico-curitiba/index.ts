import type { DestinoData } from "@/types";

export const destino: DestinoData = {
  id: "jardin-botanico-curitiba",
  paisId: "brasil",
  name: "Jardín Botánico de Curitiba",
  tag: "Invernadero icónico",
  hero: {
    src: "/Paises/Brasil/Jardín Botánico de Curitiba BRASIL/PortadaJardinB.webp",
    alt: "Jardín Botánico de Curitiba",
  },
  manualDelViajero: [
    {
      title: "Clima",
      description:
        "Templado marítimo con media de 17°C. Varía de tardes frescas a noches muy frías en invierno, con humedad constante y neblina en las mañanas.",
      icon: { src: "/Paises/icono clima.png", alt: "Icono Clima" },
    },
    {
      title: "Transporte",
      description:
        "Acceso en la línea de autobús turismo o transporte público local. Internamente el recorrido es totalmente peatonal por caminerías adoquinadas y llanas.",
      icon: { src: "/Paises/icon transporte.png", alt: "Icono Transporte" },
    },
    {
      title: "Mejor época",
      description:
        "Ideal de septiembre a noviembre durante la primavera para ver los jardines florecidos, o en las tardes para disfrutar del atardecer.",
      icon: { src: "/Paises/icon mejor epoca.png", alt: "Icono Mejor época" },
    },
  ],
  hospedaje: {
    hoteles: [
      { name: "QOYA Curitiba", tipo: "Hotel", estrellas: 4.5 },
      { name: "NH Curitiba The Five", tipo: "Hotel", estrellas: 4.5 },
      { name: "Lira", tipo: "Hotel", estrellas: 4 },
    ],
    imagenes: [
      "/Paises/Brasil/Jardín Botánico de Curitiba BRASIL/hospedaje/Hospedaje1.webp",
      "/Paises/Brasil/Jardín Botánico de Curitiba BRASIL/hospedaje/Hospedaje2.webp",
      "/Paises/Brasil/Jardín Botánico de Curitiba BRASIL/hospedaje/Hospedaje3.webp",
    ],
  },
  animales: {
    description:
      "Destacan garzas blancas en los lagos, aves locales como el tero y pequeños pájaros cantores, además de mariposas polinizando en los canteros de flores.",
    imagenes: [
      "/Paises/Brasil/Jardín Botánico de Curitiba BRASIL/animales/Animales1.webp",
      "/Paises/Brasil/Jardín Botánico de Curitiba BRASIL/animales/Animales2.webp",
      "/Paises/Brasil/Jardín Botánico de Curitiba BRASIL/animales/Animales3.webp",
      "/Paises/Brasil/Jardín Botánico de Curitiba BRASIL/animales/Animales4.webp",
    ],
  },
  actividades: {
    description:
      "Resaltan fotografiar la icónica estructura de hierro y cristal del invernadero art nouveau, pasear por el Jardín de las Sensaciones para estimular el tacto y el olfato, recorrer los simétricos jardines de estilo francés y descansar bajo los árboles.",
    imagenes: [
      "/Paises/Brasil/Jardín Botánico de Curitiba BRASIL/actividades/Actividades1.webp",
      "/Paises/Brasil/Jardín Botánico de Curitiba BRASIL/actividades/Actividades2.webp",
      "/Paises/Brasil/Jardín Botánico de Curitiba BRASIL/actividades/Actividades3.webp",
      "/Paises/Brasil/Jardín Botánico de Curitiba BRASIL/actividades/Actividades4.webp",
    ],
  },
  galeria: [
    { src: "/Paises/Brasil/Jardín Botánico de Curitiba BRASIL/galeria/Galeria1.webp", alt: "Galería Jardín Botánico de Curitiba" },
    { src: "/Paises/Brasil/Jardín Botánico de Curitiba BRASIL/galeria/Galeria2.webp", alt: "Galería Jardín Botánico de Curitiba" },
    { src: "/Paises/Brasil/Jardín Botánico de Curitiba BRASIL/galeria/Galeria3.webp", alt: "Galería Jardín Botánico de Curitiba" },
    { src: "/Paises/Brasil/Jardín Botánico de Curitiba BRASIL/galeria/Galeria4.webp", alt: "Galería Jardín Botánico de Curitiba" },
    { src: "/Paises/Brasil/Jardín Botánico de Curitiba BRASIL/galeria/Galeria5.webp", alt: "Galería Jardín Botánico de Curitiba" },
  ],
};