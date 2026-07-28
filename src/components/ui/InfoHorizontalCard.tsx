"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface InfoHorizontalCardProps {
  title: string;
  description: string;
  images: string[];
  badgeSvg?: React.ReactNode;
  badgePosition?: 'top-right' | 'bottom-right';
}

export default function InfoHorizontalCard({ title, description, images, badgeSvg, badgePosition = 'top-right' }: InfoHorizontalCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isHovered && images.length > 1) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 600);
    } else {
      setCurrentIndex(0); // Vuelve a la primera al quitar el hover
    }
    return () => clearInterval(interval);
  }, [isHovered, images.length]);

  const badgePositionClasses = badgePosition === 'bottom-right' 
    ? "-bottom-16 -right-24" 
    : "-top-12 -right-24";

  const badgeAnimationClasses = badgePosition === 'bottom-right'
    ? (isHovered ? "opacity-100 scale-100 translate-y-0 rotate-0" : "opacity-0 scale-50 -translate-y-8 rotate-12")
    : (isHovered ? "opacity-100 scale-100 translate-y-0 rotate-0" : "opacity-0 scale-50 translate-y-8 -rotate-12");

  return (
    <div 
      className="relative bg-[#FF7223] rounded-[24px] p-6 w-full shadow-lg flex items-center justify-between gap-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Ilustración de la esquina (Aparece en hover) */}
      {badgeSvg && (
        <div 
          className={`absolute ${badgePositionClasses} z-30 drop-shadow-xl pointer-events-none transition-all duration-500 ease-out transform ${badgeAnimationClasses}`}
        >
          {badgeSvg}
        </div>
      )}

      <div className="flex-1 z-10">
        <h3 className="text-white text-[24px] font-bold font-nohemi mb-3">
          {title}
        </h3>
        <p className="text-white/90 text-[14px] font-sans font-medium leading-relaxed">
          {description}
        </p>
      </div>

      <div className="relative z-10 w-[280px] h-[160px] rounded-[16px] overflow-hidden shrink-0 shadow-md bg-gray-200">
        {images.map((src, idx) => (
          <Image
            key={src}
            src={src}
            alt={`Imagen de ${title} ${idx + 1}`}
            fill
            className={`object-cover transition-opacity duration-300 ${idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          />
        ))}
      </div>
    </div>
  );
}
