const products = [
  {
    name: "[Producto 01 — Nombre técnico]",
    category: "Tratamiento biológico",
    benefit: "Degradación acelerada de carga orgánica en efluentes industriales mediante consorcio microbiano especializado.",
    specs: ["Consorcio bacteriano", "Líquido · 20L", "Efluentes industriales"],
  },
  {
    name: "[Producto 02 — Nombre técnico]",
    category: "Coagulante",
    benefit: "Floculación y remoción de sólidos suspendidos en etapa de pre-tratamiento físico-químico.",
    specs: ["Polímero catiónico", "25kg", "Tratamiento primario"],
  },
  {
    name: "[Producto 03 — Nombre técnico]",
    category: "Corrector de pH",
    benefit: "Estabilización del pH de efluentes antes del ingreso al sistema de tratamiento biológico.",
    specs: ["Cal hidratada", "25kg", "pH 6.5–8.5"],
  },
];

export function CaseProducts() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="inline-block border border-gray-300 px-3 py-1 mb-6">
              <span className="text-gray-400 text-xs font-mono uppercase tracking-widest">06 — Productos utilizados en este caso</span>
            </div>
            <h2 className="text-gray-900 mb-2">Productos aplicados en el proyecto</h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-lg">
              [Texto — Portafolio de productos específicos utilizados en este proyecto, seleccionados y formulados para los requerimientos del cliente.]
            </p>
          </div>
          <button className="self-start md:self-auto border border-gray-300 text-gray-500 px-5 py-2.5 rounded-full text-sm font-mono hover:bg-gray-100 transition-colors whitespace-nowrap">
            Ver catálogo completo →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-sm overflow-hidden flex flex-col group hover:border-gray-400 hover:shadow-md transition-all"
            >
              {/* Image */}
              <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center border-b border-gray-200 relative">
                <div className="text-center">
                  <div className="w-12 h-14 border border-dashed border-gray-300 rounded-sm mx-auto mb-1 flex items-center justify-center">
                    <span className="text-gray-300 text-xl">📦</span>
                  </div>
                  <p className="text-gray-300 text-[10px] font-mono">Imagen producto {String(i + 1).padStart(2, "0")}</p>
                </div>
                <span className="absolute top-3 right-3 bg-white border border-gray-200 text-gray-500 text-xs px-2.5 py-1 rounded-full font-mono">
                  {p.category}
                </span>
              </div>

              <div className="p-7 flex flex-col flex-1">
                <h3 className="font-semibold text-gray-900 text-sm mb-3">{p.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">{p.benefit}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.specs.map((s) => (
                    <span key={s} className="bg-gray-100 text-gray-500 text-xs px-2.5 py-1 rounded-full font-mono">{s}</span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 bg-gray-900 text-white py-2.5 rounded-full text-xs font-medium hover:bg-gray-800 transition-colors">
                    Solicitar presupuesto
                  </button>
                  <button className="border border-gray-200 text-gray-500 px-4 py-2.5 rounded-full text-xs hover:bg-gray-50 transition-colors">
                    Ver producto
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
