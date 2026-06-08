const categories = [
  {
    id: "fertilizantes",
    name: "Fertilizantes",
    icon: "💧",
    count: 14,
    description: "[Fertilizantes de síntesis y biológicos para nutrición balanceada. Formulaciones líquidas y sólidas para distintas etapas del cultivo.]",
    tag: "Base nutricional",
  },
  {
    id: "bioestimulantes",
    name: "Bioestimulantes",
    icon: "⚡",
    count: 11,
    description: "[Estimulantes de crecimiento radicular, floración y resistencia al estrés. Elaborados con extractos naturales y microorganismos benéficos.]",
    tag: "Rendimiento",
  },
  {
    id: "compost",
    name: "Compost",
    icon: "♻️",
    count: 8,
    description: "[Compost certificado de alta calidad a partir de residuos orgánicos tratados. Mejora estructura, aireación y actividad biológica del suelo.]",
    tag: "Economía circular",
  },
  {
    id: "enmiendas",
    name: "Enmiendas",
    icon: "🪨",
    count: 7,
    description: "[Correctores de pH, calcáreo agrícola y yeso agrícola. Ajuste y estabilización de condiciones fisicoquímicas del suelo a largo plazo.]",
    tag: "Corrección de suelo",
  },
  {
    id: "nutricion",
    name: "Nutrición vegetal",
    icon: "🌿",
    count: 12,
    description: "[Planes nutricionales completos formulados por cultivo. Combinaciones de macro y microelementos para cubrir requerimientos específicos.]",
    tag: "Planes a medida",
  },
  {
    id: "tratamiento",
    name: "Tratamiento de suelos",
    icon: "🧪",
    count: 9,
    description: "[Inoculantes, biofungicidas y bacterias fijadoras de nitrógeno. Soluciones biológicas para recuperación y regeneración del suelo productivo.]",
    tag: "Biología de suelos",
  },
];

export function ProductCategories() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <div className="inline-block border border-gray-300 px-3 py-1 mb-6">
              <span className="text-gray-500 text-xs font-mono uppercase tracking-widest">02 — Categorías</span>
            </div>
            <h2 className="text-gray-900 mb-3">Explorá el catálogo por categoría</h2>
            <p className="text-gray-500 leading-relaxed">
              [Descripción — Seis líneas de productos formuladas con respaldo técnico para cada necesidad agronómica.]
            </p>
          </div>
          <button className="self-start md:self-auto border border-gray-300 text-gray-500 px-5 py-2.5 rounded-full text-sm font-mono hover:bg-gray-50 transition-colors whitespace-nowrap">
            Ver catálogo completo →
          </button>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group border border-gray-200 rounded-sm overflow-hidden hover:border-gray-500 hover:shadow-md transition-all cursor-pointer"
            >
              {/* Image placeholder */}
              <div className="aspect-[16/9] bg-gray-100 flex items-center justify-center relative border-b border-gray-200 group-hover:bg-gray-200 transition-colors">
                <div className="text-center">
                  <div className="w-14 h-14 bg-white border border-gray-200 rounded-sm flex items-center justify-center text-3xl mx-auto mb-2">
                    {cat.icon}
                  </div>
                  <p className="text-gray-300 text-xs font-mono">Imagen categoría — 640×360px</p>
                </div>
                {/* Count badge */}
                <div className="absolute top-3 right-3 bg-white border border-gray-200 px-2.5 py-1 rounded-full">
                  <span className="text-gray-500 text-xs font-mono">{cat.count} productos</span>
                </div>
                {/* Tag */}
                <div className="absolute bottom-3 left-3 bg-gray-900 text-white px-2.5 py-1 rounded-full">
                  <span className="text-xs font-mono">{cat.tag}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-gray-900 font-semibold text-lg mb-2">{cat.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{cat.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-xs font-mono">{cat.count} productos disponibles</span>
                  <span className="text-gray-700 text-sm font-medium group-hover:text-gray-900 transition-colors flex items-center gap-1">
                    Ver productos <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
