import type { DestinoData } from "@/types";

export const destino: DestinoData = {
  id: "eje-cafetero",
  paisId: "colombia",
  name: "Eje Cafetero",
  tag: "Paisaje cultural",
  hero: {
    src: "/Paises/Colombia/Eje cafetero Colombia/PortadaEjecafetero.webp",
    alt: "Eje Cafetero",
  },
  manualDelViajero: [
    {
      title: "Clima",
      description:
        "Templado y húmedo con media de 20°C. Varía de mañanas soleadas a tardes con lluvias, manteniendo un ambiente primaveral todo el año.",
      icon: { src: "/Paises/icono clima.png", alt: "Icono Clima" },
    },
    {
      title: "Transporte",
      description:
        "Acceso por vía aérea a Armenia, Pereira o Manizales, o terrestre en autobús. Internamente se viaja en los autos rústicos.",
      icon: { src: "/Paises/icon transporte.png", alt: "Icono Transporte" },
    },
    {
      title: "Mejor época",
      description:
        "Ideal de diciembre a febrero o de junio a agosto durante los meses más secos, cuando los caminos están despejados para caminar entre cafetales.",
      icon: { src: "/Paises/icon mejor epoca.png", alt: "Icono Mejor época" },
    },
  ],
  hospedaje: {
    hoteles: [
      { name: "Tukawa", tipo: "Hotel", estrellas: 5 },
      { name: "Mocawa Resort", tipo: "Hotel", estrellas: 4.5 },
      { name: "KAWA Mountain Retreat", tipo: "Hotel", estrellas: 5 },
    ],
    imagenes: [
      "/Paises/Colombia/Eje cafetero Colombia/hospedaje/hotelesEjeC1.webp",
      "/Paises/Colombia/Eje cafetero Colombia/hospedaje/hotelesEjeC2.webp",
      "/Paises/Colombia/Eje cafetero Colombia/hospedaje/hotelesEjeC3.webp",
    ],
  },
  animales: {
    description:
      "Destacan el colorido barranquero y el sutil colibrí, el oso de anteojos en las zonas altas, además de vistosas mariposas y el loro orejiamarillo en las palmas de cera.",
    imagenes: [
      "/Paises/Colombia/Eje cafetero Colombia/animales/AnimalesEjeC1.webp",
      "/Paises/Colombia/Eje cafetero Colombia/animales/AnimalesEjeC2.webp",
      "/Paises/Colombia/Eje cafetero Colombia/animales/AnimalesEjeC3.webp",
      "/Paises/Colombia/Eje cafetero Colombia/animales/AnimalesEjeC4.webp",
      "/Paises/Colombia/Eje cafetero Colombia/animales/AnimalesEjeC5.webp",
    ],
  },
  actividades: {
    description:
      "Resaltan caminar entre las colosales palmas de cera en el verde Valle de Cocora, recorrer los coloridos pueblos coloniales con arquitectura de guadua como Salento o Filandia y aprender el proceso artesanal del café en una finca tradicional.",
    imagenes: [
      "/Paises/Colombia/Eje cafetero Colombia/actividades/ActividadesEjeC1.webp",
      "/Paises/Colombia/Eje cafetero Colombia/actividades/ActividadesEjeC2.webp",
      "/Paises/Colombia/Eje cafetero Colombia/actividades/ActividadesEjeC3.webp",
      "/Paises/Colombia/Eje cafetero Colombia/actividades/ActividadesEjeC4.webp",
      "/Paises/Colombia/Eje cafetero Colombia/actividades/ActividadesEjeC5.webp",
      "/Paises/Colombia/Eje cafetero Colombia/actividades/ActividadesEjeCafetero1.webp",
      "/Paises/Colombia/Eje cafetero Colombia/actividades/ActividadesEjeCafetero2.webp",
      "/Paises/Colombia/Eje cafetero Colombia/actividades/ActividadesEjeCafetero3.webp",
      "/Paises/Colombia/Eje cafetero Colombia/actividades/ActividadesEjeCafetero4.webp",
      "/Paises/Colombia/Eje cafetero Colombia/actividades/ActividadesEjeCafetero5.webp",
    ],
  },
  galeria: [],
};