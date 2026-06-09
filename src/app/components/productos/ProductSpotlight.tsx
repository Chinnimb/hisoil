import { useState } from "react";

const specs = [
  { label: "Composición", value: "[N-P-K / ingrediente activo]" },
  { label: "Concentración", value: "[% o g/L — placeholder]" },
  { label: "Formulación", value: "[Líquida / Sólida / Granulada]" },
  { label: "Dosis recomendada", value: "[X L/ha o kg/ha según cultivo]" },
  { label: "Momento de aplicación", value: "[V3-V6 / Pre-siembra / Post-emergencia]" },
  { label: "Compatibilidad", value: "[Compatible con fungicidas e insecticidas]" },
  { label: "Registro SENASA", value: "[Nº de registro vigente]" },
  { label: "Envase disponible", value: "[1L · 5L · 20L · 200L]" },
];

const benefits = [
  "Aumento de rendimiento hasta 20% en condiciones óptimas",
  "Activación de microbiota del suelo en las primeras 72hs",
  "Compatible con manejo orgánico y convencional",
  "Reducción de costos de fertilización nitrogenada",
];

export function ProductSpotlight() {
  const [activeImg, setActiveImg] = useState(0);
  const [activeTab, setActiveTab] = useState<"specs" | "benefits">("specs");

  return (
    <section className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section tag */}
        <div className="inline-block border border-gray-300 px-3 py-1 mb-12">
          <span className="text-gray-500 text-xs font-mono uppercase tracking-widest">07 — Ficha de producto destacado</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left — gallery */}
          <div className="lg:col-span-5">
            {/* Main image */}
            {(() => {
              const imgs = [
                "https://images.unsplash.com/photo-1613036582025-ba1d4ccb3226?w=600&q=80&fit=crop",
                "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80&fit=crop",
                "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80&fit=crop",
                "https://images.unsplash.com/photo-1492496913980-501348b61469?w=600&q=80&fit=crop",
              ];
              return (
                <>
                  <div className="aspect-square rounded-sm overflow-hidden mb-4 relative border border-gray-200">
                    <img
                      src={imgs[activeImg]}
                      alt={`Vista ${activeImg + 1}`}
                      className="w-full h-full object-cover grayscale"
                    />
                    <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                      <span className="bg-gray-900 text-white text-xs px-2.5 py-1 rounded-full font-mono">⭐ Destacado</span>
                      <span className="bg-white border border-gray-200 text-gray-500 text-xs px-2.5 py-1 rounded-full font-mono">Fertilizante</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {imgs.map((src, n) => (
                      <button
                        key={n}
                        onClick={() => setActiveImg(n)}
                        className={`flex-1 aspect-square rounded-sm border-2 overflow-hidden transition-colors ${
                          activeImg === n ? "border-gray-700" : "border-gray-200 hover:border-gray-400"
                        }`}
                      >
                        <img src={src} alt={`Vista ${n + 1}`} className="w-full h-full object-cover grayscale" />
                      </button>
                    ))}
                  </div>
                </>
              );
            })()}
          </div>

          {/* Right — info */}
          <div className="lg:col-span-7">
            {/* Tags */}
            <div className="flex items-center gap-2 flex-wrap mb-5">
              <span className="bg-gray-900 text-white text-xs font-mono px-3 py-1.5 rounded-full">Fertilizante</span>
              <span className="bg-gray-100 text-gray-500 text-xs font-mono px-3 py-1.5 rounded-full">Soja · Maíz · Trigo</span>
              <span className="bg-gray-100 text-gray-500 text-xs font-mono px-3 py-1.5 rounded-full">Registro SENASA ✓</span>
            </div>

            <h2 className="text-gray-900 mb-1">[Nombre Completo del Producto Destacado]</h2>
            <p className="text-gray-400 font-mono text-sm mb-6">SKU: HIS-[XXX-000] · Última actualización: Jun 2026</p>

            <p className="text-gray-600 leading-relaxed mb-8 text-base">
              [Descripción técnica del producto — qué es, para qué sirve, en qué cultivos aplica
              y cuál es su mecanismo de acción. Redacción enfocada en el problema que resuelve y el
              valor que aporta al productor.]
            </p>

            {/* Tabs — specs / benefits */}
            <div className="border border-gray-200 rounded-sm overflow-hidden mb-8">
              {/* Tab header */}
              <div className="flex border-b border-gray-200">
                {(["specs", "benefits"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-3 text-sm font-medium transition-colors ${
                      activeTab === tab
                        ? "bg-gray-900 text-white"
                        : "bg-white text-gray-500 hover:bg-gray-50"
                    }`}
                  >
                    {tab === "specs" ? "Especificaciones técnicas" : "Beneficios"}
                  </button>
                ))}
              </div>

              {/* Tab content */}
              <div className="bg-white">
                {activeTab === "specs" ? (
                  <div>
                    {specs.map((spec, i) => (
                      <div
                        key={spec.label}
                        className={`grid grid-cols-2 px-5 py-3 text-sm ${i % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                      >
                        <span className="text-gray-600 font-medium">{spec.label}</span>
                        <span className="text-gray-400 font-mono">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-6 space-y-3">
                    {benefits.map((b) => (
                      <div key={b} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 bg-gray-400 rounded-full" />
                        </div>
                        <span className="text-gray-600 text-sm leading-relaxed">{b}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Download + CTA */}
            <div className="flex flex-wrap gap-3">
              <button className="border border-gray-300 text-gray-600 px-5 py-3 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors flex items-center gap-2">
                <span className="text-gray-400">↓</span> Ficha técnica (PDF)
              </button>
              <button className="border border-gray-300 text-gray-600 px-5 py-3 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors flex items-center gap-2">
                <span className="text-gray-400">↓</span> Brochure (PDF)
              </button>
              <button className="bg-gray-900 text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors ml-auto">
                Solicitar presupuesto
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
