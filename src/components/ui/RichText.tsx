interface RichTextProps {
  /** Texto con negritas marcadas como **así**. */
  text: string;
}

/**
 * Renderiza el subconjunto de markdown que usa el contenido: sólo negritas
 * (`**así**`). Es el mismo render en desktop y en móvil, así que el texto se
 * escribe una sola vez en `src/data` y ambas versiones lo muestran igual.
 */
export default function RichText({ text }: RichTextProps) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return (
    <>
      {parts.map((part, index) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={index}>{part.slice(2, -2)}</strong>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </>
  );
}
