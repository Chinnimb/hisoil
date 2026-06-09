import { Link } from 'react-router';

const featured = [
  {
    title: "Fertilización orgánica",
    description: "Productos certificados que mejoran la estructura del suelo y aumentan la productividad de manera sostenible. Sin residuos químicos en tu cultivo.",
    tag: "Producto",
    img: "https://images.unsplash.com/photo-1642952273588-ed6fa28870ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxmZXJ0aWxpemVyJTIwb3JnYW5pYyUyMGZhcm0lMjBoYW5kcyUyMHNvaWx8ZW58MXx8fHwxNzgwOTI2MzIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    stat: "+28% materia orgánica",
    number: "01",
  },
  {
    title: "Compostaje profesional",
    description: "Sistemas para transformar residuos orgánicos agroindustriales en enmiendas de alto valor agronómico. Cerramos el ciclo de nutrientes.",
    tag: "Proceso",
    img: "https://images.unsplash.com/photo-1573119798379-011dfedae008?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3liZWFuJTIwY3JvcCUyMGdyZWVuJTIwZmllbGQlMjBhZ3JpY3VsdHVyZXxlbnwxfHx8fDE3ODA5MjYzMjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    stat: "2.400 t procesadas/campaña",
    number: "02",
  },
];

const grid = [
  {
    title: "Análisis de suelos",
    description: "Estudios completos para determinar las necesidades específicas de tu campo.",
    tag: "Diagnóstico",
    img: "https://images.unsplash.com/photo-1618212624319-3cd9681707e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxvcmdhbmljJTIwY29tcG9zdGluZyUyMHNvaWwlMjBmYXJtaW5nfGVufDF8fHx8MTc4MDkyNjMxMnww&ixlib=rb-4.1.0&q=80&w=1080",
    number: "03",
  },
  {
    title: "Agricultura regenerativa",
    description: "Prácticas que restauran la salud del suelo y aumentan la biodiversidad.",
    tag: "Sustentabilidad",
    img: "https://images.unsplash.com/photo-1508175688576-0c076b47b5b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWdlbmVyYXRpdmUlMjBhZ3JpY3VsdHVyZSUyMGdyZWVuJTIwbGFuZHNjYXBlJTIwYWVyaWFsfGVufDF8fHx8MTc4MDkyNjMyMXww&ixlib=rb-4.1.0&q=80&w=1080",
    number: "04",
  },
  {
    title: "Control biológico",
    description: "Soluciones naturales para el manejo de plagas sin impacto ambiental.",
    tag: "Protección",
    img: "https://images.unsplash.com/photo-1557234195-bd9f290f0e4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxvcmdhbmljJTIwY29tcG9zdGluZyUyMHNvaWwlMjBmYXJtaW5nfGVufDF8fHx8MTc4MDkyNjMxMnww&ixlib=rb-4.1.0&q=80&w=1080",
    number: "05",
  },
  {
    title: "Optimización de rendimiento",
    description: "Monitoreo y ajustes estratégicos para alcanzar el máximo potencial productivo.",
    tag: "Resultados",
    img: "https://images.unsplash.com/photo-1471289660181-7feae98d61ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxyZWdlbmVyYXRpdmUlMjBhZ3JpY3VsdHVyZSUyMGdyZWVuJTIwbGFuZHNjYXBlJTIwYWVyaWFsfGVufDF8fHx8MTc4MDkyNjMyMXww&ixlib=rb-4.1.0&q=80&w=1080",
    number: "06",
  },
];

export function ServicesOverview() {
  return (
    <section className="py-24 md:py-32 px-6 bg-gray-950">
      <div className="w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="inline-block border border-white/20 px-3 py-1 mb-6">
              <span className="text-white/40 text-xs font-mono uppercase tracking-widest">Servicios</span>
            </div>
            <h2 className="text-white max-w-xl">Los servicios que potencian nuestros productos.</h2>
          </div>
          <div className="flex flex-col gap-3 items-start md:items-end">
            <p className="text-white/40 text-sm leading-relaxed max-w-xs text-left md:text-right">
              El servicio técnico hace que los productos funcionen mejor — y que los resultados duren.
            </p>
            <Link to="/servicios">
              <button className="border border-white/20 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-white/10 transition-colors">
                Ver todos los servicios →
              </button>
            </Link>
          </div>
        </div>

        {/* Featured — 2 large horizontal cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
          {featured.map((s) => (
            <Link key={s.title} to="/servicios" className="block group">
              <div className="relative h-72 md:h-80 overflow-hidden rounded-sm">
                <img
                  src={s.img}
                  alt={s.title}
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700"
                />
                {/* Layered overlay for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-gray-950/20" />

                {/* Top row */}
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                  <span className="text-white/30 font-mono text-xs">{s.number}</span>
                  <span className="bg-white/10 border border-white/20 text-white/70 text-[10px] font-mono px-2.5 py-1 rounded-full">
                    {s.tag}
                  </span>
                </div>

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <h3 className="text-white font-bold text-xl mb-2">{s.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-4">{s.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="bg-white/10 border border-white/15 rounded-sm px-3 py-1.5">
                      <span className="text-white/60 text-xs font-mono">{s.stat}</span>
                    </div>
                    <span className="text-white/30 group-hover:text-white group-hover:translate-x-1 transition-all text-sm">→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Secondary — 4 smaller cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {grid.map((s) => (
            <Link key={s.title} to="/servicios" className="block group">
              <div className="relative h-52 overflow-hidden rounded-sm">
                <img
                  src={s.img}
                  alt={s.title}
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/50 to-gray-950/10" />

                <div className="absolute top-3 left-3">
                  <span className="text-white/25 font-mono text-[10px]">{s.number}</span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="text-white/35 text-[9px] font-mono uppercase tracking-widest mb-1">{s.tag}</div>
                  <h3 className="text-white font-semibold text-sm leading-tight mb-1">{s.title}</h3>
                  <p className="text-white/40 text-[11px] leading-relaxed line-clamp-2">{s.description}</p>
                </div>

                {/* Hover line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-white/0 group-hover:bg-white/30 transition-colors" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
