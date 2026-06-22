import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const services = [
  {
    title: "Fertilización orgánica",
    description: "Productos certificados que mejoran la estructura del suelo y aumentan la productividad de manera sostenible.",
    img: "https://images.unsplash.com/photo-1642952273588-ed6fa28870ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    stat: "+28% materia orgánica",
    number: "01",
    tag: "Productos",
  },
  {
    title: "Compostaje profesional",
    description: "Transformamos residuos orgánicos agroindustriales en enmiendas de alto valor agronómico. Cerramos el ciclo de nutrientes.",
    img: "https://images.unsplash.com/photo-1573119798379-011dfedae008?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    stat: "2.400 t/campaña",
    number: "02",
    tag: "Procesos",
  },
  {
    title: "Análisis de suelo",
    description: "Estudios completos para determinar las necesidades específicas y diseñar el plan técnico óptimo para tu campo.",
    img: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    stat: "Diagnóstico técnico",
    number: "03",
    tag: "Diagnóstico",
  },
  {
    title: "Agricultura regenerativa",
    description: "Prácticas que restauran la salud del suelo, recuperan biodiversidad y aumentan la rentabilidad a largo plazo.",
    img: "https://images.unsplash.com/photo-1508175688576-0c076b47b5b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    stat: "Sustentabilidad",
    number: "04",
    tag: "Estrategia",
  },
];

interface ServiceCardProps {
  s: typeof services[number];
  index: number;
}

function ServiceCard({ s, index }: ServiceCardProps) {
  const [ref, visible] = useReveal<HTMLAnchorElement>({ threshold: 0.2 });
  return (
    <Link
      to="/servicios"
      ref={ref}
      className={`group block scroll-reveal ${visible ? 'is-visible' : ''}`}
      style={{ transitionDelay: visible ? `${(index % 2) * 0.12}s` : '0s' }}
    >
      <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/15 hover:border-lima/40 hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
        {/* Image */}
        <div className="relative aspect-[5/4] overflow-hidden">
          <img
            src={s.img}
            alt={s.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          {/* Subtle dark overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-oliva/90 via-oliva/20 to-transparent" />

          {/* Number top-left */}
          <div className="absolute top-4 left-4 text-white/45 group-hover:text-lima transition-colors duration-500 font-bold font-mono text-3xl">
            {s.number}
          </div>

          {/* Arrow corner */}
          <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:bg-lima group-hover:border-lima transition-all duration-500">
            <ArrowUpRight className="w-4 h-4 text-white group-hover:text-oliva transition-colors duration-300" />
          </div>

          {/* Title at bottom of image */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="inline-block bg-lima/95 text-oliva text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full font-semibold mb-2">
              {s.tag}
            </div>
            <h3 className="text-white font-bold text-2xl leading-tight">{s.title}</h3>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 md:p-7 flex-1 flex flex-col">
          <p className="text-white/85 text-sm leading-relaxed mb-5">{s.description}</p>

          {/* Stat */}
          <div className="mt-auto flex items-center justify-between">
            <div className="text-white text-xs font-mono">{s.stat}</div>
            <div className="h-[2px] bg-white/15 relative overflow-hidden rounded-full flex-1 ml-4">
              <div className="absolute inset-y-0 left-0 bg-lima w-0 group-hover:w-full transition-all duration-700 ease-out" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export function ServicesOverview() {
  const [headerRef, headerVisible] = useReveal<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 bg-oliva relative overflow-hidden">
      {/* Soft texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 0,transparent 80px),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 0,transparent 80px)`,
        }}
      />

      <div className="relative max-w-[1600px] mx-auto w-full">
        {/* Header */}
        <div
          ref={headerRef}
          className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16 scroll-reveal ${headerVisible ? 'is-visible' : ''}`}
        >
          <div className="max-w-2xl">
            <div className="inline-block border border-white/25 px-3 py-1 mb-6">
              <span className="text-white/75 text-xs font-mono uppercase tracking-widest">Servicios</span>
            </div>
            <h2 className="text-white">Servicios que potencian cada hectárea.</h2>
          </div>
          <Link to="/servicios">
            <button className="border border-white/35 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-lima hover:text-oliva hover:border-lima transition-all flex-shrink-0">
              Ver todos →
            </button>
          </Link>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.title} s={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
