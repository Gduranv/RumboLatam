import type { PaisData } from "@/types";

export const pais: PaisData = {
  id: "peru",
  name: "Perú",
  subtitle: "Explora la magia de este destino.",
  hero: {
    src: "",
    alt: "Perú",
  },
  // Mensaje de Gia propio del país: lo completa el equipo de contenido manualmente.
  giaMessage: "¡Hola, pata! Prepárate para el viaje.",
  antesDeViajar: [
    {
      title: "Moneda",
      description:
        "El sol peruano (PEN) es la moneda oficial, y aunque los pagos con tarjeta están muy extendidos en las ciudades, el efectivo sigue siendo imprescindible en mercados y zonas rurales.",
      icon: { src: "/Paises/icon moneda.png", alt: "Icono Moneda" },
    },
    {
      title: "Gastronomía",
      description:
        "Considerada una de las cocinas más ricas del mundo, combina el maíz, la papa y el ají con influencias prehispánicas, españolas, asiáticas y africanas en platos como el ceviche.",
      icon: { src: "/Paises/icono gastronomia.png", alt: "Icono Gastronomía" },
    },
    {
      title: "Idioma",
      description:
        "**Español,** convive con el quechua y el aimara, lenguas ancestrales que siguen vivas en los Andes. Una mezcla de voces que refleja la riqueza cultural y la calidez de su pueblo.",
      icon: { src: "/Paises/idioma.png", alt: "Icono Idioma" },
    },
    {
      title: "Estaciones",
      description:
        "En la costa y los Andes predominan una estación seca (abril a octubre) y una de lluvias (noviembre a marzo); en la selva el clima es cálido y húmedo durante todo el año.",
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
      tag: "Ruta del arcoíris",
      description:
        "Una cumbre andina que despliega franjas de colores esculpidas por la tierra y el tiempo. Una caminata de altura entre vicuñas y glaciares que te invita a contemplar la mayor obra de arte natural del Perú.",
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