import { Recycle, Layers, Mountain, UserRoundCog, ArrowUpRight } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';
import { useModal } from '../../context/ModalContext';
import imgResiduos from '../../../imports/servicios-tratamiento-residuos.webp';
import imgCompostaje from '../../../imports/servicios-compostaje-a-medida.webp';
import imgRestauracion from '../../../imports/servicios-restauracion-ambiental.webp';
import imgAsesoramiento from '../../../imports/servicios-asesoramiento-tecnico.webp';

const services = [
  {
    Icon: Recycle,
    stage: 'Residuo',
    title: 'Tratamiento de residuos orgánicos',
    description:
      'Gestionamos integralmente residuos orgánicos industriales, agropecuarios, municipales y de espacios verdes mediante procesos de valorización biológica. Nos ocupamos de la logística, el tratamiento, la trazabilidad y la certificación de disposición final.',
    tags: ['Economía circular', 'Trazabilidad', 'Certificados ambientales'],
    cta: 'Ver servicio',
    action: 'link' as const,
    image: imgResiduos,
    imageAlt: 'Camión descargando residuos orgánicos junto a una pila de compostaje',
  },
  {
    Icon: Layers,
    stage: 'Proceso',
    title: 'Compostaje a medida',
    description:
      'Diseñamos e implementamos soluciones de compostaje adaptadas a cada operación. Transformamos los residuos propios en compost de alta calidad, reduciendo costos y generando un recurso valioso para la producción.',
    tags: ['Compostaje industrial', 'Valorización', 'Soluciones a medida'],
    cta: 'Ver servicio',
    action: 'link' as const,
    image: imgCompostaje,
    imageAlt: 'Vista aérea de volteadoras trabajando sobre las pilas de compostaje',
  },
  {
    Icon: Mountain,
    stage: 'Recuperación',
    title: 'Restauración ambiental',
    description:
      'Desarrollamos soluciones para recuperación de suelos degradados, control de erosión, hidrosiembra y revegetación con especies nativas. Integramos productos, asistencia técnica y ejecución de proyectos.',
    tags: ['Hidrosiembra', 'Control de erosión', 'Restauración ecológica'],
    cta: 'Ver servicio',
    action: 'link' as const,
    image: imgRestauracion,
    imageAlt: 'Obra de restauración de espacios verdes con revegetación frente a un edificio',
  },
  {
    Icon: UserRoundCog,
    stage: 'Conocimiento',
    title: 'Asesoramiento técnico',
    description:
      'Brindamos acompañamiento profesional para seleccionar productos, definir dosis de aplicación y diseñar soluciones adaptadas a cada proyecto. Nuestro equipo acompaña desde el diagnóstico inicial hasta la implementación.',
    tags: ['Diagnóstico técnico', 'Recomendaciones', 'Acompañamiento permanente'],
    cta: 'Solicitar asesoramiento',
    action: 'modal' as const,
    image: imgAsesoramiento,
    imageAlt: 'Técnico de HISOIL evaluando pilas de compost en un terreno',
  },
];

interface CardProps {
  s: (typeof services)[number];
  index: number;
}

// Ancla por servicio, derivada del stage: servicio-residuo, servicio-proceso,
// servicio-recuperacion, servicio-conocimiento. La usa el footer para enlazar.
function slugStage(stage: string) {
  return stage
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
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
      id={`servicio-${slugStage(s.stage)}`}
      className={`scroll-mt-28 scroll-reveal border border-oliva/15 rounded-2xl overflow-hidden flex flex-col md:flex-row group hover:border-oliva/40 hover:shadow-2xl transition-all duration-500 bg-white ${visible ? 'is-visible' : ''}`}
      style={{ transitionDelay: visible ? `${(index % 2) * 0.12}s` : '0s' }}
    >
      {/* Image left */}
      <div className="relative md:w-2/5 aspect-[16/9] md:aspect-auto md:min-h-[280px] overflow-hidden flex-shrink-0">
        <img
          loading="lazy"
          decoding="async"
          src={s.image}
          alt={s.imageAlt}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-white/90 backdrop-blur-md border border-oliva/20 flex items-center justify-center z-10">
          <Icon className="w-5 h-5 text-oliva" />
        </div>
        <div className="absolute top-4 right-4 bg-noche/80 backdrop-blur-md text-white text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 rounded-full z-10">
          {s.stage}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 md:p-7 flex flex-col">
        <h3 className="text-oliva font-bold text-xl md:text-2xl leading-tight mb-3">{s.title}</h3>
        <p className="text-gray-700 text-sm leading-relaxed mb-4 flex-1">{s.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-2">
          {s.tags.map((tag) => (
            <span
              key={tag}
              className="bg-paja/50 text-oliva text-[11px] font-mono px-2.5 py-1 rounded-full border border-oliva/15"
            >
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
    <section
      id="servicios-overview"
      className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 bg-white"
    >
      <div className="max-w-[1600px] mx-auto w-full">
        {/* Header */}
        <div
          ref={headerRef}
          className={`max-w-3xl mb-14 md:mb-16 scroll-reveal ${headerVisible ? 'is-visible' : ''}`}
        >
          <div className="inline-block border border-oliva/30 px-3 py-1 mb-6">
            <span className="text-oliva text-xs font-mono uppercase tracking-widest">
              01 — Nuestros servicios
            </span>
          </div>
          <h2 className="text-oliva mb-4">Potenciá tus proyectos con nuestros servicios.</h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-4">
            Cuatro servicios que forman un mismo recorrido: recibimos el residuo, lo transformamos
            mediante un proceso técnico, recuperamos suelos y ecosistemas, y acompañamos cada
            proyecto con conocimiento especializado.
          </p>
          <div className="flex flex-wrap items-center gap-2 text-oliva/70 text-xs font-mono uppercase tracking-widest">
            {['Residuo', 'Proceso', 'Recuperación', 'Conocimiento'].map((step, i, arr) => (
              <span key={step} className="flex items-center gap-2">
                <span className="text-oliva">{step}</span>
                {i < arr.length - 1 && <ArrowUpRight className="w-3 h-3 rotate-45 text-oliva/40" />}
              </span>
            ))}
          </div>
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
