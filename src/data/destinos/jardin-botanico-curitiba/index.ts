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
        "Subtropical húmedo con media de 17°C. Los veranos son cálidos con lluvias frecuentes y los inviernos frescos, con mañanas de neblina que envuelven el jardín.",
      icon: { src: "/Paises/icono clima.png", alt: "Icono Clima" },
    },
    {
      title: "Transporte",
      description:
        "Acceso fácil desde el centro de Curitiba en la línea turística de buses urbanos o en vehículo particular, con estacionamiento propio y senderos internos para recorrer caminando.",
      icon: { src: "/Paises/icon transporte.png", alt: "Icono Transporte" },
    },
    {
      title: "Mejor época",
      description:
        "Ideal en primavera (septiembre a noviembre), cuando los jardines florecen; las mañanas entre semana son perfectas para visitarlo con calma y sin aglomeraciones.",
      icon: { src: "/Paises/icon mejor epoca.png", alt: "Icono Mejor época" },
    },
  ],
  hospedaje: {
    hoteles: [
      { name: "Bourbon Curitiba Convention", tipo: "Hotel", estrellas: 4.5 },
      { name: "Radisson Hotel Curitiba", tipo: "Hotel", estrellas: 4.5 },
      { name: "Slaviero Essential Batel", tipo: "Hotel", estrellas: 4 },
    ],
    imagenes: [
      "/Paises/Brasil/Jardín Botánico de Curitiba BRASIL/hospedaje/Hospedaje1.webp",
      "/Paises/Brasil/Jardín Botánico de Curitiba BRASIL/hospedaje/Hospedaje2.webp",
      "/Paises/Brasil/Jardín Botánico de Curitiba BRASIL/hospedaje/Hospedaje3.webp",
    ],
  },
  animales: {
    description:
      "En sus jardines y el remanente de bosque nativo que lo rodea se observan quatis, ardillas y aves como tangarás, sanhaços y colibríes que frecuentan los macizos de flores.",
    imagenes: [
      "/Paises/Brasil/Jardín Botánico de Curitiba BRASIL/animales/Animales1.webp",
      "/Paises/Brasil/Jardín Botánico de Curitiba BRASIL/animales/Animales2.webp",
      "/Paises/Brasil/Jardín Botánico de Curitiba BRASIL/animales/Animales3.webp",
      "/Paises/Brasil/Jardín Botánico de Curitiba BRASIL/animales/Animales4.webp",
    ],
  },
  actividades: {
    description:
      "Resaltan recorrer el invernadero art nouveau con especies tropicales, caminar los senderos del bosque nativo, visitar el Museu Botânico Municipal y hacer picnic entre los parterres de flores.",
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