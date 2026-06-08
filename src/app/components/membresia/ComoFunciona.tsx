const steps = [
  {
    number: "01",
    title: "Elegís tu plan",
    description: "[Descripción — Seleccionás el plan que mejor se adapta al tamaño y necesidades de tu operación. Podés cambiar de plan en cualquier momento.]",
    detail: "Proceso de selección online en menos de 5 minutos",
  },
  {
    number: "02",
    title: "Configurás tus envíos",
    description: "[Descripción — Indicás qué productos necesitás, en qué cantidades y con qué frecuencia. El equipo técnico te ayuda a armar el plan de suministro óptimo.]",
    detail: "Asesoramiento técnico incluido en la configuración",
  },
  {
    number: "03",
    title: "Activamos la membresía",
    description: "[Descripción — Confirmamos los datos, procesamos el primer pago y activamos tu acceso al área de miembros, fichas técnicas y canal prioritario de consultas.]",
    detail: "Activación en menos de 24 horas hábiles",
  },
  {
    number: "04",
    title: "Recibís y seguimos",
    description: "[Descripción — Los envíos llegan según el calendario acordado. Nuestro equipo hace el seguimiento técnico y ajusta las recomendaciones en cada campaña.]",
    detail: "Monitoreo continuo de resultados incluido",
  },
];

export function ComoFunciona() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block border border-gray-300 px-3 py-1 mb-6">
            <span className="text-gray-400 text-xs font-mono uppercase tracking-widest">04 — Cómo funciona</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-gray-900 max-w-xl">Cuatro pasos para empezar a ser miembro.</h2>
            <p className="text-gray-400 text-sm font-mono max-w-xs text-right">
              [Tagline — El proceso completo lleva menos de un día hábil desde la solicitud hasta la activación.]
            </p>
          </div>
        </div>

        {/* Steps — horizontal on desktop */}
        <div className="hidden md:grid grid-cols-4 gap-px bg-gray-200 border border-gray-200 mb-12">
          {steps.map((s, i) => (
            <div key={s.number} className="bg-white p-8 flex flex-col relative">
              {i < steps.length - 1 && (
                <div className="absolute top-8 right-0 w-px h-8 bg-gray-200 translate-x-px" />
              )}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-mono font-bold">{s.number}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className="flex-1 h-px bg-gray-200" />
                )}
              </div>
              <h3 className="text-gray-900 font-semibold mb-3">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">{s.description}</p>
              <div className="bg-gray-50 border border-gray-200 rounded-sm px-3 py-2">
                <span className="text-gray-400 text-xs font-mono">{s.detail}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile — vertical */}
        <div className="md:hidden space-y-0">
          {steps.map((s, i) => (
            <div key={s.number} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center text-xs font-mono font-bold flex-shrink-0">
                  {s.number}
                </div>
                {i < steps.length - 1 && <div className="w-px flex-1 bg-gray-200 my-2" style={{ minHeight: 32 }} />}
              </div>
              <div className="pb-8 flex-1">
                <h3 className="text-gray-900 font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">{s.description}</p>
                <div className="bg-gray-50 border border-gray-200 rounded-sm px-3 py-2">
                  <span className="text-gray-400 text-xs font-mono">{s.detail}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="bg-gray-950 rounded-sm p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-white font-semibold mb-1">¿Listo para empezar?</div>
            <div className="text-white/40 text-sm font-mono">El primer mes incluye asesoramiento técnico de bienvenida sin cargo.</div>
          </div>
          <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors flex-shrink-0">
            Solicitar membresía
          </button>
        </div>
      </div>
    </section>
  );
}
