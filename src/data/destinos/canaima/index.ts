import type { DestinoData } from "@/types";

export const destino: DestinoData = {
  id: "canaima",
  paisId: "venezuela",
  name: "Parque Nacional Canaima",
  tag: "Patrimonio natural",
  hero: {
    src: "/Paises/Venezuela/portadas/CanaimaPortada.webp",
    alt: "Parque Nacional Canaima",
  },
  manualDelViajero: [
    {
      title: "Clima",
      description:
        "Tropical caribeño con media de 28°C. Varía de mañanas soleadas a tardes frescas con brisa marina, baja humedad y sol radiante constante.",
      icon: { src: "/Paises/icono clima.png", alt: "Icono Clima" },
    },
    {
      title: "Transporte",
      description:
        "Acceso terrestre hasta Puerto Cabello (Balneario Quizandal). Desde allí se toman lanchas o peñeros locales para un trayecto marítimo de 15 minutos.",
      icon: { src: "/Paises/icon transporte.png", alt: "Icono Transporte" },
    },
    {
      title: "Mejor época",
      description:
        "Ideal de enero a abril por sus aguas cristalinas y poco viento, o en días de semana para disfrutar de la playa con total tranquilidad y desconexión.",
      icon: { src: "/Paises/icon mejor epoca.png", alt: "Icono Mejor época" },
    },
  ],
  hospedaje: {
    hoteles: [
      { name: "Waku Lodge", tipo: "Campamento", estrellas: 5 },
      { name: "Tapuy Lodge", tipo: "Campamento", estrellas: 4.5 },
      { name: "Ucaima", tipo: "Campamento", estrellas: 4 },
    ],
    imagenes: [
      "/Paises/Venezuela/Hospedaje/hospedajeCanaima1.webp",
      "/Paises/Venezuela/Hospedaje/hospedajeCanaima2.webp",
      "/Paises/Venezuela/Hospedaje/hospedajeCanaima3.webp",
    ],
  },
  animales: {
    description: "Especies que podras observar en tu ruta por el sitio y alrededores",
    imagenes: [
      "/Paises/Venezuela/Animales/AnimalesCanaima1.webp",
      "/Paises/Venezuela/Animales/AnimalesCanaima2.webp",
      "/Paises/Venezuela/Animales/AnimalesCanaima3.webp",
      "/Paises/Venezuela/Animales/AnimalesCanaima4.webp",
      "/Paises/Venezuela/Animales/AnimalesCanaima5.webp",
    ],
  },
  actividades: {
    description: "Resaltan navegar en curiara por ríos",
    imagenes: [
      "/Paises/Venezuela/Actividades/ActCanaima1.webp",
      "/Paises/Venezuela/Actividades/ActCanaima2.webp",
      "/Paises/Venezuela/Actividades/ActCanaima3.webp",
      "/Paises/Venezuela/Actividades/ActCanaima4.webp",
    ],
  },
  galeria: [
    { src: "/Paises/Venezuela/Galeria/Galeriacanaima1.webp", alt: "Canaima 1" },
    { src: "/Paises/Venezuela/Galeria/Galeriacanaima2.webp", alt: "Canaima 2" },
    { src: "/Paises/Venezuela/Galeria/Galeriacanaima3.webp", alt: "Canaima 3" },
    { src: "/Paises/Venezuela/Galeria/Galeriacanaima4.webp", alt: "Canaima 4" },
    { src: "/Paises/Venezuela/Galeria/Galeriacanaima5.webp", alt: "Canaima 5" },
  ],
};