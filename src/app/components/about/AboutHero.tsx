import { useModal } from '../../context/ModalContext';
import { Link } from 'react-router';
import imgHero from '../../../imports/nosotros-hero.webp';

export function AboutHero() {
  const { open } = useModal();

  return (
    <>
      <style>{`
        @keyframes heroInAbout {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ha-fade {
          opacity: 0;
          animation: heroInAbout 0.85s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>

      <section className="relative min-h-[calc(100svh-5rem)] flex flex-col overflow-hidden bg-noche">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={imgHero}
            alt="Equipo de HISOIL en la planta de compostaje"
            className="absolute inset-0 h-full w-full object-cover object-[center_70%]"
          />
        </div>
        <div className="absolute inset-0 bg-noche/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-noche/75 via-transparent to-noche/30" />

        {/* Content */}
        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-8 text-center">
          <div
            className="ha-fade inline-block border border-white/30 px-4 py-1.5 mb-8"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="text-white/65 text-xs font-mono uppercase tracking-[0.2em]">
              Nosotros
            </span>
          </div>

          <h1
            className="ha-fade text-white max-w-4xl mb-8 leading-tight"
            style={{ animationDelay: '0.25s' }}
          >
            Transformamos residuos orgánicos en{' '}
            <span className="text-lima">soluciones para el suelo</span>.
          </h1>

          <p
            className="ha-fade text-white/80 max-w-2xl mb-12 text-lg leading-relaxed"
            style={{ animationDelay: '0.4s' }}
          >
            HISOIL desarrolla soluciones integrales para la gestión de residuos orgánicos,
            producción de compost, sustratos técnicos y restauración ambiental. Acompañamos a
            empresas, industrias, municipios y productores con proyectos que generan beneficios
            económicos, ambientales y sociales.
          </p>

          <div
            className="ha-fade flex flex-col sm:flex-row gap-4 justify-center"
            style={{ animationDelay: '0.55s' }}
          >
            <button
              onClick={open}
              className="bg-white text-oliva px-9 py-4 rounded-full font-semibold hover:bg-canola hover:text-oliva transition-all shadow-xl"
            >
              Solicitar asesoramiento
            </button>
            <Link
              to="/productos"
              className="border border-white/60 text-white px-9 py-4 rounded-full font-medium hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              Conocer nuestros productos →
            </Link>
          </div>
        </div>

        {/* Indicators footer */}
        <div
          className="ha-fade relative z-10 bg-[#14201A]/70 backdrop-blur-sm border-t border-white/10 py-6 px-6 md:px-12 lg:px-20"
          style={{ animationDelay: '0.7s' }}
        >
          <div className="max-w-[1600px] mx-auto w-full flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {[
              { value: '+25 años', label: 'de experiencia en soluciones agroambientales' },
              { value: '3 provincias', label: 'con proyectos activos · capacidad nacional' },
              { value: 'Economía Circular', label: 'transformando residuos en recursos' },
            ].map((item) => (
              <div
                key={item.value}
                className="flex items-center gap-3 justify-center md:justify-start"
              >
                <div className="w-2 h-2 bg-lima rounded-full flex-shrink-0" />
                <div>
                  <div className="text-white font-bold text-lg leading-tight">{item.value}</div>
                  <div className="text-white/60 text-xs font-mono">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
