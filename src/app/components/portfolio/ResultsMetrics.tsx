const kpis = [
  {
    category: "Rendimiento",
    icon: "📈",
    metrics: [
      { value: "+22%", label: "Incremento de rendimiento", sub: "qq/ha promedio · campaña 2024/25" },
      { value: "+18 qq", label: "Por hectárea adicionales", sub: "sobre histórico de la zona" },
    ],
  },
  {
    category: "Ambiental",
    icon: "🌿",
    metrics: [
      { value: "−85%", label: "Reducción de carga orgánica", sub: "en efluentes industriales" },
      { value: "1.200 tn", label: "Residuos valorizados / año", sub: "desviados de disposición final" },
    ],
  },
  {
    category: "Económico",
    icon: "💰",
    metrics: [
      { value: "−40%", label: "Ahorro operativo", sub: "en costos de disposición de residuos" },
      { value: "3× ROI", label: "Retorno estimado", sub: "a 12 meses de implementación" },
    ],
  },
  {
    category: "Regulatorio",
    icon: "📋",
    metrics: [
      { value: "100%", label: "Cumplimiento normativo", sub: "en proyectos certificados" },
      { value: "8", label: "Certificaciones obtenidas", sub: "en últimos 24 meses" },
    ],
  },
];

export function ResultsMetrics() {
  return (
    <section className="py-24 md:py-32 px-6 bg-gray-50">
      <div className="w-full">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block border border-gray-300 px-3 py-1 mb-6">
            <span className="text-gray-400 text-xs font-mono uppercase tracking-widest">08 — Resultados e indicadores</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="text-gray-900 mb-3">Métricas que demuestran el impacto</h2>
              <p className="text-gray-500 leading-relaxed max-w-xl">
                [Descripción — Indicadores documentados en proyectos reales, agrupados por dimensión de impacto.]
              </p>
            </div>
            <p className="text-gray-400 text-xs font-mono flex-shrink-0">
              Datos de proyectos 2022–2025
            </p>
          </div>
        </div>

        {/* KPI grid — 2×2 groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {kpis.map((group) => (
            <div key={group.category} className="bg-white border border-gray-200 rounded-sm overflow-hidden">
              {/* Group header */}
              <div className="bg-gray-900 px-7 py-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-sm flex items-center justify-center text-lg">
                  {group.icon}
                </div>
                <span className="text-white font-semibold text-sm">{group.category}</span>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-px bg-gray-100">
                {group.metrics.map((m) => (
                  <div key={m.label} className="bg-white px-7 py-7">
                    <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 leading-none">{m.value}</div>
                    <div className="text-gray-700 font-medium text-sm mb-1 leading-tight">{m.label}</div>
                    <div className="text-gray-400 text-xs font-mono leading-tight">{m.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Aggregated total bar */}
        <div className="mt-8 bg-white border border-gray-200 rounded-sm px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap gap-8 md:gap-12">
            {[
              { value: "+2.400", label: "proyectos realizados" },
              { value: "800+", label: "clientes atendidos" },
              { value: "15 años", label: "de trayectoria técnica" },
            ].map((s) => (
              <div key={s.label} className="text-center md:text-left">
                <div className="text-2xl font-bold text-gray-900">{s.value}</div>
                <div className="text-gray-400 text-xs font-mono">{s.label}</div>
              </div>
            ))}
          </div>
          <button className="bg-gray-900 text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors flex-shrink-0 whitespace-nowrap">
            Solicitar presupuesto
          </button>
        </div>
      </div>
    </section>
  );
}
