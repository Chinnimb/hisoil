const clients = [
  { name: "Jumbo", sector: "Retail" },
  { name: "CMPC", sector: "Forestal" },
  { name: "Cliente 03", sector: "Agroindustria" },
  { name: "Cliente 04", sector: "Ganadería" },
  { name: "Cliente 05", sector: "Municipio" },
  { name: "Cliente 06", sector: "Frigorífico" },
  { name: "Cliente 07", sector: "Cooperativa" },
  { name: "Cliente 08", sector: "Pool de siembra" },
  { name: "Cliente 09", sector: "Horticultura" },
  { name: "Cliente 10", sector: "Industria textil" },
  { name: "Cliente 11", sector: "Cítricos" },
  { name: "Cliente 12", sector: "Tambos" },
];

const alianzas = [
  { name: "SENASA", type: "Organismo regulador" },
  { name: "INTA", type: "Instituto técnico" },
  { name: "Alianza 03", type: "Cámara sectorial" },
  { name: "Alianza 04", type: "Universidad" },
];

export function ClientesAlianzas() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 bg-gray-50">
      <div className="max-w-[1600px] mx-auto w-full">
        {/* Header */}
        <div className="mb-14">
          <div className="inline-block border border-gray-300 px-3 py-1 mb-6">
            <span className="text-gray-400 text-xs font-mono uppercase tracking-widest">10 — Clientes y alianzas</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-gray-900">Clientes y alianzas estratégicas</h2>
            <p className="text-gray-400 text-sm font-mono">800+ clientes activos · 12 provincias</p>
          </div>
        </div>

        {/* Clients logo wall */}
        <div className="mb-4">
          <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-4">Empresas que confían en Hisoil</p>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-px bg-gray-200 border border-gray-200">
            {clients.map((c, i) => (
              <div
                key={i}
                className="bg-white aspect-[5/3] flex flex-col items-center justify-center p-4 hover:bg-gray-50 transition-colors cursor-pointer group"
              >
                <div className="w-16 h-9 bg-gray-50 border border-gray-200 rounded-sm flex items-center justify-center mb-1.5 group-hover:border-gray-400 transition-colors">
                  <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">{c.name.slice(0, 6)}</span>
                </div>
                <span className="text-gray-400 text-[9px] font-mono text-center">{c.sector}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Alianzas strip */}
        <div>
          <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-4 mt-10">Alianzas y organismos</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {alianzas.map((a, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-sm p-5 flex flex-col items-center gap-3 hover:border-gray-400 transition-colors">
                <div className="w-20 h-10 bg-gray-50 border border-gray-200 rounded-sm flex items-center justify-center">
                  <span className="text-gray-600 text-xs font-bold uppercase tracking-wider">{a.name}</span>
                </div>
                <div className="text-center">
                  <div className="text-gray-700 text-sm font-semibold">{a.name}</div>
                  <div className="text-gray-400 text-xs font-mono mt-0.5">{a.type}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sector pills */}
        <div className="mt-10 flex flex-wrap gap-2 justify-center">
          {["Agroindustria", "Ganadería", "Horticultura", "Forestal", "Municipios", "Industria", "Cooperativas", "Retail"].map((s) => (
            <span key={s} className="bg-white border border-gray-200 text-gray-400 text-xs font-mono px-3 py-1.5 rounded-full">
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
