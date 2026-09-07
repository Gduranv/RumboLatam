import type { DestinoData } from "@/types";

export const destino: DestinoData = {
  id: "pedra-do-telegrafo",
  paisId: "brasil",
  name: "Pedra do Telégrafo",
  tag: "Mirador de postal",
  hero: {
    src: "/Paises/Brasil/Pedra do Telégrafo BRASIL/PortadaPedradotelegrafo.webp",
    alt: "Pedra do Telégrafo",
  },
  manualDelViajero: [
    {
      title: "Clima",
      description:
        "Tropical húmedo de la costa carioca, con veranos calurosos y lluvias frecuentes. Las mañanas suelen ser despejadas, mientras que las tardes pueden traer chubascos breves de montaña.",
      icon: { src: "/Paises/icono clima.png", alt: "Icono Clima" },
    },
    {
      title: "Transporte",
      description:
        "Acceso desde Río de Janeiro en vehículo particular o transporte público hasta Barra de Guaratiba, desde donde parte el sendero de unos 40 minutos que conduce a la roca del mirador.",
      icon: { src: "/Paises/icon transporte.png", alt: "Icono Transporte" },
    },
    {
      title: "Mejor época",
      description:
        "Ideal entre otoño e invierno carioca (mayo a septiembre), cuando la humedad baja y el sendero se disfruta sin lluvias; vístete **así** con calzado firme para caminar con seguridad.",
      icon: { src: "/Paises/icon mejor epoca.png", alt: "Icono Mejor época" },
    },
  ],
  hospedaje: {
    hoteles: [
      { name: "Pousada Villa del Sol", tipo: "Posada", estrellas: 4.5 },
      { name: "Hotel Brisa da Barra", tipo: "Hotel", estrellas: 4.5 },
      { name: "Hostel Guaratiba Beach", tipo: "Hostal", estrellas: 4 },
    ],
    imagenes: [
      "/Paises/Brasil/Pedra do Telégrafo BRASIL/hospedaje/Hospedaje1.webp",
      "/Paises/Brasil/Pedra do Telégrafo BRASIL/hospedaje/Hospedaje2.webp",
      "/Paises/Brasil/Pedra do Telégrafo BRASIL/hospedaje/Hospedaje3.webp",
    ],
  },
  animales: {
    description:
      "En el bosque de la Mata Atlántica que bordea el sendero se avistan monos, quatis y aves como tucanes y colibríes, además de las garzas que sobrevuelan los manglares cercanos.",
    imagenes: [
      "/Paises/Brasil/Pedra do Telégrafo BRASIL/animales/Animales1.webp",
      "/Paises/Brasil/Pedra do Telégrafo BRASIL/animales/Animales2.webp",
      "/Paises/Brasil/Pedra do Telégrafo BRASIL/animales/Animales3.webp",
      "/Paises/Brasil/Pedra do Telégrafo BRASIL/animales/Animales4.webp",
    ],
  },
  actividades: {
    description:
      "Resaltan la caminata hacia el mirador para recrear la icónica foto colgando de la roca, contemplar la bahía desde lo alto y bajar hasta las playas de Guaratiba para disfrutar de la costa.",
    imagenes: [
      "/Paises/Brasil/Pedra do Telégrafo BRASIL/actividades/Actividades1.webp",
      "/Paises/Brasil/Pedra do Telégrafo BRASIL/actividades/Actividades2.webp",
      "/Paises/Brasil/Pedra do Telégrafo BRASIL/actividades/Actividades3.webp",
      "/Paises/Brasil/Pedra do Telégrafo BRASIL/actividades/Actividades4.webp",
    ],
  },
  galeria: [
    { src: "/Paises/Brasil/Pedra do Telégrafo BRASIL/galeria/Galeria1.webp", alt: "Galería Pedra do Telégrafo" },
    { src: "/Paises/Brasil/Pedra do Telégrafo BRASIL/galeria/Galeria2.webp", alt: "Galería Pedra do Telégrafo" },
    { src: "/Paises/Brasil/Pedra do Telégrafo BRASIL/galeria/Galeria3.webp", alt: "Galería Pedra do Telégrafo" },
    { src: "/Paises/Brasil/Pedra do Telégrafo BRASIL/galeria/Galeria4.webp", alt: "Galería Pedra do Telégrafo" },
    { src: "/Paises/Brasil/Pedra do Telégrafo BRASIL/galeria/Galeria5.webp", alt: "Galería Pedra do Telégrafo" },
  ],
};