import type { PaisData } from "@/types";

export const pais: PaisData = {
  id: "brasil",
  name: "Brasil",
  subtitle: "La fuerza de la selva eterna.",
  hero: {
    src: "/Paises/Brasil/FotoBrasil.webp",
    alt: "Brasil",
  },
  // Mensaje de Gia propio del país: lo completa el equipo de contenido manualmente.
  giaMessage: "¡Tudo bem! Siente la energía.",
  antesDeViajar: [
    {
      title: "Moneda",
      description:
        "El real brasileño (BRL) es la moneda oficial, y el uso de pagos digitales está completamente generalizado en cualquier tipo de comercio.",
      icon: { src: "/Paises/icon moneda.png", alt: "Icono Moneda" },
    },
    {
      title: "Gastronomía",
      description:
        "Predomina una cocina basada en el arroz, los frijoles negros y la mandioca, caracterizada por un balance de sazones africanas, indígenas y europeas.",
      icon: { src: "/Paises/icono gastronomia.png", alt: "Icono Gastronomía" },
    },
    {
      title: "Idioma",
      description:
        "**Portugués,** hablado con una musicalidad y un ritmo únicos, lleno de expresiones alegres y cálidas que reflejan el espíritu festivo y hospitalario de su población.",
      icon: { src: "/Paises/idioma.png", alt: "Icono Idioma" },
    },
    {
      title: "Estaciones",
      description:
        "Presenta las cuatro estaciones tradicionales invertidas respecto al hemisferio norte, siendo inviernos muy templados y veranos intensamente cálidos.",
      icon: { src: "/Paises/icon estaciones.png", alt: "Icono Estaciones" },
    },
  ],
  destinos: [
    {
      id: "jardin-botanico-curitiba",
      title: "Jardín Botánico de Curitiba",
      tag: "Invernadero icónico",
      description:
        "Hogar de un majestuoso palacio de cristal de estilo art nouveau rodeado de jardines de flores nativas. Un ícono arquitectónico de Curitiba que te invita a descubrir la serenidad de la naturaleza brasileña.",
      image: {
        src: "/Paises/Brasil/LUGAR BRASIL1.png",
        alt: "Jardín Botánico de Curitiba",
      },
    },
    {
      id: "lencois-maranhenses",
      title: "Lençóis Maranhenses",
      tag: "Desierto de lagunas",
      description:
        "Un mar de dunas blancas que se combina con lagunas de agua cristalina tras la temporada de lluvias. Un paisaje infinito en el litoral maranhense que te invita a descubrir la magia más pura del nordeste brasileño.",
      image: {
        src: "/Paises/Brasil/LUGAR BRASIL2.png",
        alt: "Lençóis Maranhenses",
      },
    },
    {
      id: "pedra-do-telegrafo",
      title: "Pedra do Telégrafo",
      tag: "Mirador de postal",
      description:
        "Hogar del icónico mirador que parece suspendido entre el mar y la Mata Atlántica, en la costa de Río de Janeiro. Una caminata breve que te regala una de las fotografías más famosas de Brasil.",
      image: {
        src: "/Paises/Brasil/LUGAR BRASIL3.png",
        alt: "Pedra do Telégrafo",
      },
    },
  ],
  curiosidades: [
    {
      text: "¿Sabías que Brasil alberga cerca del 60% de la selva amazónica? Este pulmón del planeta es tan vasto que genera el 20% del oxígeno fresco de la Tierra y aún guarda especies que la ciencia no ha descubierto.",
      image: { src: "", alt: "Selva amazónica" },
    },
    {
      text: "¿Sabías que el Cristo Redentor, en la cima del Corcovado, es una de las Siete Maravillas del Mundo Moderno? Su estructura resiste vientos de hasta 250 km/h y los dedos de sus manos miden casi dos metros.",
      image: { src: "", alt: "Cristo Redentor" },
    },
    {
      text: "¿Sabías que Brasil es el mayor productor de café del mundo desde hace más de 150 años? Casi un tercio del café que se bebe en el planeta nace en sus tierras rojas, y el 'cafezinho' es un ritual diario en cada esquina.",
      image: { src: "", alt: "Café brasileño" },
    },
  ],
};