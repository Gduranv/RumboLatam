import type { PaisData } from "@/types";

export const pais: PaisData = {
  id: "brasil",
  name: "Brasil",
  subtitle: "La fuerza de la selva eterna.",
  hero: {
    src: "/Paises/Brasil/FotoBrasil.webp",
    alt: "Brasil",
  },
  // Playlist de Spotify del país (botón de música). Cámbiala a tu antojo.
  playlistUrl:
    "https://open.spotify.com/playlist/6K9YI81jTQ96k9tMLXMhtK?si=khPFAr7JQVCCOFUA52BesA&utm_source=copy-link&pi=0yFA3JzXQ9O1d",
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
        "Presenta las cuatro estaciones tradicionales de forma invertida al norte, siendo inviernos muy templados y veranos intensamente cálidos.",
      icon: { src: "/Paises/icon estaciones.png", alt: "Icono Estaciones" },
    },
  ],
  destinos: [
    {
      id: "jardin-botanico-curitiba",
      title: "Jardín Botánico de Curitiba",
      tag: "Invernadero",
      description:
        "Un palacio de cristal de estilo art nouveau francés rodeado de perfectos jardines geométricos. Una joya arquitectónica que resguarda la flora tropical y deleita la simetría visual.",
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
        "Un infinito manto de dunas de arena blanca intercalado por miles de lagunas de agua dulce turquesa. Un milagro geológico único que fusiona el paisaje árido con lluvias tropicales.",
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
        "Una famosa roca en Río de Janeiro que crea una impresionante ilusión óptica de colgar al vacío sobre el océano. El mirador perfecto para capturar la adrenalina y la costa carioca.",
      image: {
        src: "/Paises/Brasil/LUGAR BRASIL3.png",
        alt: "Pedra do Telégrafo",
      },
    },
  ],
  curiosidades: [
    {
      text: "¿Sabías que aunque Brasil es el lugar de origen del açaí, rara vez se consume como un postre dulce? A diferencia de su presentación con frutas o granola que se popularizó mundialmente, la forma tradicional de comerlo es como un acompañamiento salado, sirviéndose como guarnición en platos de pescado frito o camarones, mezclado con harina de yuca.",
      image: { src: "/Paises/Brasil/curiosidades/curiosidadesbrasil1.webp", alt: "açaí brasileño" },
    },
    {
      text: "¿Sabías que en los bosques de Brasil habita un pequeño mono que parece un león en miniatura? Se trata del tití león dorado (mico-leão-dourado), una especie endémica que llama la atención por su brillante pelaje anaranjado y una abundante melena que rodea su rostro.",
      image: { src: "/Paises/Brasil/curiosidades/curiosidadesbrasil2.webp", alt: "Tití león dorado" },
    },
    {
      text: "¿Sabías que en Brasil el Año Nuevo se celebra saltando olas en el mar? Durante la festividad del Réveillon, millones de brasileños se visten completamente de blanco y acuden a las playas a la medianoche para saltar siete olas consecutivas, pidiendo un deseo en cada salto como tradición para atraer la buena suerte.",
      image: { src: "/Paises/Brasil/curiosidades/curiosidadesbrasil3.webp", alt: "Año Nuevo en Brasil" },
    },
  ],
};