import { useState } from "react";

const tabs = ["Más vendidos", "Nuevos ingresos", "Recomendados"];

const productsByTab: Record<string, { name: string; category: string; description: string; specs: string[] }[]> = {
  "Más vendidos": [
    { name: "[Producto bestseller 01]", category: "Fertilizante", description: "[Descripción breve del producto y principal beneficio para el cultivo.]", specs: ["NPK 20-10-10", "20L", "Soja/Maíz"] },
    { name: "[Producto bestseller 02]", category: "Bioestimulante", description: "[Descripción breve del producto y principal beneficio para el cultivo.]", specs: ["Aminoácidos", "1L", "Universal"] },
    { name: "[Producto bestseller 03]", category: "Compost", description: "[Descripción breve del producto y principal beneficio para el cultivo.]", specs: ["MO > 40%", "25kg", "Universal"] },
    { name: "[Producto bestseller 04]", category: "Enmienda", description: "[Descripción breve del producto y principal beneficio para el cultivo.]", specs: ["CaCO₃ 85%", "1000kg", "Trigo/Soja"] },
    { name: "[Producto bestseller 05]", category: "Nutrición", description: "[Descripción breve del producto y principal beneficio para el cultivo.]", specs: ["Fe, Zn, Mn", "5L", "Multicultura"] },
    { name: "[Producto bestseller 06]", category: "Bioestimulante", description: "[Descripción breve del producto y principal beneficio para el cultivo.]", specs: ["Bacillus sp.", "500ml", "Horticultura"] },
  ],
  "Nuevos ingresos": [
    { name: "[Nuevo producto 01]", category: "Tratamiento", description: "[Descripción breve del producto nuevo y principal beneficio para el cultivo.]", specs: ["Inoculante", "250ml", "Soja"] },
    { name: "[Nuevo producto 02]", category: "Fertilizante", description: "[Descripción breve del producto nuevo y principal beneficio para el cultivo.]", specs: ["Foliar", "10L", "Maíz/Trigo"] },
    { name: "[Nuevo producto 03]", category: "Compost", description: "[Descripción breve del producto nuevo y principal beneficio para el cultivo.]", specs: ["MO > 50%", "500kg", "Universal"] },
    { name: "[Nuevo producto 04]", category: "Bioestimulante", description: "[Descripción breve del producto nuevo y principal beneficio para el cultivo.]", specs: ["Ácido Fúlvico", "1L", "Frutales"] },
    { name: "[Nuevo producto 05]", category: "Enmienda", description: "[Descripción breve del producto nuevo y principal beneficio para el cultivo.]", specs: ["Yeso Agrícola", "750kg", "Universal"] },
    { name: "[Nuevo producto 06]", category: "Nutrición", description: "[Descripción breve del producto nuevo y principal beneficio para el cultivo.]", specs: ["Micropack", "2L", "Horticultura"] },
  ],
  "Recomendados": [
    { name: "[Recomendado 01]", category: "Bioestimulante", description: "[Descripción del producto recomendado por equipo técnico de Hisoil para la campaña actual.]", specs: ["Rizobio", "200ml", "Soja"] },
    { name: "[Recomendado 02]", category: "Fertilizante", description: "[Descripción del producto recomendado por equipo técnico de Hisoil para la campaña actual.]", specs: ["Azufre", "25kg", "Oleaginosas"] },
    { name: "[Recomendado 03]", category: "Compost", description: "[Descripción del producto recomendado por equipo técnico de Hisoil para la campaña actual.]", specs: ["Humus", "40kg", "Universal"] },
    { name: "[Recomendado 04]", category: "Tratamiento", description: "[Descripción del producto recomendado por equipo técnico de Hisoil para la campaña actual.]", specs: ["Trichoderma", "100g", "Horticultura"] },
    { name: "[Recomendado 05]", category: "Enmienda", description: "[Descripción del producto recomendado por equipo técnico de Hisoil para la campaña actual.]", specs: ["Cal Viva", "25kg", "Universal"] },
    { name: "[Recomendado 06]", category: "Nutrición", description: "[Descripción del producto recomendado por equipo técnico de Hisoil para la campaña actual.]", specs: ["Boro", "1L", "Frutales"] },
  ],
};

export function TabbedProducts() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const products = productsByTab[activeTab];

  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 bg-paja/30">
      <div className="max-w-[1600px] mx-auto w-full">
        {/* Header + tabs */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
          <div>
            <div className="inline-block border border-gray-300 px-3 py-1 mb-6">
              <span className="text-gray-500 text-xs font-mono uppercase tracking-widest">06 — Catálogo</span>
            </div>
            <h2 className="text-oliva">Explorá el catálogo completo</h2>
          </div>

          {/* Tab selector */}
          <div className="flex gap-1 bg-white border border-gray-200 p-1 rounded-full self-start md:self-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === tab
                    ? "bg-oliva text-white"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {products.map((p, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-sm overflow-hidden flex flex-col group hover:border-gray-400 hover:shadow-md transition-all cursor-pointer"
            >
              <div className="aspect-[4/3] border-b border-gray-200 relative overflow-hidden">
                <img
                  src={[
                    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=70&fit=crop",
                    "https://images.unsplash.com/photo-1458014854819-1a40aa70211c?w=400&q=70&fit=crop",
                    "https://images.unsplash.com/photo-1613036582025-ba1d4ccb3226?w=400&q=70&fit=crop",
                    "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=400&q=70&fit=crop",
                    "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&q=70&fit=crop",
                    "https://images.unsplash.com/photo-1492496913980-501348b61469?w=400&q=70&fit=crop",
                  ][i % 6]}
                  alt={p.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <span className="absolute top-3 right-3 bg-white border border-gray-200 text-gray-500 text-xs px-2.5 py-1 rounded-full font-mono">
                  {p.category}
                </span>
                {activeTab === "Nuevos ingresos" && (
                  <span className="absolute top-3 left-3 bg-oliva text-white text-xs px-2.5 py-1 rounded-full font-mono">
                    Nuevo
                  </span>
                )}
              </div>

              {/* Info */}
              <div className="p-6 flex flex-col flex-1">
                <h4 className="font-semibold text-oliva mb-2 text-sm">{p.name}</h4>
                <p className="text-gray-500 text-xs leading-relaxed flex-1 mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.specs.map((s) => (
                    <span key={s} className="bg-paja/40 text-gray-500 text-xs px-2.5 py-1 rounded-full font-mono">
                      {s}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 bg-oliva text-white py-2.5 rounded-full text-xs font-medium hover:bg-oliva transition-colors">
                    Solicitar presupuesto
                  </button>
                  <button className="border border-gray-200 text-gray-500 px-4 py-2.5 rounded-full text-xs hover:bg-paja/30 transition-colors">
                    Ver
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination / load more */}
        <div className="flex items-center justify-center gap-2">
          {[1, 2, 3, "…", 8].map((p, i) => (
            <button
              key={i}
              className={`w-9 h-9 rounded-full text-sm font-mono border transition-colors ${
                p === 1
                  ? "bg-oliva text-white border-gray-900"
                  : "border-gray-200 text-gray-400 hover:border-gray-400"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
