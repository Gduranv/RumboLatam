"use client";

import { useState, useRef } from "react";

export const Compass = () => {
  const [rotation, setRotation] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleHover = () => {
    setIsHovered(true);
    
    // Limpiamos cualquier timeout previo
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);

    const currentSpins = Math.floor(rotation / 360) * 360;
    // Se desvía un poco (ej: 40 grados) simulando interferencia magnética
    setRotation(currentSpins + 40);

    // Vuelve al norte exacto después de 600ms
    hoverTimeoutRef.current = setTimeout(() => {
      setRotation(currentSpins);
    }, 600);
  };

  const handleClick = () => {
    // Limpiamos cualquier timeout previo
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);

    // Al hacer click, la aguja da vueltas locas y termina apuntando al norte otra vez
    const currentSpins = Math.floor(rotation / 360) * 360;
    setRotation(currentSpins + 1080); // Sumamos 3 vueltas completas (3 * 360 = 1080)
  };

  return (
    <div 
      className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center cursor-pointer group hover:scale-110 transition-transform duration-300 drop-shadow-xl"
      onMouseEnter={handleHover}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      title="¡Hazme clic!"
    >
      <img
        src="/OtrosRecursos/brujula-base.svg"
        alt="Base de Brújula"
        className="absolute inset-0 w-full h-full object-contain drop-shadow-lg"
      />
      <img
        src="/OtrosRecursos/brujula-aguja.svg"
        alt="Aguja de Brújula"
        className="absolute w-1/2 h-1/2 object-contain"
        style={{ 
          transform: `translateX(4px) translateY(-2px) rotate(${rotation}deg)`,
          // Utilizamos un cubic-bezier para darle un efecto elástico y de rebote realista a la aguja
          transition: "transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
          transformOrigin: "center center"
        }}
      />
    </div>
  );
};
