import { Link } from 'react-router';

const products = [
  {
    name: "Compost Premium",
    category: "Enmienda orgánica",
    badge: "Más vendido",
    badgeStyle: "bg-oliva text-white",
    result: "+28% materia orgánica del suelo",
    stat: "3–6 t/ha",
    statLabel: "dosis recomendada",
    uses: ["Cereales", "Horticultura", "Fruticultura"],
    size: "large",
  },
  {
    name: "Bioestimulante Natural",
    category: "Estimulación vegetal",
    badge: "Recomendado",
    badgeStyle: "bg-gray-700 text-white",
    result: "+40% resistencia al estrés hídrico",
    stat: "1–2 L/ha",
    statLabel: "aplicación foliar",
    uses: ["Soja", "Maíz", "Trigo"],
    size: "regular",
  },
  {
    name: "Fertilizante Líquido",
    category: "Nutrición vegetal",
    badge: "Alta demanda",
    badgeStyle: "bg-paja/300 text-white",
    result: "Absorción rápida en 7 días",
    stat: "20–30 L/ha",
    statLabel: "aplicación basal",
    uses: ["Maíz", "Girasol", "Papa"],
    size: "regular",
  },
  {
    name: "Humus de Lombriz",
    category: "Fertilizante orgánico",
    badge: "Nuevo",
    badgeStyle: "bg-white text-oliva border border-gray-300",
    result: "Microorganismos activos en el suelo",
    stat: "500 kg/ha",
    statLabel: "aplicación mínima",
    uses: ["Horticultura", "Viña", "Aromáticas"],
    size: "regular",
  },
];

export function FeaturedProducts() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 bg-paja/30">
      <div className="max-w-[1600px] mx-auto w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="inline-block border border-gray-300 px-3 py-1 mb-6">
              <span className="text-gray-400 text-xs font-mono uppercase tracking-widest">Productos destacados</span>
            </div>
            <h2 className="text-oliva max-w-lg">Los más elegidos por productores de todo el país.</h2>
          </div>
          <Link to="/productos">
            <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-full text-sm font-medium hover:bg-white transition-colors flex-shrink-0">
              Ver catálogo completo →
            </button>
          </Link>
        </div>

        {/* Products — asymmetric grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Featured large card */}
          <div className="lg:col-span-5 bg-oliva border border-gray-800 rounded-sm flex flex-col overflow-hidden">
            {/* Product visual */}
            <div className="flex-1 relative border-b border-white/10 min-h-56 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1613036582025-ba1d4ccb3226?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2lsJTIwY29tcG9zdCUyMG9yZ2FuaWMlMjBtYXR0ZXIlMjBjbG9zZSUyMHVwJTIwdGV4dHVyZXxlbnwxfHx8fDE3ODA5MzU0MTZ8MA&ixlib=rb-4.1.0&q=80&w=600"
                alt="Compost Premium — enmienda orgánica"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ filter: 'grayscale(100%)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className={`text-xs font-mono px-2.5 py-1 rounded-full ${products[0].badgeStyle}`}>
                  {products[0].badge}
                </span>
              </div>
            </div>

            <div className="p-8">
              <div className="text-white/30 text-xs font-mono uppercase tracking-widest mb-1">{products[0].category}</div>
              <h3 className="text-white font-bold text-2xl mb-3">{products[0].name}</h3>
              <div className="bg-white/10 border border-white/10 rounded-sm px-4 py-3 mb-6">
                <div className="text-white/40 text-xs font-mono mb-0.5">Resultado documentado</div>
                <div className="text-white font-semibold text-sm">{products[0].result}</div>
              </div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-white font-bold text-xl">{products[0].stat}</div>
                  <div className="text-white/30 text-xs font-mono">{products[0].statLabel}</div>
                </div>
                <div className="flex gap-1 flex-wrap justify-end">
                  {products[0].uses.map((u) => (
                    <span key={u} className="bg-white/10 text-white/60 text-[10px] font-mono px-2 py-1 rounded-full">{u}</span>
                  ))}
                </div>
              </div>
              <Link to="/productos">
                <button className="w-full bg-white text-oliva py-3 rounded-full font-semibold hover:bg-paja/40 transition-colors">
                  Ver producto →
                </button>
              </Link>
            </div>
          </div>

          {/* Three regular cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
            {products.slice(1).map((p, idx) => {
              const thumbImgs = [
                "https://images.unsplash.com/photo-1458014854819-1a40aa70211c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxwbGFudCUyMHNlZWRsaW5nJTIwc3Byb3V0JTIwZ3Jvd3RoJTIwZ3JlZW58ZW58MXx8fHwxNzgwOTM1NDIwfDA&ixlib=rb-4.1.0&q=80&w=200",
                "https://images.unsplash.com/photo-1602928298849-325cec8771c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXF1aWQlMjBib3R0bGUlMjBjaGVtaWNhbCUyMGxhYm9yYXRvcnklMjBmbGFzayUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc4MDkzNTQyMXww&ixlib=rb-4.1.0&q=80&w=200",
                "https://images.unsplash.com/photo-1697047070930-12043019a0d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxzb2lsJTIwY29tcG9zdCUyMG9yZ2FuaWMlMjBtYXR0ZXIlMjBjbG9zZSUyMHVwJTIwdGV4dHVyZXxlbnwxfHx8fDE3ODA5MzU0MTZ8MA&ixlib=rb-4.1.0&q=80&w=200",
              ];
              return (
              <div key={p.name || idx} className="bg-white border border-gray-200 rounded-sm p-6 flex flex-col sm:flex-row lg:flex-row gap-6 hover:border-gray-400 transition-colors group">
                {/* Visual */}
                <div className="w-full sm:w-20 lg:w-24 h-20 rounded-sm flex-shrink-0 relative overflow-hidden">
                  <img
                    src={thumbImgs[idx]}
                    alt={p.name}
                    className="w-full h-full object-cover"
                    style={{ filter: 'grayscale(100%)' }}
                  />
                  <div className="absolute -top-2 -right-2">
                    <span className={`text-[9px] font-mono px-2 py-0.5 rounded-full ${p.badgeStyle}`}>
                      {p.badge}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 flex flex-col">
                  <div className="text-gray-400 text-[10px] font-mono uppercase tracking-widest mb-0.5">{p.category}</div>
                  <h3 className="text-oliva font-semibold mb-1">{p.name}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed flex-1 mb-3">{p.result}</p>
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <span className="text-oliva font-bold text-sm">{p.stat}</span>
                      <span className="text-gray-400 text-xs font-mono ml-1">{p.statLabel}</span>
                    </div>
                    <Link to="/productos">
                      <button className="text-gray-500 text-xs font-mono hover:text-oliva transition-colors">
                        Ver →
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              );
            })}

            {/* Browse all CTA */}
            <div className="bg-oliva border border-gray-800 rounded-sm p-6 flex items-center justify-between">
              <div>
                <div className="text-white font-semibold mb-0.5">Ver catálogo completo</div>
                <div className="text-white/30 text-xs font-mono">+20 productos disponibles</div>
              </div>
              <Link to="/productos">
                <button className="border border-white/20 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-white/10 transition-colors">
                  Ir a productos
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
