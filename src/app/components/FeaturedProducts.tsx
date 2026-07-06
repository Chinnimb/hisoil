import { Link } from 'react-router';
import { ArrowUpRight, Sprout, Layers, TreePine, Mountain } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const categories = [
  {
    name: "Agricultura",
    Icon: Sprout,
    tagline: "Enmiendas, biofertilizantes y bioinsumos para cultivos extensivos e intensivos.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=900",
    products: 10,
    highlight: "Compost · Biofert · Humic",
    href: "/productos#agricultura",
  },
  {
    name: "Sustratos Profesionales",
    Icon: Layers,
    tagline: "Mezclas formuladas para desarrollo radicular y rendimiento óptimo.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=900",
    products: 12,
    highlight: "Seed · Berry · Cannabis",
    href: "/productos#sustratos",
  },
  {
    name: "Paisajismo & Techos Verdes",
    Icon: TreePine,
    tagline: "Sustratos y materias primas para paisajistas y desarrollos inmobiliarios.",
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=900",
    products: 12,
    highlight: "GreenRoof · Outdoor · Chip",
    href: "/productos#paisajismo",
  },
  {
    name: "Infraestructura & Restauración",
    Icon: Mountain,
    tagline: "Revegetación y recuperación de suelos para obras civiles y minería.",
    image: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=900",
    products: 8,
    highlight: "Restore · Native · HydroMulch",
    href: "/productos#infraestructura",
  },
];

interface CategoryCardProps {
  c: typeof categories[number];
  index: number;
}

function CategoryCard({ c, index }: CategoryCardProps) {
  const [ref, visible] = useReveal<HTMLAnchorElement>({ threshold: 0.15 });
  const { Icon } = c;

  return (
    <Link
      to={c.href}
      ref={ref}
      className={`group block scroll-reveal ${visible ? 'is-visible' : ''}`}
      style={{ transitionDelay: visible ? `${index * 0.1}s` : '0s' }}
    >
      <div className="relative bg-white rounded-2xl overflow-hidden border border-oliva/15 hover:border-oliva/40 hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
        {/* Photo */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={c.image}
            alt={c.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-oliva/95 via-oliva/40 to-transparent" />

          {/* Icon + product count */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:bg-lima group-hover:border-lima transition-all duration-500">
              <Icon className="w-4 h-4 text-white group-hover:text-oliva transition-colors duration-500" />
            </div>
            <div className="bg-lima text-oliva rounded-md px-2 py-1">
              <span className="font-bold text-xs">{c.products} productos</span>
            </div>
          </div>

          {/* Arrow */}
          <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:bg-lima group-hover:border-lima transition-all duration-500 group-hover:rotate-45">
            <ArrowUpRight className="w-4 h-4 text-white group-hover:text-oliva transition-colors" />
          </div>

          {/* Title at bottom */}
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-white font-bold text-lg md:text-xl leading-tight">{c.name}</h3>
          </div>
        </div>

        {/* Body */}
        <div className="p-5 flex-1 flex flex-col relative">
          <div
            className="absolute top-0 left-0 h-[2px] bg-lima transition-all duration-700 ease-out w-0 group-hover:w-full"
          />
          <p className="text-gray-700 text-xs md:text-sm leading-relaxed mb-4 flex-1">
            {c.tagline}
          </p>
          <div className="pt-3 border-t border-oliva/10">
            <div className="text-oliva/60 text-[9px] font-mono uppercase tracking-widest mb-0.5">Incluye</div>
            <div className="text-oliva font-semibold text-xs">{c.highlight}</div>
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
          className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-14 scroll-reveal ${headerVisible ? 'is-visible' : ''}`}
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

        {/* Grid 4 columnas desktop, 2 tablet, 1 mobile — cards mas chicas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {categories.map((c, i) => (
            <CategoryCard key={c.name} c={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
