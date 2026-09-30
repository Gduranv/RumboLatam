"use client";

import { useLayoutEffect, useRef, useState, type ReactNode } from "react";

const DESIGN_WIDTH = 1280;

interface ScaleToFitCanvasProps {
  height?: number;
  fullWidth?: boolean;
  /** Ancho del lienzo de diseño. Por defecto 1280 (desktop); 430 para Nosotras mobile. */
  width?: number;
  children: ReactNode;
}

/**
 * Escala el lienzo fijo de 1280px de ancho (altura configurable, por defecto 1919)
 * para que siempre ajuste al ancho del viewport (nunca se recorta).
 * En pantallas >= 1280px queda 1:1 centrado.
 * Con fullWidth=true el diseño se estira a todo el ancho del viewport escalando por encima de 1280px.
 * `width` permite reutilizarlo con lienzos más estrechos (por ejemplo 430px en mobile).
 */
export default function ScaleToFitCanvas({
  height = 1919,
  fullWidth = false,
  width = DESIGN_WIDTH,
  children,
}: ScaleToFitCanvasProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const available =
        el.getBoundingClientRect().width || el.clientWidth || window.innerWidth;
      setScale(fullWidth ? available / width : Math.min(1, available / width));
    };

    update();
    const observer =
      typeof ResizeObserver !== "undefined" ? new ResizeObserver(update) : null;
    observer?.observe(el);
    window.addEventListener("resize", update);
    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [fullWidth, width]);

  return (
    <div
      ref={ref}
      className="relative mx-auto w-full overflow-hidden"
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      <div
        className="absolute left-0 top-0"
        style={{
          width: width,
          height: height,
          transformOrigin: "top left",
          transform: `scale(${scale})`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
