const services = [
  {
    icon: "⚗️",
    title: "Tratamiento de residuos",
    role: "Servicio principal del proyecto",
    description:
      "[Descripción — Diagnóstico, diseño e implementación del sistema de tratamiento. Incluye ingeniería del proceso, selección de tecnología, puesta en marcha y certificación regulatoria.]",
    deliverables: ["Auditoría de efluentes", "Diseño de planta", "Puesta en marcha", "Certificado ambiental"],
    link: "/servicios",
  },
  {
    icon: "📊",
    title: "Asesoramiento técnico ambiental",
    role: "Servicio de acompañamiento",
    description:
      "[Descripción — Acompañamiento técnico durante todo el proyecto: gestión ante organismos reguladores, elaboración de informes periódicos y soporte en auditorías externas.]",
    deliverables: ["Gestión regulatoria", "Informes periódicos", "Soporte en auditorías"],
    link: "/servicios",
  },
  {
    icon: "🔄",
    title: "Seguimiento y monitoreo continuo",
    role: "Servicio post-implementación",
    description:
      "[Descripción — Monitoreo mensual del proceso, análisis de laboratorio de los efluentes tratados y reportes automáticos para la dirección del cliente y el organismo regulador.]",
    deliverables: ["Monitoreo mensual", "Análisis de laboratorio", "Reportes automáticos"],
    link: "/servicios",
  },
];

export function CaseServices() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-[1600px] mx-auto w-full">
        {/* Header */}
        <div className="mb-14">
          <div className="inline-block border border-gray-300 px-3 py-1 mb-6">
            <span className="text-gray-400 text-xs font-mono uppercase tracking-widest">07 — Servicios aplicados en este caso</span>
          </div>
          <h2 className="text-oliva mb-3">Servicios que hicieron posible este resultado</h2>
          <p className="text-gray-500 leading-relaxed max-w-xl">
            [Texto — Los resultados de este proyecto fueron posibles gracias a la combinación de productos técnicos con un servicio de acompañamiento integral.]
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="border border-gray-200 rounded-sm p-8 flex flex-col group hover:border-gray-400 hover:shadow-md transition-all">
              {/* Icon + role */}
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 bg-paja/40 rounded-sm flex items-center justify-center text-2xl group-hover:bg-gray-200 transition-colors">
                  {s.icon}
                </div>
                <span className="text-xs font-mono text-gray-400 bg-paja/30 border border-gray-200 px-2.5 py-1 rounded-full text-right leading-tight max-w-[140px]">
                  {s.role}
                </span>
              </div>

              <h3 className="text-oliva font-semibold text-lg mb-3">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-6">{s.description}</p>

              {/* Deliverables */}
              <div className="mb-6">
                <div className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-2.5">Entregables</div>
                <div className="flex flex-wrap gap-1.5">
                  {s.deliverables.map((d) => (
                    <span key={d} className="bg-paja/40 text-gray-500 text-xs px-2.5 py-1 rounded-full font-mono">{d}</span>
                  ))}
                </div>
              </div>

              <a href={s.link} className="text-gray-700 text-sm font-medium flex items-center gap-2 hover:text-oliva transition-colors self-start group/link">
                Ver servicio completo
                <span className="group-hover/link:translate-x-1 transition-transform inline-block">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
