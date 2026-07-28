"use client";

import Link from "next/link";
import { useState } from "react";
import { NosotrasModal } from "@/components/modals/NosotrasModal";

interface CountryHeaderButtonsProps {
  backUrl?: string;
}

export default function CountryHeaderButtons({ backUrl = "/" }: CountryHeaderButtonsProps) {
  const [isNosotrasOpen, setIsNosotrasOpen] = useState(false);

  return (
    <>
      {/* Botón Flecha Atrás */}
      <Link href={backUrl}>
        <button className="absolute top-[50px] left-[56px] z-30 hover:scale-105 transition-transform cursor-pointer">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="32" fill="#FFF7E2" />
            <path d="M39.383 32.287L48 48.5721L16 32.2851L48 16L39.383 32.287Z" fill="#FF7223" />
          </svg>
        </button>
      </Link>

      {/* Botón About */}
      <button 
        onClick={() => setIsNosotrasOpen(true)}
        className="absolute top-[50px] right-[56px] z-30 hover:scale-105 transition-transform cursor-pointer"
      >
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="32" fill="#FFF7E2" />
          <path d="M42.5681 25.2113L38.6574 29.4615L36.8007 31.4774L36.7817 49.5541C36.7817 49.6201 36.7817 49.6819 36.7741 49.7438H33.1709V41.029H30.3764V49.7438H26.6896C26.6706 49.616 26.663 49.4799 26.663 49.348V31.4733L24.7191 29.3997L20.8311 25.2526C20.8311 25.2526 20.8538 25.2237 20.8652 25.2072C22.3954 23.2944 22.403 23.2903 23.3788 22.1401L28.0223 27.1777H31.7167H35.411L40.0584 22.1401C41.0304 23.2903 41.038 23.2944 42.5681 25.2072V25.2113Z" fill="#FF7223" />
          <path d="M34.4278 15H28.9716L26.2417 20.1324L28.9716 25.2648H34.4278L37.1577 20.1324L34.4278 15Z" fill="#FF7223" />
        </svg>
      </button>

      {/* Nosotras Modal */}
      {isNosotrasOpen && (
        <NosotrasModal onClose={() => setIsNosotrasOpen(false)} />
      )}
    </>
  );
}
