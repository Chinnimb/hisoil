import { Link } from 'react-router';
import { ChevronLeft, ChevronRight, Sprout, Layers, TreePine, Mountain, Eye, ShoppingCart } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { useRef, useState, useEffect } from 'react';
import { useModal } from '../context/ModalContext';

type LucideIcon = typeof Sprout;

interface Product {
  name: string;
  desc: string;
  line: 'Agricultura' | 'Sustratos' | 'Paisajismo' | 'Infraestructura';
  Icon: LucideIcon;
  image: string;
  format: string;
  usage: string;
  badge?: string;
}

const products: Product[] = [
  // Agricultura
  {
    name: 'HiSoil Compost',
    desc: 'Enmienda orgánica para cultivos extensivos e intensivos.',
    line: 'Agricultura', Icon: Sprout,
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=900',
    format: 'Bolsa 20 kg · Big-bag 1 tn',
    usage: '3–6 t/ha',
    badge: 'Más vendido',
  },
  {
    name: 'HiSoil Biofert',
    desc: 'Biofertilizante líquido con microorganismos para suelo y fertirriego.',
    line: 'Agricultura', Icon: Sprout,
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=900',
    format: 'Bidón 20 L · IBC 1.000 L',
    usage: '2–4 L/ha',
  },
  {
    name: 'HiSoil Humic',
    desc: 'Concentrado de ácidos húmicos y fúlvicos.',
    line: 'Agricultura', Icon: Sprout,
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=900',
    format: 'Bidón 10 L · 20 L',
    usage: '1–2 L/ha',
  },
  {
    name: 'HiSoil Regenera',
    desc: 'Programa integral de regeneración de suelos.',
    line: 'Agricultura', Icon: Sprout,
    image: 'https://images.unsplash.com/photo-1508175688576-0c076b47b5b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=900',
    format: 'Plan por campaña',
    usage: 'A medida',
    badge: 'Recomendado',
  },
  // Sustratos
  {
    name: 'HiSoil Berry',
    desc: 'Sustrato optimizado para arándanos y frutos rojos.',
    line: 'Sustratos', Icon: Layers,
    image: 'https://images.unsplash.com/photo-1587393855524-087f83d95bc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=900',
    format: 'Bolsa 50 L',
    usage: 'Trasplante directo',
  },
  {
    name: 'HiSoil Cannabis',
    desc: 'Sustrato profesional para cannabis medicinal.',
    line: 'Sustratos', Icon: Layers,
    image: 'https://images.unsplash.com/photo-1536819114556-1e10f967fb61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=900',
    format: 'Bolsa 50 L · 70 L',
    usage: 'Cultivo indoor / outdoor',
    badge: 'Nuevo',
  },
  {
    name: 'HiSoil Nursery',
    desc: 'Sustrato profesional para viveros de producción.',
    line: 'Sustratos', Icon: Layers,
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=900',
    format: 'Big-bag 3.500 L',
    usage: 'Producción intensiva',
  },
  {
    name: 'HiSoil Hydro',
    desc: 'Sustrato específico para cultivos hidropónicos.',
    line: 'Sustratos', Icon: Layers,
    image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=900',
    format: 'Bolsa 50 L',
    usage: 'Sistema NFT / DWC',
  },
  // Paisajismo
  {
    name: 'HiSoil GreenRoof',
    desc: 'Sustrato liviano para terrazas y techos verdes.',
    line: 'Paisajismo', Icon: TreePine,
    image: 'https://images.unsplash.com/photo-1527863280617-15596f92e5c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=900',
    format: 'Big-bag 1 m³',
    usage: 'Espesor 10–15 cm',
  },
  {
    name: 'HiSoil Tierra Fértil',
    desc: 'Tierra enriquecida para jardinería y paisajismo.',
    line: 'Paisajismo', Icon: TreePine,
    image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=900',
    format: 'Bolsa 40 L · A granel',
    usage: 'Uso general',
  },
  {
    name: 'HiSoil Outdoor',
    desc: 'Sustrato profesional para plantas de exterior.',
    line: 'Paisajismo', Icon: TreePine,
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=900',
    format: 'Bolsa 50 L',
    usage: 'Trasplante directo',
  },
  {
    name: 'HiSoil Chip',
    desc: 'Astillas de madera para cobertura decorativa.',
    line: 'Paisajismo', Icon: TreePine,
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=900',
    format: 'Big-bag 1 m³',
    usage: 'Cobertura 5–8 cm',
  },
  // Infraestructura
  {
    name: 'HiSoil Restore',
    desc: 'Sustrato para recuperación integral de suelos degradados.',
    line: 'Infraestructura', Icon: Mountain,
    image: 'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=900',
    format: 'A granel · Big-bag',
    usage: '10–20 cm de espesor',
    badge: 'Obra pública',
  },
  {
    name: 'HiSoil Native',
    desc: 'Mezcla con semillas nativas para restauración ecológica.',
    line: 'Infraestructura', Icon: Mountain,
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=900',
    format: 'Bolsa 25 kg',
    usage: '30–50 kg/ha',
  },
  {
    name: 'HiSoil Carbon',
    desc: 'Mejorador de suelo rico en carbono estable.',
    line: 'Infraestructura', Icon: Mountain,
    image: 'https://images.unsplash.com/photo-1596568359553-a56de6970068?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=900',
    format: 'Big-bag 1 tn',
    usage: '2–5 t/ha',
  },
  {
    name: 'HiSoil HydroMulch',
    desc: 'Aplicación hidráulica para taludes y grandes superficies.',
    line: 'Infraestructura', Icon: Mountain,
    image: 'https://images.unsplash.com/photo-1518131955366-a2b23ded8ed8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=900',
    format: 'Aplicación por hidrosiembra',
    usage: 'Taludes / canteras',
    badge: 'A desarrollar',
  },
];

interface ProductCardProps {
  p: Product;
}

function ProductCard({ p }: ProductCardProps) {
  const { Icon } = p;
  const { open } = useModal();

  return (
    <div className="group flex-shrink-0 w-[300px] sm:w-[320px] snap-start">
      <div className="relative bg-white rounded-2xl overflow-hidden border border-oliva/15 hover:border-oliva/40 hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={p.image}
            alt={p.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-oliva/70 via-transparent to-transparent" />

          {/* Line tag top-left */}
          <div className="absolute top-3 left-3 flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
              <Icon className="w-4 h-4 text-white" />
            </div>
            <span className="bg-white/95 backdrop-blur-md text-oliva text-[9px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full font-semibold">
              {p.line}
            </span>
          </div>

          {/* Badge top-right */}
          {p.badge && (
            <div className="absolute top-3 right-3">
              <span className="bg-lima text-oliva text-[9px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full font-bold shadow">
                {p.badge}
              </span>
            </div>
          )}
        </div>

        {/* Body */}
        <div className="p-4 flex-1 flex flex-col relative">
          <div className="absolute top-0 left-0 h-[2px] bg-lima transition-all duration-700 ease-out w-0 group-hover:w-full" />

          <h3 className="text-oliva font-bold text-base leading-tight mb-1">{p.name}</h3>
          <p className="text-gray-700 text-xs leading-relaxed mb-3 line-clamp-2">{p.desc}</p>

          {/* Specs */}
          <div className="space-y-1 mb-3 py-2 border-y border-oliva/10">
            <div className="flex items-start justify-between gap-2 text-[10px]">
              <span className="text-oliva/60 font-mono uppercase tracking-widest flex-shrink-0">Formato</span>
              <span className="text-oliva font-semibold text-right text-[11px] line-clamp-1">{p.format}</span>
            </div>
            <div className="flex items-start justify-between gap-2 text-[10px]">
              <span className="text-oliva/60 font-mono uppercase tracking-widest flex-shrink-0">Aplicación</span>
              <span className="text-oliva font-semibold text-right text-[11px] line-clamp-1">{p.usage}</span>
            </div>
          </div>

          {/* Actions — stacked */}
          <div className="mt-auto flex flex-col gap-1.5">
            <Link
              to="/productos"
              className="w-full flex items-center justify-center gap-1.5 border border-oliva text-oliva text-[11px] font-semibold py-2 rounded-full hover:bg-oliva hover:text-white transition-all"
            >
              <Eye className="w-3 h-3" />
              Ver detalle
            </Link>
            <button
              onClick={open}
              className="w-full flex items-center justify-center gap-1.5 bg-oliva text-white text-[11px] font-semibold py-2 rounded-full hover:bg-lima hover:text-oliva transition-all"
            >
              <ShoppingCart className="w-3 h-3" />
              Consultar precio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FeaturedProducts() {
  const [headerRef, headerVisible] = useReveal<HTMLDivElement>({ threshold: 0.3 });
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const updateArrows = () => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 8);
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener('scroll', updateArrows, { passive: true });
    window.addEventListener('resize', updateArrows);
    return () => {
      el.removeEventListener('scroll', updateArrows);
      window.removeEventListener('resize', updateArrows);
    };
  }, []);

  const scrollBy = (dir: 'left' | 'right') => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>('.snap-start');
    const step = card ? card.offsetWidth + 20 : 340;
    el.scrollBy({ left: dir === 'left' ? -step * 2 : step * 2, behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 pl-6 md:pl-12 lg:pl-20 bg-nata overflow-hidden">
      <div className="max-w-[1600px] mx-auto w-full pr-6 md:pr-12 lg:pr-20">
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
      </div>

      {/* Carousel */}
      <div className="relative">
        {/* Fade sutil a los costados */}
        <div className="hidden md:block pointer-events-none absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r from-nata/70 to-transparent" />
        <div className="hidden md:block pointer-events-none absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l from-nata/70 to-transparent" />

        <button
          onClick={() => scrollBy('left')}
          disabled={!canLeft}
          aria-label="Anterior"
          className={`hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-2xl border border-oliva/15 items-center justify-center transition-all duration-300 ${
            canLeft ? 'opacity-100 hover:bg-lima hover:border-lima hover:scale-110' : 'opacity-0 pointer-events-none'
          }`}
        >
          <ChevronLeft className="w-5 h-5 text-oliva" />
        </button>
        <button
          onClick={() => scrollBy('right')}
          disabled={!canRight}
          aria-label="Siguiente"
          className={`hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-2xl border border-oliva/15 items-center justify-center transition-all duration-300 ${
            canRight ? 'opacity-100 hover:bg-lima hover:border-lima hover:scale-110' : 'opacity-0 pointer-events-none'
          }`}
        >
          <ChevronRight className="w-5 h-5 text-oliva" />
        </button>

        <div
          ref={scrollerRef}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 pl-6 md:pl-12 lg:pl-20 pr-6 md:pr-12 lg:pr-20"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((p) => (
            <ProductCard key={p.name} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
