const categories = [
  {
    id: "fertilizantes",
    name: "Fertilizantes",
    count: 14,
    description: "[Fertilizantes de síntesis y biológicos para nutrición balanceada. Formulaciones líquidas y sólidas para distintas etapas del cultivo.]",
    tag: "Base nutricional",
    img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=640&q=75&fit=crop",
  },
  {
    id: "bioestimulantes",
    name: "Bioestimulantes",
    count: 11,
    description: "[Estimulantes de crecimiento radicular, floración y resistencia al estrés. Elaborados con extractos naturales y microorganismos benéficos.]",
    tag: "Rendimiento",
    img: "https://images.unsplash.com/photo-1458014854819-1a40aa70211c?w=640&q=75&fit=crop",
  },
  {
    id: "compost",
    name: "Compost",
    count: 8,
    description: "[Compost certificado de alta calidad a partir de residuos orgánicos tratados. Mejora estructura, aireación y actividad biológica del suelo.]",
    tag: "Economía circular",
    img: "https://images.unsplash.com/photo-1613036582025-ba1d4ccb3226?w=640&q=75&fit=crop",
  },
  {
    id: "enmiendas",
    name: "Enmiendas",
    count: 7,
    description: "[Correctores de pH, calcáreo agrícola y yeso agrícola. Ajuste y estabilización de condiciones fisicoquímicas del suelo a largo plazo.]",
    tag: "Corrección de suelo",
    img: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=640&q=75&fit=crop",
  },
  {
    id: "nutricion",
    name: "Nutrición vegetal",
    count: 12,
    description: "[Planes nutricionales completos formulados por cultivo. Combinaciones de macro y microelementos para cubrir requerimientos específicos.]",
    tag: "Planes a medida",
    img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=640&q=75&fit=crop",
  },
  {
    id: "tratamiento",
    name: "Tratamiento de suelos",
    count: 9,
    description: "[Inoculantes, biofungicidas y bacterias fijadoras de nitrógeno. Soluciones biológicas para recuperación y regeneración del suelo productivo.]",
    tag: "Biología de suelos",
    img: "https://images.unsplash.com/photo-1492496913980-501348b61469?w=640&q=75&fit=crop",
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
              <div className="aspect-[16/9] relative overflow-hidden border-b border-gray-200">
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-3 right-3 bg-white border border-gray-200 px-2.5 py-1 rounded-full">
                  <span className="text-gray-500 text-xs font-mono">{cat.count} productos</span>
                </div>
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
