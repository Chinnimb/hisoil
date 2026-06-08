import { useState } from "react";

const needs = [
  {
    id: "crecimiento",
    label: "Mejorar crecimiento",
    icon: "🌱",
    description: "Estimular el desarrollo vegetativo, raíces y biomasa foliar desde las primeras etapas del cultivo.",
    products: ["Bioestimulante Radicular Plus", "Aminoácidos Concentrados", "Activador Foliar Pro"],
    productCount: 8,
  },
  {
    id: "rendimiento",
    label: "Aumentar rendimiento",
    icon: "📈",
    description: "Maximizar llenado de grano, cantidad de frutos y toneladas por hectárea en cereales y oleaginosas.",
    products: ["Fertilizante NPK Balance", "Potasio Activado", "Zinc Quelado"],
    productCount: 12,
  },
  {
    id: "suelo",
    label: "Mejorar suelo",
    icon: "🪱",
    description: "Recuperar estructura, aumentar actividad biológica y mejorar capacidad de retención hídrica del suelo.",
    products: ["Compost Premium A", "Inoculante Microbiano", "Humus de Lombriz"],
    productCount: 9,
  },
  {
    id: "nutrientes",
    label: "Recuperar nutrientes",
    icon: "🔄",
    description: "Reponer macronutrientes y microelementos perdidos por extracción del cultivo o lixiviación del suelo.",
    products: ["Enmienda Calcárea", "Azufre Granulado", "Microelemento Mix"],
    productCount: 7,
  },
  {
    id: "compostaje",
    label: "Compostaje",
    icon: "♻️",
    description: "Transformar residuos orgánicos propios en enmienda de calidad para reducir costos y cerrar el ciclo.",
    products: ["Acelerador Compost", "Inoculante Compostador", "Correctivo pH Orgánico"],
    productCount: 5,
  },
  {
    id: "sustentable",
    label: "Agricultura sustentable",
    icon: "🌍",
    description: "Reducir la dependencia de agroquímicos convencionales con soluciones biológicas certificadas.",
    products: ["Biofungicida Bacillus", "Biofertilizante Rizobio", "Azospirillum Líquido"],
    productCount: 10,
  },
];

export function NeedSelector() {
  const [activeNeed, setActiveNeed] = useState("rendimiento");
  const active = needs.find((n) => n.id === activeNeed)!;

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <div className="inline-block border border-white/20 px-3 py-1 mb-6">
            <span className="text-white/40 text-xs font-mono uppercase tracking-widest">03 — Descubrí por necesidad</span>
          </div>
          <h2 className="text-white mb-4">¿Qué necesitás mejorar?</h2>
          <p className="text-white/40 leading-relaxed">
            [Descripción — Elegí el objetivo de tu campaña y te mostramos los productos más adecuados para cada situación.]
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left — need buttons */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {needs.map((need) => (
              <button
                key={need.id}
                onClick={() => setActiveNeed(need.id)}
                className={`flex items-center gap-4 p-5 rounded-sm border text-left transition-all ${
                  activeNeed === need.id
                    ? "bg-white text-gray-900 border-white"
                    : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:border-white/20"
                }`}
              >
                <div className={`w-10 h-10 rounded-sm flex items-center justify-center text-xl flex-shrink-0 ${
                  activeNeed === need.id ? "bg-gray-100" : "bg-white/5"
                }`}>
                  {need.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className={`font-medium text-sm ${activeNeed === need.id ? "text-gray-900" : "text-white/70"}`}>
                    {need.label}
                  </div>
                  <div className={`text-xs font-mono mt-0.5 ${activeNeed === need.id ? "text-gray-500" : "text-white/30"}`}>
                    {need.productCount} productos
                  </div>
                </div>
                {activeNeed === need.id && (
                  <span className="text-gray-400 text-sm flex-shrink-0">→</span>
                )}
              </button>
            ))}
          </div>

          {/* Right — active need detail */}
          <div className="lg:col-span-8">
            <div className="bg-white/5 border border-white/10 rounded-sm p-8 md:p-10 h-full flex flex-col">
              {/* Need header */}
              <div className="flex items-start gap-5 mb-8 pb-8 border-b border-white/10">
                <div className="w-16 h-16 bg-white/10 rounded-sm flex items-center justify-center text-3xl flex-shrink-0">
                  {active.icon}
                </div>
                <div>
                  <h3 className="text-white text-2xl font-semibold mb-2">{active.label}</h3>
                  <p className="text-white/50 leading-relaxed">{active.description}</p>
                </div>
              </div>

              {/* Recommended products */}
              <div className="flex-1">
                <div className="text-xs font-mono text-white/30 uppercase tracking-widest mb-4">
                  Productos recomendados — {active.productCount} resultados
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  {active.products.map((p, i) => (
                    <div
                      key={p}
                      className="bg-white/5 border border-white/10 rounded-sm p-5 hover:border-white/30 transition-colors cursor-pointer group"
                    >
                      <div className="aspect-square bg-white/5 rounded-sm flex items-center justify-center mb-4 border border-white/10">
                        <div className="text-center">
                          <div className="w-8 h-9 border border-dashed border-white/15 rounded-sm mx-auto mb-1 flex items-center justify-center">
                            <span className="text-white/15 text-[9px] font-mono">{String(i + 1).padStart(2, "0")}</span>
                          </div>
                          <span className="text-white/15 text-[9px] font-mono">Producto</span>
                        </div>
                      </div>
                      <div className="text-white/70 text-sm font-medium leading-tight mb-2 group-hover:text-white transition-colors">{p}</div>
                      <div className="text-white/25 text-xs font-mono">Ver detalle →</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="bg-white text-gray-900 px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors">
                  Ver los {active.productCount} productos
                </button>
                <button className="border border-white/20 text-white/60 px-7 py-3.5 rounded-full text-sm hover:bg-white/10 transition-colors">
                  Solicitar asesoramiento
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
