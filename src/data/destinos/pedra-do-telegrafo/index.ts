import type { DestinoData } from "@/types";

export const destino: DestinoData = {
  id: "pedra-do-telegrafo",
  paisId: "brasil",
  name: "Pedra do Telégrafo",
  tag: "Abismo visual",
  hero: {
    src: "/Paises/Brasil/Pedra do Telégrafo BRASIL/PortadaPedradotelegrafo.webp",
    alt: "Pedra do Telégrafo",
  },
  manualDelViajero: [
    {
      title: "Clima",
      description:
        "Tropical Atlántico con media de 24°C. Varía de mañanas muy húmedas a tardes calurosas con brisa marina, con lluvias frecuentes en verano.",
      icon: { src: "/Paises/icono clima.png", alt: "Icono Clima" },
    },
    {
      title: "Transporte",
      description:
        "Acceso terrestre desde Río hasta el barrio Barra de Guaratiba en auto o autobús. Internamente se sube a pie por un sendero de montaña.",
      icon: { src: "/Paises/icon transporte.png", alt: "Icono Transporte" },
    },
    {
      title: "Mejor época",
      description:
        "Ideal durante todo el año saliendo de madrugada para ver el amanecer, o en días de semana para evitar las largas filas.",
      icon: { src: "/Paises/icon mejor epoca.png", alt: "Icono Mejor época" },
    },
  ],
  hospedaje: {
    hoteles: [
      { name: "Do Mirante ", tipo: "Posada", estrellas: 5 },
      { name: "Le Relais de Marambaia", tipo: "Hotel", estrellas: 4.5 },
      { name: "CDesign", tipo: "Hotel", estrellas: 4.5 },
    ],
    imagenes: [
      "/Paises/Brasil/Pedra do Telégrafo BRASIL/hospedaje/Hospedaje1.webp",
      "/Paises/Brasil/Pedra do Telégrafo BRASIL/hospedaje/Hospedaje2.webp",
      "/Paises/Brasil/Pedra do Telégrafo BRASIL/hospedaje/Hospedaje3.webp",
    ],
  },
  animales: {
    description:
      "Destacan monos tití en las ramas de los árboles, aves tropicales como el tucán y el benteveo, además de lagartos de cola larga entre las rocas del sendero.",
    imagenes: [
      "/Paises/Brasil/Pedra do Telégrafo BRASIL/animales/Animales1.webp",
      "/Paises/Brasil/Pedra do Telégrafo BRASIL/animales/Animales2.webp",
      "/Paises/Brasil/Pedra do Telégrafo BRASIL/animales/Animales3.webp",
      "/Paises/Brasil/Pedra do Telégrafo BRASIL/animales/Animales4.webp",
    ],
  },
  actividades: {
    description:
      "Resaltan realizar la caminata de senderismo a través de la densa selva tropical, tomarse la icónica e impresionante fotografía óptica colgando al borde de la roca y disfrutar de las espectaculares vistas hacia las playas salvajes de la zona.",
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