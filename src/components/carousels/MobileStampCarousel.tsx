"use client";

import Image from "next/image";
import { useState } from "react";

export interface MobileStampImage {
  src: string;
  alt: string;
}

interface MobileStampCarouselProps {
  images: MobileStampImage[];
}

/** Forma SVG del borde del sello postal (reutilizada del StampCarousel desktop) */
const stampPath = "M460.072 0V340.735H443.119C441.178 335.804 436.223 332.297 430.417 332.297C424.612 332.297 419.664 335.804 417.716 340.735H398.721C396.773 335.804 391.825 332.297 386.02 332.297C380.214 332.297 375.258 335.804 373.303 340.735H354.316C352.368 335.804 347.412 332.297 341.614 332.297C335.816 332.297 330.853 335.804 328.905 340.735H309.918C307.97 335.804 303.022 332.297 297.216 332.297C291.411 332.297 286.455 335.804 284.499 340.735H265.513C263.564 335.804 258.609 332.297 252.811 332.297C247.013 332.297 242.05 335.804 240.102 340.735H221.115C219.167 335.804 214.219 332.297 208.413 332.297C202.608 332.297 197.644 335.804 195.696 340.735H176.71C174.761 335.804 169.806 332.297 164.008 332.297C158.21 332.297 153.247 335.804 151.299 340.735H132.312C130.364 335.804 125.408 332.297 119.595 332.297C113.781 332.297 108.841 335.804 106.893 340.735H87.9064C85.9582 335.804 81.0028 332.297 75.2048 332.297C69.4067 332.297 64.4435 335.804 62.4954 340.735H43.5087C41.5528 335.804 36.5974 332.297 30.7916 332.297C24.9858 332.297 20.0381 335.804 18.09 340.735H0V0H18.3219C20.4169 4.64427 25.2177 7.88752 30.7916 7.88752C36.3655 7.88752 41.174 4.64427 43.2767 0H62.735C64.8301 4.64427 69.6309 7.88752 75.2125 7.88752C80.7941 7.88752 85.5872 4.64427 87.6822 0H107.14C109.236 4.64427 114.036 7.88752 119.61 7.88752C125.184 7.88752 130 4.64427 132.095 0H151.554C153.649 4.64427 158.449 7.88752 164.031 7.88752C169.613 7.88752 174.406 4.64427 176.501 0H195.959C198.062 4.64427 202.855 7.88752 208.444 7.88752C214.034 7.88752 218.819 4.64427 220.914 0H240.372C242.467 4.64427 247.268 7.88752 252.85 7.88752C258.431 7.88752 263.224 4.64427 265.319 0H284.785C286.88 4.64427 291.681 7.88752 297.263 7.88752C302.844 7.88752 307.638 4.64427 309.733 0H329.191C331.286 4.64427 336.087 7.88752 341.668 7.88752C347.25 7.88752 352.043 4.64427 354.138 0H373.596C375.699 4.64427 380.5 7.88752 386.081 7.88752C391.663 7.88752 396.456 4.64427 398.551 0H418.017C420.112 4.64427 424.905 7.88752 430.487 7.88752C436.068 7.88752 440.862 4.64427 442.957 0H460.142H460.072Z";

/** Componente de sello individual para la versión móvil */
const MobileStamp = ({ color, image, width, rotation }: { color: string; image: MobileStampImage; width: string; rotation: string }) => {
  return (
    <div className={`relative shrink-0 ${width} ${rotation} shadow-xl drop-shadow-lg flex items-center justify-center`}>
      <svg viewBox="0 0 461 341" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-md">
        <path d={stampPath} fill={color} />
      </svg>

      {/* Contenido Interno (Rectángulo Beige y Foto) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ padding: '6% 3% 6% 3%' }}>
        <div className="w-[95%] h-[95%] bg-[#FFF7E2] flex items-center justify-center p-1.5 rounded-[2px] shadow-sm">
          <div className="relative w-full h-full overflow-hidden">
            <Image src={image?.src || "/placeholder"} alt={image?.alt || "Stamp photo"} fill className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

/** Carrusel de sellos postales adaptado para la versión móvil con scroll horizontal táctil */
const MobileStampCarousel = ({ images }: MobileStampCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  /** Calcula el índice circular para navegar entre imágenes */
  const getIndex = (offset: number) => {
    const len = images.length;
    return (((currentIndex + offset) % len) + len) % len;
  };

  /** Avanza al siguiente sello */
  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  /** Retrocede al sello anterior */
  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const leftImage = images[getIndex(-1)];
  const centerImage = images[getIndex(0)];
  const rightImage = images[getIndex(1)];

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex justify-center items-center gap-0 mb-8 relative w-full overflow-hidden px-2">
        {/* Left Stamp (Orange) */}
        <MobileStamp
          color="#FF7223"
          image={leftImage}
          width="w-[160px]"
          rotation="-rotate-3"
        />

        {/* Center Stamp (Green) - Más grande y por encima */}
        <div className="z-10 -mx-4">
          <MobileStamp
            color="#13522B"
            image={centerImage}
            width="w-[220px]"
            rotation="rotate-0 scale-105"
          />
        </div>

        {/* Right Stamp (Light Blue) */}
        <MobileStamp
          color="#A3DBEF"
          image={rightImage}
          width="w-[160px]"
          rotation="rotate-3"
        />
      </div>

      {/* Controles de navegación */}
      <div className="flex items-center gap-6">
        <button
          onClick={prevImage}
          className="hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer shrink-0"
        >
          <Image src="/Paises/icon flecha carrusel izq.png" alt="Anterior" width={40} height={40} className="object-contain" />
        </button>
        <button
          onClick={nextImage}
          className="hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer shrink-0"
        >
          <Image src="/Paises/icon flecha carrusel derc.png" alt="Siguiente" width={40} height={40} className="object-contain" />
        </button>
      </div>
    </div>
  );
};

export default MobileStampCarousel;
