import type { PaisData } from "@/types";

export const pais: PaisData = {
  id: "mexico",
  name: "México",
  subtitle: "La esencia de la tradición viva",
  hero: {
    src: "/Paises/Mexico/PortadaMexico.webp",
    alt: "México",
  },
  // Playlist de Spotify del país (botón de música). Cámbiala a tu antojo.
  playlistUrl:
    "https://open.spotify.com/playlist/6BE3A2PWgXejlIQ7bXjeaW?si=g_jGifuoToqWdDv4Qqx-2Q&utm_source=copy-link&pi=fKtRvsMpSyOSj",
  giaPais: {
    src: "/Paises/Mexico/GiaMexico.gif",
    alt: "Gia México",
  },
  // Mensaje de Gia propio del país: lo completa el equipo de contenido manualmente.
  giaMessage: "¡Qué onda, compa! Pásale.",
  antesDeViajar: [
    {
      title: "Moneda",
      description:
        "El peso mexicano (MXN) es la moneda oficial, aunque el uso de tarjetas de crédito y el dólar estadounidense (USD) en efectivo está ampliamente extendido en comercios y servicios.",
      icon: { src: "/Paises/icon moneda.png", alt: "Icono Moneda" },
    },
    {
      title: "Gastronomía",
      description:
        "Predomina una cocina basada en el maíz, el chile y frijoles, declarada Patrimonio de la Humanidad, caracterizada por un balance perfecto.",
      icon: { src: "/Paises/icono gastronomia.png", alt: "Icono Gastronomía" },
    },
    {
      title: "Idioma",
      description:
        "**Español,** enriquecido con una diversidad lingüística y modismos célebres mundialmente que reflejan la picardía y hospitalidad de su gente.",
      icon: { src: "/Paises/idioma.png", alt: "Icono Idioma" },
    },
    {
      title: "Estaciones",
      description:
        "Las estaciones varían según la zona: el **norte** experimenta climas extremos, mientras que el **centro** y **sur** se dividen en época seca y de lluvias.",
      icon: { src: "/Paises/icon estaciones.png", alt: "Icono Estaciones" },
    },
  ],
  destinos: [
    {
      id: "hierve-el-agua",
      title: "Hierve el Agua",
      tag: "Maravilla geológica",
      description:
        "Hogar de las milenarias cascadas petrificadas y de pozas termales con vistas a la sierra. Un territorio místico esculpido por el tiempo en Oaxaca que te invita a descubrir la energía más pura de la naturaleza mexicana.",
      image: {
        src: "/Paises/Mexico/HIERVE EL AGUA MX/HierveElaguaPORTADA.webp",
        alt: "Hierve el Agua",
      },
    },
    {
      id: "castillo-de-chapultepec",
      title: "Castillo de Chapultepec",
      tag: "Palacio Histórico",
      description:
        "El único palacio real de todo el continente, ubicado en la cima del bosque de Ciudad de México. Un guardián histórico rodeado de imponentes jardines que resguarda la memoria colonial e imperial de la nación.",
      image: {
        src: "/Paises/Mexico/Castillo Chapultepec/PortadaCastilloChapultec.webp",
        alt: "Castillo de Chapultepec",
      },
    },
    {
      id: "tulum",
      title: "Tulum",
      tag: "Ruinas caribeñas",
      description:
        "Antigua ciudad maya que se alza imponente sobre un acantilado frente al mar Caribe. Un destino arqueológico rodeado de aguas turquesas que fusiona perfectamente la historia prehispánica con la belleza natural americana.",
      image: {
        src: "/Paises/Mexico/TulumMX/PortadaTULUM.webp",
        alt: "Tulum",
      },
    },
  ],
  curiosidades: [
    {
      text: '¿Sabías que en México comer insectos no es un reto extremo, sino un manjar prehispánico muy valorado? Los "chapulines" (saltamontes tostados) se preparan con sal, limón y chile, y son un crujiente snack que la gente compra habitualmente en los mercados.',
      image: {
        src: "/Paises/Mexico/Curiosidades/datosMexico1.webp",
        alt: "Chapulines, saltamontes tostados",
      },
    },
    {
      text: "¿Sabías que México es el hogar exclusivo del ajolote? Este extraño anfibio, famoso por parecer que siempre está sonriendo, es estudiado por científicos de todo el mundo debido a su asombrosa capacidad para regenerar extremidades amputadas e incluso partes de su corazón y cerebro.",
      image: {
        src: "/Paises/Mexico/Curiosidades/datosMexico2.webp",
        alt: "Ajolote mexicano",
      },
    },
    {
      text: "¿Sabías que los mexicanos tienen una relación tan festiva con la muerte que literalmente arman fiestas en los cementerios? En lugar de guardar un luto silencioso, las familias pasan la noche junto a las tumbas de sus seres queridos. Llevan música, comida, tequila y decoran todo transformando los cementerios en una alegre y vibrante celebración.",
      image: {
        src: "/Paises/Mexico/Curiosidades/datosMexico3.webp",
        alt: "Día de Muertos en un cementerio mexicano",
      },
    },
  ],
};
