const caseImgs = [
  "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=300&q=70&fit=crop",
  "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=300&q=70&fit=crop",
  "https://images.unsplash.com/photo-1651328846832-d1ab8725bf24?w=300&q=70&fit=crop",
];

const cases = [
  {
    number: "01",
    client: "Empresa agroindustrial del NEA",
    sector: "Procesamiento de aceite de soja",
    challenge:
      "[Desafío — Efluentes con alta carga de aceites y sólidos suspendidos, incumplimiento de normativa provincial y riesgo de clausura operativa.]",
    solution:
      "[Solución — Diseño e implementación de trampa de grasas, laguna anaerobia y sistema de riego controlado de efluentes tratados.]",
    result: "−85% carga contaminante",
    badge: "Efluentes industriales",
  },
  {
    number: "02",
    client: "Pool de siembra — 12.000 ha",
    sector: "Soja, maíz y girasol",
    challenge:
      "[Desafío — Baja eficiencia de fertilización nitrogenada, costo creciente de insumos y deterioro de la estructura del suelo por labranza intensiva.]",
    solution:
      "[Solución — Diagnóstico de suelo, ajuste de plan de fertilización con bioinsumos complementarios y plan de rotación para recuperación de materia orgánica.]",
    result: "+22% rendimiento en soja",
    badge: "Nutrición de cultivos",
  },
  {
    number: "03",
    client: "Municipio de [Región]",
    sector: "Gestión de RSU y pasivos",
    challenge:
      "[Desafío — Relleno sanitario colmatado sin plan de cierre, contaminación de agua subterránea y presión vecinal y periodística.]",
    solution:
      "[Solución — EIA, diseño del plan de cierre, gestión de permisos ante organismo ambiental y coordinación con municipio para comunicación pública.]",
    result: "Plan aprobado — 8 meses",
    badge: "Remediación ambiental",
  },
];

export function RelatedCaseStudies() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-16 bg-white">
      <div className="max-w-[1600px] mx-auto w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="inline-block border border-gray-300 px-3 py-1 mb-6">
              <span className="text-gray-500 text-xs font-mono uppercase tracking-widest">09 — Casos de estudio</span>
            </div>
            <h2 className="text-gray-900">Resultados en campo</h2>
          </div>
          <button className="self-start md:self-auto text-gray-600 border border-gray-300 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors whitespace-nowrap">
            Ver todos los casos →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((c) => (
            <div key={c.number} className="border border-gray-200 rounded-sm overflow-hidden flex flex-col">
              {/* Header */}
              <div className="bg-gray-50 border-b border-gray-200 px-6 py-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-gray-200 font-bold font-mono text-4xl">{c.number}</span>
                  <span className="text-xs font-mono text-gray-400 border border-gray-200 bg-white px-2.5 py-1 rounded-full">
                    {c.badge}
                  </span>
                </div>
                <div className="w-full h-28 rounded-sm overflow-hidden mb-3">
                  <img
                    src={caseImgs[parseInt(c.number) - 1]}
                    alt={c.client}
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                <div className="font-semibold text-gray-800 text-sm">{c.client}</div>
                <div className="text-xs text-gray-400 font-mono mt-0.5">{c.sector}</div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 space-y-4">
                <div>
                  <div className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-1">Desafío</div>
                  <p className="text-gray-600 text-sm leading-relaxed">{c.challenge}</p>
                </div>
                <div>
                  <div className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-1">Solución</div>
                  <p className="text-gray-600 text-sm leading-relaxed">{c.solution}</p>
                </div>
              </div>

              {/* Result */}
              <div className="bg-gray-900 text-white px-6 py-5 flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-1">Resultado</div>
                  <div className="font-bold text-lg">{c.result}</div>
                </div>
                <button className="border border-white/20 text-white/60 text-xs px-3 py-2 rounded-full hover:bg-white/10 transition-colors">
                  Ver caso →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
