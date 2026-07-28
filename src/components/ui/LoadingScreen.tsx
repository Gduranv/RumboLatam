import React from "react";
import Image from "next/image";

interface LoadingScreenProps {
  /**
   * Optional prop to hide the loading screen.
   * Useful if you want to control its visibility via state.
   */
  isVisible?: boolean;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ isVisible = true }) => {
  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-300 md:hidden"
      style={{ backgroundColor: "#FF7223" }}
    >
      {/* 
        Using a relative container for Next.js Image or a standard img tag. 
        The design shows the white RL logo in the center.
      */}
      <div className="relative w-32 h-32 md:w-48 md:h-48 animate-pulse">
        <img
          src="/Paises/LogoReducido.png"
          alt="Rumbo Latam Logo"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};
