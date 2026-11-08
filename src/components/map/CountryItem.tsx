"use client";

import type { PointerEvent as ReactPointerEvent } from "react";
import Link from "next/link";
import type { MapPlace } from "@/data/countries";

interface CountryItemProps {
  id: string;
  name: string;
  svgPath: string;
  href?: string;
  flagPath?: string;
  flagPosition?: { top: string; left: string };
  places?: MapPlace[];
  position: { top: string; left: string; width: string };
  onClick?: () => void;
  onPointerEnter?: (event: ReactPointerEvent<HTMLElement>) => void;
  onPointerMove?: (event: ReactPointerEvent<HTMLElement>) => void;
  onPointerLeave?: (event: ReactPointerEvent<HTMLElement>) => void;
}

/**
 * Renderiza un país interactivo sobre el mapa de América Latina como un enlace
 * semántico <a> rastreable por motores de búsqueda y conectado al tooltip personalizado.
 */
export const CountryItem = ({
  id,
  name,
  svgPath,
  href,
  flagPath,
  flagPosition,
  places,
  position,
  onClick,
  onPointerEnter,
  onPointerMove,
  onPointerLeave,
}: CountryItemProps) => {
  const destinationHref = href ?? `/paises/${id}`;

  return (
    <Link
      href={destinationHref}
      aria-label={`Explorar guía de viaje de ${name}`}
      onClick={onClick}
      onPointerEnter={onPointerEnter}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className="absolute block group cursor-pointer"
      style={{
        top: position.top,
        left: position.left,
        width: position.width,
      }}
    >
      {/* Contenedor del País - Escala al hacer hover pero mantiene las posiciones relativas */}
      <div className="relative w-full h-full transition-transform duration-300 hover:scale-[1.03] hover:z-20">
        {/* SVG del País */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={svgPath}
          alt={`Mapa de ${name}`}
          className="w-full h-auto drop-shadow-sm transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(42,170,212,0.6)]"
        />

        {/* Renderizado de Lugares Ilustrados (Places) sobre el mapa */}
        {places &&
          places.map((place, index) => (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              key={index}
              src={place.path}
              alt={`Lugar turístico ${index + 1} de ${name}`}
              className={`absolute drop-shadow-md transition-transform duration-300 z-10 max-w-none origin-center ${
                id === "repdominicana"
                  ? "scale-[0.45] md:scale-100 pointer-events-auto cursor-pointer"
                  : id === "mexico"
                    ? "scale-[0.5] md:scale-100 pointer-events-none"
                    : id === "brasil"
                      ? "scale-[0.85] md:scale-100 pointer-events-none"
                      : "scale-[0.75] md:scale-100 pointer-events-none"
              }`}
              style={{
                top: place.position.top,
                left: place.position.left,
                width: place.position.width,
                height: place.position.height,
              }}
            />
          ))}

        {/* Bandera Flotante */}
        {flagPath && flagPosition && (
          <div
            className="absolute rounded-full overflow-hidden shadow-lg border-2 border-white bg-white transition-transform duration-300 group-hover:scale-125 group-hover:-translate-y-2 z-20 max-w-none w-[30px] h-[32px] md:w-[34px] md:h-[36px]"
            style={{
              top: flagPosition.top,
              left: flagPosition.left,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={flagPath}
              alt={`Bandera de ${name}`}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
    </Link>
  );
};
