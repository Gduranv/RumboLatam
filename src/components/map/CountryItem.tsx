"use client";

interface CountryItemProps {
  id: string;
  name: string;
  svgPath: string;
  flagPath?: string;
  position: { top: string; left: string; width: string };
  onClick: () => void;
}

export const CountryItem = ({
  id,
  name,
  svgPath,
  flagPath,
  flagPosition,
  places,
  position,
  onClick,
}: any) => {
  return (
    <div
      className="absolute group cursor-pointer"
      style={{
        top: position.top,
        left: position.left,
        width: position.width,
      }}
      onClick={onClick}
      title={name}
    >
      {/* Contenedor del País - Escala al hacer hover pero mantiene las posiciones relativas */}
      <div className="relative w-full h-full transition-transform duration-300 hover:scale-[1.03] hover:z-20">
        {/* SVG del País */}
        <img
          src={svgPath}
          alt={`Mapa de ${name}`}
          className="w-full h-auto drop-shadow-sm transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(42,170,212,0.6)]"
        />

        {/* Renderizado de Lugares Ilustrados (Places) sobre el mapa */}
        {places && places.map((place: any, index: number) => (
          <img
            key={index}
            src={place.path}
            alt={`Lugar turístico ${index + 1} de ${name}`}
            className={`absolute drop-shadow-md transition-transform duration-300 z-10 max-w-none ${id === 'repdominicana' ? 'pointer-events-auto cursor-pointer' : 'pointer-events-none'}`}
            style={{
              top: place.position.top,
              left: place.position.left,
              width: place.position.width,
              height: place.position.height,
            }}
          />
        ))}

        {/* Bandera Flotante con tamaño exacto 34x36 */}
        {flagPath && flagPosition && (
          <div 
            className="absolute rounded-full overflow-hidden shadow-lg border-2 border-white bg-white transition-transform duration-300 group-hover:scale-125 group-hover:-translate-y-2 z-20 max-w-none"
            style={{
              top: flagPosition.top,
              left: flagPosition.left,
              width: '34px',
              height: '36px',
            }}
          >
            <img
              src={flagPath}
              alt={`Bandera de ${name}`}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
};
