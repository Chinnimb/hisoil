export function ContactoHero() {
  return (
    <section className="relative bg-oliva py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1773412910387-56cce5df7cc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx3aGVhdCUyMGhhcnZlc3QlMjBjb21iaW5lJTIwbWFjaGluZSUyMGdvbGRlbiUyMGZpZWxkfGVufDF8fHx8MTc4MDkzNTA0N3ww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Cosecha de trigo"
          className="w-full h-full object-cover"
          style={{ filter: 'grayscale(100%)' }}
        />
        <div className="absolute inset-0 bg-oliva/85" />
      </div>
      <div className="relative z-10 w-full">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block border border-white/20 px-3 py-1.5 mb-8">
            <span className="text-white/65 text-xs font-mono uppercase tracking-[0.2em]">Contacto</span>
          </div>

          <h1 className="text-white mb-6 leading-[1.05]">
            Hablemos de tu proyecto.
          </h1>

          <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Nuestro equipo está listo para ayudarte a encontrar la mejor solución para tu operación, cultivo o empresa.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="bg-white text-oliva px-8 py-4 rounded-full font-semibold hover:bg-paja transition-colors">
              Solicitar presupuesto
            </button>
            <button className="border border-white/30 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2.5">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </button>
          </div>

          {/* Trust micro-signals */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
            {[
              "Respuesta en menos de 24 hs",
              "Diagnóstico inicial sin costo",
              "Sin compromisos en la primera consulta",
            ].map((s) => (
              <div key={s} className="flex items-center gap-2 text-white/55 text-xs font-mono">
                <div className="w-1 h-1 bg-white/30 rounded-full" />
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

