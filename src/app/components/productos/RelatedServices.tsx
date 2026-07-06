import { Recycle, RotateCcw, UserRoundCog } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';

const services = [
  {
    Icon: Recycle,
    title: "Tratamiento de residuos",
    description:
      "Gestión integral de efluentes y residuos orgánicos generados durante la producción. Complementa el uso de productos biológicos con un circuito cerrado de residuos.",
    link: "/servicios",
    linkLabel: "Ver servicio",
    tags: ["Efluentes", "RSO", "Normativa ambiental"],
  },
  {
    Icon: RotateCcw,
    title: "Compostaje a medida",
    description:
      "Producción de compost certificado a partir de residuos orgánicos propios. Permite reducir costos de insumos y valorizar subproductos de la actividad.",
    link: "/servicios",
    linkLabel: "Ver servicio",
    tags: ["Economía circular", "Producción propia", "Certificado"],
  },
  {
    Icon: UserRoundCog,
    title: "Asesoramiento técnico",
    description:
      "Acompañamiento técnico personalizado para diseñar el plan nutricional más eficiente. Análisis de suelo, diagnóstico y recomendación de productos específicos para cada lote.",
    link: "/servicios",
    linkLabel: "Solicitar asesoramiento",
    tags: ["Diagnóstico", "Plan nutricional", "Asesor dedicado"],
  },
];

interface CardProps {
  s: typeof services[number];
  index: number;
}

function Card({ s, index }: CardProps) {
  const [ref, visible] = useReveal<HTMLDivElement>({ threshold: 0.2 });
  const { Icon } = s;

  return (
    <div
      ref={ref}
      className={`scroll-reveal border border-oliva/15 rounded-2xl p-8 flex flex-col group hover:border-oliva/40 hover:shadow-xl transition-all duration-500 bg-white ${visible ? 'is-visible' : ''}`}
      style={{ transitionDelay: visible ? `${index * 0.12}s` : '0s' }}
    >
      {/* Glass icon */}
      <div className="w-14 h-14 rounded-xl bg-oliva/10 backdrop-blur-md border border-oliva/20 flex items-center justify-center mb-6 group-hover:bg-lima/25 group-hover:border-lima/40 transition-all duration-500">
        <Icon className="w-6 h-6 text-oliva transition-colors duration-500" />
      </div>

      <h3 className="text-oliva font-semibold text-lg mb-3">{s.title}</h3>
      <p className="text-gray-700 text-sm leading-relaxed flex-1 mb-6">{s.description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-6">
        {s.tags.map((tag) => (
          <span key={tag} className="bg-paja text-gray-700 text-xs px-2.5 py-1 rounded-full font-mono">
            {tag}
          </span>
        ))}
      </div>

      {/* Link */}
      <a
        href={s.link}
        className="text-oliva text-sm font-medium flex items-center gap-2 hover:text-lima transition-colors self-start"
      >
        {s.linkLabel}
        <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
      </a>

      {/* Animated underline */}
      <div className="mt-5 h-[2px] bg-oliva/10 relative overflow-hidden rounded-full">
        <div className="absolute inset-y-0 left-0 bg-lima w-0 group-hover:w-full transition-all duration-700 ease-out" />
      </div>
    </div>
  );
}

export function RelatedServices() {
  const [headerRef, headerVisible] = useReveal<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-[1600px] mx-auto w-full">
        {/* Header */}
        <div
          ref={headerRef}
          className={`mb-16 max-w-2xl scroll-reveal ${headerVisible ? 'is-visible' : ''}`}
        >
          <div className="inline-block border border-oliva/30 px-3 py-1 mb-6">
            <span className="text-oliva text-xs font-mono uppercase tracking-widest">09 — Servicios relacionados</span>
          </div>
          <h2 className="text-oliva mb-4">Potenciá tus productos con nuestros servicios</h2>
          <p className="text-gray-700 leading-relaxed">
            Los productos funcionan mejor con el acompañamiento técnico adecuado. Estos servicios complementan y potencian cada solución.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <Card key={s.title} s={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
