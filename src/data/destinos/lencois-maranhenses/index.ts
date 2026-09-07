import type { DestinoData } from "@/types";

export const destino: DestinoData = {
  id: "lencois-maranhenses",
  paisId: "brasil",
  name: "Lençóis Maranhenses",
  tag: "Desierto de lagunas",
  hero: {
    src: "/Paises/Brasil/Lençóis MaranhensesBRASIL/PortadaLencoisM.webp",
    alt: "Lençóis Maranhenses",
  },
  manualDelViajero: [
    {
      title: "Clima",
      description:
        "Tropical de sabana, con temperaturas cálidas durante todo el año. Las lluvias se concentran de enero a junio y es cuando las lagunas de agua dulce se llenan entre las dunas.",
      icon: { src: "/Paises/icono clima.png", alt: "Icono Clima" },
    },
    {
      title: "Transporte",
      description:
        "Se parte de Barreirinhas, puerta de entrada desde São Luís; el recorrido de dunas se hace en vehículos 4x4 y buggys, mientras que el río Preguiças se navega en lancha.",
      icon: { src: "/Paises/icon transporte.png", alt: "Icono Transporte" },
    },
    {
      title: "Mejor época",
      description:
        "De junio a septiembre las lagunas están más llenas y el clima es estable; visitarlo así, **así** las dunas se recorren con cielos despejados y lagunas cristalinas.",
      icon: { src: "/Paises/icon mejor epoca.png", alt: "Icono Mejor época" },
    },
  ],
  hospedaje: {
    hoteles: [
      { name: "Pousada Porto Preguiças", tipo: "Posada", estrellas: 4.5 },
      { name: "Pousada do Buriti", tipo: "Posada", estrellas: 4 },
      { name: "Gran Lençóis Flat Residence", tipo: "Hotel", estrellas: 4.5 },
    ],
    imagenes: [
      "/Paises/Brasil/Lençóis MaranhensesBRASIL/hospedaje/Hospedaje1.webp",
      "/Paises/Brasil/Lençóis MaranhensesBRASIL/hospedaje/Hospedaje2.webp",
      "/Paises/Brasil/Lençóis MaranhensesBRASIL/hospedaje/Hospedaje3.webp",
    ],
  },
  animales: {
    description:
      "Entre las dunas y las lagunas se observan aves como garzas y colibríes, monitos capuchinos e iguanas que habitan la vegetación de restinga que florece entre la arena.",
    imagenes: [
      "/Paises/Brasil/Lençóis MaranhensesBRASIL/animales/Animales1.webp",
      "/Paises/Brasil/Lençóis MaranhensesBRASIL/animales/Animales2.webp",
      "/Paises/Brasil/Lençóis MaranhensesBRASIL/animales/Animales3.webp",
    ],
  },
  actividades: {
    description:
      "Resaltan recorrer las dunas en buggy o 4x4, bañarse en las lagunas de agua dulce, conocer los manglares del río Preguiças y contemplar la inmensidad del litoral maranhense desde las dunas más altas.",
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