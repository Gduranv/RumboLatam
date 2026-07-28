"use client";

import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { InteractiveMap } from "@/components/map/InteractiveMap";
import { Compass } from "@/components/ui/Compass";
import { NosotrasModal } from "@/components/modals/NosotrasModal";

export default function MobileHome() {
  const [isNosotrasOpen, setIsNosotrasOpen] = useState(false);

  return (
    <div className="flex md:hidden flex-col min-h-[100dvh] overflow-hidden relative bg-[#A3DBEF]">

      {/* --- FONDOS Y EFECTOS --- */}
      {/* Blur 1: Arriba Izquierda */}
      <div className="absolute w-[167px] h-[167px] left-[-18px] top-[20px] bg-[#00BCFF] rounded-full filter blur-[111px] opacity-70"></div>

      {/* Blur 2: Centro Derecha */}
      <div className="absolute w-[176px] h-[176px] left-[277px] top-[272px] bg-[#00BCFF] rounded-full filter blur-[111px] opacity-70"></div>

      {/* Blur 3: Abajo Izquierda */}
      <div className="absolute w-[327px] h-[329px] left-[-82px] top-[600px] bg-[#00BCFF] rounded-full filter blur-[150px] opacity-70"></div>

      {/* Grid de fondo sutil (Opcional, simulando "tablero web este si.png") */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(#59B9D3 1px, transparent 1px), linear-gradient(90deg, #59B9D3 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      {/* Olas y Arena del Fondo Inferior */}
      <div className="absolute bottom-[-40px] left-0 w-full z-0 pointer-events-none flex flex-col justify-end">
        {/* Ola Celeste */}
        <svg className="w-full h-auto absolute bottom-2 left-0" viewBox="0 0 430 173" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M139.857 54.6023C309.792 85.8503 440.786 33.6085 484.213 5.92687e-05L499.956 132.357L-175.016 212.639L-196.263 34.0054C-71.7001 -0.23912 51.3056 32.3164 139.857 54.6023Z" fill="#59C3E0" />
        </svg>
        {/* Arena */}
        <svg className="w-full h-auto absolute bottom-0 left-0" viewBox="0 0 430 105" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M150.209 50.3834C-20.3835 70.3477 -155.303 32.2732 -198.093 -1.06974e-05L-211.508 103.057L462.122 207.426L486.834 47.9253C362.895 11.2063 239.22 34.5862 150.209 50.3834Z" fill="#FFF7E2" />
        </svg>
      </div>

      {/* --- ELEMENTOS FLOTANTES --- */}
      {/* Logo Arriba Izquierda */}
      <div className="absolute top-4 left-6 z-20 pointer-events-none w-28 sm:w-32">
        <img
          src="/OtrosRecursos/LOGO RUMBO.png"
          alt="Rumbo Latam Logo"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Brújula Arriba Derecha */}
      <div className="absolute top-4 right-6 z-20 pointer-events-auto scale-75 origin-top-right drop-shadow-md">
        <Compass />
      </div>

      {/* Contenedor del Mapa (Ajustado a 386x436 px exactos) */}
      <main className="flex-1 w-full flex items-center justify-center relative z-10 pt-18 pb-32 overflow-hidden">
        {/* El marco de 386x436 (ajustado a 417 para rellenar) */}
        <div className="w-[386px] h-[436px] relative flex items-center justify-center">
          <div className="absolute w-[417px] h-[436px] flex items-center justify-center">
            <InteractiveMap />
          </div>
        </div>
      </main>

      {/* --- ELEMENTOS INFERIORES --- */}
      {/* Botón Accesibilidad / Nosotras (Abajo Izquierda) */}
      <button
        onClick={() => setIsNosotrasOpen(true)}
        className="absolute bottom-10 left-6 z-20 w-16 h-16 rounded-full shadow-xl flex items-center justify-center hover:scale-105 transition-transform"
      >
        <img
          src="/NosotrasHD.png"
          alt="Acerca de Nosotras"
          className="w-full h-full object-contain"
        />
      </button>

      {/* Gia (Abajo Derecha) */}
      <div className="absolute bottom-[-350px] right-[-177px] z-20 pointer-events-none w-[570px] h-[570px] max-w-none">
        <img
          src="/GiaLight.gif"
          alt="Gia Animada"
          className="w-full h-full object-contain drop-shadow-2xl"
        />
      </div>

      {/* Nosotras Modal */}
      {isNosotrasOpen && (
        <div className="z-50">
          <NosotrasModal onClose={() => setIsNosotrasOpen(false)} />
        </div>
      )}
    </div>
  );
}
