import type { DestinoData } from "@/types";

export const destino: DestinoData = {
  id: "isla-ballestas",
  paisId: "peru",
  name: "Islas Ballestas",
  tag: "Refugio marino",
  hero: {
    src: "/Paises/Peru/Isla Ballestas/IslasBallestasPortada.webp",
    alt: "Islas Ballestas",
  },
  manualDelViajero: [
    {
      title: "Clima",
      description:
        "Desértico y fresco con media de 19°C. Varía de mañanas con neblina y viento fuerte a tardes soleadas, con humedad baja y casi total ausencia de lluvias.",
      icon: { src: "/Paises/icono clima.png", alt: "Icono Clima" },
    },
    {
      title: "Transporte",
      description:
        "Acceso exclusivo por vía marítima tomando un deslizador a motor desde el embarcadero de Paracas. Internamente el recorrido se realiza sin bajar de la lancha.",
      icon: { src: "/Paises/icon transporte.png", alt: "Icono Transporte" },
    },
    {
      title: "Mejor época",
      description:
        "Ideal de noviembre a marzo durante el verano en días más soleados, aguas más tranquilas para navegar y mayor actividad de las aves en los acantilados.",
      icon: { src: "/Paises/icon mejor epoca.png", alt: "Icono Mejor época" },
    },
  ],
  hospedaje: {
    hoteles: [
      { name: "Kokopelli Paracas", tipo: "Hostel", estrellas: 4.5 },
      { name: "Emancipador", tipo: "Hotel", estrellas: 4 },
      { name: "San Agustín Paracas", tipo: "Hotel", estrellas: 4 },
    ],
    imagenes: [
      "/Paises/Peru/Isla Ballestas/hospedaje/Hospedaje1.webp",
      "/Paises/Peru/Isla Ballestas/hospedaje/Hospedaje2.webp",
      "/Paises/Peru/Isla Ballestas/hospedaje/Hospedaje3.webp",
    ],
  },
  animales: {
    description:
      "Destacan miles de lobos marinos descansando en las rocas, pingüinos de Humboldt, además de gigantescas colonias de aves guaneras como el guanay, el piquero y el pelícano.",
    imagenes: [
      "/Paises/Peru/Isla Ballestas/animales/Animales1.webp",
      "/Paises/Peru/Isla Ballestas/animales/Animales2.webp",
      "/Paises/Peru/Isla Ballestas/animales/Animales3.webp",
      "/Paises/Peru/Isla Ballestas/animales/Animales4.webp",
      "/Paises/Peru/Isla Ballestas/animales/Animales5.webp",
    ],
  },
  actividades: {
    description:
      "Resaltan navegar en lancha rápida bordeando las formaciones rocosas y cuevas del archipiélago, observar de cerca el misterioso y gigante geoglifo del Candelabro grabado en la arena del desierto y fotografiar la increíble fauna marina en su hábitat natural.",
    imagenes: [
      "/Paises/Peru/Isla Ballestas/actividades/Actividades1.webp",
      "/Paises/Peru/Isla Ballestas/actividades/Actividades2.webp",
      "/Paises/Peru/Isla Ballestas/actividades/Actividades3.webp",
      "/Paises/Peru/Isla Ballestas/actividades/Actividades4.webp",
    ],
  },
  galeria: [
    { src: "/Paises/Peru/Isla Ballestas/galeria/Galeria1.webp", alt: "Galería Islas Ballestas" },
    { src: "/Paises/Peru/Isla Ballestas/galeria/Galeria2.webp", alt: "Galería Islas Ballestas" },
    { src: "/Paises/Peru/Isla Ballestas/galeria/Galeria3.webp", alt: "Galería Islas Ballestas" },
    { src: "/Paises/Peru/Isla Ballestas/galeria/Galeria4.webp", alt: "Galería Islas Ballestas" },
    { src: "/Paises/Peru/Isla Ballestas/galeria/Galeria5.webp", alt: "Galería Islas Ballestas" },
  ],
};