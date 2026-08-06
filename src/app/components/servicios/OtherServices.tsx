import { Recycle, Layers, Mountain, UserRoundCog, ArrowUpRight } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';
import { useModal } from '../../context/ModalContext';

const services = [
  {
    Icon: Recycle,
    title: 'Tratamiento de residuos orgánicos',
    description:
      'Gestionamos integralmente residuos orgánicos industriales, agropecuarios, municipales y de espacios verdes mediante procesos de valorización biológica. Nos ocupamos de la logística, el tratamiento, la trazabilidad y la certificación de disposición final.',
    tags: ['Economía circular', 'Trazabilidad', 'Certificados ambientales'],
    cta: 'Ver servicio',
    action: 'link' as const,
    image: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=1200&q=85&fit=crop',
  },
  {
    Icon: Layers,
    title: 'Compostaje a medida',
    description:
      'Diseñamos e implementamos soluciones de compostaje adaptadas a cada operación. Transformamos los residuos propios en compost de alta calidad, reduciendo costos y generando un recurso valioso para la producción.',
    tags: ['Compostaje industrial', 'Valorización', 'Soluciones a medida'],
    cta: 'Ver servicio',
    action: 'link' as const,
    image: 'https://images.unsplash.com/photo-1611843467160-25afb8df1074?w=1200&q=85&fit=crop',
  },
  {
    Icon: Mountain,
    title: 'Restauración ambiental',
    description:
      'Desarrollamos soluciones para recuperación de suelos degradados, control de erosión, hidrosiembra y revegetación con especies nativas. Integramos productos, asistencia técnica y ejecución de proyectos.',
    tags: ['Hidrosiembra', 'Control de erosión', 'Restauración ecológica'],
    cta: 'Ver servicio',
    action: 'link' as const,
    image: 'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=1200&q=85&fit=crop',
  },
  {
    Icon: UserRoundCog,
    title: 'Asesoramiento técnico',
    description:
      'Brindamos acompañamiento profesional para seleccionar productos, definir dosis de aplicación y diseñar soluciones adaptadas a cada proyecto. Nuestro equipo acompaña desde el diagnóstico inicial hasta la implementación.',
    tags: ['Diagnóstico técnico', 'Recomendaciones', 'Acompañamiento permanente'],
    cta: 'Solicitar asesoramiento',
    action: 'modal' as const,
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1200&q=85&fit=crop',
  },
];

interface CardProps {
  s: typeof services[number];
  index: number;
}

function ServiceCard({ s, index }: CardProps) {
  const [ref, visible] = useReveal<HTMLDivElement>({ threshold: 0.2 });
  const { Icon } = s;
  const { open } = useModal();

  const buttonClass =
    'group inline-flex items-center gap-2 bg-oliva text-white text-sm font-semibold py-3 px-5 rounded-full hover:bg-lima hover:text-oliva transition-all mt-4 self-start';

  return (
    <div
      ref={ref}
      className={`scroll-reveal border border-oliva/15 rounded-2xl overflow-hidden flex flex-col md:flex-row group hover:border-oliva/40 hover:shadow-2xl transition-all duration-500 bg-white ${visible ? 'is-visible' : ''}`}
      style={{ transitionDelay: visible ? `${(index % 2) * 0.12}s` : '0s' }}
    >
      {/* Image left */}
      <div className="relative md:w-2/5 aspect-[16/9] md:aspect-auto md:min-h-[280px] overflow-hidden flex-shrink-0">
        <img
          src={s.image}
          alt={s.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-noche/70 via-transparent to-transparent" />
        <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
          <Icon className="w-5 h-5 text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 md:p-7 flex flex-col">
        <h3 className="text-oliva font-bold text-xl md:text-2xl leading-tight mb-3">{s.title}</h3>
        <p className="text-gray-700 text-sm leading-relaxed mb-4 flex-1">{s.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-2">
          {s.tags.map((tag) => (
            <span key={tag} className="bg-paja/50 text-oliva text-[11px] font-mono px-2.5 py-1 rounded-full border border-oliva/15">
              {tag}
            </span>
          ))}
        </div>

        {s.action === 'modal' ? (
          <button onClick={open} className={buttonClass}>
            {s.cta}
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        ) : (
          <a href="#que-es" className={buttonClass}>
            {s.cta}
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        )}
      </div>
    </div>
  );
}

export function OtherServices() {
  const [headerRef, headerVisible] = useReveal<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-[1600px] mx-auto w-full">
        {/* Header */}
        <div
          ref={headerRef}
          className={`max-w-3xl mb-14 md:mb-16 scroll-reveal ${headerVisible ? 'is-visible' : ''}`}
        >
          <div className="inline-block border border-oliva/30 px-3 py-1 mb-6">
            <span className="text-oliva text-xs font-mono uppercase tracking-widest">05 — Servicios complementarios</span>
          </div>
          <h2 className="text-oliva mb-4">Potenciá tus proyectos con nuestros servicios.</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Los mejores resultados se logran combinando productos de alta calidad con el respaldo de un equipo técnico especializado. Nuestros servicios integran gestión ambiental, valorización de residuos y asesoramiento para acompañar cada etapa de tu proyecto.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.title} s={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
