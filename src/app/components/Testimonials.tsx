import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "Trabajar con Hisoil transformó completamente nuestra operación. El acompañamiento técnico fue excelente y los resultados superaron nuestras expectativas. En solo una campaña vimos mejoras significativas en la calidad del suelo.",
    author: "Juan Carlos Méndez",
    role: "Productor Agropecuario",
    company: "Estancia El Mirador · Buenos Aires",
    stat: "+42%",
    statLabel: "rendimiento soja",
    plan: "Plan anual · Asesoramiento + Compost",
    avatar: "https://images.unsplash.com/photo-1545830790-68595959c491?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXIlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbCUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc4MDkzNTAzNnww&ixlib=rb-4.1.0&q=80&w=200",
  },
  {
    quote: "La solución de compostaje que implementamos nos permitió convertir un problema en una oportunidad. Ahora generamos nuestro propio fertilizante y reducimos costos operativos. El ROI fue evidente desde el primer año.",
    author: "María Fernández",
    role: "Directora de Operaciones",
    company: "AgroNorte SA · Santa Fe",
    stat: "$850k",
    statLabel: "ahorro anual documentado",
    plan: "Sistema de compostaje · Feedlot",
    avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHNjaWVudGlzdCUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc4MDkzNTA0N3ww&ixlib=rb-4.1.0&q=80&w=200",
  },
  {
    quote: "El equipo de agrónomos de Hisoil nos brindó asesoramiento de primer nivel. Sus productos orgánicos son de excelente calidad y el servicio postventa es impecable. Los recomiendo sin dudas a cualquier productor.",
    author: "Roberto Domínguez",
    role: "Ingeniero Agrónomo",
    company: "Campo Verde · Córdoba",
    stat: "+38%",
    statLabel: "productividad maíz",
    plan: "Bioestimulante + Diagnóstico técnico",
    avatar: "https://images.unsplash.com/photo-1627829382469-f4bce7df99ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxmYXJtZXIlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbCUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc4MDkzNTAzNnww&ixlib=rb-4.1.0&q=80&w=200",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const t = testimonials[current];

  return (
    <section className="py-24 md:py-32 px-6 bg-gray-950">
      <div className="w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="inline-block border border-white/20 px-3 py-1 mb-6">
              <span className="text-white/40 text-xs font-mono uppercase tracking-widest">Testimonios</span>
            </div>
            <h2 className="text-white">Lo que dicen nuestros clientes.</h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)}
              className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <ChevronLeft size={16} className="text-white/60" />
            </button>
            <button
              onClick={() => setCurrent((c) => (c + 1) % testimonials.length)}
              className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <ChevronRight size={16} className="text-white/60" />
            </button>
          </div>
        </div>

        {/* Testimonial block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border border-white/10 rounded-sm overflow-hidden">
          {/* Result — left */}
          <div className="lg:col-span-3 bg-white/5 border-b lg:border-b-0 lg:border-r border-white/10 p-8 flex flex-col justify-between">
            <div>
              <div className="text-white/30 text-xs font-mono uppercase tracking-widest mb-4">Resultado verificado</div>
              <div className="text-white font-bold leading-none mb-2" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>{t.stat}</div>
              <div className="text-white/60 font-medium mb-4">{t.statLabel}</div>
              <div className="bg-white/10 border border-white/10 rounded-sm px-3 py-2">
                <span className="text-white/40 text-[10px] font-mono">{t.plan}</span>
              </div>
            </div>
            {/* Dots */}
            <div className="flex gap-1.5 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1 rounded-full transition-all ${i === current ? "w-8 bg-white" : "w-3 bg-white/20"}`}
                />
              ))}
            </div>
          </div>

          {/* Quote — center */}
          <div className="lg:col-span-7 p-10 md:p-14">
            <div className="text-white/10 font-serif text-8xl leading-none mb-4 select-none">"</div>
            <p className="text-white/80 text-lg leading-relaxed mb-10">{t.quote}</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20 flex-shrink-0">
                <img src={t.avatar} alt={t.author} className="w-full h-full object-cover" style={{ filter: 'grayscale(100%)' }} />
              </div>
              <div>
                <div className="text-white font-semibold">{t.author}</div>
                <div className="text-white/40 text-sm">{t.role} — {t.company}</div>
              </div>
            </div>
          </div>

          {/* Avatar column — right */}
          <div className="hidden lg:flex lg:col-span-2 flex-col gap-2 p-4 bg-white/[0.02] border-l border-white/10">
            {testimonials.map((tm, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`flex-1 border rounded-sm p-3 text-left transition-all flex flex-col gap-2 ${
                  i === current ? "bg-white/10 border-white/30" : "border-white/5 hover:border-white/15"
                }`}
              >
                <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20 flex-shrink-0">
                  <img src={tm.avatar} alt={tm.author} className="w-full h-full object-cover" style={{ filter: 'grayscale(100%)' }} />
                </div>
                <div className="text-white/60 text-xs font-semibold truncate">{tm.author.split(" ")[0]}</div>
                <div className={`text-sm font-bold ${i === current ? "text-white" : "text-white/30"}`}>{tm.stat}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
