import { Link } from 'react-router';
import { Sprout, ArrowUpRight, Check } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import imgCompostHome from '../../imports/productos/compost-3.png';

const benefits = [
  'Enmienda orgánica premium para regeneración de suelos',
  'Apto para producción orgánica certificada',
  'Aplicaciones agrícolas, paisajísticas e infraestructura',
  'Presentaciones desde 5 dm³ hasta a granel',
];

export function CompostHighlight() {
  const [ref, visible] = useReveal<HTMLDivElement>({ threshold: 0.25 });

  return (
    <section className="theme-compost py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 bg-nata">
      <div className="max-w-[1600px] mx-auto w-full">
        <div
          ref={ref}
          className={`scroll-reveal grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${visible ? 'is-visible' : ''}`}
        >
          {/* Image */}
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden order-2 lg:order-1">
            <img
              src={imgCompostHome}
              alt="HiSoil Compost — enmienda orgánica premium"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-oliva/40 via-transparent to-transparent" />
            <div className="absolute top-5 left-5">
              <span className="inline-flex items-center gap-2 bg-lima text-oliva text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 rounded-full font-bold shadow-lg">
                <Sprout className="w-3.5 h-3.5" />
                Producto estrella
              </span>
            </div>
            <div className="absolute bottom-5 left-5 right-5">
              <div className="inline-block bg-white/95 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-oliva text-xs font-mono uppercase tracking-widest font-semibold">
                  Producción propia · Argentina
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-block border border-oliva/30 px-3 py-1 mb-6">
              <span className="text-oliva text-xs font-mono uppercase tracking-widest">
                01 — Producto destacado
              </span>
            </div>
            <h2 className="text-oliva mb-5">
              HiSoil <span className="text-lima">Compost</span>
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Nuestra enmienda orgánica de referencia. Elaborada mediante compostaje aeróbico controlado a partir de residuos agroindustriales seleccionados, con alto contenido de materia orgánica estabilizada y actividad biológica probada.
            </p>

            <ul className="space-y-3 mb-10">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-oliva/10 border border-oliva/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-oliva" strokeWidth={3} />
                  </div>
                  <span className="text-gray-700 leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/productos/compost"
                className="group inline-flex items-center justify-center gap-2 bg-oliva text-white text-sm font-semibold py-3.5 px-6 rounded-full hover:bg-lima hover:text-oliva transition-all shadow-lg"
              >
                Ver ficha técnica
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link
                to="/productos"
                className="inline-flex items-center justify-center gap-2 border border-oliva text-oliva text-sm font-semibold py-3.5 px-6 rounded-full hover:bg-oliva hover:text-white transition-all"
              >
                Ver todo el catálogo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
