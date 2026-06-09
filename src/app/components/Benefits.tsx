const stats = [
  { value: "−60%", label: "emisiones de CO₂", sub: "vs fertilización química convencional" },
  { value: "+35%", label: "rendimiento agrícola", sub: "promedio documentado en campo" },
  { value: "40%", label: "ahorro en insumos", sub: "en clientes con plan anual" },
  { value: "2.400 t", label: "residuos procesados", sub: "en las últimas 3 campañas" },
];

const pillars = [
  {
    title: "Economía circular en el agro",
    body: "Convertimos residuos orgánicos de feedlots, frigoríficos y municipios en fertilizantes de alta calidad. El residuo de uno es el insumo del otro.",
    img: "https://images.unsplash.com/photo-1651608154985-dcc87b27a63e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxjb21wb3N0JTIwb3JnYW5pYyUyMHdhc3RlJTIwcHJvY2Vzc2luZyUyMHBsYW50fGVufDF8fHx8MTc4MDkzNTAzN3ww&ixlib=rb-4.1.0&q=80&w=600",
  },
  {
    title: "Resultados medibles, no promesas",
    body: "Cada aplicación queda documentada. Medimos antes y después. Reportamos rendimiento, calidad de suelo y ahorro. Los números son del cliente, no nuestros.",
    img: "https://images.unsplash.com/photo-1492496913980-501348b61469?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2lsJTIwYW5hbHlzaXMlMjBsYWJvcmF0b3J5JTIwc2NpZW5jZSUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc4MDkzNTA0Nnww&ixlib=rb-4.1.0&q=80&w=600",
  },
  {
    title: "Acompañamiento real en campo",
    body: "No vendemos un producto y nos vamos. Nuestros agrónomos hacen el seguimiento en cada etapa del cultivo y ajustan la estrategia con datos reales.",
    img: "https://images.unsplash.com/photo-1709532388333-acf472eae61a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxhZ3Jvbm9taXN0JTIwZmllbGQlMjBjcm9wJTIwaW5zcGVjdGlvbiUyMGFncmljdWx0dXJlJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc4MDkzNTAzNnww&ixlib=rb-4.1.0&q=80&w=600",
  },
];

export function Benefits() {
  return (
    <section className="bg-gray-950 py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1600px] mx-auto w-full">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block border border-white/20 px-3 py-1 mb-6">
            <span className="text-white/40 text-xs font-mono uppercase tracking-widest">Impacto comprobado</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <h2 className="text-white lg:col-span-6">Números que respaldan cada campaña.</h2>
            <p className="text-white/40 lg:col-span-6 leading-relaxed">
              Estos resultados no son de laboratorio. Son del campo de clientes reales, medidos en campaña y documentados por nuestro equipo técnico.
            </p>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 mb-16">
          {stats.map((s) => (
            <div key={s.label} className="bg-gray-950 p-8 md:p-10">
              <div className="text-white font-bold text-4xl md:text-5xl mb-2 leading-none">{s.value}</div>
              <div className="text-white/60 font-medium mb-1">{s.label}</div>
              <div className="text-white/25 text-xs font-mono leading-relaxed">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Pillars — horizontal dark cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pillars.map((p, i) => (
            <div key={p.title} className="border border-white/10 bg-white/[0.02] relative overflow-hidden">
              {/* Image top half */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover grayscale"
                  style={{ filter: 'grayscale(100%)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-950/90" />
              </div>
              {/* Text */}
              <div className="p-8 relative">
                <div className="text-white/5 font-mono font-bold text-8xl absolute -bottom-4 -right-2 leading-none select-none">
                  0{i + 1}
                </div>
                <h3 className="text-white font-semibold mb-4 relative z-10">{p.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed relative z-10">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
