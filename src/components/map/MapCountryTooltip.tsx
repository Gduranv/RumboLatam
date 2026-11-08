"use client";

import type { RefObject } from "react";

export interface MapCountryTooltipProps {
  countryName: string;
  isVisible: boolean;
  tooltipRef: RefObject<HTMLDivElement | null>;
}

/**
 * Renderiza el emblema circular verde selva con la aguja viajera naranja de Rumbo Latam.
 */
const CompassBadgeIcon = () => (
  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#13522B] shadow-inner">
    <svg
      width="14"
      height="14"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="rotate-[135deg]"
    >
      <path
        d="M39.383 32.287L48 48.5721L16 32.2851L48 16L39.383 32.287Z"
        fill="#FF7223"
      />
    </svg>
  </span>
);

/**
 * Muestra la etiqueta flotante personalizada (Cápsula Brújula) que sigue al cursor sobre cada país.
 */
export const MapCountryTooltip = ({
  countryName,
  isVisible,
  tooltipRef,
}: MapCountryTooltipProps) => {
  const visibilityClasses = isVisible
    ? "opacity-100 scale-100 -rotate-1"
    : "opacity-0 scale-90 rotate-0";

  return (
    <div
      ref={tooltipRef}
      data-testid="map-country-tooltip"
      data-visible={isVisible ? "true" : "false"}
      aria-hidden="true"
      className="fixed top-0 left-0 z-50 pointer-events-none select-none will-change-transform"
    >
      <div
        className={`flex items-center gap-2 rounded-full border border-[#13522B]/20 bg-[#FFF7E2] py-1.5 pr-3.5 pl-1.5 shadow-[0_8px_20px_rgba(19,82,43,0.22)] transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${visibilityClasses}`}
      >
        <CompassBadgeIcon />
        <span className="font-nohemi text-sm font-bold tracking-tight whitespace-nowrap text-[#13522B]">
          {countryName}
        </span>
      </div>
    </div>
  );
};

