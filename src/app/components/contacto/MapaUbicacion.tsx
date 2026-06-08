export function MapaUbicacion() {
  return (
    <section className="py-0 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-0 pb-0">
        {/* Section label */}
        <div className="py-10 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="inline-block border border-gray-300 px-3 py-1">
              <span className="text-gray-400 text-xs font-mono uppercase tracking-widest">05 — Ubicación</span>
            </div>
            <div className="text-gray-600 text-sm">
              [Calle y número], [Localidad], [Provincia]
            </div>
          </div>
          <button className="border border-gray-400 text-gray-600 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-white transition-colors flex items-center gap-2">
            <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            Cómo llegar
          </button>
        </div>
      </div>

      {/* Map placeholder — full bleed */}
      <div className="relative w-full bg-gray-200 border-y border-gray-300" style={{ height: 380 }}>
        {/* Grid overlay to suggest a map */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, #9ca3af 0, #9ca3af 1px, transparent 0, transparent 60px),
              repeating-linear-gradient(90deg, #9ca3af 0, #9ca3af 1px, transparent 0, transparent 60px)
            `,
          }}
        />

        {/* Simulated streets */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute bg-white" style={{ top: "35%", left: 0, right: 0, height: 8 }} />
          <div className="absolute bg-white" style={{ top: "60%", left: 0, right: 0, height: 4 }} />
          <div className="absolute bg-white" style={{ left: "30%", top: 0, bottom: 0, width: 8 }} />
          <div className="absolute bg-white" style={{ left: "65%", top: 0, bottom: 0, width: 4 }} />
        </div>

        {/* Pin */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full flex flex-col items-center">
          <div className="bg-gray-900 text-white rounded-sm px-3 py-1.5 text-xs font-mono shadow-lg mb-1 whitespace-nowrap">
            Hisoil · [Localidad]
          </div>
          <div className="w-3 h-3 bg-gray-900 rotate-45 -mt-1.5" />
        </div>

        {/* Map label */}
        <div className="absolute bottom-4 right-4 bg-white/80 border border-gray-300 rounded-sm px-3 py-1.5">
          <span className="text-gray-400 text-xs font-mono">Google Maps · placeholder</span>
        </div>
      </div>
    </section>
  );
}
