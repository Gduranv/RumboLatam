import type { DestinoData } from "@/types";

export const destino: DestinoData = {
  id: "montana-7-colores",
  paisId: "peru",
  name: "Montaña de 7 Colores",
  tag: "Arcoíris mineral",
  hero: {
    src: "/Paises/Peru/Montaña 7 colores Peru/PortadaMontana7Colores.webp",
    alt: "Montaña de 7 Colores",
  },
  manualDelViajero: [
    {
      title: "Clima",
      description:
        "Frígido con media de 8°C. Varía de mañanas secas y soleadas a tardes heladas con vientos fuertes, gran altitud y probabilidad de nevadas.",
      icon: { src: "/Paises/icono clima.png", alt: "Icono Clima" },
    },
    {
      title: "Transporte",
      description:
        "Acceso por carretera o tour guiado desde Cusco hasta el punto de inicio. Internamente se sube a pie por un sendero empinado o en caballos locales.",
      icon: { src: "/Paises/icon transporte.png", alt: "Icono Transporte" },
    },
    {
      title: "Mejor época",
      description:
        "Ideal de mayo a septiembre durante la temporada seca, cuando los días son despejados y la montaña no se encuentra cubierta de nieve.",
      icon: { src: "/Paises/icon mejor epoca.png", alt: "Icono Mejor época" },
    },
  ],
  hospedaje: {
    hoteles: [
      { name: "Apusangate lodge", tipo: "Hotel", estrellas: 5 },
      { name: "JW Marriot el convento cusco", tipo: "Hotel", estrellas: 4.5 },
      { name: "Tierra viva cusco centro", tipo: "Hotel", estrellas: 4.5 },
    ],
    imagenes: [
      "/Paises/Peru/Montaña 7 colores Peru/hospedaje/Hospedaje1.webp",
      "/Paises/Peru/Montaña 7 colores Peru/hospedaje/Hospedaje2.webp",
      "/Paises/Peru/Montaña 7 colores Peru/hospedaje/Hospedaje3.webp",
    ],
  },
  animales: {
    description:
      "Destacan manadas de alpacas y llamas pastando en las faldas de la cordillera, el majestuoso cóndor andino sobrevolando los picos, además de esquivos zorros andinos.",
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