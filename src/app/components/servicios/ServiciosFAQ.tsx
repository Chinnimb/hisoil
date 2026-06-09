import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "¿Cuál es el volumen mínimo de residuos para contratar el servicio?",
    answer:
      "[Respuesta — Descripción del volumen mínimo de residuos requerido para operar. Mencionar que existe evaluación caso por caso para volúmenes menores y alternativas de agrupamiento con otros clientes de la zona.]",
  },
  {
    question: "¿Trabajan con residuos peligrosos?",
    answer:
      "[Respuesta — Descripción de la capacidad de tratamiento de residuos peligrosos: categorías habilitadas, habilitaciones vigentes ante organismos reguladores, protocolos de seguridad aplicados.]",
  },
  {
    question: "¿Qué documentación requieren para iniciar el servicio?",
    answer:
      "[Respuesta — Listado de documentación necesaria: habilitación municipal, datos del generador, caracterización del residuo, datos de contacto del responsable. Explicar que Hisoil asiste en la gestión documental.]",
  },
  {
    question: "¿Cuánto tiempo tarda el proceso desde el diagnóstico hasta la primera recolección?",
    answer:
      "[Respuesta — Timeline típico: diagnóstico (1-2 semanas), propuesta técnica (3-5 días), firma de contrato y logística (1 semana), inicio de operaciones. Total estimado: 3-5 semanas desde el primer contacto.]",
  },
  {
    question: "¿Los productos para cultivos son compatibles con certificaciones orgánicas?",
    answer:
      "[Respuesta — Descripción de los productos habilitados para uso en producción orgánica y convencional. Registros SENASA, certificaciones internacionales disponibles y cómo consultarlos por producto específico.]",
  },
  {
    question: "¿Ofrecen servicio de monitoreo continuo post-implementación?",
    answer:
      "[Respuesta — Descripción del servicio de seguimiento: visitas periódicas, análisis de laboratorio, reportes digitales y dashboard de resultados. Modalidades de contrato de seguimiento disponibles.]",
  },
];

export function ServiciosFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left */}
          <div className="lg:col-span-4">
            <div className="inline-block border border-gray-300 px-3 py-1 mb-6">
              <span className="text-gray-500 text-xs font-mono uppercase tracking-widest">10 — FAQ</span>
            </div>
            <h2 className="text-gray-900 mb-6">Preguntas frecuentes</h2>
            <p className="text-gray-500 leading-relaxed text-sm mb-8">
              [Texto — Respuestas a las consultas más comunes sobre los servicios de tratamiento
              de residuos y el portafolio de productos para cultivos.]
            </p>
            <p className="text-gray-400 text-sm mb-3">¿No encontrás tu respuesta?</p>
            <button className="border border-gray-400 text-gray-600 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
              Hablar con un asesor
            </button>
          </div>

          {/* Right — accordion */}
          <div className="lg:col-span-8">
            <div className="divide-y divide-gray-200 border-y border-gray-200">
              {faqs.map((faq, i) => (
                <div key={i}>
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full text-left py-6 flex items-center justify-between gap-4 group"
                  >
                    <span className={`font-medium text-sm transition-colors ${openIndex === i ? "text-gray-900" : "text-gray-600 group-hover:text-gray-900"}`}>
                      {faq.question}
                    </span>
                    <div className={`flex-shrink-0 w-7 h-7 border rounded-full flex items-center justify-center transition-all ${openIndex === i ? "bg-gray-900 border-gray-900" : "border-gray-300 group-hover:border-gray-500"}`}>
                      <ChevronDown size={13} className={`transition-transform ${openIndex === i ? "rotate-180 text-white" : "text-gray-400"}`} />
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-64 pb-6" : "max-h-0"}`}>
                    <p className="text-gray-500 text-sm leading-relaxed pr-10">{faq.answer}</p>
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
