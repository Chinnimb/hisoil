import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { useState } from 'react';

const categories = [
  {
    name: "Agricultura",
    tagline: "Enmiendas, biofertilizantes y bioinsumos para cultivos extensivos e intensivos que regeneran el suelo.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1200",
    hoverImage: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1200",
    products: 10,
    highlight: "Compost · Biofert · Humic",
    href: "/productos",
  },
  {
    name: "Sustratos Profesionales",
    tagline: "Mezclas formuladas para maximizar desarrollo radicular, uniformidad y rendimiento en cada cultivo.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1200",
    hoverImage: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1200",
    products: 12,
    highlight: "Seed · Nursery · Berry · Cannabis",
    href: "/productos",
  },
  {
    name: "Paisajismo & Techos Verdes",
    tagline: "Sustratos y materias primas para empresas de paisajismo, countries, parques y desarrollos inmobiliarios.",
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1200",
    hoverImage: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1200",
    products: 11,
    highlight: "GreenRoof · Tierra Fértil · Outdoor",
    href: "/productos",
  },
  {
    name: "Infraestructura & Restauración",
    tagline: "Revegetación, recuperación de suelos y compensaciones ambientales para obras civiles, canteras y minería.",
    image: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1200",
    hoverImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1200",
    products: 8,
    highlight: "Restore · HydroMulch · Native",
    href: "/productos",
  },
];

interface CategoryCardProps {
  c: typeof categories[number];
  index: number;
}

function CategoryCard({ c, index }: CategoryCardProps) {
  const [ref, visible] = useReveal<HTMLAnchorElement>({ threshold: 0.2 });
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={c.href}
      ref={ref}
      className={`group block scroll-reveal ${visible ? 'is-visible' : ''}`}
      style={{ transitionDelay: visible ? `${(index % 2) * 0.15}s` : '0s' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative bg-white rounded-2xl overflow-hidden border border-oliva/15 hover:border-oliva/40 hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
        {/* Photo with hover swap */}
        <div className="relative aspect-[5/4] overflow-hidden">
          <img
            src={c.image}
            alt={c.name}
            className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
            style={{
              opacity: hovered ? 0 : 1,
              transform: hovered ? 'scale(1.08)' : 'scale(1)',
            }}
          />
          <img
            src={c.hoverImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
            style={{
              opacity: hovered ? 1 : 0,
              transform: hovered ? 'scale(1)' : 'scale(1.08)',
            }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-oliva/90 via-oliva/30 to-transparent" />

          {/* Product count tag — top left */}
          <div className="absolute top-5 left-5 bg-lima text-oliva rounded-lg px-3 py-2 shadow-lg">
            <div className="font-bold text-xl leading-none">{c.products}</div>
            <div className="text-[9px] font-mono uppercase tracking-wider mt-0.5">productos</div>
          </div>

          {/* Arrow corner */}
          <div
            className="absolute top-5 right-5 w-11 h-11 rounded-full backdrop-blur-md border border-white/30 flex items-center justify-center transition-all duration-500"
            style={{
              backgroundColor: hovered ? '#B8C521' : 'rgba(255,255,255,0.15)',
              borderColor: hovered ? '#B8C521' : 'rgba(255,255,255,0.3)',
              transform: hovered ? 'rotate(45deg) scale(1.1)' : 'rotate(0) scale(1)',
            }}
          >
            <ArrowUpRight
              className="w-5 h-5 transition-colors duration-300"
              style={{ color: hovered ? '#2F6B33' : '#FFFFFF' }}
            />
          </div>

          {/* Title at bottom of image */}
          <div className="absolute bottom-5 left-5 right-5">
            <h3 className="text-white font-bold text-2xl md:text-3xl leading-tight">{c.name}</h3>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 md:p-7 flex-1 flex flex-col relative">
          <div
            className="absolute top-0 left-0 h-[3px] bg-lima transition-all duration-700 ease-out"
            style={{ width: hovered ? '100%' : '0%' }}
          />
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-5">
            {c.tagline}
          </p>
          <div className="mt-auto pt-4 border-t border-oliva/10">
            <div className="text-oliva text-[10px] font-mono uppercase tracking-widest mb-1">Incluye</div>
            <div className="text-oliva font-semibold text-sm">{c.highlight}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export function FeaturedProducts() {
  const [headerRef, headerVisible] = useReveal<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 bg-nata">
      <div className="max-w-[1600px] mx-auto w-full">
        <div
          ref={headerRef}
          className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20 scroll-reveal ${headerVisible ? 'is-visible' : ''}`}
        >
          <div className="max-w-2xl">
            <div className="inline-block border border-oliva/30 px-3 py-1 mb-6">
              <span className="text-oliva text-xs font-mono uppercase tracking-widest">Productos</span>
            </div>
            <h2 className="text-oliva">Cuatro líneas. Un mismo compromiso con la regeneración.</h2>
          </div>
          <Link to="/productos">
            <button className="border border-oliva text-oliva px-6 py-3 rounded-full text-sm font-medium hover:bg-oliva hover:text-white transition-all flex-shrink-0">
              Ver catálogo completo →
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {categories.map((c, i) => (
            <CategoryCard key={c.name} c={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
