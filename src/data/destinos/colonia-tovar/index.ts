import type { DestinoData } from "@/types";

export const destino: DestinoData = {
  id: "colonia-tovar",
  paisId: "venezuela",
  name: "Colonia Tovar",
  tag: "Cultura y Gastronomía",
  hero: {
    src: "/Paises/Venezuela/portadas/colonia_tovar_portada.webp",
    alt: "Colonia Tovar",
  },
  manualDelViajero: [
    {
      title: "Clima",
      description:
        "Templado de montaña con media de 16°C. Varía de tardes frescas a noches de 10°C, con alta humedad y neblina constante.",
      icon: { src: "/Paises/icono clima.png", alt: "Icono Clima" },
    },
    {
      title: "Transporte",
      description:
        "Acceso por carretera desde Caracas o Aragua. Internamente se usan vehículos particulares, buses locales y rústicos 4x4 para rutas empinadas.",
      icon: { src: "/Paises/icon transporte.png", alt: "Icono Transporte" },
    },
    {
      title: "Mejor época",
      description:
        "Ideal en octubre por las fiestas del Oktoberfest, y de diciembre a enero para vivir la navidad alemana bajo el clima más frío del año.",
      icon: { src: "/Paises/icon mejor epoca.png", alt: "Icono Mejor época" },
    },
  ],
  hospedaje: {
    hoteles: [
      { name: "Don Elicio", tipo: "Posada", estrellas: 4.5 },
      { name: "Selva Negra", tipo: "Hotel", estrellas: 4.5 },
      { name: "Frankfurt", tipo: "Hotel Restaurant", estrellas: 4 },
    ],
    imagenes: ["/Paises/Venezuela/Hospedaje/hospedajeColoniaTovar1.webp"],
  },
  animales: {
    description:
      "Destacan los monos araguatos en las zonas boscosas, aves como el colibrí coludo azul y el azulejo golondrina, además del cachicamo montañero y la emblemática mariposa tara.",
    imagenes: ["/Paises/Venezuela/Animales/AnimalesColoniaTovar1.webp"],
  },
  actividades: {
    description:
      "Resaltan pasear por el centro histórico de arquitectura alemana, degustar fresas con crema y salchichas tradicionales, visitar la Iglesia de San Martín de Tours y hacer recorridos en rústicos 4x4 hacia las fábricas de cerveza artesanal.",
    imagenes: ["/Paises/Venezuela/Actividades/ActColoniaTovar1.webp"],
  },
  galeria: [
    { src: "/Paises/Venezuela/Galeria/Galeriacolonia1.webp", alt: "Colonia Tovar 1" },
    { src: "/Paises/Venezuela/Galeria/Galeriacolonia2.webp", alt: "Colonia Tovar 2" },
    { src: "/Paises/Venezuela/Galeria/Galeriacolonia3.webp", alt: "Colonia Tovar 3" },
    { src: "/Paises/Venezuela/Galeria/Galeriacolonia4.webp", alt: "Colonia Tovar 4" },
    { src: "/Paises/Venezuela/Galeria/Galeriacolonia5.webp", alt: "Colonia Tovar 5" },
  ],
};