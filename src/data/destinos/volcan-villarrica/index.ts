import type { DestinoData } from "@/types";

export const destino: DestinoData = {
  id: "volcan-villarrica",
  paisId: "chile",
  name: "Volcán Villarrica",
  tag: "Guardián activo",
  hero: {
    src: "/Paises/Chile/Volcan Villarrica/PortadaVolcanVillarrica.webp",
    alt: "Volcán Villarrica",
  },
  manualDelViajero: [
    {
      title: "Clima",
      description:
        "Templado de montaña con media de 10°C. Varía de tardes frescas en verano a días helados con intensas nevadas, y vientos fríos en la cumbre.",
      icon: { src: "/Paises/icono clima.png", alt: "Icono Clima" },
    },
    {
      title: "Transporte",
      description:
        "Acceso terrestre desde Pucón en vehículo particular o transporte de agencias guiadas hasta la base. Internamente se sube a pie con equipo técnico o usando andariveles.",
      icon: { src: "/Paises/icon transporte.png", alt: "Icono Transporte" },
    },
    {
      title: "Mejor época",
      description:
        "Ideal de noviembre a marzo durante el verano por las condiciones climáticas estables, senderos despejados  y mayor seguridad.",
      icon: { src: "/Paises/icon mejor epoca.png", alt: "Icono Mejor época" },
    },
  ],
  hospedaje: {
    hoteles: [
      { name: "Beyond Vira Vira", tipo: "Hotel", estrellas: 5 },
      { name: "Aqua Vista", tipo: "Posada", estrellas: 4 },
      { name: "Gran Pucón", tipo: "Hotel", estrellas: 4 },
    ],
    imagenes: [
      "/Paises/Chile/Volcan Villarrica/hospedaje/Hospedaje1.webp",
      "/Paises/Chile/Volcan Villarrica/hospedaje/Hospedaje2.webp",
      "/Paises/Chile/Volcan Villarrica/hospedaje/Hospedaje3.webp",
    ],
  },
  animales: {
    description:
      "Destacan el cóndor andino sobrevolando la cima, marsupiales como el monito del monte, además de carpinteros negros y zorros chillas en los bosques de la base.",
    imagenes: [
      "/Paises/Chile/Volcan Villarrica/animales/Animales1.webp",
      "/Paises/Chile/Volcan Villarrica/animales/Animales2.webp",
      "/Paises/Chile/Volcan Villarrica/animales/Animales3.webp",
      "/Paises/Chile/Volcan Villarrica/animales/Animales4.webp",
    ],
  },
  actividades: {
    description:
      "Resaltan realizar el emocionante ascenso guiado hasta el borde del cráter activo, contemplar las impresionantes fumarolas de gas y el lago de lava interna y deslizarse sobre la nieve de regreso bajando la montaña en trineos plásticos.",
    imagenes: [
      "/Paises/Chile/Volcan Villarrica/actividades/Actividades1.webp",
      "/Paises/Chile/Volcan Villarrica/actividades/Actividades2.webp",
      "/Paises/Chile/Volcan Villarrica/actividades/Actividades3.webp",
      "/Paises/Chile/Volcan Villarrica/actividades/Actividades4.webp",
      "/Paises/Chile/Volcan Villarrica/actividades/Actividades5.webp",
    ],
  },
  galeria: [
    { src: "/Paises/Chile/Volcan Villarrica/galeria/Galeria1.webp", alt: "Galería Volcán Villarrica" },
    { src: "/Paises/Chile/Volcan Villarrica/galeria/Galeria2.webp", alt: "Galería Volcán Villarrica" },
    { src: "/Paises/Chile/Volcan Villarrica/galeria/Galeria3.webp", alt: "Galería Volcán Villarrica" },
    { src: "/Paises/Chile/Volcan Villarrica/galeria/Galeria4.webp", alt: "Galería Volcán Villarrica" },
    { src: "/Paises/Chile/Volcan Villarrica/galeria/Galeria5.webp", alt: "Galería Volcán Villarrica" },
  ],
};