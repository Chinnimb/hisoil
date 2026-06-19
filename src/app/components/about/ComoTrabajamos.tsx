import { useState } from "react";

const steps = [
  {
    number: "01",
    title: "Escuchamos",
    subtitle: "Entender antes de proponer",
    description: "[Descripción — El primer paso es siempre escuchar. Nos tomamos el tiempo necesario para entender el contexto, los objetivos y las restricciones reales de cada cliente antes de diseñar cualquier solución.]",
    outputs: ["Reunión de diagnóstico", "Relevamiento de campo", "Definición de objetivos"],
  },
  {
    number: "02",
    title: "Analizamos",
    subtitle: "Datos, no suposiciones",
    description: "[Descripción — Analizamos suelo, agua, residuos o sistema productivo según el caso. Usamos datos reales de laboratorio y relevamiento de campo para tomar decisiones técnicas fundamentadas.]",
    outputs: ["Análisis de laboratorio", "Diagnóstico técnico", "Informe preliminar"],
  },
  {
    number: "03",
    title: "Diseñamos soluciones",
    subtitle: "A medida, no genéricas",
    description: "[Descripción — Con los datos del diagnóstico diseñamos una solución específica para el problema detectado. No aplicamos recetas genéricas: cada proyecto recibe un plan técnico propio.]",
    outputs: ["Propuesta técnica", "Alternativas de implementación", "Presupuesto detallado"],
  },
  {
    number: "04",
    title: "Implementamos",
    subtitle: "Con supervisión continua",
    description: "[Descripción — La implementación es guiada y supervisada por nuestro equipo técnico en cada etapa. Los ajustes se hacen en tiempo real según la evolución del proceso y las condiciones del terreno.]",
    outputs: ["Aplicación supervisada", "Registros de campo", "Ajustes en tiempo real"],
  },
  {
    number: "05",
    title: "Acompañamos",
    subtitle: "El resultado es el principio",
    description: "[Descripción — El proyecto no termina cuando se implementa: comienza el seguimiento. Monitoreamos, medimos y optimizamos el resultado para que cada campaña sea mejor que la anterior.]",
    outputs: ["Monitoreo post-implementación", "Informe de resultados", "Plan de mejora continua"],
  },
];

export function ComoTrabajamos() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-[1600px] mx-auto w-full">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <div className="inline-block border border-gray-300 px-3 py-1 mb-6">
            <span className="text-gray-600 text-xs font-mono uppercase tracking-widest">09 — Cultura y forma de trabajar</span>
          </div>
          <h2 className="text-oliva mb-4">Cómo trabajamos</h2>
          <p className="text-gray-700 leading-relaxed">
            [Descripción — Una metodología de trabajo que pone el conocimiento técnico al servicio de cada cliente, con acompañamiento real en todas las etapas.]
          </p>
        </div>

        {/* Desktop — interactive timeline */}
        <div className="hidden md:block">
          {/* Step tabs with connecting line */}
          <div className="relative mb-14">
            <div className="absolute top-5 left-0 right-0 h-px bg-gray-200" />
            <div
              className="absolute top-5 left-0 h-px bg-oliva transition-all duration-500"
              style={{ width: `${(active / (steps.length - 1)) * 100}%` }}
            />
            <div className="flex">
              {steps.map((s, i) => (
                <button
                  key={s.number}
                  onClick={() => setActive(i)}
                  className="flex-1 flex flex-col items-center relative z-10 group"
                >
                  <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center mb-3 transition-all ${
                    i <= active ? "bg-oliva border-gray-900 text-white" : "bg-white border-gray-300 text-gray-600 group-hover:border-gray-500"
                  }`}>
                    {i < active
                      ? <span className="text-xs text-white">✓</span>
                      : <span className="text-xs font-mono font-bold">{s.number}</span>
                    }
                  </div>
                  <span className={`text-xs font-medium transition-colors ${i === active ? "text-oliva" : "text-gray-600 group-hover:text-gray-600"}`}>
                    {s.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Active step detail */}
          <div className="border border-gray-300 rounded-sm p-10 grid grid-cols-12 gap-8">
            <div className="col-span-1">
              <span className="text-gray-100 font-bold font-mono text-6xl leading-none">{steps[active].number}</span>
            </div>
            <div className="col-span-7">
              <div className="text-gray-600 text-xs font-mono uppercase tracking-widest mb-2">{steps[active].subtitle}</div>
              <h3 className="text-oliva text-2xl font-semibold mb-4">{steps[active].title}</h3>
              <p className="text-gray-700 leading-relaxed">{steps[active].description}</p>
            </div>
            <div className="col-span-4 border-l border-gray-300 pl-8">
              <div className="text-xs font-mono text-gray-600 uppercase tracking-widest mb-4">Entregables</div>
              <div className="space-y-2">
                {steps[active].outputs.map((o) => (
                  <div key={o} className="flex items-center gap-2.5 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0" />
                    {o}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="flex gap-1.5 mt-5">
            {steps.map((_, i) => (
              <div key={i} className={`h-1 flex-1 rounded-full transition-colors ${i <= active ? "bg-oliva" : "bg-gray-200"}`} />
            ))}
          </div>
        </div>

        {/* Mobile — vertical */}
        <div className="md:hidden space-y-0">
          {steps.map((s, i) => (
            <div key={s.number} className="flex gap-5">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-oliva text-white flex items-center justify-center text-xs font-mono font-bold flex-shrink-0">
                  {s.number}
                </div>
                {i < steps.length - 1 && <div className="w-px flex-1 bg-gray-200 my-2" style={{ minHeight: 32 }} />}
              </div>
              <div className="pb-8">
                <div className="text-gray-600 text-xs font-mono mb-1">{s.subtitle}</div>
                <h3 className="text-oliva font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">{s.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {s.outputs.map((o) => (
                    <span key={o} className="bg-paja text-gray-700 text-xs px-2.5 py-1 rounded-full font-mono">{o}</span>
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
