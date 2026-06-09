import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import { useModal } from '../context/ModalContext';

const IMG_URL =
  "https://images.unsplash.com/photo-1642686929941-92f0689c4adb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzb3liZWFuJTIwZmllbGQlMjByb3dzJTIwYWVyaWFsJTIwdmlldyUyMGFncmljdWx0dXJlJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc4MDkyOTE1OHww&ixlib=rb-4.1.0&q=80&w=1080";

const rightCards = [
  {
    eyebrow: "Último caso documentado",
    content: (
      <>
        <div className="text-white font-extrabold mb-1" style={{ fontSize: "2.4rem", lineHeight: 1 }}>+42%</div>
        <div className="text-white/60 text-sm mb-1">rendimiento soja</div>
        <div className="text-white/30 text-xs font-mono">Estancia San Jorge · Bs As</div>
      </>
    ),
    delay: "0.25s",
  },
  {
    eyebrow: "Residuos valorizados",
    content: (
      <>
        <div className="text-white font-extrabold mb-1" style={{ fontSize: "2.4rem", lineHeight: 1 }}>2.400 t</div>
        <div className="text-white/60 text-sm mb-1">procesadas</div>
        <div className="text-white/30 text-xs font-mono">en las últimas 3 campañas</div>
      </>
    ),
    delay: "0.5s",
  },
  {
    eyebrow: "Alcance nacional",
    content: (
      <div className="grid grid-cols-2 gap-x-6 gap-y-3">
        {[
          { v: "800+", l: "clientes activos" },
          { v: "15+",  l: "años en el agro" },
          { v: "+42%", l: "rendimiento prom." },
          { v: "12",   l: "provincias" },
        ].map((k) => (
          <div key={k.l}>
            <div className="text-white font-bold text-lg leading-none mb-0.5">{k.v}</div>
            <div className="text-white/35 text-[10px] font-mono leading-tight">{k.l}</div>
          </div>
        ))}
      </div>
    ),
    delay: "1s",
  },
];

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
        // Zoom hacia adelante: empieza en 1 y llega a 1.35 al final del hero
        const scale = 1 + currentProgress * 0.35;
        // Leve subida para reforzar la sensación de avanzar
        const translateY = currentProgress * 60;
        imgRef.current.style.transform = `scale(${scale}) translateY(${translateY}px)`;
        // La imagen se va aclarando levemente al avanzar
        imgRef.current.style.filter = `grayscale(100%) brightness(${0.75 + currentProgress * 0.35})`;
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
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-card {
          opacity: 0;
          animation: heroFadeUp 0.65s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>

      <section className="relative min-h-[95vh] flex flex-col overflow-hidden">

        {/* Background image with parallax */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            ref={imgRef}
            src={IMG_URL}
            alt="Campo agrícola — filas de cultivo"
            className="w-full object-cover will-change-transform grayscale"
            style={{
              filter: 'grayscale(100%)',
              height: '150%',
              top: '-25%',
              position: 'absolute',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/96 via-gray-950/78 to-gray-950/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-gray-950/35" />
        </div>

        {/* Breadcrumb strip */}
        <div className="relative z-10 border-b border-white/10 px-6 md:px-12 lg:px-20 py-4">
          <div className="max-w-[1600px] mx-auto w-full flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono text-white/25">
              <span>Hisoil</span><span>/</span>
              <span className="text-white/40">Agricultura sustentable · Transformación de residuos</span>
            </div>
            <div className="hidden md:flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-pulse" />
              <span className="text-white/30 text-xs font-mono">En operación · Argentina</span>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="relative z-10 flex-1 flex flex-col max-w-[1600px] mx-auto w-full px-6 md:px-12 lg:px-20 pt-10 pb-10 md:pt-14 md:pb-14">
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">

            {/* Left — copy + CTAs */}
            <div className="lg:col-span-7 flex flex-col gap-8">

              <div className="inline-block border border-white/20 bg-white/5 backdrop-blur-sm px-3 py-1.5 self-start">
                <span className="text-white/50 text-xs font-mono uppercase tracking-[0.2em]">
                  Soluciones para el agro argentino
                </span>
              </div>

              <div>
                <h1
                  className="text-white leading-[1.0]"
                  style={{
                    fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
                    fontWeight: 800,
                    textShadow: '0 2px 40px rgba(0,0,0,0.9), 0 1px 8px rgba(0,0,0,1)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Transformamos<br />
                  residuos.<br />
                  Potenciamos<br />
                  <span style={{ color: 'rgba(255,255,255,0.38)' }}>resultados.</span>
                </h1>
              </div>

              <div className="w-10 h-px bg-white/25" />

              <p className="text-white/62 leading-relaxed max-w-lg" style={{ fontSize: '1.05rem' }}>
                Fertilizantes orgánicos, compostaje profesional y asesoramiento técnico especializado para productores, empresas y municipios que buscan resultados reales en campo.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={open}
                  className="bg-white text-gray-900 rounded-full font-bold hover:bg-gray-100 transition-all shadow-2xl hover:scale-[1.02] active:scale-[0.99] min-w-[240px] flex items-center justify-center"
                  style={{ padding: '1.05rem 2.25rem', fontSize: '1rem', letterSpacing: '-0.01em' }}
                >
                  Solicitar presupuesto
                </button>
                <Link to="/productos">
                  <button
                    className="w-full border border-white/35 bg-white/8 backdrop-blur-sm text-white rounded-full font-medium hover:bg-white/15 hover:border-white/50 transition-all min-w-[240px] flex items-center justify-center"
                    style={{ padding: '1.05rem 2.25rem', fontSize: '1rem' }}
                  >
                    Ver productos →
                  </button>
                </Link>
              </div>
            </div>

            {/* Right — staggered cards */}
            <div className="hidden lg:flex lg:col-span-5 flex-col items-end gap-4 pl-10">
              {rightCards.map((card, i) => (
                <div
                  key={i}
                  className="hero-card bg-white/10 border border-white/15 backdrop-blur-md p-5 rounded-sm w-64 self-end"
                  style={{ animationDelay: card.delay }}
                >
                  <div className="text-white/30 text-[10px] font-mono mb-3 uppercase tracking-widest">
                    {card.eyebrow}
                  </div>
                  {card.content}
                </div>
              ))}

              {/* Certifications — loose logos below cards */}
              <div
                className="hero-card self-end"
                style={{ animationDelay: "1s" }}
              >
                <div className="text-white/25 text-[9px] font-mono uppercase tracking-widest mb-2.5 text-right">
                  Certificaciones
                </div>
                <div className="flex gap-3 items-end justify-end">
                  {["SENASA", "INTA", "IRAM"].map((c) => (
                    <div key={c} className="flex flex-col items-center gap-1.5">
                      <div className="w-12 h-9 bg-white/8 border border-white/15 rounded-sm flex items-center justify-center">
                        <div className="w-7 h-4 bg-white/20 rounded-sm" />
                      </div>
                      <span className="text-white/30 text-[9px] font-mono">{c}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="hero-card text-white/20 text-xs font-mono self-end"
                style={{ animationDelay: "1.2s" }}
              >
                Scroll para explorar ↓
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
