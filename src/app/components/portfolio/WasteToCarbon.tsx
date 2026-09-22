import { Trash2, Recycle, Sprout, CloudOff, ArrowRight } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';
import imgConcepto from '../../../imports/portfolio/del-residuo-al-credito.webp';

const stages = [
  {
    Icon: Trash2,
    label: 'Residuo',
    desc: 'Materia orgánica que hoy se pierde como pasivo ambiental.',
  },
  {
    Icon: Recycle,
    label: 'Valorización',
    desc: 'Compostaje profesional que transforma el residuo en recurso.',
  },
  {
    Icon: Sprout,
    label: 'Suelo / vegetación',
    desc: 'El compost vuelve al suelo y regenera la vida vegetal.',
  },
  {
    Icon: CloudOff,
    label: 'Impacto ambiental',
    desc: 'Recuperación de CO₂ y beneficio ambiental medible.',
  },
];

/**
 * Bloque destacado — no es una card más del grid de industrias.
 * Comunica el concepto general del Portfolio: Residuo → Valorización →
 * Suelo/vegetación → Impacto ambiental / recuperación de CO₂.
 */
export function WasteToCarbon() {
  const [ref, visible] = useReveal<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-noche">
      <div className="max-w-[1600px] mx-auto w-full">
        <div
          ref={ref}
          className={`scroll-reveal grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${visible ? 'is-visible' : ''}`}
        >
          {/* Image */}
          <div className="lg:col-span-5 relative aspect-[4/3] rounded-3xl overflow-hidden">
            <img
              loading="lazy"
              decoding="async"
              src={imgConcepto}
              alt="Del residuo al crédito de carbono: recolección, compostaje, vegetación y compost terminado"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="lg:col-span-7">
            <div className="inline-block border border-lima/40 bg-lima/10 px-3 py-1 mb-6">
              <span className="text-lima text-xs font-mono uppercase tracking-widest">
                Concepto
              </span>
            </div>
            <h2 className="text-white mb-5">Del residuo al crédito de carbono.</h2>
            <p className="text-white/75 leading-relaxed text-lg mb-10 max-w-2xl">
              Cada caso de este Portfolio es un tramo del mismo recorrido: un residuo que HISOIL
              sabe gestionar, transformado en un beneficio ambiental concreto.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stages.map((s, i) => {
                const { Icon } = s;
                return (
                  <div key={s.label} className="relative">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-lima/15 border border-lima/30 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-lima" />
                      </div>
                      {i < stages.length - 1 && (
                        <ArrowRight className="w-3.5 h-3.5 text-white/25 hidden sm:block" />
                      )}
                    </div>
                    <div className="text-white font-semibold text-sm mb-1">{s.label}</div>
                    <div className="text-white/55 text-xs leading-relaxed">{s.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
