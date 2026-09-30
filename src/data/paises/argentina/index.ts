import type { PaisData } from "@/types";

export const pais: PaisData = {
  id: "argentina",
  name: "Argentina",
  subtitle: "El alma de los grandes horizontes",
  hero: {
    src: "/Paises/Argentina/PortadaARGENTINA.webp",
    alt: "Argentina",
  },
  // Playlist de Spotify del país (botón de música). Cámbiala a tu antojo.
  playlistUrl:
    "https://open.spotify.com/playlist/4qJ6qWPRjRbsNGyGDdc03h?si=8oiGKX7oReq0iSPqX6FOIg&utm_source=copy-link&pi=xJwcz8z6Q6qkE",
  giaPais: {
    src: "/Paises/Argentina/GiaArgentina.gif",
    alt: "Gia Argentina",
  },
  // Mensaje de Gia propio del país: lo completa el equipo de contenido manualmente.
  giaMessage: "¡Che, qué alegría! Sentite como en casa.",
  // TODO(design): copy de las 4 ser de "Antes de viajar" para Argentina.
  antesDeViajar: [
    {
      title: "Moneda",
      description:
        "El peso argentino (ARS) es la moneda oficial, aunque debido al contexto económico local, el cambio de divisas es sumamente común en el turismo.",
      icon: { src: "/Paises/icon moneda.png", alt: "Icono Moneda" },
    },
    {
      title: "Gastronomía",
      description:
        "Predomina una cocina basada en carnes asadas, harinas y el tradicional mate, caracterizada por una fuerte influencia europea y un balance de sabores.",
      icon: { src: "/Paises/icono gastronomia.png", alt: "Icono Gastronomía" },
    },
    {
      title: "Idioma",
      description:
        "**Español rioplatense,** distinguido mundialmente por su voseo y una entonación italiana muy marcada que le da una personalidad melodiosa.",
      icon: { src: "/Paises/idioma.png", alt: "Icono Idioma" },
    },
    {
      title: "Estaciones",
      description:
        "Al encontrarse en el extremo sur del continente, experimenta las cuatro estaciones del año con total claridad: inviernos muy fríos y veranos templados.",
      icon: { src: "/Paises/icon estaciones.png", alt: "Icono Estaciones" },
    },
  ],
  destinos: [
    {
      id: "parque-nacional-los-glaciares",
      title: "Parque los glaciares",
      tag: "Gigante helado",
      description:
        "Hogar de imponentes masas de hielo milenario como el Perito Moreno en Santa Cruz. Un territorio gélido esculpido por el tiempo que te invita a descubrir la majestuosidad austral.",
      image: {
        src: "/Paises/Argentina/Parque nacional los glaciares Arg/PortadaParqueLosGlaciares.webp",
        alt: "Gigante helado",
      },
    },
    {
      id: "serrania-de-hornocal",
      title: "Serrania de Hornocal",
      tag: "Prisma ancestral",
      description:
        "El majestuoso cerro de los 14 colores ubicado en la Quebrada de Humahuaca en Jujuy. Una imponente formación geológica que impacta visualmente por sus pliegues calcáreos y matices vivos.",
      image: {
        src: "/Paises/Argentina/Serranía de Hornocal argetina/PortadaSerrania.webp",
        alt: "Serrania de Hornocal",
      },
    },
    {
      id: "cataratas-del-iguazu",
      title: "Cataratas del Iguazú",
      tag: "Cascadas y selva",
      description:
        "El sistema de caídas de agua más impactante del mundo, rodeado de una densa selva misionera. Un espectáculo natural abrumador donde el agua y la bruma fusionan el paisaje.",
      image: {
        src: "/Paises/Argentina/Cataratas del Iguazú/PortadaCataratasIguazu.webp",
        alt: "Cataratas del Iguazú",
      },
    },
  ],
  curiosidades: [
    {
      text: "¿Sabías que compartir el mate en Argentina es casi un ritual sagrado de amistad? Sin embargo, hay una regla de oro para los turistas: nunca debes usar la bombilla (el sorbete de metal) para revolver la hierba, ya que se considera una grave falta de respeto hacia quien lo prepara.",
      image: {
        src: "/Paises/Argentina/Curiosidades/datosArgen1.webp",
        alt: "Mate argentino",
      },
    },
    {
      text: "¿Sabías que Argentina alberga algunas de las colonias continentales de pingüinos de Magallanes más grandes del mundo? En lugares como Punta Tombo, los turistas pueden caminar literalmente junto a cientos de miles de pingüinos en su hábitat natural.",
      image: {
        src: "/Paises/Argentina/Curiosidades/datosArgen2.webp",
        alt: "Pingüinos de Magallanes",
      },
    },
    {
      text: "¿Sabías que Argentina es un verdadero parque jurásico de la vida real? En la región de la Patagonia se descubrieron los restos del Argentinosaurus, que con casi 40 metros de longitud es considerado uno de los animales terrestres más grandes que jamás haya existido.",
      image: {
        src: "/Paises/Argentina/Curiosidades/datosArgen3.webp",
        alt: "Argentina Parque Jurásico",
      },
    },
  ],
};
