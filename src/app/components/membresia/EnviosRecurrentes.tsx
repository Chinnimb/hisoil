const months = ["ENE", "FEB", "MAR", "ABR", "MAY", "JUN", "JUL", "AGO", "SEP", "OCT", "NOV", "DIC"];

const sampleSchedule = [
  { month: "MAR", products: ["Bioestimulante A", "Corrector pH"], status: "entregado" },
  { month: "ABR", products: ["Inoculante X"], status: "entregado" },
  { month: "MAY", products: ["Bioestimulante A", "Nutriente foliar"], status: "entregado" },
  { month: "JUN", products: ["Corrector pH", "Inoculante X"], status: "próximo" },
  { month: "JUL", products: ["Bioestimulante A"], status: "programado" },
  { month: "AGO", products: ["Nutriente foliar", "Corrector pH"], status: "programado" },
];

const statusStyle: Record<string, string> = {
  entregado: "bg-gray-200 text-gray-600",
  próximo: "bg-gray-900 text-white",
  programado: "bg-gray-100 text-gray-400 border border-gray-200",
};

export function EnviosRecurrentes() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-[1600px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left — copy */}
          <div className="lg:col-span-5">
            <div className="inline-block border border-gray-300 px-3 py-1 mb-8">
              <span className="text-gray-400 text-xs font-mono uppercase tracking-widest">06 — Envíos recurrentes</span>
            </div>
            <h2 className="text-gray-900 mb-6">Los productos llegan cuando los necesitás, sin que tengas que pedirlos.</h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              [Descripción 1 — El sistema de envíos recurrentes de Hisoil te permite programar la entrega de los productos que usás regularmente según el calendario de tu campaña.]
            </p>
            <p className="text-gray-500 leading-relaxed mb-10">
              [Descripción 2 — Podés ajustar cantidades, pausar temporalmente o agregar productos en cualquier momento desde el área de miembros, con al menos 5 días hábiles de anticipación.]
            </p>

            <div className="space-y-4">
              {[
                { title: "Frecuencia configurable", body: "Mensual, quincenal o semanal según tu plan" },
                { title: "Notificaciones automáticas", body: "Aviso previo 7 días antes de cada envío" },
                { title: "Sin costo adicional de envío", body: "Incluido en todos los planes de membresía" },
              ].map((f) => (
                <div key={f.title} className="flex items-start gap-4 p-4 border border-gray-100 rounded-sm bg-gray-50">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mt-1.5 flex-shrink-0" />
                  <div>
                    <div className="text-gray-900 text-sm font-semibold">{f.title}</div>
                    <div className="text-gray-400 text-xs font-mono mt-0.5">{f.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — calendar mockup */}
          <div className="lg:col-span-7">
            <div className="bg-gray-50 border border-gray-200 rounded-sm p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-gray-900 font-semibold">Calendario de envíos</div>
                  <div className="text-gray-400 text-xs font-mono">Campaña 2025 — Plan Profesional</div>
                </div>
                <button className="border border-gray-300 text-gray-500 text-xs font-mono px-3 py-1.5 rounded-full hover:bg-gray-100 transition-colors">
                  Editar calendario
                </button>
              </div>

              {/* Year strip */}
              <div className="grid grid-cols-12 gap-1 mb-8">
                {months.map((m) => {
                  const scheduled = sampleSchedule.find((s) => s.month === m);
                  return (
                    <div
                      key={m}
                      className={`aspect-square flex items-center justify-center rounded-sm text-[9px] font-mono cursor-pointer transition-colors ${
                        scheduled
                          ? scheduled.status === "próximo"
                            ? "bg-gray-900 text-white"
                            : scheduled.status === "entregado"
                            ? "bg-gray-200 text-gray-600"
                            : "bg-gray-100 border border-gray-300 text-gray-500"
                          : "bg-white border border-gray-100 text-gray-300"
                      }`}
                    >
                      {m}
                    </div>
                  );
                })}
              </div>

              {/* Schedule list */}
              <div className="space-y-2">
                {sampleSchedule.map((item) => (
                  <div key={item.month} className="flex items-center justify-between gap-4 py-2 border-b border-gray-100 last:border-0">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-gray-400 w-8">{item.month}</span>
                      <div className="flex flex-wrap gap-1.5">
                        {item.products.map((p) => (
                          <span key={p} className="text-xs text-gray-600 bg-white border border-gray-200 px-2 py-0.5 rounded-full">{p}</span>
                        ))}
                      </div>
                    </div>
                    <span className={`text-[10px] font-mono px-2 py-1 rounded-full flex-shrink-0 ${statusStyle[item.status]}`}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex gap-3 text-[10px] font-mono text-gray-400">
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-gray-200 inline-block" />Entregado</span>
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-gray-900 inline-block" />Próximo</span>
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-gray-100 border border-gray-300 inline-block" />Programado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
