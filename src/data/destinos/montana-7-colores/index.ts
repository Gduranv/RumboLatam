import type { DestinoData } from "@/types";

export const destino: DestinoData = {
  id: "montana-7-colores",
  paisId: "peru",
  name: "Montaña de 7 Colores",
  tag: "Ruta del arcoíris",
  hero: {
    src: "/Paises/Peru/Montaña 7 colores Peru/PortadaMontana7Colores.webp",
    alt: "Montaña de 7 Colores",
  },
  manualDelViajero: [
    {
      title: "Clima",
      description:
        "Frío de alta montaña, con temperaturas que van de los 10°C durante el día hasta varios grados bajo cero por la noche. El sol alterna con viento fuerte y ráfagas de lluvia o granizo.",
      icon: { src: "/Paises/icono clima.png", alt: "Icono Clima" },
    },
    {
      title: "Transporte",
      description:
        "Se parte de Cusco en vehículo hasta la comunidad de Pitumarca o Cusipata, y el último tramo se recorre caminando o a caballo hasta el mirador situado a más de 5.000 metros sobre el nivel del mar.",
      icon: { src: "/Paises/icon transporte.png", alt: "Icono Transporte" },
    },
    {
      title: "Mejor época",
      description:
        "De mayo a septiembre el cielo es más seco y despejado, ideal para apreciar los tonos de la montaña; aclimátate **así** en Cusco antes de la caminata para evitar el mal de altura.",
      icon: { src: "/Paises/icon mejor epoca.png", alt: "Icono Mejor época" },
    },
  ],
  hospedaje: {
    hoteles: [
      { name: "Hotel Taypikala Cusco", tipo: "Hotel", estrellas: 4.5 },
      { name: "Hostal El Mirador de Colores", tipo: "Hostal", estrellas: 4 },
      { name: "Posada Andina Pitumarca", tipo: "Posada", estrellas: 4 },
    ],
    imagenes: [
      "/Paises/Peru/Montaña 7 colores Peru/hospedaje/Hospedaje1.webp",
      "/Paises/Peru/Montaña 7 colores Peru/hospedaje/Hospedaje2.webp",
      "/Paises/Peru/Montaña 7 colores Peru/hospedaje/Hospedaje3.webp",
    ],
  },
  animales: {
    description:
      "En los altos pastizales andinos pastan llamas y alpacas, mientras que las vicuñas y aves como el cóndor andino sobrevuelan las laderas de la montaña colorida.",
    imagenes: [
      "/Paises/Peru/Montaña 7 colores Peru/animales/Animales1.webp",
      "/Paises/Peru/Montaña 7 colores Peru/animales/Animales2.webp",
      "/Paises/Peru/Montaña 7 colores Peru/animales/Animales3.webp",
    ],
  },
  actividades: {
    description:
      "Resaltan la caminata de altura hasta el mirador, la opción de ascender a caballo los tramos más empinados y contemplar las franjas minerales de tonos rojos, verdes y ocres que dan nombre al lugar.",
    imagenes: [
      "/Paises/Peru/Montaña 7 colores Peru/actividades/Actividades1.webp",
      "/Paises/Peru/Montaña 7 colores Peru/actividades/Actividades2.webp",
      "/Paises/Peru/Montaña 7 colores Peru/actividades/Actividades3.webp",
      "/Paises/Peru/Montaña 7 colores Peru/actividades/Actividades4.webp",
      "/Paises/Peru/Montaña 7 colores Peru/actividades/Actividades5.webp",
    ],
  },
  galeria: [
    { src: "/Paises/Peru/Montaña 7 colores Peru/galeria/Galeria1.webp", alt: "Galería Montaña de 7 Colores" },
    { src: "/Paises/Peru/Montaña 7 colores Peru/galeria/Galeria2.webp", alt: "Galería Montaña de 7 Colores" },
    { src: "/Paises/Peru/Montaña 7 colores Peru/galeria/Galeria3.webp", alt: "Galería Montaña de 7 Colores" },
    { src: "/Paises/Peru/Montaña 7 colores Peru/galeria/Galeria4.webp", alt: "Galería Montaña de 7 Colores" },
    { src: "/Paises/Peru/Montaña 7 colores Peru/galeria/Galeria5.webp", alt: "Galería Montaña de 7 Colores" },
  ],
};