const audiences = [
  {
    icon: "🏭",
    title: "Industria",
    subtitle: "Plantas de producción y manufactura",
    description:
      "[Descripción — Industrias con generación de efluentes, residuos industriales peligrosos o no peligrosos que requieren gestión certificada.]",
    examples: ["Frigoríficos", "Textiles", "Química", "Metalmecánica"],
  },
  {
    icon: "🏢",
    title: "Empresas agropecuarias",
    subtitle: "Grandes y medianas empresas del agro",
    description:
      "[Descripción — Empresas con operaciones agrícolas o ganaderas de escala que generan residuos orgánicos y requieren soluciones técnicas de valorización.]",
    examples: ["Pools de siembra", "Feedlots", "Tambos", "Cooperativas"],
  },
  {
    icon: "🌾",
    title: "Productores agrícolas",
    subtitle: "Agricultores familiares y de mediana escala",
    description:
      "[Descripción — Productores que buscan mejorar la gestión de residuos de campaña, envases vacíos de agroquímicos y subproductos orgánicos.]",
    examples: ["Soja", "Maíz", "Trigo", "Horticultura"],
  },
  {
    icon: "🏛️",
    title: "Organismos públicos",
    subtitle: "Municipios e instituciones estatales",
    description:
      "[Descripción — Municipios y organismos con pasivos ambientales, necesidad de gestión de RSU o proyectos de remediación de sitios contaminados.]",
    examples: ["Municipios", "Provincias", "Entes reguladores"],
  },
];

export function WhoIsItFor() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 md:px-8 bg-gray-50">
      <div className="max-w-[1600px] mx-auto w-full">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <div className="inline-block border border-gray-300 px-3 py-1 mb-6">
            <span className="text-gray-500 text-xs font-mono uppercase tracking-widest">05 — ¿Para quién?</span>
          </div>
          <h2 className="text-gray-900 mb-4">¿Para quién es este servicio?</h2>
          <p className="text-gray-500 leading-relaxed">
            [Descripción — Sectores y perfiles de clientes que más se benefician de los servicios de tratamiento y gestión ambiental de Hisoil.]
          </p>
        </div>

        {/* Audience cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((a) => (
            <div
              key={a.title}
              className="bg-white border border-gray-200 rounded-sm p-7 flex flex-col hover:border-gray-400 transition-colors group cursor-pointer"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-gray-100 rounded-sm flex items-center justify-center text-2xl mb-5 group-hover:bg-gray-200 transition-colors">
                {a.icon}
              </div>

              <h3 className="font-semibold text-gray-900 mb-1">{a.title}</h3>
              <p className="text-xs text-gray-400 font-mono mb-4">{a.subtitle}</p>

              <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-6">
                {a.description}
              </p>

              {/* Examples */}
              <div className="border-t border-gray-100 pt-4">
                <div className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-2">Ejemplos</div>
                <div className="flex flex-wrap gap-1.5">
                  {a.examples.map((ex) => (
                    <span key={ex} className="bg-gray-100 text-gray-500 text-xs px-2.5 py-1 rounded-full font-mono">
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-12 bg-white border border-gray-200 rounded-sm px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-medium text-gray-800">¿Tu industria no aparece acá?</p>
            <p className="text-gray-500 text-sm mt-1">[Texto — Invitación a consultar independientemente del sector.]</p>
          </div>
          <button className="bg-gray-900 text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors whitespace-nowrap flex-shrink-0">
            Hablar con un asesor
          </button>
        </div>
      </div>
    </section>
  );
}
