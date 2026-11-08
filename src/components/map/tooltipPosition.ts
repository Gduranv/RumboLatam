export interface CursorPoint {
  clientX: number;
  clientY: number;
}

export interface ViewportSize {
  width: number;
  height: number;
}

export interface TooltipDimensions {
  width: number;
  height: number;
}

export interface TooltipCoordinates {
  x: number;
  y: number;
}

const DEFAULT_TOOLTIP_DIMENSIONS: TooltipDimensions = {
  width: 190,
  height: 42,
};

const CURSOR_OFFSET_X = 16;
const CURSOR_OFFSET_Y = 42;
const CURSOR_FLIP_OFFSET_Y = 20;
const VIEWPORT_PADDING = 12;

/**
 * Calcula la coordenada horizontal evitando que el tooltip rebase los márgenes laterales de la pantalla.
 */
const resolveHorizontalCoordinate = (
  clientX: number,
  viewportWidth: number,
  tooltipWidth: number
): number => {
  const preferredX = clientX + CURSOR_OFFSET_X;
  const maxRightX = viewportWidth - VIEWPORT_PADDING;

  if (preferredX + tooltipWidth > maxRightX) {
    const flippedX = clientX - tooltipWidth - CURSOR_OFFSET_X;
    return Math.max(VIEWPORT_PADDING, flippedX);
  }

  return Math.max(VIEWPORT_PADDING, preferredX);
};

/**
 * Calcula la coordenada vertical colocando el tooltip debajo del puntero cuando se acerca al borde superior.
 */
const resolveVerticalCoordinate = (
  clientY: number,
  viewportHeight: number,
  tooltipHeight: number
): number => {
  const preferredY = clientY - CURSOR_OFFSET_Y;

  if (preferredY < VIEWPORT_PADDING) {
    return Math.min(
      viewportHeight - tooltipHeight - VIEWPORT_PADDING,
      clientY + CURSOR_FLIP_OFFSET_Y
    );
  }

  return Math.min(viewportHeight - tooltipHeight - VIEWPORT_PADDING, preferredY);
};

/**
 * Obtiene la posición final (x, y) en coordenadas de ventana para la etiqueta flotante del mapa.
 */
export const computeTooltipPosition = (
  cursor: CursorPoint,
  viewport: ViewportSize,
  dimensions: TooltipDimensions = DEFAULT_TOOLTIP_DIMENSIONS
): TooltipCoordinates => ({
  x: resolveHorizontalCoordinate(cursor.clientX, viewport.width, dimensions.width),
  y: resolveVerticalCoordinate(cursor.clientY, viewport.height, dimensions.height),
});

