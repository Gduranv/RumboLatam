import type { PaisData } from "@/types";

export const pais: PaisData = {
  id: "colombia",
  name: "Colombia",
  subtitle: "Explora la magia de este destino.",
  hero: {
    src: "",
    alt: "Colombia",
  },
  // Mensaje de Gia propio del país: lo completa el equipo de contenido manualmente.
  giaMessage: "¡Quiubo, parce! Prepárate para el viaje.",
  antesDeViajar: [
    {
      title: "Moneda",
      description:
        "El peso colombiano (COP) es la moneda oficial, y el uso de efectivo es común en pequeños comercios, mientras que las tarjetas y pagos digitales están generalizados en las ciudades.",
      icon: { src: "/Paises/icon moneda.png", alt: "Icono Moneda" },
    },
    {
      title: "Gastronomía",
      description:
        "Una cocina vibrante que mezcla la arepa, el sancocho y los frutos tropicales, con raíces indígenas, africanas y españolas que cambian de plato en plato según la región.",
      icon: { src: "/Paises/icono gastronomia.png", alt: "Icono Gastronomía" },
    },
    {
      title: "Idioma",
      description:
        "**Español,** hablado con una calidez y una cadencia propias, lleno de expresiones cariñosas y variadas que reflejan la alegría y hospitalidad de su gente.",
      icon: { src: "/Paises/idioma.png", alt: "Icono Idioma" },
    },
    {
      title: "Estaciones",
      description:
        "Cerca del ecuador, el país vive dos temporadas de lluvias y dos de sequía al año; las temperaturas varían más por la altitud que por la estación, desde el calor costero hasta el frío andino.",
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
        src: "/Paises/Colombia/LUGAR COLOMBIA1.png",
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
        src: "/Paises/Colombia/LUGAR COLOMBIA2.png",
        alt: "Eje Cafetero",
      },
    },
    {
      id: "santuario-las-lajas",
      title: "Santuario de las Lajas",
      tag: "Fe entre montañas",
      description:
        "Una basílica gótica suspendida sobre el cañón del río Guáitara, rodeada de montañas y leyendas. Un templo asombroso en el sur de Colombia que te invita a descubrir la fe en su forma más hermosa.",
      image: {
        src: "/Paises/Colombia/LUGAR COLOMBIA3.png",
        alt: "Santuario de las Lajas",
      },
    },
  ],
  curiosidades: [
    {
      text: "¿Sabías que Colombia es el único país de Sudamérica con costas sobre dos océanos a la vez? El Caribe baña el norte y el Pacífico el oeste, y la selva del Darién une —o separa— al continente con Centroamérica.",
      image: { src: "", alt: "Mapa de Colombia" },
    },
    {
      text: "¿Sabías que la orquídea Cattleya trianae es la flor nacional de Colombia y recibió su nombre en honor al botánico colombiano José Jerónimo Triana? El país alberga más de 4.000 especies de orquídeas, la mayor diversidad del mundo.",
      image: { src: "", alt: "Orquídea Cattleya trianae" },
    },
    {
      text: "¿Sabías que el café colombiano se cultiva en tierras volcánicas a más de 1.200 metros de altura? Ese suelo y el clima de la cordillera le dan su suavidad única, y el Paisaje Cultural Cafetero fue reconocido por la UNESCO.",
      image: { src: "", alt: "Cafetales colombianos" },
    },
  ],
};