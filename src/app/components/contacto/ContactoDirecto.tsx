const channels = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    label: "WhatsApp",
    value: "+54 9 XXX XXX XXXX",
    description: "Respuesta inmediata en horario comercial. El canal más rápido para consultas urgentes.",
    cta: "Iniciar conversación",
    highlight: true,
    tag: "Más rápido",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: "Teléfono",
    value: "+54 XXX XXX XXXX",
    description: "Atención telefónica de lunes a viernes de 8 a 18 hs. Para consultas que requieren explicación detallada.",
    cta: "Llamar ahora",
    highlight: false,
    tag: null,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: "Email",
    value: "contacto@hisoil.com",
    description: "Para consultas formales, envío de documentación o solicitudes que requieren seguimiento escrito.",
    cta: "Enviar correo",
    highlight: false,
    tag: null,
  },
];

export function ContactoDirecto() {
  return (
    <section className="py-24 md:py-32 px-6 bg-gray-50">
      <div className="w-full">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block border border-gray-300 px-3 py-1 mb-6">
            <span className="text-gray-400 text-xs font-mono uppercase tracking-widest">03 — Contacto directo</span>
          </div>
          <h2 className="text-gray-900">¿Preferís hablar directamente?</h2>
        </div>

        {/* Channel cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {channels.map((c) => (
            <div
              key={c.label}
              className={`relative border rounded-sm p-8 flex flex-col ${
                c.highlight ? "bg-gray-950 border-gray-700" : "bg-white border-gray-200"
              }`}
            >
              {c.tag && (
                <div className="absolute -top-3 left-6">
                  <span className="bg-white border border-gray-300 text-gray-600 text-xs font-mono px-3 py-1 rounded-full shadow-sm">
                    {c.tag}
                  </span>
                </div>
              )}

              <div className={`mb-6 ${c.highlight ? "text-white/60" : "text-gray-400"}`}>
                {c.icon}
              </div>

              <div className={`text-xs font-mono uppercase tracking-widest mb-1 ${c.highlight ? "text-white/40" : "text-gray-400"}`}>
                {c.label}
              </div>
              <div className={`font-semibold mb-4 ${c.highlight ? "text-white" : "text-gray-900"}`}>
                {c.value}
              </div>
              <p className={`text-sm leading-relaxed flex-1 mb-8 ${c.highlight ? "text-white/50" : "text-gray-500"}`}>
                {c.description}
              </p>

              <button
                className={`w-full py-3.5 px-6 rounded-full font-semibold transition-colors ${
                  c.highlight
                    ? "bg-white text-gray-900 hover:bg-gray-100"
                    : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                {c.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
