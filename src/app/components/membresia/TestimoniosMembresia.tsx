import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "[Testimonio — Desde que sumamos la membresía Hisoil, dejamos de preocuparnos por cuándo pedir los insumos. Llegan cuando los necesitamos, con el asesoramiento técnico que nos ayuda a decidir bien.]",
    name: "Ing. [Nombre]",
    role: "Responsable técnico, [Empresa A]",
    plan: "Plan Profesional",
    years: "2 años de membresía",
    stats: { label: "Ahorro anual estimado", value: "+18%" },
  },
  {
    quote: "[Testimonio — El asesoramiento prioritario marcó la diferencia en la campaña de maíz. Teníamos un problema de pH que resolvimos en 24 horas con el equipo técnico. Sin membresía, eso hubiera tardado semanas.]",
    name: "[Nombre]",
    role: "Productor independiente, [Zona]",
    plan: "Plan Profesional",
    years: "1 año de membresía",
    stats: { label: "Reducción en costos de insumos", value: "−12%" },
  },
  {
    quote: "[Testimonio — La posibilidad de programar los envíos por campaña fue el cambio más importante para nuestra operación. Ahora planificamos con anticipación y el resultado se nota en los márgenes.]",
    name: "Lic. [Nombre]",
    role: "Gerente de producción, [Empresa B]",
    plan: "Plan Premium",
    years: "3 años de membresía",
    stats: { label: "Operaciones anuales sin interrupciones", value: "100%" },
  },
];

export function TestimoniosMembresia() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const t = testimonials[current];

  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 md:px-8 bg-white">
      <div className="max-w-[1600px] mx-auto w-full">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block border border-gray-300 px-3 py-1 mb-6">
            <span className="text-gray-400 text-xs font-mono uppercase tracking-widest">08 — Testimonios</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-gray-900">Lo que dicen nuestros miembros.</h2>
            <div className="flex gap-2">
              <button onClick={prev} className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
                <ChevronLeft size={16} className="text-gray-500" />
              </button>
              <button onClick={next} className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
                <ChevronRight size={16} className="text-gray-500" />
              </button>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border border-gray-200 rounded-sm overflow-hidden">
          {/* Left — quote */}
          <div className="lg:col-span-8 p-10 md:p-14">
            <div className="text-gray-100 font-serif text-8xl leading-none mb-6 select-none">"</div>
            <p className="text-gray-700 text-lg leading-relaxed mb-10">{t.quote}</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-300 flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1545830790-68595959c491?w=100&q=70&fit=crop&crop=face"
                  alt={t.name}
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div>
                <div className="text-gray-900 font-semibold">{t.name}</div>
                <div className="text-gray-400 text-sm">{t.role}</div>
              </div>
            </div>
          </div>

          {/* Right — data */}
          <div className="lg:col-span-4 bg-gray-50 border-t lg:border-t-0 lg:border-l border-gray-200 p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-sm px-4 py-3">
                <div className="text-gray-400 text-xs font-mono mb-0.5">Plan activo</div>
                <div className="text-gray-900 font-semibold text-sm">{t.plan}</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-sm px-4 py-3">
                <div className="text-gray-400 text-xs font-mono mb-0.5">Antigüedad</div>
                <div className="text-gray-900 font-semibold text-sm">{t.years}</div>
              </div>
              <div className="bg-gray-950 border border-gray-800 rounded-sm px-4 py-4">
                <div className="text-white/40 text-xs font-mono mb-1">{t.stats.label}</div>
                <div className="text-white font-bold text-2xl">{t.stats.value}</div>
              </div>
            </div>

            {/* Dots */}
            <div className="flex gap-1.5 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all ${i === current ? "w-6 bg-gray-900" : "w-1.5 bg-gray-300"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
