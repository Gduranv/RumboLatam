import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MapCountryTooltip } from "./MapCountryTooltip";
import { useMapTooltip } from "./useMapTooltip";

const TooltipHarness = () => {
  const {
    countryName,
    isVisible,
    tooltipRef,
    handleCountryPointerEnter,
    handleCountryPointerMove,
    handleCountryPointerLeave,
  } = useMapTooltip();

  return (
    <div>
      <button
        type="button"
        data-testid="territory-trigger"
        onPointerEnter={(event) => handleCountryPointerEnter("Venezuela", event)}
        onPointerMove={handleCountryPointerMove}
        onPointerLeave={handleCountryPointerLeave}
      >
        Territorio
      </button>
      <MapCountryTooltip
        countryName={countryName}
        isVisible={isVisible}
        tooltipRef={tooltipRef}
      />
    </div>
  );
};

describe("MapCountryTooltip + useMapTooltip", () => {
  it("permanece oculto inicialmente y aparece con el diseño Cápsula Brújula al hacer hover con ratón", () => {
    render(<TooltipHarness />);

    const trigger = screen.getByTestId("territory-trigger");
    const tooltip = screen.getByTestId("map-country-tooltip");

    expect(tooltip).toHaveAttribute("data-visible", "false");
    expect(tooltip).toHaveAttribute("aria-hidden", "true");

    fireEvent.pointerEnter(trigger, {
      pointerType: "mouse",
      clientX: 300,
      clientY: 250,
    });

    expect(tooltip).toHaveAttribute("data-visible", "true");
    expect(tooltip).toHaveTextContent("Venezuela");
    expect(tooltip.style.transform).toBe("translate3d(316px, 208px, 0)");
  });

  it("actualiza suavemente las coordenadas al mover el cursor y se oculta al salir conservando el último texto para el fade-out", () => {
    render(<TooltipHarness />);

    const trigger = screen.getByTestId("territory-trigger");
    const tooltip = screen.getByTestId("map-country-tooltip");

    fireEvent.pointerEnter(trigger, {
      pointerType: "mouse",
      clientX: 200,
      clientY: 200,
    });
    fireEvent.pointerMove(trigger, {
      pointerType: "mouse",
      clientX: 420,
      clientY: 310,
    });

    expect(tooltip.style.transform).toBe("translate3d(436px, 268px, 0)");

    fireEvent.pointerLeave(trigger, { pointerType: "mouse" });

    expect(tooltip).toHaveAttribute("data-visible", "false");
    expect(tooltip).toHaveTextContent("Venezuela");
  });

  it("ignora eventos táctiles para no dejar etiquetas flotantes pegadas en pantallas móviles", () => {
    render(<TooltipHarness />);

    const trigger = screen.getByTestId("territory-trigger");
    const tooltip = screen.getByTestId("map-country-tooltip");

    fireEvent.pointerEnter(trigger, {
      pointerType: "touch",
      clientX: 180,
      clientY: 220,
    });

    expect(tooltip).toHaveAttribute("data-visible", "false");
  });
});

