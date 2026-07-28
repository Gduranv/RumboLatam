export interface DestinationSummary {
  id: string;
  title: string;
  tag: string;
  description: string;
  imageSrc: string;
}

export interface MapPlace {
  path: string;
  position: { top: string; left: string; width: string; height?: string };
}

export interface CountryData {
  id: string;
  name: string;
  subtitle: string;
  heroImage: string;
  giaImage: string;
  
  // Datos para el mapa interactivo
  svgPath: string;
  flagPath?: string;
  flagPosition?: { top: string; left: string };
  places: MapPlace[];
  position: { top: string; left: string; width: string };

  // Destinos turísticos para el carrusel de la página de país
  destinations: DestinationSummary[];
}

export const countriesData: Record<string, CountryData> = {
  mexico: {
    id: "mexico",
    name: "México",
    subtitle: "Un viaje a través de la historia y el sabor.",
    heroImage: "/Paises/Venezuela/FotoVenezuela.png", // TODO: Replace with real image
    giaImage: "/Paises/Venezuela/giasaludovnz.png", // TODO: Replace with real image
    svgPath: "/Paises/Mexico/mexico.svg",
    flagPath: "/Paises/Mexico/BANDERA MEXICO.png",
    flagPosition: { top: "45%", left: "18%" },
    places: [
      { path: "/Paises/Mexico/LUGAR MEXICO 1.png", position: { top: "-15%", left: "10%", width: "88px", height: "47px" } },
      { path: "/Paises/Mexico/LUGAR MEXICO 2.png", position: { top: "2%", left: "40%", width: "48px", height: "71px" } },
      { path: "/Paises/Mexico/LUGAR MEXICO 3.png", position: { top: "55%", left: "45%", width: "99px", height: "50px" } },
    ],
    position: { top: "0%", left: "0%", width: "36.03%" },
    destinations: []
  },
  repdominicana: {
    id: "repdominicana",
    name: "República Dominicana",
    subtitle: "Explora la magia de este destino.",
    heroImage: "/Paises/Venezuela/FotoVenezuela.png",
    giaImage: "/Paises/Venezuela/giasaludovnz.png",
    svgPath: "/Paises/RepublicaDominicana/repdominicana.svg",
    flagPath: "/Paises/RepublicaDominicana/BANDERA REP DOM.png",
    flagPosition: { top: "-250%", left: "120%" },
    places: [
      { path: "/Paises/RepublicaDominicana/LUGAR REP DOM1.png", position: { top: "-150%", left: "0%", width: "50px", height: "60px" } },
      { path: "/Paises/RepublicaDominicana/LUGAR REP DOM2.png", position: { top: "-350%", left: "-80%", width: "60px", height: "50px" } },
      { path: "/Paises/RepublicaDominicana/LUGAR REP DOM3.png", position: { top: "-22%", left: "160%", width: "60px", height: "38px" } },
    ],
    position: { top: "14.34%", left: "53.37%", width: "4.35%" },
    destinations: []
  },
  colombia: {
    id: "colombia",
    name: "Colombia",
    subtitle: "Explora la magia de este destino.",
    heroImage: "/Paises/Venezuela/FotoVenezuela.png",
    giaImage: "/Paises/Venezuela/giasaludovnz.png",
    svgPath: "/Paises/Colombia/colombia.svg",
    flagPath: "/Paises/Colombia/BANDERA COLOMBIA.png",
    flagPosition: { top: "35%", left: "-10%" },
    places: [
      { path: "/Paises/Colombia/LUGAR COLOMBIA1.png", position: { top: "30%", left: "50%", width: "47px", height: "28px" } },
      { path: "/Paises/Colombia/LUGAR COLOMBIA2.png", position: { top: "35%", left: "30%", width: "48px", height: "68px" } },
      { path: "/Paises/Colombia/LUGAR COLOMBIA3.png", position: { top: "-8%", left: "10%", width: "50px", height: "58px" } },
    ],
    position: { top: "22.83%", left: "45.03%", width: "14.34%" },
    destinations: []
  },
  venezuela: {
    id: "venezuela",
    name: "Venezuela",
    subtitle: "La magia de la tierra de gracia.",
    heroImage: "/Paises/Venezuela/FotoVenezuela.png",
    giaImage: "/Paises/Venezuela/giasaludovnz.png",
    svgPath: "/Paises/Venezuela/venezuela.svg",
    flagPath: "/Paises/Venezuela/Bandera Venezuela.png",
    flagPosition: { top: "-5%", left: "65%" },
    places: [
      { path: "/Paises/Venezuela/LUGAR VENEZUELA1.png", position: { top: "-4%", left: "90%", width: "55%" } },
      { path: "/Paises/Venezuela/LUGAR VENEZUELA2.png", position: { top: "-30%", left: "18%", width: "40%" } },
      { path: "/Paises/Venezuela/LUGAR VENEZUELA3.png", position: { top: "30%", left: "45%", width: "40%" } },
    ],
    position: { top: "23.14%", left: "51.67%", width: "16.01%" },
    destinations: [
      {
        id: "canaima",
        title: "Parque Nacional Canaima",
        tag: "Patrimonio natural",
        description: "Hogar de los milenarios tepuyes y del Salto Ángel, la caída de agua libre más alta de todo el planeta. Un territorio salvaje esculpido por el tiempo que te invita a descubrir la energía más pura de la naturaleza americana.",
        imageSrc: "/Paises/Venezuela/portadas/CanaimaPortada.webp",
      },
      {
        id: "colonia-tovar",
        title: "Colonia Tovar",
        tag: "Cultura y Gastronomía",
        description: "Un pintoresco poblado europeo fundado en las montañas de la Cordillera de la Costa. Un destino místico donde la arquitectura de madera y la neblina fusionan las tradiciones andinas con las alemanas.",
        imageSrc: "/Paises/Venezuela/portadas/colonia_tovar_portada.webp",
      },
      {
        id: "isla-larga",
        title: "Isla Larga",
        tag: "Playas paradisíacas",
        description: "Una paradisíaca isla del Parque Nacional San Esteban con arenas blancas y arrecifes de coral. Un paraíso marino ideal para explorar barcos hundidos históricos en aguas totalmente cristalinas. ",
        imageSrc: "/Paises/Venezuela/portadas/isla_larga_portada.webp",
      }
    ]
  },
  peru: {
    id: "peru",
    name: "Perú",
    subtitle: "Explora la magia de este destino.",
    heroImage: "/Paises/Venezuela/FotoVenezuela.png",
    giaImage: "/Paises/Venezuela/giasaludovnz.png",
    svgPath: "/Paises/Peru/peru.svg",
    flagPath: "/Paises/Peru/BANDERA PERU.png",
    flagPosition: { top: "45%", left: "10%" },
    places: [
      { path: "/Paises/Peru/LUGAR PERU1.png", position: { top: "20%", left: "2%", width: "65%" } },
      { path: "/Paises/Peru/LUGAR PERU2.png", position: { top: "60%", left: "40%", width: "55%" } },
      { path: "/Paises/Peru/LUGAR PERU3.png", position: { top: "0%", left: "35%", width: "55%" } },
    ],
    position: { top: "36.93%", left: "42.31%", width: "14.94%" },
    destinations: []
  },
  brasil: {
    id: "brasil",
    name: "Brasil",
    subtitle: "Explora la magia de este destino.",
    heroImage: "/Paises/Venezuela/FotoVenezuela.png",
    giaImage: "/Paises/Venezuela/giasaludovnz.png",
    svgPath: "/Paises/Brasil/brasil.svg",
    flagPath: "/Paises/Brasil/BANDERA BRASIL.png",
    flagPosition: { top: "15%", left: "80%" },
    places: [
      { path: "/Paises/Brasil/LUGAR BRASIL1.png", position: { top: "15%", left: "20%", width: "20%" } },
      { path: "/Paises/Brasil/LUGAR BRASIL2.png", position: { top: "55%", left: "45%", width: "20%" } },
      { path: "/Paises/Brasil/LUGAR BRASIL3.png", position: { top: "32%", left: "50%", width: "20%" } },
    ],
    position: { top: "30.95%", left: "50.93%", width: "49.07%" },
    destinations: []
  },
  chile: {
    id: "chile",
    name: "Chile",
    subtitle: "Explora la magia de este destino.",
    heroImage: "/Paises/Venezuela/FotoVenezuela.png",
    giaImage: "/Paises/Venezuela/giasaludovnz.png",
    svgPath: "/Paises/Chile/chile.svg",
    flagPath: "/Paises/Chile/BANDERA CHILE.png",
    flagPosition: { top: "3%", left: "30%" },
    places: [
      { path: "/Paises/Chile/LUGAR CHILE1.png", position: { top: "70%", left: "-80%", width: "100%" } },
      { path: "/Paises/Chile/LUGAR CHILE2.png", position: { top: "40%", left: "-40%", width: "80%" } },
      { path: "/Paises/Chile/LUGAR CHILE3.png", position: { top: "15%", left: "-40%", width: "100%" } },
    ],
    position: { top: "56.63%", left: "48.91%", width: "11.03%" },
    destinations: []
  },
  argentina: {
    id: "argentina",
    name: "Argentina",
    subtitle: "Explora la magia de este destino.",
    heroImage: "/Paises/Venezuela/FotoVenezuela.png",
    giaImage: "/Paises/Venezuela/giasaludovnz.png",
    svgPath: "/Paises/Argentina/argentina.svg",
    flagPath: "/Paises/Argentina/BANDERA ARGENTINA.png",
    flagPosition: { top: "45%", left: "65%" },
    places: [
      { path: "/Paises/Argentina/LUGAR ARGENTINA1.png", position: { top: "10%", left: "30%", width: "40%" } },
      { path: "/Paises/Argentina/LUGAR ARGENTINA2.png", position: { top: "35%", left: "20%", width: "40%" } },
      { path: "/Paises/Argentina/LUGAR ARGENTINA3.png", position: { top: "60%", left: "15%", width: "40%" } },
    ],
    position: { top: "61.47%", left: "51.46%", width: "23.49%" },
    destinations: []
  }
};
