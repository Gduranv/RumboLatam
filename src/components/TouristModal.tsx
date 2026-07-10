"use client";

import Image from "next/image";

interface TouristModalProps {
  countryName: string;
  places: string[];
  onClose: () => void;
}

export const TouristModal = ({ countryName, places, onClose }: TouristModalProps) => {
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity p-4"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-3xl shadow-2xl p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          onClick={onClose}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-white mb-8">
          Descubre {countryName}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {places.map((place, idx) => (
            <div key={idx} className="flex flex-col items-center gap-4 group">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md bg-slate-100 dark:bg-slate-800">
                <img
                  src={place}
                  alt={`Lugar turístico de ${countryName}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
