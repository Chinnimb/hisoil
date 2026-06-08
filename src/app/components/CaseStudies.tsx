import { Link } from 'react-router';

const cases = [
  {
    number: "01",
    client: "Estancia San Jorge",
    location: "Buenos Aires · 200 ha",
    sector: "Soja / Maíz",
    problem: "Alto costo de fertilización química y degradación del suelo en 200 hectáreas. El suelo perdió materia orgánica durante 4 campañas consecutivas.",
    solution: "Compostaje in-situ con residuos del feedlot propio + fertilización orgánica durante 2 campañas.",
    mainResult: "+42%",
    resultLabel: "rendimiento soja",
    secondaryResult: "28 qq/ha promedio alcanzado",
    tags: ["Compost Premium", "Asesoramiento"],
  },
  {
    number: "02",
    client: "Agropecuaria del Norte",
    location: "Santa Fe · Feedlot 5.000 cab.",
    sector: "Ganadería / Residuos",
    problem: "Acumulación de residuos orgánicos del feedlot sin salida productiva. Costos crecientes de gestión y riesgo ambiental.",
    solution: "Sistema de compostaje profesional con valorización como fertilizante para venta y uso propio.",
    mainResult: "$850k",
    resultLabel: "ahorro anual",
    secondaryResult: "2.400 toneladas procesadas por campaña",
    tags: ["Compostaje", "Residuos"],
  },
  {
    number: "03",
    client: "Productores Asociados",
    location: "Córdoba · 800 ha",
    sector: "Maíz",
    problem: "Baja productividad en maíz. Suelo compactado, pH alto y sin plan técnico estructurado desde hace 3 años.",
    solution: "Análisis de suelo completo + plan de fertilización con bioestimulantes + acompañamiento agronómico en campaña.",
    mainResult: "+38%",
    resultLabel: "productividad maíz",
    secondaryResult: "110 qq/ha alcanzados en 1 campaña",
    tags: ["Bioestimulante", "Diagnóstico"],
  },
];

export function CaseStudies() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="inline-block border border-gray-300 px-3 py-1 mb-6">
              <span className="text-gray-400 text-xs font-mono uppercase tracking-widest">Casos de éxito</span>
            </div>
            <h2 className="text-gray-900 max-w-lg">Resultados reales en campo. Documentados.</h2>
          </div>
          <Link to="/portfolio">
            <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors flex-shrink-0">
              Ver todos los casos →
            </button>
          </Link>
        </div>

        {/* Cases — stacked editorial cards */}
        <div className="space-y-4">
          {cases.map((c, i) => (
            <div
              key={c.number}
              className="grid grid-cols-1 lg:grid-cols-12 border border-gray-200 rounded-sm overflow-hidden hover:border-gray-400 transition-colors group"
            >
              {/* Result block — left */}
              <div className={`lg:col-span-3 p-8 flex flex-col justify-between ${i % 2 === 1 ? "bg-gray-950" : "bg-gray-50"}`}>
                <div>
                  <div className={`text-xs font-mono uppercase tracking-widest mb-4 ${i % 2 === 1 ? "text-white/30" : "text-gray-400"}`}>
                    {c.number} · Resultado
                  </div>
                  <div className={`font-bold leading-none mb-2 ${i % 2 === 1 ? "text-white" : "text-gray-900"}`}
                    style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
                    {c.mainResult}
                  </div>
                  <div className={`font-medium mb-1 ${i % 2 === 1 ? "text-white/70" : "text-gray-700"}`}>
                    {c.resultLabel}
                  </div>
                  <div className={`text-xs font-mono leading-relaxed ${i % 2 === 1 ? "text-white/30" : "text-gray-400"}`}>
                    {c.secondaryResult}
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-6">
                  {c.tags.map((t) => (
                    <span key={t} className={`text-[10px] font-mono px-2.5 py-1 rounded-full ${
                      i % 2 === 1 ? "bg-white/10 text-white/50" : "bg-white border border-gray-200 text-gray-500"
                    }`}>{t}</span>
                  ))}
                </div>
              </div>

              {/* Case detail — center */}
              <div className="lg:col-span-6 p-8 bg-white border-t lg:border-t-0 lg:border-l border-gray-100">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="text-gray-900 font-bold text-lg">{c.client}</div>
                    <div className="text-gray-400 text-xs font-mono">{c.location} · {c.sector}</div>
                  </div>
                </div>

                <div className="space-y-5">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                      <span className="text-gray-500 text-xs font-mono uppercase tracking-widest">Problema</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed pl-3.5">{c.problem}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-1.5 h-1.5 bg-gray-600 rounded-full" />
                      <span className="text-gray-500 text-xs font-mono uppercase tracking-widest">Solución</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed pl-3.5">{c.solution}</p>
                  </div>
                </div>
              </div>

              {/* Visual placeholder — right */}
              <div className="hidden lg:flex lg:col-span-3 bg-gray-100 border-l border-gray-200 items-center justify-center relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `repeating-linear-gradient(-10deg, #9ca3af 0, #9ca3af 1px, transparent 0, transparent 20px)`,
                  }}
                />
                <div className="text-center relative z-10">
                  <div className="text-gray-300 text-[10px] font-mono uppercase tracking-widest mb-1">Imagen del caso</div>
                  <div className="text-gray-200 text-[9px] font-mono">Campo · Proceso · Resultado</div>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="text-gray-300 group-hover:text-gray-600 transition-colors text-xs font-mono">Ver caso completo →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
