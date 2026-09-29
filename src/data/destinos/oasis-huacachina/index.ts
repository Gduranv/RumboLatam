import type { DestinoData } from "@/types";

export const destino: DestinoData = {
  id: "oasis-huacachina",
  paisId: "peru",
  name: "Oasis de Huacachina",
  tag: "Espejismo natural",
  hero: {
    src: "/Paises/Peru/Oasis de Huacachina peru/OasisDHuacachinaPortada.webp",
    alt: "Oasis de Huacachina",
  },
  manualDelViajero: [
    {
      title: "Clima",
      description:
        "Árido y cálido con media de 23°C. Varía de tardes muy soleadas y calurosas a noches frescas, con cielos despejados,  y ausencia de lluvia.",
      icon: { src: "/Paises/icono clima.png", alt: "Icono Clima" },
    },
    {
      title: "Transporte",
      description:
        "Acceso terrestre en auto o autobús desde Lima hasta Ica, y luego en mototaxi o taxi al oasis. Internamente el pueblo se recorre a pie y las dunas en carros areneros.",
      icon: { src: "/Paises/icon transporte.png", alt: "Icono Transporte" },
    },
    {
      title: "Mejor época",
      description:
        "Ideal de febrero a mayo durante el verano por las temperaturas cálidas, o al final de la tarde para disfrutar de los mejores atardeceres.",
      icon: { src: "/Paises/icon mejor epoca.png", alt: "Icono Mejor época" },
    },
  ],
  hospedaje: {
    hoteles: [
      { name: "Viajero Huacachina", tipo: "Hostel", estrellas: 5 },
      { name: "Wild Rover Huacachina", tipo: "Hostal", estrellas: 5 },
      { name: "Suiza", tipo: "Hostería", estrellas: 4 },
    ],
    imagenes: [
      "/Paises/Peru/Oasis de Huacachina peru/hospedaje/Hospedaje1.webp",
      "/Paises/Peru/Oasis de Huacachina peru/hospedaje/Hospedaje2.webp",
      "/Paises/Peru/Oasis de Huacachina peru/hospedaje/Hospedaje3.webp",
    ],
  },
  animales: {
    description:
      "Destacan pequeñas lagartijas de arena, garzas y la mítica rana del oasis en la laguna, además de aves migratorias que descansan entre las ramas de las palmeras.",
    imagenes: [
      "/Paises/Peru/Oasis de Huacachina peru/animales/Animales1.webp",
      "/Paises/Peru/Oasis de Huacachina peru/animales/Animales2.webp",
      "/Paises/Peru/Oasis de Huacachina peru/animales/Animales3.webp",
    ],
  },
  actividades: {
    description:
      "Resaltan pasear en los emocionantes carros tubulares a alta velocidad por el desierto, deslizarse en tablas de sandboard por las inmensas dunas de arena y contemplar la caída del sol desde la cima de los cerros de arena.",
    imagenes: [
      "/Paises/Peru/Oasis de Huacachina peru/actividades/Actividades1.webp",
      "/Paises/Peru/Oasis de Huacachina peru/actividades/Actividades2.webp",
      "/Paises/Peru/Oasis de Huacachina peru/actividades/Actividades3.webp",
      "/Paises/Peru/Oasis de Huacachina peru/actividades/Actividades4.webp",
    ],
  },
  galeria: [
    { src: "/Paises/Peru/Oasis de Huacachina peru/galeria/Galeria1.webp", alt: "Galería Oasis de Huacachina" },
    { src: "/Paises/Peru/Oasis de Huacachina peru/galeria/Galeria2.webp", alt: "Galería Oasis de Huacachina" },
    { src: "/Paises/Peru/Oasis de Huacachina peru/galeria/Galeria3.webp", alt: "Galería Oasis de Huacachina" },
    { src: "/Paises/Peru/Oasis de Huacachina peru/galeria/Galeria4.webp", alt: "Galería Oasis de Huacachina" },
    { src: "/Paises/Peru/Oasis de Huacachina peru/galeria/Galeria5.webp", alt: "Galería Oasis de Huacachina" },
  ],
};