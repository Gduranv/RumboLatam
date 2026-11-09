"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { getUiStrings, useLocale, type Locale } from "@/i18n";

interface LanguageOption {
  code: Locale;
  shortLabel: string;
  fullLabel: string;
}

const LANGUAGE_OPTIONS: LanguageOption[] = [
  { code: "es", shortLabel: "ES", fullLabel: "Español" },
  { code: "en", shortLabel: "EN", fullLabel: "English" },
  { code: "pt", shortLabel: "PT", fullLabel: "Português" },
];

/**
 * Determina si la ruta actual corresponde a la página de inicio (Home),
 * donde el selector de idioma NO debe mostrarse.
 */
const isHomeRoute = (pathname: string | null): boolean =>
  !pathname || pathname === "/";

/**
 * Botón flotante con menú desplegable para seleccionar el idioma (ES, EN, PT)
 * en todas las páginas internas de Rumbo Latam, adaptado a móvil y escritorio.
 */
export const LanguageDropdown = () => {
  const pathname = usePathname();
  const { locale, setLocale } = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    /**
     * Cierra el menú si el usuario hace clic fuera del contenedor.
     */
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    /**
     * Cierra el menú al presionar la tecla Escape.
     */
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (isHomeRoute(pathname)) {
    return null;
  }

  const ui = getUiStrings(locale);
  const activeOption =
    LANGUAGE_OPTIONS.find((opt) => opt.code === locale) ?? LANGUAGE_OPTIONS[0];

  /**
   * Cambia el idioma activo y cierra el menú desplegable.
   */
  const handleSelectLanguage = (nextLocale: Locale) => {
    setLocale(nextLocale);
    setIsOpen(false);
  };

  return (
    <div
      ref={containerRef}
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[70] select-none"
    >
      {isOpen && (
        <div
          role="menu"
          aria-label={ui.languageSelectorAria}
          className="absolute bottom-full right-0 mb-2.5 min-w-[164px] md:min-w-[184px] rounded-[20px] bg-[#FFF7E2] border-2 border-[#FF7223] p-1.5 shadow-[0_14px_34px_rgba(19,82,43,0.22)] flex flex-col gap-1 animate-in fade-in slide-in-from-bottom-2 duration-150"
        >
          {LANGUAGE_OPTIONS.map((option) => {
            const isSelected = option.code === locale;
            return (
              <button
                key={option.code}
                type="button"
                role="menuitemradio"
                aria-checked={isSelected}
                onClick={() => handleSelectLanguage(option.code)}
                className={`w-full flex items-center justify-between px-3.5 py-2 md:py-2.5 rounded-[14px] text-left transition-colors cursor-pointer ${
                  isSelected
                    ? "bg-[#FF7223] text-[#FFF7E2] font-bold shadow-sm"
                    : "text-[#13522B] hover:bg-[#FF7223]/12 font-semibold"
                }`}
              >
                <span className="font-[family-name:var(--font-albert-sans)] text-[14px] md:text-[15px] leading-none">
                  {option.fullLabel}
                </span>
                <span
                  className={`font-['Nohemi',sans-serif] text-[12px] md:text-[13px] tracking-wider px-2 py-0.5 rounded-full ${
                    isSelected
                      ? "bg-[#FFF7E2]/20 text-[#FFF7E2]"
                      : "bg-[#13522B]/10 text-[#13522B]"
                  }`}
                >
                  {option.shortLabel}
                </span>
              </button>
            );
          })}
        </div>
      )}

      <button
        type="button"
        data-testid="language-dropdown-trigger"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-label={ui.languageSelectorAria}
        onClick={() => setIsOpen((prev) => !prev)}
        className="group flex items-center gap-2 md:gap-2.5 h-11 md:h-12 px-3.5 md:px-4 rounded-full bg-[#FFF7E2] border-2 border-[#FF7223] text-[#13522B] shadow-[0_10px_28px_rgba(19,82,43,0.2)] hover:bg-[#FF7223] hover:text-[#FFF7E2] transition-all duration-200 active:scale-95 cursor-pointer"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-[18px] h-[18px] md:w-5 md:h-5 text-[#FF7223] group-hover:text-[#FFF7E2] transition-colors shrink-0"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
        </svg>

        <span className="font-['Nohemi',sans-serif] font-bold text-[13px] md:text-[15px] tracking-wide leading-none pt-[1px]">
          {activeOption.shortLabel}
        </span>

        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`w-3.5 h-3.5 md:w-4 md:h-4 transition-transform duration-200 shrink-0 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          aria-hidden="true"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      </button>
    </div>
  );
};

