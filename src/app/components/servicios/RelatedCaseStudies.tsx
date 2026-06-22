import { useReveal } from '../../hooks/useReveal';

const caseImgs = [
  "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=900&q=80&fit=crop",
  "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=900&q=80&fit=crop",
  "https://images.unsplash.com/photo-1651328846832-d1ab8725bf24?w=900&q=80&fit=crop",
];

const cases = [
  {
    number: "01",
    client: "Empresa agroindustrial del NEA",
    sector: "Procesamiento de aceite de soja",
    challenge:
      "Efluentes con alta carga de aceites y sólidos suspendidos, incumplimiento de normativa provincial y riesgo de clausura operativa.",
    solution:
      "Diseño e implementación de trampa de grasas, laguna anaerobia y sistema de riego controlado de efluentes tratados.",
    result: "−85% carga contaminante",
    badge: "Efluentes industriales",
  },
  {
    number: "02",
    client: "Pool de siembra — 12.000 ha",
    sector: "Soja, maíz y girasol",
    challenge:
      "Baja eficiencia de fertilización nitrogenada, costo creciente de insumos y deterioro de la estructura del suelo por labranza intensiva.",
    solution:
      "Diagnóstico de suelo, ajuste de plan de fertilización con bioinsumos complementarios y plan de rotación para recuperación de materia orgánica.",
    result: "+22% rendimiento en soja",
    badge: "Nutrición de cultivos",
  },
  {
    number: "03",
    client: "Municipio de [Región]",
    sector: "Gestión de RSU y pasivos",
    challenge:
      "Relleno sanitario colmatado sin plan de cierre, contaminación de agua subterránea y presión vecinal y periodística.",
    solution:
      "EIA, diseño del plan de cierre, gestión de permisos ante organismo ambiental y coordinación con municipio para comunicación pública.",
    result: "Plan aprobado — 8 meses",
    badge: "Remediación ambiental",
  },
];

interface CaseCardProps {
  c: typeof cases[number];
  img: string;
  index: number;
}

function CaseCard({ c, img, index }: CaseCardProps) {
  const [ref, visible] = useReveal<HTMLDivElement>({ threshold: 0.2 });

  // Stagger child reveals — each child appears delayed when the card becomes visible
  const childDelay = (n: number) => (visible ? `${0.15 + n * 0.12}s` : '0s');

  return (
    <div
      ref={ref}
      className={`scroll-reveal group ${visible ? 'is-visible' : ''}`}
      style={{ transitionDelay: visible ? `${index * 0.12}s` : '0s' }}
    >
      <div className="relative h-full flex flex-col">
        {/* Number overlay top */}
        <div className="flex items-start justify-between mb-6">
          <span
            className="text-oliva/15 group-hover:text-oliva/30 transition-colors duration-500 font-bold font-mono leading-none"
            style={{ fontSize: 'clamp(3.5rem, 5vw, 5rem)' }}
          >
            {c.number}
          </span>
          <span className="text-xs font-mono text-oliva border border-oliva/30 bg-white px-3 py-1.5 rounded-full mt-3">
            {c.badge}
          </span>
        </div>

        {/* Image with subtle reveal */}
        <div
          className="relative aspect-[4/3] rounded-xl overflow-hidden mb-6 transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: childDelay(0),
          }}
        >
          <img
            src={img}
            alt={c.client}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-oliva/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Client + sector */}
        <div
          className="mb-6 transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(15px)',
            transitionDelay: childDelay(1),
          }}
        >
          <h3 className="text-oliva font-bold text-xl mb-1">{c.client}</h3>
          <div className="text-gray-600 text-sm font-mono">{c.sector}</div>
        </div>

        {/* Divider */}
        <div
          className="h-px bg-oliva/15 mb-6 transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'scaleX(1)' : 'scaleX(0)',
            transformOrigin: 'left',
            transitionDelay: childDelay(2),
          }}
        />

        {/* Desafío */}
        <div
          className="mb-5 transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(15px)',
            transitionDelay: childDelay(3),
          }}
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-oliva/40" />
            <span className="text-oliva text-[10px] font-mono uppercase tracking-widest">Desafío</span>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">{c.challenge}</p>
        </div>

        {/* Solución */}
        <div
          className="mb-6 transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(15px)',
            transitionDelay: childDelay(4),
          }}
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-oliva" />
            <span className="text-oliva text-[10px] font-mono uppercase tracking-widest">Solución</span>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">{c.solution}</p>
        </div>

        {/* Result pill */}
        <div
          className="mt-auto transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(15px)',
            transitionDelay: childDelay(5),
          }}
        >
          <div className="inline-flex items-center gap-2 bg-oliva text-white px-5 py-3 rounded-full">
            <span className="text-[10px] font-mono uppercase tracking-widest text-white/65">Resultado</span>
            <span className="font-bold text-sm">{c.result}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function RelatedCaseStudies() {
  const [headerRef, headerVisible] = useReveal<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-[1600px] mx-auto w-full">
        {/* Header */}
        <div
          ref={headerRef}
          className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20 scroll-reveal ${headerVisible ? 'is-visible' : ''}`}
        >
          <div className="max-w-2xl">
            <div className="inline-block border border-oliva/30 px-3 py-1 mb-6">
              <span className="text-oliva text-xs font-mono uppercase tracking-widest">09 — Casos de estudio</span>
            </div>
            <h2 className="text-oliva">Resultados en campo</h2>
          </div>
          <button className="self-start md:self-auto text-oliva border border-oliva/40 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-oliva hover:text-white transition-all whitespace-nowrap">
            Ver todos los casos →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {cases.map((c, i) => (
            <CaseCard key={c.number} c={c} img={caseImgs[i]} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
