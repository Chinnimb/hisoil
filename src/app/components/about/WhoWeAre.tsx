const kpis = [
  { value: "+15", label: "Años de experiencia", sub: "en el sector agro-ambiental" },
  { value: "800+", label: "Clientes atendidos", sub: "en toda la región" },
  { value: "2.400+", label: "Proyectos completados", sub: "con métricas documentadas" },
  { value: "40%", label: "Reducción promedio", sub: "de impacto ambiental por cliente" },
];

export function WhoWeAre() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 md:px-8 bg-gray-50">
      <div className="max-w-[1600px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">

          {/* Left — image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[3/4] rounded-sm overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80&fit=crop"
                alt="Equipo técnico de Hisoil en campo"
                className="w-full h-full object-cover grayscale"
              />
            </div>
            {/* Accent corner */}
            <div className="absolute -bottom-5 -right-5 w-24 h-24 border-r-2 border-b-2 border-gray-300 hidden lg:block" />

            {/* Floating stat card */}
            <div className="absolute -bottom-6 left-6 bg-white border border-gray-200 px-6 py-4 rounded-sm shadow-sm">
              <div className="text-2xl font-bold text-gray-900">+15 años</div>
              <div className="text-gray-500 text-xs font-mono mt-0.5">transformando el agro</div>
            </div>
          </div>

          {/* Right — content */}
          <div className="order-1 lg:order-2 pt-4 lg:pt-0">
            <div className="inline-block border border-gray-300 px-3 py-1 mb-6">
              <span className="text-gray-400 text-xs font-mono uppercase tracking-widest">02 — Quiénes somos</span>
            </div>

            <h2 className="text-gray-900 mb-8">Quiénes somos</h2>

            <div className="space-y-5 mb-12">
              <div>
                <h4 className="text-gray-800 font-semibold text-sm uppercase tracking-wide mb-2">Nuestra historia</h4>
                <p className="text-gray-500 leading-relaxed text-sm">
                  [Historia — Cómo nació Hisoil, cuándo fue fundada, en qué contexto surgió la necesidad que dieron origen a la empresa y cuál fue la visión de sus fundadores desde el primer día.]
                </p>
              </div>
              <div>
                <h4 className="text-gray-800 font-semibold text-sm uppercase tracking-wide mb-2">Qué hace Hisoil</h4>
                <p className="text-gray-500 leading-relaxed text-sm">
                  [Actividad — Descripción de las dos líneas de negocio: productos agro-biológicos para cultivos y servicios de gestión ambiental. Cómo se complementan y por qué funcionan juntas.]
                </p>
              </div>
              <div>
                <h4 className="text-gray-800 font-semibold text-sm uppercase tracking-wide mb-2">A quién ayuda</h4>
                <p className="text-gray-500 leading-relaxed text-sm">
                  [Clientes — Productores agrícolas, empresas agroindustriales, frigoríficos, municipios, cooperativas y cualquier actor que genere residuos orgánicos o quiera mejorar sus suelos.]
                </p>
              </div>
              <div>
                <h4 className="text-gray-800 font-semibold text-sm uppercase tracking-wide mb-2">Qué la diferencia</h4>
                <p className="text-gray-500 leading-relaxed text-sm">
                  [Diferenciación — Combinación única de respaldo técnico científico, cercanía con el cliente y enfoque en economía circular. Resultados documentados, equipo propio, sin intermediarios.]
                </p>
              </div>
            </div>

            {/* KPI cards */}
            <div className="grid grid-cols-2 gap-4">
              {kpis.map((k) => (
                <div key={k.label} className="bg-white border border-gray-200 p-5 rounded-sm">
                  <div className="text-2xl font-bold text-gray-900 mb-1">{k.value}</div>
                  <div className="text-gray-700 text-xs font-semibold mb-0.5">{k.label}</div>
                  <div className="text-gray-400 text-xs font-mono">{k.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
