const benefits = [
  {
    icon: "↓",
    title: "Descuentos exclusivos",
    description: "[Descripción — Miembros acceden a precios preferenciales en toda la línea de productos Hisoil, con descuentos que aumentan según el plan y la antigüedad.]",
    tag: "Hasta 20% off",
  },
  {
    icon: "⚡",
    title: "Asesoramiento prioritario",
    description: "[Descripción — Acceso directo al equipo técnico con respuesta garantizada en menos de 4 horas hábiles. Consultas ilimitadas incluidas en el plan.]",
    tag: "Respuesta en 4 hs",
  },
  {
    icon: "📦",
    title: "Envíos programados",
    description: "[Descripción — Configurá un calendario de envíos recurrentes y recibí los productos en el momento exacto que los necesitás, sin interrupciones en tu operación.]",
    tag: "Sin cargo adicional",
  },
  {
    icon: "📄",
    title: "Fichas técnicas y recursos",
    description: "[Descripción — Biblioteca exclusiva con protocolos de aplicación, fichas técnicas actualizadas, guías de manejo y acceso anticipado a nuevas líneas de productos.]",
    tag: "Actualizadas 2025",
  },
  {
    icon: "🔔",
    title: "Alertas de campaña",
    description: "[Descripción — Recibís notificaciones personalizadas sobre ventanas de aplicación óptima, alertas de plagas y recomendaciones técnicas según tu zona y cultivo.]",
    tag: "Personalizado",
  },
  {
    icon: "🤝",
    title: "Atención 24 hs",
    description: "[Descripción — Canal de comunicación exclusivo para miembros activos. Atención preferencial fuera del horario comercial para situaciones críticas de campo.]",
    tag: "7 días",
  },
];

export function BeneficiosMembresia() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 bg-paja">
      <div className="max-w-[1600px] mx-auto w-full">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <div className="inline-block border border-gray-300 px-3 py-1 mb-6">
            <span className="text-gray-600 text-xs font-mono uppercase tracking-widest">03 — Beneficios</span>
          </div>
          <h2 className="text-oliva mb-4">Todo lo que incluye ser miembro Hisoil.</h2>
          <p className="text-gray-700 leading-relaxed">
            [Subtítulo — Desde el descuento en productos hasta el acompañamiento técnico personalizado, cada beneficio está diseñado para mejorar la rentabilidad de tu operación.]
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
          {benefits.map((b) => (
            <div key={b.title} className="bg-white p-8 flex flex-col group hover:bg-white transition-colors relative">
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-oliva group-hover:w-full transition-all duration-300" />
              <div className="text-2xl mb-5 opacity-40">{b.icon}</div>
              <div className="flex items-start justify-between mb-3 gap-2">
                <h3 className="text-oliva font-semibold">{b.title}</h3>
                <span className="bg-paja text-gray-700 text-[10px] font-mono px-2 py-1 rounded-full whitespace-nowrap flex-shrink-0 border border-gray-200">
                  {b.tag}
                </span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed flex-1">{b.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-8 flex items-center justify-center gap-3 text-gray-600 text-sm">
          <div className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
          <span className="font-mono text-xs">Todos los beneficios aplican desde el primer mes de suscripción activa</span>
          <div className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
        </div>
      </div>
    </section>
  );
}
