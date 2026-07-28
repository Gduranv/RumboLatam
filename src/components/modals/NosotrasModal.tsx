"use client";

interface NosotrasModalProps {
  onClose: () => void;
}

export const NosotrasModal = ({ onClose }: NosotrasModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      <div className="relative bg-white dark:bg-slate-800 rounded-3xl p-6 md:p-10 max-w-2xl w-full shadow-2xl flex flex-col items-center animate-in fade-in zoom-in duration-300 max-h-[90vh] overflow-y-auto">

        <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-md mb-6 bg-slate-100 dark:bg-slate-800 flex-shrink-0">
          <img
            src="/OtrosRecursos/Nosotras.png"
            alt="Nosotras - Rumbo Latam"
            className="w-full h-full object-cover object-[center_20%]"
          />
        </div>

        <div className="flex-1 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-orange-500 mb-4 font-sans tracking-tight">
            Nosotras
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
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
