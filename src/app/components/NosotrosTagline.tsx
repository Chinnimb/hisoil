import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export function NosotrosTagline() {
  const [ref, visible] = useReveal<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section className="py-14 md:py-20 px-6 md:px-12 lg:px-20 bg-white border-b border-oliva/10">
      <div className="max-w-[1600px] mx-auto w-full">
        <div
          ref={ref}
          className={`scroll-reveal ${visible ? 'is-visible' : ''}`}
        >
          <div className="inline-block border border-oliva/30 px-3 py-1 mb-6">
            <span className="text-oliva text-xs font-mono uppercase tracking-widest">
              Sobre nosotros
            </span>
          </div>

          <p className="text-oliva font-bold leading-tight" style={{ fontSize: 'clamp(1.5rem, 2.4vw, 2.25rem)', letterSpacing: '-0.01em' }}>
            Más de 25 años transformando residuos orgánicos en recursos.
            <span className="text-gray-600 font-normal"> Acompañamos a empresas, industrias, municipios y productores con soluciones de compostaje, sustratos y restauración ambiental que generan impacto real.</span>
          </p>

          <Link
            to="/nosotros"
            className="inline-flex items-center gap-2 mt-6 text-oliva text-sm font-semibold hover:gap-3 transition-all group"
          >
            Conocé más sobre HISOIL
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
