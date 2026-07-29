"use client";

import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";

interface MobileInfoCardProps {
  title: string;
  description: string;
  images: string[];
  iconSrc: string;
  iconAlt: string;
  /** Posición del ícono: 'left' o 'right' */
  iconPosition?: "left" | "right";
  /** Si true, muestra como card naranja llena; si false, muestra como borde outline naranja */
  filled?: boolean;
}

/**
 * Tarjeta de información móvil con dos variantes:
 * - "outline" (filled=false): Borde naranja, fondo crema, carrusel de imágenes deslizable debajo
 * - "filled" (filled=true): Fondo naranja, imágenes dentro de la card deslizables
 */
const MobileInfoCard = ({ title, description, images, iconSrc, iconAlt, iconPosition = "right", filled = false }: MobileInfoCardProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  /** Detecta el índice actual al hacer scroll */
  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollLeft = container.scrollLeft;
    const itemWidth = container.firstElementChild
      ? (container.firstElementChild as HTMLElement).offsetWidth + 8
      : 1;
    const index = Math.round(scrollLeft / itemWidth);
    setCurrentIndex(index);
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  if (filled) {
    /* ===== VARIANTE LLENA (Actividades para hacer) ===== */
    return (
      <div className="bg-[#FF7223] rounded-[20px] p-4 pr-3 w-full shadow-lg relative flex flex-row items-center gap-3 min-h-[140px]">
        {/* Ícono badge (Bottom Left) */}
        <div className="absolute -bottom-9 -left-3 z-20 w-[65px] h-[65px] drop-shadow-lg pointer-events-none">
          <Image src={iconSrc} alt={iconAlt} width={65} height={65} className="object-contain" />
        </div>

        {/* Título y descripción (Left) */}
        <div className="flex flex-col flex-1 pl-2 pb-2">
          <h3 className="text-[#FFF7E2] text-[20px] font-bold font-nohemi leading-tight mb-2">
            {title}
          </h3>
          <p className="text-[#FFF7E2] text-[10px] font-sans font-normal leading-tight pr-1">
            {description}
          </p>
        </div>

        {/* Carrusel deslizable de imágenes (Right) */}
        {images.length > 0 && (
          <div className="relative w-[55%] shrink-0">
            <div
              ref={scrollRef}
              className="flex gap-2 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2"
              style={{ WebkitOverflowScrolling: "touch", scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {images.map((src, idx) => (
                <div key={idx} className="relative w-full h-[100px] rounded-[10px] overflow-hidden shadow-md bg-gray-200 shrink-0 snap-start">
                  <Image src={src} alt={`Imagen ${idx + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>

            {/* Dots */}
            {images.length > 1 && (
              <div className="flex justify-center gap-1.5 mt-1">
                {images.map((_, idx) => (
                  <div key={idx} className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? "bg-[#FFF7E2] w-3" : "bg-[#FFF7E2]/40"}`} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }

  /* ===== VARIANTE OUTLINE (Animales autóctonos) ===== */
  return (
    <div className="w-full">
      {/* Card con borde outline naranja */}
      <div className="border-2 border-[#FF7223] rounded-[20px] p-4 w-full relative bg-[#FFF7E2]">
        {/* Ícono badge */}
        <div className={`absolute -top-5 ${iconPosition === "left" ? "-left-2" : "-right-2"} z-20 w-[60px] h-[60px] drop-shadow-lg pointer-events-none`}>
          <Image src={iconSrc} alt={iconAlt} width={60} height={60} className="object-contain" />
        </div>

        {/* Título y descripción */}
        <div className={`${iconPosition === "left" ? "pl-12" : "pr-12"}`}>
          <h3 className="text-[#FF7223] text-[20px] font-bold font-nohemi leading-tight mb-1">
            {title}
          </h3>
          <p className="text-[#FF7223] text-[10px] font-sans font-normal leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Carrusel deslizable de imágenes FUERA de la card */}
      {images.length > 0 && (
        <div className="relative mt-3">
          <div
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2"
            style={{ WebkitOverflowScrolling: "touch", scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {images.map((src, idx) => (
              <div key={idx} className="relative w-[55%] h-[140px] rounded-[12px] overflow-hidden shadow-md bg-gray-200 shrink-0 snap-start">
                <Image src={src} alt={`Imagen ${idx + 1}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileInfoCard;
