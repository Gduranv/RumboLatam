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
      <div className="hidden md:block fixed bottom-12 left-12 z-30 pointer-events-auto drop-shadow-xl">
        <img
          src="/OtrosRecursos/LOGO RUMBO.png"
          alt="Rumbo Latam Logo"
          className="w-44 md:w-72 h-auto transform origin-bottom -rotate-3 hover:scale-110 hover:-translate-y-3 hover:rotate-0 transition-all duration-300 ease-out"
        />
      </div>

      {/* Personaje (Gia) - Esquina inferior derecha (Cortada a propósito) */}
      <div className="hidden md:block fixed -bottom-100 -right-10 z-30 drop-shadow-2xl">
        {/* fetchPriority="low" es lo importante aquí: este GIF pesa 4.7 MB y sin
            esta marca el navegador lo descarga con la misma prioridad que el mapa,
            que es el LCP. Medido: la home movía 8.2 MB, más de la mitad este archivo. */}
        <img
          src="/GiaLight.gif"
          alt="Personaje Gia"
          fetchPriority="low"
          decoding="async"
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
    </div>
  );
};
