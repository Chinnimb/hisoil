import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import { Leaf, CloudOff, MapPin } from 'lucide-react';
import { useModal } from '../context/ModalContext';
import { AnimatedCounter } from './AnimatedCounter';

const IMG_URL =
  "https://images.unsplash.com/photo-1500382017468-9049fed747ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1920";

export function Hero() {
  const imgRef = useRef<HTMLImageElement>(null);
  const { open } = useModal();

  useEffect(() => {
    let rafId: number;
    let currentProgress = 0;
    let targetProgress = 0;

    const onScroll = () => {
      const heroHeight = window.innerHeight;
      targetProgress = Math.min(window.scrollY / heroHeight, 1);
    };

    const tick = () => {
      currentProgress += (targetProgress - currentProgress) * 0.06;

      if (imgRef.current) {
        const scale = 1 + currentProgress * 0.35;
        const translateY = currentProgress * 60;
        imgRef.current.style.transform = `scale(${scale}) translateY(${translateY}px)`;
        imgRef.current.style.filter = `brightness(${0.85 + currentProgress * 0.25})`;
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
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-fade {
          opacity: 0;
          animation: heroFadeUp 0.85s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>

      <section className="relative min-h-[95vh] flex flex-col overflow-hidden">

        {/* Background image with parallax */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            ref={imgRef}
            src={IMG_URL}
            alt="Campo agrícola argentino"
            className="w-full object-cover will-change-transform"
            style={{
              height: '150%',
              top: '-25%',
              position: 'absolute',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-oliva/90 via-oliva/50 to-oliva/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-oliva/70 via-transparent to-oliva/20" />
        </div>

        {/* Breadcrumb strip */}
        <div className="relative z-10 border-b border-white/10 px-6 md:px-12 lg:px-20 py-4">
          <div className="max-w-[1600px] mx-auto w-full flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono text-white/40">
              <span>Hisoil</span><span>/</span>
              <span className="text-white/70">Regeneración de recursos · Compostaje profesional</span>
            </div>
            <div className="hidden md:flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-lima rounded-full animate-pulse" />
              <span className="text-white/70 text-xs font-mono">En operación · Argentina</span>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="relative z-10 flex-1 flex flex-col max-w-[1600px] mx-auto w-full px-6 md:px-12 lg:px-20 pt-12 pb-16 md:pt-16 md:pb-20">
          <div className="flex-1 flex flex-col justify-center max-w-5xl">

            <div
              className="hero-fade inline-block border border-white/25 bg-white/5 backdrop-blur-sm px-4 py-1.5 self-start mb-8"
              style={{ animationDelay: '0.1s' }}
            >
              <span className="text-white/85 text-xs font-mono uppercase tracking-[0.2em]">
                Soluciones regenerativas para el agro
              </span>
            </div>

            <h1
              className="hero-fade text-white leading-[1.05] mb-8"
              style={{
                fontSize: 'clamp(2.4rem, 5vw, 4.5rem)',
                fontWeight: 700,
                textShadow: '0 2px 40px rgba(0,0,0,0.6), 0 1px 8px rgba(0,0,0,0.7)',
                letterSpacing: '-0.02em',
                animationDelay: '0.25s',
              }}
            >
              Regeneramos recursos.<br />
              <span style={{ color: '#B8C521' }}>Construimos el futuro.</span>
            </h1>

            <p
              className="hero-fade text-white/85 leading-relaxed max-w-2xl mb-10"
              style={{ fontSize: '1.1rem', animationDelay: '0.4s' }}
            >
              Transformamos recursos orgánicos en soluciones de valor mediante compostaje profesional, sustratos de alta calidad y asesoramiento técnico especializado para productores, empresas y municipios.
            </p>

            <div
              className="hero-fade flex flex-col sm:flex-row gap-3 mb-16"
              style={{ animationDelay: '0.55s' }}
            >
              <button
                onClick={open}
                className="bg-white text-oliva rounded-full font-bold hover:bg-lima transition-all shadow-2xl hover:scale-[1.02] active:scale-[0.99] min-w-[240px] flex items-center justify-center"
                style={{ padding: '1.05rem 2.25rem', fontSize: '1rem', letterSpacing: '-0.01em' }}
              >
                Solicitar presupuesto
              </button>
              <Link to="/productos">
                <button
                  className="w-full border border-white/40 bg-white/10 backdrop-blur-sm text-white rounded-full font-medium hover:bg-white/20 hover:border-white/60 transition-all min-w-[240px] flex items-center justify-center"
                  style={{ padding: '1.05rem 2.25rem', fontSize: '1rem' }}
                >
                  Ver productos →
                </button>
              </Link>
            </div>

            {/* 3 animated counters */}
            <div
              className="hero-fade grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl"
              style={{ animationDelay: '0.7s' }}
            >
              {[
                {
                  Icon: Leaf,
                  end: 2400,
                  suffix: ' t',
                  label: 'Toneladas procesadas',
                  sub: 'de residuos valorizados',
                },
                {
                  Icon: CloudOff,
                  end: 1850,
                  suffix: ' t CO₂',
                  label: 'Emisiones evitadas',
                  sub: 'de gases de efecto invernadero',
                },
                {
                  Icon: MapPin,
                  end: 12,
                  suffix: '',
                  label: 'Alcance nacional',
                  sub: 'provincias en operación',
                },
              ].map((c, i) => (
                <div
                  key={c.label}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 md:p-6 hover:bg-white/15 hover:border-lima/40 transition-all group"
                  style={{ animationDelay: `${0.85 + i * 0.1}s` }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-lima/25 flex items-center justify-center group-hover:bg-lima transition-colors duration-300">
                      <c.Icon className="w-4 h-4 text-lima group-hover:text-oliva transition-colors duration-300" />
                    </div>
                    <div className="text-white/60 text-[10px] font-mono uppercase tracking-widest">{c.label}</div>
                  </div>
                  <div className="text-white font-bold leading-none mb-1" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
                    <AnimatedCounter end={c.end} suffix={c.suffix} />
                  </div>
                  <div className="text-white/60 text-xs">{c.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
