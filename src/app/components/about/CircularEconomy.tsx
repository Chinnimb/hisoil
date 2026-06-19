const flow = [
  {
    step: "01",
    title: "Residuo",
    icon: "🗑️",
    desc: "[Residuos orgánicos, efluentes y subproductos de producción agroindustrial, ganadera o municipal]",
    examples: ["Efluentes industriales", "RSO municipal", "Subproductos agrícolas"],
  },
  {
    step: "02",
    title: "Tratamiento",
    icon: "⚗️",
    desc: "[Proceso físico, químico o biológico según la naturaleza del residuo y el objetivo de transformación]",
    examples: ["Tratamiento biológico", "Separación de fases", "Estabilización"],
  },
  {
    step: "03",
    title: "Transformación",
    icon: "🔄",
    desc: "[Compostaje, biodigestión, biorremediación o recuperación de nutrientes para generar un nuevo recurso]",
    examples: ["Compostaje", "Biodigestión", "Lixiviados"],
  },
  {
    step: "04",
    title: "Nueva vida",
    icon: "🌾",
    desc: "[El subproducto recuperado vuelve al ciclo productivo como biofertilizante, enmienda o energía]",
    examples: ["Biofertilizante", "Enmienda de suelo", "Biogás"],
  },
];

const metrics = [
  { value: "60%", label: "Residuos reutilizados", sub: "promedio por proyecto" },
  { value: "0", label: "Vertidos sin tratamiento", sub: "en proyectos certificados" },
  { value: "+200 tn", label: "CO₂ eq. evitado", sub: "última campaña relevada" },
];

export function CircularEconomy() {
  return (
    <section className="py-24 md:py-32 bg-oliva">
      <div className="w-full px-6">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-7">
            <div className="inline-block border border-white/20 px-3 py-1 mb-6">
              <span className="text-white/40 text-xs font-mono uppercase tracking-widest">06 — Compromiso ambiental</span>
            </div>
            <h2 className="text-white mb-6">Comprometidos con la economía circular</h2>
            <p className="text-white/45 leading-relaxed text-lg">
              [Descripción — Para Hisoil la economía circular no es un eslogan: es el eje de cada solución que diseñamos. Creemos que cada residuo es una oportunidad, y que el sistema agro-industrial puede ser más eficiente y más justo con el ambiente.]
            </p>
          </div>
          <div className="lg:col-span-5 flex items-end">
            <div className="grid grid-cols-3 gap-px bg-white/10 w-full">
              {metrics.map((m) => (
                <div key={m.label} className="bg-oliva p-6 text-center">
                  <div className="text-2xl font-bold text-white mb-1">{m.value}</div>
                  <div className="text-white/50 text-xs font-semibold mb-0.5 leading-tight">{m.label}</div>
                  <div className="text-white/25 text-[10px] font-mono">{m.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Flow — desktop horizontal, mobile vertical */}
        <div className="hidden md:grid grid-cols-4 gap-px bg-white/10 mb-8">
          {flow.map((f, i) => (
            <div key={f.step} className="bg-oliva p-8 relative group">
              {/* Arrow connector */}
              {i < flow.length - 1 && (
                <div className="absolute top-8 -right-3 z-10 flex items-center">
                  <div className="w-5 h-px bg-white/20" />
                  <div className="w-0 h-0 border-t-4 border-b-4 border-l-4 border-t-transparent border-b-transparent border-l-white/20" />
                </div>
              )}

              {/* Content */}
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-sm flex items-center justify-center text-2xl mb-5">
                {f.icon}
              </div>
              <div className="text-white/20 font-mono font-bold text-3xl mb-2">{f.step}</div>
              <h3 className="text-white text-lg font-semibold mb-3">{f.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed mb-5">{f.desc}</p>

              <div className="space-y-1.5">
                {f.examples.map((ex) => (
                  <div key={ex} className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-white/25 rounded-full" />
                    <span className="text-white/30 text-xs font-mono">{ex}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile vertical */}
        <div className="md:hidden space-y-0">
          {flow.map((f, i) => (
            <div key={f.step} className="flex gap-5">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-white/10 border border-white/20 rounded-sm flex items-center justify-center text-lg flex-shrink-0">
                  {f.icon}
                </div>
                {i < flow.length - 1 && <div className="w-px flex-1 bg-white/10 my-2" style={{ minHeight: 32 }} />}
              </div>
              <div className="pb-8 flex-1">
                <div className="text-white/20 text-xs font-mono mb-1">{f.step}</div>
                <h3 className="text-white font-semibold mb-2">{f.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed mb-3">{f.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {f.examples.map((ex) => (
                    <span key={ex} className="bg-white/5 border border-white/10 text-white/30 text-xs font-mono px-2.5 py-1 rounded-full">{ex}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom supporting text */}
        <div className="border border-white/10 rounded-sm p-8 md:p-10 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <p className="text-white/40 leading-relaxed text-sm">
              [Texto — Descripción del marco de economía circular que aplica Hisoil en sus proyectos: cómo se integra en el diseño de cada solución y qué beneficios genera para el cliente y el ecosistema.]
            </p>
            <p className="text-white/40 leading-relaxed text-sm">
              [Texto — Certificaciones ambientales obtenidas, compromisos medibles asumidos públicamente y alianzas estratégicas con organismos de control y entidades del sector.]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
