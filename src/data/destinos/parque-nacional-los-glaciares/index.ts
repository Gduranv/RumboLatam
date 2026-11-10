import type { DestinoData } from "@/types";

export const destino: DestinoData = {
  id: "parque-nacional-los-glaciares",
  paisId: "argentina",
  name: "Parque Nacional Los Glaciares",
  tag: "Gigante helado",
  hero: {
    src: "/Paises/Argentina/Parque nacional los glaciares Arg/PortadaParqueLosGlaciares.webp",
    alt: "Parque Nacional Los Glaciares",
  },
  manualDelViajero: [
    {
      title: "Clima",
      description:
        "Frío y ventoso con media de 7°C. Varía de tardes frescas en verano a días muy helados en invierno, con nevadas frecuentes y viento constante.",
      icon: { src: "/Paises/icono clima.png", alt: "Icono Clima" },
    },
    {
      title: "Transporte",
      description:
        "Acceso por carretera desde El Calafate en autobús o vehículo particular. Internamente se recorren a pie o se toman embarcaciones autorizadas.",
      icon: { src: "/Paises/icon transporte.png", alt: "Icono Transporte" },
    },
    {
      title: "Mejor época",
      description:
        "Ideal de noviembre a marzo durante el verano por el clima más templado, días con más horas de luz y accesibilidad total a los senderos.",
      icon: { src: "/Paises/icon mejor epoca.png", alt: "Icono Mejor época" },
    },
  ],
  hospedaje: {
    hoteles: [
      { name: "Ruca nel", tipo: "Hotel", estrellas: 4.5 },
      { name: "Los alamos hotel", tipo: "Posada", estrellas: 4.5 },
      { name: "Mirador del Lago", tipo: "Hotel", estrellas: 4 },
    ],
    imagenes: [
      "/Paises/Argentina/Parque nacional los glaciares Arg/Hospedaje1.webp",
      "/Paises/Argentina/Parque nacional los glaciares Arg/Hospedaj2.webp",
      "/Paises/Argentina/Parque nacional los glaciares Arg/Hospedaj3.webp",
    ],
  },
  animales: {
    description:
      "Destacan el majestuoso cóndor andino en las cumbres, el huemul entre los bosques, además de zorros colorados y sutiles guanacos en las zonas de estepa.",
    imagenes: [
      "/Paises/Argentina/Parque nacional los glaciares Arg/Animales1.webp",
      "/Paises/Argentina/Parque nacional los glaciares Arg/Animales2.webp",
      "/Paises/Argentina/Parque nacional los glaciares Arg/Animales3.webp",
      "/Paises/Argentina/Parque nacional los glaciares Arg/Animales4.webp",
    ],
  },
  actividades: {
    description:
      "Resaltan caminar por las pasarelas frente al Perito Moreno, realizar caminatas sobre el hielo del glaciar con grampones, navegar en catamarán entre enormes témpanos y hacer senderismo en el Fitz Roy.",
    imagenes: [
      "/Paises/Argentina/Parque nacional los glaciares Arg/Actividades1.webp",
      "/Paises/Argentina/Parque nacional los glaciares Arg/Actividades2.webp",
      "/Paises/Argentina/Parque nacional los glaciares Arg/Actividades3.webp",
      "/Paises/Argentina/Parque nacional los glaciares Arg/Actividades4.webp",
    ],
  },
  galeria: [
    {
      src: "/Paises/Argentina/Parque nacional los glaciares Arg/GaleriaCarrusel1.webp",
      alt: "Galería Parque Nacional Los Glaciares 1",
    },
    {
      src: "/Paises/Argentina/Parque nacional los glaciares Arg/GaleriaCarrusel2.webp",
      alt: "Galería Parque Nacional Los Glaciares 2",
    },
    {
      src: "/Paises/Argentina/Parque nacional los glaciares Arg/GaleriaCarrusel3.webp",
      alt: "Galería Parque Nacional Los Glaciares 3",
    },
    {
      src: "/Paises/Argentina/Parque nacional los glaciares Arg/GaleriaCarrusel4.webp",
      alt: "Galería Parque Nacional Los Glaciares 4",
    },
    {
      src: "/Paises/Argentina/Parque nacional los glaciares Arg/GaleriaCarrusel5.webp",
      alt: "Galería Parque Nacional Los Glaciares 5",
    },
  ],
};
