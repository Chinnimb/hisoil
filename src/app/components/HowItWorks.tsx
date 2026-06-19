const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    description: "Visitamos tu campo y realizamos un análisis completo de suelos y necesidades. Sin cargo, sin compromiso.",
    outputs: ["Análisis de suelo", "Relevamiento de campo", "Informe técnico"],
  },
  {
    number: "02",
    title: "Propuesta",
    description: "Diseñamos un plan personalizado con los productos y técnicas más adecuadas a tu operación.",
    outputs: ["Plan de fertilización", "Selección de productos", "Presupuesto"],
  },
  {
    number: "03",
    title: "Implementación",
    description: "Aplicamos con seguimiento técnico en cada etapa. Registramos y ajustamos en tiempo real.",
    outputs: ["Aplicación supervisada", "Registros de campo", "Ajuste de dosis"],
  },
  {
    number: "04",
    title: "Resultados",
    description: "Medimos y reportamos las mejoras obtenidas. El informe es del cliente.",
    outputs: ["Informe de rendimiento", "Comparativa de campaña", "Plan siguiente"],
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 bg-paja/30">
      <div className="max-w-[1600px] mx-auto w-full">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-end">
          <div className="lg:col-span-6">
            <div className="inline-block border border-gray-300 px-3 py-1 mb-6">
              <span className="text-gray-400 text-xs font-mono uppercase tracking-widest">Cómo trabajamos</span>
            </div>
            <h2 className="text-oliva">De la consulta al resultado. Cuatro pasos.</h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-gray-500 leading-relaxed">
              Un proceso técnico y ordenado que garantiza que cada producto se aplique correctamente y que el cliente vea resultados medibles en cada campaña.
            </p>
          </div>
        </div>

        {/* Atmospheric image strip */}
        <div className="relative w-full h-64 mb-10 overflow-hidden rounded-sm">
          <img
            src="https://images.unsplash.com/photo-1709532388333-acf472eae61a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxhZ3Jvbm9taXN0JTIwZmllbGQlMjBjcm9wJTIwaW5zcGVjdGlvbiUyMGFncmljdWx0dXJlJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc4MDkzNTAzNnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Técnica aplicando tratamiento en cultivo"
            className="w-full h-full object-cover object-center grayscale"
            style={{ filter: 'grayscale(100%)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-50/80 via-transparent to-gray-50/80" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-gray-600 text-sm font-mono uppercase tracking-widest">Acompañamiento técnico en campo</div>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200">
          {steps.map((s, i) => (
            <div key={s.number} className="bg-white p-8 flex flex-col">
              <div className="text-gray-100 font-mono font-bold text-6xl leading-none mb-8">{s.number}</div>
              <h3 className="text-oliva font-semibold mb-3">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-6">{s.description}</p>
              <div className="space-y-1.5">
                {s.outputs.map((o) => (
                  <div key={o} className="flex items-center gap-2 text-gray-400 text-xs font-mono">
                    <div className="w-1 h-1 bg-gray-300 rounded-full" />
                    {o}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 border border-gray-200 bg-white rounded-sm">
          <div className="text-gray-600 text-sm">El diagnóstico inicial es sin costo y sin compromiso. Coordina en menos de 24 hs.</div>
          <button className="bg-oliva text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-oliva transition-colors flex-shrink-0">
            Solicitar diagnóstico
          </button>
        </div>
      </div>
    </section>
  );
}
