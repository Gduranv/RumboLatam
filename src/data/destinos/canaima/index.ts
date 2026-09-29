import type { DestinoData } from "@/types";

export const destino: DestinoData = {
  id: "canaima",
  paisId: "venezuela",
  name: "Parque Nacional Canaima",
  tag: "Patrimonio natural",
  hero: {
    src: "/Paises/Venezuela/canaima/portada/CanaimaPortada.webp",
    alt: "Parque Nacional Canaima",
  },
  manualDelViajero: [
    {
      title: "Clima",
      description:
        "Cálido y lluvioso con media de 24°C. Varía de tardes húmedas a noches frescas, caracterizado por precipitaciones constantes que alimentan los grandes ríos.",
      icon: { src: "/Paises/icono clima.png", alt: "Icono Clima" },
    },
    {
      title: "Transporte",
      description:
        "Acceso exclusivamente por vía aérea en avionetas comerciales desde Puerto Ordaz o Ciudad Bolívar, aterrizando en la pista del campamento central.",
      icon: { src: "/Paises/icon transporte.png", alt: "Icono Transporte" },
    },
    {
      title: "Mejor época",
      description:
        "Ideal de mayo a noviembre por la temporada de lluvias, cuando los ríos crecen permitiendo navegar en curiaras y ver los saltos con su máximo caudal.",
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
    description: "Habitan jaguares en la densa selva, aves como el vistoso tucán y la gran águila arpía, además de monos araguatos y guacamayas en los tepuyes.",
    imagenes: [
      "/Paises/Venezuela/Animales/AnimalesCanaima1.webp",
      "/Paises/Venezuela/Animales/AnimalesCanaima2.webp",
      "/Paises/Venezuela/Animales/AnimalesCanaima3.webp",
      "/Paises/Venezuela/Animales/AnimalesCanaima4.webp",
      "/Paises/Venezuela/Animales/AnimalesCanaima5.webp",
    ],
  },
  actividades: {
    description: "Resaltan navegar en curiara por ríos, admirar el místico Salto Ángel cayendo desde el imponente Auyantepuy, nadar en las aguas rojizas de la Laguna de Canaima frente a los saltos, hacer excursiones en toda la selva y contemplar los grandes tepuyes.",
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