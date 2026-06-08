const kpis = [
  { value: "98%", label: "Tasa de tratamiento efectivo", sub: "en proyectos certificados" },
  { value: "−60%", label: "Reducción de pasivos ambientales", sub: "promedio por cliente" },
  { value: "3x ROI", label: "Retorno operativo estimado", sub: "a 12 meses de implementación" },
];

export function ServiceOverview() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-sm overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=680&q=80&fit=crop"
                alt="Proceso de tratamiento de residuos orgánicos"
                className="w-full h-full object-cover grayscale"
              />
            </div>
            {/* Accent */}
            <div className="absolute -bottom-4 -left-4 w-20 h-20 border-l-2 border-b-2 border-gray-200" />
          </div>

          {/* Right — content */}
          <div>
            <div className="inline-block border border-gray-300 px-3 py-1 mb-6">
              <span className="text-gray-500 text-xs font-mono uppercase tracking-widest">02 — Servicio principal</span>
            </div>

            <h2 className="text-gray-900 mb-6">Tratamiento de Residuos</h2>

            <div className="space-y-4 mb-10">
              <div>
                <h4 className="text-gray-700 font-semibold text-sm uppercase tracking-wide mb-1">¿Qué es?</h4>
                <p className="text-gray-500 leading-relaxed text-sm">
                  [Descripción del servicio — qué procesos incluye, tecnologías utilizadas y
                  alcance del tratamiento ofrecido por Hisoil.]
                </p>
              </div>
              <div>
                <h4 className="text-gray-700 font-semibold text-sm uppercase tracking-wide mb-1">¿Qué problemas resuelve?</h4>
                <p className="text-gray-500 leading-relaxed text-sm">
                  [Problemas que resuelve — acumulación de efluentes, incumplimiento normativo,
                  costos de disposición, riesgo ambiental y sanitario.]
                </p>
              </div>
              <div>
                <h4 className="text-gray-700 font-semibold text-sm uppercase tracking-wide mb-1">Impacto ambiental</h4>
                <p className="text-gray-500 leading-relaxed text-sm">
                  [Impacto ambiental — reducción de contaminación, recuperación de suelos y agua,
                  cumplimiento de normativas ambientales vigentes.]
                </p>
              </div>
              <div>
                <h4 className="text-gray-700 font-semibold text-sm uppercase tracking-wide mb-1">Impacto en el negocio</h4>
                <p className="text-gray-500 leading-relaxed text-sm">
                  [Impacto en el negocio — ahorro en costos de disposición, evitar multas y
                  sanciones, mejora de imagen corporativa y habilitación de mercados.]
                </p>
              </div>
            </div>

            {/* KPI cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {kpis.map((kpi) => (
                <div key={kpi.label} className="bg-gray-50 border border-gray-200 p-5 rounded-sm">
                  <div className="text-2xl font-bold text-gray-900 mb-1">{kpi.value}</div>
                  <div className="text-xs font-medium text-gray-600 leading-tight mb-1">{kpi.label}</div>
                  <div className="text-xs text-gray-400 font-mono">{kpi.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
