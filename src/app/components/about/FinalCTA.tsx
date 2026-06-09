export function FinalCTA() {
  return (
    <section className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 border border-gray-200 rounded-sm overflow-hidden">

          {/* Left — dark block */}
          <div className="lg:col-span-7 bg-gray-950 p-12 md:p-16 relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage: `repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 0,transparent 60px),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 0,transparent 60px)`,
              }}
            />
            <div className="relative z-10">
              <div className="inline-block border border-white/20 px-3 py-1 mb-8">
                <span className="text-white/40 text-xs font-mono uppercase tracking-widest">11 — ¿Trabajamos juntos?</span>
              </div>
              <h2 className="text-white mb-6">
                ¿Querés trabajar junto a Hisoil?
              </h2>
              <p className="text-white/50 leading-relaxed text-lg mb-10 max-w-lg">
                [Texto — El equipo técnico de Hisoil analiza tu situación sin cargo y diseña una solución a medida. Sin compromiso, con respuesta en 24 horas y acompañamiento real en cada etapa.]
              </p>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: "+15", label: "años de experiencia" },
                  { value: "800+", label: "clientes activos" },
                  { value: "2.400+", label: "proyectos realizados" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-xl font-bold text-white">{s.value}</div>
                    <div className="text-white/30 text-xs font-mono">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — CTA block */}
          <div className="lg:col-span-5 bg-white p-12 md:p-16 flex flex-col justify-center gap-4">
            <button className="bg-gray-900 text-white py-4 px-8 rounded-full font-semibold hover:bg-gray-800 transition-colors w-full">
              Solicitar presupuesto
            </button>
            <button className="border border-gray-300 text-gray-700 py-4 px-8 rounded-full font-medium hover:bg-gray-50 transition-colors w-full flex items-center justify-center gap-3">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-gray-500 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Contactar por WhatsApp
            </button>

            <div className="pt-6 border-t border-gray-100 space-y-3">
              {[
                "Diagnóstico inicial sin costo",
                "Respuesta en menos de 24 hs",
                "Sin compromisos en la primera consulta",
              ].map((f) => (
                <div key={f} className="flex items-center gap-3 text-gray-400 text-sm">
                  <div className="w-4 h-4 border border-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                  </div>
                  {f}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
