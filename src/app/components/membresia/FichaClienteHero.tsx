import { ClipboardList, Users, Zap } from 'lucide-react';

const IMG_URL =
  'https://images.unsplash.com/photo-1500382017468-9049fed747ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1920';

export function FichaClienteHero() {
  return (
    <section className="relative min-h-[70vh] flex flex-col overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src={IMG_URL} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-noche/85 via-noche/60 to-noche/85" />
      </div>

      {/* Breadcrumb */}
      <div className="relative z-10 border-b border-white/10 px-6 md:px-12 lg:px-20 py-4">
        <div className="max-w-[1600px] mx-auto w-full flex items-center gap-2 text-xs font-mono text-white/50">
          <span>Hisoil</span>
          <span>/</span>
          <span className="text-white/75">Registrate como cliente</span>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center max-w-[1600px] mx-auto w-full px-6 md:px-12 lg:px-20 py-16 md:py-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 border border-white/25 bg-white/5 backdrop-blur-sm px-4 py-1.5 mb-6">
            <ClipboardList className="w-3.5 h-3.5 text-lima" />
            <span className="text-white/85 text-xs font-mono uppercase tracking-[0.2em]">
              Registro de clientes
            </span>
          </div>

          <h1
            className="text-white leading-[1.05] mb-6"
            style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 4rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              textShadow: '0 2px 40px rgba(0,0,0,0.6)',
            }}
          >
            Completá tu ficha para que <span className="text-lima">te contactemos</span>.
          </h1>

          <p className="text-white/85 text-lg leading-relaxed max-w-2xl mb-10">
            Dejanos tus datos y contanos qué necesitás. Nuestro equipo técnico se pone en contacto
            para preparar una cotización a medida y coordinar los próximos pasos.
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-white/15 border border-white/25 flex items-center justify-center">
                <Users className="w-4 h-4 text-lima" />
              </div>
              <div>
                <div className="text-white font-semibold text-sm">Sin costo</div>
                <div className="text-white/60 text-xs font-mono">registro gratuito</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-white/15 border border-white/25 flex items-center justify-center">
                <Zap className="w-4 h-4 text-lima" />
              </div>
              <div>
                <div className="text-white font-semibold text-sm">Respuesta 24-48 hs</div>
                <div className="text-white/60 text-xs font-mono">en horario comercial</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
