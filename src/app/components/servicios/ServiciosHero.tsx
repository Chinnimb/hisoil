export function ServiciosHero() {
  return (
    <section className="relative min-h-screen bg-gray-100 flex flex-col">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=1440&q=80&fit=crop"
          alt="Planta de compostaje industrial"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900/65" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-6 md:px-12 lg:px-20 text-center py-32 pt-44">
        <div className="inline-block border border-white/30 px-4 py-1.5 mb-8">
          <span className="text-white/60 text-xs font-mono uppercase tracking-[0.2em]">Servicios</span>
        </div>

        <h1 className="text-white max-w-4xl mb-8 leading-tight">
          Soluciones para transformar residuos en valor.
        </h1>

        <p className="text-white/65 max-w-2xl mb-12 text-lg leading-relaxed">
          [Texto de apoyo — Descripción de la propuesta de valor de los servicios de Hisoil:
          tratamiento de residuos, gestión ambiental y soluciones para cultivos con impacto
          medible en cada operación.]
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-gray-900 px-9 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors">
            Solicitar Presupuesto
          </button>
          <button className="border border-white text-white px-9 py-4 rounded-full font-medium hover:bg-white/10 transition-colors">
            Ver Productos
          </button>
        </div>
      </div>

      {/* Trust indicators */}
      <div className="relative z-10 bg-gray-900/80 border-t border-white/10 py-5 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between items-center gap-6">
          {[
            "ISO 14001 certificado",
            "+2.400 proyectos ejecutados",
            "Cobertura nacional",
            "Respuesta en 24 hs",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-white/50 text-sm font-mono">
              <div className="w-1.5 h-1.5 bg-white/30 rounded-full" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
