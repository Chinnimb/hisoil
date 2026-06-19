import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqGroups = [
  {
    group: "Productos",
    items: [
      {
        question: "¿Los productos tienen registro SENASA?",
        answer: "[Respuesta — Todos los productos del catálogo de Hisoil cuentan con registro SENASA vigente. Cada ficha de producto incluye el número de registro. Ante consultas específicas, el equipo técnico puede proveer la documentación correspondiente.]",
      },
      {
        question: "¿Puedo ver la ficha técnica de un producto antes de comprarlo?",
        answer: "[Respuesta — Sí. Todas las fichas técnicas están disponibles para descarga directa desde la página de cada producto. También podés solicitarlas por WhatsApp o por mail al equipo técnico.]",
      },
    ],
  },
  {
    group: "Aplicaciones",
    items: [
      {
        question: "¿Los productos son compatibles entre sí para mezcla en tanque?",
        answer: "[Respuesta — La mayoría de los productos son compatibles entre sí, aunque siempre recomendamos verificar la tabla de compatibilidad incluida en cada ficha técnica o consultar con nuestro equipo agronómico antes de preparar mezclas de tanque.]",
      },
      {
        question: "¿Qué equipo se necesita para aplicar los productos líquidos?",
        answer: "[Respuesta — Los productos líquidos son compatibles con pulverizadoras terrestres y aéreas estándar. Los productos granulados se aplican con fertilizadoras convencionales. El equipo técnico puede asesorar sobre equipamiento y calibración según el producto y cultivo.]",
      },
    ],
  },
  {
    group: "Entregas",
    items: [
      {
        question: "¿Cuál es el plazo de entrega para pedidos en volumen?",
        answer: "[Respuesta — El plazo estándar de entrega es de 5 a 10 días hábiles para pedidos en volumen, dependiendo de la ubicación y disponibilidad de stock. Para urgencias de campaña, existe una modalidad express con disponibilidad de 48 a 72 horas. Consultar disponibilidad.]",
      },
      {
        question: "¿Entregan en todo el país?",
        answer: "[Respuesta — Sí, la logística cubre todo el territorio nacional mediante operadores de transporte habilitados para productos fitosanitarios y biológicos. Para zonas alejadas o accesos difíciles, el costo y el plazo se calculan por separado.]",
      },
    ],
  },
  {
    group: "Asesoramiento",
    items: [
      {
        question: "¿Puedo solicitar una recomendación técnica antes de comprar?",
        answer: "[Respuesta — Sí. El equipo agronómico de Hisoil ofrece una consulta técnica inicial sin costo. Podés contactar por WhatsApp, formulario o teléfono. Para diagnósticos más detallados, se puede coordinar una visita técnica o solicitar un análisis de suelo.]",
      },
    ],
  },
];

export function ProductosFAQ() {
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 bg-paja">
      <div className="max-w-[1600px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left */}
          <div className="lg:col-span-4">
            <div className="inline-block border border-gray-300 px-3 py-1 mb-6">
              <span className="text-gray-700 text-xs font-mono uppercase tracking-widest">10 — FAQ</span>
            </div>
            <h2 className="text-oliva mb-6">Preguntas frecuentes</h2>
            <p className="text-gray-700 text-sm leading-relaxed mb-8">
              [Texto — Todo lo que necesitás saber sobre productos, aplicaciones, entregas y asesoramiento técnico.]
            </p>

            {/* Topic filter pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {faqGroups.map((g) => (
                <span
                  key={g.group}
                  className="bg-white border border-gray-300 text-gray-700 text-xs px-3 py-1.5 rounded-full font-mono cursor-pointer hover:border-gray-400 transition-colors"
                >
                  {g.group}
                </span>
              ))}
            </div>

            <button className="border border-gray-400 text-gray-600 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-paja transition-colors">
              Hablar con un asesor
            </button>
          </div>

          {/* Right — grouped accordion */}
          <div className="lg:col-span-8 space-y-8">
            {faqGroups.map((group) => (
              <div key={group.group}>
                <div className="text-xs font-mono text-gray-600 uppercase tracking-widest mb-3 pb-3 border-b border-gray-200">
                  {group.group}
                </div>
                <div className="divide-y divide-gray-200 border-b border-gray-200">
                  {group.items.map((item, i) => {
                    const key = `${group.group}-${i}`;
                    const isOpen = openKey === key;
                    return (
                      <div key={key}>
                        <button
                          onClick={() => setOpenKey(isOpen ? null : key)}
                          className="w-full text-left py-5 flex items-center justify-between gap-4 group"
                        >
                          <span className={`font-medium text-sm transition-colors ${isOpen ? "text-oliva" : "text-gray-600 group-hover:text-oliva"}`}>
                            {item.question}
                          </span>
                          <div className={`flex-shrink-0 w-7 h-7 border rounded-full flex items-center justify-center transition-all ${isOpen ? "bg-oliva border-gray-900" : "border-gray-300 group-hover:border-gray-500"}`}>
                            <ChevronDown size={13} className={`transition-transform ${isOpen ? "rotate-180 text-white" : "text-gray-600"}`} />
                          </div>
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-64 pb-5" : "max-h-0"}`}>
                          <p className="text-gray-700 text-sm leading-relaxed pr-10">{item.answer}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
