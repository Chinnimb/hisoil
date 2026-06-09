import { useState } from "react";
import { ChevronDown } from "lucide-react";

const categories = [
  {
    label: "Suscripción",
    items: [
      { q: "¿Cómo me suscribo a la membresía?", a: "[Respuesta — El proceso de suscripción se realiza online en el área de membresías de nuestro sitio. Seleccionás el plan, completás tus datos y el equipo técnico te contacta en menos de 24 horas para confirmar la activación.]" },
      { q: "¿Puedo cambiar de plan después de suscribirme?", a: "[Respuesta — Sí, podés cambiar de plan en cualquier momento. Los cambios aplican a partir del próximo ciclo de facturación. El equipo de atención al cliente te guía en el proceso.]" },
      { q: "¿Hay un período mínimo de suscripción?", a: "[Respuesta — El período mínimo es de 3 meses. Después de ese período, podés cancelar con 30 días de anticipación al próximo vencimiento. Los planes anuales tienen condiciones especiales.]" },
    ],
  },
  {
    label: "Pagos",
    items: [
      { q: "¿Qué medios de pago están disponibles?", a: "[Respuesta — Aceptamos transferencia bancaria, tarjeta de crédito/débito y cheque diferido para empresas. Los pagos se procesan al inicio de cada ciclo de facturación (mensual o anual).]" },
      { q: "¿Qué pasa si me atraso con el pago?", a: "[Respuesta — Tenés un período de gracia de 5 días hábiles. Si el pago no se regulariza dentro de ese período, la membresía se suspende temporalmente hasta regularizar la situación.]" },
      { q: "¿El precio puede cambiar durante mi suscripción?", a: "[Respuesta — Los precios pueden actualizarse anualmente. Los cambios se comunican con al menos 30 días de anticipación. Los miembros activos tienen precio congelado por el período ya pagado.]" },
    ],
  },
  {
    label: "Envíos",
    items: [
      { q: "¿Con cuánta anticipación puedo modificar un envío?", a: "[Respuesta — Podés modificar cantidades o productos con al menos 5 días hábiles de anticipación a la fecha de envío programada. Cambios de dirección requieren 48 horas adicionales.]" },
      { q: "¿Los envíos llegan a todo el país?", a: "[Respuesta — Sí, hacemos envíos a todo el territorio nacional. Los tiempos de entrega varían según la zona (1–5 días hábiles). El costo de envío está incluido en todos los planes de membresía.]" },
    ],
  },
  {
    label: "Cancelación",
    items: [
      { q: "¿Cómo cancelo mi membresía?", a: "[Respuesta — La cancelación se puede gestionar desde el área de miembros o contactando al equipo de atención al cliente. Requiere un aviso de 30 días antes del próximo vencimiento. No hay penalidades por cancelación después del período mínimo.]" },
      { q: "¿Qué pasa con los envíos programados si cancelo?", a: "[Respuesta — Los envíos programados hasta la fecha de cancelación efectiva se completan normalmente. No se realizan envíos adicionales después de la fecha de baja.]" },
    ],
  },
];

export function FAQMembresia() {
  const [openKey, setOpenKey] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState(0);

  const toggle = (key: string) => setOpenKey(openKey === key ? null : key);

  return (
    <section className="py-24 md:py-32 px-6 bg-gray-50">
      <div className="w-full">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block border border-gray-300 px-3 py-1 mb-6">
            <span className="text-gray-400 text-xs font-mono uppercase tracking-widest">09 — Preguntas frecuentes</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-gray-900">Preguntas frecuentes sobre la membresía.</h2>
            <p className="text-gray-400 text-sm font-mono">¿No encontrás tu respuesta? Escribinos.</p>
          </div>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat, i) => (
            <button
              key={cat.label}
              onClick={() => setActiveCategory(i)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${i === activeCategory ? "bg-gray-900 text-white" : "bg-white border border-gray-200 text-gray-500 hover:border-gray-400"}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <div className="bg-white border border-gray-200 rounded-sm overflow-hidden divide-y divide-gray-100">
          {categories[activeCategory].items.map((item, i) => {
            const key = `${activeCategory}-${i}`;
            const isOpen = openKey === key;
            return (
              <div key={key}>
                <button
                  onClick={() => toggle(key)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-gray-900 font-medium">{item.q}</span>
                  <ChevronDown
                    size={18}
                    className={`text-gray-400 flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div className={`overflow-hidden transition-all duration-200 ${isOpen ? "max-h-64" : "max-h-0"}`}>
                  <div className="px-6 pb-6 text-gray-500 leading-relaxed text-sm">{item.a}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact strip */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 border border-gray-200 rounded-sm bg-white">
          <div>
            <div className="text-gray-900 font-medium mb-0.5">¿Tenés otras preguntas?</div>
            <div className="text-gray-400 text-sm font-mono">El equipo de membresías responde en menos de 24 horas.</div>
          </div>
          <div className="flex gap-3">
            <button className="border border-gray-300 text-gray-700 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors">
              Enviar consulta
            </button>
            <button className="bg-gray-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
              WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
