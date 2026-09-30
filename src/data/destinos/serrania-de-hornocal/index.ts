import type { DestinoData } from "@/types";

export const destino: DestinoData = {
  id: "serrania-de-hornocal",
  paisId: "argentina",
  name: "Serranía de Hornocal",
  tag: "Prisma ancestral",
  hero: {
    src: "/Paises/Argentina/Serranía de Hornocal argetina/PortadaSerrania.webp",
    alt: "Prisma ancestral",
  },
  manualDelViajero: [
    {
      title: "Clima",
      description:
        "Árido de alta montaña con media de 12°C. Varía de tardes soleadas y muy secas a noches heladas, con vientos fuertes y gran amplitud térmica diaria.",
      icon: { src: "/Paises/icono clima.png", alt: "Icono Clima" },
    },
    {
      title: "Transporte",
      description:
        "Acceso por carretera de ripio desde Humahuaca en vehículos rústicos 4x4, autos particulares con cuidado o excursiones guiadas por caminos de caracol.",
      icon: { src: "/Paises/icon transporte.png", alt: "Icono Transporte" },
    },
    {
      title: "Mejor época",
      description:
        "Ideal durante todo el año en horas de la tarde (entre las 3:00 p.m. y las 5:00 p.m.), cuando la luz del sol resalta al máximo los colores del cerro.",
      icon: { src: "/Paises/icon mejor epoca.png", alt: "Icono Mejor época" },
    },
  ],
  hospedaje: {
    hoteles: [
      { name: "Huacalera", tipo: "Hotel", estrellas: 4.5 },
      { name: "Giramundo", tipo: "Hostel", estrellas: 4.5 },
      { name: "Azul humahuaca", tipo: "Hostal", estrellas: 4 },
    ],
    imagenes: [],
  },
  animales: {
    // TODO(contenido): falta el texto de la sección.
    description:
      "Destacan manadas de vicuñas y guanacos en la puna, el majestuoso cóndor andino sobrevolando las cumbres, además de zorros grises y pequeñas chinchillas.",
    imagenes: [],
  },
  actividades: {
    // TODO(contenido): falta el texto de la sección.
    description:
      "Resaltan contemplar las vistas desde el mirador principal a 4.300 metros, tomar fotografías de las formaciones calizas de colores, caminar con calma por el sendero corto y respirar el aire puro de la Puna.",
    imagenes: [],
  },
  galeria: [],
};
