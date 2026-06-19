import { Link } from 'react-router';

const sectors = [
  {
    label: "Productor agrícola",
    sub: "Cereales · Oleaginosas · Horticultura",
    to: "/servicios",
    img: "https://images.unsplash.com/photo-1751788385441-50e19352c5ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxhZ3JpY3VsdHVyYWwlMjBjcm9wcyUyMHdoZWF0JTIwZmllbGQlMjByb3dzJTIwYWVyaWFsfGVufDF8fHx8MTc4MDkyNjMxMXww&ixlib=rb-4.1.0&q=80&w=1080",
    size: "large",
    stat: "+42% rendimiento documentado",
  },
  {
    label: "Empresa ganadera",
    sub: "Feedlot · Tambo · Frigorífico",
    to: "/servicios",
    img: "https://images.unsplash.com/photo-1558152761-aee570eb5cb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXR0bGUlMjBsaXZlc3RvY2slMjBmYXJtJTIwQXJnZW50aW5hfGVufDF8fHx8MTc4MDkyNjMxMXww&ixlib=rb-4.1.0&q=80&w=1080",
    size: "regular",
    stat: "Tratamiento de residuos in-situ",
  },
  {
    label: "Municipio",
    sub: "Residuos sólidos · Compostaje urbano",
    to: "/servicios",
    img: "https://images.unsplash.com/photo-1492496913980-501348b61469?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwY29tcG9zdGluZyUyMHNvaWwlMjBmYXJtaW5nfGVufDF8fHx8MTc4MDkyNjMxMnww&ixlib=rb-4.1.0&q=80&w=1080",
    size: "regular",
    stat: "Soluciones a escala municipal",
  },
  {
    label: "Industria agroalimentaria",
    sub: "Efluentes · Subproductos · Eficiencia",
    to: "/servicios",
    img: "https://images.unsplash.com/photo-1652211955967-99c892925469?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwaW5kdXN0cnklMjBhZ3JpY3VsdHVyYWwlMjBwcm9jZXNzaW5nJTIwZmFjdG9yeXxlbnwxfHx8fDE3ODA5MjYzMjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    size: "regular",
    stat: "Gestión eficiente de subproductos",
  },
  {
    label: "Cooperativa / Pool de siembra",
    sub: "Escala media · Plan colectivo",
    to: "/servicios",
    img: "https://images.unsplash.com/photo-1508175688576-0c076b47b5b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWdlbmVyYXRpdmUlMjBhZ3JpY3VsdHVyZSUyMGdyZWVuJTIwbGFuZHNjYXBlJTIwYWVyaWFsfGVufDF8fHx8MTc4MDkyNjMyMXww&ixlib=rb-4.1.0&q=80&w=1080",
    size: "regular",
    stat: "Planes escalonados por volumen",
  },
];

export function WhatDoYouNeed() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-[1600px] mx-auto w-full">
        {/* Header — title left, subtitle right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 items-end">
          <div>
            <div className="inline-block border border-gray-300 px-3 py-1 mb-6">
              <span className="text-gray-400 text-xs font-mono uppercase tracking-widest">¿Para quién?</span>
            </div>
            <h2 className="text-oliva">Soluciones para cada tipo de operación.</h2>
          </div>
          <div className="lg:flex lg:justify-end">
            <p className="text-gray-500 text-sm leading-relaxed lg:text-right max-w-md">
              Desde el productor individual hasta la industria agroalimentaria — diseñamos una solución a medida para cada escala y necesidad.
            </p>
          </div>
        </div>

        {/* Mosaic grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">

          {/* Large tile — col-span-5, 2 rows */}
          <Link to={sectors[0].to} className="lg:col-span-6 lg:row-span-2 block group">
            <div className="relative h-72 lg:h-full min-h-[500px] overflow-hidden rounded-sm">
              <img
                src={sectors[0].img}
                alt={sectors[0].label}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/40 to-gray-950/10" />

              {/* Top tag */}
              <div className="absolute top-5 left-5">
                <span className="bg-white/10 border border-white/20 backdrop-blur-sm text-white text-[10px] font-mono px-2.5 py-1 rounded-full">
                  Más consultado
                </span>
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <div className="text-white/50 text-xs font-mono mb-1">{sectors[0].sub}</div>
                <h3 className="text-white font-bold text-2xl mb-3">{sectors[0].label}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-white/60 text-xs font-mono">{sectors[0].stat}</span>
                  <span className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all text-sm">→</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Right 4 tiles — 2×2 grid */}
          {sectors.slice(1).map((s) => (
            <Link key={s.label} to={s.to} className="lg:col-span-3 block group">
              <div className="relative h-60 overflow-hidden rounded-sm">
                <img
                  src={s.img}
                  alt={s.label}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/85 via-gray-950/30 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="text-white/40 text-[10px] font-mono mb-1">{s.sub}</div>
                  <h3 className="text-white font-semibold mb-2 leading-tight">{s.label}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-white/40 text-[10px] font-mono">{s.stat}</span>
                    <span className="text-white/30 group-hover:text-white group-hover:translate-x-1 transition-all text-xs">→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom strip */}
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 border border-gray-200 rounded-sm bg-paja/30">
          <span className="text-gray-500 text-sm">¿No encontrás tu sector? Trabajamos con cualquier tipo de operación agropecuaria o industrial.</span>
          <Link to="/contacto">
            <button className="bg-oliva text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-oliva transition-colors flex-shrink-0">
              Consultar →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
