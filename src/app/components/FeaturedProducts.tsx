import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { useState } from 'react';

const products = [
  {
    name: "Compost Premium",
    tagline: "Enmienda orgánica de alta carga biológica que regenera suelos cansados y aumenta la materia orgánica en menos de una campaña.",
    image: "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900",
    hoverImage: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900",
    metric: "+28%",
    metricLabel: "materia orgánica",
    href: "/productos",
  },
  {
    name: "Bioestimulantes Naturales",
    tagline: "Estimulación foliar y radicular para resistencia al estrés hídrico, mejor llenado de grano y respuesta más rápida en cada ciclo.",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900",
    hoverImage: "https://images.unsplash.com/photo-1458014854819-1a40aa70211c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900",
    metric: "+40%",
    metricLabel: "resistencia hídrica",
    href: "/productos",
  },
  {
    name: "Fertilizantes Líquidos",
    tagline: "Nutrición vegetal de absorción rápida diseñada para cultivos extensivos. Resultados visibles en 7 días en hoja y raíz.",
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900",
    hoverImage: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900",
    metric: "7 días",
    metricLabel: "absorción visible",
    href: "/productos",
  },
];

interface ProductCardProps {
  p: typeof products[number];
  index: number;
}

function ProductCard({ p, index }: ProductCardProps) {
  const [ref, visible] = useReveal<HTMLDivElement>({ threshold: 0.2 });
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={p.href}
      ref={ref as React.RefObject<HTMLAnchorElement>}
      className={`group block scroll-reveal ${visible ? 'is-visible' : ''}`}
      style={{ transitionDelay: visible ? `${index * 0.15}s` : '0s' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative bg-oliva rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
        {/* Photo with hover swap */}
        <div className="relative aspect-[5/4] overflow-hidden">
          {/* Base image */}
          <img
            src={p.image}
            alt={p.name}
            className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
            style={{
              opacity: hovered ? 0 : 1,
              transform: hovered ? 'scale(1.08)' : 'scale(1)',
            }}
          />
          {/* Hover image (preloaded) */}
          <img
            src={p.hoverImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
            style={{
              opacity: hovered ? 1 : 0,
              transform: hovered ? 'scale(1)' : 'scale(1.08)',
            }}
            aria-hidden="true"
          />
          {/* Subtle dark gradient at top to make corner button pop */}
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/30 to-transparent pointer-events-none" />

          {/* Metric tag — top left, slides in */}
          <div
            className="absolute top-5 left-5 bg-oliva/95 backdrop-blur-sm rounded-lg px-4 py-2.5 shadow-lg transition-all duration-500"
            style={{
              transform: hovered ? 'translateX(0) scale(1.05)' : 'translateX(0) scale(1)',
            }}
          >
            <div className="text-white font-bold text-xl leading-none">{p.metric}</div>
            <div className="text-white/75 text-[9px] font-mono uppercase tracking-wider mt-1">{p.metricLabel}</div>
          </div>

          {/* Arrow corner */}
          <div
            className="absolute top-5 right-5 w-11 h-11 rounded-full backdrop-blur-md border border-white/30 flex items-center justify-center transition-all duration-500"
            style={{
              backgroundColor: hovered ? '#FFFFFF' : 'rgba(255,255,255,0.15)',
              transform: hovered ? 'rotate(45deg) scale(1.1)' : 'rotate(0) scale(1)',
            }}
          >
            <ArrowUpRight
              className="w-5 h-5 transition-colors duration-300"
              style={{ color: hovered ? '#2F6B33' : '#FFFFFF' }}
            />
          </div>
        </div>

        {/* Copy block */}
        <div className="p-7 md:p-8 lg:p-10 flex-1 flex flex-col relative">
          {/* Animated underline accent */}
          <div
            className="absolute top-0 left-0 h-[3px] bg-lima transition-all duration-700 ease-out"
            style={{ width: hovered ? '100%' : '0%' }}
          />
          <h3
            className="text-white font-bold text-2xl md:text-[1.7rem] leading-[1.15] mb-5 transition-transform duration-500"
            style={{ transform: hovered ? 'translateX(4px)' : 'translateX(0)' }}
          >
            {p.name}
          </h3>
          <p className="text-white/80 text-xs md:text-sm uppercase tracking-wider leading-relaxed">
            {p.tagline}
          </p>
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
        {/* Header */}
        <div
          ref={headerRef}
          className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20 scroll-reveal ${headerVisible ? 'is-visible' : ''}`}
        >
          <div className="max-w-2xl">
            <div className="inline-block border border-oliva/30 px-3 py-1 mb-6">
              <span className="text-oliva text-xs font-mono uppercase tracking-widest">Productos</span>
            </div>
            <h2 className="text-oliva">Tecnología agrícola para resultados reales.</h2>
          </div>
          <Link to="/productos">
            <button className="border border-oliva text-oliva px-6 py-3 rounded-full text-sm font-medium hover:bg-oliva hover:text-white transition-all flex-shrink-0">
              Ver catálogo →
            </button>
          </Link>
        </div>

        {/* Product cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {products.map((p, i) => (
            <ProductCard key={p.name} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
