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

interface DestinationsCarouselProps {
  destinations: Destination[];
}

export default function DestinationsCarousel({ destinations }: DestinationsCarouselProps) {
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
    <div className="w-full max-w-[986px] h-[594px] flex items-center justify-between mx-auto">
      {/* Botón Flecha Izquierda */}
      <button 
        onClick={prevDestination}
        className={`hover:scale-110 transition-all duration-300 cursor-pointer shrink-0 ${currentIndex === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <Image src="/Paises/icon flecha carrusel izq.png" alt="Destino anterior" width={64} height={64} className="object-contain" />
      </button>

      {/* Estampa y contenido */}
      <div className="relative w-[806px] h-[594px] shrink-0 transition-opacity duration-500">
        {/* SVG Estampa de fondo */}
        <div className="absolute inset-0 pointer-events-none">
          <svg width="806" height="594" viewBox="0 0 806 594" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M805.891 0V594H771.782C771.802 593.746 771.802 593.492 771.802 593.229C771.802 580.831 761.64 570.785 749.089 570.785C736.537 570.785 726.386 580.831 726.386 593.229C726.386 593.492 726.386 593.746 726.405 594H694.864C694.883 593.746 694.883 593.492 694.883 593.229C694.883 580.831 684.712 570.785 672.17 570.785C659.629 570.785 649.457 580.831 649.457 593.229C649.457 593.492 649.457 593.746 649.477 594H617.935C617.955 593.746 617.955 593.492 617.955 593.229C617.955 580.831 607.793 570.785 595.252 570.785C582.71 570.785 572.539 580.831 572.539 593.229C572.539 593.492 572.539 593.746 572.558 594H541.017C541.036 593.746 541.037 593.492 541.037 593.229C541.037 580.831 530.865 570.785 518.323 570.785C505.782 570.785 495.62 580.831 495.62 593.229C495.62 593.492 495.62 593.746 495.64 594H464.098C464.118 593.746 464.118 593.492 464.118 593.229C464.118 580.831 453.947 570.785 441.405 570.785C428.863 570.785 418.692 580.831 418.692 593.229C418.692 593.492 418.692 593.746 418.712 594H387.17C387.19 593.746 387.19 593.492 387.19 593.229C387.19 580.831 377.028 570.785 364.486 570.785C351.945 570.785 341.773 580.831 341.773 593.229C341.773 593.492 341.773 593.746 341.793 594H310.251C310.271 593.746 310.271 593.492 310.271 593.229C310.271 580.831 300.1 570.785 287.558 570.785C275.016 570.785 264.845 580.831 264.845 593.229C264.845 593.492 264.845 593.746 264.865 594H233.323C233.343 593.746 233.343 593.492 233.343 593.229C233.343 580.831 223.181 570.785 210.64 570.785C198.098 570.785 187.926 580.831 187.926 593.229C187.926 593.492 187.926 593.746 187.946 594H156.405C156.424 593.746 156.424 593.492 156.424 593.229C156.424 580.831 146.253 570.785 133.711 570.785C121.17 570.785 111.008 580.831 111.008 593.229C111.008 593.492 111.008 593.746 111.028 594H79.4861C79.5058 593.746 79.5058 593.492 79.5058 593.229C79.5058 580.831 69.3343 570.785 56.7927 570.785C44.2511 570.785 34.0796 580.831 34.0796 593.229C34.0796 593.492 34.0796 593.746 34.0993 594H0V0H34.0894C34.0796 0.107386 34.0796 0.214772 34.0796 0.322158C34.0796 12.7203 44.2511 22.7756 56.7927 22.7756C69.3343 22.7756 79.5058 12.7203 79.5058 0.322158C79.5058 0.214772 79.5058 0.107386 79.5058 0H111.028C111.018 0.107386 111.018 0.214772 111.018 0.322158C111.018 12.7203 121.179 22.7756 133.721 22.7756C146.263 22.7756 156.434 12.7203 156.434 0.322158C156.434 0.214772 156.434 0.107386 156.434 0H187.956C187.946 0.107386 187.946 0.214772 187.946 0.322158C187.946 12.7203 198.118 22.7756 210.659 22.7756C223.201 22.7756 233.363 12.7203 233.363 0.322158C233.363 0.214772 233.363 0.107386 233.353 0H264.875C264.875 0.107386 264.875 0.214772 264.875 0.322158C264.875 12.7203 275.046 22.7756 287.588 22.7756C300.129 22.7756 310.301 12.7203 310.301 0.322158C310.301 0.214772 310.301 0.107386 310.301 0H341.823C341.813 0.107386 341.813 0.214772 341.813 0.322158C341.813 12.7203 351.974 22.7756 364.526 22.7756C377.077 22.7756 387.229 12.7203 387.229 0.322158C387.229 0.214772 387.229 0.107386 387.219 0H418.741C418.741 0.107386 418.741 0.214772 418.741 0.322158C418.741 12.7203 428.913 22.7756 441.454 22.7756C453.996 22.7756 464.167 12.7203 464.167 0.322158C464.167 0.214772 464.167 0.107386 464.167 0H495.689C495.679 0.107386 495.679 0.214772 495.679 0.322158C495.679 12.7203 505.841 22.7756 518.383 22.7756C530.924 22.7756 541.096 12.7203 541.096 0.322158C541.096 0.214772 541.096 0.107386 541.086 0H572.608C572.608 0.107386 572.608 0.214772 572.608 0.322158C572.608 12.7203 582.779 22.7756 595.321 22.7756C607.863 22.7756 618.024 12.7203 618.024 0.322158C618.024 0.214772 618.024 0.107386 618.024 0H649.546C649.536 0.107386 649.536 0.214772 649.536 0.322158C649.536 12.7203 659.708 22.7756 672.249 22.7756C684.791 22.7756 694.962 12.7203 694.962 0.322158C694.962 0.214772 694.962 0.107386 694.962 0H726.484C726.484 0.107386 726.484 0.214772 726.484 0.322158C726.484 12.7203 736.646 22.7756 749.188 22.7756C761.729 22.7756 771.901 12.7203 771.901 0.322158C771.901 0.214772 771.901 0.107386 771.901 0H806L805.891 0Z" fill="#13522B" />
          </svg>
        </div>

        {/* Contenido de la estampa (Foto y textos) con key para animar el cambio */}
        <div 
          key={current.title} 
          className="absolute top-[35px] left-[25px] right-[25px] bottom-[35px] rounded-[16px] overflow-hidden bg-gray-200 animate-in fade-in duration-500"
        >
          <Image
            src={current.imageSrc}
            alt={current.title}
            fill
            className="object-cover"
          />
          {/* Gradiente oscuro en la base para leer el texto */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none"></div>

          {/* Notch Verde Superior Izquierdo */}
          <div className="absolute top-0 left-0 w-[55%] h-[60px] bg-[#13522B] rounded-br-[16px] z-10 flex items-center pl-6">
            <h3 className="text-white text-[24px] font-bold tracking-tight font-nohemi">
              {current.title}
            </h3>
          </div>

          {/* Etiqueta Superior Derecha (Sobre la foto) */}
          <div className="absolute top-[18px] right-[24px] z-10">
            <span className="text-white font-bold text-[15px]">{current.tag}</span>
          </div>

          {/* Textos y botón inferiores */}
          <div className="absolute bottom-[24px] left-[32px] right-[32px] flex items-end justify-between z-10">
            <p className="text-white text-[13px] font-medium leading-relaxed max-w-[420px]">
              {current.description}
            </p>
            <Link href={`/destinos/${current.id}`}>
              <button className="bg-[#FF7223] text-white font-bold text-[14px] px-8 py-2.5 rounded-full hover:scale-105 transition-transform shadow-md cursor-pointer">
                Ver más
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Botón Flecha Derecha */}
      <button 
        onClick={nextDestination}
        className={`hover:scale-110 transition-all duration-300 cursor-pointer shrink-0 ${currentIndex === destinations.length - 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <Image src="/Paises/icon flecha carrusel derc.png" alt="Siguiente destino" width={64} height={64} className="object-contain" />
      </button>
    </div>
  );
}
