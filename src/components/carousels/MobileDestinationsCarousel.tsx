"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export interface Destination {
  id: string;
  title: string;
  tag: string;
  description: string;
  imageSrc: string;
}

interface MobileDestinationsCarouselProps {
  destinations: Destination[];
}

export default function MobileDestinationsCarousel({ destinations }: MobileDestinationsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextDestination = () => {
    if (currentIndex < destinations.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevDestination = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  if (!destinations || destinations.length === 0) return null;

  const current = destinations[currentIndex];

  return (
    <div className="w-full px-4 flex flex-col items-center">
      {/* Contenedor principal de la tarjeta */}
      <div className="relative w-full aspect-[4/5] rounded-[30px] overflow-hidden shadow-2xl bg-gray-200">
        
        {/* Imagen de fondo */}
        <Image
          src={current.imageSrc}
          alt={current.title}
          fill
          className="object-cover"
        />
        
        {/* Gradiente Oscuro para lectura */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10"></div>

        {/* Notch Superior Izquierdo Simplificado */}
        <div className="absolute top-0 left-0 bg-[#13522B] px-6 py-3 rounded-br-[20px] shadow-lg z-10 max-w-[80%]">
          <h3 className="text-white text-xl font-bold tracking-tight font-nohemi leading-tight">
            {current.title}
          </h3>
        </div>

        {/* Tag Superior Derecho */}
        <div className="absolute top-4 right-4 z-10">
          <span className="text-white font-bold text-xs uppercase tracking-wider px-3 py-1 bg-black/30 backdrop-blur-md rounded-full border border-white/20">
            {current.tag}
          </span>
        </div>

        {/* Descripción y Botón (Abajo) */}
        <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-4 z-10">
          <p className="text-white text-sm font-medium leading-relaxed font-sans line-clamp-4 text-shadow">
            {current.description}
          </p>
          <Link href={`/destinos/${current.id}`}>
            <button className="w-full bg-[#FF7223] text-white font-bold text-base py-3 rounded-xl hover:bg-[#e6631c] transition-colors shadow-lg">
              Ver más
            </button>
          </Link>
        </div>
      </div>

      {/* Controles del Carrusel (Flechas e Indicadores) */}
      <div className="flex items-center gap-6 mt-6">
        <button 
          onClick={prevDestination}
          disabled={currentIndex === 0}
          className={`w-12 h-12 flex items-center justify-center rounded-full bg-[#13522B] shadow-md transition-all ${currentIndex === 0 ? 'opacity-50' : 'active:scale-95'}`}
        >
          <Image src="/Paises/icon flecha carrusel izq.png" alt="Anterior" width={24} height={24} className="object-contain" />
        </button>

        {/* Indicadores (Puntos) */}
        <div className="flex gap-2">
          {destinations.map((_, idx) => (
            <div 
              key={idx}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-[#FF7223] w-6' : 'bg-gray-400'}`}
            />
          ))}
        </div>

        <button 
          onClick={nextDestination}
          disabled={currentIndex === destinations.length - 1}
          className={`w-12 h-12 flex items-center justify-center rounded-full bg-[#13522B] shadow-md transition-all ${currentIndex === destinations.length - 1 ? 'opacity-50' : 'active:scale-95'}`}
        >
          <Image src="/Paises/icon flecha carrusel derc.png" alt="Siguiente" width={24} height={24} className="object-contain" />
        </button>
      </div>
    </div>
  );
}
