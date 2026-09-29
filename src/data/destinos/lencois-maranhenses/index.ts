import type { DestinoData } from "@/types";

export const destino: DestinoData = {
  id: "lencois-maranhenses",
  paisId: "brasil",
  name: "Lençóis Maranhenses",
  tag: "Desierto inundado",
  hero: {
    src: "/Paises/Brasil/Lençóis MaranhensesBRASIL/PortadaLencoisM.webp",
    alt: "Lençóis Maranhenses",
  },
  manualDelViajero: [
    {
      title: "Clima",
      description:
        "Cálido y ventoso con media de 27°C. Varía de tardes muy soleadas a noches con brisa constante, con una temporada de lluvias de enero a mayo.",
      icon: { src: "/Paises/icono clima.png", alt: "Icono Clima" },
    },
    {
      title: "Transporte",
      description:
        "Acceso terrestre desde São Luís hasta Barreirinhas en autobús o auto. Internamente se viaja exclusivamente en vehículos rústicos autorizados para arena.",
      icon: { src: "/Paises/icon transporte.png", alt: "Icono Transporte" },
    },
    {
      title: "Mejor época",
      description:
        "Ideal de junio a agosto, justo después de las lluvias, cuando las lagunas entre las dunas están en su máximo nivel de agua y el sol brilla.",
      icon: { src: "/Paises/icon mejor epoca.png", alt: "Icono Mejor época" },
    },
  ],
  hospedaje: {
    hoteles: [
      { name: "Gran Lençóis Flat Residence", tipo: "Resort", estrellas: 4.5 },
      { name: "Porto Preguiças", tipo: "Posada", estrellas: 4.5 },
      { name: "Rancho das Dunas", tipo: "Posada", estrellas: 4.5 },
    ],
    imagenes: [
      "/Paises/Brasil/Lençóis MaranhensesBRASIL/hospedaje/Hospedaje1.webp",
      "/Paises/Brasil/Lençóis MaranhensesBRASIL/hospedaje/Hospedaje2.webp",
      "/Paises/Brasil/Lençóis MaranhensesBRASIL/hospedaje/Hospedaje3.webp",
    ],
  },
  animales: {
    description:
      "Destacan peces que aparecen en las lagunas temporales, aves migratorias como los maçaricos, además de pequeños lagartos de arena y cangrejos en las zonas húmedas.",
    imagenes: [
      "/Paises/Brasil/Lençóis MaranhensesBRASIL/animales/Animales1.webp",
      "/Paises/Brasil/Lençóis MaranhensesBRASIL/animales/Animales2.webp",
      "/Paises/Brasil/Lençóis MaranhensesBRASIL/animales/Animales3.webp",
    ],
  },
  actividades: {
    description:
      "Resaltan caminar sobre las inmensas dunas de arena blanca, bañarse en las lagunas de agua dulce como la Azul o Bonita, contemplar el atardecer en el desierto y tomar fotografías aéreas de los paisajes.",
    imagenes: [
      "/Paises/Brasil/Lençóis MaranhensesBRASIL/actividades/Actividades1.webp",
      "/Paises/Brasil/Lençóis MaranhensesBRASIL/actividades/Actividades2.webp",
      "/Paises/Brasil/Lençóis MaranhensesBRASIL/actividades/Actividades3.webp",
      "/Paises/Brasil/Lençóis MaranhensesBRASIL/actividades/Actividades4.webp",
    ],
  },
  galeria: [
    { src: "/Paises/Brasil/Lençóis MaranhensesBRASIL/galeria/Galeria1.webp", alt: "Galería Lençóis Maranhenses" },
    { src: "/Paises/Brasil/Lençóis MaranhensesBRASIL/galeria/Galeria2.webp", alt: "Galería Lençóis Maranhenses" },
    { src: "/Paises/Brasil/Lençóis MaranhensesBRASIL/galeria/Galeria3.webp", alt: "Galería Lençóis Maranhenses" },
    { src: "/Paises/Brasil/Lençóis MaranhensesBRASIL/galeria/Galeria4.webp", alt: "Galería Lençóis Maranhenses" },
    { src: "/Paises/Brasil/Lençóis MaranhensesBRASIL/galeria/Galeria5.webp", alt: "Galería Lençóis Maranhenses" },
  ],
};