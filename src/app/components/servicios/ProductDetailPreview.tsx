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
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="inline-block border border-gray-300 px-3 py-1 mb-10">
          <span className="text-gray-500 text-xs font-mono uppercase tracking-widest">08 — Producto destacado</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Product image */}
          <div className="lg:col-span-4">
            <div className="aspect-square bg-gray-200 rounded-sm flex items-center justify-center mb-4">
              <div className="text-center px-8">
                <div className="w-20 h-20 border-2 border-dashed border-gray-400 rounded-sm mx-auto mb-3 flex items-center justify-center">
                  <span className="text-gray-400 text-3xl">📦</span>
                </div>
                <p className="text-gray-400 text-xs font-mono uppercase tracking-widest">Imagen del producto</p>
                <p className="text-gray-300 text-xs font-mono mt-1">500 × 500px</p>
              </div>
            </div>
            {/* Thumbnail strip */}
            <div className="flex gap-2">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className={`flex-1 aspect-square bg-gray-200 rounded-sm border-2 flex items-center justify-center ${n === 1 ? "border-gray-500" : "border-gray-200"}`}>
                  <span className="text-gray-300 text-xs font-mono">{n}</span>
                </div>
              ))}
            </div>
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
