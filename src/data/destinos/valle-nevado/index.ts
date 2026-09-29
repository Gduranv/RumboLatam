import type { DestinoData } from "@/types";

export const destino: DestinoData = {
  id: "valle-nevado",
  paisId: "chile",
  name: "Valle Nevado",
  tag: "Cumbre Alpina",
  hero: {
    src: "/Paises/Chile/Valle Nevado/PortadaValleNevado.webp",
    alt: "Valle Nevado",
  },
  manualDelViajero: [
    {
      title: "Clima",
      description:
        "Con media de 6°C. Varía de tardes soleadas pero frescas a días extremadamente helados en invierno, con abundantes nevadas y vientos fríos.",
      icon: { src: "/Paises/icono clima.png", alt: "Icono Clima" },
    },
    {
      title: "Transporte",
      description:
        "Acceso por carretera de montaña (Ruta G-21) desde Santiago en vehículo particular con cadenas, furgones de turismo o traslados privados.",
      icon: { src: "/Paises/icon transporte.png", alt: "Icono Transporte" },
    },
    {
      title: "Mejor época",
      description:
        "Ideal de mediados de junio a octubre para disfrutar de la temporada de esquí y la nieve acumulada, o en verano para realizar actividades de montaña.",
      icon: { src: "/Paises/icon mejor epoca.png", alt: "Icono Mejor época" },
    },
  ],
  hospedaje: {
    hoteles: [
      { name: "Valle Nevado", tipo: "Hotel", estrellas: 4.5 },
      { name: "Chalet Valluga", tipo: "Hotel", estrellas: 4.5 },
      { name: "HF", tipo: "Hotel", estrellas: 4 },
    ],
    imagenes: [
      "/Paises/Chile/Valle Nevado/hospedaje/Hospedaje1.webp",
      "/Paises/Chile/Valle Nevado/hospedaje/Hospedaje2.webp",
      "/Paises/Chile/Valle Nevado/hospedaje/Hospedaje3.webp",
    ],
  },
  animales: {
    description:
      "Destacan el majestuoso cóndor andino planeando cerca de las cumbres, águilas moras en las zonas rocosas, además de pequeños roedores de cordillera como la vizcacha.",
    imagenes: [
      "/Paises/Chile/Valle Nevado/animales/Animales1.webp",
      "/Paises/Chile/Valle Nevado/animales/Animales2.webp",
      "/Paises/Chile/Valle Nevado/animales/Animales3.webp",
    ],
  },
  actividades: {
    description:
      "Resaltan esquiar o hacer snowboard en las pistas del dominio esquiable más grande de Sudamérica, deslizarse en la zona de tubing, subir a la moderna telecabina para disfrutar del paisaje blanco y fotografiar la imponente cordillera de los Andes al atardecer.",
    imagenes: [
      "/Paises/Chile/Valle Nevado/actividades/Actividades1.webp",
      "/Paises/Chile/Valle Nevado/actividades/Actividades2.webp",
      "/Paises/Chile/Valle Nevado/actividades/Actividades3.webp",
      "/Paises/Chile/Valle Nevado/actividades/Actividades4.webp",
      "/Paises/Chile/Valle Nevado/actividades/Actividades5.webp",
    ],
  },
  galeria: [
    { src: "/Paises/Chile/Valle Nevado/galeria/Galeria1.webp", alt: "Galería Valle Nevado" },
    { src: "/Paises/Chile/Valle Nevado/galeria/Galeria2.webp", alt: "Galería Valle Nevado" },
    { src: "/Paises/Chile/Valle Nevado/galeria/Galeria3.webp", alt: "Galería Valle Nevado" },
    { src: "/Paises/Chile/Valle Nevado/galeria/Galeria4.webp", alt: "Galería Valle Nevado" },
    { src: "/Paises/Chile/Valle Nevado/galeria/Galeria5.webp", alt: "Galería Valle Nevado" },
  ],
};