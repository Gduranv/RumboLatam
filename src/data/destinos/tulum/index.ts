import type { DestinoData } from "@/types";

export const destino: DestinoData = {
  id: "tulum",
  paisId: "mexico",
  name: "Tulum",
  tag: "Ruinas caribeñas",
  hero: {
    src: "/Paises/Mexico/TulumMX/PortadaTULUM.webp",
    alt: "Tulum",
  },
  manualDelViajero: [
    {
      title: "Clima",
      description:
        "Cálido tropical con media de 27°C y humedad alta todo el año. Las lluvias llegan entre junio y noviembre, en forma de aguaceros breves e intensos.",
      icon: { src: "/Paises/icono clima.png", alt: "Icono Clima" },
    },
    {
      title: "Transporte",
      description:
        "Por la carretera federal 307 desde Cancún o Playa del Carmen, a unas dos horas. También hay autobuses ADO desde los aeropuertos y taxis hasta el alojamiento.",
      icon: { src: "/Paises/icon transporte.png", alt: "Icono Transporte" },
    },
    {
      title: "Mejor época",
      description:
        "De noviembre a abril, en temporada seca, cuando el mar está más tranquilo y hay menos humedad. Julio y agosto son ideales para bucear por su visibilidad.",
      icon: { src: "/Paises/icon mejor epoca.png", alt: "Icono Mejor época" },
    },
  ],
  hospedaje: {
    hoteles: [
      { name: "Papaya Tulum", tipo: "Hotel", estrellas: 5 },
      { name: "Casa Rolando", tipo: "Boutique", estrellas: 4.5 },
      { name: "Zamana Tulum", tipo: "Hotel", estrellas: 4.5 },
    ],
    imagenes: [],
  },
  animales: {
    description:
      "En los cenotes y la costa viven manatíes mansas, tortugas marinas, cangrejos de colores e iguanas. En el arrecife se ven peces loro, rayas águila y tiburones de noche.",
    imagenes: [],
  },
  actividades: {
    description:
      "Resaltan recorrer las ruinas mayas al amanecer, hacer snorkel en el Gran Cenote, bucear en el arrecife de Palancar, visitar la zona arqueológica de Coba y recorrer la reserva de Sian Ka'an en lancha.",
    imagenes: [],
  },
  galeria: [],
};
