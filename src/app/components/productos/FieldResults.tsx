const productImgs: Record<string, string> = {
  "Fertilizante": "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=80&q=70&fit=crop",
  "Bioestimulante": "https://images.unsplash.com/photo-1458014854819-1a40aa70211c?w=80&q=70&fit=crop",
  "Compost": "https://images.unsplash.com/photo-1613036582025-ba1d4ccb3226?w=80&q=70&fit=crop",
};

const results = [
  {
    number: "01",
    product: "[Nombre del Producto 01]",
    category: "Fertilizante",
    client: "Productor — 3.200 ha, Córdoba",
    problem:
      "[Problema — Baja eficiencia en la absorción de nitrógeno en soja de segunda, generando merma de rendimiento respecto a histórico de la zona.]",
    solution:
      "[Solución — Aplicación en V3 de fertilizante líquido combinado con inoculante rizobiano. Monitoreo semanal con sensores y ajuste de dosis en V5.]",
    result: "+18 qq/ha promedio",
    resultSub: "Campaña 2024/25 — 3 lotes piloto",
  },
  {
    number: "02",
    product: "[Nombre del Producto 02]",
    category: "Bioestimulante",
    client: "Empresa hortícola — 85 ha, Buenos Aires",
    problem:
      "[Problema — Alta mortalidad en implantación de trasplante de tomate bajo cubierta. Raíces débiles y lenta recuperación post-trasplante.]",
    solution:
      "[Solución — Aplicación de bioestimulante radicular en bandeja + riego de establecimiento. Evaluación de prendimiento a los 7 y 14 días.]",
    result: "−42% mortalidad implantación",
    resultSub: "Ciclos de otoño-invierno · 3 temporadas",
  },
  {
    number: "03",
    product: "[Nombre del Producto 03]",
    category: "Compost",
    client: "Municipio — gestión de RSO, Santa Fe",
    problem:
      "[Problema — Suelo municipal degradado por años de monocultivo. MO < 1,2% y estructura laminar. Objetivo: recuperar productividad para arrendamiento.]",
    solution:
      "[Solución — Aplicación de compost certificado 4 tn/ha + enmienda calcárea + inoculante biológico. Análisis pre y post a los 6 meses.]",
    result: "+0,8% materia orgánica",
    resultSub: "Medición a 6 meses post-aplicación",
  },
];

export function FieldResults() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <div className="inline-block border border-gray-300 px-3 py-1 mb-6">
              <span className="text-gray-500 text-xs font-mono uppercase tracking-widest">08 — Resultados en campo</span>
            </div>
            <h2 className="text-gray-900 mb-3">Productos con resultados comprobados</h2>
            <p className="text-gray-500 leading-relaxed">
              [Descripción — Casos documentados con datos reales de rendimiento y métricas de impacto verificadas por el equipo técnico de Hisoil.]
            </p>
          </div>
          <button className="self-start md:self-auto border border-gray-300 text-gray-500 px-5 py-2.5 rounded-full text-sm font-mono hover:bg-gray-50 transition-colors whitespace-nowrap">
            Ver todos los casos →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {results.map((r) => (
            <div key={r.number} className="bg-white border border-gray-200 rounded-sm overflow-hidden flex flex-col">
              {/* Card top */}
              <div className="bg-gray-50 border-b border-gray-200 px-7 py-6">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-gray-200 font-bold font-mono text-5xl leading-none">{r.number}</span>
                  <span className="text-xs font-mono text-gray-400 border border-gray-200 bg-white px-2.5 py-1 rounded-full">
                    {r.category}
                  </span>
                </div>
                {/* Product ref */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-12 bg-gray-200 rounded-sm overflow-hidden flex-shrink-0">
                    <img
                      src={productImgs[r.category] ?? productImgs["Fertilizante"]}
                      alt={r.product}
                      className="w-full h-full object-cover grayscale"
                    />
                  </div>
                  <div>
                    <div className="text-gray-800 text-sm font-semibold">{r.product}</div>
                    <div className="text-gray-400 text-xs font-mono mt-0.5">{r.client}</div>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-7 flex-1 space-y-4">
                <div>
                  <div className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-1.5">Problema</div>
                  <p className="text-gray-600 text-sm leading-relaxed">{r.problem}</p>
                </div>
                <div>
                  <div className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-1.5">Solución</div>
                  <p className="text-gray-600 text-sm leading-relaxed">{r.solution}</p>
                </div>
              </div>

              {/* Result */}
              <div className="bg-gray-900 px-7 py-5 flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-1">Resultado</div>
                  <div className="text-white font-bold text-lg">{r.result}</div>
                  <div className="text-gray-400 text-xs mt-0.5">{r.resultSub}</div>
                </div>
                <button className="border border-white/20 text-white/50 text-xs px-3.5 py-2 rounded-full hover:bg-white/10 transition-colors flex-shrink-0">
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
