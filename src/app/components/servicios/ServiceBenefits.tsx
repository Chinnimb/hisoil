import { Leaf, TrendingUp, Settings, Check } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';

const benefits = [
  {
    number: "01",
    Icon: Leaf,
    title: "Beneficio ambiental",
    headline: "Cumplimiento normativo garantizado",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=85&fit=crop",
    points: [
      "Reducción del 60% en pasivos ambientales",
      "Certificación ISO 14001 del proceso",
      "Documentación regulatoria completa",
      "Cero vertidos fuera de norma",
    ],
    badge: "Ambiental",
  },
  {
    number: "02",
    Icon: TrendingUp,
    title: "Beneficio económico",
    headline: "Ahorro y retorno medible",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=1200&q=85&fit=crop",
    points: [
      "Reducción de costos de disposición final",
      "Evitar multas y sanciones regulatorias",
      "Valorización de subproductos recuperados",
      "ROI estimado 3x en 12 meses",
    ],
    badge: "Económico",
  },
  {
    number: "03",
    Icon: Settings,
    title: "Beneficio operativo",
    headline: "Eficiencia y continuidad productiva",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1200&q=85&fit=crop",
    points: [
      "Gestión integral sin carga operativa interna",
      "Asesor técnico dedicado en cada proyecto",
      "Reportes automáticos y trazabilidad completa",
      "Flexibilidad en frecuencia y volumen",
    ],
    badge: "Operativo",
  },
];

interface BenefitCardProps {
  b: typeof benefits[number];
  index: number;
}

function BenefitCard({ b, index }: BenefitCardProps) {
  const [ref, visible] = useReveal<HTMLDivElement>({ threshold: 0.2 });
  const { Icon } = b;

  return (
    <div
      ref={ref}
      className={`scroll-reveal group relative rounded-2xl overflow-hidden border border-gray-300 hover:border-oliva/40 hover:shadow-2xl transition-all duration-500 h-full flex flex-col bg-white ${visible ? 'is-visible' : ''}`}
      style={{ transitionDelay: visible ? `${index * 0.12}s` : '0s' }}
    >
      {/* Top image section */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={b.image}
          alt={b.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Green gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-noche/80 via-noche/25 to-transparent" />

        {/* Icon + badge */}
        <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
          <div className="w-11 h-11 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:bg-lima/30 group-hover:border-lima/50 transition-all duration-500">
            <Icon className="w-5 h-5 text-white" />
          </div>
          <span className="text-[10px] font-mono text-white bg-white/20 backdrop-blur-md border border-white/30 px-3 py-1.5 rounded-full uppercase tracking-widest">
            {b.badge}
          </span>
        </div>

        {/* Number + title at bottom */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="text-white/50 font-bold font-mono text-2xl leading-none mb-1">{b.number}</div>
          <h3 className="text-white font-bold text-xl leading-tight">{b.title}</h3>
        </div>
      </div>

      {/* Headline */}
      <div className="px-7 pt-6 pb-4 border-b border-gray-200">
        <p className="text-oliva font-semibold text-base">{b.headline}</p>
      </div>

      {/* Points */}
      <div className="p-7 flex-1">
        <ul className="space-y-3">
          {b.points.map((point) => (
            <li key={point} className="flex items-start gap-3 text-sm text-gray-700">
              <div className="w-5 h-5 rounded-full bg-oliva/10 border border-oliva/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-oliva" strokeWidth={3} />
              </div>
              {point}
            </li>
          ))}
        </ul>
      </div>

      {/* Animated underline */}
      <div className="h-[3px] bg-oliva/10 relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 bg-lima w-0 group-hover:w-full transition-all duration-700 ease-out" />
      </div>
    </div>
  );
}

export function ServiceBenefits() {
  const [headerRef, headerVisible] = useReveal<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section id="agricultura-regenerativa" className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-[1600px] mx-auto w-full">
        {/* Header */}
        <div
          ref={headerRef}
          className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 scroll-reveal ${headerVisible ? 'is-visible' : ''}`}
        >
          <div className="max-w-xl">
            <div className="inline-block border border-oliva/30 px-3 py-1 mb-6">
              <span className="text-oliva text-xs font-mono uppercase tracking-widest">04 — Beneficios</span>
            </div>
            <h2 className="text-oliva mb-3">Beneficios para tu operación</h2>
            <p className="text-gray-700 leading-relaxed">
              Impacto concreto y medible en las tres dimensiones que más importan a cada cliente.
            </p>
          </div>
          <button className="self-start md:self-auto border border-oliva text-oliva px-6 py-3 rounded-full text-sm font-medium hover:bg-oliva hover:text-white transition-all whitespace-nowrap">
            Solicitar Presupuesto
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((b, i) => (
            <BenefitCard key={b.number} b={b} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
