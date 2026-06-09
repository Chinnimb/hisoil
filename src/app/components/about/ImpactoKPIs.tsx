const kpis = [
  {
    category: "Escala",
    icon: "📊",
    items: [
      { value: "2.400+", label: "Proyectos realizados", sub: "en toda la trayectoria de la empresa" },
      { value: "800+", label: "Clientes activos", sub: "productores, empresas y organismos" },
    ],
  },
  {
    category: "Ambiental",
    icon: "🌿",
    items: [
      { value: "1.200 tn", label: "Residuos valorizados / año", sub: "desviados de disposición final" },
      { value: "+200 tn", label: "CO₂ eq. evitado", sub: "por campaña relevada" },
    ],
  },
  {
    category: "Productivo",
    icon: "🌾",
    items: [
      { value: "+22%", label: "Incremento de rendimiento", sub: "promedio en proyectos agrícolas" },
      { value: "−40%", label: "Costo de disposición", sub: "en proyectos de tratamiento" },
    ],
  },
  {
    category: "Regulatorio",
    icon: "📋",
    items: [
      { value: "100%", label: "Cumplimiento normativo", sub: "en proyectos certificados" },
      { value: "ISO 14001", label: "Certificación vigente", sub: "procesos auditados externamente" },
    ],
  },
];

export function ImpactoKPIs() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-16 bg-white">
      <div className="max-w-[1600px] mx-auto w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <div className="inline-block border border-gray-300 px-3 py-1 mb-6">
              <span className="text-gray-400 text-xs font-mono uppercase tracking-widest">07 — Impacto y sustentabilidad</span>
            </div>
            <h2 className="text-gray-900 mb-3">El impacto de Hisoil en números</h2>
            <p className="text-gray-500 leading-relaxed">
              [Descripción — Indicadores concretos que muestran el alcance real del trabajo de Hisoil, agrupados por dimensión de impacto.]
            </p>
          </div>
          <p className="text-gray-400 text-xs font-mono flex-shrink-0">Datos relevados 2022–2025</p>
        </div>

        {/* KPI grid — 2×2 grouped */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {kpis.map((group) => (
            <div key={group.category} className="border border-gray-200 rounded-sm overflow-hidden">
              {/* Group header */}
              <div className="bg-gray-900 px-7 py-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-sm flex items-center justify-center text-base">
                  {group.icon}
                </div>
                <span className="text-white font-semibold text-sm">{group.category}</span>
              </div>
              {/* Metrics */}
              <div className="grid grid-cols-2 gap-px bg-gray-100">
                {group.items.map((item) => (
                  <div key={item.label} className="bg-white px-7 py-7">
                    <div className="text-3xl font-bold text-gray-900 mb-2 leading-none">{item.value}</div>
                    <div className="text-gray-700 text-sm font-semibold mb-1 leading-tight">{item.label}</div>
                    <div className="text-gray-400 text-xs font-mono leading-tight">{item.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-8 bg-gray-50 border border-gray-200 rounded-sm px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-gray-800">¿Querés ver el impacto en tu propia operación?</p>
            <p className="text-gray-500 text-sm mt-1">[Texto — Diagnóstico inicial sin costo. Te mostramos cómo Hisoil puede generar resultados medibles en tu caso.]</p>
          </div>
          <button className="bg-gray-900 text-white px-7 py-3 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors flex-shrink-0">
            Solicitar presupuesto
          </button>
        </div>
      </div>
    </section>
  );
}
