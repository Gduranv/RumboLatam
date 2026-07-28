export interface Hotel {
  name: string;
  type: string;
  rating: number;
}

export interface DestinoData {
  countryId: string;
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
    name: "Parque Nacional Canaima",
    tag: "Patrimonio natural",
    heroImage: "/Paises/Venezuela/portadas/CanaimaPortada.webp",
    manual: {
      clima: "Tropical caribeño con media de 28°C. Varía de mañanas soleadas a tardes frescas con brisa marina, baja humedad y sol radiante constante.",
      transporte: "Acceso terrestre hasta Puerto Cabello (Balneario Quizandal). Desde allí se toman lanchas o peñeros locales para un trayecto marítimo de 15 minutos.",
      mejorEpoca: "Ideal de enero a abril por sus aguas cristalinas y poco viento, o en días de semana para disfrutar de la playa con total tranquilidad y desconexión."
    },
    hospedaje: {
      hotels: [
        { name: "Waku Lodge", type: "Campamento", rating: 5 },
        { name: "Tapuy Lodge", type: "Campamento", rating: 4.5 },
        { name: "Ucaima", type: "Campamento", rating: 4 }
      ],
      images: [
        "/Paises/Venezuela/Hospedaje/hospedajeCanaima1.webp",
        "/Paises/Venezuela/Hospedaje/hospedajeCanaima2.webp",
        "/Paises/Venezuela/Hospedaje/hospedajeCanaima3.webp",
      ]
    },
    animales: {
      description: "Podrás observar especies únicas como el oso hormiguero gigante, el jaguar, el puma, nutrias gigantes, y aves exóticas como guacamayas y tucanes en su hábitat natural.",
      images: [
        "/Paises/Venezuela/Animales/AnimalesCanaima1.webp",
        "/Paises/Venezuela/Animales/AnimalesCanaima2.webp",
        "/Paises/Venezuela/Animales/AnimalesCanaima3.webp",
        "/Paises/Venezuela/Animales/AnimalesCanaima4.webp",
        "/Paises/Venezuela/Animales/AnimalesCanaima5.webp",
      ]
    },
    actividades: {
      description: "Resaltan hacer snorkel en los arrecifes de coral, explorar los famosos barcos hundidos (como el carguero alemán Sesostris), disfrutar de tranquilas aguas cristalinas y degustar pescado frito fresco con tostones en los quioscos locales.",
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
    name: "Colonia Tovar",
    tag: "Cultura y Gastronomía",
    heroImage: "/Paises/Venezuela/portadas/colonia_tovar_portada.webp",
    manual: {
      clima: "Clima templado de montaña con una media de 16°C.",
      transporte: "Acceso terrestre en vehículo particular o autobuses desde Caracas o La Victoria por carreteras de montaña.",
      mejorEpoca: "Ideal para visitar en octubre (Oktoberfest) o en cualquier época del año para disfrutar del clima frío."
    },
    hospedaje: {
      hotels: [
        { name: "Hotel Selva Negra", type: "Hotel", rating: 4.5 },
        { name: "Cabañas", type: "Cabañas", rating: 4 },
      ],
      images: []
    },
    animales: {
      description: "Podrás observar aves de montaña y fauna típica de la Cordillera de la Costa.",
      images: []
    },
    actividades: {
      description: "Disfrutar de la arquitectura alemana, degustar fresas con crema, embutidos y cervezas artesanales, y visitar la iglesia de San Martín de Tours.",
      images: []
    },
    galeriaImages: []
  },
  "isla-larga": {
    countryId: "venezuela",
    name: "Isla Larga",
    tag: "Playas paradisíacas",
    heroImage: "/Paises/Venezuela/portadas/isla_larga_portada.webp",
    manual: {
      clima: "Tropical caribeño, mucho sol y brisa marina.",
      transporte: "Lanchas desde el Balneario Quizandal en Puerto Cabello.",
      mejorEpoca: "Cualquier época del año, preferiblemente días de semana para mayor tranquilidad."
    },
    hospedaje: {
      hotels: [
        { name: "Posadas en Puerto Cabello", type: "Posada", rating: 4 },
      ],
      images: []
    },
    animales: {
      description: "Fauna marina variada, corales y peces de arrecife.",
      images: []
    },
    actividades: {
      description: "Snorkel en barcos hundidos, disfrutar de la playa de arena blanca y aguas tranquilas.",
      images: []
    },
    galeriaImages: []
  }
};
