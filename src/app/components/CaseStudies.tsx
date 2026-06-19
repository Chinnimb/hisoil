import { Link } from 'react-router';

const cases = [
  {
    metric: "+42%",
    metricLabel: "rinde soja",
    title: "Estancia San Jorge",
    location: "Buenos Aires · 200 ha",
    description: "Compostaje in-situ con residuos del feedlot propio. Recuperación de materia orgánica en 2 campañas.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=900&q=85&fit=crop",
    rotate: "-rotate-3",
    translate: "md:translate-y-8",
  },
  {
    metric: "2.400t",
    metricLabel: "procesadas/año",
    title: "Agropecuaria del Norte",
    location: "Santa Fe · Feedlot 5.000 cab.",
    description: "Sistema de compostaje profesional con valorización de residuos. Ahorro anual de $850k.",
    image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=900&q=85&fit=crop",
    rotate: "rotate-2",
    translate: "md:-translate-y-6",
  },
  {
    metric: "+38%",
    metricLabel: "rinde maíz",
    title: "Productores Asociados",
    location: "Córdoba · 800 ha",
    description: "Plan técnico con bioestimulantes + análisis de suelo. 110 qq/ha en la primera campaña.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=900&q=85&fit=crop",
    rotate: "-rotate-2",
    translate: "md:translate-y-12",
  },
];

export function CaseStudies() {
  return (
    <section className="relative py-16 md:py-28 lg:py-36 px-6 md:px-12 lg:px-20 bg-oliva overflow-hidden">
      {/* Soft texture overlay */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 0,transparent 80px),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 0,transparent 80px)`,
        }}
      />

      <div className="relative max-w-[1600px] mx-auto w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-24">
          <div className="max-w-2xl">
            <div className="inline-block border border-white/25 px-3 py-1 mb-6">
              <span className="text-white/70 text-xs font-mono uppercase tracking-widest">Casos documentados</span>
            </div>
            <h2 className="text-white">Resultados que se ven en el campo.</h2>
          </div>
          <Link to="/portfolio">
            <button className="border border-white/35 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-white hover:text-oliva transition-all flex-shrink-0">
              Ver todos los casos →
            </button>
          </Link>
        </div>

        {/* Floating staggered cards — Farm Minerals style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10 px-4 md:px-12 lg:px-20 py-8 md:py-16">
          {cases.map((c, i) => (
            <Link
              key={c.title}
              to="/portfolio"
              className={`group block reveal-up ${c.translate}`}
              style={{ animationDelay: `${i * 0.18}s` }}
            >
              <div className={`relative rounded-2xl overflow-hidden bg-white shadow-2xl transition-all duration-700 ease-out ${c.rotate} group-hover:rotate-0 group-hover:scale-[1.03]`}>
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Bottom gradient for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Metric tag — top left, green square */}
                  <div className="absolute top-5 left-5 bg-oliva rounded-lg px-4 py-3 shadow-lg">
                    <div className="text-white font-bold text-2xl leading-none">{c.metric}</div>
                    <div className="text-white/75 text-[10px] font-mono uppercase tracking-wider mt-1">{c.metricLabel}</div>
                  </div>

                  {/* Title block — bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-2xl leading-tight mb-1">{c.title}</h3>
                    <div className="text-white/70 text-xs font-mono mb-3">{c.location}</div>
                    <p className="text-white/85 text-sm leading-relaxed line-clamp-3">{c.description}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
