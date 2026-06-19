const clients = [
  { id: 1, name: "Jumbo", sector: "Retail / Horticultura" },
  { id: 2, name: "CMPC", sector: "Forestal / Industria" },
  { id: 3, name: "Cliente 03", sector: "Agroindustria" },
  { id: 4, name: "Cliente 04", sector: "Ganadería" },
  { id: 5, name: "Cliente 05", sector: "Municipio" },
  { id: 6, name: "Cliente 06", sector: "Frigorífico" },
  { id: 7, name: "Cliente 07", sector: "Cooperativa" },
  { id: 8, name: "Cliente 08", sector: "Pool de siembra" },
  { id: 9, name: "Cliente 09", sector: "Horticultura" },
  { id: 10, name: "Cliente 10", sector: "Industria textil" },
  { id: 11, name: "Cliente 11", sector: "Cítricos" },
  { id: 12, name: "Cliente 12", sector: "Tambos" },
];

export function ClientLogoWall() {
  return (
    <section className="py-20 md:py-24 px-6 bg-paja border-b border-gray-200">
      <div className="max-w-[1600px] mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block border border-gray-300 px-3 py-1 mb-5">
            <span className="text-gray-600 text-xs font-mono uppercase tracking-widest">02 — Clientes</span>
          </div>
          <h2 className="text-oliva mb-3">Empresas que confían en Hisoil</h2>
          <p className="text-gray-600 max-w-xl mx-auto leading-relaxed text-sm">
            [Descripción — Empresas líderes, productores y organismos públicos que eligieron a Hisoil como socio técnico en sus proyectos.]
          </p>
        </div>

        {/* Logo grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-px bg-gray-200 border border-gray-200">
          {clients.map((c) => (
            <div
              key={c.id}
              className="bg-white aspect-[5/3] flex flex-col items-center justify-center p-4 group hover:bg-paja transition-colors cursor-pointer"
            >
              <div className="w-16 h-9 bg-paja border border-gray-300 rounded-sm flex items-center justify-center mb-2 group-hover:border-gray-300 transition-colors">
                <span className="text-gray-500 text-[10px] font-mono uppercase tracking-widest">LOGO</span>
              </div>
              <span className="text-gray-500 text-[9px] font-mono text-center leading-tight">{c.name}</span>
            </div>
          ))}
        </div>

        {/* Sector pills */}
        <div className="mt-8 flex flex-wrap gap-2 justify-center">
          {["Agroindustria", "Ganadería", "Horticultura", "Forestal", "Municipios", "Industria", "Cooperativas"].map((s) => (
            <span key={s} className="bg-white border border-gray-300 text-gray-600 text-xs font-mono px-3 py-1.5 rounded-full">
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
