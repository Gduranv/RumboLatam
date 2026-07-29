"use client";

import Image from "next/image";

interface MobileAnimatedCardProps {
  title: string;
  description: React.ReactNode;
  iconSrc: string;
  iconAlt: string;
}

export default function MobileAnimatedCard({ title, description, iconSrc, iconAlt }: MobileAnimatedCardProps) {
  return (
    <div className="relative w-full mb-4 shrink-0 flex items-center justify-center">
      <div className="relative w-[288px] min-h-[101px] flex items-center justify-end">
        {/* Icono siempre visible y superpuesto a la izquierda */}
        <div className="absolute left-[-30px] top-1/2 -translate-y-1/2 z-20 w-[64px] h-[64px]">
          <Image src={iconSrc} alt={iconAlt} fill className="object-contain drop-shadow-lg" />
        </div>

        {/* Tarjeta Principal */}
        <div className="relative w-full h-full min-h-[101px] bg-[#FFF7E2] rounded-[20px] pl-[40px] pr-4 py-3 flex flex-col justify-center shadow-md z-10">
          <h3 className="text-[#FF7223] text-[16px] font-bold leading-tight mb-1 font-nohemi">
            {title}
          </h3>
          <p className="text-[#13522B] text-[11px] font-medium leading-[1.3] font-sans">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
