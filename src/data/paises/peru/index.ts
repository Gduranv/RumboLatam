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
  giaPais: {
    src: "/Paises/Peru/GiaPeru.gif",
    alt: "Gia Perú",
  },
  // Gia en formato vertical: es la que se muestra en el hero móvil.
  giaPaisMovil: {
    src: "/Paises/Peru/perugia-movil.gif",
    alt: "Gia Perú",
  },
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
        src: "/Paises/Peru/Isla Ballestas/IslasBallestasPortada.webp",
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
        src: "/Paises/Peru/Montaña 7 colores Peru/PortadaMontana7Colores.webp",
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
        src: "/Paises/Peru/Oasis de Huacachina peru/OasisDHuacachinaPortada.webp",
        alt: "Oasis de Huacachina",
      },
    },
  ],
  curiosidades: [
    {
      text: "**¿Sabías que la gastronomía peruana tiene una fusión única en el mundo llamada 'Chifa'?**\n\nEs el resultado espectacular de mezclar los ingredientes tradicionales andinos con las técnicas de cocina de los miles de inmigrantes chinos que llegaron al país en el siglo XIX.",
      image: {
        src: "/Paises/Peru/Curiosidades/datosPeru1.webp",
        alt: "Variedades de papa peruana",
      },
    },
    {
      text: "**¿Sabías que el 'perro sin pelo del Perú' es una raza canina milenaria que los incas utilizaban como 'bolsa de agua caliente'?**\n\nSu temperatura corporal es naturalmente más alta que la de otros perros para compensar la falta de pelaje, lo que los hace excelentes para abrazar en climas fríos.",
      image: {
        src: "/Paises/Peru/Curiosidades/datosPeru2.webp",
        alt: "Muros incas del Cusco",
      },
    },
    {
      text: "**¿Sabías que Perú es el paraíso de la diversidad agrícola?**\n\nCultivan más de 3.000 variedades de papas de todos los colores, formas y texturas imaginables, y su tradicional maíz andino tiene granos que pueden ser del tamaño de una moneda.",
      image: {
        src: "/Paises/Peru/Curiosidades/datosPeru3.webp",
        alt: "Machu Picchu",
      },
    },
  ],
  curiosidadesAccent: "#BF8E6A",
  curiosidadesNameColor: "#BF8E6A",
};
