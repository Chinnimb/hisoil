import { Beef, Beer, CircleCheck } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';
import { AnimatedCounter } from '../AnimatedCounter';

type LucideIcon = typeof Beef;

interface FeaturedCase {
  id: string;
  Icon: LucideIcon;
  industry: string;
  title: string;
  intro: string;
  treats: string[];
  services: string[];
  benefits: string[];
  result: string;
  /** Cifra destacada (solo cuando el cliente la informó) */
  impact?: { end: number; prefix: string; suffix: string; label: string };
  tags: string[];
}

const cases: FeaturedCase[] = [
  {
    id: 'caso-frigorifica',
    Icon: Beef,
    industry: 'Industria Frigorífica de Exportación',
    title: 'Gestión integral de efluentes y residuos orgánicos para plantas frigoríficas',
    intro:
      'Implementamos soluciones para el tratamiento y valorización de efluentes y residuos orgánicos provenientes de frigoríficos habilitados para exportación, adaptando cada proyecto a los requerimientos ambientales, operativos y sanitarios de la industria.',
    treats: [
      'Rumen bovino',
      'Contenido digestivo',
      'Sangre y lodos biológicos',
      'Barros de plantas de tratamiento',
      'Grasas y sólidos separados',
      'Efluentes industriales',
      'Residuos orgánicos del proceso',
    ],
    services: [
      'Tratamiento biológico de residuos orgánicos',
      'Compostaje controlado de rumen y contenido digestivo',
      'Gestión integral de efluentes',
      'Certificados de tratamiento y disposición final',
      'Asistencia técnica y cumplimiento normativo',
      'Desarrollo de programas de economía circular',
    ],
    benefits: [
      'Reducción del impacto ambiental',
      'Disminución de costos de disposición',
      'Valorización de residuos mediante compostaje',
      'Cumplimiento de normativa ambiental',
      'Trazabilidad completa del proceso',
    ],
    result:
      'Miles de toneladas de residuos orgánicos transformadas en compost de alta calidad, reduciendo emisiones y promoviendo un modelo de economía circular para la industria frigorífica.',
    impact: { end: 30000, prefix: 'Más de ', suffix: '', label: 'toneladas de residuos tratados' },
    tags: [
      'Rumen y contenido digestivo',
      'Efluentes industriales',
      'Economía circular',
      'Certificados de tratamiento',
      'Cobertura nacional',
    ],
  },
  {
    id: 'caso-cervecera',
    Icon: Beer,
    industry: 'Industria Cervecera',
    title: 'Tratamiento de efluentes y subproductos orgánicos',
    intro:
      'Desarrollamos soluciones para la gestión integral de efluentes y residuos orgánicos generados por la industria cervecera, permitiendo reducir costos de disposición, cumplir con la normativa ambiental y valorizar los subproductos mediante procesos biológicos.',
    treats: [
      'Bagazo de malta',
      'Levadura excedente',
      'Barros biológicos de plantas de tratamiento',
      'Efluentes industriales',
      'Residuos orgánicos del proceso productivo',
      'Lodos provenientes de sistemas de tratamiento',
    ],
    services: [
      'Tratamiento de efluentes industriales',
      'Compostaje de bagazo y barros biológicos',
      'Gestión integral de residuos orgánicos',
      'Certificados de tratamiento y disposición final',
      'Asesoramiento técnico y cumplimiento normativo',
      'Programas de economía circular',
    ],
    benefits: [
      'Reducción de costos de gestión de residuos',
      'Disminución del impacto ambiental',
      'Valorización de subproductos orgánicos',
      'Cumplimiento de la legislación ambiental',
      'Trazabilidad y certificación del tratamiento',
    ],
    result:
      'Los residuos generados durante la elaboración de cerveza se transforman en compost de alta calidad, reincorporando nutrientes al suelo y cerrando el ciclo de la materia orgánica.',
    tags: [
      'Bagazo de malta',
      'Barros biológicos',
      'Efluentes industriales',
      'Economía circular',
      'Compostaje',
      'ESG',
    ],
  },
];

function List({ title, items, dark = false }: { title: string; items: string[]; dark?: boolean }) {
  return (
    <div>
      <div
        className={`text-[10px] font-mono uppercase tracking-widest mb-4 ${dark ? 'text-lima' : 'text-oliva'}`}
      >
        {title}
      </div>
      <ul className="space-y-2.5">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-3">
            <CircleCheck
              className={`w-4 h-4 mt-0.5 flex-shrink-0 ${dark ? 'text-lima' : 'text-oliva'}`}
            />
            <span className={`text-sm leading-snug ${dark ? 'text-white/90' : 'text-gray-700'}`}>
              {it}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CaseBlock({ c, index }: { c: FeaturedCase; index: number }) {
  const [ref, visible] = useReveal<HTMLDivElement>({ threshold: 0.1 });
  const { Icon } = c;
  return (
    <div
      ref={ref}
      id={c.id}
      className={`scroll-mt-28 scroll-reveal border border-oliva/15 rounded-3xl overflow-hidden bg-white shadow-sm ${visible ? 'is-visible' : ''}`}
      style={{ transitionDelay: visible ? `${index * 0.1}s` : '0s' }}
    >
      {/* Encabezado */}
      <div className="bg-oliva text-white p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-11 h-11 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center">
              <Icon className="w-5 h-5 text-lima" />
            </div>
            <span className="text-lima text-xs font-mono uppercase tracking-widest">
              {c.industry}
            </span>
          </div>
          <h3 className="text-white font-bold text-2xl md:text-3xl leading-tight mb-4">
            {c.title}
          </h3>
          <p className="text-white/80 leading-relaxed">{c.intro}</p>
        </div>
        <div className="lg:col-span-5 flex flex-col justify-end">
          {c.impact && (
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6 mb-5">
              <div className="text-white font-bold leading-none mb-2 text-3xl md:text-4xl">
                <AnimatedCounter end={c.impact.end} prefix={c.impact.prefix} />
              </div>
              <div className="text-white/75 text-sm">{c.impact.label}</div>
            </div>
          )}
          <div className="flex flex-wrap gap-2">
            {c.tags.map((t) => (
              <span
                key={t}
                className="bg-white/10 border border-white/20 text-white/90 text-xs font-mono px-3 py-1.5 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Detalle */}
      <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        <List title="¿Qué tratamos?" items={c.treats} />
        <List title="Servicios realizados" items={c.services} />
        <List title="Beneficios" items={c.benefits} />
      </div>

      {/* Resultado */}
      <div className="border-t border-oliva/10 bg-nata px-8 md:px-12 py-8">
        <div className="text-oliva text-[10px] font-mono uppercase tracking-widest mb-2">
          Resultado
        </div>
        <p className="text-oliva font-semibold text-lg md:text-xl leading-snug max-w-4xl">
          {c.result}
        </p>
      </div>
    </div>
  );
}

export function FeaturedIndustryCases() {
  const [headerRef, headerVisible] = useReveal<HTMLDivElement>({ threshold: 0.3 });
  return (
    <section
      id="casos-destacados"
      className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 bg-paja"
    >
      <div className="max-w-[1600px] mx-auto w-full">
        <div
          ref={headerRef}
          className={`max-w-2xl mb-12 md:mb-14 scroll-reveal ${headerVisible ? 'is-visible' : ''}`}
        >
          <div className="inline-block border border-oliva/30 px-3 py-1 mb-6">
            <span className="text-oliva text-xs font-mono uppercase tracking-widest">
              Casos destacados
            </span>
          </div>
          <h2 className="text-oliva">Industrias que ya cerraron el ciclo de sus residuos.</h2>
        </div>
        <div className="space-y-8">
          {cases.map((c, i) => (
            <CaseBlock key={c.id} c={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
