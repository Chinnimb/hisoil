const pillars = [
  {
    number: "01",
    title: "Suscripción flexible",
    description: "[Descripción — Elegís el plan que mejor se adapta a tu operación y podés ajustarlo en cualquier momento según la campaña o el ciclo productivo.]",
  },
  {
    number: "02",
    title: "Productos programados",
    description: "[Descripción — Recibís los productos que necesitás en el momento exacto, sin tener que hacer pedidos individuales cada vez. Planificá con anticipación.]",
  },
  {
    number: "03",
    title: "Asesoramiento continuo",
    description: "[Descripción — Accedés a nuestro equipo técnico de forma prioritaria para consultas, ajustes de dosis, recomendaciones de manejo y seguimiento de resultados.]",
  },
  {
    number: "04",
    title: "Beneficios acumulativos",
    description: "[Descripción — Cuanto más tiempo sos miembro, mayores son los descuentos y beneficios que acumulás. El programa premia la fidelidad y la continuidad.]",
  },
];

export function QueEsMembresia() {
  return (
    <section className="py-24 md:py-32 px-6 bg-white">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left */}
          <div className="lg:col-span-5">
            <div className="inline-block border border-gray-300 px-3 py-1 mb-8">
              <span className="text-gray-400 text-xs font-mono uppercase tracking-widest">02 — ¿Qué es?</span>
            </div>
            <h2 className="text-gray-900 mb-6">Un programa diseñado para clientes que operan en serio.</h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              [Párrafo 1 — La Membresía Hisoil es un programa de suscripción anual para productores, empresas y profesionales agropecuarios que quieren acceso continuo a productos, técnicos y recursos.]
            </p>
            <p className="text-gray-500 leading-relaxed mb-10">
              [Párrafo 2 — No es solo un descuento: es un sistema de trabajo colaborativo donde Hisoil acompaña cada etapa del proceso productivo, desde la planificación hasta el seguimiento de resultados.]
            </p>

            {/* Field image */}
            <div className="relative h-48 mb-8 overflow-hidden rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3liZWFuJTIwY29ybiUyMGNyb3AlMjBjbG9zZSUyMHVwJTIwcGxhbnQlMjBncm93dGh8ZW58MXx8fHwxNzgwOTM1MDQ4fDA&ixlib=rb-4.1.0&q=80&w=600"
                alt="Cultivo en crecimiento con suelo tratado"
                className="w-full h-full object-cover grayscale"
                style={{ filter: 'grayscale(100%)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent" />
            </div>

            {/* Quote block */}
            <div className="border-l-4 border-gray-900 pl-6 py-2">
              <p className="text-gray-700 italic leading-relaxed">
                "[Cita destacada — El cliente miembro tiene un equipo técnico propio sin pagar el costo de tenerlo en planta.]"
              </p>
              <div className="mt-3 text-gray-400 text-xs font-mono">— Equipo técnico Hisoil</div>
            </div>
          </div>

          {/* Right — pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-200 border border-gray-200">
            {pillars.map((p) => (
              <div key={p.number} className="bg-white p-8 hover:bg-gray-50 transition-colors">
                <div className="text-gray-100 font-mono font-bold text-5xl leading-none mb-5">{p.number}</div>
                <h3 className="text-gray-900 text-base font-semibold mb-3">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
