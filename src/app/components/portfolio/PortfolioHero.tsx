import { useReveal } from '../../hooks/useReveal';

export function PortfolioHero() {
  const [ref, visible] = useReveal<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section className="relative bg-oliva overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32 px-6 md:px-12 lg:px-20">
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 0,transparent 80px),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 0,transparent 80px)`,
        }}
      />

      <div
        ref={ref}
        className={`relative max-w-[1600px] mx-auto w-full scroll-reveal ${visible ? 'is-visible' : ''}`}
      >
        <div className="max-w-3xl">
          <div className="inline-block border border-white/25 px-3 py-1 mb-6">
            <span className="text-white/80 text-xs font-mono uppercase tracking-widest">Casos de éxito</span>
          </div>
          <h1 className="text-white leading-[1.05] mb-6" style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)' }}>
            Casos documentados en <span className="text-lima">10 industrias</span>.
          </h1>
          <p className="text-white/85 leading-relaxed text-lg max-w-2xl">
            Cada tarjeta representa un problema resuelto: qué residuos tratamos, qué servicios ejecutamos y las empresas del sector que confían en Hisoil.
          </p>
        </div>
      </div>
    </section>
  );
}
