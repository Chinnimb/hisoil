import { Link } from 'react-router';

const highlights = [
  { value: "Hasta 20%", label: "descuento en productos" },
  { value: "500+", label: "miembros activos" },
  { value: "3", label: "planes disponibles" },
  { value: "24 hs", label: "respuesta técnica garantizada" },
];

const quickBenefits = [
  "Descuentos exclusivos en productos",
  "Asesoramiento técnico prioritario",
  "Envíos recurrentes programados",
  "Acceso a recursos y fichas técnicas",
  "Informes técnicos mensuales",
];

export function Membership() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 md:px-10 lg:px-10 bg-white">
      <div className="max-w-[1600px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 border border-gray-200 rounded-sm overflow-hidden">

          {/* Left — dark copy */}
          <div className="lg:col-span-7 bg-gray-950 p-10 md:p-14 relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 14px)`,
              }}
            />
            <div className="relative z-10">
              <div className="inline-block border border-white/20 px-3 py-1 mb-8">
                <span className="text-white/40 text-xs font-mono uppercase tracking-widest">Membresía Hisoil</span>
              </div>
              <h2 className="text-white mb-4">Un programa para clientes que operan en serio.</h2>
              <p className="text-white/50 leading-relaxed mb-10 max-w-lg">
                La Membresía Hisoil es un programa de suscripción para productores, empresas y profesionales que quieren acceso continuo a productos, técnicos y recursos, con beneficios que crecen con el tiempo.
              </p>

              {/* Stat grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 border border-white/10 mb-10">
                {highlights.map((h) => (
                  <div key={h.label} className="bg-gray-950 p-5">
                    <div className="text-white font-bold text-lg mb-0.5">{h.value}</div>
                    <div className="text-white/30 text-xs font-mono">{h.label}</div>
                  </div>
                ))}
              </div>

              {/* Benefits list */}
              <div className="space-y-2.5">
                {quickBenefits.map((b) => (
                  <div key={b} className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full border border-white/20 bg-white/5 flex items-center justify-center flex-shrink-0">
                      <span className="text-white/50 text-[9px]">✓</span>
                    </div>
                    <span className="text-white/50 text-sm">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — CTA */}
          <div className="lg:col-span-5 bg-gray-50 p-10 md:p-14 flex flex-col justify-center gap-4 border-t lg:border-t-0 lg:border-l border-gray-200">
            <div className="mb-2">
              <div className="text-gray-900 font-bold text-xl mb-1">Elegí tu plan.</div>
              <div className="text-gray-500 text-sm leading-relaxed">
                Starter, Profesional o Premium. Podés cambiar de plan en cualquier momento. El primer mes incluye asesoramiento técnico de bienvenida sin cargo.
              </div>
            </div>

            <Link to="/membresia">
              <button className="w-full bg-gray-900 text-white py-4 px-8 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                Ver planes y precios
              </button>
            </Link>
            <Link to="/contacto">
              <button className="w-full border border-gray-300 text-gray-700 py-4 px-8 rounded-full font-medium hover:bg-white transition-colors">
                Solicitar información
              </button>
            </Link>

            <div className="pt-6 border-t border-gray-200 space-y-3">
              {["Activación en menos de 24 horas", "Sin permanencia obligatoria", "Soporte técnico desde el día uno"].map((f) => (
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
