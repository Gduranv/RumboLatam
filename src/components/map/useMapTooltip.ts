"use client";

import { useCallback, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent, RefObject } from "react";
import { computeTooltipPosition } from "./tooltipPosition";

interface TooltipState {
  isVisible: boolean;
  countryName: string;
}

export interface UseMapTooltipResult {
  countryName: string;
  isVisible: boolean;
  tooltipRef: RefObject<HTMLDivElement | null>;
  handleCountryPointerEnter: (
    countryName: string,
    event: ReactPointerEvent<HTMLElement>
  ) => void;
  handleCountryPointerMove: (event: ReactPointerEvent<HTMLElement>) => void;
  handleCountryPointerLeave: (event: ReactPointerEvent<HTMLElement>) => void;
}

/**
 * Determina si el evento proviene de una interacción táctil para evitar tooltips pegados en móvil.
 */
const isTouchPointer = (pointerType?: string): boolean => pointerType === "touch";

/**
 * Lee las dimensiones actuales del viewport con valores de respaldo seguros.
 */
const readViewportSize = () => ({
  width: typeof window !== "undefined" && window.innerWidth > 0 ? window.innerWidth : 1280,
  height: typeof window !== "undefined" && window.innerHeight > 0 ? window.innerHeight : 800,
});

/**
 * Obtiene el tamaño medido del nodo del tooltip o aplica las dimensiones base estimadas.
 */
const readTooltipDimensions = (element: HTMLDivElement) => ({
  width: element.offsetWidth > 0 ? element.offsetWidth : 190,
  height: element.offsetHeight > 0 ? element.offsetHeight : 42,
});

/**
 * Aplica imperativamente la traslación 3D al nodo del tooltip para evitar re-renders por cada píxel.
 */
const applyTooltipTransform = (
  element: HTMLDivElement | null,
  clientX: number,
  clientY: number
): void => {
  if (!element) return;

  const coordinates = computeTooltipPosition(
    { clientX, clientY },
    readViewportSize(),
    readTooltipDimensions(element)
  );

  element.style.transform = `translate3d(${coordinates.x}px, ${coordinates.y}px, 0)`;
};

/**
 * Gestiona la visibilidad y posición del tooltip personalizado de países en el mapa interactivo.
 */
export const useMapTooltip = (): UseMapTooltipResult => {
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const [tooltipState, setTooltipState] = useState<TooltipState>({
    isVisible: false,
    countryName: "",
  });

  /**
   * Activa el tooltip con el nombre del país y posiciona el contenedor en las coordenadas iniciales.
   */
  const handleCountryPointerEnter = useCallback(
    (countryName: string, event: ReactPointerEvent<HTMLElement>) => {
      if (isTouchPointer(event.pointerType)) return;

      applyTooltipTransform(tooltipRef.current, event.clientX, event.clientY);
      setTooltipState({ isVisible: true, countryName });
    },
    []
  );

  /**
   * Actualiza la posición del tooltip siguiendo suavemente al puntero sobre el territorio.
   */
  const handleCountryPointerMove = useCallback(
    (event: ReactPointerEvent<HTMLElement>) => {
      if (isTouchPointer(event.pointerType)) return;

      applyTooltipTransform(tooltipRef.current, event.clientX, event.clientY);
    },
    []
  );

  /**
   * Oculta el tooltip al salir del territorio conservando el último texto durante el desvanecimiento.
   */
  const handleCountryPointerLeave = useCallback(
    (event: ReactPointerEvent<HTMLElement>) => {
      if (isTouchPointer(event.pointerType)) return;

      setTooltipState((previous) =>
        previous.isVisible ? { ...previous, isVisible: false } : previous
      );
    },
    []
  );

  return {
    countryName: tooltipState.countryName,
    isVisible: tooltipState.isVisible,
    tooltipRef,
    handleCountryPointerEnter,
    handleCountryPointerMove,
    handleCountryPointerLeave,
  };
};

