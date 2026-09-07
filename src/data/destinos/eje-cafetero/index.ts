import type { DestinoData } from "@/types";

export const destino: DestinoData = {
  id: "eje-cafetero",
  paisId: "colombia",
  name: "Eje Cafetero",
  tag: "Tierras del café",
  hero: {
    src: "/Paises/Colombia/Eje cafetero Colombia/PortadaEjecafetero.webp",
    alt: "Eje Cafetero",
  },
  manualDelViajero: [
    {
      title: "Clima",
      description:
        "Templado de montaña, con temperaturas agradables entre 18°C y 24°C durante todo el año. Dos temporadas de lluvia (abril a mayo y octubre a noviembre) llenan de verde los cafetales.",
      icon: { src: "/Paises/icono clima.png", alt: "Icono Clima" },
    },
    {
      title: "Transporte",
      description:
        "Se llega principalmente por el aeropuerto de Armenia o Pereira y desde allí se recorren los pueblos del eje (Salento, Filandia, Manizales) en vehículo particular o transporte público.",
      icon: { src: "/Paises/icon transporte.png", alt: "Icono Transporte" },
    },
    {
      title: "Mejor época",
      description:
        "De enero a marzo y de julio a septiembre llueve menos y los miradores lucen despejados; planifícalo **así** para recorrer las fincas cafeteras y el coche con los mejores atardeceres.",
      icon: { src: "/Paises/icon mejor epoca.png", alt: "Icono Mejor época" },
    },
  ],
  hospedaje: {
    hoteles: [
      { name: "Hotel Salento Capital", tipo: "Hotel", estrellas: 4.5 },
      { name: "Ecohabs Piedras Blancas", tipo: "Cabañas", estrellas: 4.5 },
      { name: "Finca Hotel Recuca", tipo: "Posada", estrellas: 4 },
    ],
    imagenes: [
      "/Paises/Colombia/Eje cafetero Colombia/hospedaje/hotelesEjeC1.webp",
      "/Paises/Colombia/Eje cafetero Colombia/hospedaje/hotelesEjeC2.webp",
      "/Paises/Colombia/Eje cafetero Colombia/hospedaje/hotelesEjeC3.webp",
    ],
  },
  animales: {
    description:
      "Los bosques andinos del eje cafetero guardan una gran riqueza de aves, como el barranquero y el quetzal de montaña, además de ardillas y monos que frecuentan las forestas cercanas a los cafetales.",
    imagenes: [
      "/Paises/Colombia/Eje cafetero Colombia/animales/AnimalesEjeC1.webp",
      "/Paises/Colombia/Eje cafetero Colombia/animales/AnimalesEjeC2.webp",
      "/Paises/Colombia/Eje cafetero Colombia/animales/AnimalesEjeC3.webp",
      "/Paises/Colombia/Eje cafetero Colombia/animales/AnimalesEjeC4.webp",
      "/Paises/Colombia/Eje cafetero Colombia/animales/AnimalesEjeC5.webp",
    ],
  },
  actividades: {
    description:
      "Resaltan los recorridos por fincas cafeteras con catas de café, el paseo por la emblemática calle real de Salento, subir al valle del Cocora entre palmas de cera y los desfiles de jeeps wilys.",
    imagenes: [
      "/Paises/Colombia/Eje cafetero Colombia/actividades/ActividadesEjeC1.webp",
      "/Paises/Colombia/Eje cafetero Colombia/actividades/ActividadesEjeC2.webp",
      "/Paises/Colombia/Eje cafetero Colombia/actividades/ActividadesEjeC3.webp",
      "/Paises/Colombia/Eje cafetero Colombia/actividades/ActividadesEjeC4.webp",
      "/Paises/Colombia/Eje cafetero Colombia/actividades/ActividadesEjeC5.webp",
      "/Paises/Colombia/Eje cafetero Colombia/actividades/ActividadesEjeCafetero1.webp",
      "/Paises/Colombia/Eje cafetero Colombia/actividades/ActividadesEjeCafetero2.webp",
      "/Paises/Colombia/Eje cafetero Colombia/actividades/ActividadesEjeCafetero3.webp",
      "/Paises/Colombia/Eje cafetero Colombia/actividades/ActividadesEjeCafetero4.webp",
      "/Paises/Colombia/Eje cafetero Colombia/actividades/ActividadesEjeCafetero5.webp",
    ],
  },
  galeria: [],
};