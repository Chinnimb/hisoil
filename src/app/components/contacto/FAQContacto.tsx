import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "¿Cuánto tarda en responder el equipo comercial?",
    a: "[Respuesta — Respondemos todas las consultas en menos de 24 horas hábiles. Para urgencias, el canal de WhatsApp tiene respuesta inmediata en horario comercial (lunes a viernes 8–18 hs, sábados 8–13 hs).]",
  },
  {
    q: "¿Cómo solicito un presupuesto?",
    a: "[Respuesta — Podés solicitar tu presupuesto completando el formulario en esta página, escribiéndonos por WhatsApp o llamándonos por teléfono. El equipo técnico analiza tu situación y envía una propuesta personalizada en 48 horas hábiles.]",
  },
  {
    q: "¿Puedo solicitar una visita técnica a mi campo o empresa?",
    a: "[Respuesta — Sí. El diagnóstico inicial es sin costo y sin compromiso. Coordinamos una visita con un técnico especializado según tu zona. Cubrimos las 12 provincias donde operamos.]",
  },
  {
    q: "¿Qué información necesito tener para pedir un presupuesto?",
    a: "[Respuesta — Alcanza con una descripción básica de tu operación o cultivo, la superficie aproximada y el problema o necesidad que querés resolver. El técnico se encarga de relevarlo en detalle durante la consulta.]",
  },
  {
    q: "¿Trabajan con empresas o también con productores individuales?",
    a: "[Respuesta — Trabajamos con ambos. Atendemos desde productores familiares hasta empresas agropecuarias de escala nacional, municipios, frigoríficos y cooperativas. Cada cliente recibe una propuesta adaptada a su escala y necesidades.]",
  },
  {
    q: "¿Tienen representantes en mi provincia?",
    a: "[Respuesta — Contamos con representantes técnicos y logística propia en 12 provincias. Podés consultarnos si llegamos a tu zona completando el formulario o escribiéndonos por WhatsApp.]",
  },
  {
    q: "¿Cuáles son los tiempos de entrega de los productos?",
    a: "[Respuesta — Los tiempos de entrega varían según la zona y el tipo de producto: entre 1 y 5 días hábiles para las zonas principales. Los clientes con Membresía tienen envíos programados con fechas garantizadas.]",
  },
];

export function FAQContacto() {
  const [openKey, setOpenKey] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 px-6 bg-gray-50">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Left — header */}
          <div className="lg:col-span-4">
            <div className="inline-block border border-gray-300 px-3 py-1 mb-8">
              <span className="text-gray-400 text-xs font-mono uppercase tracking-widest">06 — FAQ</span>
            </div>
            <h2 className="text-gray-900 mb-6">Preguntas frecuentes.</h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              [Descripción — Si no encontrás la respuesta que buscás, escribinos y te respondemos en menos de 24 hs.]
            </p>
            <div className="space-y-3">
              <button className="w-full border border-gray-300 text-gray-700 py-3 px-5 rounded-full text-sm font-medium hover:bg-white transition-colors">
                Enviar otra consulta
              </button>
              <button className="w-full bg-gray-900 text-white py-3 px-5 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors">
                WhatsApp
              </button>
            </div>
          </div>

          {/* Right — accordion */}
          <div className="lg:col-span-8">
            <div className="bg-white border border-gray-200 rounded-sm overflow-hidden divide-y divide-gray-100">
              {faqs.map((item, i) => {
                const isOpen = openKey === i;
                return (
                  <div key={i}>
                    <button
                      onClick={() => setOpenKey(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-gray-900 font-medium text-sm">{item.q}</span>
                      <ChevronDown
                        size={16}
                        className={`text-gray-400 flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    <div className={`overflow-hidden transition-all duration-200 ${isOpen ? "max-h-64" : "max-h-0"}`}>
                      <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed">{item.a}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
