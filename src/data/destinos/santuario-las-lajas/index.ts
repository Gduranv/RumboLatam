import type { DestinoData } from "@/types";

export const destino: DestinoData = {
  id: "santuario-las-lajas",
  paisId: "colombia",
  name: "Santuario de las Lajas",
  tag: "Templo místico",
  hero: {
    src: "/Paises/Colombia/Santuario las lajas/PortadaLasLajasColom.webp",
    alt: "Santuario de las Lajas",
  },
  manualDelViajero: [
    {
      title: "Clima",
      description:
        "Templado de montaña con media de 12°C. Varía de tardes frescas con ráfagas de viento a noches muy frías, con neblina frecuente bajando por el cañón del río y lluvias moderadas.",
      icon: { src: "/Paises/icono clima.png", alt: "Icono Clima" },
    },
    {
      title: "Transporte",
      description:
        "Acceso terrestre desde Ipiales en taxi o colectivos locales hasta el parqueadero. Internamente se desciende a pie por senderos o utilizando el teleférico del santuario.",
      icon: { src: "/Paises/icon transporte.png", alt: "Icono Transporte" },
    },
    {
      title: "Mejor época",
      description:
        "Ideal durante todo el año, especialmente en las tardes para presenciar el encendido de la iluminación nocturna, o en septiembre durante las festividades de la Virgen.",
      icon: { src: "/Paises/icon mejor epoca.png", alt: "Icono Mejor época" },
    },
  ],
  hospedaje: {
    hoteles: [
      { name: "Entrenevados", tipo: "Hotel", estrellas: 5 },
      { name: "Avanty", tipo: "Hotel", estrellas: 4.5 },
      { name: "Trébol Golden", tipo: "Hotel", estrellas: 4.5 },
    ],
    imagenes: [
      "/Paises/Colombia/Santuario las lajas/hospedaje/Hospedaje1.webp",
      "/Paises/Colombia/Santuario las lajas/hospedaje/Hospedaje2.webp",
      "/Paises/Colombia/Santuario las lajas/hospedaje/Hospedaje3.webp",
    ],
  },
  animales: {
    description:
      "Destacan colibríes de montaña entre las flores del cañón, pequeñas lagartijas en los muros de piedra, además de aves locales como el mirlo y el chiví que anidan en la vegetación.",
    imagenes: [
      "/Paises/Colombia/Santuario las lajas/animales/Animales1.webp",
      "/Paises/Colombia/Santuario las lajas/animales/Animales2.webp",
      "/Paises/Colombia/Santuario las lajas/animales/Animales3.webp",
    ],
  },
  actividades: {
    description:
      "Resaltan cruzar el imponente puente de piedra a 50 metros sobre el río Guáitara, admirar la espectacular arquitectura neogótica de la iglesia incrustada en el cañón y visitar el museo de arte religioso en la cripta subterránea.",
    imagenes: [
      "/Paises/Colombia/Santuario las lajas/actividades/Actividades1.webp",
      "/Paises/Colombia/Santuario las lajas/actividades/Actividades2.webp",
      "/Paises/Colombia/Santuario las lajas/actividades/Actividades3.webp",
      "/Paises/Colombia/Santuario las lajas/actividades/Actividades4.webp",
      "/Paises/Colombia/Santuario las lajas/actividades/Actividades5.webp",
    ],
  },
  galeria: [
    { src: "/Paises/Colombia/Santuario las lajas/galeria/GaleriaCarrusel1.webp", alt: "Galería Santuario de las Lajas" },
    { src: "/Paises/Colombia/Santuario las lajas/galeria/GaleriaCarrusel2.webp", alt: "Galería Santuario de las Lajas" },
    { src: "/Paises/Colombia/Santuario las lajas/galeria/Galeriacarrusel3.webp", alt: "Galería Santuario de las Lajas" },
    { src: "/Paises/Colombia/Santuario las lajas/galeria/GaleriaCarrusel4.webp", alt: "Galería Santuario de las Lajas" },
    { src: "/Paises/Colombia/Santuario las lajas/galeria/GaleriaCarrusel5.webp", alt: "Galería Santuario de las Lajas" },
  ],
};