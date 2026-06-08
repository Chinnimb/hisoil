const logos = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  label: `Cliente ${String(i + 1).padStart(2, "0")}`,
}));

const caseStudies = [
  {
    client: "Empresa Agropecuaria S.A.",
    sector: "Soja / Maíz — 4.800 ha",
    problem:
      "[Problema — Alta presión de plagas en campaña de soja, resistencia a insecticidas convencionales y deterioro visible en rendimiento por hectárea.]",
    solution:
      "[Solución — Diagnóstico de resistencia, rotación de modos de acción y aplicación de bioinsumos complementarios con monitoreo semanal.]",
    result: "38% reducción de daño",
    resultSub: "+12% rendimiento final",
    tag: "Protección de cultivos",
  },
  {
    client: "Frigorífico del Norte",
    sector: "Ganadería — Efluentes industriales",
    problem:
      "[Problema — Efluentes con carga orgánica fuera de norma, riesgo de sanción ambiental y pérdida de certificación de exportación.]",
    solution:
      "[Solución — Planta de tratamiento biológico modular, ajuste de protocolo de descarga y monitoreo continuo con reportes mensuales a autoridades.]",
    result: "100% cumplimiento normativo",
    resultSub: "Certificación recuperada",
    tag: "Tratamiento de efluentes",
  },
  {
    client: "Municipio de [Ciudad]",
    sector: "Gestión ambiental pública",
    problem:
      "[Problema — Pasivo ambiental heredado de ex-relleno sanitario con contaminación de napas y ausencia de plan de remediación aprobado.]",
    solution:
      "[Solución — Estudio de riesgo ambiental, diseño de plan de remediación y gestión ante organismo regulador para aprobación formal.]",
    result: "Plan aprobado en 8 meses",
    resultSub: "Pasivo en proceso de cierre",
    tag: "Remediación ambiental",
  },
];

export function ClientsResults() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <div className="inline-block border border-gray-300 px-3 py-1 mb-6">
            <span className="text-gray-500 text-xs font-mono uppercase tracking-widest">05 — Clientes y resultados</span>
          </div>
          <h2 className="text-gray-900 mb-4">Empresas que confían en Hisoil</h2>
          <p className="text-gray-500 leading-relaxed">
            [Descripción breve de la base de clientes, sectores atendidos y tipo de proyectos realizados.]
          </p>
        </div>

        {/* Logo wall */}
        <div className="border border-gray-200 bg-white rounded-sm p-8 md:p-12 mb-20">
          <p className="text-xs font-mono text-gray-400 uppercase tracking-widest text-center mb-8">
            Logos de clientes — placeholder
          </p>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-px bg-gray-200">
            {logos.map((logo) => (
              <div
                key={logo.id}
                className="bg-white aspect-[3/2] flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="w-10 h-10 bg-gray-100 border border-gray-200 rounded-sm mx-auto mb-1 flex items-center justify-center">
                    <span className="text-gray-300 text-xs font-mono">{logo.id}</span>
                  </div>
                  <span className="text-gray-300 text-[10px] font-mono">{logo.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Case study cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((cs, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-sm overflow-hidden flex flex-col">
              {/* Card header */}
              <div className="bg-gray-100 px-6 py-5 border-b border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-12 h-8 bg-gray-300 rounded-sm flex items-center justify-center">
                    <span className="text-gray-500 text-[9px] font-mono">LOGO</span>
                  </div>
                  <span className="text-xs font-mono text-gray-400 bg-white border border-gray-200 px-2 py-1 rounded-full">
                    {cs.tag}
                  </span>
                </div>
                <div className="font-semibold text-gray-800 text-sm">{cs.client}</div>
                <div className="text-xs text-gray-400 font-mono mt-0.5">{cs.sector}</div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 space-y-4">
                <div>
                  <div className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-1">Problema</div>
                  <p className="text-gray-600 text-sm leading-relaxed">{cs.problem}</p>
                </div>
                <div>
                  <div className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-1">Solución</div>
                  <p className="text-gray-600 text-sm leading-relaxed">{cs.solution}</p>
                </div>
              </div>

              {/* Result */}
              <div className="bg-gray-900 text-white px-6 py-5">
                <div className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-1">Resultado</div>
                <div className="font-bold text-lg">{cs.result}</div>
                <div className="text-gray-400 text-sm">{cs.resultSub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
