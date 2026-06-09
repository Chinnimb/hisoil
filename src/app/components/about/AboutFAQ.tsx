import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "¿En qué zonas geográficas opera Hisoil?",
    answer:
      "[Respuesta — Descripción de la cobertura geográfica de Hisoil: provincias, regiones o países donde opera. Mencionar capacidad de trabajo remoto y consultoría virtual para clientes fuera del área de cobertura directa.]",
  },
  {
    question: "¿Cómo es el proceso para comenzar a trabajar con Hisoil?",
    answer:
      "[Respuesta — Explicación del proceso de onboarding: primer contacto, diagnóstico inicial, propuesta técnica, aprobación y arranque. Destacar que no hay compromiso en la etapa de diagnóstico.]",
  },
  {
    question: "¿Qué tipo de empresas trabajan con Hisoil?",
    answer:
      "[Respuesta — Descripción del perfil de clientes: productores agrícolas individuales, empresas agropecuarias, agroindustria, municipios, industrias con impacto ambiental. Tanto B2B como B2C.]",
  },
  {
    question: "¿Tienen capacidad para proyectos de gran escala?",
    answer:
      "[Respuesta — Descripción de la capacidad operativa: equipo técnico, equipamiento disponible, proyectos de referencia de gran escala completados. Mencionar alianzas con empresas complementarias para proyectos complejos.]",
  },
  {
    question: "¿Qué certificaciones y avales técnicos posee Hisoil?",
    answer:
      "[Respuesta — Lista de certificaciones: ISO 14001, habilitaciones provinciales, registro en organismos oficiales (SENASA, etc.), membresías en cámaras del sector, diplomas y formación del equipo técnico.]",
  },
  {
    question: "¿Trabajan con productos biológicos o solo con agroquímicos convencionales?",
    answer:
      "[Respuesta — Descripción del portafolio de soluciones: bioinsumos, productos de síntesis, MIP (manejo integrado de plagas), fertilizantes biológicos. Enfoque en soluciones combinadas y adaptadas a cada sistema productivo.]",
  },
];

export function AboutFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-16 bg-gray-50">
      <div className="max-w-[1600px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left — header */}
          <div className="lg:col-span-4">
            <div className="inline-block border border-gray-300 px-3 py-1 mb-6">
              <span className="text-gray-500 text-xs font-mono uppercase tracking-widest">08 — FAQ</span>
            </div>
            <h2 className="text-gray-900 mb-6">Preguntas frecuentes</h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              [Texto de apoyo — Invitación a revisar las preguntas más comunes sobre la empresa, servicios y proceso de trabajo.]
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              ¿No encontrás lo que buscás?
            </p>
            <button className="mt-3 border border-gray-400 text-gray-600 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
              Escribinos directamente
            </button>
          </div>

          {/* Right — accordion */}
          <div className="lg:col-span-8">
            <div className="divide-y divide-gray-200 border-y border-gray-200">
              {faqs.map((faq, i) => (
                <div key={i} className="py-0">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full text-left py-6 flex items-center justify-between gap-4 group"
                  >
                    <span className={`font-medium transition-colors ${openIndex === i ? "text-gray-900" : "text-gray-600 group-hover:text-gray-900"}`}>
                      {faq.question}
                    </span>
                    <div className={`flex-shrink-0 w-7 h-7 border border-gray-300 rounded-full flex items-center justify-center transition-all ${openIndex === i ? "bg-gray-900 border-gray-900" : "group-hover:border-gray-500"}`}>
                      <ChevronDown
                        size={14}
                        className={`transition-transform ${openIndex === i ? "rotate-180 text-white" : "text-gray-400"}`}
                      />
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-64 pb-6" : "max-h-0"}`}
                  >
                    <p className="text-gray-500 leading-relaxed text-sm pr-10">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
