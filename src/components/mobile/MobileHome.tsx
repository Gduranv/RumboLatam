"use client";

import { useState } from "react";
import Image from "next/image";
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
      {/* Ola Celeste */}
      <div className="absolute w-[150%] h-[250px] left-[-20%] bottom-[-80px] bg-[#59C3E0] transform rotate-[-8deg] z-0 rounded-t-[50%]"></div>
      {/* Arena */}
      <div className="absolute w-[150%] h-[200px] left-[-20%] bottom-[-100px] bg-[#FFF7E2] transform rotate-[-6deg] z-0 rounded-t-[50%]"></div>

      {/* --- ELEMENTOS FLOTANTES --- */}
      {/* Logo Arriba Izquierda */}
      <div className="absolute top-8 left-6 z-20 pointer-events-none w-32">
        <img
          src="/OtrosRecursos/LOGO RUMBO.png"
          alt="Rumbo Latam Logo"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Brújula Arriba Derecha */}
      <div className="absolute top-8 right-6 z-20 pointer-events-auto scale-75 origin-top-right drop-shadow-md">
        <Compass />
      </div>

      {/* --- CONTENIDO PRINCIPAL --- */}
      {/* Contenedor del Mapa (Ajustado para móvil) */}
      <main className="flex-1 w-full flex items-center justify-center relative z-10 pt-24 pb-48 px-2">
        <div className="w-full max-w-[500px]">
          <InteractiveMap />
        </div>
      </main>

      {/* --- ELEMENTOS INFERIORES --- */}
      {/* Botón Accesibilidad / Nosotras (Abajo Izquierda) */}
      <button 
        onClick={() => setIsNosotrasOpen(true)}
        className="absolute bottom-10 left-6 z-20 w-16 h-16 rounded-full shadow-xl flex items-center justify-center hover:scale-105 transition-transform"
      >
        <img 
          src="/Paises/icon nosotras.png" 
          alt="Acerca de Nosotras" 
          className="w-full h-full object-contain"
        />
      </button>

      {/* Gia (Abajo Derecha) */}
      <div className="absolute bottom-[-10px] right-[-30px] z-20 pointer-events-none">
        <img
          src="/OtrosRecursos/GIA_ESTATICA.svg"
          alt="Gia"
          className="w-48 sm:w-60 h-auto object-contain drop-shadow-2xl"
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
