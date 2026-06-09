const team = [
  { name: "Nombre Apellido", role: "Director General", specialty: "Agronomía · MBA · 20+ años", photo: "https://images.unsplash.com/photo-1545830790-68595959c491?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXIlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbCUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc4MDkzNTAzNnww&ixlib=rb-4.1.0&q=80&w=400" },
  { name: "Nombre Apellido", role: "Directora Técnica", specialty: "Ing. Ambiental · ISO 14001 · Gestión RSO", photo: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHNjaWVudGlzdCUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc4MDkzNTA0N3ww&ixlib=rb-4.1.0&q=80&w=400" },
  { name: "Nombre Apellido", role: "Jefe de Agronomía", specialty: "Fitopatología · Nutrición vegetal · Soja/Maíz", photo: "https://images.unsplash.com/photo-1709532927468-2a9fd205cadc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxhZ3Jvbm9taXN0JTIwZmllbGQlMjBjcm9wJTIwaW5zcGVjdGlvbiUyMGFncmljdWx0dXJlJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc4MDkzNTAzNnww&ixlib=rb-4.1.0&q=80&w=400" },
  { name: "Nombre Apellido", role: "Responsable Comercial", specialty: "Ventas B2B · Agro · Negociación técnica", photo: "https://images.unsplash.com/photo-1627829382469-f4bce7df99ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxmYXJtZXIlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbCUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc4MDkzNTAzNnww&ixlib=rb-4.1.0&q=80&w=400" },
  { name: "Nombre Apellido", role: "Especialista en Suelos", specialty: "Edafología · Fertilización · Laboratorio", photo: "https://images.unsplash.com/photo-1492496913980-501348b61469?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2lsJTIwYW5hbHlzaXMlMjBsYWJvcmF0b3J5JTIwc2NpZW5jZSUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc4MDkzNTA0Nnww&ixlib=rb-4.1.0&q=80&w=400" },
  { name: "Nombre Apellido", role: "Ing. Ambiental Senior", specialty: "EIA · Remediación · Normativa ambiental", photo: "https://images.unsplash.com/photo-1709532388333-acf472eae61a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxhZ3Jvbm9taXN0JTIwZmllbGQlMjBjcm9wJTIwaW5zcGVjdGlvbiUyMGFncmljdWx0dXJlJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc4MDkzNTAzNnww&ixlib=rb-4.1.0&q=80&w=400" },
  { name: "Nombre Apellido", role: "Técnico de Campo", specialty: "Diagnóstico in situ · Aplicación · Monitoreo", photo: "https://images.unsplash.com/photo-1580982327559-c1202864eb05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxzb2lsJTIwYW5hbHlzaXMlMjBsYWJvcmF0b3J5JTIwc2NpZW5jZSUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc4MDkzNTA0Nnww&ixlib=rb-4.1.0&q=80&w=400" },
  { name: "Nombre Apellido", role: "Analista de Laboratorio", specialty: "Microbiología · Análisis fisicoquímicos", photo: "https://images.unsplash.com/photo-1631203883080-9e5338ebcf2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHx3b21hbiUyMHNjaWVudGlzdCUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc4MDkzNTA0N3ww&ixlib=rb-4.1.0&q=80&w=400" },
];

export function TeamSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 md:px-8 bg-gray-50">
      <div className="max-w-[1600px] mx-auto w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <div className="inline-block border border-gray-300 px-3 py-1 mb-6">
              <span className="text-gray-400 text-xs font-mono uppercase tracking-widest">08 — Equipo</span>
            </div>
            <h2 className="text-gray-900 mb-3">Las personas detrás de Hisoil</h2>
            <p className="text-gray-500 leading-relaxed">
              [Descripción — Un equipo multidisciplinario de agrónomos, ingenieros ambientales, técnicos de campo y especialistas en biología de suelos comprometidos con cada proyecto.]
            </p>
          </div>
          <div className="flex gap-2 flex-shrink-0">
            <div className="bg-white border border-gray-200 px-4 py-2 rounded-full text-xs font-mono text-gray-500">+35 profesionales</div>
            <div className="bg-white border border-gray-200 px-4 py-2 rounded-full text-xs font-mono text-gray-500">5 disciplinas</div>
          </div>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((member, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-sm overflow-hidden group hover:border-gray-400 hover:shadow-md transition-all cursor-pointer"
            >
              {/* Portrait photo */}
              <div className="aspect-[3/4] bg-gray-200 relative overflow-hidden">
                <img
                  src={member.photo}
                  alt={member.role}
                  className="w-full h-full object-cover object-top grayscale"
                  style={{ filter: 'grayscale(100%)' }}
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/60 transition-all duration-300 flex items-end">
                  <div className="p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 w-full">
                    <p className="text-white text-xs font-mono leading-relaxed">{member.specialty}</p>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="absolute top-3 right-3 w-7 h-7 bg-white/80 border border-gray-200 rounded-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-gray-600 text-xs font-bold">in</span>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="font-semibold text-gray-900 text-sm">{member.name}</div>
                <div className="text-gray-500 text-xs mt-0.5">{member.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center border border-dashed border-gray-300 rounded-sm py-8 px-6">
          <p className="text-gray-500 text-sm mb-4">¿Querés conocer a todo el equipo técnico?</p>
          <button className="border border-gray-400 text-gray-600 px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors">
            Ver todos los profesionales
          </button>
        </div>
      </div>
    </section>
  );
}
