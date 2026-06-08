const services = [
  {
    icon: "♻️",
    title: "Tratamiento de residuos",
    description:
      "[Descripción — Gestión integral de efluentes y residuos orgánicos generados durante la producción. Complementa el uso de productos biológicos con un circuito cerrado de residuos.]",
    link: "/servicios",
    linkLabel: "Ver servicio",
    tags: ["Efluentes", "RSO", "Normativa ambiental"],
  },
  {
    icon: "🔄",
    title: "Compostaje a medida",
    description:
      "[Descripción — Producción de compost certificado a partir de residuos orgánicos propios. Permite reducir costos de insumos y valorizar subproductos de la actividad.]",
    link: "/servicios",
    linkLabel: "Ver servicio",
    tags: ["Economía circular", "Producción propia", "Certificado"],
  },
  {
    icon: "👨‍🔬",
    title: "Asesoramiento técnico",
    description:
      "[Descripción — Acompañamiento técnico personalizado para diseñar el plan nutricional más eficiente. Análisis de suelo, diagnóstico y recomendación de productos específicos para cada lote.]",
    link: "/servicios",
    linkLabel: "Solicitar asesoramiento",
    tags: ["Diagnóstico", "Plan nutricional", "Asesor dedicado"],
  },
];

export function RelatedServices() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <div className="inline-block border border-gray-300 px-3 py-1 mb-6">
            <span className="text-gray-500 text-xs font-mono uppercase tracking-widest">09 — Servicios relacionados</span>
          </div>
          <h2 className="text-gray-900 mb-4">Potenciá tus productos con nuestros servicios</h2>
          <p className="text-gray-500 leading-relaxed">
            [Descripción — Los productos funcionan mejor con el acompañamiento técnico adecuado. Estos servicios complementan y potencian cada solución.]
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="border border-gray-200 rounded-sm p-8 flex flex-col group hover:border-gray-400 hover:shadow-md transition-all"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-gray-100 rounded-sm flex items-center justify-center text-2xl mb-6 group-hover:bg-gray-200 transition-colors">
                {s.icon}
              </div>

              <h3 className="text-gray-900 font-semibold text-lg mb-3">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-6">{s.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {s.tags.map((tag) => (
                  <span key={tag} className="bg-gray-100 text-gray-500 text-xs px-2.5 py-1 rounded-full font-mono">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a
                href={s.link}
                className="text-gray-700 text-sm font-medium flex items-center gap-2 hover:text-gray-900 transition-colors self-start"
              >
                {s.linkLabel}
                <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
