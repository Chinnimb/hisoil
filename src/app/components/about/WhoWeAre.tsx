import { useReveal } from '../../hooks/useReveal';

const kpis = [
  { value: "+15", label: "Años transformando el agro", sub: "experiencia comprobada" },
  { value: "800+", label: "Productores y empresas", sub: "confían en nosotros" },
  { value: "2.400+", label: "Proyectos documentados", sub: "con métricas reales" },
  { value: "40%", label: "Reducción de impacto", sub: "ambiental por cliente" },
];

const pilares = [
  {
    eyebrow: "Cómo empezó",
    title: "Nacimos en el campo, no en una oficina.",
    body: "Hisoil surgió de la necesidad real de los productores: recuperar suelos cansados, valorizar residuos y reducir costos sin sacrificar rendimiento. Más de 15 años en el sector agro-ambiental nos hicieron expertos en eso.",
  },
  {
    eyebrow: "Qué hacemos",
    title: "Dos líneas. Un mismo propósito: economía circular.",
    body: "Producimos insumos agro-biológicos certificados y ofrecemos servicios técnicos de gestión ambiental. Cada solución conecta producción y sostenibilidad. Lo que para otros es residuo, para nosotros es materia prima.",
  },
  {
    eyebrow: "Para quién",
    title: "Trabajamos con quienes están en la cancha.",
    body: "Productores agrícolas, empresas agroindustriales, frigoríficos, municipios, cooperativas. Si generás residuos orgánicos o querés cuidar tu suelo, tenemos una propuesta que se adapta a tu escala.",
  },
  {
    eyebrow: "Qué nos diferencia",
    title: "Respaldo técnico, no humo de marketing.",
    body: "Equipo propio de agrónomos en campo, alianza con INTA, sin intermediarios. Cada recomendación viene con datos. Cada resultado, con seguimiento. Por eso nuestros clientes vuelven campaña tras campaña.",
  },
];

interface PilarProps {
  p: typeof pilares[number];
  index: number;
}

function Pilar({ p, index }: PilarProps) {
  const [ref, visible] = useReveal<HTMLDivElement>({ threshold: 0.3 });
  return (
    <div
      ref={ref}
      className={`scroll-reveal grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-8 md:py-10 border-b border-oliva/15 last:border-b-0 ${visible ? 'is-visible' : ''}`}
      style={{ transitionDelay: visible ? `${index * 0.08}s` : '0s' }}
    >
      <div className="md:col-span-3">
        <div className="text-oliva text-[11px] font-mono uppercase tracking-[0.2em]">{p.eyebrow}</div>
      </div>
      <div className="md:col-span-9">
        <h3 className="text-oliva font-bold text-xl md:text-2xl leading-tight mb-3">{p.title}</h3>
        <p className="text-gray-700 leading-relaxed">{p.body}</p>
      </div>
    </div>
  );
}

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
  const [quoteRef, quoteVisible] = useReveal<HTMLDivElement>({ threshold: 0.5 });

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
          <h2 className="text-oliva mb-6">El agro necesita aliados que entiendan el campo.</h2>
          <p className="text-gray-700 leading-relaxed text-lg max-w-2xl">
            No vendemos productos. Acompañamos transformaciones. Cada hectárea, cada residuo, cada decisión técnica importa — y nosotros la respaldamos con datos.
          </p>
        </div>

        {/* Visual collage — 3 images staggered */}
        <div
          ref={imgRef}
          className={`grid grid-cols-12 gap-3 md:gap-5 mb-16 md:mb-24 scroll-reveal ${imgVisible ? 'is-visible' : ''}`}
        >
          {/* Big image left */}
          <div className="col-span-12 md:col-span-7 aspect-[5/4] rounded-2xl overflow-hidden relative group">
            <img
              src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1400&q=85&fit=crop"
              alt="Equipo técnico de Hisoil en campo"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-oliva/30 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <div>
                <div className="inline-block bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 mb-2">
                  <span className="text-oliva text-[10px] font-mono uppercase tracking-widest">En campo · Pergamino, BA</span>
                </div>
                <p className="text-white font-bold text-2xl md:text-3xl leading-tight max-w-md">
                  "Lo que medimos, lo mejoramos."
                </p>
              </div>
            </div>
          </div>

          {/* Stack right */}
          <div className="col-span-12 md:col-span-5 grid grid-rows-2 gap-3 md:gap-5">
            <div className="aspect-[5/3] rounded-2xl overflow-hidden relative group">
              <img
                src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=900&q=85&fit=crop"
                alt="Análisis técnico de suelo"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-oliva/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-block bg-oliva/95 backdrop-blur-sm text-white text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full">
                  Diagnóstico técnico
                </span>
              </div>
            </div>
            <div className="aspect-[5/3] rounded-2xl overflow-hidden relative group bg-oliva flex items-center justify-center p-7">
              <div className="text-center">
                <div className="text-lima text-5xl md:text-6xl font-bold leading-none mb-2">+15</div>
                <div className="text-white text-sm font-mono uppercase tracking-widest">años en el agro</div>
                <div className="text-white/60 text-xs mt-3">desde 2008 acompañando productores</div>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars */}
        <div className="mb-20 md:mb-24">
          {pilares.map((p, i) => (
            <Pilar key={p.eyebrow} p={p} index={i} />
          ))}
        </div>

        {/* Big quote */}
        <div
          ref={quoteRef}
          className={`bg-oliva rounded-3xl p-10 md:p-16 lg:p-20 mb-16 md:mb-24 relative overflow-hidden scroll-reveal-scale ${quoteVisible ? 'is-visible' : ''}`}
        >
          <div className="absolute -top-12 -left-6 text-lima/20 font-bold leading-none select-none pointer-events-none" style={{ fontSize: 'clamp(10rem, 18vw, 18rem)' }}>"</div>
          <div className="relative max-w-3xl">
            <p className="text-white font-bold text-2xl md:text-3xl lg:text-4xl leading-tight mb-6">
              No buscamos vender un producto.<br />
              <span className="text-lima">Construimos campos que duran.</span>
            </p>
            <div className="flex items-center gap-3 mt-8">
              <div className="w-12 h-px bg-lima" />
              <span className="text-white/80 text-xs font-mono uppercase tracking-widest">Equipo técnico Hisoil</span>
            </div>
          </div>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {kpis.map((k, i) => (
            <Kpi key={k.label} k={k} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
