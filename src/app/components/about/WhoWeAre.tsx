import { useReveal } from '../../hooks/useReveal';

const kpis = [
  { value: "+25", label: "Años", sub: "desarrollando soluciones ambientales" },
  { value: "12", label: "Provincias", sub: "con proyectos y clientes" },
  { value: "Miles de tn", label: "Valorizadas", sub: "de residuos orgánicos" },
  { value: "Circular", label: "Modelo", sub: "de trabajo y crecimiento" },
];

interface KpiProps {
  k: typeof kpis[number];
  index: number;
}

function Kpi({ k, index }: KpiProps) {
  const [ref, visible] = useReveal<HTMLDivElement>({ threshold: 0.3 });
  return (
    <div
      ref={ref}
      className={`scroll-reveal-scale relative p-6 md:p-7 rounded-2xl bg-white border border-oliva/15 hover:border-oliva/40 transition-all duration-500 group ${visible ? 'is-visible' : ''}`}
      style={{ transitionDelay: visible ? `${index * 0.1}s` : '0s' }}
    >
      <div
        className="absolute top-0 left-0 h-[3px] bg-lima transition-all duration-700 ease-out group-hover:w-full"
        style={{ width: '20%' }}
      />
      <div className="text-3xl md:text-4xl font-bold text-oliva mb-2 leading-none">{k.value}</div>
      <div className="text-oliva text-sm font-semibold mb-1">{k.label}</div>
      <div className="text-gray-600 text-xs font-mono">{k.sub}</div>
    </div>
  );
}

export function WhoWeAre() {
  const [imgRef, imgVisible] = useReveal<HTMLDivElement>({ threshold: 0.2 });
  const [headerRef, headerVisible] = useReveal<HTMLDivElement>({ threshold: 0.3 });
  const [bodyRef, bodyVisible] = useReveal<HTMLDivElement>({ threshold: 0.3 });
  const [quoteRef, quoteVisible] = useReveal<HTMLDivElement>({ threshold: 0.5 });
  const [kpisHeaderRef, kpisHeaderVisible] = useReveal<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-[1600px] mx-auto w-full">
        {/* Header */}
        <div
          ref={headerRef}
          className={`max-w-3xl mb-12 md:mb-16 scroll-reveal ${headerVisible ? 'is-visible' : ''}`}
        >
          <div className="inline-block border border-oliva/30 px-3 py-1 mb-6">
            <span className="text-oliva text-xs font-mono uppercase tracking-widest">02 — Quiénes somos</span>
          </div>
          <h2 className="text-oliva mb-6">Transformamos problemas ambientales en oportunidades.</h2>
        </div>

        {/* Visual collage — 3 images */}
        <div
          ref={imgRef}
          className={`grid grid-cols-12 gap-3 md:gap-5 mb-16 md:mb-20 scroll-reveal ${imgVisible ? 'is-visible' : ''}`}
        >
          <div className="col-span-12 md:col-span-7 aspect-[5/4] rounded-2xl overflow-hidden relative group">
            <img
              src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=1400&q=85&fit=crop"
              alt="Planta de compostaje Hisoil"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-oliva/30 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <div className="inline-block bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 mb-2">
                <span className="text-oliva text-[10px] font-mono uppercase tracking-widest">Planta operativa · Exaltación de la Cruz</span>
              </div>
              <p className="text-white font-bold text-xl md:text-2xl leading-tight max-w-md">
                +25 años de experiencia en soluciones agroambientales.
              </p>
            </div>
          </div>

          <div className="col-span-12 md:col-span-5 grid grid-rows-2 gap-3 md:gap-5">
            <div className="aspect-[5/3] rounded-2xl overflow-hidden relative group">
              <img
                src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=900&q=85&fit=crop"
                alt="Diagnóstico técnico"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-oliva/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-block bg-oliva/95 backdrop-blur-sm text-white text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full">
                  Trabajo técnico
                </span>
              </div>
            </div>
            <div className="aspect-[5/3] rounded-2xl overflow-hidden relative group bg-oliva flex items-center justify-center p-6">
              <div className="text-center">
                <div className="text-lima text-4xl md:text-5xl font-bold leading-none mb-2">+25</div>
                <div className="text-white text-xs md:text-sm font-mono uppercase tracking-widest">años en el sector</div>
              </div>
            </div>
          </div>
        </div>

        {/* Body copy — 2 columns */}
        <div
          ref={bodyRef}
          className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16 md:mb-20 scroll-reveal ${bodyVisible ? 'is-visible' : ''}`}
        >
          <div className="lg:col-span-4">
            <div className="text-oliva text-[10px] font-mono uppercase tracking-widest mb-3">Nuestro trabajo</div>
            <h3 className="text-oliva font-bold text-2xl md:text-3xl leading-tight">
              Los residuos orgánicos no son un descarte, sino un <span className="text-lima">recurso</span>.
            </h3>
          </div>
          <div className="lg:col-span-8 space-y-5 text-gray-700 leading-relaxed text-base md:text-lg">
            <p>
              En HISOIL creemos que los residuos orgánicos no son un descarte, sino un recurso. Desde hace más de <span className="text-oliva font-semibold">25 años</span> desarrollamos soluciones que permiten reducir el impacto ambiental, recuperar suelos y valorizar residuos mediante tecnologías de compostaje, producción de enmiendas orgánicas, sustratos profesionales y restauración ecológica.
            </p>
            <p>
              Trabajamos junto a <span className="text-oliva font-semibold">industrias, empresas, municipios y productores</span> para diseñar soluciones adaptadas a cada necesidad, integrando conocimiento técnico, experiencia operativa y un fuerte compromiso con la sustentabilidad.
            </p>
            <p>
              Cada proyecto busca generar <span className="text-oliva font-semibold">resultados medibles</span>, reducir costos de gestión, recuperar nutrientes y devolver valor al suelo a través de procesos seguros, eficientes y ambientalmente responsables.
            </p>
          </div>
        </div>

        {/* Big quote */}
        <div
          ref={quoteRef}
          className={`bg-oliva rounded-3xl p-10 md:p-14 mb-16 md:mb-20 relative overflow-hidden scroll-reveal-scale ${quoteVisible ? 'is-visible' : ''}`}
        >
          <div className="absolute -top-10 -left-4 text-lima/20 font-bold leading-none select-none pointer-events-none" style={{ fontSize: 'clamp(8rem, 14vw, 14rem)' }}>"</div>
          <div className="relative max-w-3xl">
            <p className="text-white font-bold text-2xl md:text-3xl leading-tight">
              Lo que otros consideran un residuo,{' '}
              <span className="text-lima">nosotros lo transformamos en una oportunidad</span>{' '}
              para el ambiente y la producción.
            </p>
          </div>
        </div>

        {/* KPIs — Nuestros números */}
        <div
          ref={kpisHeaderRef}
          className={`mb-8 md:mb-10 scroll-reveal ${kpisHeaderVisible ? 'is-visible' : ''}`}
        >
          <div className="inline-block border border-oliva/30 px-3 py-1 mb-4">
            <span className="text-oliva text-xs font-mono uppercase tracking-widest">Nuestros números</span>
          </div>
          <h3 className="text-oliva font-bold text-2xl md:text-3xl leading-tight">Datos que respaldan lo que hacemos.</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {kpis.map((k, i) => (
            <Kpi key={k.label} k={k} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
