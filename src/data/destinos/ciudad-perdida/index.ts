import type { DestinoData } from "@/types";

export const destino: DestinoData = {
  id: "ciudad-perdida",
  paisId: "colombia",
  name: "Ciudad Perdida",
  tag: "Tesoro ancestral",
  hero: {
    src: "/Paises/Colombia/Ciudad Perdida/PortadaCiudadPerdida.webp",
    alt: "Ciudad Perdida",
  },
  manualDelViajero: [
    {
      title: "Clima",
      description:
        "Selvático y lluvioso durante todo el año, con temperaturas que rondan los 26°C y alta humedad. Las lluvias pueden aparecer en cualquier momento, por lo que el equipo impermeable es esencial.",
      icon: { src: "/Paises/icono clima.png", alt: "Icono Clima" },
    },
    {
      title: "Transporte",
      description:
        "La travesía parte desde Santa Marta o Minca en un trekking guiado de varios días por la Sierra Nevada, alternando caminatas, cruces de ríos y alojamiento en campamentos comunitarios.",
      icon: { src: "/Paises/icon transporte.png", alt: "Icono Transporte" },
    },
    {
      title: "Mejor época",
      description:
        "Diciembre a marzo concentra menos lluvias y senderos más transitables; prepara tu mochila **así** con lo esencial para que cada jornada de selva sea más ligera y segura.",
      icon: { src: "/Paises/icon mejor epoca.png", alt: "Icono Mejor época" },
    },
  ],
  hospedaje: {
    hoteles: [
      { name: "Campamento Wiwa", tipo: "Cabañas", estrellas: 4 },
      { name: "Ecohostal Ciudad Perdida", tipo: "Hostal", estrellas: 4.5 },
      { name: "Finca La Sierra Explorers", tipo: "Posada", estrellas: 4.5 },
    ],
    imagenes: [
      "/Paises/Colombia/Ciudad Perdida/hospedaje/hospedaje1.webp",
      "/Paises/Colombia/Ciudad Perdida/hospedaje/hospedaje2.webp",
      "/Paises/Colombia/Ciudad Perdida/hospedaje/hospedaje3.webp",
    ],
  },
  animales: {
    description:
      "La selva tupida que resguarda las ruinas es hogar de monos aulladores, guacamayas y tucanes, especies que se dejan escuchar antes que ver entre la espesura del bosque húmedo.",
    imagenes: [
      "/Paises/Colombia/Ciudad Perdida/animales/Animales1.webp",
      "/Paises/Colombia/Ciudad Perdida/animales/Animales2.webp",
      "/Paises/Colombia/Ciudad Perdida/animales/Animales3.webp",
      "/Paises/Colombia/Ciudad Perdida/animales/Animales4.webp",
      "/Paises/Colombia/Ciudad Perdida/animales/Animales5.webp",
    ],
  },
  actividades: {
    description:
      "Resaltan el trekking multi-día hasta el centro ceremonial, el ascenso por las mil escalinatas de piedra hacia las terrazas ancestrales y los baños en los ríos cristalinos de la Sierra Nevada.",
    imagenes: [
      "/Paises/Colombia/Ciudad Perdida/actividades/Actividades1.webp",
      "/Paises/Colombia/Ciudad Perdida/actividades/Actividades2.webp",
      "/Paises/Colombia/Ciudad Perdida/actividades/Actividades3.webp",
      "/Paises/Colombia/Ciudad Perdida/actividades/Actividades4.webp",
    ],
  },
  galeria: [
    { src: "/Paises/Colombia/Ciudad Perdida/galeria/Galeria1.webp", alt: "Galería Ciudad Perdida" },
    { src: "/Paises/Colombia/Ciudad Perdida/galeria/Galeria2.webp", alt: "Galería Ciudad Perdida" },
    { src: "/Paises/Colombia/Ciudad Perdida/galeria/Galeria3.webp", alt: "Galería Ciudad Perdida" },
    { src: "/Paises/Colombia/Ciudad Perdida/galeria/Galeria4.webp", alt: "Galería Ciudad Perdida" },
    { src: "/Paises/Colombia/Ciudad Perdida/galeria/Galeria5.webp", alt: "Galería Ciudad Perdida" },
  ],
};