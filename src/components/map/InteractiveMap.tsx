"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CountryItem } from "./CountryItem";
import { TouristModal } from "@/components/modals/TouristModal";
import { Compass } from "@/components/ui/Compass";
import { countriesData, CountryData } from "@/data/countries";

interface InteractiveMapProps {
  className?: string;
}

export const InteractiveMap = ({ className = "" }: InteractiveMapProps) => {
  const router = useRouter();
  const [selectedCountry, setSelectedCountry] = useState<CountryData | null>(null);
  const [isGiaModalOpen, setIsGiaModalOpen] = useState(false);

  return (
    <div className={`relative w-full max-w-3xl mx-auto ${className || 'aspect-[1764/1843]'}`}>

      {/* Mapa Base Completo */}
      <img
        src="/OtrosRecursos/MAPA SVG.svg"
        alt="Mapa de Latinoamérica"
        className="absolute inset-0 w-full h-full object-contain drop-shadow-sm opacity-60"
      />

      {/* Renderizado de Países Interactivos superpuestos */}
      <div className="absolute inset-0">
        {Object.values(countriesData).map((country) => (
          <CountryItem
            key={country.id}
            {...country}
            onClick={() => {
              router.push(`/paises/${country.id}`);
            }}
          />
        ))}
      </div>

      {/* Título flotante / Logo */}
      <div className="hidden md:block fixed bottom-12 left-12 z-30 pointer-events-none drop-shadow-xl">
        <img
          src="/OtrosRecursos/LOGO RUMBO.png"
          alt="Rumbo Latam Logo"
          className="w-44 md:w-72 h-auto transform -rotate-3 hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Personaje (Gia) - Esquina inferior derecha (Cortada a propósito) */}
      <div
        className="hidden md:block fixed -bottom-100 -right-10 z-30 drop-shadow-2xl cursor-pointer group"
        onClick={() => setIsGiaModalOpen(true)}
      >
        <img
          src="/GiaLight.gif"
          alt="Personaje Gia"
          className="w-80 md:w-[350px] h-auto transform origin-bottom hover:scale-110 hover:-translate-y-4 hover:-rotate-2 transition-all duration-300 ease-out"
        />
      </div>

      {/* Brújula (esquina superior derecha) */}
      <div className="hidden md:block fixed top-6 right-12 z-30 pointer-events-auto drop-shadow-xl">
        <Compass />
      </div>

      {/* Modal de lugares turísticos */}
      {selectedCountry && (
        <TouristModal
          countryName={selectedCountry.name}
          places={selectedCountry.places.map((p) => p.path)}
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
                src="/GiaLight.gif"
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
