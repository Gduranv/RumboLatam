"use client";

import { useState } from "react";
import { CountryItem } from "./CountryItem";
import { TouristModal } from "./TouristModal";
import { Compass } from "./Compass";

// Tipado para los países
interface CountryData {
  id: string;
  name: string;
  svgPath: string;
  flagPath?: string;
  flagPosition?: { top: string; left: string };
  places: { path: string; position: { top: string; left: string; width: string; height?: string } }[];
  position: { top: string; left: string; width: string };
}

// Configuración de los países con coordenadas milimétricas basadas en el diseño global final
const countriesData: CountryData[] = [
  {
    id: "mexico",
    name: "México",
    svgPath: "/Paises/Mexico/mexico.svg",
    flagPath: "/Paises/Mexico/BANDERA MEXICO.png",
    flagPosition: { top: "45%", left: "18%" },
    places: [
      { path: "/Paises/Mexico/LUGAR MEXICO 1.png", position: { top: "-15%", left: "10%", width: "88px", height: "47px" } }, // Pirámide (el otro)
      { path: "/Paises/Mexico/LUGAR MEXICO 2.png", position: { top: "2%", left: "40%", width: "48px", height: "71px" } }, // Castillo
      { path: "/Paises/Mexico/LUGAR MEXICO 3.png", position: { top: "55%", left: "45%", width: "99px", height: "50px" } }, // Cenote
    ],
    position: { top: "0%", left: "0%", width: "36.03%" },
  },
  {
    id: "repdominicana",
    name: "República Dominicana",
    svgPath: "/Paises/RepublicaDominicana/repdominicana.svg",
    flagPath: "/Paises/RepublicaDominicana/BANDERA REP DOM.png",
    flagPosition: { top: "-250%", left: "120%" },
    places: [
      { path: "/Paises/RepublicaDominicana/LUGAR REP DOM1.png", position: { top: "-150%", left: "0%", width: "50px", height: "60px" } }, // Iglesia
      { path: "/Paises/RepublicaDominicana/LUGAR REP DOM2.png", position: { top: "-350%", left: "-80%", width: "60px", height: "50px" } }, // Cueva
      { path: "/Paises/RepublicaDominicana/LUGAR REP DOM3.png", position: { top: "-22%", left: "160%", width: "60px", height: "38px" } }, // Isla
    ],
    position: { top: "14.34%", left: "53.37%", width: "4.35%" },
  },
  {
    id: "colombia",
    name: "Colombia",
    svgPath: "/Paises/Colombia/colombia.svg",
    flagPath: "/Paises/Colombia/BANDERA COLOMBIA.png",
    flagPosition: { top: "35%", left: "-10%" },
    places: [
      { path: "/Paises/Colombia/LUGAR COLOMBIA1.png", position: { top: "30%", left: "50%", width: "47px", height: "28px" } }, // Isla perdida
      { path: "/Paises/Colombia/LUGAR COLOMBIA2.png", position: { top: "35%", left: "30%", width: "48px", height: "68px" } }, // Mano
      { path: "/Paises/Colombia/LUGAR COLOMBIA3.png", position: { top: "-8%", left: "10%", width: "50px", height: "58px" } }, // Iglesia
    ],
    position: { top: "22.83%", left: "45.03%", width: "14.34%" },
  },
  {
    id: "venezuela",
    name: "Venezuela",
    svgPath: "/Paises/Venezuela/venezuela.svg",
    flagPath: "/Paises/Venezuela/Bandera Venezuela.png",
    flagPosition: { top: "-5%", left: "65%" },
    places: [
      { path: "/Paises/Venezuela/LUGAR VENEZUELA1.png", position: { top: "-4%", left: "90%", width: "55%" } }, //Isla larga
      { path: "/Paises/Venezuela/LUGAR VENEZUELA2.png", position: { top: "-30%", left: "18%", width: "40%" } },//Colonia tovar
      { path: "/Paises/Venezuela/LUGAR VENEZUELA3.png", position: { top: "30%", left: "45%", width: "40%" } },//Canaima
    ],
    position: { top: "23.14%", left: "51.67%", width: "16.01%" },
  },
  {
    id: "peru",
    name: "Perú",
    svgPath: "/Paises/Peru/peru.svg",
    flagPath: "/Paises/Peru/BANDERA PERU.png",
    flagPosition: { top: "45%", left: "10%" },
    places: [
      { path: "/Paises/Peru/LUGAR PERU1.png", position: { top: "20%", left: "2%", width: "65%" } },//Desierto
      { path: "/Paises/Peru/LUGAR PERU2.png", position: { top: "60%", left: "40%", width: "55%" } },// arco
      { path: "/Paises/Peru/LUGAR PERU3.png", position: { top: "0%", left: "35%", width: "55%" } }, //montaña
    ],
    position: { top: "36.93%", left: "42.31%", width: "14.94%" },
  },
  {
    id: "brasil",
    name: "Brasil",
    svgPath: "/Paises/Brasil/brasil.svg",
    flagPath: "/Paises/Brasil/BANDERA BRASIL.png",
    flagPosition: { top: "15%", left: "80%" },
    places: [
      { path: "/Paises/Brasil/LUGAR BRASIL1.png", position: { top: "15%", left: "20%", width: "20%" } },//jardin
      { path: "/Paises/Brasil/LUGAR BRASIL2.png", position: { top: "55%", left: "45%", width: "20%" } },//lincois
      { path: "/Paises/Brasil/LUGAR BRASIL3.png", position: { top: "32%", left: "50%", width: "20%" } },//stone
    ],
    position: { top: "30.95%", left: "50.93%", width: "49.07%" },
  },
  {
    id: "chile",
    name: "Chile",
    svgPath: "/Paises/Chile/chile.svg",
    flagPath: "/Paises/Chile/BANDERA CHILE.png",
    flagPosition: { top: "3%", left: "30%" },
    places: [
      { path: "/Paises/Chile/LUGAR CHILE1.png", position: { top: "70%", left: "-80%", width: "100%" } },//Parque nevado
      { path: "/Paises/Chile/LUGAR CHILE2.png", position: { top: "40%", left: "-40%", width: "80%" } },//marmol
      { path: "/Paises/Chile/LUGAR CHILE3.png", position: { top: "15%", left: "-40%", width: "100%" } },//volcan
    ],
    position: { top: "56.63%", left: "48.91%", width: "11.03%" },
  },
  {
    id: "argentina",
    name: "Argentina",
    svgPath: "/Paises/Argentina/argentina.svg",
    flagPath: "/Paises/Argentina/BANDERA ARGENTINA.png",
    flagPosition: { top: "45%", left: "65%" },
    places: [
      { path: "/Paises/Argentina/LUGAR ARGENTINA1.png", position: { top: "10%", left: "30%", width: "40%" } },//cascada
      { path: "/Paises/Argentina/LUGAR ARGENTINA2.png", position: { top: "35%", left: "20%", width: "40%" } },//piedra
      { path: "/Paises/Argentina/LUGAR ARGENTINA3.png", position: { top: "60%", left: "15%", width: "40%" } },//iguazu
    ],
    position: { top: "61.47%", left: "51.46%", width: "23.49%" },
  },
];

export const InteractiveMap = () => {
  const [selectedCountry, setSelectedCountry] = useState<CountryData | null>(null);
  const [isGiaModalOpen, setIsGiaModalOpen] = useState(false);

  return (
    <div className="relative w-full max-w-3xl mx-auto aspect-[1764/1843]">

      {/* Mapa Base Completo */}
      <img
        src="/OtrosRecursos/MAPA SVG.svg"
        alt="Mapa de Latinoamérica"
        className="absolute inset-0 w-full h-full object-contain drop-shadow-sm opacity-60"
      />

      {/* Renderizado de Países Interactivos superpuestos */}
      <div className="absolute inset-0">
        {countriesData.map((country) => (
          <CountryItem
            key={country.id}
            {...country}
            onClick={() => setSelectedCountry(country)}
          />
        ))}
      </div>

      {/* Título flotante / Logo */}
      <div className="fixed bottom-12 left-12 z-30 pointer-events-none drop-shadow-xl">
        <img
          src="/OtrosRecursos/LOGO RUMBO.png"
          alt="Rumbo Latam Logo"
          className="w-44 md:w-72 h-auto transform -rotate-3 hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Personaje (Gia) - Esquina inferior derecha (Cortada a propósito) */}
      <div
        className="fixed -bottom-20 -right-20 z-30 drop-shadow-2xl cursor-pointer group"
        onClick={() => setIsGiaModalOpen(true)}
      >
        <img
          src="/OtrosRecursos/GIA_ESTATICA.svg"
          alt="Personaje Gia"
          className="w-80 md:w-[500px] h-auto transform origin-bottom hover:scale-110 hover:-translate-y-4 hover:-rotate-2 transition-all duration-300 ease-out"
        />
      </div>

      {/* Brújula (esquina superior derecha) */}
      <div className="fixed top-6 right-12 z-30 pointer-events-auto drop-shadow-xl">
        <Compass />
      </div>

      {/* Modal de lugares turísticos */}
      {selectedCountry && (
        <TouristModal
          countryName={selectedCountry.name}
          places={selectedCountry.places}
          onClose={() => setSelectedCountry(null)}
        />
      )}

      {/* Modal del Personaje (Gia) */}
      {isGiaModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsGiaModalOpen(false)}
          />
          <div className="relative bg-white dark:bg-slate-800 rounded-3xl p-6 md:p-10 max-w-2xl w-full shadow-2xl flex flex-col md:flex-row gap-8 items-center md:items-start animate-in fade-in zoom-in duration-300">
            <div className="flex-shrink-0 w-48 md:w-64 h-auto drop-shadow-xl">
              <img
                src="/OtrosRecursos/GIA_ESTATICA.svg"
                alt="Gia"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-black text-orange-500 mb-4 font-sans tracking-tight">¡Hola, soy Gia!</h2>
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <button
                onClick={() => setIsGiaModalOpen(false)}
                className="px-8 py-3 bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
