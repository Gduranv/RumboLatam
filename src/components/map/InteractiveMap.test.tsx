import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { InteractiveMap } from "./InteractiveMap";

describe("InteractiveMap custom country hover tooltip", () => {
  it("elimina el atributo nativo title de todos los territorios manteniendo sus enlaces accesibles", () => {
    render(<InteractiveMap />);

    const venezuelaLink = screen.getByRole("link", { name: /Venezuela/i });
    const mexicoLink = screen.getByRole("link", { name: /México/i });

    expect(venezuelaLink).not.toHaveAttribute("title");
    expect(mexicoLink).not.toHaveAttribute("title");
    expect(venezuelaLink).toHaveAttribute("href", "/paises/venezuela");
  });

  it("muestra la etiqueta personalizada de Rumbo Latam al pasar el mouse por un territorio y sigue al cursor", () => {
    render(<InteractiveMap />);

    const colombiaLink = screen.getByRole("link", { name: /Colombia/i });
    const tooltip = screen.getByTestId("map-country-tooltip");

    expect(tooltip).toHaveAttribute("data-visible", "false");

    fireEvent.pointerEnter(colombiaLink, {
      pointerType: "mouse",
      clientX: 500,
      clientY: 320,
    });

    expect(tooltip).toHaveAttribute("data-visible", "true");
    expect(tooltip).toHaveTextContent("Colombia");
    expect(tooltip.style.transform).toBe("translate3d(516px, 278px, 0)");

    fireEvent.pointerMove(colombiaLink, {
      pointerType: "mouse",
      clientX: 540,
      clientY: 350,
    });

    expect(tooltip.style.transform).toBe("translate3d(556px, 308px, 0)");

    fireEvent.pointerLeave(colombiaLink, { pointerType: "mouse" });
    expect(tooltip).toHaveAttribute("data-visible", "false");
  });
});

