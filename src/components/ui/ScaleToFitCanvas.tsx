"use client";

import { useLayoutEffect, useRef, useState, type ReactNode } from "react";

const DESIGN_WIDTH = 1280;

interface ScaleToFitCanvasProps {
  height?: number;
  fullWidth?: boolean;
  children: ReactNode;
}

/**
 * Escala el lienzo fijo de 1280px de ancho (altura configurable, por defecto 1919)
 * para que siempre ajuste al ancho del viewport (nunca se recorta).
 * En pantallas >= 1280px queda 1:1 centrado.
 * Con fullWidth=true el diseño se estira a todo el ancho del viewport escalando por encima de 1280px.
 */
export default function ScaleToFitCanvas({ height = 1919, fullWidth = false, children }: ScaleToFitCanvasProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const width =
        el.getBoundingClientRect().width || el.clientWidth || window.innerWidth;
      setScale(fullWidth ? width / DESIGN_WIDTH : Math.min(1, width / DESIGN_WIDTH));
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
  }, [fullWidth]);

  return (
    <div
      ref={ref}
      className="relative mx-auto w-full overflow-hidden"
      style={{ aspectRatio: `${DESIGN_WIDTH} / ${height}` }}
    >
      <div
        className="absolute left-0 top-0"
        style={{
          width: DESIGN_WIDTH,
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