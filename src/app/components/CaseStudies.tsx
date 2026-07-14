import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const cases = [
  {
    slug: "estancia-san-jorge",
    metric: "+42%",
    metricLabel: "rinde soja",
    title: "Estancia San Jorge",
    location: "Buenos Aires · 200 ha",
    description: "Compostaje in-situ con residuos del feedlot propio. Recuperación de materia orgánica en 2 campañas.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=85&fit=crop",
    tag: "Soja / Maíz",
  },
  {
    slug: "agropecuaria-del-norte",
    metric: "2.400t",
    metricLabel: "procesadas/año",
    title: "Agropecuaria del Norte",
    location: "Santa Fe · Feedlot 5.000 cab.",
    description: "Sistema de compostaje profesional con valorización de residuos. Ahorro anual de $850k.",
    image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1200&q=85&fit=crop",
    tag: "Ganadería",
  },
  {
    slug: "productores-asociados",
    metric: "+38%",
    metricLabel: "rinde maíz",
    title: "Productores Asociados",
    location: "Córdoba · 800 ha",
    description: "Plan técnico con bioestimulantes + análisis de suelo. 110 qq/ha en la primera campaña.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&q=85&fit=crop",
    tag: "Maíz",
  },
];

interface CaseCardProps {
  c: typeof cases[number];
  index: number;
}

function CaseCard({ c, index }: CaseCardProps) {
  const [ref, visible] = useReveal<HTMLAnchorElement>({ threshold: 0.2 });
  return (
    <Link
      to={`/portfolio#${c.slug}`}
      ref={ref}
      className={`group block scroll-reveal ${visible ? 'is-visible' : ''}`}
      style={{ transitionDelay: visible ? `${index * 0.12}s` : '0s' }}
    >
      <div className="relative bg-white rounded-2xl overflow-hidden border border-oliva/15 hover:border-oliva/40 hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={c.image}
            alt={c.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-noche/80 via-noche/20 to-transparent" />

          {/* Metric tag — top left */}
          <div className="absolute top-5 left-5 bg-lima text-oliva rounded-lg px-4 py-2.5 shadow-lg">
            <div className="font-bold text-2xl leading-none">{c.metric}</div>
            <div className="text-[10px] font-mono uppercase tracking-wider mt-1">{c.metricLabel}</div>
          </div>

          {/* Arrow corner */}
          <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:bg-lima group-hover:border-lima transition-all duration-500">
            <ArrowUpRight className="w-4 h-4 text-white group-hover:text-oliva transition-colors duration-300" />
          </div>

          {/* Tag at bottom */}
          <div className="absolute bottom-5 left-5">
            <span className="inline-block bg-white/95 backdrop-blur-sm text-oliva text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full">
              {c.tag}
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 md:p-7 flex-1 flex flex-col">
          <h3 className="text-oliva font-bold text-2xl leading-tight mb-1">{c.title}</h3>
          <div className="text-gray-600 text-xs font-mono mb-4">{c.location}</div>
          <p className="text-gray-700 text-sm leading-relaxed">{c.description}</p>

          {/* Animated underline */}
          <div className="mt-5 h-[2px] bg-oliva/10 relative overflow-hidden rounded-full">
            <div className="absolute inset-y-0 left-0 bg-lima w-0 group-hover:w-full transition-all duration-700 ease-out" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export function CaseStudies() {
  const [headerRef, headerVisible] = useReveal<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-[1600px] mx-auto w-full">
        {/* Header */}
        <div
          ref={headerRef}
          className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16 scroll-reveal ${headerVisible ? 'is-visible' : ''}`}
        >
          <div className="max-w-2xl">
            <div className="inline-block border border-oliva/30 px-3 py-1 mb-6">
              <span className="text-oliva text-xs font-mono uppercase tracking-widest">Casos documentados</span>
            </div>
            <h2 className="text-oliva">Resultados que se ven en el campo.</h2>
          </div>
          <Link to="/portfolio">
            <button className="border border-oliva text-oliva px-6 py-3 rounded-full text-sm font-medium hover:bg-oliva hover:text-white transition-all flex-shrink-0">
              Ver todos los casos →
            </button>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {cases.map((c, i) => (
            <CaseCard key={c.title} c={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
