import { useEffect, useRef, useState } from 'react';
import { Beef, Beer, Wheat, GlassWater, FlaskConical, Home, ShoppingCart, Factory, Layers3, Trophy, ChevronLeft, ChevronRight } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';

type LucideIcon = typeof Beef;

interface IndustryCase {
  id: string;
  Icon: LucideIcon;
  title: string;
  headline: string;
  treats: string[];
  companies: string[];
  image: string;
}

const cases: IndustryCase[] = [
  {
    id: 'frigorifica',
    Icon: Beef,
    title: 'Frigorífica',
    headline: 'Efluentes y valorización de rumen',
    treats: ['Compostaje de rumen y contenido digestivo', 'Gestión de barros biológicos', 'Tratamiento de efluentes', 'Certificados de disposición final'],
    companies: ['Quickfood', 'Frigorífico Cañuelas', 'Frigorífico Costanzo', 'Pekan', 'Marilú Damiano', 'Matadero Frigorífico Merlo', 'Industria Cárnica del Oeste', 'Soychú'],
    image: 'https://images.unsplash.com/photo-1544427920-c49ccfb85579?w=1200&q=85&fit=crop',
  },
  {
    id: 'cervecera',
    Icon: Beer,
    title: 'Cervecera',
    headline: 'Bagazo de malta y efluentes',
    treats: ['Bagazo de malta', 'Levaduras', 'Barros biológicos', 'Efluentes industriales'],
    companies: ['Cervecería y Maltería Quilmes'],
    image: 'https://images.unsplash.com/photo-1571613454045-b78cef6e7d6c?w=1200&q=85&fit=crop',
  },
  {
    id: 'alimenticia',
    Icon: Wheat,
    title: 'Alimenticia',
    headline: 'Residuos orgánicos de producción',
    treats: ['Restos de producción', 'Productos fuera de especificación', 'Lodos', 'Compostaje industrial'],
    companies: ['Molinos Río de la Plata', 'Bagley', 'PepsiCo', 'Molino Cañuelas', 'Alfajores Jorgito', 'Pilares Compañías Alimenticias', 'Pan\'s Company', 'Alimentaria La Pompeya', 'Frescovo'],
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&q=85&fit=crop',
  },
  {
    id: 'bebidas',
    Icon: GlassWater,
    title: 'Bebidas',
    headline: 'Subproductos y efluentes',
    treats: ['Destilerías', 'Bebidas sin alcohol', 'Vinícolas', 'Efluentes'],
    companies: ['Grupo Peñaflor', 'Campari', 'Fratelli Branca', 'Refres Now'],
    image: 'https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=1200&q=85&fit=crop',
  },
  {
    id: 'laboratorios',
    Icon: FlaskConical,
    title: 'Laboratorios y Biotech',
    headline: 'Residuos industriales biológicos',
    treats: ['Barros biológicos', 'Residuos orgánicos', 'Cumplimiento normativo'],
    companies: ['Biogénesis Bagó', 'Mabxience', 'Sinergium Biotech', 'Laboratorio CKC', 'Laboratorio Dewey', 'Internacional Farmacéutica Argentina'],
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1200&q=85&fit=crop',
  },
  {
    id: 'barrios-cerrados',
    Icon: Home,
    title: 'Barrios Cerrados',
    headline: 'Residuos verdes y poda',
    treats: ['Poda', 'Césped', 'Hojas', 'Residuos de mantenimiento'],
    companies: ['Nordelta', 'Puertos del Lago', 'Albanueva', 'Barrio Septiembre', 'Los Lagartos', 'Hacoaj'],
    image: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=1200&q=85&fit=crop',
  },
  {
    id: 'retail',
    Icon: ShoppingCart,
    title: 'Retail y Logística',
    headline: 'Orgánicos y espacios verdes',
    treats: ['Residuos alimenticios', 'Frutas y verduras', 'Mantenimiento de espacios verdes'],
    companies: ['Coto', 'Cencosud', 'Día', 'Farmacity', 'Plaza Logística', 'Exologística', 'AXIS Logística'],
    image: 'https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?w=1200&q=85&fit=crop',
  },
  {
    id: 'agroindustria',
    Icon: Factory,
    title: 'Agroindustria',
    headline: 'Residuos agroindustriales',
    treats: ['Residuos vegetales', 'Barros', 'Compost para uso agrícola'],
    companies: ['Ingredion', 'Agroindustrias Quilmes', 'Compañía Argentina de Aceite', 'Cooperativa Aceitera La Matanza', 'Refinería del Centro'],
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=85&fit=crop',
  },
  {
    id: 'curtiembres',
    Icon: Layers3,
    title: 'Curtiembres',
    headline: 'Barros, carnazas y efluentes',
    treats: ['Barros', 'Carnazas', 'Efluentes'],
    companies: ['JBS Leather', 'La Hispano Argentina Curtiembre'],
    image: 'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=1200&q=85&fit=crop',
  },
  {
    id: 'clubes',
    Icon: Trophy,
    title: 'Clubes y Predios',
    headline: 'Residuos verdes y compost interno',
    treats: ['Poda', 'Césped', 'Hojas', 'Compost para reutilización'],
    companies: ['Hipódromo de Palermo', 'Los Lagartos Country Club', 'Olivos Golf Club', 'Club Náutico Hacoaj'],
    image: 'https://images.unsplash.com/photo-1493589976221-c2357c31ad77?w=1200&q=85&fit=crop',
  },
];

interface CardProps {
  c: IndustryCase;
  index: number;
}

function IndustryCard({ c, index }: CardProps) {
  const { Icon } = c;
  return (
    <div
      id={c.id}
      className="group flex-shrink-0 w-[280px] sm:w-[300px] snap-start"
    >
      <div className="relative bg-white rounded-2xl overflow-hidden border border-oliva/15 shadow-md hover:shadow-2xl hover:border-oliva/40 hover:-translate-y-2 hover:scale-[1.03] transition-all duration-500 flex flex-col h-full">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={c.image}
            alt={c.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-noche/85 via-noche/25 to-transparent" />

          {/* Icon + number */}
          <div className="absolute top-3 left-3 flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:bg-lima group-hover:border-lima transition-all duration-500">
              <Icon className="w-4 h-4 text-white group-hover:text-oliva transition-colors duration-500" />
            </div>
            <span className="text-white/50 font-bold font-mono text-lg">{String(index + 1).padStart(2, '0')}</span>
          </div>

          {/* Title */}
          <div className="absolute bottom-3 left-4 right-4">
            <h3 className="text-white font-bold text-xl leading-tight mb-0.5">{c.title}</h3>
            <p className="text-white/85 text-xs">{c.headline}</p>
          </div>
        </div>

        {/* Body */}
        <div className="p-5 flex-1 flex flex-col">
          <div className="mb-4 flex-1">
            <div className="text-oliva text-[9px] font-mono uppercase tracking-widest mb-2">Qué tratamos</div>
            <ul className="space-y-1.5">
              {c.treats.slice(0, 3).map((t) => (
                <li key={t} className="flex items-start gap-2 text-gray-700 text-xs leading-snug">
                  <div className="w-1 h-1 rounded-full bg-lima mt-1.5 flex-shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-3 border-t border-oliva/10">
            <div className="text-oliva text-[9px] font-mono uppercase tracking-widest mb-2">
              {c.companies.length} {c.companies.length === 1 ? 'empresa' : 'empresas'}
            </div>
            <p className="text-oliva text-xs font-semibold line-clamp-2 leading-snug">
              {c.companies.slice(0, 3).join(' · ')}{c.companies.length > 3 ? '…' : ''}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function IndustryCases() {
  const [headerRef, headerVisible] = useReveal<HTMLDivElement>({ threshold: 0.3 });
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);
  const [autoplay, setAutoplay] = useState(true);

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

  // Auto-scroll suave, se pausa on hover
  useEffect(() => {
    if (!autoplay) return;
    const el = scrollerRef.current;
    if (!el) return;
    const interval = setInterval(() => {
      if (!el) return;
      const maxScroll = el.scrollWidth - el.clientWidth;
      // Si llegamos al final, volvemos suavemente al inicio
      if (el.scrollLeft >= maxScroll - 4) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        el.scrollBy({ left: 1, behavior: 'auto' });
      }
    }, 30);
    return () => clearInterval(interval);
  }, [autoplay]);

  const scrollBy = (dir: 'left' | 'right') => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>('.snap-start');
    const step = card ? card.offsetWidth + 20 : 320;
    el.scrollBy({ left: dir === 'left' ? -step * 2 : step * 2, behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 pl-6 md:pl-12 lg:pl-20 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto w-full pr-6 md:pr-12 lg:pr-20">
        <div
          ref={headerRef}
          className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-14 scroll-reveal ${headerVisible ? 'is-visible' : ''}`}
        >
          <div className="max-w-2xl">
            <div className="inline-block border border-oliva/30 px-3 py-1 mb-6">
              <span className="text-oliva text-xs font-mono uppercase tracking-widest">Casos de éxito por industria</span>
            </div>
            <h2 className="text-oliva mb-4">10 industrias que confían en nuestro servicio.</h2>
            <p className="text-gray-700 leading-relaxed">
              Cada tarjeta representa un problema resuelto: qué residuos tratamos y las empresas del sector que trabajan con Hisoil.
            </p>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div
        className="relative"
        onMouseEnter={() => setAutoplay(false)}
        onMouseLeave={() => setAutoplay(true)}
      >
        {/* Fade sutil a los costados */}
        <div className="hidden md:block pointer-events-none absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r from-white/80 to-transparent" />
        <div className="hidden md:block pointer-events-none absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l from-white/80 to-transparent" />

        {/* Chevrons */}
        <button
          onClick={() => scrollBy('left')}
          aria-label="Anterior"
          className={`hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-2xl border border-oliva/15 items-center justify-center transition-all duration-300 ${
            canLeft ? 'opacity-100 hover:bg-lima hover:border-lima hover:scale-110' : 'opacity-0 pointer-events-none'
          }`}
        >
          <ChevronLeft className="w-5 h-5 text-oliva" />
        </button>
        <button
          onClick={() => scrollBy('right')}
          aria-label="Siguiente"
          className={`hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-2xl border border-oliva/15 items-center justify-center transition-all duration-300 ${
            canRight ? 'opacity-100 hover:bg-lima hover:border-lima hover:scale-110' : 'opacity-0 pointer-events-none'
          }`}
        >
          <ChevronRight className="w-5 h-5 text-oliva" />
        </button>

        <div
          ref={scrollerRef}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-6 pl-6 md:pl-12 lg:pl-20 pr-6 md:pr-12 lg:pr-20"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {cases.map((c, i) => (
            <IndustryCard key={c.id} c={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
