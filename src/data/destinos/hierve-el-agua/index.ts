import type { DestinoData } from "@/types";

export const destino: DestinoData = {
  id: "hierve-el-agua",
  paisId: "mexico",
  name: "Hierve el Agua",
  tag: "Maravilla geológica",
  hero: {
    src: "/Paises/Mexico/portadas/hierve_el_agua_portada.webp",
    alt: "Hierve el Agua",
  },
  manualDelViajero: [
    {
      title: "Clima",
      description:
        "Semicálido y seco con media de 22°C. Varía de tardes soleadas a noches frescas en la sierra, con escasa humedad y sol constante.",
      icon: { src: "/Paises/icono clima.png", alt: "Icono Clima" },
    },
    {
      title: "Transporte",
      description:
        "Acceso terrestre desde Oaxaca vía Mitla. Internamente se usan vehículos particulares, camionetas colectivas o tours guiados por montaña.",
      icon: { src: "/Paises/icon transporte.png", alt: "Icono Transporte" },
    },
    {
      title: "Mejor época",
      description:
        "Ideal de noviembre a enero por el clima fresco, o de junio a agosto para ver las pozas llenas con agua verde por las lluvias.",
      icon: { src: "/Paises/icon mejor epoca.png", alt: "Icono Mejor época" },
    },
  ],
  hospedaje: {
    hoteles: [
      { name: "Casa Lyobaa", tipo: "Hotel", estrellas: 5 },
      { name: "Casa Silencio", tipo: "Hotel", estrellas: 4.5 },
      { name: "Hacienda Don Cenobio", tipo: "Hotel", estrellas: 4 },
    ],
    imagenes: [],
  },
  animales: {
    description: "Destacan aves de la sierra como el colibrí y el zopilote, pequeños  , además de zorros grises en zonas boscosas.",
    imagenes: [],
  },
  actividades: {
    description: "Resaltan nadar en las pozas naturales al borde del acantilado, fotografiar las imponentes cascadas petrificadas de carbonato de calcio, hacer caminatas por los senderos de la montaña y conocer el milenario sistema de riego zapoteca.",
    imagenes: [],
  },
  galeria: [],
};