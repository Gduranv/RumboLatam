"use client";

import { useRouter } from "next/navigation";

/**
 * Botón de flecha atrás que navega al historial anterior del navegador.
 * Usar en páginas que pueden ser alcanzadas desde múltiples rutas (ej. /nosotras).
 * `size` permite ajustarlo al lienzo de diseño (40px en Nosotras mobile, 64px por defecto).
 */
const BackButton = ({
  className,
  size = 64,
}: {
  className?: string;
  size?: number;
}) => {
  const router = useRouter();

  return (
    <button
      type="button"
      aria-label="Volver atrás"
      onClick={() => router.back()}
      className={`hover:scale-105 transition-transform cursor-pointer ${className ?? ""}`}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="32" cy="32" r="32" fill="#FFF7E2" />
        <path
          d="M39.383 32.287L48 48.5721L16 32.2851L48 16L39.383 32.287Z"
          fill="#FF7223"
        />
      </svg>
    </button>
  );
};

export default BackButton;
