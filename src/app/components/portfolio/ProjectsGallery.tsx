import { useState } from "react";

const filters = ["Todos", "Agricultura", "Compostaje", "Tratamiento de residuos", "Empresas", "Industria", "Municipios"];

const projects = [
  { id: 1, title: "Recuperación de suelos degradados en zona pampeana", category: "Agricultura", client: "Pool de siembra — 4.800 ha", year: "2024", result: "+22% MO en suelo", size: "large" },
  { id: 2, title: "Planta de compostaje para residuos agroindustriales", category: "Compostaje", client: "Frigorífico del Norte", year: "2024", result: "800 tn/mes", size: "medium" },
  { id: 3, title: "Tratamiento de efluentes industriales fuera de norma", category: "Tratamiento de residuos", client: "Empresa textil — Santa Fe", year: "2023", result: "100% norma", size: "medium" },
  { id: 4, title: "Plan nutricional campaña soja/maíz 2023/24", category: "Agricultura", client: "Cooperativa Agropecuaria", year: "2024", result: "+18 qq/ha", size: "medium" },
  { id: 5, title: "Remediación pasivo ambiental ex-relleno sanitario", category: "Municipios", client: "Municipio de [Ciudad]", year: "2023", result: "Plan aprobado", size: "large" },
  { id: 6, title: "Tratamiento de efluentes para planta láctea", category: "Industria", client: "Empresa láctea — Córdoba", year: "2024", result: "−85% carga orgánica", size: "medium" },
  { id: 7, title: "Compostaje a escala para cadena de supermercados", category: "Compostaje", client: "Jumbo — Red de sucursales", year: "2023", result: "1.200 tn/año", size: "medium" },
  { id: 8, title: "Bioestimulación en horticultura intensiva bajo cubierta", category: "Agricultura", client: "Empresa hortícola — 85 ha", year: "2024", result: "−42% mortalidad", size: "medium" },
  { id: 9, title: "Plan de gestión ambiental empresarial ISO 14001", category: "Empresas", client: "Empresa industrial — Bs.As.", year: "2023", result: "Certificación", size: "medium" },
];

const projectImages = [
  "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=700&q=75&fit=crop",
  "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=700&q=75&fit=crop",
  "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=700&q=75&fit=crop",
  "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=700&q=75&fit=crop",
  "https://images.unsplash.com/photo-1651328846832-d1ab8725bf24?w=700&q=75&fit=crop",
  "https://images.unsplash.com/photo-1492496913980-501348b61469?w=700&q=75&fit=crop",
  "https://images.unsplash.com/photo-1613036582025-ba1d4ccb3226?w=700&q=75&fit=crop",
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=700&q=75&fit=crop",
  "https://images.unsplash.com/photo-1458014854819-1a40aa70211c?w=700&q=75&fit=crop",
];

export function ProjectsGallery() {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filtered = activeFilter === "Todos"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="py-20 md:py-28 px-6 bg-white">
      <div className="w-full">
        {/* Header + filters inline */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
          <div>
            <div className="inline-block border border-gray-300 px-3 py-1 mb-4">
              <span className="text-gray-400 text-xs font-mono uppercase tracking-widest">03–04 — Proyectos</span>
            </div>
            <h2 className="text-gray-900">Galería de proyectos</h2>
          </div>
          <span className="text-gray-400 text-sm font-mono">{filtered.length} casos</span>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all border whitespace-nowrap ${
                activeFilter === f
                  ? "bg-gray-900 text-white border-gray-900"
                  : "bg-white text-gray-500 border-gray-200 hover:border-gray-400"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Image-dominant editorial grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {filtered.map((p, i) => {
            const isLarge = p.size === "large" && i === 0;
            return (
              <div
                key={p.id}
                className={`group relative overflow-hidden cursor-pointer ${isLarge ? "lg:col-span-2 lg:row-span-2" : ""}`}
              >
                <div className={`w-full ${isLarge ? "aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[560px]" : "aspect-[4/3]"} relative overflow-hidden bg-gray-800`}>
                  <img
                    src={projectImages[i % projectImages.length]}
                    alt={p.title}
                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/30 to-transparent" />

                  {/* Always-visible content at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                    {/* Top row — category + year */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-white/10 border border-white/20 text-white/60 text-xs font-mono px-2.5 py-1 rounded-full whitespace-nowrap">
                        {p.category}
                      </span>
                      <span className="text-white/30 text-xs font-mono">{p.year}</span>
                    </div>

                    {/* Title */}
                    <h3 className={`text-white font-semibold leading-snug mb-2 ${isLarge ? "text-xl md:text-2xl" : "text-base"}`}>
                      {p.title}
                    </h3>

                    {/* Client */}
                    <p className="text-white/40 text-xs font-mono mb-4">{p.client}</p>

                    {/* Result pill + CTA — visible on hover on desktop, always on mobile */}
                    <div className="flex items-center justify-between translate-y-2 group-hover:translate-y-0 opacity-70 group-hover:opacity-100 transition-all duration-300">
                      <span className="bg-white text-gray-900 text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap">
                        {p.result}
                      </span>
                      <span className="text-white/60 text-sm font-medium flex items-center gap-1 group-hover:text-white transition-colors">
                        Ver caso <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Load more */}
        <div className="mt-10 text-center">
          <button className="border border-gray-300 text-gray-600 px-8 py-3.5 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors whitespace-nowrap">
            Ver más proyectos (+15)
          </button>
        </div>
      </div>
    </section>
  );
}
