const combos = [
  {
    id: "huerta",
    name: "Combo Huerta",
    tagline: "Para producciones hortícolas intensivas",
    icon: "🥬",
    products: [
      "Bioestimulante Radicular Plus",
      "Fertilizante NPK Líquido",
      "Compost Premium A",
    ],
    benefits: [
      "Mayor densidad de frutos",
      "Reducción del ciclo productivo",
      "Menos dependencia de agroquímicos",
    ],
    saving: "Ahorro estimado 18% vs. compra individual",
    highlight: false,
  },
  {
    id: "recuperacion",
    name: "Combo Recuperación de Suelos",
    tagline: "Para suelos degradados o con baja productividad",
    icon: "🪱",
    products: [
      "Enmienda Calcárea",
      "Inoculante Microbiano",
      "Humus de Lombriz",
      "Activador Biológico",
    ],
    benefits: [
      "Restauración de pH y estructura",
      "Reactivación de microbiota benéfica",
      "Mejora de retención de agua",
    ],
    saving: "Ahorro estimado 22% vs. compra individual",
    highlight: true,
  },
  {
    id: "alto-rendimiento",
    name: "Combo Alto Rendimiento",
    tagline: "Para campañas de soja y maíz de alta exigencia",
    icon: "🌾",
    products: [
      "Fertilizante NPK Balance",
      "Zinc Quelado",
      "Azufre Granulado",
      "Bioestimulante Foliar",
    ],
    benefits: [
      "Aumento de rendimiento proyectado +20%",
      "Nutrición balanceada en etapas críticas",
      "Protocolo técnico incluido",
    ],
    saving: "Ahorro estimado 20% vs. compra individual",
    highlight: false,
  },
];

export function CombosSection() {
  return (
    <section className="py-24 md:py-32 px-6 bg-white">
      <div className="w-full">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <div className="inline-block border border-gray-300 px-3 py-1 mb-6">
            <span className="text-gray-500 text-xs font-mono uppercase tracking-widest">05 — Soluciones recomendadas</span>
          </div>
          <h2 className="text-gray-900 mb-4">Combos diseñados para resultados concretos</h2>
          <p className="text-gray-500 leading-relaxed">
            [Descripción — Paquetes de productos formulados y recomendados por nuestro equipo técnico para objetivos específicos. Incluyen protocolo de aplicación.]
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {combos.map((combo) => (
            <div
              key={combo.id}
              className={`rounded-sm overflow-hidden flex flex-col relative ${
                combo.highlight
                  ? "bg-gray-900 text-white border-2 border-gray-700 shadow-2xl scale-[1.02]"
                  : "bg-gray-50 border border-gray-200"
              }`}
            >
              {combo.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-gray-900 text-xs font-mono px-4 py-1.5 rounded-full border border-gray-300">
                  ⭐ Más recomendado
                </div>
              )}

              {/* Header area */}
              <div className={`px-8 pt-10 pb-6 border-b ${combo.highlight ? "border-white/10" : "border-gray-200"}`}>
                <div className={`w-14 h-14 rounded-sm flex items-center justify-center text-3xl mb-4 ${combo.highlight ? "bg-white/10" : "bg-white border border-gray-200"}`}>
                  {combo.icon}
                </div>
                <h3 className={`text-xl font-bold mb-2 ${combo.highlight ? "text-white" : "text-gray-900"}`}>
                  {combo.name}
                </h3>
                <p className={`text-sm ${combo.highlight ? "text-white/50" : "text-gray-500"}`}>
                  {combo.tagline}
                </p>
              </div>

              {/* Products included */}
              <div className={`px-8 py-6 border-b ${combo.highlight ? "border-white/10" : "border-gray-200"}`}>
                <div className={`text-xs font-mono uppercase tracking-widest mb-3 ${combo.highlight ? "text-white/30" : "text-gray-400"}`}>
                  Productos incluidos
                </div>
                <div className="space-y-2">
                  {combo.products.map((p) => (
                    <div key={p} className={`flex items-center gap-2 text-sm ${combo.highlight ? "text-white/70" : "text-gray-600"}`}>
                      <div className={`w-5 h-5 rounded-sm border flex items-center justify-center flex-shrink-0 ${combo.highlight ? "border-white/20 bg-white/5" : "border-gray-200 bg-white"}`}>
                        <span className={`text-[10px] ${combo.highlight ? "text-white/30" : "text-gray-300"}`}>▪</span>
                      </div>
                      {p}
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className={`px-8 py-6 flex-1 border-b ${combo.highlight ? "border-white/10" : "border-gray-200"}`}>
                <div className={`text-xs font-mono uppercase tracking-widest mb-3 ${combo.highlight ? "text-white/30" : "text-gray-400"}`}>
                  Beneficios
                </div>
                <ul className="space-y-2">
                  {combo.benefits.map((b) => (
                    <li key={b} className={`flex items-start gap-2 text-sm ${combo.highlight ? "text-white/70" : "text-gray-600"}`}>
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center mt-0.5 flex-shrink-0 ${combo.highlight ? "border-white/20" : "border-gray-300"}`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${combo.highlight ? "bg-white/40" : "bg-gray-400"}`} />
                      </div>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Saving + CTA */}
              <div className="px-8 py-6">
                <div className={`text-xs font-mono mb-4 ${combo.highlight ? "text-white/40" : "text-gray-400"}`}>
                  {combo.saving}
                </div>
                <button className={`w-full py-3.5 rounded-full font-semibold text-sm transition-colors ${
                  combo.highlight
                    ? "bg-white text-gray-900 hover:bg-gray-100"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                }`}>
                  Solicitar presupuesto
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom combo CTA */}
        <div className="mt-10 border border-dashed border-gray-300 rounded-sm p-8 text-center">
          <p className="text-gray-500 mb-2 font-medium">¿Necesitás un combo personalizado para tu operación?</p>
          <p className="text-gray-400 text-sm mb-5">[Texto — Nuestro equipo técnico diseña paquetes a medida según tu cultivo, superficie y objetivos.]</p>
          <button className="border border-gray-400 text-gray-600 px-7 py-3 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors">
            Hablar con un asesor →
          </button>
        </div>
      </div>
    </section>
  );
}
