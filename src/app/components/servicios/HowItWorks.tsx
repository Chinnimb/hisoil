import { useState } from "react";
import { Microscope, Truck, FlaskConical, RefreshCw, FileCheck } from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "Caracterización",
    Icon: Microscope,
    description:
      "Analizamos el tipo de residuo, su composición y volumen para definir la estrategia de tratamiento más eficiente.",
    detail: "Evaluación técnica · Clasificación del residuo · Plan de gestión",
  },
  {
    number: "02",
    title: "Recolección y Transporte",
    Icon: Truck,
    description:
      "Coordinamos el retiro mediante transportistas habilitados, asegurando la correcta documentación y trazabilidad desde el origen.",
    detail: "Camiones habilitados · Manifiestos de transporte · Coordinación logística · Trazabilidad documental",
  },
  {
    number: "03",
    title: "Recepción y Tratamiento",
    Icon: FlaskConical,
    description:
      "Los residuos ingresan a planta donde son acondicionados y tratados mediante procesos controlados de compostaje.",
    detail: "Control de calidad · Mezcla de materiales · Compostaje controlado · Monitoreo de temperatura y humedad",
  },
  {
    number: "04",
    title: "Valorización",
    Icon: RefreshCw,
    description:
      "El material estabilizado se transforma en compost, sustratos o productos destinados a restauración ambiental y agricultura.",
    detail: "Maduración · Tamizado · Control de calidad · Certificación del proceso",
  },
  {
    number: "05",
    title: "Certificación y Trazabilidad",
    Icon: FileCheck,
    description:
      "Entregamos la documentación que acredita el tratamiento y valorización de los residuos.",
    detail: "Certificado de tratamiento · Certificado de disposición final · Reportes ambientales · Información para indicadores ESG",
  },
];

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="proceso" className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 bg-paja">
      <div className="max-w-[1600px] mx-auto w-full">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <div className="inline-block border border-oliva/30 px-3 py-1 mb-6">
            <span className="text-oliva text-xs font-mono uppercase tracking-widest">03 — Proceso</span>
          </div>
          <h2 className="text-oliva mb-4">Cómo funciona</h2>
          <p className="text-gray-700 leading-relaxed">
            Nuestro proceso integra logística, tratamiento y seguimiento técnico para garantizar una gestión segura, eficiente y completamente trazable.
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
                    ? "bg-oliva border-gray-900 text-white"
                    : "bg-white border-gray-300 text-gray-600 group-hover:border-gray-500"
                }`}>
                  {i < activeStep
                    ? <span className="text-white text-xs">✓</span>
                    : <span className="text-xs font-mono font-bold">{step.number}</span>
                  }
                </div>
                <span className={`text-xs font-medium transition-colors ${
                  i === activeStep ? "text-oliva" : "text-gray-600 group-hover:text-gray-600"
                }`}>
                  {step.title}
                </span>
              </button>
            ))}
          </div>

          {/* Active step detail */}
          <div className="card-gradient-border p-10 grid grid-cols-12 gap-8">
            <div className="col-span-2 flex flex-col items-center">
              <div className="w-16 h-16 bg-oliva/10 backdrop-blur-md border border-oliva/20 rounded-xl flex items-center justify-center mb-3 hover:bg-lima/25 hover:border-lima/40 transition-all duration-500">
                {(() => { const Icon = steps[activeStep].Icon; return <Icon className="w-7 h-7 text-oliva" />; })()}
              </div>
              <span className="text-4xl font-bold text-gray-100 font-mono">{steps[activeStep].number}</span>
            </div>
            <div className="col-span-6">
              <h3 className="text-2xl text-oliva mb-4">{steps[activeStep].title}</h3>
              <p className="text-gray-700 leading-relaxed">{steps[activeStep].description}</p>
            </div>
            <div className="col-span-4 border-l border-gray-300 pl-8">
              <div className="text-xs font-mono text-gray-600 uppercase tracking-widest mb-3">Incluye</div>
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
          {steps.map((step, i) => {
            const Icon = step.Icon;
            return (
            <div key={step.number} className="flex gap-5">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-oliva text-white flex items-center justify-center flex-shrink-0 z-10">
                  <span className="text-xs font-mono font-bold">{step.number}</span>
                </div>
                {i < steps.length - 1 && <div className="w-px flex-1 bg-gray-200 my-2" style={{ minHeight: 32 }} />}
              </div>
              <div className="pb-8">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-oliva/10 backdrop-blur-md border border-oliva/20 rounded-lg flex items-center justify-center">
                    <Icon className="w-4 h-4 text-oliva" />
                  </div>
                  <h3 className="font-semibold text-oliva">{step.title}</h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">{step.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {step.detail.split(" · ").map((d) => (
                    <span key={d} className="bg-paja text-gray-700 text-xs px-2.5 py-1 rounded-full font-mono">{d}</span>
                  ))}
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
