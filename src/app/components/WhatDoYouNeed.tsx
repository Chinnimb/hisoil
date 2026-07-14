import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const sectors = [
  {
    label: "Productor agrícola",
    sub: "Cereales · Oleaginosas · Horticultura",
    to: "/productos#agricultura",
    img: "https://images.unsplash.com/photo-1751788385441-50e19352c5ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    stat: "+42% rendimiento documentado",
    tag: "Más consultado",
  },
  {
    label: "Empresa ganadera",
    sub: "Feedlot · Tambo · Frigorífico",
    to: "/servicios#gestion-residuos",
    img: "https://images.unsplash.com/photo-1558152761-aee570eb5cb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    stat: "Tratamiento in-situ",
  },
  {
    label: "Municipio",
    sub: "Residuos sólidos · Compostaje urbano",
    to: "/servicios#asistencia-municipios",
    img: "https://images.unsplash.com/photo-1492496913980-501348b61469?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    stat: "Escala municipal",
  },
  {
    label: "Industria agroalimentaria",
    sub: "Efluentes · Subproductos · Eficiencia",
    to: "/servicios#gestion-residuos",
    img: "https://images.unsplash.com/photo-1652211955967-99c892925469?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    stat: "Gestión eficiente",
  },
  {
    label: "Cooperativa / Pool de siembra",
    sub: "Escala media · Plan colectivo",
    to: "/membresia",
    img: "https://images.unsplash.com/photo-1508175688576-0c076b47b5b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    stat: "Planes escalonados",
  },
];

interface SectorCardProps {
  s: typeof sectors[number];
  index: number;
  large?: boolean;
}

function SectorCard({ s, index, large = false }: SectorCardProps) {
  const [ref, visible] = useReveal<HTMLAnchorElement>({ threshold: 0.2 });
  return (
    <Link
      to={s.to}
      ref={ref}
      className={`group block scroll-reveal ${visible ? 'is-visible' : ''} ${large ? 'lg:col-span-6 lg:row-span-2' : 'lg:col-span-3'}`}
      style={{ transitionDelay: visible ? `${index * 0.1}s` : '0s' }}
    >
      <div className={`relative rounded-2xl overflow-hidden ${large ? 'h-72 lg:h-full lg:min-h-[500px]' : 'h-60'} border border-oliva/15 hover:border-oliva/40 hover:shadow-2xl transition-all duration-500`}>
        <img
          src={s.img}
          alt={s.label}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-noche/85 via-noche/25 to-transparent" />

        {/* Tag for "Más consultado" */}
        {s.tag && (
          <div className="absolute top-5 left-5">
            <span className="bg-lima text-oliva text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 rounded-full font-semibold">
              {s.tag}
            </span>
          </div>
        )}

        {/* Arrow corner */}
        <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:bg-lima group-hover:border-lima transition-all duration-500">
          <ArrowUpRight className="w-4 h-4 text-white group-hover:text-oliva transition-colors duration-300" style={{ transform: 'rotate(0deg)' }} />
        </div>

        {/* Bottom content */}
        <div className={`absolute bottom-0 left-0 right-0 ${large ? 'p-7' : 'p-5'}`}>
          <div className={`text-white/75 text-[10px] font-mono uppercase tracking-widest mb-2`}>{s.sub}</div>
          <h3 className={`text-white font-bold leading-tight mb-3 ${large ? 'text-3xl' : 'text-xl'}`}>{s.label}</h3>

          {/* Animated underline */}
          <div className="h-[2px] bg-white/20 relative overflow-hidden mb-3">
            <div className="absolute inset-y-0 left-0 bg-lima w-0 group-hover:w-full transition-all duration-700 ease-out" />
          </div>

          <span className={`text-white/85 font-mono ${large ? 'text-sm' : 'text-[10px]'}`}>{s.stat}</span>
        </div>
      </div>
    </Link>
  );
}

export function WhatDoYouNeed() {
  const [headerRef, headerVisible] = useReveal<HTMLDivElement>({ threshold: 0.3 });
  const [bottomRef, bottomVisible] = useReveal<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-[1600px] mx-auto w-full">
        {/* Header */}
        <div
          ref={headerRef}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 md:mb-16 items-end scroll-reveal ${headerVisible ? 'is-visible' : ''}`}
        >
          <div>
            <div className="inline-block border border-oliva/30 px-3 py-1 mb-6">
              <span className="text-oliva text-xs font-mono uppercase tracking-widest">¿Para quién?</span>
            </div>
            <h2 className="text-oliva">Soluciones para cada tipo de operación.</h2>
          </div>
          <div className="lg:flex lg:justify-end">
            <p className="text-gray-700 text-sm leading-relaxed lg:text-right max-w-md">
              Desde el productor individual hasta la industria agroalimentaria — diseñamos una solución a medida para cada escala y necesidad.
            </p>
          </div>
        </div>

        {/* Mosaic grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <SectorCard s={sectors[0]} index={0} large />
          {sectors.slice(1).map((s, i) => (
            <SectorCard key={s.label} s={s} index={i + 1} />
          ))}
        </div>

        {/* Bottom strip */}
        <div
          ref={bottomRef}
          className={`mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 md:p-7 border border-oliva/15 rounded-2xl bg-paja/50 scroll-reveal ${bottomVisible ? 'is-visible' : ''}`}
        >
          <span className="text-gray-700 text-sm">¿No encontrás tu sector? Trabajamos con cualquier tipo de operación agropecuaria o industrial.</span>
          <Link to="/contacto">
            <button className="bg-oliva text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-lima hover:text-oliva transition-all flex-shrink-0 shadow-md">
              Consultar →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
