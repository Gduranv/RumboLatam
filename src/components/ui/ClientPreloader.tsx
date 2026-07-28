"use client";

import React, { useState, useEffect } from "react";
import { LoadingScreen } from "./LoadingScreen";

interface ClientPreloaderProps {
  children: React.ReactNode;
}

// Lista de assets pesados (imágenes) que queremos garantizar que estén cargados
const ASSETS_TO_PRELOAD = [
  "/GiaLight.gif",
  "/TableroMapaWeb.svg",
  "/OtrosRecursos/MAPA SVG.svg",
  "/OtrosRecursos/LOGO RUMBO.png",
  "/OtrosRecursos/Nosotras.png"
];

export const ClientPreloader: React.FC<ClientPreloaderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    let loadedCount = 0;
    let hasError = false;
    const totalAssets = ASSETS_TO_PRELOAD.length;

    // Timeout de seguridad de 7 segundos por si alguna imagen falla o el internet es muy lento
    const safetyTimeout = setTimeout(() => {
      finishLoading();
    }, 7000);

    const finishLoading = () => {
      if (!isLoading) return;
      clearTimeout(safetyTimeout);
      setIsFading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 500); // Duración del fade out
    };

    const assetLoaded = () => {
      loadedCount++;
      if (loadedCount >= totalAssets) {
        // Añadimos un pequeño delay para asegurar renderizado final
        setTimeout(() => {
          finishLoading();
        }, 400);
      }
    };

    // Precargar Imágenes
    ASSETS_TO_PRELOAD.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = assetLoaded;
      img.onerror = () => {
        hasError = true;
        assetLoaded();
      };
    });

    // Cleanup
    return () => clearTimeout(safetyTimeout);
  }, []);

  return (
    <>
      {isLoading && (
        <div 
          className={`fixed inset-0 z-[9999] transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}
        >
          {/* Forzamos que se vea en todas las pantallas quitando el md:hidden temporalmente mediante un prop si podemos, pero como LoadingScreen tiene md:hidden hardcodeado, vamos a renderizar nuestro propio loader limpio aquí para garantizar que funcione en iPhone/Safari */}
          <div
            className="absolute inset-0 flex items-center justify-center w-full h-full"
            style={{ backgroundColor: "#FF7223" }}
          >
            <div className="relative w-32 h-32 md:w-48 md:h-48 animate-pulse">
              <img
                src="/Paises/LogoReducido.png"
                alt="Cargando Rumbo Latam"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
      {children}
    </>
  );
};
