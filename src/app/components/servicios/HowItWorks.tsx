import { useState } from "react";

const steps = [
  {
    number: "01",
    title: "Recolección",
    icon: "🚛",
    description:
      "[Descripción — Recolección y logística de residuos desde el punto de origen. Coordinación de transporte habilitado y documentación de trazabilidad.]",
    detail: "Camiones habilitados · Manifiesto de transporte · Georeferenciación",
  },
  {
    number: "02",
    title: "Clasificación",
    icon: "🔬",
    description:
      "[Descripción — Análisis y clasificación del residuo según tipo, composición y peligrosidad. Determinación del protocolo de tratamiento más adecuado.]",
    detail: "Análisis fisicoquímico · Clasificación por norma · Protocolo asignado",
  },
  {
    number: "03",
    title: "Tratamiento",
    icon: "⚗️",
    description:
      "[Descripción — Aplicación del tratamiento específico: físico, químico, biológico o combinado, según la naturaleza del residuo y el objetivo final.]",
    detail: "Tratamiento físico · Biológico · Químico · Mixto",
  },
  {
    number: "04",
    title: "Transformación",
    icon: "🔄",
    description:
      "[Descripción — Proceso de valorización del residuo tratado: compostaje, biodigestión, recuperación de nutrientes o producción de enmiendas de suelo.]",
    detail: "Compostaje · Biodigestión · Recuperación de nutrientes",
  },
  {
    number: "05",
    title: "Resultado",
    icon: "🌾",
    description:
      "[Descripción — Entrega del producto final o disposición certificada. Informe técnico de cierre con métricas de impacto ambiental y documental regulatorio.]",
    detail: "Biofertilizante · Informe técnico · Certificado ambiental",
  },
];

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 bg-gray-50">
      <div className="max-w-[1600px] mx-auto w-full">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <div className="inline-block border border-gray-300 px-3 py-1 mb-6">
            <span className="text-gray-500 text-xs font-mono uppercase tracking-widest">03 — Proceso</span>
          </div>
          <h2 className="text-gray-900 mb-4">Cómo funciona</h2>
          <p className="text-gray-500 leading-relaxed">
            [Descripción del proceso — 5 etapas claras que garantizan trazabilidad, eficiencia y
            cumplimiento normativo en cada proyecto.]
          </p>
        </div>

        {/* Desktop — interactive steps */}
        <div className="hidden md:block">
          {/* Step selector */}
          <div className="relative flex items-center mb-12">
            {/* Connector line */}
            <div className="absolute top-5 left-5 right-5 h-px bg-gray-200" />
            <div
              className="absolute top-5 left-5 h-px bg-gray-700 transition-all duration-500"
              style={{ width: `${(activeStep / (steps.length - 1)) * (100 - (10 / steps.length))}%` }}
            />

            {steps.map((step, i) => (
              <button
                key={step.number}
                onClick={() => setActiveStep(i)}
                className="flex-1 flex flex-col items-center relative z-10 group"
              >
                {/* Circle */}
                <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center mb-3 transition-all ${
                  i <= activeStep
                    ? "bg-gray-900 border-gray-900 text-white"
                    : "bg-white border-gray-300 text-gray-400 group-hover:border-gray-500"
                }`}>
                  {i < activeStep
                    ? <span className="text-white text-xs">✓</span>
                    : <span className="text-xs font-mono font-bold">{step.number}</span>
                  }
                </div>
                <span className={`text-xs font-medium transition-colors ${
                  i === activeStep ? "text-gray-900" : "text-gray-400 group-hover:text-gray-600"
                }`}>
                  {step.title}
                </span>
              </button>
            ))}
          </div>

          {/* Active step detail */}
          <div className="bg-white border border-gray-200 rounded-sm p-10 grid grid-cols-12 gap-8">
            <div className="col-span-2 flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-100 rounded-sm flex items-center justify-center text-3xl mb-3">
                {steps[activeStep].icon}
              </div>
              <span className="text-4xl font-bold text-gray-100 font-mono">{steps[activeStep].number}</span>
            </div>
            <div className="col-span-6">
              <h3 className="text-2xl text-gray-900 mb-4">{steps[activeStep].title}</h3>
              <p className="text-gray-500 leading-relaxed">{steps[activeStep].description}</p>
            </div>
            <div className="col-span-4 border-l border-gray-100 pl-8">
              <div className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-3">Incluye</div>
              <div className="space-y-2">
                {steps[activeStep].detail.split(" · ").map((d) => (
                  <div key={d} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0" />
                    {d}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile — vertical */}
        <div className="md:hidden space-y-0">
          {steps.map((step, i) => (
            <div key={step.number} className="flex gap-5">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center flex-shrink-0 z-10">
                  <span className="text-xs font-mono font-bold">{step.number}</span>
                </div>
                {i < steps.length - 1 && <div className="w-px flex-1 bg-gray-200 my-2" style={{ minHeight: 32 }} />}
              </div>
              <div className="pb-8">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-gray-100 rounded-sm flex items-center justify-center text-lg">
                    {step.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900">{step.title}</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">{step.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {step.detail.split(" · ").map((d) => (
                    <span key={d} className="bg-gray-100 text-gray-500 text-xs px-2.5 py-1 rounded-full font-mono">{d}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
