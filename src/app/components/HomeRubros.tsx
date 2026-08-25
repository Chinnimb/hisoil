import { Link } from 'react-router';
import { Package, Wrench, Briefcase, Users, ArrowUpRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const rubros = [
  {
    Icon: Package,
    eyebrow: '01 — Catálogo',
    title: 'Productos',
    description: '33 productos en 5 líneas técnicas: agricultura, sustratos profesionales, materias primas, paisajismo e infraestructura.',
    to: '/productos',
    cta: 'Ver catálogo',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1200',
  },
  {
    Icon: Wrench,
    eyebrow: '02 — Soluciones',
    title: 'Servicios',
    description: 'Tratamiento de residuos orgánicos con impacto real. Caracterización, logística, compostaje controlado, valorización y trazabilidad completa.',
    to: '/servicios',
    cta: 'Conocer servicios',
    image: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1200',
  },
  {
    Icon: Briefcase,
    eyebrow: '03 — Trabajos',
    title: 'Portfolio',
    description: 'Casos de éxito y proyectos concretados: créditos de carbono, industrias, compostaje a escala y aplicaciones internacionales.',
    to: '/portfolio',
    cta: 'Ver casos',
    image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1200',
  },
  {
    Icon: Users,
    eyebrow: '04 — Empresa',
    title: 'Nosotros',
    description: 'Más de 25 años transformando problemas ambientales en oportunidades. Equipo técnico multidisciplinario en 12 provincias.',
    to: '/nosotros',
    cta: 'Conocernos',
    image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1200',
  },
];

interface RubroCardProps {
  r: typeof rubros[number];
  index: number;
}

function RubroCard({ r, index }: RubroCardProps) {
  const [ref, visible] = useReveal<HTMLAnchorElement>({ threshold: 0.15 });
  const { Icon } = r;

  return (
    <Link
      to={r.to}
      ref={ref}
      className={`scroll-reveal group relative overflow-hidden rounded-2xl border border-oliva/15 bg-white hover:border-oliva/40 hover:shadow-2xl transition-all duration-500 flex flex-col ${visible ? 'is-visible' : ''}`}
      style={{ transitionDelay: visible ? `${(index % 2) * 0.1}s` : '0s' }}
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={r.image}
          alt={r.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-noche/70 via-transparent to-transparent" />
        <div className="absolute top-4 left-4">
          <div className="w-11 h-11 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:bg-lima/30 group-hover:border-lima/50 transition-all duration-500">
            <Icon className="w-5 h-5 text-white" />
          </div>
        </div>
        <div className="absolute bottom-4 left-4">
          <span className="text-white/80 text-[10px] font-mono uppercase tracking-widest">
            {r.eyebrow}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-7 flex-1 flex flex-col">
        <h3 className="text-oliva font-bold text-2xl md:text-3xl mb-3">{r.title}</h3>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6 flex-1">
          {r.description}
        </p>
        <div className="inline-flex items-center gap-2 text-oliva text-sm font-semibold group-hover:gap-3 transition-all">
          {r.cta}
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="h-[3px] bg-oliva/10 relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 bg-lima w-0 group-hover:w-full transition-all duration-700 ease-out" />
      </div>
    </Link>
  );
}

export function HomeRubros() {
  const [headerRef, headerVisible] = useReveal<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-[1600px] mx-auto w-full">
        <div
          ref={headerRef}
          className={`max-w-2xl mb-14 md:mb-16 scroll-reveal ${headerVisible ? 'is-visible' : ''}`}
        >
          <div className="inline-block border border-oliva/30 px-3 py-1 mb-6">
            <span className="text-oliva text-xs font-mono uppercase tracking-widest">
              Explorá HISOIL
            </span>
          </div>
          <h2 className="text-oliva mb-4">Todo lo que hacemos, en un solo lugar.</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Cuatro grandes áreas de trabajo que conforman nuestra propuesta integral para la regeneración de suelos y la valorización de residuos orgánicos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {rubros.map((r, i) => (
            <RubroCard key={r.title} r={r} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
