const mockNotifications = [
  { text: "Próximo envío: 15 jun · Corrector pH + Inoculante X", time: "hace 2 días", dot: "bg-gray-900" },
  { text: "Informe técnico mayo 2025 disponible para descarga", time: "hace 5 días", dot: "bg-gray-400" },
  { text: "Recordatorio: ventana óptima de aplicación foliar esta semana", time: "hace 1 semana", dot: "bg-gray-400" },
];

const mockProducts = [
  { name: "Bioestimulante A 20L", qty: "x2", next: "15 jul" },
  { name: "Corrector pH 10kg", qty: "x1", next: "15 jun" },
  { name: "Inoculante X 5L", qty: "x1", next: "15 jun" },
  { name: "Nutriente foliar 1L", qty: "x3", next: "01 ago" },
];

export function AreaMiembros() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block border border-white/20 px-3 py-1 mb-6">
            <span className="text-white/40 text-xs font-mono uppercase tracking-widest">07 — Área de miembros</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-white max-w-xl">Tu panel de control para gestionar la membresía.</h2>
            <p className="text-white/30 text-sm font-mono max-w-xs text-right">
              [Descripción — Acceso online desde cualquier dispositivo, disponible 24/7.]
            </p>
          </div>
        </div>

        {/* Dashboard mockup */}
        <div className="bg-white/5 border border-white/10 rounded-sm overflow-hidden">
          {/* Top bar */}
          <div className="bg-white/5 border-b border-white/10 px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-white/20" />
              <div className="w-3 h-3 rounded-full bg-white/20" />
              <div className="w-3 h-3 rounded-full bg-white/20" />
            </div>
            <div className="bg-white/10 rounded-full px-4 py-1 text-white/30 text-xs font-mono">
              app.hisoil.com/miembros
            </div>
            <div className="w-16" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-white/5">
            {/* Sidebar */}
            <div className="lg:col-span-3 bg-white/[0.03] p-6 border-r border-white/5">
              <div className="mb-8">
                <div className="text-white/30 text-xs font-mono mb-1">Cuenta</div>
                <div className="text-white font-semibold">Establecimiento X</div>
                <div className="text-white/30 text-xs font-mono">Plan Profesional · Activo</div>
              </div>
              <nav className="space-y-1">
                {["Dashboard", "Mis envíos", "Mis productos", "Informes técnicos", "Consultas", "Configuración"].map((item, i) => (
                  <div key={item} className={`px-3 py-2 rounded-sm text-sm cursor-pointer transition-colors ${i === 0 ? "bg-white/10 text-white" : "text-white/40 hover:text-white/60 hover:bg-white/5"}`}>
                    {item}
                  </div>
                ))}
              </nav>
            </div>

            {/* Main content */}
            <div className="lg:col-span-9 p-6">
              {/* KPIs */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                {[
                  { label: "Próximo envío", value: "15 jun" },
                  { label: "Descuento activo", value: "12%" },
                  { label: "Meses activo", value: "8" },
                  { label: "Ahorro acumulado", value: "$X.XXX" },
                ].map((kpi) => (
                  <div key={kpi.label} className="bg-white/5 border border-white/10 rounded-sm p-4">
                    <div className="text-white/30 text-xs font-mono mb-1">{kpi.label}</div>
                    <div className="text-white font-bold text-lg">{kpi.value}</div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Products */}
                <div className="bg-white/5 border border-white/10 rounded-sm p-5">
                  <div className="text-white/40 text-xs font-mono uppercase tracking-widest mb-4">Próximos envíos</div>
                  <div className="space-y-2">
                    {mockProducts.map((p) => (
                      <div key={p.name} className="flex items-center justify-between gap-2">
                        <div>
                          <div className="text-white text-sm">{p.name}</div>
                          <div className="text-white/30 text-xs font-mono">{p.qty}</div>
                        </div>
                        <span className="text-white/40 text-xs font-mono bg-white/5 px-2 py-1 rounded-full">{p.next}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Notifications */}
                <div className="bg-white/5 border border-white/10 rounded-sm p-5">
                  <div className="text-white/40 text-xs font-mono uppercase tracking-widest mb-4">Notificaciones</div>
                  <div className="space-y-4">
                    {mockNotifications.map((n, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${n.dot}`} />
                        <div>
                          <div className="text-white/70 text-xs leading-relaxed">{n.text}</div>
                          <div className="text-white/25 text-[10px] font-mono mt-0.5">{n.time}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-white/20 text-xs font-mono">
          [Aclaración — El área de miembros está disponible para todos los planes. Acceso con usuario y contraseña.]
        </p>
      </div>
    </section>
  );
}
