const quickBenefits = [
  "Descuentos exclusivos en productos",
  "Asesoramiento técnico prioritario",
  "Envíos recurrentes programados",
  "Acceso a recursos y fichas técnicas",
  "Atención preferencial 24 hs",
];

export function MembresiaHero() {
  return (
    <section className="bg-oliva min-h-screen flex flex-col">
      {/* Top label */}
      <div className="border-b border-white/10 px-6 py-4">
        <div className="w-full flex items-center gap-2 text-xs font-mono text-white/30">
          <span>Inicio</span><span>/</span>
          <span className="text-white/60">Membresía</span>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 max-w-[1600px] mx-auto w-full px-6 py-16 md:py-24 gap-12 items-center">

        {/* Left — copy */}
        <div className="lg:col-span-6 flex flex-col">
          <div className="inline-block border border-white/20 px-3 py-1.5 mb-8 self-start">
            <span className="text-white/40 text-xs font-mono uppercase tracking-[0.2em]">Programa de Membresía</span>
          </div>

          <h1 className="text-white mb-6 leading-[1.05]">
            Potenciá tus resultados con la Membresía Hisoil.
          </h1>

          <p className="text-white/50 text-lg leading-relaxed mb-10 max-w-lg">
            [Subtítulo — Un programa de suscripción diseñado para clientes que quieren acceso prioritario a productos, asesoramiento técnico continuo y beneficios exclusivos en cada campaña.]
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-12">
            <button className="bg-white text-oliva px-8 py-4 rounded-full font-semibold hover:bg-paja/40 transition-colors">
              Unirme ahora
            </button>
            <button className="border border-white/30 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors">
              Solicitar información
            </button>
          </div>

          {/* Quick benefits */}
          <div className="space-y-3">
            {quickBenefits.map((b) => (
              <div key={b} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-white/60 text-[10px]">✓</span>
                </div>
                <span className="text-white/50 text-sm">{b}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — visual */}
        <div className="lg:col-span-6">
          <div className="bg-white/5 border border-white/10 rounded-sm p-8 md:p-10">
            {/* Membership card mockup */}
            <div className="bg-white/10 border border-white/20 rounded-sm p-6 mb-6 relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage: `repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 12px)`,
                }}
              />
              <div className="relative z-10 flex items-start justify-between mb-8">
                <div>
                  <div className="text-white/30 text-xs font-mono uppercase tracking-widest mb-1">Miembro Hisoil</div>
                  <div className="text-white font-bold text-lg">Plan Profesional</div>
                </div>
                <div className="bg-white/10 border border-white/20 px-3 py-1.5 rounded-full">
                  <span className="text-white/60 text-xs font-mono">⭐ Activo</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "Ciclo", value: "Mensual" },
                  { label: "Próximo envío", value: "15 jun" },
                  { label: "Descuento", value: "15%" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-white/30 text-xs font-mono mb-0.5">{s.label}</div>
                    <div className="text-white font-semibold text-sm">{s.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-px bg-white/10">
              {[
                { value: "500+", label: "miembros activos" },
                { value: "3", label: "planes disponibles" },
                { value: "15%", label: "ahorro promedio" },
              ].map((s) => (
                <div key={s.label} className="bg-oliva p-5 text-center">
                  <div className="text-white font-bold text-xl mb-1">{s.value}</div>
                  <div className="text-white/30 text-xs font-mono">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Scroll hint */}
            <div className="mt-6 text-center">
              <p className="text-white/25 text-xs font-mono">Ver planes y precios ↓</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
