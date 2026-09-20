import { Link } from 'react-router';
import { ArrowUpRight, Recycle, Layers, Mountain, UserRoundCog } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { ImagePlaceholder } from './ImagePlaceholder';

// Los mismos 4 servicios (y las mismas fotos) que /servicios. Cuando estén las fotos finales,
// cargarlas acá y en servicios/OtherServices.tsx.
const services = [
  {
    title: 'Tratamiento de residuos orgánicos',
    href: '/servicios#servicio-residuo',
    description:
      'Gestionamos integralmente residuos orgánicos industriales, agropecuarios, municipales y de espacios verdes mediante procesos de valorización biológica. Nos ocupamos de la logística, el tratamiento, la trazabilidad y la certificación de disposición final.',
    Icon: Recycle,
    tag: 'Residuo',
    imageLabel: 'Recepción y manejo de residuos orgánicos en planta, con maquinaria',
    image: undefined as string | undefined,
  },
  {
    title: 'Compostaje a medida',
    href: '/servicios#servicio-proceso',
    description:
      'Diseñamos e implementamos soluciones de compostaje adaptadas a cada operación. Transformamos los residuos propios en compost de alta calidad, reduciendo costos y generando un recurso valioso para la producción.',
    Icon: Layers,
    tag: 'Proceso',
    imageLabel: 'Compostaje a medida — planta profesional',
    image: undefined as string | undefined,
  },
  {
    title: 'Restauración ambiental',
    href: '/servicios#servicio-recuperacion',
    description:
      'Desarrollamos soluciones para recuperación de suelos degradados, control de erosión, hidrosiembra y revegetación con especies nativas. Integramos productos, asistencia técnica y ejecución de proyectos.',
    Icon: Mountain,
    tag: 'Recuperación',
    imageLabel: 'Recuperación de terrenos, taludes o grandes superficies',
    image: undefined as string | undefined,
  },
  {
    title: 'Asesoramiento técnico',
    href: '/servicios#servicio-conocimiento',
    description:
      'Brindamos acompañamiento profesional para seleccionar productos, definir dosis de aplicación y diseñar soluciones adaptadas a cada proyecto. Nuestro equipo acompaña desde el diagnóstico inicial hasta la implementación.',
    Icon: UserRoundCog,
    tag: 'Conocimiento',
    imageLabel: 'Técnicos e ingenieros trabajando en campo',
    image: undefined as string | undefined,
  },
];

interface ServiceCardProps {
  s: (typeof services)[number];
  index: number;
}

function ServiceCard({ s, index }: ServiceCardProps) {
  const [ref, visible] = useReveal<HTMLAnchorElement>({ threshold: 0.2 });
  const { Icon } = s;
  return (
    <Link
      to={s.href}
      ref={ref}
      className={`group block scroll-reveal ${visible ? 'is-visible' : ''}`}
      style={{ transitionDelay: visible ? `${(index % 4) * 0.12}s` : '0s' }}
    >
      <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/15 hover:border-lima/40 hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
        {/* Background image — full card on hover */}
        {s.image && (
          <>
            <img
              loading="lazy"
              decoding="async"
              src={s.image}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 pointer-events-none"
            />
            {/* Dark gradient overlay on hover — asegura contraste con el texto */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          </>
        )}

        {/* Image visible en estado base (imagen chica arriba) — se oculta en hover */}
        <div
          className={`relative aspect-[4/3] overflow-hidden transition-opacity duration-500 ${s.image ? 'group-hover:opacity-0' : ''}`}
        >
          {s.image ? (
            <>
              <img
                loading="lazy"
                decoding="async"
                src={s.image}
                alt={s.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noche/85 via-noche/25 to-transparent" />
            </>
          ) : (
            <ImagePlaceholder label={s.imageLabel} dark />
          )}

          {/* Title dentro de la imagen — se oculta en hover con el bloque padre */}
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-white font-bold text-xl md:text-2xl leading-tight">{s.title}</h3>
          </div>
        </div>

        {/* Fixed elements — Icon + Tag arriba (siempre visibles) */}
        <div className="absolute top-4 left-4 z-10 flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:bg-lima group-hover:border-lima transition-all duration-500">
            <Icon className="w-5 h-5 text-white group-hover:text-oliva transition-colors duration-500" />
          </div>
          <span className="bg-white/95 text-oliva text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full font-semibold">
            {s.tag}
          </span>
        </div>

        {/* Arrow corner (siempre visible) */}
        <div className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:bg-lima group-hover:border-lima transition-all duration-500">
          <ArrowUpRight className="w-4 h-4 text-white group-hover:text-oliva transition-colors duration-300" />
        </div>

        {/* Title on hover — sobre la imagen full-card */}
        {s.image && (
          <h3 className="absolute top-1/2 -translate-y-1/2 left-6 right-6 z-10 text-white font-bold text-2xl md:text-3xl leading-tight drop-shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            {s.title}
          </h3>
        )}

        {/* Body — se mantiene visible, pero encima del image overlay en hover */}
        <div className="relative z-10 p-6 flex-1 flex flex-col justify-end">
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
              <span className="text-white/85 text-xs font-mono uppercase tracking-widest">
                Servicios
              </span>
            </div>
            <h2 className="text-white">
              Servicios integrales para cada etapa del ciclo regenerativo.
            </h2>
          </div>
          <Link to="/servicios">
            <button className="border border-white/40 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-lima hover:text-oliva hover:border-lima transition-all flex-shrink-0">
              Ver todos →
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.title} s={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
