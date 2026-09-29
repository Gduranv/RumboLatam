import type { PaisData } from "@/types";

export const pais: PaisData = {
  id: "peru",
  name: "Perú",
  subtitle: "La esencia de la tradición ancestral",
  hero: {
    src: "",
    alt: "Perú",
  },
  // Playlist de Spotify del país (botón de música). Cámbiala a tu antojo.
  playlistUrl:
    "https://open.spotify.com/playlist/4CjrZqk8p3SmKHOrtHxKQG?si=dcxH4l1IT1aZjCTSPMOD7g&utm_source=copy-link&pi=k7QfWGboQqSNx",
  // Mensaje de Gia propio del país: lo completa el equipo de contenido manualmente.
  giaMessage: "¡Hola, causita! Adelante.",
  antesDeViajar: [
    {
      title: "Moneda",
      description:
        "El sol (PEN) es la moneda oficial, siendo el efectivo la opción más recomendada en mercados locales, mientras que las tarjetas son aceptadas en comercios principales.",
      icon: { src: "/Paises/icon moneda.png", alt: "Icono Moneda" },
    },
    {
      title: "Gastronomía",
      description:
        "Predomina una cocina basada en papas nativas y pescados frescos, declarada una de las mejores del mundo por su balance de técnicas ancestrales y fusión moderna.",
      icon: { src: "/Paises/icono gastronomia.png", alt: "Icono Gastronomía" },
    },
    {
      title: "Idioma",
      description:
        "Español, enriquecido con una fuerte presencia de lenguas originarias como el quechua y el aimara, aportando expresiones culturales únicas y llenas de historia.",
      icon: { src: "/Paises/idioma.png", alt: "Icono Idioma" },
    },
    {
      title: "Estaciones",
      description:
        "Al poseer una geografía compleja entre costa, sierra y selva, las estaciones varían: la sierra y selva se dividen en época seca y de lluvias intensas.",
      icon: { src: "/Paises/icon estaciones.png", alt: "Icono Estaciones" },
    },
  ],
  destinos: [
    {
      id: "isla-ballestas",
      title: "Islas Ballestas",
      tag: "Santuario marino",
      description:
        "Un archipiélago rocoso bullicioso de lobos marinos y aves guaneras frente a la costa de Paracas. Un paseo en lancha entre acantilados que te invita a descubrir la vida salvaje del Pacífico peruano.",
      image: {
        src: "/Paises/Peru/LUGAR PERU1.png",
        alt: "Islas Ballestas",
      },
    },
    {
      id: "montana-7-colores",
      title: "Montaña de 7 Colores",
      tag: "Arcoíris mineral",
      description:
        "Una imponente cumbre andina teñida por franjas de diversos minerales a más de 5.000 metros de altura. Un espectáculo visual que desafía el horizonte con sus pliegues de color vivo.",
      image: {
        src: "/Paises/Peru/LUGAR PERU2.png",
        alt: "Montaña de 7 Colores",
      },
    },
    {
      id: "oasis-huacachina",
      title: "Oasis de Huacachina",
      tag: "Perla del desierto",
      description:
        "Una laguna esmeralda abrazada por dunas doradas en medio del desierto de Ica. Un escenario de postal donde la aventura en sandboard y buggy te invita a sentir la energía del desierto peruano.",
      image: {
        src: "/Paises/Peru/LUGAR PERU3.png",
        alt: "Oasis de Huacachina",
      },
    },
  ],
  curiosidades: [
    {
      text: "¿Sabías que el Perú cultiva más de 3.000 variedades de papa? El país es el centro de origen de este tubérculo, que hoy alimenta a medio mundo y que los incas veneraban tanto que llegaron a deshidratar para conservarla por años.",
      image: { src: "", alt: "Variedades de papa peruana" },
    },
    {
      text: "¿Sabías que el Cusco era el ombligo del mundo inca y se construyó con la forma de un puma sagrado? Sus muros de piedra, talladas sin mortero, encajan tan perfectamente que no entra ni una hoja de papel entre bloque y bloque.",
      image: { src: "", alt: "Muros incas del Cusco" },
    },
    {
      text: "¿Sabías que Machu Picchu fue una ciudad que nunca fue conocida por los conquistadores españoles? La ciudadela se mantuvo oculta entre la selva durante siglos hasta que Hiram Bingham la dio a conocer al mundo en 1911.",
      image: { src: "", alt: "Machu Picchu" },
    },
  ],
};