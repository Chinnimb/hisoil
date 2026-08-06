import { useEffect, useRef } from 'react';
import { useModal } from '../../context/ModalContext';
import { Link } from 'react-router';

export function AboutHero() {
  const imgRef = useRef<HTMLImageElement>(null);
  const { open } = useModal();

  useEffect(() => {
    let rafId: number;
    let current = 0;
    let target = 0;
    const onScroll = () => {
      target = Math.min(window.scrollY / window.innerHeight, 1);
    };
    const tick = () => {
      current += (target - current) * 0.06;
      if (imgRef.current) {
        const scale = 1 + current * 0.25;
        const ty = current * 50;
        imgRef.current.style.transform = `scale(${scale}) translateY(${ty}px)`;
      }
      rafId = requestAnimationFrame(tick);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    rafId = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

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

      <section className="relative min-h-screen flex flex-col overflow-hidden">
        {/* Background image with parallax */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            ref={imgRef}
            src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=1920&q=85&fit=crop"
            alt="Hisoil — Transformamos residuos orgánicos en soluciones para el suelo"
            className="absolute w-full object-cover will-change-transform"
            style={{ height: '120%', top: '-10%' }}
          />
        </div>

        {/* Overlays */}
        <div className="absolute inset-0 bg-oliva/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-noche/60 via-transparent to-noche/10" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-6 text-center py-32 pt-44">
          <div className="ha-fade inline-block border border-white/30 px-4 py-1.5 mb-8" style={{ animationDelay: '0.1s' }}>
            <span className="text-white/65 text-xs font-mono uppercase tracking-[0.2em]">Nosotros</span>
          </div>

          <h1 className="ha-fade text-white max-w-4xl mb-8 leading-tight" style={{ animationDelay: '0.25s' }}>
            Transformamos residuos orgánicos en <span className="text-lima">soluciones para el suelo</span>.
          </h1>

          <p className="ha-fade text-white/80 max-w-2xl mb-12 text-lg leading-relaxed" style={{ animationDelay: '0.4s' }}>
            HISOIL desarrolla soluciones integrales para la gestión de residuos orgánicos, producción de compost, sustratos técnicos y restauración ambiental. Acompañamos a empresas, industrias, municipios y productores con proyectos que generan beneficios económicos, ambientales y sociales.
          </p>

          <div className="ha-fade flex flex-col sm:flex-row gap-4 justify-center" style={{ animationDelay: '0.55s' }}>
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
        <div className="ha-fade relative z-10 bg-[#14201A]/70 backdrop-blur-sm border-t border-white/10 py-6 px-6 md:px-12 lg:px-20" style={{ animationDelay: '0.7s' }}>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-[1600px] mx-auto text-center md:text-left">
            {[
              { value: "+25 años", label: "de experiencia en soluciones agroambientales" },
              { value: "12 provincias", label: "con proyectos y presencia comercial" },
              { value: "Economía Circular", label: "transformando residuos en recursos" },
            ].map((item) => (
              <div key={item.value} className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3 justify-center md:justify-start">
                <div className="w-2 h-2 bg-lima rounded-full mx-auto md:mx-0 flex-shrink-0" />
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
