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
    <div className="w-full px-2 flex flex-col items-center">
      {/* Row con Flecha Izq, Tarjeta, Flecha Der */}
      <div className="w-full flex items-center justify-center gap-2">
        
        {/* Flecha Izquierda */}
        <button 
          onClick={prevDestination}
          disabled={currentIndex === 0}
          className={`shrink-0 w-8 h-8 flex items-center justify-center transition-all ${currentIndex === 0 ? 'opacity-50' : 'active:scale-95'}`}
        >
          <img src="/Paises/icon flecha carrusel izq.png" alt="Anterior" className="w-full h-full object-contain" />
        </button>

        {/* Contenedor principal de la tarjeta (SVG de Estampa) */}
        <div className="relative w-[306px] h-[225px] flex-shrink-0 flex items-center justify-center overflow-hidden transition-transform duration-300">
          
          {/* Fondo SVG */}
          <svg className="absolute inset-0 z-0 w-full h-full pointer-events-none" viewBox="0 0 306 225" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M305.959 0V225H293.009C293.017 224.904 293.017 224.808 293.017 224.708C293.017 220.012 289.159 216.206 284.394 216.206C279.628 216.206 275.774 220.012 275.774 224.708C275.774 224.808 275.774 224.904 275.782 225H263.807C263.814 224.904 263.814 224.808 263.814 224.708C263.814 220.012 259.953 216.206 255.191 216.206C250.43 216.206 246.568 220.012 246.568 224.708C246.568 224.808 246.568 224.904 246.576 225H234.601C234.608 224.904 234.608 224.808 234.608 224.708C234.608 220.012 230.75 216.206 225.989 216.206C221.227 216.206 217.366 220.012 217.366 224.708C217.366 224.808 217.366 224.904 217.373 225H205.398C205.406 224.904 205.406 224.808 205.406 224.708C205.406 220.012 201.544 216.206 196.783 216.206C192.021 216.206 188.164 220.012 188.164 224.708C188.164 224.808 188.164 224.904 188.171 225H176.196C176.204 224.904 176.204 224.808 176.204 224.708C176.204 220.012 172.342 216.206 167.581 216.206C162.819 216.206 158.957 220.012 158.957 224.708C158.957 224.808 158.957 224.904 158.965 225H146.99C146.998 224.904 146.998 224.808 146.998 224.708C146.998 220.012 143.14 216.206 138.378 216.206C133.617 216.206 129.755 220.012 129.755 224.708C129.755 224.808 129.755 224.904 129.763 225H117.788C117.795 224.904 117.795 224.808 117.795 224.708C117.795 220.012 113.934 216.206 109.172 216.206C104.411 216.206 100.549 220.012 100.549 224.708C100.549 224.808 100.549 224.904 100.557 225H88.5817C88.5892 224.904 88.5892 224.808 88.5892 224.708C88.5892 220.012 84.7313 216.206 79.9699 216.206C75.2084 216.206 71.3468 220.012 71.3468 224.708C71.3468 224.808 71.3468 224.904 71.3543 225H59.3794C59.3869 224.904 59.3869 224.808 59.3869 224.708C59.3869 220.012 55.5253 216.206 50.7638 216.206C46.0024 216.206 42.1445 220.012 42.1445 224.708C42.1445 224.808 42.1445 224.904 42.152 225H30.1771C30.1846 224.904 30.1846 224.808 30.1846 224.708C30.1846 220.012 26.3229 216.206 21.5615 216.206C16.8 216.206 12.9384 220.012 12.9384 224.708C12.9384 224.808 12.9384 224.904 12.9459 225H0V0H12.9421C12.9384 0.0406765 12.9384 0.0813529 12.9384 0.122029C12.9384 4.81831 16.8 8.62711 21.5615 8.62711C26.3229 8.62711 30.1846 4.81831 30.1846 0.122029C30.1846 0.0813529 30.1846 0.0406765 30.1846 0H42.152C42.1482 0.0406765 42.1482 0.0813529 42.1482 0.122029C42.1482 4.81831 46.0061 8.62711 50.7676 8.62711C55.529 8.62711 59.3907 4.81831 59.3907 0.122029C59.3907 0.0813529 59.3907 0.0406765 59.3907 0H71.358C71.3543 0.0406765 71.3543 0.0813529 71.3543 0.122029C71.3543 4.81831 75.2159 8.62711 79.9774 8.62711C84.7388 8.62711 88.5967 4.81831 88.5967 0.122029C88.5967 0.0813529 88.5967 0.0406765 88.593 0H100.56C100.56 0.0406765 100.56 0.0813529 100.56 0.122029C100.56 4.81831 104.422 8.62711 109.183 8.62711C113.945 8.62711 117.807 4.81831 117.807 0.122029C117.807 0.0813529 117.807 0.0406765 117.807 0H129.774C129.77 0.0406765 129.77 0.0813529 129.77 0.122029C129.77 4.81831 133.628 8.62711 138.393 8.62711C143.158 8.62711 147.013 4.81831 147.013 0.122029C147.013 0.0813529 147.013 0.0406765 147.009 0H158.976C158.976 0.0406765 158.976 0.0813529 158.976 0.122029C158.976 4.81831 162.838 8.62711 167.599 8.62711C172.361 8.62711 176.222 4.81831 176.222 0.122029C176.222 0.0813529 176.222 0.0406765 176.222 0H188.19C188.186 0.0406765 188.186 0.0813529 188.186 0.122029C188.186 4.81831 192.044 8.62711 196.805 8.62711C201.567 8.62711 205.428 4.81831 205.428 0.122029C205.428 0.0813529 205.428 0.0406765 205.425 0H217.392C217.392 0.0406765 217.392 0.0813529 217.392 0.122029C217.392 4.81831 221.254 8.62711 226.015 8.62711C230.777 8.62711 234.635 4.81831 234.635 0.122029C234.635 0.0813529 234.635 0.0406765 234.635 0H246.602C246.598 0.0406765 246.598 0.0813529 246.598 0.122029C246.598 4.81831 250.46 8.62711 255.221 8.62711C259.983 8.62711 263.844 4.81831 263.844 0.122029C263.844 0.0813529 263.844 0.0406765 263.844 0H275.812C275.812 0.0406765 275.812 0.0813529 275.812 0.122029C275.812 4.81831 279.67 8.62711 284.431 8.62711C289.192 8.62711 293.054 4.81831 293.054 0.122029C293.054 0.0813529 293.054 0.0406765 293.054 0H306L305.959 0Z" fill="#13522B"/>
          </svg>

          {/* Contenido (encima del SVG) */}
          <div className="relative z-10 w-[272px] h-[185px] rounded-[14.5px] overflow-hidden flex flex-col">
            
            {/* Imagen de fondo */}
            <img
              src={current.imageSrc}
              alt={current.title}
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            
            {/* Gradientes (SVG provisto por el usuario) */}
            <svg className="absolute inset-0 z-10 w-full h-full pointer-events-none" viewBox="0 0 272 185" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="272" height="185" rx="14.4909" fill="url(#paint0_linear_935_11447)" fillOpacity="0.8"/>
              <rect width="272" height="185" rx="14.4909" fill="url(#paint1_linear_935_11447)" fillOpacity="0.4"/>
              <defs>
                <linearGradient id="paint0_linear_935_11447" x1="136" y1="0" x2="136" y2="185" gradientUnits="userSpaceOnUse">
                  <stop stopOpacity="0"/>
                  <stop offset="1"/>
                </linearGradient>
                <linearGradient id="paint1_linear_935_11447" x1="136" y1="0" x2="136" y2="41.7008" gradientUnits="userSpaceOnUse">
                  <stop/>
                  <stop offset="1" stopOpacity="0"/>
                </linearGradient>
              </defs>
            </svg>
            
            {/* Cabecera de la Tarjeta: Notch Verde (Efecto Carpeta/Folio) */}
            <div className="absolute top-0 left-0 bg-[#13522B] rounded-br-[12px] z-20 flex items-center justify-center px-3 py-1.5 shadow-sm max-w-[75%]">
              <h3 className="text-white text-[12px] font-bold font-nohemi tracking-tight leading-tight truncate">
                {current.title}
              </h3>
            </div>

            {/* Etiqueta (Tag) Superior Derecha */}
            <div className="absolute top-[6px] right-3 z-20">
              <span className="text-white font-bold text-[9px] drop-shadow-md">
                {current.tag}
              </span>
            </div>

            {/* Descripción y Botón (Abajo - Lado a lado) */}
            <div className="relative z-20 flex-1 flex flex-row items-end justify-between gap-3 pb-3 px-3 mt-auto">
              <p className="text-white text-[9px] leading-[1.3] font-sans flex-1 line-clamp-3 drop-shadow-lg text-shadow-sm font-medium">
                {current.description}
              </p>
              <div className="shrink-0 mb-0.5">
                <Link href={`/destinos/${current.id}`}>
                  <button className="bg-[#FF7223] text-white font-bold text-[9px] px-4 py-1.5 rounded-full hover:bg-[#e6631c] transition-colors shadow-md">
                    Ver más
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Flecha Derecha */}
        <button 
          onClick={nextDestination}
          disabled={currentIndex === destinations.length - 1}
          className={`shrink-0 w-8 h-8 flex items-center justify-center transition-all ${currentIndex === destinations.length - 1 ? 'opacity-50' : 'active:scale-95'}`}
        >
          <img src="/Paises/icon flecha carrusel derc.png" alt="Siguiente" className="w-full h-full object-contain" />
        </button>

      </div>

      {/* Indicadores (Puntos) */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {destinations.map((_, idx) => (
          <div 
            key={idx}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-[#FF7223] w-6' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
}
