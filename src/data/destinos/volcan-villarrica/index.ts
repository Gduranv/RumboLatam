import type { DestinoData } from "@/types";

export const destino: DestinoData = {
  id: "volcan-villarrica",
  paisId: "chile",
  name: "Volcán Villarrica",
  tag: "Gigante de fuego",
  hero: {
    src: "/Paises/Chile/Volcan Villarrica/PortadaVolcanVillarrica.webp",
    alt: "Volcán Villarrica",
  },
  manualDelViajero: [
    {
      title: "Clima",
      description:
        "Templado lluvioso de la Araucanía, con veranos agradables e inviernos fríos y nevados en altura. El clima cambia rápidamente, de modo que en la cumbre conviene estar preparado para todo.",
      icon: { src: "/Paises/icono clima.png", alt: "Icono Clima" },
    },
    {
      title: "Transporte",
      description:
        "El ascenso parte desde el centro de esquí Villarrica o Pucón, en vehículo particular o transporte hacia la base, desde donde con guía se sube caminando o en andas hasta el cráter.",
      icon: { src: "/Paises/icon transporte.png", alt: "Icono Transporte" },
    },
    {
      title: "Mejor época",
      description:
        "La cumbre se corona con más frecuencia entre diciembre y marzo, cuando la nieve está firme y el cielo despejado; equípate **así** con polainas y bastones para la ascensión a la nieve.",
      icon: { src: "/Paises/icon mejor epoca.png", alt: "Icono Mejor época" },
    },
  ],
  hospedaje: {
    hoteles: [
      { name: "Hotel Antumalal Pucón", tipo: "Hotel", estrellas: 5 },
      { name: "Cabañas Nativa Montes", tipo: "Cabañas", estrellas: 4 },
      { name: "Hotel Pucón Centro Plaza", tipo: "Hotel", estrellas: 4.5 },
    ],
    imagenes: [
      "/Paises/Chile/Volcan Villarrica/hospedaje/Hospedaje1.webp",
      "/Paises/Chile/Volcan Villarrica/hospedaje/Hospedaje2.webp",
      "/Paises/Chile/Volcan Villarrica/hospedaje/Hospedaje3.webp",
    ],
  },
  animales: {
    description:
      "Los bosques de la base del volcán son hábitat de aves como el chucao y el carpintero negro, y de pequeños mamíferos como el pudú, el ciervo nativo más pequeño de Sudamérica.",
    imagenes: [
      "/Paises/Chile/Volcan Villarrica/animales/Animales1.webp",
      "/Paises/Chile/Volcan Villarrica/animales/Animales2.webp",
      "/Paises/Chile/Volcan Villarrica/animales/Animales3.webp",
      "/Paises/Chile/Volcan Villarrica/animales/Animales4.webp",
    ],
  },
  actividades: {
    description:
      "Resaltan el ascenso guiado hasta el cráter humeante para asomarse a su laguna de lava, las termas de los faldeos, el esquí de montaña y las vistas sobre el lago Villarrica y Pucón.",
    imagenes: [
      "/Paises/Chile/Volcan Villarrica/actividades/Actividades1.webp",
      "/Paises/Chile/Volcan Villarrica/actividades/Actividades2.webp",
      "/Paises/Chile/Volcan Villarrica/actividades/Actividades3.webp",
      "/Paises/Chile/Volcan Villarrica/actividades/Actividades4.webp",
      "/Paises/Chile/Volcan Villarrica/actividades/Actividades5.webp",
    ],
  },
  galeria: [
    { src: "/Paises/Chile/Volcan Villarrica/galeria/Galeria1.webp", alt: "Galería Volcán Villarrica" },
    { src: "/Paises/Chile/Volcan Villarrica/galeria/Galeria2.webp", alt: "Galería Volcán Villarrica" },
    { src: "/Paises/Chile/Volcan Villarrica/galeria/Galeria3.webp", alt: "Galería Volcán Villarrica" },
    { src: "/Paises/Chile/Volcan Villarrica/galeria/Galeria4.webp", alt: "Galería Volcán Villarrica" },
    { src: "/Paises/Chile/Volcan Villarrica/galeria/Galeria5.webp", alt: "Galería Volcán Villarrica" },
  ],
};