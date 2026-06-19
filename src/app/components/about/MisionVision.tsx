export function MisionVision() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-[1600px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Misión — dark */}
          <div className="bg-oliva rounded-sm p-10 md:p-14 relative overflow-hidden flex flex-col">
            {/* Grid texture */}
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage: `repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 0,transparent 56px),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 0,transparent 56px)`,
              }}
            />
            <div className="relative z-10 flex flex-col flex-1">
              <div className="inline-block border border-white/20 px-3 py-1 mb-8 self-start">
                <span className="text-white/40 text-xs font-mono uppercase tracking-widest">03 — Misión</span>
              </div>

              {/* Big quote mark */}
              <div className="text-white/5 font-serif text-[120px] leading-none select-none -mt-4 mb-2">"</div>

              <h2 className="text-white mb-6">Nuestra misión</h2>
              <p className="text-white/50 leading-relaxed text-lg flex-1">
                [Misión — Generar valor real y medible para nuestros clientes a través de productos técnicos y servicios ambientales que transformen residuos en recursos, mejoren suelos y contribuyan a un sistema productivo más eficiente y sostenible.]
              </p>

              <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-3 gap-4">
                {["Impacto real", "Sostenibilidad", "Valor medible"].map((v) => (
                  <div key={v} className="text-center">
                    <div className="w-8 h-8 border border-white/20 rounded-sm mx-auto mb-2 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white/30 rounded-full" />
                    </div>
                    <div className="text-white/40 text-xs font-mono">{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Visión — light */}
          <div className="bg-paja/30 border border-gray-200 rounded-sm p-10 md:p-14 flex flex-col relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `repeating-linear-gradient(0deg,#000 0,#000 1px,transparent 0,transparent 56px),repeating-linear-gradient(90deg,#000 0,#000 1px,transparent 0,transparent 56px)`,
              }}
            />
            <div className="relative z-10 flex flex-col flex-1">
              <div className="inline-block border border-gray-300 px-3 py-1 mb-8 self-start">
                <span className="text-gray-400 text-xs font-mono uppercase tracking-widest">04 — Visión</span>
              </div>

              <div className="text-gray-100 font-serif text-[120px] leading-none select-none -mt-4 mb-2">"</div>

              <h2 className="text-oliva mb-6">Nuestra visión</h2>
              <p className="text-gray-500 leading-relaxed text-lg flex-1">
                [Visión — Ser la empresa de referencia en soluciones agro-ambientales en Latinoamérica, reconocida por la innovación de sus productos, la solidez de su equipo técnico y su contribución concreta a la transición hacia una economía circular en el sector agropecuario e industrial.]
              </p>

              <div className="mt-10 pt-8 border-t border-gray-200 grid grid-cols-3 gap-4">
                {["Innovación", "Liderazgo", "Futuro"].map((v) => (
                  <div key={v} className="text-center">
                    <div className="w-8 h-8 border border-gray-300 rounded-sm mx-auto mb-2 flex items-center justify-center bg-white">
                      <div className="w-2 h-2 bg-gray-400 rounded-full" />
                    </div>
                    <div className="text-gray-400 text-xs font-mono">{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
