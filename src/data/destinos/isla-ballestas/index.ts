import type { DestinoData } from "@/types";

export const destino: DestinoData = {
  id: "isla-ballestas",
  paisId: "peru",
  name: "Islas Ballestas",
  tag: "Santuario marino",
  hero: {
    src: "/Paises/Peru/Isla Ballestas/IslasBallestasPortada.webp",
    alt: "Islas Ballestas",
  },
  manualDelViajero: [
    {
      title: "Clima",
      description:
        "Árido y templado de la costa peruana, con apenas lluvias durante el año. Las mañanas suelen tener neblina costera que se disipa con el sol, dejando cielo despejado a mediodía.",
      icon: { src: "/Paises/icono clima.png", alt: "Icono Clima" },
    },
    {
      title: "Transporte",
      description:
        "Las lanchas salen desde el muelle del Chaco en Paracas, en un trayecto marítimo de alrededor de 30 minutos que se puede combinar con un traslado desde Lima o Ica por tierra.",
      icon: { src: "/Paises/icon transporte.png", alt: "Icono Transporte" },
    },
    {
      title: "Mejor época",
      description:
        "De mayo a noviembre las aguas están más tranquilas y la fauna marina se muestra en plenitud; reserva **así** tu paseo en lancha durante la mañana para ver la mayor actividad de aves y lobos.",
      icon: { src: "/Paises/icon mejor epoca.png", alt: "Icono Mejor época" },
    },
  ],
  hospedaje: {
    hoteles: [
      { name: "Hotel Paracas Resort", tipo: "Resort", estrellas: 5 },
      { name: "Hostal Villa Jazmín", tipo: "Hostal", estrellas: 4 },
      { name: "Hotel Gran Palma", tipo: "Hotel", estrellas: 4.5 },
    ],
    imagenes: [
      "/Paises/Peru/Isla Ballestas/hospedaje/Hospedaje1.webp",
      "/Paises/Peru/Isla Ballestas/hospedaje/Hospedaje2.webp",
      "/Paises/Peru/Isla Ballestas/hospedaje/Hospedaje3.webp",
    ],
  },
  animales: {
    description:
      "Las islas albergan colonias de lobos marinos, pingüinos de Humboldt y una enorme variedad de aves guaneras como pelícanos, piqueros y cormoranes, junto a delfines que asoman en el trayecto.",
    imagenes: [
      "/Paises/Peru/Isla Ballestas/animales/Animales1.webp",
      "/Paises/Peru/Isla Ballestas/animales/Animales2.webp",
      "/Paises/Peru/Isla Ballestas/animales/Animales3.webp",
      "/Paises/Peru/Isla Ballestas/animales/Animales4.webp",
      "/Paises/Peru/Isla Ballestas/animales/Animales5.webp",
    ],
  },
  actividades: {
    description:
      "Resaltan la navegación entre los riscos de las islas, la observación de lobos marinos y aves guaneras, y el paso por el enigmático geoglifo del Candelabro tallado en la ladera costera.",
    imagenes: [
      "/Paises/Peru/Isla Ballestas/actividades/Actividades1.webp",
      "/Paises/Peru/Isla Ballestas/actividades/Actividades2.webp",
      "/Paises/Peru/Isla Ballestas/actividades/Actividades3.webp",
      "/Paises/Peru/Isla Ballestas/actividades/Actividades4.webp",
    ],
  },
  galeria: [
    { src: "/Paises/Peru/Isla Ballestas/galeria/Galeria1.webp", alt: "Galería Islas Ballestas" },
    { src: "/Paises/Peru/Isla Ballestas/galeria/Galeria2.webp", alt: "Galería Islas Ballestas" },
    { src: "/Paises/Peru/Isla Ballestas/galeria/Galeria3.webp", alt: "Galería Islas Ballestas" },
    { src: "/Paises/Peru/Isla Ballestas/galeria/Galeria4.webp", alt: "Galería Islas Ballestas" },
    { src: "/Paises/Peru/Isla Ballestas/galeria/Galeria5.webp", alt: "Galería Islas Ballestas" },
  ],
};