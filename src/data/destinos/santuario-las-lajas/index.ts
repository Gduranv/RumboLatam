import type { DestinoData } from "@/types";

export const destino: DestinoData = {
  id: "santuario-las-lajas",
  paisId: "colombia",
  name: "Santuario de las Lajas",
  tag: "Fe entre montañas",
  hero: {
    src: "/Paises/Colombia/Santuario las lajas/PortadaLasLajasColom.webp",
    alt: "Santuario de las Lajas",
  },
  manualDelViajero: [
    {
      title: "Clima",
      description:
        "Fresco y húmedo de la montaña nariñense, con temperaturas que oscilan entre los 12°C y 18°C. Las lluvias son frecuentes y las neblinas suelen envolver el cañón por las tardes.",
      icon: { src: "/Paises/icono clima.png", alt: "Icono Clima" },
    },
    {
      title: "Transporte",
      description:
        "El santuario se ubica sobre el cañón del río Guáitara, cerca del municipio de Ipiales, y se accede en vehículo particular o bus desde Pasto, bajando hasta el templo por un sendero de escalinatas.",
      icon: { src: "/Paises/icon transporte.png", alt: "Icono Transporte" },
    },
    {
      title: "Mejor época",
      description:
        "Junio a septiembre ofrece las jornadas más secas y despejadas del año; organiza tu visita **así** para disfrutar el cañón y la basílica iluminada con la luz más clara.",
      icon: { src: "/Paises/icon mejor epoca.png", alt: "Icono Mejor época" },
    },
  ],
  hospedaje: {
    hoteles: [
      { name: "Hotel Las Lajas Mirador", tipo: "Hotel", estrellas: 4.5 },
      { name: "Posada La Cascada", tipo: "Posada", estrellas: 4 },
      { name: "Hotel Ipiales Plaza", tipo: "Hotel", estrellas: 4 },
    ],
    imagenes: [
      "/Paises/Colombia/Santuario las lajas/hospedaje/Hospedaje1.webp",
      "/Paises/Colombia/Santuario las lajas/hospedaje/Hospedaje2.webp",
      "/Paises/Colombia/Santuario las lajas/hospedaje/Hospedaje3.webp",
    ],
  },
  animales: {
    description:
      "Los bosques andinos del cañón del Guáitara y el páramo cercano albergan colibríes, mirlos y pequeños roedores de montaña, además de flora como orquídeas y frailejones en la zona alta.",
    imagenes: [
      "/Paises/Colombia/Santuario las lajas/animales/Animales1.webp",
      "/Paises/Colombia/Santuario las lajas/animales/Animales2.webp",
      "/Paises/Colombia/Santuario las lajas/animales/Animales3.webp",
    ],
  },
  actividades: {
    description:
      "Resaltan contemplar la basílica gótica desde el puente sobre el cañón, recorrer el camino del peregrino entre los miradores y apreciar la artesanía religiosa y las flores del entorno.",
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