"use client";

interface ProjectModalProps {
  onClose: () => void;
}

export const ProjectModal = ({ onClose }: ProjectModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      <div className="relative bg-white dark:bg-slate-800 rounded-3xl p-6 md:p-10 max-w-2xl w-full shadow-2xl flex flex-col items-center animate-in fade-in zoom-in duration-300 max-h-[90vh] overflow-y-auto">
        
        <div className="w-full rounded-2xl overflow-hidden shadow-md mb-6 bg-slate-100 dark:bg-slate-800 flex justify-center p-4">
          <img
            src="/OtrosRecursos/ProjectBanner.png"
            alt="Proyecto Rumbo Latam"
            className="w-full h-auto max-h-[400px] object-contain"
          />
        </div>

        <div className="flex-1 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-orange-500 mb-4 font-sans tracking-tight">
            El Proyecto
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.
          </p>

          <button
            onClick={onClose}
            className="px-8 py-3 bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
