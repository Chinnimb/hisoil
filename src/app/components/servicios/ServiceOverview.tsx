import { HelpCircle, AlertTriangle, Leaf, TrendingUp, Check } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';
import { AnimatedCounter } from '../AnimatedCounter';

const indicators = [
  { end: 25, prefix: '+', label: 'Años', sub: 'de experiencia en gestión y valorización de residuos orgánicos' },
  { end: 12, label: 'Provincias', sub: 'con proyectos y operaciones en Argentina' },
  { end: 100, suffix: '%', label: 'Valorización', sub: 'de residuos tratados mediante procesos biológicos' },
];

const problems = [
  'Reducir el volumen de residuos enviados a disposición final',
  'Eliminar pasivos ambientales asociados al almacenamiento',
  'Cumplir con la legislación ambiental aplicable',
  'Evitar olores, lixiviados y emisiones por mala gestión',
  'Simplificar la operación con un único proveedor especializado',
  'Convertir un costo operativo en economía circular',
];

const envImpact = [
  'Mayor contenido de materia orgánica',
  'Recuperación de suelos degradados',
  'Mejor infiltración y retención de agua',
  'Incremento de la actividad biológica del suelo',
  'Reducción de la huella ambiental',
];

const bizImpact = [
  'Disminuir costos de disposición final',
  'Evitar sanciones y contingencias regulatorias',
  'Contar con trazabilidad completa del tratamiento',
  'Obtener certificados de tratamiento y valorización',
  'Mejorar indicadores ESG y reportes de sustentabilidad',
  'Demostrar compromiso con la economía circular',
];

export function ServiceOverview() {
  const [headerRef, headerVisible] = useReveal<HTMLDivElement>({ threshold: 0.3 });
  const [whatRef, whatVisible] = useReveal<HTMLDivElement>({ threshold: 0.2 });
  const [problemsRef, problemsVisible] = useReveal<HTMLDivElement>({ threshold: 0.2 });
  const [impactsRef, impactsVisible] = useReveal<HTMLDivElement>({ threshold: 0.2 });
  const [statsRef, statsVisible] = useReveal<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section id="que-es" className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-[1600px] mx-auto w-full">
        {/* Header */}
        <div
          ref={headerRef}
          className={`max-w-3xl mb-14 md:mb-20 scroll-reveal ${headerVisible ? 'is-visible' : ''}`}
        >
          <div className="inline-block border border-oliva/30 px-3 py-1 mb-6">
            <span className="text-oliva text-xs font-mono uppercase tracking-widest">02 — Servicio principal</span>
          </div>
          <h2 className="text-oliva mb-4">Tratamiento de Residuos Orgánicos.</h2>
        </div>

        {/* ¿Qué es? — 2 columns */}
        <div
          ref={whatRef}
          className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16 md:mb-20 scroll-reveal ${whatVisible ? 'is-visible' : ''}`}
        >
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-oliva/10 backdrop-blur-md border border-oliva/20 flex items-center justify-center">
                <HelpCircle className="w-5 h-5 text-oliva" />
              </div>
              <div className="text-oliva text-[10px] font-mono uppercase tracking-widest">¿Qué es?</div>
            </div>
            <h3 className="text-oliva font-bold text-2xl md:text-3xl leading-tight">
              Un servicio <span className="text-lima">integral</span> de valorización biológica.
            </h3>
          </div>
          <div className="lg:col-span-8 space-y-5 text-gray-700 leading-relaxed text-base md:text-lg">
            <p>
              HISOIL brinda un servicio integral de <span className="text-oliva font-semibold">recepción, transporte, tratamiento y valorización</span> de residuos orgánicos mediante procesos biológicos controlados de compostaje. Transformamos residuos provenientes de industrias, municipios, empresas agroalimentarias, espacios verdes y otras actividades en productos de alto valor para la recuperación de suelos y la producción agrícola.
            </p>
            <p>
              Cada proyecto incluye <span className="text-oliva font-semibold">caracterización del residuo, logística, tratamiento, monitoreo del proceso, trazabilidad y emisión de certificados</span> de tratamiento y disposición final.
            </p>
          </div>
        </div>

        {/* ¿Qué problemas resuelve? */}
        <div
          ref={problemsRef}
          className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16 md:mb-20 scroll-reveal ${problemsVisible ? 'is-visible' : ''}`}
        >
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-oliva/10 backdrop-blur-md border border-oliva/20 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-oliva" />
              </div>
              <div className="text-oliva text-[10px] font-mono uppercase tracking-widest">¿Qué problemas resuelve?</div>
            </div>
            <h3 className="text-oliva font-bold text-2xl md:text-3xl leading-tight">
              La gestión inadecuada genera <span className="text-lima">costos y riesgos</span>.
            </h3>
            <p className="text-gray-700 leading-relaxed mt-4">
              La gestión inadecuada de residuos orgánicos genera costos crecientes, riesgos ambientales y dificultades para cumplir con la normativa vigente.
            </p>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {problems.map((p) => (
              <div key={p} className="bg-paja/40 border border-oliva/10 rounded-xl p-4 flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-oliva/10 border border-oliva/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-oliva" strokeWidth={3} />
                </div>
                <span className="text-gray-700 text-sm leading-snug">{p}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Impacto ambiental + Impacto en el negocio (2 cards) */}
        <div
          ref={impactsRef}
          className={`grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 mb-16 md:mb-20 scroll-reveal ${impactsVisible ? 'is-visible' : ''}`}
        >
          {/* Ambiental */}
          <div className="bg-oliva rounded-2xl p-8 md:p-10 text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-lima/25 backdrop-blur-md border border-lima/40 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-lima" />
              </div>
              <div>
                <div className="text-lima text-[10px] font-mono uppercase tracking-widest">Impacto ambiental</div>
                <h3 className="text-white font-bold text-xl md:text-2xl leading-tight">Valorización que vuelve al suelo</h3>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-5">
              Cada tonelada de residuo orgánico valorizada evita que materiales biodegradables terminen en rellenos sanitarios, donde generan emisiones de gases de efecto invernadero. El compost producido vuelve al suelo aportando:
            </p>
            <ul className="space-y-2.5">
              {envImpact.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-lima/25 border border-lima/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-lima" strokeWidth={3} />
                  </div>
                  <span className="text-white/90 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Negocio */}
          <div className="bg-white rounded-2xl p-8 md:p-10 border border-oliva/15">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-oliva/10 backdrop-blur-md border border-oliva/20 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-oliva" />
              </div>
              <div>
                <div className="text-oliva text-[10px] font-mono uppercase tracking-widest">Impacto en el negocio</div>
                <h3 className="text-oliva font-bold text-xl md:text-2xl leading-tight">Eficiencia operativa medible</h3>
              </div>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed mb-5">
              La correcta gestión de residuos no solo reduce riesgos ambientales, sino que también mejora la eficiencia operativa. Con HISOIL las organizaciones logran:
            </p>
            <ul className="space-y-2.5">
              {bizImpact.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-oliva/10 border border-oliva/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-oliva" strokeWidth={3} />
                  </div>
                  <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Indicadores */}
        <div
          ref={statsRef}
          className={`grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 scroll-reveal ${statsVisible ? 'is-visible' : ''}`}
        >
          {indicators.map((k) => (
            <div key={k.label} className="bg-paja/50 border border-oliva/15 rounded-2xl p-6 md:p-7 hover:border-oliva/40 hover:shadow-lg transition-all">
              <div className="text-oliva font-bold leading-none mb-2" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)' }}>
                {k.prefix ?? ''}<AnimatedCounter end={k.end} suffix={k.suffix ?? ''} />
              </div>
              <div className="text-oliva font-semibold text-sm mb-1">{k.label}</div>
              <div className="text-gray-600 text-xs font-mono leading-relaxed">{k.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
