const approachCards = [
  {
    number: "01",
    title: "Respaldo técnico",
    icon: "⚗️",
    description:
      "[Texto — Equipo multidisciplinario con sólida formación científica y experiencia práctica. Protocolos validados, datos medibles y resultados documentados en cada intervención.]",
    tags: ["Diagnóstico", "Laboratorio", "Informes técnicos"],
  },
  {
    number: "02",
    title: "Cercanía con el cliente",
    icon: "🤝",
    description:
      "[Texto — Acompañamiento personalizado desde el primer contacto hasta el seguimiento post-implementación. Asesor técnico dedicado para cada proyecto y comunicación directa.]",
    tags: ["Asesor dedicado", "Seguimiento activo", "Soporte postventa"],
  },
  {
    number: "03",
    title: "Sustentabilidad",
    icon: "🌱",
    description:
      "[Texto — Todas las soluciones diseñadas bajo principios de economía circular y mínimo impacto ambiental. Certificaciones ambientales y compromisos medibles con el ecosistema.]",
    tags: ["Economía circular", "ISO 14001", "Huella ambiental"],
  },
];

export function OurApproach() {
  return (
    <section className="py-24 md:py-32 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <div className="inline-block border border-gray-300 px-3 py-1 mb-6">
            <span className="text-gray-500 text-xs font-mono uppercase tracking-widest">03 — Nuestra forma de trabajar</span>
          </div>
          <h2 className="text-gray-900 mb-4">Nuestra forma de trabajar</h2>
          <p className="text-gray-500 leading-relaxed">
            [Subtítulo — Descripción de los tres pilares que guían cada proyecto e intervención de Hisoil.]
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {approachCards.map((card) => (
            <div
              key={card.number}
              className="bg-white border border-gray-200 p-8 rounded-sm group hover:border-gray-400 transition-colors"
            >
              {/* Number + icon */}
              <div className="flex items-start justify-between mb-6">
                <span className="text-gray-200 font-mono text-5xl font-bold leading-none">
                  {card.number}
                </span>
                <div className="w-12 h-12 bg-gray-100 rounded-sm flex items-center justify-center text-2xl">
                  {card.icon}
                </div>
              </div>

              <h3 className="text-gray-900 mb-4 text-xl">{card.title}</h3>

              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {card.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-500 text-xs px-3 py-1 rounded-full font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
