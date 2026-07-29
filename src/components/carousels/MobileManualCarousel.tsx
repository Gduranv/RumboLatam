"use client";

import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";

interface ManualCard {
  title: string;
  description: string;
  iconSrc: string;
  iconAlt: string;
}

interface MobileManualCarouselProps {
  cards: ManualCard[];
}

/**
 * Carrusel horizontal deslizable para las cards del "Manual del viajero".
 * Muestra una sola card a la vez con scroll snap y dots indicadores.
 */
const MobileManualCarousel = ({ cards }: MobileManualCarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  /** Detecta el índice actual al hacer scroll */
  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollLeft = container.scrollLeft;
    const itemWidth = container.firstElementChild
      ? (container.firstElementChild as HTMLElement).offsetWidth + 16
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

  return (
    <div className="w-full">
      {/* Contenedor deslizable */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-4 pt-6 pb-4 -mt-4"
        style={{ WebkitOverflowScrolling: "touch", scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="relative w-[85%] min-h-[140px] bg-[#FFF7E2] rounded-[20px] px-5 pb-5 pt-5 shadow-lg flex flex-col justify-start shrink-0 snap-center"
          >
            {/* Ícono badge flotando arriba a la derecha */}
            <div className="absolute -top-6 -right-2 z-20 w-[65px] h-[65px] drop-shadow-lg pointer-events-none">
              <Image src={card.iconSrc} alt={card.iconAlt} width={65} height={65} className="object-contain" />
            </div>

            <h3 className="text-[#FF7223] text-[18px] font-bold font-nohemi mb-2 pr-14">
              {card.title}
            </h3>
            <p className="text-[#13522B] text-[11px] font-medium font-sans leading-relaxed pr-4">
              {card.description}
            </p>
          </div>
        ))}
      </div>

      {/* Dots indicadores */}
      <div className="flex justify-center gap-2 mt-3">
        {cards.map((_, idx) => (
          <div
            key={idx}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex ? "bg-[#FFF7E2] w-4" : "bg-[#FFF7E2]/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default MobileManualCarousel;
