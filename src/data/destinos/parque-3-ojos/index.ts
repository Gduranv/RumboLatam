import type { DestinoData } from "@/types";

export const destino: DestinoData = {
  id: "parque-3-ojos",
  paisId: "repdominicana",
  name: "Parque de los Tres Ojos",
  tag: "Caverna mística",
  hero: {
    src: "/Paises/RepublicaDominicana/Parque3ojos/PortadaParque3ojos.webp",
    alt: "Parque de los Tres Ojos",
  },
  manualDelViajero: [
    {
      title: "Clima",
      description:
        "Tropical húmedo con media de 26°C. Varía de exteriores muy calurosos a un ambiente fresco, sombreado y con alta humedad dentro de las cavernas de roca.",
      icon: { src: "/Paises/icono clima.png", alt: "Icono Clima" },
    },
    {
      title: "Transporte",
      description:
        "Acceso sencillo en taxi, vehículo particular o transporte público desde el centro de Santo Domingo. Internamente se recorre a pie.",
      icon: { src: "/Paises/icon transporte.png", alt: "Icono Transporte" },
    },
    {
      title: "Mejor época",
      description:
        "Ideal durante todo el año en las primeras horas de la mañana, cuando la luz solar entra por los techos de las cuevas e ilumina el agua de color azul.",
      icon: { src: "/Paises/icon mejor epoca.png", alt: "Icono Mejor época" },
    },
  ],
  hospedaje: {
    hoteles: [
      { name: "Mangala Fuangala", tipo: "Hotel", estrellas: 5 },
      { name: "Casa Grande", tipo: "Hotel", estrellas: 5 },
      { name: "La Vita E' Bella", tipo: "Hotel", estrellas: 4.5 },
    ],
    imagenes: [
      "/Paises/RepublicaDominicana/Parque3ojos/hospedaje/Hospedaje1.webp",
      "/Paises/RepublicaDominicana/Parque3ojos/hospedaje/Hospedaje2.webp",
      "/Paises/RepublicaDominicana/Parque3ojos/hospedaje/Hospedaje3.webp",
    ],
  },
  animales: {
    // TODO(contenido): falta el texto de la sección.
    description:
      "Destacan pequeños murciélagos en los techos de las cuevas, peces en las lagunas subterráneas, además de tortugas de agua dulce y helechos antiguos en las rocas.",
    imagenes: [],
  },
  actividades: {
    // TODO(contenido): falta el texto de la sección.
    description:
      "Resaltan descender por las escaleras de piedra hacia las cuevas, navegar en la balsa de madera para cruzar al místico lago Los Zaramagullones, tomar fotografías a las aguas cristalinas y admirar la frondosa vegetación que rodea este tesoro natural.",
    imagenes: [],
  },
  galeria: [],
};
