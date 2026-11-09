"use client";

import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import type { Locale } from "./types";

const STORAGE_KEY = "rumbo-latam-locale";

interface LocaleContextValue {
  locale: Locale;
  setLocale: (next: Locale) => void;
}

const LocaleContext = createContext<LocaleContextValue>({
  locale: "es",
  setLocale: () => {},
});

/**
 * Valida si un valor almacenado corresponde a un idioma soportado.
 */
const isValidLocale = (value: string | null): value is Locale =>
  value === "es" || value === "en" || value === "pt";

/**
 * Proveedor global de idioma para las páginas internas de Rumbo Latam.
 * Hidrata inicialmente en español ("es") y sincroniza la preferencia con localStorage.
 */
export const LocaleProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>("es");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (isValidLocale(saved) && saved !== "es") {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLocaleState(saved);
      }
    } catch {
      // Ignorar errores de acceso a localStorage en entornos restringidos.
    }
  }, []);

  /**
   * Actualiza el idioma activo en memoria y lo persiste en localStorage.
   */
  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignorar errores de escritura en localStorage.
    }
  }, []);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

/**
 * Hook para consumir y cambiar el idioma actual de las páginas internas.
 */
export const useLocale = (): LocaleContextValue => useContext(LocaleContext);

