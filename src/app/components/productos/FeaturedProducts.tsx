const featured = [
  {
    id: 1,
    name: "[Nombre del producto 01]",
    category: "Fertilizante",
    benefit: "Alta disponibilidad de nitrógeno para etapas críticas del cultivo",
    specs: ["NPK 20-10-10", "Líquido · 20L", "Soja / Maíz"],
    badge: "⭐ Más vendido",
    img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=700&q=80&fit=crop",
  },
  {
    id: 2,
    name: "[Nombre del producto 02]",
    category: "Bioestimulante",
    benefit: "Estimulación radicular en implantación y momentos de estrés hídrico",
    specs: ["Aminoácidos", "Líquido · 1L", "Universal"],
    badge: "🆕 Nuevo",
    img: "https://images.unsplash.com/photo-1458014854819-1a40aa70211c?w=700&q=80&fit=crop",
  },
  {
    id: 3,
    name: "[Nombre del producto 03]",
    category: "Compost",
    benefit: "Mejora sustancial de materia orgánica y actividad microbiológica del suelo",
    specs: ["MO > 40%", "Granulado · 25kg", "Universal"],
    badge: "✅ Certificado",
    img: "https://images.unsplash.com/photo-1613036582025-ba1d4ccb3226?w=700&q=80&fit=crop",
  },
  {
    id: 4,
    name: "[Nombre del producto 04]",
    category: "Enmienda",
    benefit: "Corrección de pH ácido y aporte de calcio biodisponible para cultivos extensivos",
    specs: ["CaCO₃ 85%", "Sólido · 1000kg", "Soja / Trigo"],
    badge: null,
    img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=700&q=80&fit=crop",
  },
  {
    id: 5,
    name: "[Nombre del producto 05]",
    category: "Nutrición vegetal",
    benefit: "Pack completo de microelementos quelatados para corrección de deficiencias",
    specs: ["Fe, Zn, Mn, Cu", "Líquido · 5L", "Multicultura"],
    badge: "🔥 Tendencia",
    img: "https://images.unsplash.com/photo-1492496913980-501348b61469?w=700&q=80&fit=crop",
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
              <span className="text-gray-500 text-xs font-mono uppercase tracking-widest">04 — Productos destacados</span>
            </div>
            <h2 className="text-oliva mb-3">Los productos que marcan la diferencia</h2>
            <p className="text-gray-500 leading-relaxed max-w-lg">
              Selección técnica de los productos con mayor impacto en rendimiento y salud de suelo por campaña.
            </p>
          </div>
          <button className="self-start md:self-auto border border-gray-300 text-gray-500 px-5 py-2.5 rounded-full text-sm font-mono hover:bg-paja/40 transition-colors whitespace-nowrap">
            Ver todo →
          </button>
        </div>

        {/* Fila 1 — 2 cards grandes iguales */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          {featured.slice(0, 2).map((p) => (
            <div
              key={p.id}
              className="card-gradient-border overflow-hidden group hover:border-gray-400 hover:shadow-lg transition-all cursor-pointer flex flex-col"
            >
              {/* Imagen grande */}
              <div className="aspect-[16/9] relative overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                {p.badge && (
                  <div className="absolute top-4 left-4 bg-oliva text-white px-3 py-1 rounded-full text-xs font-mono">
                    {p.badge}
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-white/90 border border-gray-200 px-2.5 py-1 rounded-full text-xs font-mono text-gray-600">
                  {p.category}
                </div>
              </div>
              {/* Contenido */}
              <div className="p-7 flex flex-col flex-1">
                <h3 className="text-oliva text-lg font-semibold mb-2">{p.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">{p.benefit}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.specs.map((s) => (
                    <span key={s} className="bg-paja/40 text-gray-600 text-xs px-3 py-1.5 rounded-full font-mono">{s}</span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button className="bg-oliva text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-oliva transition-colors flex-1">
                    Solicitar presupuesto
                  </button>
                  <button className="border border-gray-300 text-gray-600 px-5 py-2.5 rounded-full text-sm hover:bg-paja/30 transition-colors">
                    Ver
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fila 2 — 3 cards iguales más chicas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featured.slice(2).map((p) => (
            <div
              key={p.id}
              className="card-gradient-border overflow-hidden group hover:border-gray-400 hover:shadow-md transition-all cursor-pointer flex flex-col"
            >
              {/* Imagen */}
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                {p.badge && (
                  <div className="absolute top-3 left-3 bg-oliva text-white px-2.5 py-1 rounded-full text-xs font-mono">
                    {p.badge}
                  </div>
                )}
                <div className="absolute top-3 right-3 bg-white/90 border border-gray-200 px-2 py-1 rounded-full text-xs font-mono text-gray-600">
                  {p.category}
                </div>
              </div>
              {/* Contenido */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-oliva font-semibold mb-2 text-sm">{p.name}</h3>
                <p className="text-gray-500 text-xs leading-relaxed flex-1 mb-4">{p.benefit}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.specs.map((s) => (
                    <span key={s} className="bg-paja/40 text-gray-500 text-xs px-2.5 py-1 rounded-full font-mono">{s}</span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <button className="bg-oliva text-white px-4 py-2 rounded-full text-xs font-medium hover:bg-oliva transition-colors flex-1">
                    Solicitar presupuesto
                  </button>
                  <button className="border border-gray-200 text-gray-500 px-4 py-2 rounded-full text-xs hover:bg-paja/30 transition-colors">
                    Ver
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
