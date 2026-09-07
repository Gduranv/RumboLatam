export interface Hotel {
  name: string;
  type: string;
  rating: number;
}

export interface DestinoData {
  countryId: string;
  folderName: string;
  name: string;
  tag: string;
  heroImage: string;
  manual: {
    clima: string;
    transporte: string;
    mejorEpoca: string;
  };
  hospedaje: {
    hotels: Hotel[];
    images: string[];
  };
  animales: {
    description: string;
    images: string[];
  };
  actividades: {
    description: string;
    images: string[];
  };
  galeriaImages: { src: string; alt: string }[];
}

export const destinosData: Record<string, DestinoData> = {
  "canaima": {
    countryId: "venezuela",
    folderName: "canaima",
    name: "Parque Nacional Canaima",
    tag: "Patrimonio natural",
    heroImage: "/Paises/Venezuela/portadas/CanaimaPortada.webp",
    manual: {
      clima: "Cálido y lluvioso con media de 24°C. Varía de tardes húmedas a noches frescas, caracterizado por precipitaciones constantes que alimentan los grandes ríos.",
      transporte: "Acceso exclusivamente por vía aérea en avionetas comerciales desde Puerto Ordaz o Ciudad Bolívar, aterrizando en la pista del campamento central.",
      mejorEpoca: "Ideal de mayo a noviembre por la temporada de lluvias, cuando los ríos crecen permitiendo navegar en curiaras y ver los saltos con su máximo caudal."
    },
    hospedaje: {
      hotels: [
        { name: "Uruyen", type: "Campamento", rating: 5 },
        { name: "Ara Merú Lodge", type: "Campamento", rating: 4.5 },
        { name: "Ucaima", type: "Campamento", rating: 4 }
      ],
      images: [
        "/Paises/Venezuela/Hospedaje/hospedajeCanaima1.webp",
        "/Paises/Venezuela/Hospedaje/hospedajeCanaima2.webp",
        "/Paises/Venezuela/Hospedaje/hospedajeCanaima3.webp",
      ]
    },
    animales: {
      description: "Habitan jaguares en la densa selva, aves como el vistoso tucán y la gran águila arpía, además de monos araguatos y guacamayas en los tepuyes.",
      images: [
        "/Paises/Venezuela/Animales/AnimalesCanaima1.webp",
        "/Paises/Venezuela/Animales/AnimalesCanaima2.webp",
        "/Paises/Venezuela/Animales/AnimalesCanaima3.webp",
        "/Paises/Venezuela/Animales/AnimalesCanaima4.webp",
        "/Paises/Venezuela/Animales/AnimalesCanaima5.webp",
      ]
    },
    actividades: {
      description: "Resaltan navegar en curiara por ríos, admirar el místico Salto Ángel cayendo desde el imponente Auyantepuy, nadar en las aguas rojizas de la Laguna de Canaima frente a los saltos, hacer excursiones en toda la selva y contemplar los grandes tepuyes.",
      images: [
        "/Paises/Venezuela/Actividades/ActCanaima1.webp",
        "/Paises/Venezuela/Actividades/ActCanaima2.webp",
        "/Paises/Venezuela/Actividades/ActCanaima3.webp",
        "/Paises/Venezuela/Actividades/ActCanaima4.webp",
      ]
    },
    galeriaImages: [
      { src: "/Paises/Venezuela/Galeria/Galeriacanaima1.webp", alt: "Canaima 1" },
      { src: "/Paises/Venezuela/Galeria/Galeriacanaima2.webp", alt: "Canaima 2" },
      { src: "/Paises/Venezuela/Galeria/Galeriacanaima3.webp", alt: "Canaima 3" },
      { src: "/Paises/Venezuela/Galeria/Galeriacanaima4.webp", alt: "Canaima 4" },
      { src: "/Paises/Venezuela/Galeria/Galeriacanaima5.webp", alt: "Canaima 5" },
    ]
  },
  "colonia-tovar": {
    countryId: "venezuela",
    folderName: "coloniaTovar",
    name: "Colonia Tovar",
    tag: "Rincón Alemán",
    heroImage: "/Paises/Venezuela/portadas/colonia_tovar_portada.webp",
    manual: {
      clima: "Templado de montaña con media de 16°C. Varía de tardes frescas a noches de 10°C, con alta humedad y neblina constante.",
      transporte: "Acceso por carretera desde Caracas o Aragua. Internamente se usan vehículos particulares, buses locales y rústicos 4x4 para rutas empinadas.",
      mejorEpoca: "Ideal en octubre por las fiestas del Oktoberfest, y de diciembre a enero para vivir la navidad alemana bajo el clima más frío del año."
    },
    hospedaje: {
      hotels: [
        { name: "Don Elicio", type: "Posada", rating: 4.5 },
        { name: "Selva Negra", type: "Hotel", rating: 4 },
        { name: "Frankfurt", type: "Hotel", rating: 4 }
      ],
      images: []
    },
    animales: {
      description: "Destacan los monos araguatos en las zonas boscosas, aves como el colibrí coludo azul y el azulejo golondrina, además del cachicamo montañero y la emblemática mariposa tara.",
      images: []
    },
    actividades: {
      description: "Resaltan pasear por el centro histórico de arquitectura alemana, degustar fresas con crema y salchichas tradicionales, visitar la Iglesia de San Martín de Tours y hacer recorridos en rústicos 4x4 hacia las fábricas de cerveza artesanal.",
      images: []
    },
    galeriaImages: []
  },
  "isla-larga": {
    countryId: "venezuela",
    folderName: "islaLarga",
    name: "Isla Larga",
    tag: "Refugio caribeño",
    heroImage: "/Paises/Venezuela/portadas/isla_larga_portada.webp",
    manual: {
      clima: "Tropical caribeño con media de 28°C. Varía de mañanas soleadas a tardes frescas con brisa marina, baja humedad y sol radiante constante.",
      transporte: "Acceso terrestre hasta Puerto Cabello (Balneario Quizandal). Desde allí se toman lanchas o peñeros locales para un trayecto marítimo de 15 minutos.",
      mejorEpoca: "Ideal de enero a abril por sus aguas cristalinas y poco viento, o en días de semana para disfrutar de la playa con total tranquilidad y desconexión."
    },
    hospedaje: {
      hotels: [
        { name: "Casa Guipuzcoana", type: "Hotel", rating: 5 },
        { name: "Aqua Vista", type: "Posada", rating: 4.5 },
        { name: "Suite Caribe", type: "Hotel", rating: 4 }
      ],
      images: []
    },
    animales: {
      description: "Destacan corales e increíbles peces tropicales en los arrecifes, aves como el pelícano y la gaviota, además de tortugas marinas y coloridas estrellas de mar en el fondo del agua.",
      images: []
    },
    actividades: {
      description: "Resaltan hacer snorkel en los arrecifes de coral, explorar los famosos barcos hundidos (como el carguero alemán Sesostris), disfrutar de tranquilas aguas cristalinas y degustar pescado frito fresco con tostones en los quioscos locales.",
      images: []
    },
    galeriaImages: []
  }
};
