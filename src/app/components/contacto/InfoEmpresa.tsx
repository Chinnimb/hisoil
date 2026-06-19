const infoItems = [
  {
    label: "Dirección",
    value: "[Calle y número]",
    sub: "[Localidad], [Provincia]",
  },
  {
    label: "Ciudad",
    value: "[Localidad]",
    sub: "Provincia de [Provincia], Argentina",
  },
  {
    label: "Teléfono",
    value: "+54 XXX XXX XXXX",
    sub: null,
  },
  {
    label: "Email",
    value: "contacto@hisoil.com",
    sub: null,
  },
  {
    label: "Horarios de atención",
    value: "Lunes a viernes: 8 a 18 hs",
    sub: "Sábados: 8 a 13 hs",
  },
  {
    label: "WhatsApp",
    value: "+54 9 XXX XXX XXXX",
    sub: "Respuesta inmediata en horario comercial",
  },
];

const regions = [
  "Buenos Aires", "Córdoba", "Santa Fe", "Entre Ríos",
  "Mendoza", "La Pampa", "Chaco", "Tucumán",
  "Santiago del Estero", "Misiones", "Corrientes", "Salta",
];

export function InfoEmpresa() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-[1600px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Left — info */}
          <div className="lg:col-span-6">
            <div className="inline-block border border-gray-300 px-3 py-1 mb-8">
              <span className="text-gray-400 text-xs font-mono uppercase tracking-widest">04 — Información de contacto</span>
            </div>
            <h2 className="text-oliva mb-10">Información de contacto.</h2>

            <div className="divide-y divide-gray-100">
              {infoItems.map((item) => (
                <div key={item.label} className="py-5 grid grid-cols-5 gap-4">
                  <div className="col-span-2">
                    <span className="text-gray-400 text-xs font-mono uppercase tracking-widest">{item.label}</span>
                  </div>
                  <div className="col-span-3">
                    <div className="text-oliva font-medium text-sm">{item.value}</div>
                    {item.sub && <div className="text-gray-400 text-xs font-mono mt-0.5">{item.sub}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — coverage */}
          <div className="lg:col-span-6">
            <div className="bg-paja/30 border border-gray-200 rounded-sm p-8 h-full">
              <div className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-2">Cobertura nacional</div>
              <div className="text-oliva font-semibold mb-1">Operamos en 12 provincias</div>
              <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                Contamos con representantes técnicos y logística propia en todo el país.
              </p>

              {/* Provinces grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-8">
                {regions.map((r) => (
                  <div key={r} className="bg-white border border-gray-200 rounded-sm px-3 py-2">
                    <span className="text-gray-600 text-xs">{r}</span>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="bg-paja/40 border border-gray-200 rounded-sm aspect-[16/9] flex flex-col items-center justify-center gap-2">
                <div className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <span className="text-gray-300 text-xs font-mono">Mapa de cobertura · placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
