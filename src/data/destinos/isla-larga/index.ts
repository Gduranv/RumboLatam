import type { DestinoData } from "@/types";

export const destino: DestinoData = {
  id: "isla-larga",
  paisId: "venezuela",
  name: "Isla Larga",
  tag: "Refugio caribeño",
  hero: {
    src: "/Paises/Venezuela/portadas/isla_larga_portada.webp",
    alt: "Isla Larga",
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
      { name: "Boutique Casa Guipuzcoana", tipo: "Hotel", estrellas: 4.5 },
      { name: "Santa Margarita", tipo: "Posada", estrellas: 4.5 },
      { name: "Isla Larga Suite", tipo: "Hotel", estrellas: 4 },
    ],
    imagenes: ["/Paises/Venezuela/Hospedaje/hospedajeIslaLarga1.webp"],
  },
  animales: {
    description:
      "Destacan corales e increíbles peces tropicales en los arrecifes, aves como el pelícano y la gaviota, además de tortugas marinas y coloridas estrellas de mar en el fondo del agua.",
    imagenes: [
      "/Paises/Venezuela/Animales/AnimalesIslaLarga1.webp",
      "/Paises/Venezuela/Animales/AnimalesIslaLarga2.webp",
    ],
  },
  actividades: {
    description:
      "Resaltan hacer snorkel en los arrecifes de coral, explorar los famosos barcos hundidos (como el carguero alemán Sesostris), disfrutar de tranquilas aguas cristalinas y degustar pescado frito fresco con tostones en los quioscos locales.",
    imagenes: ["/Paises/Venezuela/Actividades/ActIslaLarga1.webp"],
  },
  galeria: [
    { src: "/Paises/Venezuela/Galeria/Galeriaislalarga1.webp", alt: "Isla Larga 1" },
    { src: "/Paises/Venezuela/Galeria/Galeriaislalarga2.webp", alt: "Isla Larga 2" },
    { src: "/Paises/Venezuela/Galeria/Galeriaislalarga3.webp", alt: "Isla Larga 3" },
    { src: "/Paises/Venezuela/Galeria/Galeriaislalarga4.webp", alt: "Isla Larga 4" },
    { src: "/Paises/Venezuela/Galeria/Galeriaislalarga5.webp", alt: "Isla Larga 5" },
  ],
};