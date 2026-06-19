import { useState } from "react";

const needs = [
  {
    id: "crecimiento",
    label: "Mejorar crecimiento",
    icon: "🌱",
    description: "Estimular el desarrollo vegetativo, raíces y biomasa foliar desde las primeras etapas del cultivo.",
    products: [
      { name: "Bioestimulante Radicular Plus", img: "https://images.unsplash.com/photo-1458014854819-1a40aa70211c?w=300&q=70&fit=crop" },
      { name: "Aminoácidos Concentrados", img: "https://images.unsplash.com/photo-1602928298849-325cec8771c0?w=300&q=70&fit=crop" },
      { name: "Activador Foliar Pro", img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&q=70&fit=crop" },
    ],
    productCount: 8,
  },
  {
    id: "rendimiento",
    label: "Aumentar rendimiento",
    icon: "📈",
    description: "Maximizar llenado de grano, cantidad de frutos y toneladas por hectárea en cereales y oleaginosas.",
    products: [
      { name: "Fertilizante NPK Balance", img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=300&q=70&fit=crop" },
      { name: "Potasio Activado", img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=300&q=70&fit=crop" },
      { name: "Zinc Quelado", img: "https://images.unsplash.com/photo-1492496913980-501348b61469?w=300&q=70&fit=crop" },
    ],
    productCount: 12,
  },
  {
    id: "suelo",
    label: "Mejorar suelo",
    icon: "🪱",
    description: "Recuperar estructura, aumentar actividad biológica y mejorar capacidad de retención hídrica del suelo.",
    products: [
      { name: "Compost Premium A", img: "https://images.unsplash.com/photo-1613036582025-ba1d4ccb3226?w=300&q=70&fit=crop" },
      { name: "Inoculante Microbiano", img: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=300&q=70&fit=crop" },
      { name: "Humus de Lombriz", img: "https://images.unsplash.com/photo-1697047070930-12043019a0d5?w=300&q=70&fit=crop" },
    ],
    productCount: 9,
  },
  {
    id: "nutrientes",
    label: "Recuperar nutrientes",
    icon: "🔄",
    description: "Reponer macronutrientes y microelementos perdidos por extracción del cultivo o lixiviación del suelo.",
    products: [
      { name: "Enmienda Calcárea", img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&q=70&fit=crop" },
      { name: "Azufre Granulado", img: "https://images.unsplash.com/photo-1458014854819-1a40aa70211c?w=300&q=70&fit=crop" },
      { name: "Microelemento Mix", img: "https://images.unsplash.com/photo-1492496913980-501348b61469?w=300&q=70&fit=crop" },
    ],
    productCount: 7,
  },
  {
    id: "compostaje",
    label: "Compostaje",
    icon: "♻️",
    description: "Transformar residuos orgánicos propios en enmienda de calidad para reducir costos y cerrar el ciclo.",
    products: [
      { name: "Acelerador Compost", img: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=300&q=70&fit=crop" },
      { name: "Inoculante Compostador", img: "https://images.unsplash.com/photo-1613036582025-ba1d4ccb3226?w=300&q=70&fit=crop" },
      { name: "Correctivo pH Orgánico", img: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=300&q=70&fit=crop" },
    ],
    productCount: 5,
  },
  {
    id: "sustentable",
    label: "Agricultura sustentable",
    icon: "🌍",
    description: "Reducir la dependencia de agroquímicos convencionales con soluciones biológicas certificadas.",
    products: [
      { name: "Biofungicida Bacillus", img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=300&q=70&fit=crop" },
      { name: "Biofertilizante Rizobio", img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=300&q=70&fit=crop" },
      { name: "Azospirillum Líquido", img: "https://images.unsplash.com/photo-1602928298849-325cec8771c0?w=300&q=70&fit=crop" },
    ],
    productCount: 10,
  },
];

export function NeedSelector() {
  const [activeNeed, setActiveNeed] = useState("rendimiento");
  const active = needs.find((n) => n.id === activeNeed)!;

  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 bg-oliva text-white">
      <div className="max-w-[1600px] mx-auto w-full">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <div className="inline-block border border-white/20 px-3 py-1 mb-6">
            <span className="text-white/65 text-xs font-mono uppercase tracking-widest">03 — Descubrí por necesidad</span>
          </div>
          <h2 className="text-white mb-4">¿Qué necesitás mejorar?</h2>
          <p className="text-white/65 leading-relaxed">
            [Descripción — Elegí el objetivo de tu campaña y te mostramos los productos más adecuados para cada situación.]
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left — need buttons */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {needs.map((need) => (
              <button
                key={need.id}
                onClick={() => setActiveNeed(need.id)}
                className={`flex items-center gap-4 p-5 rounded-sm border text-left transition-all ${
                  activeNeed === need.id
                    ? "bg-white text-oliva border-white"
                    : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:border-white/20"
                }`}
              >
                <div className={`w-10 h-10 rounded-sm flex items-center justify-center text-xl flex-shrink-0 ${
                  activeNeed === need.id ? "bg-paja" : "bg-white/5"
                }`}>
                  {need.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className={`font-medium text-sm ${activeNeed === need.id ? "text-oliva" : "text-white/70"}`}>
                    {need.label}
                  </div>
                  <div className={`text-xs font-mono mt-0.5 ${activeNeed === need.id ? "text-gray-700" : "text-white/55"}`}>
                    {need.productCount} productos
                  </div>
                </div>
                {activeNeed === need.id && (
                  <span className="text-gray-600 text-sm flex-shrink-0">→</span>
                )}
              </button>
            ))}
          </div>

          {/* Right — active need detail */}
          <div className="lg:col-span-8">
            <div className="bg-white/5 border border-white/10 rounded-sm p-8 md:p-10 h-full flex flex-col">
              {/* Need header */}
              <div className="flex items-start gap-5 mb-8 pb-8 border-b border-white/10">
                <div className="w-16 h-16 bg-white/10 rounded-sm flex items-center justify-center text-3xl flex-shrink-0">
                  {active.icon}
                </div>
                <div>
                  <h3 className="text-white text-2xl font-semibold mb-2">{active.label}</h3>
                  <p className="text-white/70 leading-relaxed">{active.description}</p>
                </div>
              </div>

              {/* Recommended products */}
              <div className="flex-1">
                <div className="text-xs font-mono text-white/55 uppercase tracking-widest mb-4">
                  Productos recomendados — {active.productCount} resultados
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  {active.products.map((p) => (
                    <div
                      key={p.name}
                      className="bg-white/5 border border-white/10 rounded-sm overflow-hidden hover:border-white/30 transition-colors cursor-pointer group"
                    >
                      <div className="aspect-square relative overflow-hidden">
                        <img
                          src={p.img}
                          alt={p.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      </div>
                      <div className="p-4">
                        <div className="text-white/70 text-sm font-medium leading-tight mb-2 group-hover:text-white transition-colors">{p.name}</div>
                        <div className="text-white/25 text-xs font-mono">Ver detalle →</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="bg-white text-oliva px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-paja transition-colors">
                  Ver los {active.productCount} productos
                </button>
                <button className="border border-white/20 text-white/60 px-7 py-3.5 rounded-full text-sm hover:bg-white/10 transition-colors">
                  Solicitar asesoramiento
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
