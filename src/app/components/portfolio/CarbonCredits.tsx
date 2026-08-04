import { Award, Recycle, LineChart, ShieldCheck, Sprout, Layers, TreePine, Flame, Waves } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';
import { AnimatedCounter } from '../AnimatedCounter';

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

// ─────────────────────────────────────────────────────
// Hero cinematográfico (fondo verde con imagen)
// ─────────────────────────────────────────────────────
function Hero() {
  const [ref, visible] = useReveal<HTMLDivElement>({ threshold: 0.2 });
  return (
    <div className="relative overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=85&fit=crop"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-oliva/92" />
      <div className="absolute inset-0 bg-gradient-to-b from-noche/25 via-transparent to-noche/60" />

      <div className="relative py-20 md:py-28 lg:py-36 px-6 md:px-12 lg:px-20 text-white">
        <div className="max-w-[1600px] mx-auto w-full">
          <div
            ref={ref}
            className={`max-w-4xl scroll-reveal ${visible ? 'is-visible' : ''}`}
          >
            <div className="inline-block border border-lima/40 bg-lima/10 px-3 py-1 mb-8">
              <span className="text-lima text-xs font-mono uppercase tracking-widest">Destacado</span>
            </div>
            <h2 className="text-white mb-8" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.05 }}>
              Créditos de <span className="text-lima">Carbono</span>.
            </h2>
            <p className="text-white/90 text-xl md:text-2xl leading-relaxed font-light max-w-3xl mb-12">
              Transformamos residuos en soluciones climáticas verificables.
            </p>

            {/* Stats destacadas en el hero */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5 max-w-4xl">
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
    </div>
  );
}

// ─────────────────────────────────────────────────────
// Bloques de texto legibles (fondo blanco)
// ─────────────────────────────────────────────────────
interface TextBlockProps {
  step: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}

function TextBlock({ step, eyebrow, title, children }: TextBlockProps) {
  const [ref, visible] = useReveal<HTMLDivElement>({ threshold: 0.2 });
  return (
    <div
      ref={ref}
      className={`scroll-reveal grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 py-14 md:py-20 border-t border-oliva/10 first:border-t-0 ${visible ? 'is-visible' : ''}`}
    >
      {/* Left — sticky heading */}
      <div className="lg:col-span-4">
        <div className="lg:sticky lg:top-32">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-lg bg-oliva flex items-center justify-center flex-shrink-0">
              <span className="text-lima text-xs font-mono font-bold">{step}</span>
            </div>
            <div className="text-oliva text-[10px] font-mono uppercase tracking-widest">{eyebrow}</div>
          </div>
          <h3 className="text-oliva font-bold text-2xl md:text-3xl leading-tight">{title}</h3>
        </div>
      </div>
      {/* Right — content */}
      <div className="lg:col-span-8 space-y-5 text-gray-700 leading-relaxed text-base md:text-lg">
        {children}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────
// CarbonCredits — sección completa
// ─────────────────────────────────────────────────────
export function CarbonCredits() {
  const [platformRef, platformVisible] = useReveal<HTMLDivElement>({ threshold: 0.2 });
  const [outroRef, outroVisible] = useReveal<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section id="creditos-carbono" className="bg-white">
      {/* ── HERO CINEMATOGRÁFICO ─────────────────────────── */}
      <Hero />

      {/* ── CONTENIDO LEGIBLE (fondo blanco) ─────────────── */}
      <div className="px-6 md:px-12 lg:px-20 py-16 md:py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto w-full">
          {/* Intro / Contexto */}
          <TextBlock step="00" eyebrow="Contexto" title="El verdadero valor de una gestión ambiental.">
            <p>
              En Hisoil entendemos que el verdadero valor de una gestión ambiental no se mide únicamente por la cantidad de residuos tratados, sino por el <span className="text-oliva font-semibold">impacto positivo que genera sobre el clima, los suelos y la economía circular</span>.
            </p>
            <p>
              Desde hace más de dos décadas desarrollamos soluciones para el tratamiento biológico de residuos orgánicos provenientes de industrias, municipios y actividades agropecuarias, evitando que estos materiales sean enviados a disposición final y transformándolos en compost de alta calidad.
            </p>
            <div className="bg-paja/50 border-l-4 border-lima rounded-r-xl px-6 py-4 mt-6">
              <p className="text-oliva font-semibold text-lg md:text-xl leading-snug">
                Hoy ese trabajo evoluciona: <span className="text-lima">la generación de créditos de carbono certificados</span>.
              </p>
              <p className="text-gray-700 text-sm mt-2">
                Convertir cada tonelada de residuo recuperada en un beneficio ambiental cuantificable, verificable y trazable bajo estándares internacionales.
              </p>
            </div>
          </TextBlock>

          {/* Estrategia basada en datos */}
          <TextBlock step="01" eyebrow="Estrategia" title="Una estrategia basada en datos.">
            <p>
              La generación de créditos de carbono comienza mucho antes de emitir un certificado. Requiere <span className="text-oliva font-semibold">medir, modelar, monitorear y demostrar científicamente</span> el impacto de cada proyecto.
            </p>
            <p>
              Por ese motivo, Hisoil desarrolló durante 2021 y 2022 dos <span className="text-oliva font-semibold">Inventarios Corporativos de Gases de Efecto Invernadero</span> bajo la metodología internacional <span className="text-oliva font-semibold">GHG Protocol</span>, contemplando emisiones de Alcance 1, 2 y 3.
            </p>
            <p>
              Durante la medición correspondiente a 2022 se relevaron más de <span className="text-oliva font-semibold">44.400 toneladas de residuos orgánicos procesados</span>, obteniendo una Huella de Carbono Organizacional de <span className="text-oliva font-semibold">4.168 tCO₂e</span> — equivalente a una intensidad de <span className="text-lima font-bold">94 kg CO₂e por tonelada de residuo tratado</span>.
            </p>
          </TextBlock>

          {/* Del inventario al proyecto */}
          <TextBlock step="02" eyebrow="Proyecto" title="Del inventario al proyecto de carbono.">
            <div className="bg-oliva text-white rounded-2xl p-6 md:p-7 mb-2">
              <div className="text-lima text-[10px] font-mono uppercase tracking-widest mb-2">Nombre del proyecto</div>
              <h4 className="text-white font-bold text-xl md:text-2xl leading-tight mb-3">
                Treatment of Non-Hazardous Organic Waste to Obtain Compost
              </h4>
              <div className="inline-block bg-lima/20 border border-lima/40 rounded-full px-3 py-1">
                <span className="text-lima text-xs font-mono">BCR-AR-763-13-003</span>
              </div>
            </div>
            <p>
              Diseñado bajo la metodología <span className="text-oliva font-semibold">CDM AMS-III.F – Avoidance of Methane Emissions through Composting</span>, que cuantifica las emisiones evitadas cuando los residuos orgánicos son tratados mediante compostaje aeróbico en lugar de ser enviados a rellenos sanitarios.
            </p>
            <p>
              Registrado en el <span className="text-oliva font-semibold">BioCarbon Standard – GHG Program</span>, habilitando su elegibilidad para monitoreo, verificación e inscripción de reducciones de emisiones.
            </p>
          </TextBlock>

          {/* Impacto */}
          <TextBlock step="03" eyebrow="Impacto" title="¿Qué impacto genera este proyecto?">
            <p>
              Cada tonelada de residuo orgánico que evita su disposición final representa una <span className="text-oliva font-semibold">reducción potencial de emisiones de metano</span>, uno de los gases de efecto invernadero con mayor potencial de calentamiento global.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              {projectScope.map((item, i) => (
                <div key={item} className="bg-paja/40 border border-oliva/10 rounded-xl p-4 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-oliva/10 border border-oliva/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-oliva text-[10px] font-mono font-bold">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <span className="text-gray-700 text-sm leading-snug">{item}</span>
                </div>
              ))}
            </div>
            <div className="bg-lima/10 border border-lima/40 rounded-xl p-5 mt-5 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-oliva flex-shrink-0 mt-0.5" />
              <p className="text-gray-800 text-sm md:text-base leading-relaxed">
                Todo el proyecto se desarrolla siguiendo criterios internacionales de <span className="text-oliva font-semibold">MRV (Monitoring, Reporting & Verification)</span>, garantizando transparencia en la cuantificación de reducciones.
              </p>
            </div>
          </TextBlock>

          {/* Resultados proyectados */}
          <TextBlock step="04" eyebrow="Resultados" title="Resultados proyectados.">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
              <div className="bg-oliva text-white rounded-2xl p-6">
                <div className="text-lima text-[10px] font-mono uppercase tracking-widest mb-2">Reducción anual</div>
                <div className="font-bold text-3xl md:text-4xl mb-1">36.951 <span className="text-lg text-lima">tCO₂e/año</span></div>
                <p className="text-white/70 text-xs leading-relaxed">Estimación del PDD para el período operativo</p>
              </div>
              <div className="bg-oliva text-white rounded-2xl p-6">
                <div className="text-lima text-[10px] font-mono uppercase tracking-widest mb-2">Emisiones del proyecto</div>
                <div className="font-bold text-3xl md:text-4xl mb-1">4.966 <span className="text-lg text-lima">tCO₂e/año</span></div>
                <p className="text-white/70 text-xs leading-relaxed">Cuarto año de operación</p>
              </div>
            </div>
            <p>
              Las reducciones se mantienen mediante el tratamiento continuo de residuos y <span className="text-oliva font-semibold">sin emisiones por fugas (Leakage = 0)</span>, conforme a la metodología AMS-III.F.
            </p>
            <p>
              Durante los primeros años se verificó el comportamiento de las emisiones propias del proceso, información utilizada para calcular las reducciones netas del proyecto.
            </p>
          </TextBlock>

          {/* Más allá del compost — visión / plataforma */}
          <div
            ref={platformRef}
            className={`py-14 md:py-20 border-t border-oliva/10 scroll-reveal ${platformVisible ? 'is-visible' : ''}`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-10">
              <div className="lg:col-span-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-oliva flex items-center justify-center flex-shrink-0">
                    <span className="text-lima text-xs font-mono font-bold">05</span>
                  </div>
                  <div className="text-oliva text-[10px] font-mono uppercase tracking-widest">Visión</div>
                </div>
                <h3 className="text-oliva font-bold text-2xl md:text-3xl leading-tight">Más allá del compost.</h3>
              </div>
              <div className="lg:col-span-8">
                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  La visión de Hisoil no se limita a evitar emisiones. Desarrollamos una <span className="text-oliva font-semibold">plataforma de soluciones climáticas</span> que integrará diferentes tipos de proyectos ambientales.
                </p>
              </div>
            </div>

            {/* Grid de soluciones */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3">
              {platformSolutions.map((s) => {
                const { Icon } = s;
                return (
                  <div key={s.title} className="bg-white border border-oliva/15 hover:border-oliva/40 rounded-xl p-5 transition-all">
                    <div className="w-10 h-10 rounded-lg bg-oliva/10 backdrop-blur-md border border-oliva/20 flex items-center justify-center mb-3">
                      <Icon className="w-4 h-4 text-oliva" />
                    </div>
                    <h4 className="text-oliva font-semibold text-sm leading-tight">{s.title}</h4>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Cierre / El futuro comienza en el suelo */}
          <div
            ref={outroRef}
            className={`bg-oliva rounded-3xl p-8 md:p-12 lg:p-16 text-white scroll-reveal ${outroVisible ? 'is-visible' : ''}`}
          >
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-6 h-6 text-lima" />
                <span className="text-lima text-[10px] font-mono uppercase tracking-widest">El futuro del carbono comienza en el suelo</span>
              </div>
              <h3 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl leading-tight mb-6">
                Transformá tus <span className="text-lima">pasivos ambientales</span> en <span className="text-lima">activos climáticos</span>.
              </h3>
              <p className="text-white/85 leading-relaxed text-base md:text-lg mb-4">
                Ofrecemos a empresas, industrias y productores agropecuarios la posibilidad de transformar sus pasivos ambientales en activos climáticos con valor económico y ambiental.
              </p>
              <p className="text-white/70 leading-relaxed">
                Trabajamos para que la gestión de residuos orgánicos deje de ser únicamente un servicio ambiental y se convierta en una herramienta concreta para generar <span className="text-lima font-semibold">créditos de carbono de alta integridad</span>, respaldados por ciencia, monitoreo y estándares internacionales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
