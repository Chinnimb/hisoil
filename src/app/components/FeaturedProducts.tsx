import { Link } from 'react-router';
import {
  ChevronLeft,
  ChevronRight,
  Sprout,
  Layers,
  TreePine,
  Mountain,
  Eye,
  ShoppingCart,
} from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { useRef, useState, useEffect } from 'react';
import { useModal } from '../context/ModalContext';

// Imágenes reales de producto (src/imports/productos)
import imgCompost from '../../imports/productos/compost-1.webp';
import imgBiofert from '../../imports/productos/biofert-1.webp';
import imgHumic from '../../imports/productos/humic.webp';
import imgRegenera from '../../imports/productos/regenera.webp';
import imgPremium from '../../imports/productos/premium.webp';
import imgBerry from '../../imports/productos/berry.webp';
import imgCannabis from '../../imports/productos/cannabis.webp';
import imgSphagnum from '../../imports/productos/sphagnum.webp';
import imgChip from '../../imports/productos/chip.webp';
import imgGreenroof from '../../imports/productos/greenroof.webp';
import imgTierraFertil from '../../imports/productos/tierra-fertil.webp';
import imgRestore from '../../imports/productos/restore-1.webp';
import imgNative from '../../imports/productos/native.webp';
import imgCarbon from '../../imports/productos/carbon.webp';
import imgHydromulch from '../../imports/productos/hydromulch.webp';
import imgOutdoor from '../../imports/productos/outdoor.webp';

type LucideIcon = typeof Sprout;

interface Product {
  slug: string;
  name: string;
  desc: string;
  line:
    | 'Agricultura'
    | 'Sustratos Profesionales'
    | 'Materias Primas'
    | 'Jardinería, Paisajismo y Sustratos'
    | 'Infraestructura';
  Icon: LucideIcon;
  image: string;
  format: string;
  usage: string;
  badge?: string;
}

const products: Product[] = [
  // Agricultura
  {
    slug: 'compost',
    name: 'HiSoil Compost',
    desc: 'Enmienda orgánica premium para la regeneración y fertilidad de los suelos.',
    line: 'Agricultura',
    Icon: Sprout,
    image: imgCompost,
    format: 'A granel · Big Bag 1 m³',
    usage: '3–6 t/ha',
    badge: 'Más vendido',
  },
  {
    slug: 'biofert',
    name: 'HiSoil Biofert',
    desc: 'Biofertilizante biológico de última generación.',
    line: 'Agricultura',
    Icon: Sprout,
    image: imgBiofert,
    format: 'Bidón 20 L · IBC 1.000 L',
    usage: 'Suelo · Fertirriego · Foliar',
  },
  {
    slug: 'humic',
    name: 'HiSoil Humic',
    desc: 'Enmienda orgánica húmica a base de compost y leonardita.',
    line: 'Agricultura',
    Icon: Sprout,
    image: imgHumic,
    format: 'A granel · Big Bag 1 m³',
    usage: '100–500 kg/ha',
  },
  {
    slug: 'regenera',
    name: 'HiSoil Regenera',
    desc: 'Programa integral para la regeneración de suelos.',
    line: 'Agricultura',
    Icon: Sprout,
    image: imgRegenera,
    format: 'Programa técnico personalizado',
    usage: 'A medida',
    badge: 'Recomendado',
  },
  // Sustratos Profesionales
  {
    slug: 'premium',
    name: 'HiSoil Premium',
    desc: 'Sustrato profesional premium para cultivos de alta exigencia.',
    line: 'Sustratos Profesionales',
    Icon: Layers,
    image: imgPremium,
    format: 'Bolsa 25 · 50 · 80 dm³',
    usage: 'Cultivos de alto valor',
    badge: 'Premium',
  },
  {
    slug: 'berry',
    name: 'HiSoil Berry',
    desc: 'Sustrato profesional para arándanos y frutos rojos.',
    line: 'Sustratos Profesionales',
    Icon: Layers,
    image: imgBerry,
    format: 'Bolsa 25 · 50 · 80 dm³',
    usage: 'Producción profesional',
  },
  {
    slug: 'cannabis',
    name: 'HiSoil Cannabis',
    desc: 'Sustrato profesional para cannabis medicinal y cáñamo industrial.',
    line: 'Sustratos Profesionales',
    Icon: Layers,
    image: imgCannabis,
    format: 'Bolsa 25 · 50 · 80 dm³',
    usage: 'Indoor / greenhouse / outdoor',
    badge: 'Nuevo',
  },
  // Materias Primas
  {
    slug: 'sphagnum',
    name: 'HiSoil Sphagnum',
    desc: 'Turba sphagnum natural de Tierra del Fuego.',
    line: 'Materias Primas',
    Icon: TreePine,
    image: imgSphagnum,
    format: 'Bolsas de 130, 25 y 5 dm³',
    usage: 'Formulación de sustratos · Semilleros · Almácigos · Enmienda de suelos',
  },
  {
    slug: 'chip',
    name: 'HiSoil Chip',
    desc: 'Astillas de madera para cobertura decorativa (Mulch).',
    line: 'Materias Primas',
    Icon: TreePine,
    image: imgChip,
    format: 'Granel · Big Bag · Bolsas de 130, 100, 60, 25 y 5 dm³',
    usage: 'Cobertura decorativa · Control de malezas · Conservación de humedad',
  },
  // Paisajismo
  {
    slug: 'greenroof',
    name: 'HiSoil Green Roof',
    desc: 'Sustrato técnico liviano para techos verdes, terrazas y cubiertas vegetadas.',
    line: 'Jardinería, Paisajismo y Sustratos',
    Icon: TreePine,
    image: imgGreenroof,
    format: 'A granel · Big Bag',
    usage: 'Techos verdes extensivos e intensivos',
  },
  {
    slug: 'tierra-fertil',
    name: 'HiSoil Tierra Fértil',
    desc: 'Tierra enriquecida lista para jardinería, paisajismo y espacios verdes.',
    line: 'Jardinería, Paisajismo y Sustratos',
    Icon: TreePine,
    image: imgTierraFertil,
    format: 'A granel · Big Bag · Bolsas de 50, 25 y 5 dm³',
    usage: 'Plantación, nivelación y preparación de suelos',
  },
  {
    slug: 'outdoor',
    name: 'HiSoil Outdoor',
    desc: 'Sustrato profesional para plantas de exterior, jardines y paisajismo.',
    line: 'Jardinería, Paisajismo y Sustratos',
    Icon: TreePine,
    image: imgOutdoor,
    format: 'A granel · Big Bag · Bolsas de 50, 25 y 5 dm³',
    usage: 'Plantación y trasplante de especies de exterior',
  },
  // Infraestructura
  {
    slug: 'restore',
    name: 'HiSoil Restore',
    desc: 'Sustrato profesional para recuperación integral de suelos degradados y revegetación ambiental.',
    line: 'Infraestructura',
    Icon: Mountain,
    image: imgRestore,
    format: 'A granel · Big-bag',
    usage: '10–20 cm de espesor',
    badge: 'Obra pública',
  },
  {
    slug: 'native',
    name: 'HiSoil Native',
    desc: 'Mezclas profesionales de semillas nativas para restauración ecológica y revegetación de ecosistemas.',
    line: 'Infraestructura',
    Icon: Mountain,
    image: imgNative,
    format: 'Bolsa 25 kg',
    usage: '30–50 kg/ha',
  },
  {
    slug: 'carbon',
    name: 'HiSoil Carbon',
    desc: 'Enmienda orgánica carbonizada para agricultura regenerativa.',
    line: 'Infraestructura',
    Icon: Mountain,
    image: imgCarbon,
    format: 'A granel · Big Bag 1 m³',
    usage: '2–5 t/ha',
  },
  {
    slug: 'hydromulch',
    name: 'HiSoil HydroMulch',
    desc: 'Sistema profesional de hidrosiembra para revegetación, control de erosión y restauración ambiental.',
    line: 'Infraestructura',
    Icon: Mountain,
    image: imgHydromulch,
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
      <div className="relative bg-white rounded-2xl overflow-hidden border border-oliva/15 hover:border-oliva/40 hover:shadow-xl transition-all duration-500 h-full flex flex-col">
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            loading="lazy"
            decoding="async"
            src={p.image}
            alt={p.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-noche/60 via-transparent to-transparent" />

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
              <span className="text-oliva/60 font-mono uppercase tracking-widest flex-shrink-0">
                Formato
              </span>
              <span className="text-oliva font-semibold text-right text-[11px] line-clamp-1">
                {p.format}
              </span>
            </div>
            <div className="flex items-start justify-between gap-2 text-[10px]">
              <span className="text-oliva/60 font-mono uppercase tracking-widest flex-shrink-0">
                Aplicación
              </span>
              <span className="text-oliva font-semibold text-right text-[11px] line-clamp-1">
                {p.usage}
              </span>
            </div>
          </div>

          {/* Actions — stacked */}
          <div className="mt-auto flex flex-col gap-1.5">
            <Link
              to={`/productos/${p.slug}`}
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
              Cotizar
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
              <span className="text-oliva text-xs font-mono uppercase tracking-widest">
                Productos
              </span>
            </div>
            <h2 className="text-oliva">Cinco líneas. Un mismo compromiso con la regeneración.</h2>
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
            canLeft
              ? 'opacity-100 hover:bg-lima hover:border-lima hover:scale-110'
              : 'opacity-0 pointer-events-none'
          }`}
        >
          <ChevronLeft className="w-5 h-5 text-oliva" />
        </button>
        <button
          onClick={() => scrollBy('right')}
          disabled={!canRight}
          aria-label="Siguiente"
          className={`hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-2xl border border-oliva/15 items-center justify-center transition-all duration-300 ${
            canRight
              ? 'opacity-100 hover:bg-lima hover:border-lima hover:scale-110'
              : 'opacity-0 pointer-events-none'
          }`}
        >
          <ChevronRight className="w-5 h-5 text-oliva" />
        </button>

        <div
          ref={scrollerRef}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-16 pl-6 md:pl-12 lg:pl-20 pr-6 md:pr-12 lg:pr-20"
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
