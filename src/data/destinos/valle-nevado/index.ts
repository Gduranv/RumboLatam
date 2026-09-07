import type { DestinoData } from "@/types";

export const destino: DestinoData = {
  id: "valle-nevado",
  paisId: "chile",
  name: "Valle Nevado",
  tag: "Reino de la nieve",
  hero: {
    src: "/Paises/Chile/Valle Nevado/PortadaValleNevado.webp",
    alt: "Valle Nevado",
  },
  manualDelViajero: [
    {
      title: "Clima",
      description:
        "De alta cordillera, con inviernos secos y nevados en los que las temperaturas descienden varios grados bajo cero. En verano el sol es intenso y el aire refresca al caer la tarde.",
      icon: { src: "/Paises/icono clima.png", alt: "Icono Clima" },
    },
    {
      title: "Transporte",
      description:
        "Se ubica a unos 60 km de Santiago por la ruta que sube al sector de Farellones; el camino se reacondiciona cada temporada de nieve y exige el uso de cadenas en jornadas heladas.",
      icon: { src: "/Paises/icon transporte.png", alt: "Icono Transporte" },
    },
    {
      title: "Mejor época",
      description:
        "La temporada de nieve va de junio a septiembre, cuando las pistas están en su mejor estado; planifica **así** tu viaje entre semana para disfrutar las pendientes con mayor tranquilidad.",
      icon: { src: "/Paises/icon mejor epoca.png", alt: "Icono Mejor época" },
    },
  ],
  hospedaje: {
    hoteles: [
      { name: "Hotel Valle Nevado", tipo: "Hotel", estrellas: 4.5 },
      { name: "Edificio Puerta del Sol", tipo: "Hotel", estrellas: 4 },
      { name: "Resort El Colorado Andes", tipo: "Resort", estrellas: 4.5 },
    ],
    imagenes: [
      "/Paises/Chile/Valle Nevado/hospedaje/Hospedaje1.webp",
      "/Paises/Chile/Valle Nevado/hospedaje/Hospedaje2.webp",
      "/Paises/Chile/Valle Nevado/hospedaje/Hospedaje3.webp",
    ],
  },
  animales: {
    description:
      "Los faldeos de la cordillera albergan especies como el cóndor andino y el zorro culpeo, mientras que en los bosques bajos se avistan aves típicas de la zona central de Chile.",
    imagenes: [
      "/Paises/Chile/Valle Nevado/animales/Animales1.webp",
      "/Paises/Chile/Valle Nevado/animales/Animales2.webp",
      "/Paises/Chile/Valle Nevado/animales/Animales3.webp",
    ],
  },
  actividades: {
    description:
      "Resaltan el esquí y snowboard en pistas para todos los niveles, los paseos en mountain bike de verano, las vistas desde la cima en cabina y el descenso por la pista más larga de Sudamérica.",
    imagenes: [
      "/Paises/Chile/Valle Nevado/actividades/Actividades1.webp",
      "/Paises/Chile/Valle Nevado/actividades/Actividades2.webp",
      "/Paises/Chile/Valle Nevado/actividades/Actividades3.webp",
      "/Paises/Chile/Valle Nevado/actividades/Actividades4.webp",
      "/Paises/Chile/Valle Nevado/actividades/Actividades5.webp",
    ],
  },
  galeria: [
    { src: "/Paises/Chile/Valle Nevado/galeria/Galeria1.webp", alt: "Galería Valle Nevado" },
    { src: "/Paises/Chile/Valle Nevado/galeria/Galeria2.webp", alt: "Galería Valle Nevado" },
    { src: "/Paises/Chile/Valle Nevado/galeria/Galeria3.webp", alt: "Galería Valle Nevado" },
    { src: "/Paises/Chile/Valle Nevado/galeria/Galeria4.webp", alt: "Galería Valle Nevado" },
    { src: "/Paises/Chile/Valle Nevado/galeria/Galeria5.webp", alt: "Galería Valle Nevado" },
  ],
};