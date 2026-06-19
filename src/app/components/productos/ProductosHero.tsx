export function ProductosHero() {
  return (
    <section className="bg-oliva min-h-screen flex flex-col relative overflow-hidden">
      <style>{`
        @keyframes phIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes phInImg {
          from { opacity: 0; transform: scale(0.96); }
          to   { opacity: 1; transform: scale(1); }
        }
        .ph-fade { opacity: 0; animation: phIn 0.85s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        .ph-img { opacity: 0; animation: phInImg 1s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
      `}</style>

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, #fff 0, #fff 1px, transparent 0, transparent 60px), repeating-linear-gradient(90deg, #fff 0, #fff 1px, transparent 0, transparent 60px)`,
        }}
      />

      <div className="relative z-10 flex-1 flex flex-col">
        {/* Top breadcrumb */}
        <div className="border-b border-white/10 px-6 py-4">
          <div className="w-full flex items-center gap-2 text-xs font-mono text-white/55">
            <span>Inicio</span>
            <span>/</span>
            <span className="text-white/60">Productos</span>
          </div>
        </div>

        {/* Main hero grid */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 max-w-[1600px] mx-auto w-full px-6 py-16 md:py-24 gap-12 lg:gap-0">
          {/* Left — copy */}
          <div className="lg:col-span-6 flex flex-col justify-center lg:pr-16">
            <div className="ph-fade inline-block border border-white/20 px-3 py-1.5 mb-8 self-start" style={{ animationDelay: '0.1s' }}>
              <span className="text-white/65 text-xs font-mono uppercase tracking-[0.2em]">
                Centro de soluciones agrícolas
              </span>
            </div>

            <h1 className="ph-fade text-white mb-6 leading-[1.1]" style={{ animationDelay: '0.25s' }}>
              Insumos técnicos para cada etapa de tu cultivo.
            </h1>

            <p className="ph-fade text-white/70 text-lg leading-relaxed mb-10 max-w-lg" style={{ animationDelay: '0.4s' }}>
              Portafolio completo de fertilizantes, bioestimulantes y compost formulados para maximizar rendimiento, mejorar suelo y sostener la producción ciclo a ciclo.
            </p>

            <div className="ph-fade flex flex-col sm:flex-row gap-3 mb-12" style={{ animationDelay: '0.55s' }}>
              <button className="bg-white text-oliva px-8 py-4 rounded-full font-semibold hover:bg-paja transition-colors">
                Solicitar presupuesto
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors">
                Hablar con un asesor
              </button>
            </div>

            {/* Quick stats */}
            <div className="ph-fade grid grid-cols-3 gap-4 border-t border-white/10 pt-10" style={{ animationDelay: '0.7s' }}>
              {[
                { value: "+60", label: "productos en catálogo" },
                { value: "6", label: "categorías técnicas" },
                { value: "SENASA", label: "registros vigentes" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold text-white mb-1">{s.value}</div>
                  <div className="text-white/35 text-xs font-mono leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — featured product showcase */}
          <div className="ph-img lg:col-span-6 flex items-center" style={{ animationDelay: '0.45s' }}>
            <div className="max-w-[1600px] mx-auto w-full">
              {/* Main product image */}
              <div className="relative rounded-sm aspect-[4/3] overflow-hidden mb-4">
                <img
                  src="https://images.unsplash.com/photo-1613036582025-ba1d4ccb3226?w=600&q=80&fit=crop"
                  alt="Compost Premium — producto destacado"
                  className="w-full h-full object-cover"
                  style={{ filter: 'grayscale(20%)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-4 left-4 bg-white/10 border border-white/20 px-3 py-1 rounded-full">
                  <span className="text-white/80 text-xs font-mono">⭐ Más vendido</span>
                </div>
                <div className="absolute bottom-4 right-4 bg-white text-oliva px-3 py-1.5 rounded-full text-xs font-semibold">
                  Fertilizante
                </div>
              </div>

              {/* Thumbnail strip */}
              <div className="grid grid-cols-4 gap-2">
                {[
                  { label: "Bioestimulante", img: "https://images.unsplash.com/photo-1458014854819-1a40aa70211c?w=150&q=70&fit=crop" },
                  { label: "Compost", img: "https://images.unsplash.com/photo-1697047070930-12043019a0d5?w=150&q=70&fit=crop" },
                  { label: "Enmienda", img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=150&q=70&fit=crop" },
                  { label: "Kit", img: "https://images.unsplash.com/photo-1602928298849-325cec8771c0?w=150&q=70&fit=crop" },
                ].map(({ label, img }) => (
                  <div key={label} className="aspect-square rounded-sm overflow-hidden border border-white/10 cursor-pointer hover:border-white/30 transition-colors relative">
                    <img src={img} alt={label} className="w-full h-full object-cover" />
                    <div className="absolute bottom-0 inset-x-0 bg-black/50 py-1 text-center">
                      <span className="text-white/60 text-[9px] font-mono">{label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom scroll hint */}
        <div className="border-t border-white/10 py-4 px-6">
          <div className="w-full flex items-center justify-between">
            <div className="flex gap-6 overflow-x-auto">
              {["Fertilizantes", "Bioestimulantes", "Compost", "Enmiendas", "Nutrición vegetal", "Tratamiento de suelos"].map((cat) => (
                <button key={cat} className="text-white/55 text-xs font-mono whitespace-nowrap hover:text-white/60 transition-colors">
                  {cat}
                </button>
              ))}
            </div>
            <div className="hidden md:flex items-center gap-2 text-white/20 text-xs font-mono flex-shrink-0 ml-8">
              <span>Scroll</span>
              <span>↓</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
