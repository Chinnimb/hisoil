const valores = [
  {
    number: "01",
    icon: "🤝",
    title: "Compromiso",
    description: "[Descripción — Compromiso total con los resultados de cada cliente. No terminamos un proyecto hasta que los objetivos están cumplidos y documentados.]",
  },
  {
    number: "02",
    icon: "🔬",
    title: "Innovación",
    description: "[Descripción — Búsqueda permanente de soluciones más efectivas, basadas en ciencia aplicada y tecnologías emergentes del sector agro-ambiental.]",
  },
  {
    number: "03",
    icon: "🌱",
    title: "Sustentabilidad",
    description: "[Descripción — Todas nuestras soluciones están diseñadas bajo principios de mínimo impacto ambiental y máxima valorización de recursos. El ambiente no es un costo: es una oportunidad.]",
  },
  {
    number: "04",
    icon: "👋",
    title: "Cercanía",
    description: "[Descripción — Trabajamos codo a codo con cada cliente. Hay un asesor técnico real, con nombre y apellido, detrás de cada proyecto.]",
  },
  {
    number: "05",
    icon: "⭐",
    title: "Calidad",
    description: "[Descripción — Protocolos rigurosos, productos con registro oficial y procesos certificados. La calidad no es un estándar a alcanzar, es el punto de partida de todo lo que hacemos.]",
  },
  {
    number: "06",
    icon: "⚖️",
    title: "Responsabilidad",
    description: "[Descripción — Responsabilidad técnica, ambiental y social en cada intervención. Actuamos con transparencia ante clientes, reguladores y comunidades.]",
  },
];

export function Valores() {
  return (
    <section className="py-24 md:py-32 px-6 bg-gray-50">
      <div className="w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <div className="inline-block border border-gray-300 px-3 py-1 mb-6">
              <span className="text-gray-400 text-xs font-mono uppercase tracking-widest">05 — Valores</span>
            </div>
            <h2 className="text-gray-900 mb-3">Nuestros valores</h2>
            <p className="text-gray-500 leading-relaxed">
              [Descripción — Los principios que guían cada decisión, cada proyecto y cada relación con clientes, socios y comunidades.]
            </p>
          </div>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {valores.map((v) => (
            <div
              key={v.number}
              className="bg-white border border-gray-200 rounded-sm p-8 flex flex-col group hover:border-gray-400 hover:shadow-md transition-all"
            >
              {/* Number + icon row */}
              <div className="flex items-start justify-between mb-6">
                <span className="text-gray-100 font-bold font-mono text-5xl leading-none">{v.number}</span>
                <div className="w-12 h-12 bg-gray-100 rounded-sm flex items-center justify-center text-2xl group-hover:bg-gray-200 transition-colors">
                  {v.icon}
                </div>
              </div>

              <h3 className="text-gray-900 text-xl font-semibold mb-3">{v.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-1">{v.description}</p>

              {/* Bottom accent line */}
              <div className="mt-6 h-px bg-gray-100 group-hover:bg-gray-300 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
