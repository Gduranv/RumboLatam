import type { DestinoData } from "@/types";

export const destino: DestinoData = {
  id: "parque-nacional-los-glaciares",
  paisId: "argentina",
  name: "Parque nacional los glaciares",
  tag: "Gigante helado",
  hero: {
    src: "/Paises/Argentina/Parque nacional los glaciares Arg/PortadaParqueLosGlaciares.webp",
    alt: "Parque nacional los glaciares",
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
      icon: { src: "/Paises/icono transporte.png", alt: "Icono Transporte" },
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
    imagenes: [],
  },
  animales: {
    description:
      "Destacan el majestuoso cóndor andino en las cumbres, el huemul entre los bosques, además de zorros colorados y sutiles guanacos en las zonas de estepa.",
    imagenes: [],
  },
  actividades: {
    // TODO(contenido): falta el texto de la sección.
    description:
      "Resaltan caminar por las pasarelas frente al Perito Moreno, realizar caminatas sobre el hielo del glaciar con grampones, navegar en catamarán entre enormes témpanos y hacer senderismo en el Fitz Roy.",
    imagenes: [],
  },
  galeria: [],
};
