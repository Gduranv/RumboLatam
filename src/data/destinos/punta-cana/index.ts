import type { DestinoData } from "@/types";

export const destino: DestinoData = {
  id: "punta-cana",
  paisId: "repdominicana",
  name: "Punta Cana",
  tag: "Edén caribeño",
  hero: {
    src: "/Paises/RepublicaDominicana/PuntaCana/PortadaPuntaCana.webp",
    alt: "Punta Cana",
  },
  manualDelViajero: [
    {
      title: "Clima",
      description:
        "Tropical y cálido con media de 26°C. Varía de mañanas radiantes a tardes con brisa marina constante, con lluvias breves de corta duración.",
      icon: { src: "/Paises/icono clima.png", alt: "Icono Clima" },
    },
    {
      title: "Transporte",
      description:
        "Acceso por vía aérea al Aeropuerto de Punta Cana. Internamente se usan taxis, vehículos de alquiler o los servicios de transporte privado.",
      icon: { src: "/Paises/icono transporte.png", alt: "Icono Transporte" },
    },
    {
      title: "Mejor época",
      description:
        "Ideal de diciembre a abril durante la temporada seca, cuando el clima es fresco, el cielo está despejado y el mar Caribe se encuentra calmado. ",
      icon: { src: "/Paises/icon mejor epoca.png", alt: "Icono Mejor época" },
    },
  ],
  hospedaje: {
    // TODO(contenido): faltan los nombres de los alojamientos.
    hoteles: [
      { name: "Occidental Punta Cana", tipo: "Hotel", estrellas: 5 },
      { name: "Playa Palmera Beach", tipo: "Resort", estrellas: 4.5 },
      { name: "Riu Bambu", tipo: "Hotel", estrellas: 4 },
    ],
    imagenes: [
      "/Paises/RepublicaDominicana/PuntaCana/hospedaje/hospedaje1.webp",
      "/Paises/RepublicaDominicana/PuntaCana/hospedaje/hospedaje2.webp",
      "/Paises/RepublicaDominicana/PuntaCana/hospedaje/hospedaje3.webp",
    ],
  },
  animales: {
    // TODO(contenido): falta el texto de la sección.
    description:
      "Destacan flamencos rosados en las lagunas, delfines y manatíes en las aguas costeras, además de coloridas cotorras dominicanas y lagartos autóctonos en la vegetación.",
    imagenes: [],
  },
  actividades: {
    // TODO(contenido): falta el texto de la sección.
    description:
      "Resaltan relajarse en las icónicas playas de arena blanca y palmeras gigantes, hacer snorkel en las barreras de coral de aguas turquesas, bañarse en el místico cenote de agua dulce Hoyo Azul y disfrutar de paseos en catamarán al atardecer.",
    imagenes: [],
  },
  galeria: [],
};
