import { useState } from "react";
import { Sprout, Target, Droplets, Zap, Recycle } from 'lucide-react';

const navCategories = [
  { id: "cultivo", label: "Catálogo por cultivo", Icon: Sprout, count: 24 },
  { id: "necesidad", label: "Catálogo por necesidad", Icon: Target, count: 18 },
  { id: "fertilizantes", label: "Fertilizantes", Icon: Droplets, count: 12 },
  { id: "bioestimulantes", label: "Bioestimulantes", Icon: Zap, count: 9 },
  { id: "compost", label: "Compost", Icon: Recycle, count: 6 },
];

const productGrid = [
  { name: "Producto A — [Nombre técnico]", category: "Fertilizante", tag: "Soja · Maíz" },
  { name: "Producto B — [Nombre técnico]", category: "Bioestimulante", tag: "Horticultura" },
  { name: "Producto C — [Nombre técnico]", category: "Compost", tag: "Universal" },
  { name: "Producto D — [Nombre técnico]", category: "Fertilizante", tag: "Trigo · Cebada" },
  { name: "Producto E — [Nombre técnico]", category: "Bioestimulante", tag: "Frutales" },
  { name: "Producto F — [Nombre técnico]", category: "Fertilizante", tag: "Maíz · Sorgo" },
];

export function ProductsForCrops() {
  const [activeCategory, setActiveCategory] = useState("cultivo");

  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-[1600px] mx-auto w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <div className="inline-block border border-gray-300 px-3 py-1 mb-6">
              <span className="text-gray-700 text-xs font-mono uppercase tracking-widest">07 — Productos</span>
            </div>
            <h2 className="text-oliva mb-3">Productos — Energía para Cultivos</h2>
            <p className="text-gray-700 leading-relaxed">
              [Texto — Portafolio completo de insumos biológicos, fertilizantes y compost para
              maximizar el rendimiento y la salud del suelo en cada campaña.]
            </p>
          </div>
          <button className="self-start md:self-auto text-gray-600 border border-gray-300 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-paja transition-colors whitespace-nowrap">
            Ver catálogo completo →
          </button>
        </div>

        {/* Category navigation cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {navCategories.map((cat) => {
            const { Icon } = cat;
            const isActive = activeCategory === cat.id;
            return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`p-5 rounded-xl border text-left transition-all ${
                isActive
                  ? "bg-oliva border-oliva text-white"
                  : "bg-paja border-gray-300 text-gray-600 hover:border-gray-400"
              }`}
            >
              <div className={`w-10 h-10 rounded-lg backdrop-blur-md border flex items-center justify-center mb-3 transition-all duration-500 ${
                isActive
                  ? "bg-lima/30 border-lima/50"
                  : "bg-oliva/10 border-oliva/20"
              }`}>
                <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-oliva"}`} />
              </div>
              <div className={`font-medium text-sm leading-tight mb-2 ${isActive ? "text-white" : "text-gray-700"}`}>
                {cat.label}
              </div>
              <div className={`text-xs font-mono ${isActive ? "text-white/70" : "text-gray-600"}`}>
                {cat.count} productos
              </div>
            </button>
            );
          })}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productGrid.map((p, i) => (
            <div
              key={i}
              className="border border-gray-300 rounded-sm overflow-hidden flex flex-col hover:border-gray-400 transition-colors group cursor-pointer"
            >
              <div className="aspect-[3/2] border-b border-gray-300 relative overflow-hidden">
                <img
                  src={[
                    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&q=70&fit=crop",
                    "https://images.unsplash.com/photo-1458014854819-1a40aa70211c?w=400&q=70&fit=crop",
                    "https://images.unsplash.com/photo-1613036582025-ba1d4ccb3226?w=400&q=70&fit=crop",
                    "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&q=70&fit=crop",
                    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=70&fit=crop",
                    "https://images.unsplash.com/photo-1492496913980-501348b61469?w=400&q=70&fit=crop",
                  ][i % 6]}
                  alt={p.name}
                  className="w-full h-full object-cover transition-all duration-300"
                />
                <span className="absolute top-3 right-3 bg-white border border-gray-300 text-gray-700 text-xs px-2 py-1 rounded-full font-mono">
                  {p.category}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <p className="text-xs font-mono text-gray-600 mb-1">{p.tag}</p>
                <h4 className="font-medium text-gray-800 text-sm flex-1 mb-4">{p.name}</h4>
                <div className="flex items-center justify-between">
                  <button className="text-gray-700 text-xs border border-gray-300 px-3 py-1.5 rounded-full hover:bg-paja transition-colors">
                    Ver detalle
                  </button>
                  <button className="text-gray-700 text-xs font-medium border border-gray-700 px-3 py-1.5 rounded-full hover:bg-paja transition-colors">
                    Solicitar info
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
