"use client";

import Image from "next/image";
import { useState, useRef } from "react";

interface Hotel {
  name: string;
  type: string;
  rating: number;
}

interface MobileHospedajeCardProps {
  hotels: Hotel[];
  images: string[];
}

/** Renderiza estrellas de rating (llenas, medias y vacías) */
const renderStars = (rating: number) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(
        <svg key={i} width="10" height="10" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block mr-0.5">
          <path d="M7.99992 12.0469L3.29158 14.8636L4.54992 9.50525L0.383255 5.86358L5.86659 5.38858L7.99992 0.363586L10.1333 5.38858L15.6166 5.86358L11.4499 9.50525L12.7083 14.8636L7.99992 12.0469Z" fill="#FFF7E2" />
        </svg>
      );
    } else if (rating >= i - 0.5) {
      stars.push(
        <svg key={i} width="10" height="10" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block mr-0.5">
          <path d="M7.99992 12.0469L3.29158 14.8636L4.54992 9.50525L0.383255 5.86358L5.86659 5.38858L7.99992 0.363586V12.0469Z" fill="#FFF7E2" />
          <path d="M7.99992 0.363586L10.1333 5.38858L15.6166 5.86358L11.4499 9.50525L12.7083 14.8636L7.99992 12.0469V0.363586Z" fill="#FFF7E2" fillOpacity="0.3" />
        </svg>
      );
    } else {
      stars.push(
        <svg key={i} width="10" height="10" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block mr-0.5">
          <path d="M7.99992 12.0469L3.29158 14.8636L4.54992 9.50525L0.383255 5.86358L5.86659 5.38858L7.99992 0.363586L10.1333 5.38858L15.6166 5.86358L11.4499 9.50525L12.7083 14.8636L7.99992 12.0469Z" stroke="#FFF7E2" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      );
    }
  }
  return stars;
};

/** Tarjeta semi-cuadrada para los dos primeros hoteles */
const SmallHotelCard = ({ hotel, image }: { hotel: Hotel; image?: string }) => {
  return (
    <div className="bg-[#FF7223] rounded-[14px] p-3 shadow-md flex flex-col">
      <p className="text-white text-[10px] font-sans font-medium leading-tight">
        {hotel.type}
      </p>
      <p className="text-white text-[14px] font-sans font-bold leading-tight">
        {hotel.name}
      </p>
      <div className="flex items-center mt-1 mb-2">
        {renderStars(hotel.rating)}
      </div>
      {image && (
        <div className="relative w-full h-[70px] rounded-[8px] overflow-hidden shadow-sm bg-gray-200">
          <Image src={image} alt={`${hotel.type} ${hotel.name}`} fill className="object-cover" />
        </div>
      )}
    </div>
  );
};

/**
 * Sección de hospedaje para móvil:
 * - Título "Hospedaje" fuera de las cards
 * - 2 cards semi-cuadradas arriba (grid 2 cols)
 * - 1 card rectangular más grande abajo
 * - Ícono hospedaje.png encima de la card inferior, alineado a la izquierda
 */
const MobileHospedajeCard = ({ hotels, images }: MobileHospedajeCardProps) => {
  const topHotels = hotels.slice(0, 2);
  const bottomHotel = hotels[2];

  return (
    <div className="w-full">
      {/* Título fuera de las tarjetas */}
      <h3 className="text-[#13522B] text-[20px] font-bold font-nohemi mb-4 ml-1">
        Hospedaje
      </h3>

      {/* Fila superior: 2 cards semi-cuadradas */}
      <div className="grid grid-cols-2 gap-3 mb-3">
        {topHotels.map((hotel, idx) => (
          <SmallHotelCard key={idx} hotel={hotel} image={images[idx]} />
        ))}
      </div>

      {/* Fila inferior: 1 card rectangular grande con ícono superpuesto */}
      {bottomHotel && (
        <div className="relative">
          {/* Ícono hospedaje flotante, alineado a la izquierda, encima de la card */}
          <div className="absolute top-7 -left-3 z-20 w-[50px] h-[50px] drop-shadow-lg pointer-events-none">
            <Image
              src="/Paises/icon hospedaje.png"
              alt="Icono Hospedaje"
              width={50}
              height={50}
              className="object-contain"
            />
          </div>

          <div className="bg-[#FF7223] rounded-[14px] p-3 pt-4 shadow-md flex flex-row items-center gap-3">
            {/* Info del hotel */}
            <div className="flex-1 ml-10">
              <p className="text-white text-[10px] font-sans font-medium leading-tight">
                {bottomHotel.type}
              </p>
              <p className="text-white text-[14px] font-sans font-bold leading-tight">
                {bottomHotel.name}
              </p>
              <div className="flex items-center mt-1">
                {renderStars(bottomHotel.rating)}
              </div>
            </div>

            {/* Foto rectangular */}
            {images[2] && (
              <div className="relative w-[120px] h-[70px] rounded-[8px] overflow-hidden shadow-sm bg-gray-200 shrink-0">
                <Image src={images[2]} alt={`${bottomHotel.type} ${bottomHotel.name}`} fill className="object-cover" />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileHospedajeCard;
