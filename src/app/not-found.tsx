import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4 bg-[#FDF9EC] px-6 text-center">
      <h1 className="font-nohemi text-[120px] font-bold leading-none text-[#FF7223]">404</h1>
      <p className="font-nohemi text-2xl font-bold text-[#13522B]">
        Página no encontrada
      </p>
      <p className="text-[#13522B]/70 max-w-sm">
        El destino que buscas no existe o ya no está en la ruta.
      </p>
      <Link
        href="/"
        className="mt-2 rounded-full bg-[#FF7223] px-8 py-3 font-nohemi font-bold text-white transition-transform hover:scale-105"
      >
        Volver al inicio
      </Link>
    </main>
  );
}