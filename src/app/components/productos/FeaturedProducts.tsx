const featured = [
  {
    id: 1,
    name: "[Nombre del producto 01]",
    category: "Fertilizante",
    benefit: "Alta disponibilidad de nitrógeno para etapas críticas del cultivo",
    specs: ["NPK 20-10-10", "Líquido · 20L", "Soja / Maíz"],
    badge: "⭐ Más vendido",
    badgeStyle: "bg-gray-900 text-white",
    size: "large",
  },
  {
    id: 2,
    name: "[Nombre del producto 02]",
    category: "Bioestimulante",
    benefit: "Estimulación radicular en implantación y momentos de estrés hídrico",
    specs: ["Aminoácidos", "Líquido · 1L", "Universal"],
    badge: "🆕 Nuevo",
    badgeStyle: "bg-white text-gray-900 border border-gray-200",
    size: "medium",
  },
  {
    id: 3,
    name: "[Nombre del producto 03]",
    category: "Compost",
    benefit: "Mejora sustancial de materia orgánica y actividad microbiológica del suelo",
    specs: ["MO > 40%", "Granulado · 25kg", "Universal"],
    badge: "✅ Certificado",
    badgeStyle: "bg-white text-gray-900 border border-gray-200",
    size: "medium",
  },
  {
    id: 4,
    name: "[Nombre del producto 04]",
    category: "Enmienda",
    benefit: "Corrección de pH ácido y aporte de calcio biodisponible para cultivos extensivos",
    specs: ["CaCO₃ 85%", "Sólido · 1000kg", "Soja / Trigo"],
    badge: null,
    badgeStyle: "",
    size: "small",
  },
  {
    id: 5,
    name: "[Nombre del producto 05]",
    category: "Nutrición vegetal",
    benefit: "Pack completo de microelementos quelatados para corrección de deficiencias",
    specs: ["Fe, Zn, Mn, Cu", "Líquido · 5L", "Multicultura"],
    badge: "🔥 Tendencia",
    badgeStyle: "bg-gray-900 text-white",
    size: "small",
  },
];

export function FeaturedProducts() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="inline-block border border-gray-300 px-3 py-1 mb-6">
              <span className="text-gray-500 text-xs font-mono uppercase tracking-widest">04 — Productos destacados</span>
            </div>
            <h2 className="text-gray-900 mb-3">Los productos que marcan la diferencia</h2>
            <p className="text-gray-500 leading-relaxed max-w-lg">
              [Descripción — Selección técnica de los productos con mayor impacto en rendimiento y salud de suelo por campaña.]
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <button className="border border-gray-300 text-gray-500 px-5 py-2.5 rounded-full text-sm font-mono hover:bg-gray-100 transition-colors">
              Ver todo →
            </button>
          </div>
        </div>

        {/* Bento-style product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Large card — col span 2 on lg */}
          <div className="lg:col-span-2 bg-white border border-gray-200 rounded-sm overflow-hidden group hover:border-gray-400 hover:shadow-lg transition-all cursor-pointer">
            <div className="grid grid-cols-1 md:grid-cols-2 h-full">
              {/* Image */}
              <div className="aspect-square md:aspect-auto relative min-h-[220px] border-b md:border-b-0 md:border-r border-gray-200 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1613036582025-ba1d4ccb3226?w=500&q=75&fit=crop"
                  alt={products[0].name}
                  className="absolute inset-0 w-full h-full object-cover grayscale"
                />
                <div className="absolute top-3 left-3 bg-gray-900 text-white px-2.5 py-1 rounded-full text-xs font-mono">
                  {featured[0].badge}
                </div>
                <div className="absolute top-3 right-3 bg-white border border-gray-200 px-2.5 py-1 rounded-full text-xs font-mono text-gray-500">
                  {featured[0].category}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col">
                <h3 className="text-gray-900 text-xl font-semibold mb-3">{featured[0].name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-6">{featured[0].benefit}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featured[0].specs.map((s) => (
                    <span key={s} className="bg-gray-100 text-gray-600 text-xs px-3 py-1.5 rounded-full font-mono">{s}</span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button className="bg-gray-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                    Solicitar presupuesto
                  </button>
                  <button className="border border-gray-300 text-gray-600 px-5 py-2.5 rounded-full text-sm hover:bg-gray-50 transition-colors">
                    Ver producto
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Medium cards */}
          {featured.slice(1, 3).map((p) => (
            <div key={p.id} className="bg-white border border-gray-200 rounded-sm overflow-hidden group hover:border-gray-400 hover:shadow-lg transition-all cursor-pointer flex flex-col">
              <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center relative border-b border-gray-200">
                <div className="text-center">
                  <div className="w-12 h-14 border-2 border-dashed border-gray-300 rounded-sm mx-auto mb-1 flex items-center justify-center">
                    <span className="text-gray-300 text-xl">📦</span>
                  </div>
                  <p className="text-gray-300 text-[10px] font-mono">Imagen {String(p.id).padStart(2, "0")}</p>
                </div>
                {p.badge && (
                  <div className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-mono ${p.badgeStyle}`}>
                    {p.badge}
                  </div>
                )}
                <div className="absolute top-3 right-3 bg-white border border-gray-200 px-2 py-1 rounded-full text-xs font-mono text-gray-400">
                  {p.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-gray-900 font-semibold mb-2 text-base">{p.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">{p.benefit}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.specs.map((s) => (
                    <span key={s} className="bg-gray-100 text-gray-500 text-xs px-2.5 py-1 rounded-full font-mono">{s}</span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <button className="bg-gray-900 text-white px-4 py-2 rounded-full text-xs font-medium hover:bg-gray-800 transition-colors flex-1">
                    Solicitar presupuesto
                  </button>
                  <button className="border border-gray-200 text-gray-500 px-4 py-2 rounded-full text-xs hover:bg-gray-50 transition-colors">
                    Ver
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Small cards */}
          {featured.slice(3).map((p) => (
            <div key={p.id} className="bg-white border border-gray-200 rounded-sm overflow-hidden group hover:border-gray-400 hover:shadow-md transition-all cursor-pointer flex flex-row">
              <div className="w-32 bg-gray-100 flex items-center justify-center flex-shrink-0 relative">
                <div className="text-center p-3">
                  <div className="w-10 h-12 border border-dashed border-gray-300 rounded-sm mx-auto mb-1 flex items-center justify-center">
                    <span className="text-gray-300 text-base">📦</span>
                  </div>
                  <p className="text-gray-300 text-[9px] font-mono">IMG</p>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-gray-900 font-semibold text-sm leading-tight">{p.name}</h3>
                  {p.badge && (
                    <span className={`text-xs px-2 py-0.5 rounded-full font-mono flex-shrink-0 ${p.badgeStyle}`}>
                      {p.badge}
                    </span>
                  )}
                </div>
                <p className="text-gray-500 text-xs leading-relaxed flex-1 mb-3">{p.benefit}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {p.specs.map((s) => (
                    <span key={s} className="bg-gray-100 text-gray-400 text-[10px] px-2 py-0.5 rounded-full font-mono">{s}</span>
                  ))}
                </div>
                <button className="self-start bg-gray-900 text-white px-4 py-1.5 rounded-full text-xs font-medium hover:bg-gray-800 transition-colors">
                  Solicitar presupuesto
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
