import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const moreProjects = [
  { id: 1, title: "Inoculación de soja en siembra directa — 8.000 ha", category: "Agricultura", client: "Pool de siembra — Entre Ríos", result: "+12% nodulación efectiva", tone: "bg-gray-700" },
  { id: 2, title: "Compostaje de biorresiduos municipales", category: "Municipios", client: "Municipio de [Ciudad]", result: "600 tn/mes", tone: "bg-gray-600" },
  { id: 3, title: "Biorremediación de suelo contaminado con hidrocarburos", category: "Industria", client: "Estación de servicio — Córdoba", result: "Pasivo cerrado 14 meses", tone: "bg-gray-800" },
  { id: 4, title: "Nutrición vegetal en cultivo de papa bajo riego", category: "Agricultura", client: "Empresa hortícola — Mendoza", result: "+28% calibre comercial", tone: "bg-gray-700" },
  { id: 5, title: "Tratamiento de lixiviados en relleno sanitario", category: "Municipios", client: "Consorcio regional — Santa Fe", result: "Cumplimiento normativo", tone: "bg-gray-800" },
  { id: 6, title: "Bioestimulación en citrus — implantación y fructificación", category: "Agricultura", client: "Empresa citrícola — Tucumán", result: "+15% rendimiento", tone: "bg-gray-600" },
  { id: 7, title: "Gestión de efluentes para feedlot 8.000 cab.", category: "Empresas", client: "Empresa ganadera — Córdoba", result: "0 infracciones en 2 años", tone: "bg-gray-700" },
  { id: 8, title: "Producción de compost para programa de huerta social", category: "Municipios", client: "Municipio de [Ciudad]", result: "200 familias beneficiadas", tone: "bg-gray-600" },
];

const PAGE_SIZE = 4;

export function MoreProjects() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(moreProjects.length / PAGE_SIZE);
  const visible = moreProjects.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  return (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="inline-block border border-white/20 px-3 py-1 mb-4">
              <span className="text-white/40 text-xs font-mono uppercase tracking-widest">10 — Más proyectos</span>
            </div>
            <h2 className="text-white">Seguí explorando casos</h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-white/30 text-sm font-mono">{page + 1}/{totalPages}</span>
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:border-white/50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft size={16} className="text-white/60" />
            </button>
            <button
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:border-white/50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight size={16} className="text-white/60" />
            </button>
          </div>
        </div>

        {/* Image-dominant 2×2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {visible.map((p) => (
            <div
              key={p.id}
              className={`${p.tone} relative overflow-hidden cursor-pointer group aspect-[16/9]`}
            >
              {/* Image placeholder fill */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-10 h-10 border border-dashed border-white/15 rounded-sm mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white/15 text-lg">📷</span>
                  </div>
                  <p className="text-white/10 text-[9px] font-mono uppercase tracking-widest">{p.category}</p>
                </div>
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-white/10 border border-white/20 text-white/50 text-xs font-mono px-2.5 py-1 rounded-full">
                    {p.category}
                  </span>
                  <span className="bg-white text-gray-900 text-xs font-bold px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200">
                    {p.result}
                  </span>
                </div>
                <h3 className="text-white font-semibold text-base leading-snug mb-1">
                  {p.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-white/35 text-xs font-mono">{p.client}</span>
                  <span className="text-white/50 text-sm flex items-center gap-1 group-hover:text-white transition-colors">
                    Ver caso <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`rounded-full transition-all ${i === page ? "w-6 h-2 bg-white/60" : "w-2 h-2 bg-white/20 hover:bg-white/40"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
