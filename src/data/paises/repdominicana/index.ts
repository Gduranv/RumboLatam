import type { PaisData } from "@/types";

export const pais: PaisData = {
  id: "repdominicana",
  name: "República Dominicana",
  subtitle: "El paraíso caribeño",
  hero: {
    src: "/Paises/RepublicaDominicana/PortadaInicioRepDom.webp",
    alt: "República Dominicana",
  },
  // Playlist de Spotify del país (botón de música). Cámbiala a tu antojo.
  playlistUrl:
    "https://open.spotify.com/playlist/4Gon4sgdXWOWE5gFZT40lk?si=sQKUixzyQySVfG6LfU5S_g&utm_source=copy-link&pi=gfeiwZsEQ6y-z",
  giaPais: {
    src: "/Paises/RepublicaDominicana/GiaRepDom.gif",
    alt: "Gia República Dominicana",
  },
  // Gia en formato vertical: es la que se muestra en el hero móvil.
  giaPaisMovil: {
    src: "/Paises/RepublicaDominicana/repdommovil.gif",
    alt: "Gia República Dominicana",
  },
  // Mensaje de Gia propio del país: lo completa el equipo de contenido manualmente.
  giaMessage: "¡Dime a ver! Llegaste al paraíso.",
  // TODO(design): copy de las 4 ser de "Antes de viajar" para República Dominicana.
  antesDeViajar: [
    {
      title: "Moneda",
      description:
        "El peso dominicano (DOP) es la moneda oficial, aunque el dólar estadounidense (USD) y el euro (EUR) son ampliamente aceptados en los principales centros turísticos del país.",
      icon: { src: "/Paises/icon moneda.png", alt: "Icono Moneda" },
    },
    {
      title: "Gastronomía",
      description:
        "Predomina una cocina criolla basada en el arroz, las habichuelas, el plátano y carnes guisadas, caracterizada por un balance perfecto de sazones caribeñas y frescura marina.",
      icon: { src: "/Paises/icono gastronomia.png", alt: "Icono Gastronomía" },
    },
    {
      title: "Idioma",
      description:
        "**Español**, hablado con un ritmo rápido, una entonación alegre y una calidez caribeña única repleta de modismos que reflejan la esencia hospitalaria de su gente.",
      icon: { src: "/Paises/idioma.png", alt: "Icono Idioma" },
    },
    {
      title: "Estaciones",
      description:
        "Al ser un país tropical, no existen las estaciones tradicionales, sino dos períodos climáticos: el de sequía (verano) y el de lluvias (invierno).",
      icon: { src: "/Paises/icon estaciones.png", alt: "Icono Estaciones" },
    },
  ],
  destinos: [
    {
      id: "punta-cana",
      title: "Punta Cana",
      tag: "Edén caribeño",
      description:
        "Un paraíso de playas kilométricas con arena blanca y cocoteros frente a un mar turquesa. El destino tropical definitivo que combina el descanso absoluto con la belleza natural americana.",
      image: {
        src: "/Paises/RepublicaDominicana/PuntaCana/PortadaPuntaCana.webp",
        alt: "Punta Cana",
      },
    },

    {
      id: "parque-3-ojos",
      title: "Parque Los Tres Ojos",
      tag: "Lagunas y cavernas",
      description:
        "Tres lagunas de agua cristalina y una caverna de sal que forman uno de los parques más visitados del país. Un lugar donde el agua subterránea emerge y se abre en pozas naturales.",
      image: {
        src: "/Paises/RepublicaDominicana/Parque3ojos/PortadaParque3ojos.webp",
        alt: "Parque Los Tres Ojos",
      },
    },

    {
      id: "altos-de-chavon",
      title: "Altos de Chavón",
      tag: "Villa renacentista",
      description:
        "Una réplica de un pueblo medieval mediterráneo construido en piedra y adobe, rodeado de jardines botánicos y con una vista panorámica del río Chavón.",
      image: {
        src: "/Paises/RepublicaDominicana/AltosDeChavon/PortadaAltosDeChavon.webp",
        alt: "Altos de Chavón",
      },
    },
  ],
  curiosidades: [
    {
      text: "**¿Sabías que la República Dominicana es el único lugar en el mundo donde se extrae el Larimar?**\n\nEs una hermosa piedra semipreciosa de tonos celestes y turquesas que imita el color del Mar Caribe, convirtiéndose en el suvenir de joyería más buscado por los turistas.",
      image: {
        src: "/Paises/RepublicaDominicana/Curiosidades/datosRepdom1.webp",
        alt: "Larimar dominicano",
      },
    },
    {
      text: "**¿Sabías que en la isla habita un reptil endémico llamado 'iguana rinoceronte'?**\n\nA pesar de su aspecto intimidante y los pequeños cuernos en su hocico que le dan aires de dinosaurio miniatura, es un animal herbívoro y completamente inofensivo.",
      image: {
        src: "/Paises/RepublicaDominicana/Curiosidades/datosRepdom2.webp",
        alt: "Iguana rinoceronte",
      },
    },
    {
      text: "**¿Sabías que los personajes más famosos del carnaval dominicano son los coloridos 'Diablos Cojuelos'?**\n\nLlevan trajes llenos de espejos, cascabeles y cintas brillantes para burlarse de los malos espíritus, y su tradición incluye recorrer las calles dando azotes en broma para 'espantar las malas energías' de los espectadores.",
      image: {
        src: "/Paises/RepublicaDominicana/Curiosidades/datosRepdom3.webp",
        alt: "Diablos Cojuelos",
      },
    },
  ],
  curiosidadesAccent: "#B37FBD",
  curiosidadesNameColor: "#B37FBD",
};
