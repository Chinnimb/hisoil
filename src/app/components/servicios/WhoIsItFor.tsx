import { Factory, Building2, Wheat, Landmark } from 'lucide-react';

const audiences = [
  {
    Icon: Factory,
    title: "Industria",
    subtitle: "Plantas de producción y manufactura",
    description:
      "Industrias con generación de efluentes, residuos industriales peligrosos o no peligrosos que requieren gestión certificada.",
    examples: ["Frigoríficos", "Textiles", "Química", "Metalmecánica"],
  },
  {
    Icon: Building2,
    title: "Empresas agropecuarias",
    subtitle: "Grandes y medianas empresas del agro",
    description:
      "Empresas con operaciones agrícolas o ganaderas de escala que generan residuos orgánicos y requieren soluciones técnicas de valorización.",
    examples: ["Pools de siembra", "Feedlots", "Tambos", "Cooperativas"],
  },
  {
    Icon: Wheat,
    title: "Productores agrícolas",
    subtitle: "Agricultores familiares y de mediana escala",
    description:
      "Productores que buscan mejorar la gestión de residuos de campaña, envases vacíos de agroquímicos y subproductos orgánicos.",
    examples: ["Soja", "Maíz", "Trigo", "Horticultura"],
  },
  {
    Icon: Landmark,
    title: "Organismos públicos",
    subtitle: "Municipios e instituciones estatales",
    description:
      "Municipios y organismos con pasivos ambientales, necesidad de gestión de RSU o proyectos de remediación de sitios contaminados.",
    examples: ["Municipios", "Provincias", "Entes reguladores"],
  },
];

export function WhoIsItFor() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 bg-paja">
      <div className="max-w-[1600px] mx-auto w-full">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <div className="inline-block border border-gray-300 px-3 py-1 mb-6">
            <span className="text-gray-700 text-xs font-mono uppercase tracking-widest">05 — ¿Para quién?</span>
          </div>
          <h2 className="text-oliva mb-4">¿Para quién es este servicio?</h2>
          <p className="text-gray-700 leading-relaxed">
            [Descripción — Sectores y perfiles de clientes que más se benefician de los servicios de tratamiento y gestión ambiental de Hisoil.]
          </p>
        </div>

        {/* Audience cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((a) => {
            const { Icon } = a;
            return (
            <div
              key={a.title}
              className="card-gradient-border p-7 flex flex-col hover:border-gray-400 transition-colors group cursor-pointer"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-oliva rounded-xl flex items-center justify-center mb-5 group-hover:bg-lima transition-colors duration-500">
                <Icon className="w-6 h-6 text-lima group-hover:text-oliva transition-colors duration-500" />
              </div>

              <h3 className="font-semibold text-oliva mb-1">{a.title}</h3>
              <p className="text-xs text-gray-600 font-mono mb-4">{a.subtitle}</p>

              <p className="text-gray-700 text-sm leading-relaxed flex-1 mb-6">
                {a.description}
              </p>

              {/* Examples */}
              <div className="border-t border-gray-300 pt-4">
                <div className="text-xs font-mono text-gray-600 uppercase tracking-widest mb-2">Ejemplos</div>
                <div className="flex flex-wrap gap-1.5">
                  {a.examples.map((ex) => (
                    <span key={ex} className="bg-paja text-gray-700 text-xs px-2.5 py-1 rounded-full font-mono">
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            );
          })}
        </div>

        {/* CTA strip */}
        <div className="mt-12 card-gradient-border px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-medium text-gray-800">¿Tu industria no aparece acá?</p>
            <p className="text-gray-700 text-sm mt-1">[Texto — Invitación a consultar independientemente del sector.]</p>
          </div>
          <button className="bg-oliva text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-oliva transition-colors whitespace-nowrap flex-shrink-0">
            Hablar con un asesor
          </button>
        </div>
      </div>
    </section>
  );
}
