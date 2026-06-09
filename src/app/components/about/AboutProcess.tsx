import { useState } from "react";

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    description:
      "[Evaluación inicial del terreno, análisis de suelo y relevamiento de condiciones. Identificación de necesidades y factores críticos del proyecto.]",
    duration: "1–2 semanas",
    deliverable: "Informe de diagnóstico",
  },
  {
    number: "02",
    title: "Recomendación técnica",
    description:
      "[Diseño de la solución personalizada basada en los datos del diagnóstico. Propuesta técnica detallada con opciones de implementación y costos.]",
    duration: "3–5 días",
    deliverable: "Propuesta técnica",
  },
  {
    number: "03",
    title: "Implementación",
    description:
      "[Ejecución del plan con supervisión técnica continua. Aplicación de productos, tratamientos o instalación de sistemas según protocolos validados.]",
    duration: "Variable",
    deliverable: "Registro de aplicación",
  },
  {
    number: "04",
    title: "Seguimiento",
    description:
      "[Monitoreo post-implementación con visitas técnicas y análisis comparativos. Ajustes en tiempo real según evolución del proyecto y condiciones del campo.]",
    duration: "30–90 días",
    deliverable: "Reporte de seguimiento",
  },
  {
    number: "05",
    title: "Optimización",
    description:
      "[Análisis de resultados finales y optimización del plan para ciclos futuros. Documentación de aprendizajes y recomendaciones para la siguiente campaña.]",
    duration: "Ciclo siguiente",
    deliverable: "Plan optimizado",
  },
];

export function AboutProcess() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <div className="inline-block border border-gray-300 px-3 py-1 mb-6">
            <span className="text-gray-500 text-xs font-mono uppercase tracking-widest">04 — Proceso</span>
          </div>
          <h2 className="text-gray-900 mb-4">Cómo acompañamos cada proyecto</h2>
          <p className="text-gray-500 leading-relaxed">
            [Descripción breve del proceso de trabajo, destacando el acompañamiento continuo y el enfoque técnico en cada etapa.]
          </p>
        </div>

        {/* Desktop — Horizontal timeline */}
        <div className="hidden md:block">
          {/* Step tabs */}
          <div className="flex border-b border-gray-200 mb-12">
            {steps.map((step, i) => (
              <button
                key={step.number}
                onClick={() => setActiveStep(i)}
                className={`flex-1 pb-4 text-left transition-colors border-b-2 -mb-px ${
                  activeStep === i
                    ? "border-gray-900 text-gray-900"
                    : "border-transparent text-gray-400 hover:text-gray-600"
                }`}
              >
                <span className="block text-xs font-mono mb-1">Paso {step.number}</span>
                <span className="font-medium text-sm">{step.title}</span>
              </button>
            ))}
          </div>

          {/* Active step content */}
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-6xl font-bold text-gray-100 font-mono">
                  {steps[activeStep].number}
                </span>
                <h3 className="text-2xl text-gray-900">{steps[activeStep].title}</h3>
              </div>
              <p className="text-gray-500 leading-relaxed text-lg">
                {steps[activeStep].description}
              </p>
            </div>
            <div className="col-span-4 space-y-4">
              <div className="bg-gray-50 border border-gray-200 p-5 rounded-sm">
                <div className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-1">Duración estimada</div>
                <div className="font-medium text-gray-800">{steps[activeStep].duration}</div>
              </div>
              <div className="bg-gray-50 border border-gray-200 p-5 rounded-sm">
                <div className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-1">Entregable</div>
                <div className="font-medium text-gray-800">{steps[activeStep].deliverable}</div>
              </div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-12 flex gap-2">
            {steps.map((_, i) => (
              <div
                key={i}
                className={`h-1 flex-1 rounded-full transition-colors ${
                  i <= activeStep ? "bg-gray-700" : "bg-gray-200"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Mobile — Vertical timeline */}
        <div className="md:hidden space-y-0">
          {steps.map((step, i) => (
            <div key={step.number} className="flex gap-6">
              {/* Line + dot */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center flex-shrink-0 z-10">
                  <span className="text-xs font-mono font-bold text-gray-500">{step.number}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 bg-gray-200 my-2" style={{ minHeight: 40 }} />
                )}
              </div>

              {/* Content */}
              <div className="pb-10">
                <h3 className="text-gray-900 font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">{step.description}</p>
                <div className="flex gap-3 flex-wrap">
                  <span className="bg-gray-100 text-gray-500 text-xs px-3 py-1 rounded-full font-mono">
                    {step.duration}
                  </span>
                  <span className="bg-gray-100 text-gray-500 text-xs px-3 py-1 rounded-full font-mono">
                    {step.deliverable}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
