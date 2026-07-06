import { useEffect, useRef } from 'react';

export function ServiciosHero() {
  const imgRef = useRef<HTMLImageElement>(null);

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
        @keyframes heroIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .h-fade {
          opacity: 0;
          animation: heroIn 0.85s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>

      <section className="relative min-h-screen flex flex-col overflow-hidden">
        {/* Background image with parallax */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            ref={imgRef}
            src="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=1920&q=85&fit=crop"
            alt="Planta de compostaje industrial"
            className="absolute w-full object-cover will-change-transform"
            style={{ height: '120%', top: '-10%' }}
          />
        </div>

        {/* Overlays */}
        <div className="absolute inset-0 bg-oliva/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-noche/60 via-transparent to-noche/10" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-6 text-center py-32 pt-44">
          <div className="h-fade inline-block border border-white/30 px-4 py-1.5 mb-8" style={{ animationDelay: '0.1s' }}>
            <span className="text-white/65 text-xs font-mono uppercase tracking-[0.2em]">Servicios</span>
          </div>

          <h1 className="h-fade text-white max-w-4xl mb-8 leading-tight" style={{ animationDelay: '0.25s' }}>
            Soluciones para transformar residuos en valor.
          </h1>

          <p className="h-fade text-white/75 max-w-2xl mb-12 text-lg leading-relaxed" style={{ animationDelay: '0.4s' }}>
            Tratamiento de residuos, gestión ambiental y soluciones agrícolas con impacto medible en cada operación.
          </p>

          <div className="h-fade flex flex-col sm:flex-row gap-4 justify-center" style={{ animationDelay: '0.55s' }}>
            <button className="bg-white text-oliva px-9 py-4 rounded-full font-semibold hover:bg-canola hover:text-oliva transition-all shadow-xl">
              Solicitar Presupuesto
            </button>
            <button className="border border-white/60 text-white px-9 py-4 rounded-full font-medium hover:bg-white/10 transition-colors backdrop-blur-sm">
              Ver Productos →
            </button>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="h-fade relative z-10 bg-[#14201A]/70 backdrop-blur-sm border-t border-white/10 py-5 px-6" style={{ animationDelay: '0.7s' }}>
          <div className="w-full flex flex-wrap justify-center md:justify-between items-center gap-6 max-w-[1600px] mx-auto">
            {[
              "ISO 14001 certificado",
              "+2.400 proyectos ejecutados",
              "Cobertura nacional",
              "Respuesta en 24 hs",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-white/75 text-sm font-mono">
                <div className="w-1.5 h-1.5 bg-lima rounded-full" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
