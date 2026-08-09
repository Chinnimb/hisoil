import { useState } from 'react';
import { Award, Recycle, LineChart, ShieldCheck, Sprout, Layers, TreePine, Flame, Waves, Target, FlaskConical, TrendingUp, Rocket } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';
import { AnimatedCounter } from '../AnimatedCounter';

type LucideIcon = typeof Target;

interface Step {
  id: string;
  step: string;
  Icon: LucideIcon;
  title: string;
  short: string;
  image: string;
  imageCaption: string;
  render: () => React.ReactNode;
}

const stats = [
  { end: 44400, suffix: ' t', label: 'Residuos procesados', sub: 'medición 2022' },
  { end: 4168, suffix: ' tCO₂e', label: 'Huella organizacional', sub: 'GHG Protocol' },
  { end: 36951, suffix: ' tCO₂e', label: 'Reducción anual', sub: 'CDM AMS-III.F' },
];

const projectScope = [
  'Tratamiento biológico de residuos orgánicos no peligrosos',
  'Producción de compost estabilizado',
  'Reducción de emisiones de rellenos sanitarios',
  'Monitoreo continuo del proceso',
  'Cuantificación con metodología internacional',
  'Auditoría independiente',
  'Trazabilidad completa de la información',
];

const platformSolutions = [
  { Icon: Recycle, title: 'Compostaje certificado' },
  { Icon: Sprout, title: 'Agricultura regenerativa' },
  { Icon: Layers, title: 'Carbono orgánico del suelo' },
  { Icon: TreePine, title: 'Recuperación de áreas degradadas' },
  { Icon: Waves, title: 'Restauración ecológica' },
  { Icon: Flame, title: 'Biochar y enmiendas' },
  { Icon: LineChart, title: 'Soluciones basadas en la naturaleza' },
];

const steps: Step[] = [
  {
    id: 'contexto',
    step: '00',
    Icon: Target,
    title: 'Contexto',
    short: 'Del residuo al crédito de carbono',
    image: 'https://images.unsplash.com/photo-1611843467160-25afb8df1074?w=900&q=85&fit=crop',
    imageCaption: 'Compostaje profesional · plantas Hisoil',
    render: () => (
      <div className="space-y-5 text-gray-700 leading-relaxed">
        <p className="text-base md:text-lg">
          En Hisoil entendemos que el verdadero valor de una gestión ambiental no se mide únicamente por la cantidad de residuos tratados, sino por el <span className="text-oliva font-semibold">impacto positivo que genera sobre el clima, los suelos y la economía circular</span>.
        </p>
        <p>
          Desde hace más de dos décadas desarrollamos soluciones para el tratamiento biológico de residuos orgánicos provenientes de industrias, municipios y actividades agropecuarias, evitando que estos materiales sean enviados a disposición final.
        </p>
        <div className="bg-paja/50 border-l-4 border-lima rounded-r-xl px-5 py-4 mt-4">
          <p className="text-oliva font-semibold text-base md:text-lg leading-snug">
            Hoy ese trabajo evoluciona: <span className="text-lima">la generación de créditos de carbono certificados</span>.
          </p>
          <p className="text-gray-700 text-sm mt-2">
            Cada tonelada recuperada se convierte en un beneficio ambiental cuantificable, verificable y trazable.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'estrategia',
    step: '01',
    Icon: FlaskConical,
    title: 'Estrategia',
    short: 'Una estrategia basada en datos',
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=900&q=85&fit=crop',
    imageCaption: 'Inventario GHG Protocol · Alcance 1, 2 y 3',
    render: () => (
      <div className="space-y-5 text-gray-700 leading-relaxed">
        <p className="text-base md:text-lg">
          La generación de créditos de carbono comienza mucho antes de emitir un certificado. Requiere <span className="text-oliva font-semibold">medir, modelar, monitorear y demostrar científicamente</span> el impacto.
        </p>
        <p>
          En 2021 y 2022 desarrollamos dos <span className="text-oliva font-semibold">Inventarios Corporativos de Gases de Efecto Invernadero</span> bajo la metodología <span className="text-oliva font-semibold">GHG Protocol</span>, contemplando emisiones de Alcance 1, 2 y 3.
        </p>
        <p>
          Durante la medición 2022 se relevaron más de <span className="text-oliva font-semibold">44.400 t</span> de residuos orgánicos, con una huella de <span className="text-oliva font-semibold">4.168 tCO₂e</span> — una intensidad de <span className="text-lima font-bold">94 kg CO₂e por tonelada tratada</span>.
        </p>
      </div>
    ),
  },
  {
    id: 'proyecto',
    step: '02',
    Icon: ShieldCheck,
    title: 'Proyecto',
    short: 'Del inventario al proyecto certificado',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=900&q=85&fit=crop',
    imageCaption: 'Proyecto BCR-AR-763-13-003 · BioCarbon Standard',
    render: () => (
      <div className="space-y-5 text-gray-700 leading-relaxed">
        <div className="bg-oliva text-white rounded-2xl p-6">
          <div className="text-lima text-[10px] font-mono uppercase tracking-widest mb-2">Nombre del proyecto</div>
          <h4 className="text-white font-bold text-xl leading-tight mb-3">
            Treatment of Non-Hazardous Organic Waste to Obtain Compost
          </h4>
          <div className="inline-block bg-lima/20 border border-lima/40 rounded-full px-3 py-1">
            <span className="text-lima text-xs font-mono">BCR-AR-763-13-003</span>
          </div>
        </div>
        <p>
          Diseñado bajo la metodología <span className="text-oliva font-semibold">CDM AMS-III.F</span> — <em>Avoidance of Methane Emissions through Composting</em>, que cuantifica las emisiones evitadas cuando los residuos se tratan mediante compostaje aeróbico en lugar de rellenos sanitarios.
        </p>
        <p>
          Registrado en el <span className="text-oliva font-semibold">BioCarbon Standard – GHG Program</span>, habilitando monitoreo, verificación e inscripción de reducciones.
        </p>
      </div>
    ),
  },
  {
    id: 'impacto',
    step: '03',
    Icon: Award,
    title: 'Impacto',
    short: 'Qué genera este proyecto',
    image: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=900&q=85&fit=crop',
    imageCaption: 'Reducción de emisiones de metano',
    render: () => (
      <div className="space-y-5 text-gray-700 leading-relaxed">
        <p className="text-base md:text-lg">
          Cada tonelada de residuo orgánico evitada representa una <span className="text-oliva font-semibold">reducción potencial de emisiones de metano</span>, gas con alto potencial de calentamiento global.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {projectScope.map((item, i) => (
            <div key={item} className="bg-paja/40 border border-oliva/10 rounded-xl p-4 flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-oliva/10 border border-oliva/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-oliva text-[10px] font-mono font-bold">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <span className="text-gray-700 text-sm leading-snug">{item}</span>
            </div>
          ))}
        </div>
        <div className="bg-lima/10 border border-lima/40 rounded-xl p-5 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-oliva flex-shrink-0 mt-0.5" />
          <p className="text-gray-800 text-sm leading-relaxed">
            Todo el proyecto sigue criterios internacionales de <span className="text-oliva font-semibold">MRV (Monitoring, Reporting & Verification)</span>.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'resultados',
    step: '04',
    Icon: TrendingUp,
    title: 'Resultados',
    short: 'Proyecciones documentadas',
    image: 'https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?w=900&q=85&fit=crop',
    imageCaption: '36.951 tCO₂e evitadas por año',
    render: () => (
      <div className="space-y-5 text-gray-700 leading-relaxed">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-oliva text-white rounded-2xl p-6">
            <div className="text-lima text-[10px] font-mono uppercase tracking-widest mb-2">Reducción anual</div>
            <div className="font-bold text-3xl md:text-4xl mb-1">36.951 <span className="text-base text-lima">tCO₂e/año</span></div>
            <p className="text-white/70 text-xs">Estimación del PDD</p>
          </div>
          <div className="bg-oliva text-white rounded-2xl p-6">
            <div className="text-lima text-[10px] font-mono uppercase tracking-widest mb-2">Emisiones proyecto</div>
            <div className="font-bold text-3xl md:text-4xl mb-1">4.966 <span className="text-base text-lima">tCO₂e/año</span></div>
            <p className="text-white/70 text-xs">Cuarto año de operación</p>
          </div>
        </div>
        <p>
          Las reducciones se mantienen mediante tratamiento continuo y <span className="text-oliva font-semibold">sin emisiones por fugas (Leakage = 0)</span>, conforme a AMS-III.F.
        </p>
      </div>
    ),
  },
  {
    id: 'vision',
    step: '05',
    Icon: Rocket,
    title: 'Visión',
    short: 'Más allá del compost',
    image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=900&q=85&fit=crop',
    imageCaption: 'Plataforma integral de soluciones climáticas',
    render: () => (
      <div className="space-y-5 text-gray-700 leading-relaxed">
        <p className="text-base md:text-lg">
          La visión de Hisoil no se limita a evitar emisiones. Desarrollamos una <span className="text-oliva font-semibold">plataforma de soluciones climáticas</span> que integra diferentes proyectos ambientales.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {platformSolutions.map((s) => {
            const { Icon } = s;
            return (
              <div key={s.title} className="bg-white border border-oliva/15 hover:border-oliva/40 rounded-xl p-4 transition-all">
                <div className="w-9 h-9 rounded-lg bg-oliva/10 border border-oliva/20 flex items-center justify-center mb-3">
                  <Icon className="w-4 h-4 text-oliva" />
                </div>
                <h4 className="text-oliva font-semibold text-sm leading-tight">{s.title}</h4>
              </div>
            );
          })}
        </div>
        <div className="bg-oliva text-white rounded-2xl p-6 md:p-7 mt-2">
          <p className="text-white leading-relaxed mb-3">
            Ofrecemos a empresas, industrias y productores la posibilidad de transformar sus <span className="text-lima font-semibold">pasivos ambientales en activos climáticos</span>.
          </p>
          <p className="text-white/80 text-sm leading-relaxed">
            Créditos de carbono de alta integridad, respaldados por ciencia, monitoreo y estándares internacionales.
          </p>
        </div>
      </div>
    ),
  },
];

// ─────────────────────────────────────────────────────
// Section
// ─────────────────────────────────────────────────────
export function CarbonCredits() {
  const [activeId, setActiveId] = useState(steps[0].id);
  const [headerRef, headerVisible] = useReveal<HTMLDivElement>({ threshold: 0.3 });
  const [tabsRef, tabsVisible] = useReveal<HTMLDivElement>({ threshold: 0.15 });
  const active = steps.find((s) => s.id === activeId) ?? steps[0];

  return (
    <section id="creditos-carbono" className="bg-white">
      {/* ── HERO VERDE ─────────────────────────────── */}
      <div className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=85&fit=crop"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-oliva/90" />
        <div className="absolute inset-0 bg-gradient-to-b from-noche/25 via-oliva/70 to-oliva/85" />

        <div className="relative py-16 md:py-24 lg:py-28 px-6 md:px-12 lg:px-20">
          <div className="max-w-[1600px] mx-auto w-full">
            <div
              ref={headerRef}
              className={`max-w-3xl mb-10 md:mb-14 scroll-reveal ${headerVisible ? 'is-visible' : ''}`}
            >
              <div className="inline-block border border-lima/40 bg-lima/10 px-3 py-1 mb-6">
                <span className="text-lima text-xs font-mono uppercase tracking-widest">Destacado</span>
              </div>
              <h2 className="text-white mb-6">Créditos de Carbono.</h2>
              <p className="text-white/85 leading-relaxed text-lg max-w-2xl">
                Transformamos residuos en soluciones climáticas verificables bajo estándares internacionales.
              </p>
            </div>

            {/* Stats en el hero */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
              {stats.map((s) => (
                <div key={s.label} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 hover:border-lima/40 transition-all">
                  <div className="text-white font-bold leading-none mb-2" style={{ fontSize: 'clamp(1.7rem, 3vw, 2.4rem)' }}>
                    <AnimatedCounter end={s.end} suffix={s.suffix} />
                  </div>
                  <div className="text-white text-sm font-semibold mb-1">{s.label}</div>
                  <div className="text-white/55 text-xs font-mono">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── TABS CARD (fondo blanco, superpuesta al hero) ──── */}
      <div className="relative -mt-16 md:-mt-20 px-6 md:px-12 lg:px-20 pb-16 md:pb-24 lg:pb-32">
        <div className="max-w-[1600px] mx-auto w-full">
          <div
            ref={tabsRef}
            className={`bg-white rounded-3xl shadow-2xl border border-oliva/10 overflow-hidden scroll-reveal ${tabsVisible ? 'is-visible' : ''}`}
          >
            {/* Tab strip — grid en desktop, scroll horizontal en mobile y tablet */}
            <div className="border-b border-oliva/10 overflow-x-auto scrollbar-hide">
              <div className="flex lg:grid lg:grid-cols-6 min-w-max lg:min-w-0">
                {steps.map((s) => {
                  const { Icon } = s;
                  const isActive = s.id === activeId;
                  return (
                    <button
                      key={s.id}
                      onClick={() => setActiveId(s.id)}
                      className={`flex items-center justify-center lg:justify-start gap-3 px-4 lg:px-5 py-5 border-b-2 transition-all whitespace-nowrap ${
                        isActive
                          ? 'border-lima bg-paja/40 text-oliva'
                          : 'border-transparent text-oliva/50 hover:text-oliva hover:bg-paja/20'
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all ${
                          isActive
                            ? 'bg-oliva text-lima'
                            : 'bg-oliva/10 text-oliva/60'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="text-left min-w-0">
                        <div className={`text-[10px] font-mono uppercase tracking-widest ${isActive ? 'text-lima' : 'text-oliva/45'}`}>
                          {s.step}
                        </div>
                        <div className={`font-semibold text-sm leading-tight truncate ${isActive ? 'text-oliva' : 'text-oliva/70'}`}>
                          {s.title}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Tab content — 2 columnas con imagen a la izquierda */}
            <div key={active.id} className="animate-in fade-in duration-500 grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Imagen del step (sticky en desktop) */}
              <div className="lg:col-span-5 relative aspect-[4/3] lg:aspect-auto lg:min-h-[520px] overflow-hidden bg-oliva">
                <img
                  src={active.image}
                  alt={active.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noche/85 via-noche/20 to-transparent" />
                {/* Step badge over image */}
                <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 shadow">
                  <span className="text-oliva text-[10px] font-mono uppercase tracking-widest font-semibold">
                    Etapa {active.step}
                  </span>
                </div>
                {/* Caption at bottom */}
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-white text-sm font-mono">{active.imageCaption}</p>
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-7 p-6 md:p-10 lg:p-12">
                <h3 className="text-oliva font-bold text-2xl md:text-3xl leading-tight mb-6">
                  {active.short}.
                </h3>
                {active.render()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
