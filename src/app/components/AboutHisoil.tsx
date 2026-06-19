import { Link } from 'react-router';

const milestones = [
  { year: "2008", label: "Fundación de Hisoil en Argentina" },
  { year: "2012", label: "Primera planta de compostaje profesional" },
  { year: "2016", label: "Expansión a 6 provincias del litoral" },
  { year: "2020", label: "Lanzamiento de línea de bioestimulantes" },
  { year: "2023", label: "800+ clientes activos en 12 provincias" },
];

const certs = ["SENASA", "INTA", "IRAM", "Org. Reg."];

export function AboutHisoil() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-[1600px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left — copy */}
          <div className="lg:col-span-5">
            <div className="inline-block border border-gray-300 px-3 py-1 mb-8">
              <span className="text-gray-400 text-xs font-mono uppercase tracking-widest">Sobre Hisoil</span>
            </div>
            <h2 className="text-oliva mb-6">15 años transformando la agricultura argentina.</h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Nacimos con la visión de cerrar el ciclo de nutrientes en el agro: convertir residuos en insumos, mejorar suelos sin química agresiva y acompañar a productores con técnicos que saben lo que hacen.
            </p>
            <p className="text-gray-500 leading-relaxed mb-10">
              Hoy operamos en 12 provincias con más de 800 clientes activos, un equipo de agrónomos especializados y una línea de productos propios certificados por SENASA e INTA.
            </p>

            <div className="flex flex-wrap gap-2 mb-10">
              {certs.map((c) => (
                <div key={c} className="border border-gray-200 rounded-sm px-4 py-2 flex items-center gap-2">
                  <div className="w-4 h-4 bg-paja/40 border border-gray-200 rounded-sm flex items-center justify-center">
                    <span className="text-gray-400 text-[7px] font-mono">✓</span>
                  </div>
                  <span className="text-gray-600 text-sm font-medium">{c}</span>
                </div>
              ))}
            </div>

            <Link to="/nosotros">
              <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-full text-sm font-medium hover:bg-paja/30 transition-colors">
                Conocer la empresa →
              </button>
            </Link>
          </div>

          {/* Right — timeline */}
          <div className="lg:col-span-7">
            {/* Field image strip */}
            <div className="relative w-full h-52 mb-10 overflow-hidden rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1651328846832-d1ab8725bf24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxvcmdhbmljJTIwZmVydGlsaXplciUyMHNvaWwlMjBhZ3JpY3VsdHVyZSUyMGZpZWxkJTIwQXJnZW50aW5hfGVufDF8fHx8MTc4MDkzNTAzNXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Tractor en campo agrícola argentino"
                className="w-full h-full object-cover grayscale"
                style={{ filter: 'grayscale(100%)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-gray-500 text-xs font-mono">Operaciones en campo · Argentina</div>
            </div>
            <div className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-6">Trayectoria</div>
            <div className="space-y-0">
              {milestones.map((m, i) => (
                <div key={m.year} className="flex gap-6 group">
                  {/* Timeline spine */}
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center flex-shrink-0 group-hover:border-gray-900 transition-colors z-10">
                      <span className="text-[10px] font-mono text-gray-400 group-hover:text-oliva transition-colors">{m.year.slice(2)}</span>
                    </div>
                    {i < milestones.length - 1 && <div className="w-px flex-1 bg-gray-200 my-1" style={{ minHeight: 32 }} />}
                  </div>

                  {/* Content */}
                  <div className="pb-8 pt-2 flex-1">
                    <div className="text-oliva font-mono text-sm font-bold mb-0.5">{m.year}</div>
                    <div className="text-gray-500 text-sm">{m.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom stat row */}
            <div className="grid grid-cols-3 gap-px bg-gray-200 border border-gray-200 mt-8">
              {[
                { value: "800+", label: "clientes" },
                { value: "12", label: "provincias" },
                { value: "2.400+", label: "proyectos" },
              ].map((s) => (
                <div key={s.label} className="bg-white p-6 text-center">
                  <div className="text-oliva font-bold text-2xl mb-0.5">{s.value}</div>
                  <div className="text-gray-400 text-xs font-mono">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
