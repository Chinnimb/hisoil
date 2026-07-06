import { Link } from 'react-router';
import { ArrowUpRight, Sprout, Recycle, UsersRound, Leaf, Building2, FlaskConical } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const services = [
  {
    title: "Agricultura Regenerativa",
    description: "Proyectos de regeneración de suelos y captura de carbono. Consultoría técnica junto a Prosustentia.",
    Icon: Sprout,
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1200",
    tag: "Regeneración",
  },
  {
    title: "Gestión de Residuos Orgánicos",
    description: "Diseño, ingeniería y operación de plantas de compostaje. Planta de Exaltación de la Cruz en operación.",
    Icon: Recycle,
    image: "https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1200",
    tag: "Operación",
  },
  {
    title: "Asesoramiento Técnico",
    description: "Equipo de agrónomos e ingenieros a tu disposición. Acompañamiento en campo con datos y seguimiento.",
    Icon: UsersRound,
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1200",
    tag: "Consultoría",
  },
  {
    title: "Sostenibilidad y Créditos de Carbono",
    description: "Proyectos de evitación de emisiones. Diseño, medición y certificación de créditos de carbono.",
    Icon: Leaf,
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1200",
    tag: "Impacto",
  },
  {
    title: "Asistencia Técnica a Municipios",
    description: "Compostaje, chipeado y tratamiento de residuos verdes urbanos. Planes a medida por escala municipal.",
    Icon: Building2,
    image: "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1200",
    tag: "Municipios",
  },
  {
    title: "Laboratorio",
    description: "Análisis de compost, residuos y suelos. Desarrollo de soluciones a medida con validación técnica.",
    Icon: FlaskConical,
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1200",
    tag: "I+D",
  },
];

interface ServiceCardProps {
  s: typeof services[number];
  index: number;
}

function ServiceCard({ s, index }: ServiceCardProps) {
  const [ref, visible] = useReveal<HTMLAnchorElement>({ threshold: 0.2 });
  const { Icon } = s;
  return (
    <Link
      to="/servicios"
      ref={ref}
      className={`group block scroll-reveal ${visible ? 'is-visible' : ''}`}
      style={{ transitionDelay: visible ? `${(index % 3) * 0.12}s` : '0s' }}
    >
      <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/15 hover:border-lima/40 hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={s.image}
            alt={s.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-oliva/95 via-oliva/40 to-transparent" />

          {/* Icon + Tag */}
          <div className="absolute top-4 left-4 flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:bg-lima group-hover:border-lima transition-all duration-500">
              <Icon className="w-5 h-5 text-white group-hover:text-oliva transition-colors duration-500" />
            </div>
            <span className="bg-white/95 text-oliva text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full font-semibold">
              {s.tag}
            </span>
          </div>

          {/* Arrow corner */}
          <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:bg-lima group-hover:border-lima transition-all duration-500">
            <ArrowUpRight className="w-4 h-4 text-white group-hover:text-oliva transition-colors duration-300" />
          </div>

          {/* Title at bottom of image */}
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-white font-bold text-xl md:text-2xl leading-tight">{s.title}</h3>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 flex-1 flex flex-col">
          <p className="text-white/85 text-sm leading-relaxed">{s.description}</p>

          {/* Animated underline */}
          <div className="mt-5 h-[2px] bg-white/15 relative overflow-hidden rounded-full">
            <div className="absolute inset-y-0 left-0 bg-lima w-0 group-hover:w-full transition-all duration-700 ease-out" />
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
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 0,transparent 80px),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 0,transparent 80px)`,
        }}
      />

      <div className="relative max-w-[1600px] mx-auto w-full">
        <div
          ref={headerRef}
          className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16 scroll-reveal ${headerVisible ? 'is-visible' : ''}`}
        >
          <div className="max-w-2xl">
            <div className="inline-block border border-white/25 px-3 py-1 mb-6">
              <span className="text-white/85 text-xs font-mono uppercase tracking-widest">Servicios</span>
            </div>
            <h2 className="text-white">Servicios integrales para cada etapa del ciclo regenerativo.</h2>
          </div>
          <Link to="/servicios">
            <button className="border border-white/40 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-lima hover:text-oliva hover:border-lima transition-all flex-shrink-0">
              Ver todos →
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.title} s={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
