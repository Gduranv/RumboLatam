import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { ResponsiveViewportSwitch } from "./ResponsiveViewportSwitch";

afterEach(() => {
  cleanup();
});

describe("ResponsiveViewportSwitch", () => {
  it("renderiza ambas vistas durante SSR / entornos sin matchMedia", () => {
    const originalMatchMedia = window.matchMedia;
    // @ts-expect-error simula entorno sin matchMedia
    delete window.matchMedia;

    try {
      render(
        <ResponsiveViewportSwitch
          mobile={<div data-testid="mobile-view">Móvil</div>}
          desktop={<div data-testid="desktop-view">Escritorio</div>}
        />
      );

      expect(screen.getByTestId("mobile-view")).toBeInTheDocument();
      expect(screen.getByTestId("desktop-view")).toBeInTheDocument();
    } finally {
      window.matchMedia = originalMatchMedia;
    }
  });

  it("monta únicamente la vista móvil cuando matchMedia matches false", () => {
    const originalMatchMedia = window.matchMedia;
    window.matchMedia = ((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    })) as unknown as typeof window.matchMedia;

    try {
      render(
        <ResponsiveViewportSwitch
          mobile={<div data-testid="mobile-only">Móvil Activo</div>}
          desktop={<div data-testid="desktop-only">Escritorio Inactivo</div>}
        />
      );

      expect(screen.getByTestId("mobile-only")).toBeInTheDocument();
      expect(screen.queryByTestId("desktop-only")).toBeNull();
    } finally {
      window.matchMedia = originalMatchMedia;
    }
  });

  it("monta únicamente la vista de escritorio cuando matchMedia matches true", () => {
    const originalMatchMedia = window.matchMedia;
    window.matchMedia = ((query: string) => ({
      matches: true,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    })) as unknown as typeof window.matchMedia;

    try {
      render(
        <ResponsiveViewportSwitch
          mobile={<div data-testid="mobile-only">Móvil Inactivo</div>}
          desktop={<div data-testid="desktop-only">Escritorio Activo</div>}
        />
      );

      expect(screen.getByTestId("desktop-only")).toBeInTheDocument();
      expect(screen.queryByTestId("mobile-only")).toBeNull();
    } finally {
      window.matchMedia = originalMatchMedia;
    }
  });
});
