"use client";

import { InteractiveMap } from "@/components/InteractiveMap";
import { useState } from "react";
import { NosotrasModal } from "@/components/NosotrasModal";

export default function Home() {
  const [isNosotrasOpen, setIsNosotrasOpen] = useState(false);

  return (
    <div
      className="flex flex-col min-h-screen font-sans transition-colors duration-500 overflow-hidden relative"
      style={{
        backgroundImage: "url('/FondoHusoHorario/MAR.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#6fc9e6" // Color base celeste similar a Figma
      }}
    >

      {/* Icono Arriba a la Izquierda */}
      <div 
        className="fixed top-8 left-12 z-50 drop-shadow-md cursor-pointer"
        onClick={() => setIsNosotrasOpen(true)}
      >
        <img
          src="/OtrosRecursos/ICON.png"
          alt="Rumbo Latam Icon"
          className="w-12 md:w-16 h-auto hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Main Map Container */}
      <main className="flex flex-1 w-full items-center justify-center p-4 sm:p-12 mt-12 sm:mt-0">
        <InteractiveMap />
      </main>

      {/* Nosotras Modal */}
      {isNosotrasOpen && (
        <NosotrasModal onClose={() => setIsNosotrasOpen(false)} />
      )}

    </div>
  );
}
