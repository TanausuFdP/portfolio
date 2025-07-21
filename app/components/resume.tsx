"use client";

export default function Resume() {
  return (
    <div className="max-w-[56rem] mx-auto mt-16">
      <div className="flex gap-20 justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="w-20 h-20 bg-orange-500 flex items-center justify-center rounded-full">
            <span className="text-2xl font-bold text-white">4+</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-semibold">Años de</span>
            <span className="font-semibold text-orange-500">experiencia</span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="w-20 h-20 bg-orange-500 flex items-center justify-center rounded-full">
            <span className="text-2xl font-bold text-white">6</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-semibold">Involucrado en</span>
            <span className="font-semibold text-orange-500">
              proyectos reales
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="w-20 h-20 bg-orange-500 flex items-center justify-center rounded-full">
            <span className="text-4xl font-semibold text-white">∞</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-semibold">Usuarios</span>
            <span className="font-semibold text-orange-500">satisfechos</span>
          </div>
        </div>
      </div>
    </div>
  );
}
