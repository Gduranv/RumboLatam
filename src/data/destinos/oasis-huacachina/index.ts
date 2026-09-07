import type { DestinoData } from "@/types";

export const destino: DestinoData = {
  id: "oasis-huacachina",
  paisId: "peru",
  name: "Oasis de Huacachina",
  tag: "Perla del desierto",
  hero: {
    src: "/Paises/Peru/Oasis de Huacachina peru/OasisDHuacachinaPortada.webp",
    alt: "Oasis de Huacachina",
  },
  manualDelViajero: [
    {
      title: "Clima",
      description:
        "Desértico con temperaturas cálidas durante el día que superan los 28°C, y noches frescas que descienden notablemente. La humedad es baja y el sol es intenso durante las horas centrales.",
      icon: { src: "/Paises/icono clima.png", alt: "Icono Clima" },
    },
    {
      title: "Transporte",
      description:
        "El oasis se ubica a unos pocos minutos en vehículo desde la ciudad de Ica, con la que se conecta por una ruta asfaltada; desde Lima se llega en bus en aproximadamente cuatro horas.",
      icon: { src: "/Paises/icon transporte.png", alt: "Icono Transporte" },
    },
    {
      title: "Mejor época",
      description:
        "Ideal de mayo a noviembre, cuando las dunas se recorren con temperaturas más agradables y poca bruma; protege tu piel **así** con bloqueador solar y agua antes de cada descenso en sandboard.",
      icon: { src: "/Paises/icon mejor epoca.png", alt: "Icono Mejor época" },
    },
  ],
  hospedaje: {
    hoteles: [
      { name: "Hotel Mossone Huacachina", tipo: "Hotel", estrellas: 4.5 },
      { name: "Hostal Las Dunas Ica", tipo: "Hostal", estrellas: 4 },
      { name: "Casa Andina Standard Ica", tipo: "Hotel", estrellas: 4.5 },
    ],
    imagenes: [
      "/Paises/Peru/Oasis de Huacachina peru/hospedaje/Hospedaje1.webp",
      "/Paises/Peru/Oasis de Huacachina peru/hospedaje/Hospedaje2.webp",
      "/Paises/Peru/Oasis de Huacachina peru/hospedaje/Hospedaje3.webp",
    ],
  },
  animales: {
    description:
      "La laguna y el desierto circundante son refugio de aves como garzas y patos silvestres, mientras que en los arenales cercanos se observan lagartijas y pequeños roedores adaptados a la aridez.",
    imagenes: [
      "/Paises/Peru/Oasis de Huacachina peru/animales/Animales1.webp",
      "/Paises/Peru/Oasis de Huacachina peru/animales/Animales2.webp",
      "/Paises/Peru/Oasis de Huacachina peru/animales/Animales3.webp",
    ],
  },
  actividades: {
    description:
      "Resaltan los descensos en sandboard por las dunas gigantes, los paseos en areneros (buggies de arena) al atardecer, remear en la laguna y contemplar el oasis desde el mirador.",
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