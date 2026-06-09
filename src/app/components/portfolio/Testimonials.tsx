const testimonials = [
  {
    quote: "[Testimonio — Descripción de la experiencia de trabajo con Hisoil, destacando el profesionalismo del equipo técnico, la rapidez de respuesta y el impacto real en la operación del cliente.]",
    name: "Nombre Apellido",
    role: "Director de Operaciones",
    company: "Frigorífico [Nombre] S.A.",
    sector: "Industria alimentaria",
    project: "Tratamiento de efluentes",
    result: "−85% carga orgánica",
  },
  {
    quote: "[Testimonio — Descripción de cómo Hisoil ayudó a mejorar el rendimiento del cultivo con una recomendación técnica precisa y el acompañamiento durante toda la campaña.]",
    name: "Nombre Apellido",
    role: "Gerente Agronómico",
    company: "Cooperativa Agropecuaria [Nombre]",
    sector: "Agricultura extensiva",
    project: "Plan nutricional",
    result: "+18 qq/ha",
  },
  {
    quote: "[Testimonio — Descripción del valor del asesoramiento ambiental de Hisoil para el municipio, especialmente en la gestión ante el organismo regulador y la comunicación con la comunidad.]",
    name: "Nombre Apellido",
    role: "Secretario de Ambiente",
    company: "Municipio de [Ciudad]",
    sector: "Sector público",
    project: "Remediación ambiental",
    result: "Certificación 8 meses",
  },
  {
    quote: "[Testimonio — Descripción de los beneficios del programa de compostaje implementado por Hisoil para la cadena de supermercados, reducción de residuos y cumplimiento de objetivos de sustentabilidad.]",
    name: "Nombre Apellido",
    role: "Responsable de Sustentabilidad",
    company: "Jumbo — Región [Nombre]",
    sector: "Retail",
    project: "Compostaje corporativo",
    result: "1.200 tn/año",
  },
];

export function PortfolioTestimonials() {
  return (
    <section className="py-24 md:py-32 px-6 bg-white">
      <div className="w-full">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block border border-gray-300 px-3 py-1 mb-6">
            <span className="text-gray-400 text-xs font-mono uppercase tracking-widest">09 — Testimonios</span>
          </div>
          <h2 className="text-gray-900 mb-3">La voz de quienes trabajaron con Hisoil</h2>
          <p className="text-gray-500 leading-relaxed max-w-xl">
            [Descripción — Testimonios de clientes reales que documentaron su experiencia y los resultados obtenidos en sus proyectos.]
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`border border-gray-200 rounded-sm p-8 flex flex-col relative ${i === 0 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              {/* Quote mark */}
              <div className="text-gray-100 font-serif text-7xl leading-none mb-2 select-none absolute top-6 right-7">"</div>

              {/* Project tag */}
              <div className="flex items-center gap-2 mb-6">
                <span className="bg-gray-100 text-gray-500 text-xs font-mono px-2.5 py-1 rounded-full">
                  {t.project}
                </span>
                <span className="bg-gray-900 text-white text-xs font-mono px-2.5 py-1 rounded-full">
                  {t.result}
                </span>
              </div>

              {/* Quote */}
              <p className="text-gray-600 leading-relaxed text-base italic flex-1 mb-8 relative z-10">
                {t.quote}
              </p>

              {/* Person */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                {/* Avatar placeholder */}
                <div className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0 border border-gray-200">
                  <img
                    src={[
                      "https://images.unsplash.com/photo-1545830790-68595959c491?w=80&q=70&fit=crop&crop=face",
                      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=80&q=70&fit=crop&crop=face",
                      "https://images.unsplash.com/photo-1627829382469-f4bce7df99ba?w=80&q=70&fit=crop&crop=face",
                    ][testimonials.indexOf(t) % 3]}
                    alt={t.name}
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs font-mono">{t.role} · {t.company}</div>
                </div>
                <div className="ml-auto">
                  <span className="text-gray-300 text-xs font-mono">{t.sector}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
