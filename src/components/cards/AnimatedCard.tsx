"use client";

import { useState } from "react";
import Image from "next/image";

interface AnimatedCardProps {
  title: string;
  description: React.ReactNode;
  iconSrc: string;
  iconAlt: string;
}

export default function AnimatedCard({ title, description, iconSrc, iconAlt }: AnimatedCardProps) {
  const [hasHovered, setHasHovered] = useState(false);

  return (
    <div 
      className="relative w-[457px] h-[195px] max-w-[457px] max-h-[195px] flex items-center justify-center cursor-default shrink-0"
      onMouseEnter={() => setHasHovered(true)}
    >
      {/* Icono que sale a la izquierda de la tarjeta de forma suave */}
      <div 
        className={`absolute top-1/2 -translate-y-1/2 transition-all duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)] z-20
          ${hasHovered ? '-left-[40px] opacity-100 scale-100' : 'left-8 opacity-0 scale-75'}
        `}
      >
        <Image src={iconSrc} alt={iconAlt} width={100} height={100} className="object-contain drop-shadow-xl" />
      </div>

      {/* Tarjeta Principal */}
      <div className="relative w-full h-full bg-[#FFF7E2] rounded-[20px] pl-[70px] pr-12 py-4 flex flex-col justify-center shadow-lg z-10 overflow-hidden">
        <h3 className="text-[#FF7223] text-[28px] font-bold leading-tight mb-1 font-nohemi">
          {title}
        </h3>
        <p className="text-[#13522B] text-[18px] font-medium leading-[1.5] font-sans h-[108px] line-clamp-4 overflow-hidden">
          {description}
        </p>
      </div>
    </div>
  );
}
