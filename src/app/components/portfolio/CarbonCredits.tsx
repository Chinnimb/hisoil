import { Award, Recycle, LineChart, ShieldCheck, Sprout, Layers } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';
import { AnimatedCounter } from '../AnimatedCounter';

const stats = [
  { end: 44400, suffix: ' t', label: 'Residuos orgánicos procesados', sub: 'medición 2022' },
  { end: 4168, suffix: ' tCO₂e', label: 'Huella organizacional', sub: 'inventario GHG Protocol' },
  { end: 36951, suffix: ' tCO₂e', label: 'Reducción proyectada anual', sub: 'metodología CDM AMS-III.F' },
];

const pillars = [
  { Icon: Recycle, title: 'Compostaje certificado', desc: 'Tratamiento biológico de residuos orgánicos no peligrosos con producción de compost estabilizado.' },
  { Icon: LineChart, title: 'Monitoreo continuo (MRV)', desc: 'Monitoreo, reporte y verificación bajo estándares internacionales. Auditoría independiente.' },
  { Icon: ShieldCheck, title: 'BioCarbon Standard', desc: 'Proyecto BCR-AR-763-13-003 registrado bajo GHG Program habilitando reducciones certificadas.' },
  { Icon: Sprout, title: 'Agricultura regenerativa', desc: 'Incremento del carbono orgánico del suelo y recuperación de áreas degradadas.' },
  { Icon: Layers, title: 'Biochar y enmiendas', desc: 'Carbonizadas para captura de carbono estable a largo plazo en el suelo.' },
  { Icon: Award, title: 'Créditos de alta integridad', desc: 'Respaldados por ciencia, monitoreo y estándares internacionales de MRV.' },
];

export function CarbonCredits() {
  const [headerRef, headerVisible] = useReveal<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section id="creditos-carbono" className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 bg-oliva text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 0,transparent 80px),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 0,transparent 80px)`,
        }}
      />

      <div className="relative max-w-[1600px] mx-auto w-full">
        {/* Header */}
        <div
          ref={headerRef}
          className={`max-w-3xl mb-14 md:mb-20 scroll-reveal ${headerVisible ? 'is-visible' : ''}`}
        >
          <div className="inline-block border border-lima/40 bg-lima/10 px-3 py-1 mb-6">
            <span className="text-lima text-xs font-mono uppercase tracking-widest">Destacado</span>
          </div>
          <h2 className="text-white mb-6">Créditos de Carbono</h2>
          <p className="text-white/85 leading-relaxed text-lg mb-4">
            Transformamos residuos en soluciones climáticas verificables. Cada tonelada de residuo recuperada se convierte en un beneficio ambiental cuantificable, verificable y trazable bajo estándares internacionales.
          </p>
          <p className="text-white/70 leading-relaxed">
            Desde 2021 desarrollamos inventarios corporativos de GEI bajo GHG Protocol, y en 2022 registramos el proyecto <span className="text-lima font-semibold">Treatment of Non-Hazardous Organic Waste to Obtain Compost</span> bajo la metodología CDM AMS-III.F del BioCarbon Standard.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mb-14 md:mb-20">
          {stats.map((s) => (
            <div key={s.label} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-7 hover:bg-white/15 hover:border-lima/40 transition-all">
              <div className="text-white/60 text-[10px] font-mono uppercase tracking-widest mb-3">{s.label}</div>
              <div className="text-white font-bold leading-none mb-2" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)' }}>
                <AnimatedCounter end={s.end} suffix={s.suffix} />
              </div>
              <div className="text-white/60 text-xs font-mono">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pillars.map((p) => {
            const { Icon } = p;
            return (
              <div key={p.title} className="bg-white/5 backdrop-blur-sm border border-white/15 rounded-xl p-6 hover:border-lima/40 transition-all">
                <div className="w-11 h-11 rounded-xl bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-lima" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2 leading-tight">{p.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
