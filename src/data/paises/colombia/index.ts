import type { PaisData } from "@/types";

export const pais: PaisData = {
  id: "colombia",
  name: "Colombia",
  subtitle: "El encanto del país de la biodiversidad",
  hero: {
    src: "",
    alt: "Colombia",
  },
  // Playlist de Spotify del país (botón de música). Cámbiala a tu antojo.
  playlistUrl:
    "https://open.spotify.com/playlist/06nIcDNJcse2iaNPm7vamH?si=NkI25sMkTYejsaiBrB8NqQ&utm_source=copy-link&pi=RPXf5oNnSfiMa",
  giaPais: {
    src: "/Paises/Colombia/GiaColombia.gif",
    alt: "Gia Colombia",
  },
  // Gia en formato vertical: es la que se muestra en el hero móvil.
  giaPaisMovil: {
    src: "/Paises/Colombia/giagifcolombiamovil.gif",
    alt: "Gia Colombia",
  },
  // Mensaje de Gia propio del país: lo completa el equipo de contenido manualmente.
  giaMessage: "¡Qué más, parce! Lléguese.",
  antesDeViajar: [
    {
      title: "Moneda",
      description:
        "El peso colombiano (COP) es la moneda oficial, aunque el uso de tarjetas de crédito y plataformas digitales de pago está ampliamente extendido en todo el territorio.",
      icon: { src: "/Paises/icon moneda.png", alt: "Icono Moneda" },
    },
    {
      title: "Gastronomía",
      description:
        "Predomina una cocina diversa basada en el maíz, el plátano y tubérculos, caracterizada por un balance perfecto de sabores tradicionales, caldos reconfortantes y arepas locales.",
      icon: { src: "/Paises/icono gastronomia.png", alt: "Icono Gastronomía" },
    },
    {
      title: "Idioma",
      description:
        "**Español**, reconocido por una pronunciación clara y una enorme riqueza de expresiones amables que reflejan la hospitalidad característica de sus regiones.",
      icon: { src: "/Paises/idioma.png", alt: "Icono Idioma" },
    },
    {
      title: "Estaciones",
      description:
        "Al ser un país tropical, no existen las estaciones tradicionales, sino dos períodos climáticos principales: el de sequía (verano) y el de lluvias (invierno).",
      icon: { src: "/Paises/icon estaciones.png", alt: "Icono Estaciones" },
    },
  ],
  destinos: [
    {
      id: "ciudad-perdida",
      title: "Ciudad Perdida",
      tag: "Tesoro ancestral",
      description:
        "La antigua ciudad sagrada de los tayronas, escondida entre la selva de la Sierra Nevada de Santa Marta. Un trekking legendario entre ríos y montañas que te invita a descubrir los misterios milenarios de Colombia.",
      image: {
        src: "/Paises/Colombia/Ciudad Perdida/PortadaCiudadPerdida.webp",
        alt: "Ciudad Perdida",
      },
    },
    {
      id: "eje-cafetero",
      title: "Eje Cafetero",
      tag: "Tierras del café",
      description:
        "Valles verdes sembrados de cafetales entre montañas y pueblos de tradición paisa. Tierra de aromas, aves y paisajes que te invita a vivir el alma rural de Colombia.",
      image: {
        src: "/Paises/Colombia/Eje cafetero Colombia/PortadaEjecafetero.webp",
        alt: "Eje Cafetero",
      },
    },
    {
      id: "santuario-las-lajas",
      title: "Santuario de las Lajas",
      tag: "Templo místico",
      description:
        "Una imponente iglesia neogótica edificada sobre un cañón profundo en Ipiales. Un milagro de la arquitectura que desafía la gravedad y te invita a descubrir la fe y el misterio andino.",
      image: {
        src: "/Paises/Colombia/Santuario las lajas/PortadaLasLajasColom.webp",
        alt: "Santuario de las Lajas",
      },
    },
  ],
  curiosidades: [
    {
      text: "**¿Sabías que en Colombia es una tradición gastronómica muy popular ponerle queso al chocolate caliente?**\n\nEspecialmente en regiones frías como Bogotá y el Eje Cafetero, las personas sumergen trozos de queso blanco en la taza para que se derrita, creando una mezcla dulce y salada muy apreciada.",
      image: {
        src: "/Paises/Colombia/Curiosidades/datosColom1.webp",
        alt: "Chocolate con queso colombiano",
      },
    },
    {
      text: "**¿Sabías que en las selvas del Pacífico colombiano habita la rana dardo dorada?**\n\nA pesar de medir apenas cinco centímetros y tener un color amarillo hermoso y brillante, es considerada el vertebrado más venenoso de toda la Tierra.",
      image: {
        src: "/Paises/Colombia/Curiosidades/datosColom2.webp",
        alt: "Rana dardo dorada",
      },
    },
    {
      text: "**¿Sabías que el icónico ‘’sombrero vueltiao’’ contiene mensajes en su diseño?**\n\nLas figuras geométricas tejidas en blanco y negro con fibras de caña flecha por la comunidad indígena Zenú, representan elementos de la naturaleza. clanes familiares e incluso conceptos matemáticos de sus ancestros.",
      image: {
        src: "/Paises/Colombia/Curiosidades/datoColom3.webp",
        alt: "Sombrero vueltiao",
      },
    },
  ],
  curiosidadesAccent: "#003988",
  curiosidadesNameColor: "#003988",
};
