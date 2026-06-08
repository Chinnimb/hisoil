export function PortfolioHero() {
  const stats = [
    { value: "+2.400", label: "proyectos" },
    { value: "15+", label: "años" },
    { value: "800+", label: "clientes" },
    { value: "12", label: "provincias" },
  ];

  return (
    <section className="bg-gray-950 min-h-screen flex flex-col">
      {/* Full-bleed image mosaic — takes most of the viewport */}
      <div className="flex-1 grid grid-cols-12 grid-rows-[1fr_1fr] gap-1.5 p-1.5 min-h-[80vh]">

        {/* Hero image — large left */}
        <div className="col-span-12 md:col-span-7 row-span-2 bg-gray-800 relative overflow-hidden group cursor-pointer">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 border-2 border-dashed border-white/20 rounded-sm mx-auto mb-3 flex items-center justify-center">
                <span className="text-white/20 text-4xl">📷</span>
              </div>
              <p className="text-white/20 text-xs font-mono uppercase tracking-widest">Imagen principal — 900×600px</p>
            </div>
          </div>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent" />
          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
            <span className="inline-block bg-white/10 border border-white/20 text-white/60 text-xs font-mono px-3 py-1 rounded-full mb-4">
              Agricultura · 2024
            </span>
            <h3 className="text-white text-xl md:text-2xl font-semibold leading-snug mb-2">
              Recuperación de suelos degradados en zona pampeana
            </h3>
            <div className="flex items-center gap-3">
              <span className="text-white/40 text-sm">Pool de siembra — 4.800 ha</span>
              <span className="bg-white text-gray-900 text-xs font-bold px-3 py-1 rounded-full">+22% MO en suelo</span>
            </div>
          </div>
        </div>

        {/* Top-right image */}
        <div className="col-span-12 md:col-span-5 bg-gray-700 relative overflow-hidden group cursor-pointer">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-12 h-12 border border-dashed border-white/20 rounded-sm mx-auto mb-2 flex items-center justify-center">
                <span className="text-white/20 text-xl">📷</span>
              </div>
              <p className="text-white/15 text-[10px] font-mono">Imagen proyecto</p>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <span className="bg-white/10 border border-white/20 text-white/50 text-[10px] font-mono px-2.5 py-1 rounded-full">Compostaje</span>
            <p className="text-white/70 text-sm font-medium mt-2 leading-snug">Planta de compostaje — Frigorífico del Norte</p>
            <span className="text-white/40 text-xs font-mono">800 tn/mes valorizadas</span>
          </div>
        </div>

        {/* Bottom-right — two micro images */}
        <div className="col-span-12 md:col-span-5 grid grid-cols-2 gap-1.5">
          {[
            { label: "Tratamiento de residuos", client: "Empresa textil", result: "100% norma" },
            { label: "Industria", client: "Planta láctea", result: "−85% carga" },
          ].map((item) => (
            <div key={item.label} className="bg-gray-700 relative overflow-hidden cursor-pointer group">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-3">
                  <span className="text-white/15 text-2xl">📷</span>
                  <p className="text-white/10 text-[9px] font-mono mt-1">Imagen</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3.5">
                <p className="text-white/50 text-[10px] font-mono mb-1">{item.label}</p>
                <p className="text-white/70 text-xs font-medium leading-tight">{item.client}</p>
                <span className="text-white/35 text-[10px] font-mono">{item.result}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar — headline + CTAs + stats */}
      <div className="border-t border-white/10 px-6 md:px-12 lg:px-20 py-8 md:py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left — headline */}
          <div className="lg:col-span-5">
            <div className="inline-block border border-white/20 px-3 py-1 mb-4">
              <span className="text-white/40 text-xs font-mono uppercase tracking-[0.2em]">Portfolio</span>
            </div>
            <h1 className="text-white leading-tight mb-3">
              Casos reales.<br />
              <span className="text-white/40">Resultados comprobados.</span>
            </h1>
            <p className="text-white/40 leading-relaxed max-w-md">
              [Subtítulo — Proyectos documentados con métricas reales para productores, empresas e industrias.]
            </p>
          </div>

          {/* Center — stats */}
          <div className="lg:col-span-4 grid grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-xl font-bold text-white">{s.value}</div>
                <div className="text-white/30 text-xs font-mono">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Right — CTAs */}
          <div className="lg:col-span-3 flex gap-3 justify-start lg:justify-end">
            <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors whitespace-nowrap">
              Ver proyectos
            </button>
            <button className="border border-white/30 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-white/10 transition-colors whitespace-nowrap">
              Presupuesto
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
