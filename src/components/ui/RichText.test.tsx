import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import RichText from "./RichText";

describe("RichText", () => {
  it("renderiza negritas correctamente", () => {
    const { container } = render(<RichText text="Texto con **negrita** y normal" />);
    const strong = container.querySelector("strong");
    expect(strong).not.toBeNull();
    expect(strong?.textContent).toBe("negrita");
  });

  it("renderiza saltos de línea con el caracter de escape \\n", () => {
    const { container } = render(
      <RichText text="**¿Sabías qué?**\nRespuesta después de salto" />
    );
    const brList = container.querySelectorAll("br");
    expect(brList.length).toBe(1);
    expect(container.querySelector("strong")?.textContent).toBe("¿Sabías qué?");
  });

  it("renderiza múltiples saltos de línea consecutivas (párrafo)", () => {
    const { container } = render(
      <RichText text="**¿Pregunta?**\n\nRespuesta en nuevo párrafo" />
    );
    const brList = container.querySelectorAll("br");
    expect(brList.length).toBe(2);
  });

  it("inserta salto de línea automáticamente tras preguntas en negrita sin \\n previo", () => {
    const { container } = render(
      <RichText text="**¿Sabías que en Colombia hay chocolate con queso?** Especialmente en Bogotá..." />
    );
    const brList = container.querySelectorAll("br");
    expect(brList.length).toBe(2);
    expect(container.querySelector("strong")?.textContent).toBe("¿Sabías que en Colombia hay chocolate con queso?");
  });

  it("soporta secuencias literales \\n y etiquetas <br/>", () => {
    const { container: c1 } = render(
      <RichText text={"**Pregunta**\\nRespuesta"} />
    );
    expect(c1.querySelectorAll("br").length).toBe(1);

    const { container: c2 } = render(
      <RichText text={'**Pregunta**"<br/>"Respuesta'} />
    );
    expect(c2.querySelectorAll("br").length).toBe(1);
  });
});
