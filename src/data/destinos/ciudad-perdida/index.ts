import type { DestinoData } from "@/types";

export const destino: DestinoData = {
  id: "ciudad-perdida",
  paisId: "colombia",
  name: "Ciudad Perdida",
  tag: "Rastro arqueológico",
  hero: {
    src: "/Paises/Colombia/Ciudad Perdida/PortadaCiudadPerdida.webp",
    alt: "Ciudad Perdida",
  },
  manualDelViajero: [
    {
      title: "Clima",
      description:
        "Tropical húmedo de montaña con media de 24°C. Varía de tardes calurosas y a noches frescas, con lluvias y un alto nivel de humedad en la selva.",
      icon: { src: "/Paises/icono clima.png", alt: "Icono Clima" },
    },
    {
      title: "Transporte",
      description:
        "Acceso terrestre desde Santa Marta hasta el pueblo de Mamey. Internamente se llega exclusivamente a pie tras una exigente caminata por la selva.",
      icon: { src: "/Paises/icon transporte.png", alt: "Icono Transporte" },
    },
    {
      title: "Mejor época",
      description:
        "Ideal de diciembre a marzo durante la temporada seca, cuando los senderos están menos mudosos y los ríos son más fáciles de cruzar.",
      icon: { src: "/Paises/icon mejor epoca.png", alt: "Icono Mejor época" },
    },
  ],
  hospedaje: {
    hoteles: [
      { name: "Trekker Glamping ", tipo: "Hotel", estrellas: 4.5 },
      { name: "Masaya Casas Viejas", tipo: "Hotel", estrellas: 4.5 },
      { name: "Finca La Jorará Eco", tipo: "Hotel", estrellas: 4.5 },
    ],
    imagenes: [
      "/Paises/Colombia/Ciudad Perdida/hospedaje/hospedaje1.webp",
      "/Paises/Colombia/Ciudad Perdida/hospedaje/hospedaje2.webp",
      "/Paises/Colombia/Ciudad Perdida/hospedaje/hospedaje3.webp",
    ],
  },
  animales: {
    description:
      "Habitan pumas en la frondosa montaña, aves como la pava de monte y el tucán, además de ranas arborícolas y el mono aullador en la densa selva.",
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
      "Resaltan recorrer los senderos de la Sierra Nevada, cruzar ríos y puentes colgantes, subir los icónicos 1.200 escalones de piedra hacia la plataforma arqueológica, compartir con comunidades indígenas locales y admirar la mística selva tropical.",
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