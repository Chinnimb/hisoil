import { useState } from "react";

const features = [
  { label: "Descuento en productos", starter: "5%", profesional: "12%", premium: "20%" },
  { label: "Envíos recurrentes programados", starter: "Mensual", profesional: "Quincenal", premium: "Semanal" },
  { label: "Asesoramiento técnico", starter: "Básico", profesional: "Prioritario", premium: "Dedicado" },
  { label: "Tiempo de respuesta", starter: "48 hs", profesional: "8 hs", premium: "2 hs" },
  { label: "Fichas técnicas y recursos", starter: "✓", profesional: "✓", premium: "✓" },
  { label: "Alertas de campaña personalizadas", starter: "—", profesional: "✓", premium: "✓" },
  { label: "Informe técnico mensual", starter: "—", profesional: "✓", premium: "✓" },
  { label: "Acceso anticipado a nuevos productos", starter: "—", profesional: "—", premium: "✓" },
  { label: "Visita técnica a campo", starter: "—", profesional: "1 por año", premium: "Trimestral" },
  { label: "Canal exclusivo WhatsApp/Teams", starter: "—", profesional: "—", premium: "✓" },
  { label: "Capacitación anual", starter: "—", profesional: "Online", premium: "Presencial + online" },
];

const plans = [
  {
    id: "starter",
    name: "Starter",
    price: "$X.XXX",
    cycle: "/ mes",
    desc: "[Para productores que empiezan a planificar sus insumos de forma recurrente.]",
    cta: "Elegir Starter",
    highlight: false,
    badge: null,
  },
  {
    id: "profesional",
    name: "Profesional",
    price: "$X.XXX",
    cycle: "/ mes",
    desc: "[Para operaciones medianas que requieren asesoramiento técnico continuo y envíos programados.]",
    cta: "Elegir Profesional",
    highlight: true,
    badge: "Más elegido",
  },
  {
    id: "premium",
    name: "Premium",
    price: "$X.XXX",
    cycle: "/ mes",
    desc: "[Para empresas y grandes productores que necesitan atención dedicada y máxima flexibilidad.]",
    cta: "Elegir Premium",
    highlight: false,
    badge: null,
  },
];

export function PlanesMembresia() {
  const [billing, setBilling] = useState<"mensual" | "anual">("mensual");

  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 md:px-8 bg-gray-50">
      <div className="max-w-[1600px] mx-auto w-full">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-block border border-gray-300 px-3 py-1 mb-6">
            <span className="text-gray-400 text-xs font-mono uppercase tracking-widest">05 — Planes</span>
          </div>
          <h2 className="text-gray-900 mb-4">Elegí el plan que se adapta a tu operación.</h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            [Subtítulo — Tres niveles de membresía diseñados para cubrir distintos tamaños y necesidades de operación, con la posibilidad de cambiar de plan en cualquier momento.]
          </p>

          {/* Billing toggle */}
          <div className="mt-8 inline-flex items-center gap-1 bg-white border border-gray-200 rounded-full p-1">
            <button
              onClick={() => setBilling("mensual")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${billing === "mensual" ? "bg-gray-900 text-white" : "text-gray-500 hover:text-gray-700"}`}
            >
              Mensual
            </button>
            <button
              onClick={() => setBilling("anual")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${billing === "anual" ? "bg-gray-900 text-white" : "text-gray-500 hover:text-gray-700"}`}
            >
              Anual
              <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${billing === "anual" ? "bg-white/20 text-white" : "bg-gray-100 text-gray-400"}`}>
                −15%
              </span>
            </button>
          </div>
        </div>

        {/* Plan cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {plans.map((p) => (
            <div
              key={p.id}
              className={`relative flex flex-col border rounded-sm p-8 ${
                p.highlight
                  ? "bg-gray-950 border-gray-700 md:scale-[1.03] md:shadow-xl z-10"
                  : "bg-white border-gray-200"
              }`}
            >
              {p.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-white border border-gray-300 text-gray-600 text-xs font-mono px-3 py-1 rounded-full whitespace-nowrap shadow-sm">
                    {p.badge}
                  </span>
                </div>
              )}
              <div className={`text-xs font-mono uppercase tracking-widest mb-4 ${p.highlight ? "text-white/40" : "text-gray-400"}`}>
                {p.name}
              </div>
              <div className="mb-4">
                <span className={`text-4xl font-bold ${p.highlight ? "text-white" : "text-gray-900"}`}>{p.price}</span>
                <span className={`text-sm ml-1 ${p.highlight ? "text-white/40" : "text-gray-400"}`}>{p.cycle}</span>
              </div>
              <p className={`text-sm leading-relaxed mb-8 flex-1 ${p.highlight ? "text-white/50" : "text-gray-500"}`}>
                {p.desc}
              </p>
              <button
                className={`w-full py-3 px-6 rounded-full font-semibold transition-colors ${
                  p.highlight
                    ? "bg-white text-gray-900 hover:bg-gray-100"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                }`}
              >
                {p.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <div className="bg-white border border-gray-200 rounded-sm overflow-hidden">
          <div className="grid grid-cols-4 border-b border-gray-100">
            <div className="p-4 col-span-1 bg-gray-50">
              <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">Característica</span>
            </div>
            {plans.map((p) => (
              <div key={p.id} className={`p-4 text-center border-l border-gray-100 ${p.highlight ? "bg-gray-950" : ""}`}>
                <span className={`text-sm font-semibold ${p.highlight ? "text-white" : "text-gray-700"}`}>{p.name}</span>
              </div>
            ))}
          </div>
          {features.map((f, i) => (
            <div key={f.label} className={`grid grid-cols-4 border-b border-gray-50 ${i % 2 === 0 ? "" : "bg-gray-50/50"}`}>
              <div className="p-4 col-span-1">
                <span className="text-sm text-gray-600">{f.label}</span>
              </div>
              {[f.starter, f.profesional, f.premium].map((val, j) => (
                <div key={j} className={`p-4 text-center border-l border-gray-100 ${j === 1 ? "bg-gray-950/5" : ""}`}>
                  <span className={`text-sm font-mono ${val === "—" ? "text-gray-200" : val === "✓" ? "text-gray-700" : "text-gray-700"}`}>
                    {val}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>

        <p className="text-center text-xs font-mono text-gray-400 mt-6">
          * Los precios son de referencia. Consultar valores actualizados al momento de la suscripción.
        </p>
      </div>
    </section>
  );
}
