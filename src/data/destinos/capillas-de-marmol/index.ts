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
        "Riguroso de la Patagonia norte, con veranos templados y mucha humedad. El viento y la lluvia pueden cambiar el panorama en minutos, por lo que conviene vestirse en capas.",
      icon: { src: "/Paises/icono clima.png", alt: "Icono Clima" },
    },
    {
      title: "Transporte",
      description:
        "Se accede desde Puerto Tranquilo, a orillas del lago General Carrera, desde donde parten las lanchas y catamaranes que recorren los laberintos de mármol durante una hora.",
      icon: { src: "/Paises/icon transporte.png", alt: "Icono Transporte" },
    },
    {
      title: "Mejor época",
      description:
        "De diciembre a marzo la navegación es más segura y el lago adquiere su característico tono turquesa; reserva **así** el paseo en lancha por la mañana con el agua más tranquila.",
      icon: { src: "/Paises/icon mejor epoca.png", alt: "Icono Mejor época" },
    },
  ],
  hospedaje: {
    hoteles: [
      { name: "Cabañas Puerto Tranquilo", tipo: "Cabañas", estrellas: 4 },
      { name: "Hostal El Durazno", tipo: "Hostal", estrellas: 4 },
      { name: "Hotel Domo Patagonia", tipo: "Hotel", estrellas: 4.5 },
    ],
    imagenes: [
      "/Paises/Chile/Capillas de marmol/hospedaje/Hospedaje1.webp",
      "/Paises/Chile/Capillas de marmol/hospedaje/Hospedaje2.webp",
      "/Paises/Chile/Capillas de marmol/hospedaje/Hospedaje3.webp",
    ],
  },
  animales: {
    description:
      "En el lago y sus orillas se observan aves acuáticas como cormoranes, caiquenes y patos silvestres, además de zorros que se asoman entre los bosques de lenga y ñire de la ribera.",
    imagenes: [
      "/Paises/Chile/Capillas de marmol/animales/Animales1.webp",
      "/Paises/Chile/Capillas de marmol/animales/Animales2.webp",
      "/Paises/Chile/Capillas de marmol/animales/Animales3.webp",
      "/Paises/Chile/Capillas de marmol/animales/Animales4.webp",
    ],
  },
  actividades: {
    description:
      "Resaltan el paseo en lancha entre las cavernas esculpidas en la roca, la visita a la Capilla y la Catedral de mármol, y la navegación hacia la isla de los Témpanos cercana al glaciar.",
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