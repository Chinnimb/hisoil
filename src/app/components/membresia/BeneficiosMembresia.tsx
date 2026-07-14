import { TrendingDown, Zap, Package, FileText, Bell, Handshake } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';

const benefits = [
  {
    Icon: TrendingDown,
    title: "Descuentos exclusivos",
    description: "Miembros acceden a precios preferenciales en toda la línea de productos Hisoil, con descuentos que aumentan según el plan y la antigüedad.",
    tag: "Hasta 20% off",
  },
  {
    Icon: Zap,
    title: "Asesoramiento prioritario",
    description: "Acceso directo al equipo técnico con respuesta garantizada en menos de 4 horas hábiles. Consultas ilimitadas incluidas en el plan.",
    tag: "Respuesta en 4 hs",
  },
  {
    Icon: Package,
    title: "Envíos programados",
    description: "Configurá un calendario de envíos recurrentes y recibí los productos en el momento exacto que los necesitás, sin interrupciones en tu operación.",
    tag: "Sin cargo adicional",
  },
  {
    Icon: FileText,
    title: "Fichas técnicas y recursos",
    description: "Biblioteca exclusiva con protocolos de aplicación, fichas técnicas actualizadas, guías de manejo y acceso anticipado a nuevas líneas de productos.",
    tag: "Actualizadas 2025",
  },
  {
    Icon: Bell,
    title: "Alertas de campaña",
    description: "Recibís notificaciones personalizadas sobre ventanas de aplicación óptima, alertas de plagas y recomendaciones técnicas según tu zona y cultivo.",
    tag: "Personalizado",
  },
  {
    Icon: Handshake,
    title: "Atención 24 hs",
    description: "Canal de comunicación exclusivo para miembros activos. Atención preferencial fuera del horario comercial para situaciones críticas de campo.",
    tag: "7 días",
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
      className={`scroll-reveal bg-white p-8 flex flex-col group hover:bg-white transition-colors relative ${visible ? 'is-visible' : ''}`}
      style={{ transitionDelay: visible ? `${(index % 3) * 0.08}s` : '0s' }}
    >
      <div className="absolute top-0 left-0 w-0 h-0.5 bg-lima group-hover:w-full transition-all duration-500" />

      {/* Glass icon */}
      <div className="w-12 h-12 rounded-xl bg-oliva/10 backdrop-blur-md border border-oliva/20 flex items-center justify-center mb-5 group-hover:bg-lima/25 group-hover:border-lima/40 transition-all duration-500">
        <Icon className="w-5 h-5 text-oliva transition-colors duration-500" />
      </div>

      <div className="flex items-start justify-between mb-3 gap-2">
        <h3 className="text-oliva font-semibold">{b.title}</h3>
        <span className="bg-paja text-gray-700 text-[10px] font-mono px-2 py-1 rounded-full whitespace-nowrap flex-shrink-0 border border-gray-200">
          {b.tag}
        </span>
      </div>
      <p className="text-gray-700 text-sm leading-relaxed flex-1">{b.description}</p>
    </div>
  );
}

export function BeneficiosMembresia() {
  const [headerRef, headerVisible] = useReveal<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 bg-paja">
      <div className="max-w-[1600px] mx-auto w-full">
        {/* Header */}
        <div
          ref={headerRef}
          className={`mb-16 max-w-2xl scroll-reveal ${headerVisible ? 'is-visible' : ''}`}
        >
          <div className="inline-block border border-oliva/30 px-3 py-1 mb-6">
            <span className="text-oliva text-xs font-mono uppercase tracking-widest">03 — Beneficios</span>
          </div>
          <h2 className="text-oliva mb-4">Todo lo que incluye ser miembro Hisoil.</h2>
          <p className="text-gray-700 leading-relaxed">
            Desde el descuento en productos hasta el acompañamiento técnico personalizado, cada beneficio está diseñado para mejorar la rentabilidad de tu operación.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
          {benefits.map((b, i) => (
            <BenefitCard key={b.title} b={b} index={i} />
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-8 flex items-center justify-center gap-3 text-gray-600 text-sm">
          <div className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
          <span className="font-mono text-xs">Todos los beneficios aplican desde el primer mes de suscripción activa</span>
          <div className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
        </div>
      </div>
    </section>
  );
}
