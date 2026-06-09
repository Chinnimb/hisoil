const specs = [
  { label: "Composición", value: "[N-P-K / ingredientes activos]" },
  { label: "Concentración", value: "[% o g/L — placeholder]" },
  { label: "Formulación", value: "[Líquida / Sólida / Granulada]" },
  { label: "Dosis recomendada", value: "[X L/ha o kg/ha según cultivo]" },
  { label: "Compatibilidad", value: "[Mezcla con otros insumos]" },
  { label: "Registro SENASA", value: "[Nº de registro — placeholder]" },
];

export function ProductDetailPreview() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 bg-gray-50">
      <div className="max-w-[1600px] mx-auto w-full">
        <div className="inline-block border border-gray-300 px-3 py-1 mb-10">
          <span className="text-gray-500 text-xs font-mono uppercase tracking-widest">08 — Producto destacado</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Product image */}
          <div className="lg:col-span-4">
            {(() => {
              const imgs = [
                "https://images.unsplash.com/photo-1613036582025-ba1d4ccb3226?w=500&q=80&fit=crop",
                "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&q=80&fit=crop",
                "https://images.unsplash.com/photo-1458014854819-1a40aa70211c?w=500&q=80&fit=crop",
                "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=500&q=80&fit=crop",
              ];
              return (
                <>
                  <div className="aspect-square rounded-sm overflow-hidden mb-4 border border-gray-200">
                    <img src={imgs[0]} alt="Producto destacado" className="w-full h-full object-cover grayscale" />
                  </div>
                  <div className="flex gap-2">
                    {imgs.map((src, i) => (
                      <div key={i} className={`flex-1 aspect-square rounded-sm overflow-hidden border-2 ${i === 0 ? "border-gray-500" : "border-gray-200"}`}>
                        <img src={src} alt={`Vista ${i + 1}`} className="w-full h-full object-cover grayscale" />
                      </div>
                    ))}
                  </div>
                </>
              );
            })()}
          </div>

          {/* Product info */}
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-gray-900 text-white text-xs font-mono px-3 py-1 rounded-full">Fertilizante</span>
              <span className="bg-gray-100 text-gray-500 text-xs font-mono px-3 py-1 rounded-full">Soja · Maíz · Trigo</span>
            </div>

            <h2 className="text-gray-900 mb-2">[Nombre del Producto Destacado]</h2>
            <p className="text-gray-400 font-mono text-sm mb-6">SKU: HIS-[XXX-000] · Registro SENASA: [Nº]</p>

            <p className="text-gray-500 leading-relaxed mb-8">
              [Descripción técnica del producto — qué es, para qué sirve, en qué cultivos aplica y
              cuál es su mecanismo de acción principal. Destacar diferenciación respecto a productos convencionales.]
            </p>

            {/* Specs table */}
            <div className="mb-8">
              <h4 className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-4">Especificaciones técnicas</h4>
              <div className="border border-gray-200 rounded-sm overflow-hidden">
                {specs.map((spec, i) => (
                  <div
                    key={spec.label}
                    className={`grid grid-cols-2 px-5 py-3 text-sm ${i % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                  >
                    <span className="text-gray-500 font-medium">{spec.label}</span>
                    <span className="text-gray-400 font-mono">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Download + CTA row */}
            <div className="flex flex-wrap gap-3">
              <button className="border border-gray-300 text-gray-600 px-5 py-3 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors flex items-center gap-2">
                <span>↓</span> Ficha técnica (PDF)
              </button>
              <button className="border border-gray-300 text-gray-600 px-5 py-3 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors flex items-center gap-2">
                <span>↓</span> Brochure (PDF)
              </button>
              <button className="bg-gray-900 text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors ml-auto">
                Solicitar Presupuesto
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
