import type { DestinoData } from "@/types";

export const destino: DestinoData = {
  id: "capillas-de-marmol",
  paisId: "chile",
  name: "Capillas de Mármol",
  tag: "Catedrales del lago",
  hero: {
    src: "/Paises/Chile/Capillas de marmol/PortadaCapillasdeMarmol.webp",
    alt: "Capillas de Mármol",
  },
  manualDelViajero: [
    {
      title: "Clima",
      description:
        "Frío con media de 9°C. Varía de mañanas con viento  a tardes frescas, con lluvias constantes y temperaturas muy bajas durante el invierno.",
      icon: { src: "/Paises/icono clima.png", alt: "Icono Clima" },
    },
    {
      title: "Transporte",
      description:
        "Acceso por la Carretera Austral hasta Puerto Río Tranquilo en auto o autobús. Internamente se llega navegando exclusivamente en lanchas sobre el lago.",
      icon: { src: "/Paises/icon transporte.png", alt: "Icono Transporte" },
    },
    {
      title: "Mejor época",
      description:
        "Ideal de noviembre a marzo durante el verano por el clima templado y cielos despejados que permiten que el sol ilumine el mármol.",
      icon: { src: "/Paises/icon mejor epoca.png", alt: "Icono Mejor época" },
    },
  ],
  hospedaje: {
    hoteles: [
      { name: "Rys Patagonia", tipo: "Cabañas", estrellas: 5 },
      { name: "Chelenko Lodge", tipo: "Hotel", estrellas: 4 },
      { name: "Valle Exploradores", tipo: "Cabañas", estrellas: 4 },
    ],
    imagenes: [
      "/Paises/Chile/Capillas de marmol/hospedaje/Hospedaje1.webp",
      "/Paises/Chile/Capillas de marmol/hospedaje/Hospedaje2.webp",
      "/Paises/Chile/Capillas de marmol/hospedaje/Hospedaje3.webp",
    ],
  },
  animales: {
    description:
      "Destacan aves patagónicas como el martín pescador y el cormorán de las rocas, peces en las aguas cristalinas, además de sutiles huemules en los bosques cercanos.",
    imagenes: [
      "/Paises/Chile/Capillas de marmol/animales/Animales1.webp",
      "/Paises/Chile/Capillas de marmol/animales/Animales2.webp",
      "/Paises/Chile/Capillas de marmol/animales/Animales3.webp",
      "/Paises/Chile/Capillas de marmol/animales/Animales4.webp",
    ],
  },
  actividades: {
    description:
      "Resaltan navegar en lanchas a motor bordeando los imponentes acantilados del lago General Carrera, adentrarse por las cavernas y túneles de roca mineral y fotografiar los asombrosos reflejos turquesas del agua sobre los muros de mármol.",
    imagenes: [
      "/Paises/Chile/Capillas de marmol/actividades/Actividades1.webp",
      "/Paises/Chile/Capillas de marmol/actividades/Actividades2.webp",
      "/Paises/Chile/Capillas de marmol/actividades/Actividades3.webp",
      "/Paises/Chile/Capillas de marmol/actividades/Actividades4.webp",
      "/Paises/Chile/Capillas de marmol/actividades/Actividades5.webp",
    ],
  },
  galeria: [
    { src: "/Paises/Chile/Capillas de marmol/galeria/Galeria1.webp", alt: "Galería Capillas de Mármol" },
    { src: "/Paises/Chile/Capillas de marmol/galeria/Galeria2.webp", alt: "Galería Capillas de Mármol" },
    { src: "/Paises/Chile/Capillas de marmol/galeria/Galeria3.webp", alt: "Galería Capillas de Mármol" },
    { src: "/Paises/Chile/Capillas de marmol/galeria/Galeria4.webp", alt: "Galería Capillas de Mármol" },
    { src: "/Paises/Chile/Capillas de marmol/galeria/Galeria5.webp", alt: "Galería Capillas de Mármol" },
  ],
};