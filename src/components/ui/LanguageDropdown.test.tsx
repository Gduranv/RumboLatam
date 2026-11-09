// @vitest-environment jsdom
import React from "react";
import { describe, expect, it, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { LocaleProvider, useLocale } from "@/i18n";
import { LanguageDropdown } from "./LanguageDropdown";

let mockedPathname = "/";

vi.mock("next/navigation", () => ({
  usePathname: () => mockedPathname,
}));

/**
 * Componente espía para verificar el idioma activo desde las pruebas.
 */
const LocaleProbe = () => {
  const { locale } = useLocale();
  return <span data-testid="active-locale">{locale}</span>;
};

describe("LanguageDropdown", () => {
  beforeEach(() => {
    window.localStorage.clear();
    mockedPathname = "/";
  });

  it("NO se renderiza en la página Home ('/')", () => {
    mockedPathname = "/";
    const { container } = render(
      <LocaleProvider>
        <LanguageDropdown />
      </LocaleProvider>
    );

    expect(container.firstChild).toBeNull();
    expect(screen.queryByRole("button")).toBeNull();
  });

  it("se renderiza en páginas de países, destinos, curiosidades y nosotras", () => {
    const internalRoutes = [
      "/paises/venezuela",
      "/destinos/canaima",
      "/paises/venezuela/curiosidades",
      "/nosotras",
    ];

    for (const route of internalRoutes) {
      mockedPathname = route;
      const { unmount } = render(
        <LocaleProvider>
          <LanguageDropdown />
        </LocaleProvider>
      );

      const trigger = screen.getByTestId("language-dropdown-trigger");
      expect(trigger).toBeDefined();
      expect(trigger.textContent).toContain("ES");
      unmount();
    }
  });

  it("despliega el menú al hacer clic, cambia el idioma a EN o PT y cierra el menú", () => {
    mockedPathname = "/paises/venezuela";
    render(
      <LocaleProvider>
        <LocaleProbe />
        <LanguageDropdown />
      </LocaleProvider>
    );

    const trigger = screen.getByTestId("language-dropdown-trigger");
    expect(screen.queryByRole("menu")).toBeNull();

    fireEvent.click(trigger);
    expect(screen.getByRole("menu")).toBeDefined();
    expect(screen.getByText("Español")).toBeDefined();
    expect(screen.getByText("English")).toBeDefined();
    expect(screen.getByText("Português")).toBeDefined();

    fireEvent.click(screen.getByText("English"));
    expect(screen.getByTestId("active-locale").textContent).toBe("en");
    expect(trigger.textContent).toContain("EN");
    expect(screen.queryByRole("menu")).toBeNull();

    fireEvent.click(trigger);
    fireEvent.click(screen.getByText("Português"));
    expect(screen.getByTestId("active-locale").textContent).toBe("pt");
    expect(trigger.textContent).toContain("PT");
    expect(screen.queryByRole("menu")).toBeNull();
  });

  it("cierra el menú al presionar Escape o hacer clic fuera del componente", () => {
    mockedPathname = "/destinos/canaima";
    render(
      <LocaleProvider>
        <div data-testid="outside-area">Outside</div>
        <LanguageDropdown />
      </LocaleProvider>
    );

    const trigger = screen.getByTestId("language-dropdown-trigger");
    fireEvent.click(trigger);
    expect(screen.getByRole("menu")).toBeDefined();

    fireEvent.keyDown(document, { key: "Escape" });
    expect(screen.queryByRole("menu")).toBeNull();

    fireEvent.click(trigger);
    expect(screen.getByRole("menu")).toBeDefined();

    fireEvent.mouseDown(screen.getByTestId("outside-area"));
    expect(screen.queryByRole("menu")).toBeNull();
  });
});

