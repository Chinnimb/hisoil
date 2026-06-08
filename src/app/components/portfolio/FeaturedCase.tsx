const metrics = [
  { value: "−85%", label: "Reducción de carga contaminante", sub: "vs. estado inicial" },
  { value: "100%", label: "Cumplimiento normativo", sub: "certificado por autoridad provincial" },
  { value: "8 meses", label: "Plazo de implementación", sub: "desde diagnóstico a operación" },
  { value: "−40%", label: "Costo de disposición final", sub: "respecto a solución anterior" },
];

const timeline = [
  { step: "01", phase: "Diagnóstico", weeks: "Semanas 1–2", desc: "[Auditoría de efluentes, muestreo y análisis fisicoquímico. Identificación de incumplimientos y riesgos regulatorios.]" },
  { step: "02", phase: "Propuesta técnica", weeks: "Semanas 3–4", desc: "[Diseño del sistema de tratamiento, selección de tecnología y presupuesto detallado con alternativas.]" },
  { step: "03", phase: "Implementación", weeks: "Semanas 5–20", desc: "[Instalación de planta modular, puesta en marcha y ajuste de parámetros operativos con supervisión diaria.]" },
  { step: "04", phase: "Certificación", weeks: "Semanas 21–24", desc: "[Muestreos de verificación, presentación ante organismo regulador y obtención de certificado de aptitud ambiental.]" },
  { step: "05", phase: "Seguimiento", weeks: "Mes 6 en adelante", desc: "[Monitoreo mensual, reportes automáticos y ajuste de proceso según variaciones estacionales de carga.]" },
];

export function FeaturedCase() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-block border border-white/20 px-3 py-1 mb-6">
              <span className="text-white/40 text-xs font-mono uppercase tracking-widest">05 — Caso destacado</span>
            </div>
            <h2 className="text-white mb-4">Tratamiento de efluentes para empresa frigorífica de exportación</h2>
            <div className="flex flex-wrap gap-3">
              <span className="bg-white/10 border border-white/20 text-white/50 text-xs font-mono px-3 py-1.5 rounded-full">Tratamiento de residuos</span>
              <span className="bg-white/10 border border-white/20 text-white/50 text-xs font-mono px-3 py-1.5 rounded-full">Industria alimentaria</span>
              <span className="bg-white/10 border border-white/20 text-white/50 text-xs font-mono px-3 py-1.5 rounded-full">2024</span>
            </div>
          </div>
          <div className="flex-shrink-0 text-right">
            <div className="text-white/20 text-xs font-mono mb-1">Cliente</div>
            <div className="text-white/60 text-sm font-medium">Frigorífico [Nombre] S.A.</div>
            <div className="text-white/30 text-xs font-mono mt-0.5">NEA — Planta 3.200 t/mes</div>
          </div>
        </div>

        {/* Main image + problem */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Large image */}
          <div className="lg:col-span-7 aspect-[16/10] bg-white/5 border border-white/10 rounded-sm flex items-center justify-center relative">
            <div className="text-center px-8">
              <div className="w-16 h-16 border-2 border-dashed border-white/20 rounded-sm mx-auto mb-3 flex items-center justify-center">
                <span className="text-white/20 text-3xl">📷</span>
              </div>
              <p className="text-white/25 text-xs font-mono uppercase tracking-widest">Imagen principal del proyecto</p>
              <p className="text-white/15 text-xs font-mono mt-1">900 × 562px</p>
            </div>
            <div className="absolute bottom-4 left-4 bg-white/10 border border-white/20 px-3 py-1.5 rounded-full">
              <span className="text-white/50 text-xs font-mono">Vista de planta — instalación</span>
            </div>
          </div>

          {/* Problem */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="text-xs font-mono text-white/25 uppercase tracking-widest mb-4 flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/40 text-xs">!</div>
              El problema
            </div>
            <h3 className="text-white text-xl font-semibold mb-5">
              Efluentes con carga orgánica 8× por encima del límite normativo, riesgo de clausura y pérdida de habilitación para exportar.
            </h3>
            <p className="text-white/45 leading-relaxed text-sm mb-6">
              [Descripción detallada del problema — situación inicial del cliente, historial de incumplimientos,
              presión del organismo regulador, impacto en su cadena de exportación y urgencia operativa.]
            </p>
            <div className="space-y-3">
              {["Alta carga de DBO y sólidos suspendidos en efluentes", "Notificación de infracción de autoridad ambiental", "Riesgo de suspensión del certificado de exportación", "Ausencia de sistema de tratamiento previo"].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full border border-white/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 bg-white/25 rounded-full" />
                  </div>
                  <span className="text-white/40 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Solution */}
        <div className="bg-white/5 border border-white/10 rounded-sm p-8 md:p-10 mb-8">
          <div className="text-xs font-mono text-white/25 uppercase tracking-widest mb-6 flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/40 text-xs">→</div>
            La solución
          </div>
          <h3 className="text-white text-xl font-semibold mb-4">
            Sistema de tratamiento biológico modular en 3 etapas, diseñado e implementado por Hisoil en 20 semanas.
          </h3>
          <p className="text-white/45 leading-relaxed mb-10">
            [Descripción de la solución — diseño del sistema, tecnología utilizada, etapas de implementación, productos aplicados y metodología de seguimiento.]
          </p>

          {/* Timeline */}
          <div className="space-y-0">
            {timeline.map((t, i) => (
              <div key={t.step} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 z-10">
                    <span className="text-white/50 text-xs font-mono">{t.step}</span>
                  </div>
                  {i < timeline.length - 1 && <div className="w-px flex-1 bg-white/10 my-1" style={{ minHeight: 24 }} />}
                </div>
                <div className="pb-6 flex-1">
                  <div className="flex items-center gap-4 mb-1.5">
                    <span className="text-white/70 font-semibold text-sm">{t.phase}</span>
                    <span className="text-white/25 text-xs font-mono">{t.weeks}</span>
                  </div>
                  <p className="text-white/40 text-sm leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Result metrics */}
        <div>
          <div className="text-xs font-mono text-white/25 uppercase tracking-widest mb-6 flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/40 text-xs">✓</div>
            Resultados obtenidos
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
            {metrics.map((m) => (
              <div key={m.label} className="bg-gray-950 p-7 md:p-8">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{m.value}</div>
                <div className="text-white/60 font-medium text-sm mb-1 leading-tight">{m.label}</div>
                <div className="text-white/25 text-xs font-mono">{m.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
