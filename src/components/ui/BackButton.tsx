"use client";

import { useRouter } from "next/navigation";

/**
 * Botón de flecha atrás que navega al historial anterior del navegador.
 * Usar en páginas que pueden ser alcanzadas desde múltiples rutas (ej. /nosotras).
 */
const BackButton = ({ className }: { className?: string }) => {
  const router = useRouter();

  return (
    <button
      type="button"
      aria-label="Volver atrás"
      onClick={() => router.back()}
      className={`hover:scale-105 transition-transform cursor-pointer ${className ?? ""}`}
    >
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="32" fill="#FFF7E2" />
        <path d="M39.383 32.287L48 48.5721L16 32.2851L48 16L39.383 32.287Z" fill="#FF7223" />
      </svg>
    </button>
  );
};

export default BackButton;
