import { AlertTriangle, Check, Leaf, TrendingUp } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';

const problems = [
  'Reducir el volumen de residuos enviados a disposición final',
  'Eliminar pasivos ambientales asociados al almacenamiento',
  'Cumplir con la legislación ambiental aplicable',
  'Evitar olores, lixiviados y emisiones por mala gestión',
  'Simplificar la operación con un único proveedor especializado',
  'Convertir un costo operativo en economía circular',
];

const impacts = [
  {
    Icon: Leaf,
    label: 'Impacto ambiental',
    intro:
      'Cada tonelada de residuo orgánico valorizada evita que materiales biodegradables terminen en rellenos sanitarios, donde generan emisiones de gases de efecto invernadero.',
    lead: 'El compost producido vuelve al suelo aportando:',
    points: [
      'Mayor contenido de materia orgánica',
      'Recuperación de suelos degradados',
      'Mejora de la infiltración y retención de agua',
      'Incremento de la actividad biológica del suelo',
      'Reducción de la huella ambiental de las organizaciones',
    ],
  },
  {
    Icon: TrendingUp,
    label: 'Impacto en el negocio',
    intro:
      'La correcta gestión de residuos no solo reduce riesgos ambientales, sino que también mejora la eficiencia operativa.',
    lead: 'Con HISOIL las organizaciones logran:',
    points: [
      'Disminuir costos de disposición final',
      'Evitar sanciones y contingencias regulatorias',
      'Contar con trazabilidad completa del tratamiento',
      'Obtener certificados de tratamiento y valorización',
      'Mejorar indicadores ESG y reportes de sustentabilidad',
      'Demostrar compromiso con la economía circular frente a clientes e inversores',
    ],
  },
];

export function ServiceOverview() {
  const [headerRef, headerVisible] = useReveal<HTMLDivElement>({ threshold: 0.3 });
  const [problemsRef, problemsVisible] = useReveal<HTMLDivElement>({ threshold: 0.2 });
  const [impactRef, impactVisible] = useReveal<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section id="que-es" className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-[1600px] mx-auto w-full">
        {/* Tratamiento de Residuos Orgánicos */}
        <div
          ref={headerRef}
          className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16 md:mb-20 scroll-reveal ${headerVisible ? 'is-visible' : ''}`}
        >
          <div className="lg:col-span-4">
            <div className="inline-block border border-oliva/30 px-3 py-1 mb-6">
              <span className="text-oliva text-xs font-mono uppercase tracking-widest">
                02 — Tratamiento de Residuos Orgánicos
              </span>
            </div>
            <h2
              className="text-oliva font-bold leading-tight"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
            >
              Un servicio <span className="text-lima">integral</span> de valorización biológica.
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-5 text-gray-700 leading-relaxed text-base md:text-lg">
            <p>
              HISOIL brinda un servicio integral de{' '}
              <span className="text-oliva font-semibold">
                recepción, transporte, tratamiento y valorización
              </span>{' '}
              de residuos orgánicos mediante procesos biológicos controlados de compostaje.
              Transformamos residuos provenientes de industrias, municipios, empresas
              agroalimentarias, espacios verdes y otras actividades en productos de alto valor para
              la recuperación de suelos y la producción agrícola.
            </p>
            <p>
              Cada proyecto incluye{' '}
              <span className="text-oliva font-semibold">
                caracterización del residuo, logística, tratamiento, monitoreo del proceso,
                trazabilidad y emisión de certificados
              </span>{' '}
              de tratamiento y disposición final.
            </p>
          </div>
        </div>

        {/* Problema e impacto */}
        <div
          ref={problemsRef}
          className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 scroll-reveal ${problemsVisible ? 'is-visible' : ''}`}
        >
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-oliva/10 backdrop-blur-md border border-oliva/20 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-oliva" />
              </div>
              <div className="text-oliva text-[10px] font-mono uppercase tracking-widest">
                03 — Problema e impacto
              </div>
            </div>
            <h3 className="text-oliva font-bold text-2xl md:text-3xl leading-tight">
              La gestión inadecuada genera <span className="text-lima">costos y riesgos</span>.
            </h3>
            <p className="text-gray-700 leading-relaxed mt-4">
              La gestión inadecuada de residuos orgánicos genera costos crecientes, riesgos
              ambientales y dificultades para cumplir con la normativa vigente.
            </p>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {problems.map((p) => (
              <div
                key={p}
                className="bg-paja/40 border border-oliva/10 rounded-xl p-4 flex items-start gap-3"
              >
                <div className="w-5 h-5 rounded-full bg-oliva/10 border border-oliva/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-oliva" strokeWidth={3} />
                </div>
                <span className="text-gray-700 text-sm leading-snug">{p}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Impacto ambiental + Impacto en el negocio */}
        <div
          ref={impactRef}
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-16 md:mt-20 scroll-reveal ${impactVisible ? 'is-visible' : ''}`}
        >
          {impacts.map(({ Icon, label, intro, lead, points }) => (
            <div key={label} className="bg-paja/40 border border-oliva/10 rounded-2xl p-7 md:p-9">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-oliva/10 border border-oliva/20 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-oliva" />
                </div>
                <h3 className="text-oliva font-bold text-xl md:text-2xl leading-tight">{label}</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">{intro}</p>
              <p className="text-oliva font-semibold text-sm mb-3">{lead}</p>
              <ul className="space-y-2.5">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-oliva/10 border border-oliva/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-oliva" strokeWidth={3} />
                    </div>
                    <span className="text-gray-700 text-sm leading-snug">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
