import { describe, expect, it } from "vitest";
import { computeTooltipPosition } from "./tooltipPosition";

describe("computeTooltipPosition", () => {
  it("posiciona la etiqueta desplazada arriba y a la derecha del cursor por defecto", () => {
    const position = computeTooltipPosition(
      { clientX: 400, clientY: 300 },
      { width: 1280, height: 800 },
      { width: 180, height: 40 }
    );

    expect(position).toEqual({ x: 416, y: 258 });
  });

  it("invierte horizontalmente hacia la izquierda cuando el cursor se acerca al borde derecho", () => {
    const position = computeTooltipPosition(
      { clientX: 1200, clientY: 300 },
      { width: 1280, height: 800 },
      { width: 180, height: 40 }
    );

    expect(position).toEqual({ x: 1004, y: 258 });
  });

  it("coloca la etiqueta debajo del cursor cuando se acerca al borde superior", () => {
    const position = computeTooltipPosition(
      { clientX: 400, clientY: 24 },
      { width: 1280, height: 800 },
      { width: 180, height: 40 }
    );

    expect(position).toEqual({ x: 416, y: 44 });
  });

  it("garantiza un margen mínimo izquierdo en pantallas muy estrechas", () => {
    const position = computeTooltipPosition(
      { clientX: 150, clientY: 200 },
      { width: 280, height: 600 },
      { width: 180, height: 40 }
    );

    expect(position.x).toBeGreaterThanOrEqual(12);
  });
});

