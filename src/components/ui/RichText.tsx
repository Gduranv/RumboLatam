import React, { Fragment } from "react";

interface RichTextProps {
  /** Texto con negritas marcadas como **así** y saltos de línea (\n, <br/>). */
  text: string;
}

/**
 * Normaliza secuencias de escape de salto de línea (\n, \r\n), etiquetas HTML <br>
 * y saltos de línea tras preguntas destacadas en negrita (**¿...?**).
 */
const normalizeLineBreaks = (content: string): string => {
  return content
    .replace(/\\r\\n/g, "\n")
    .replace(/\r\n/g, "\n")
    .replace(/["']?<br\s*\/?>["']?/gi, "\n")
    .replace(/\\n/g, "\n")
    .replace(/(\*\*[^*]+\?\*\*)[ \t]+(?!\n)/g, "$1\n\n");
};

/**
 * Renderiza los segmentos de una línea aplicando negritas a los fragmentos delimitados por **.
 */
const renderInlineBold = (segment: string) => {
  const parts = segment.split(/(\*\*[^*]+\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    return <span key={index}>{part}</span>;
  });
};

/**
 * Renderiza texto enriquecido con soporte para negritas (**así**) y saltos de línea (\n, <br/>).
 */
const RichText = ({ text }: RichTextProps) => {
  const normalizedText = normalizeLineBreaks(text);
  const lines = normalizedText.split("\n");

  return (
    <>
      {lines.map((line, lineIndex) => (
        <Fragment key={lineIndex}>
          {lineIndex > 0 && <br />}
          {renderInlineBold(line)}
        </Fragment>
      ))}
    </>
  );
};

export default RichText;
