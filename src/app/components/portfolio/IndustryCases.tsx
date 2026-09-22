import { useEffect, useRef, useState } from 'react';
import {
  Beef,
  Beer,
  GlassWater,
  Wheat,
  FlaskConical,
  Home,
  ShoppingCart,
  Factory,
  Layers3,
  Trophy,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
} from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';
import { ImagePlaceholder } from '../ImagePlaceholder';
import imgFrigorifica from '../../../imports/portfolio/industria-frigorifica.webp';
import imgCervecera from '../../../imports/portfolio/industria-cervecera.webp';

type LucideIcon = typeof Beef;

interface IndustryCase {
  id: string;
  Icon: LucideIcon;
  title: string;
  /** Tipo de residuo que HISOIL gestiona en esta industria */
  waste: string;
  /** Breve explicación */
  description: string;
  treats: string[];
  companies: string[];
  imageLabel: string;
  /** Foto propia; si no esta, la card cae al ImagePlaceholder */
  image?: string;
}

const cases: IndustryCase[] = [
  {
    id: 'frigorificos',
    Icon: Beef,
    title: 'Industria Frigorífica',
    waste: 'Rumen y subproductos orgánicos del proceso productivo',
    description: 'Tratamiento de efluentes y valorización de rumen',
    treats: [
      'Compostaje de rumen y contenido digestivo',
      'Gestión de barros biológicos',
      'Tratamiento de efluentes',
      'Certificados de disposición final',
    ],
    companies: [
      'Quickfood',
      'Frigorífico Cañuelas',
      'Frigorífico Costanzo',
      'Pekan',
      'Marilú Damiano',
      'Matadero Frigorífico Merlo',
      'Industria Cárnica del Oeste',
      'Soychú',
    ],
    imageLabel: 'Frigoríficos — industria + rumen/subproductos orgánicos',
    image: imgFrigorifica,
  },
  {
    id: 'cerveza',
    Icon: Beer,
    title: 'Industria Cervecera',
    waste: 'Bagazo de malta y levaduras',
    description: 'Valorización de bagazo y tratamiento de efluentes',
    treats: ['Bagazo de malta', 'Levaduras', 'Barros biológicos', 'Efluentes industriales'],
    companies: ['Cervecería y Maltería Quilmes'],
    imageLabel: 'Cerveza — industria + bagazo de malta',
    image: imgCervecera,
  },
  {
    id: 'alimenticia',
    Icon: Wheat,
    title: 'Industria Alimenticia',
    waste: 'Restos de producción y productos fuera de especificación',
    description: 'Gestión integral de residuos orgánicos',
    treats: [
      'Restos de producción',
      'Productos fuera de especificación',
      'Lodos',
      'Compostaje industrial',
    ],
    companies: [
      'Molinos Río de la Plata',
      'Bagley',
      'PepsiCo',
      'Molino Cañuelas',
      'Alfajores Jorgito',
      'Pilares Compañías Alimenticias',
      "Pan's Company",
      'Alimentaria La Pompeya',
      'Frescovo',
    ],
    imageLabel: 'Alimenticia — industria + restos de producción',
  },
  {
    id: 'bebidas',
    Icon: GlassWater,
    title: 'Industria de Bebidas',
    waste: 'Restos de frutas, pulpas y cáscaras',
    description: 'Economía circular para subproductos industriales',
    treats: ['Destilerías', 'Bebidas sin alcohol', 'Vinícolas', 'Efluentes'],
    companies: ['Grupo Peñaflor', 'Campari', 'Fratelli Branca', 'Refres Now'],
    imageLabel: 'Bebidas — industria + pulpas y cáscaras',
  },
  {
    id: 'laboratorios',
    Icon: FlaskConical,
    title: 'Laboratorios y Biotecnología',
    waste: 'Corrientes orgánicas biodegradables',
    description: 'Gestión ambiental de residuos industriales',
    treats: ['Barros biológicos', 'Residuos orgánicos', 'Cumplimiento normativo'],
    companies: [
      'Biogénesis Bagó',
      'Mabxience',
      'Sinergium Biotech',
      'Laboratorio CKC',
      'Laboratorio Dewey',
      'Internacional Farmacéutica Argentina',
    ],
    imageLabel: 'Laboratorios — instalaciones industriales limpias',
  },
  {
    id: 'barrios-cerrados',
    Icon: Home,
    title: 'Barrios Cerrados y Urbanizaciones',
    waste: 'Poda, césped y hojas',
    description: 'Compostaje de residuos verdes y poda',
    treats: ['Poda', 'Césped', 'Hojas', 'Residuos de mantenimiento'],
    companies: [
      'Nordelta',
      'Puertos del Lago',
      'Albanueva',
      'Barrio Septiembre',
      'Los Lagartos',
      'Hacoaj',
    ],
    imageLabel: 'Barrios Cerrados — industria + poda y residuos verdes',
  },
  {
    id: 'retail',
    Icon: ShoppingCart,
    title: 'Retail y Centros Logísticos',
    waste: 'Frutas y verduras descartadas',
    description: 'Gestión de residuos orgánicos y poda',
    treats: ['Residuos alimenticios', 'Frutas y verduras', 'Mantenimiento de espacios verdes'],
    companies: [
      'Coto',
      'Cencosud',
      'Día',
      'Farmacity',
      'Plaza Logística',
      'Exologística',
      'AXIS Logística',
    ],
    imageLabel: 'Retail y Logística — industria + frutas y verduras descartadas',
  },
  {
    id: 'agroindustria',
    Icon: Factory,
    title: 'Agroindustria',
    waste: 'Restos vegetales y descartes de cosecha',
    description: 'Valorización de residuos agroindustriales',
    treats: ['Residuos vegetales', 'Barros', 'Compost para uso agrícola'],
    companies: [
      'Ingredion',
      'Agroindustrias Quilmes',
      'Compañía Argentina de Aceite',
      'Cooperativa Aceitera La Matanza',
      'Refinería del Centro',
    ],
    imageLabel: 'Agroindustria — industria + restos vegetales',
  },
  {
    id: 'curtiembres',
    Icon: Layers3,
    title: 'Curtiembres',
    waste: 'Barros y subproductos biodegradables del curtido',
    description: 'Tratamiento de residuos orgánicos industriales',
    treats: ['Barros', 'Carnazas', 'Efluentes'],
    companies: ['JBS Leather', 'La Hispano Argentina Curtiembre'],
    imageLabel: 'Curtiembres — industria + barros y subproductos',
  },
  {
    id: 'clubes-hipicos-golf',
    Icon: Trophy,
    title: 'Clubes y Grandes Predios',
    waste: 'Estiércol, cama de caballerizas y césped',
    description: 'Gestión sustentable de residuos verdes',
    treats: ['Poda', 'Césped', 'Hojas', 'Compost para reutilización interna'],
    companies: [
      'Hipódromo de Palermo',
      'Los Lagartos Country Club',
      'Olivos Golf Club',
      'Club Náutico Hacoaj',
    ],
    imageLabel: 'Clubes Hípicos y Golf — industria + estiércol/césped',
  },
];

interface CardProps {
  c: IndustryCase;
  index: number;
}

/**
 * Card estilo WhatDoYouNeed del home: imagen full con overlay y todo el
 * contenido superpuesto. Al hover se agranda + revela detalles al pie.
 */
function IndustryCard({ c, index }: CardProps) {
  const { Icon } = c;

  return (
    <div id={c.id} className="group flex-shrink-0 w-[300px] sm:w-[340px] lg:w-[380px] snap-start">
      <div className="relative rounded-2xl overflow-hidden h-[460px] border border-oliva/15 hover:border-oliva/40 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
        {/* Full background image */}
        {c.image ? (
          <img
            loading="lazy"
            decoding="async"
            src={c.image}
            alt={c.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <ImagePlaceholder dark label={c.imageLabel} />
        )}
        {/* Gradient overlay — always visible but darker at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-noche/95 via-noche/50 to-noche/15 transition-opacity duration-500" />
        {/* Extra dark on hover for readability */}
        <div className="absolute inset-0 bg-noche/0 group-hover:bg-noche/25 transition-colors duration-500" />

        {/* Top row: icon + number */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:bg-lima group-hover:border-lima transition-all duration-500">
              <Icon className="w-4 h-4 text-white group-hover:text-oliva transition-colors duration-500" />
            </div>
            <span className="text-white/70 font-bold font-mono text-lg">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Bottom content — always visible */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-10 flex flex-col">
          {/* Title */}
          <h3 className="text-white font-bold text-2xl leading-tight mb-2">{c.title}</h3>

          {/* Tipo de residuo — siempre visible */}
          <div className="text-lima text-[10px] font-mono uppercase tracking-widest mb-3">
            {c.waste}
          </div>

          {/* Breve explicación — siempre visible */}
          <p className="text-white/85 text-xs leading-relaxed mb-3">{c.description}</p>

          {/* Divider that fills on hover */}
          <div className="h-[2px] bg-white/20 relative overflow-hidden mb-3">
            <div className="absolute inset-y-0 left-0 bg-lima w-0 group-hover:w-full transition-all duration-700 ease-out" />
          </div>

          {/* Extra info revealed on hover — max-height transition */}
          <div className="max-h-[40px] group-hover:max-h-[300px] overflow-hidden transition-all duration-500 ease-out">
            <div className="text-white/85 text-xs font-mono mb-3">
              {c.companies.length}{' '}
              {c.companies.length === 1 ? 'empresa del sector' : 'empresas del sector'}
            </div>

            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              <div className="text-white/60 text-[9px] font-mono uppercase tracking-widest mb-2">
                Qué tratamos
              </div>
              <ul className="space-y-1.5 mb-4">
                {c.treats.slice(0, 3).map((t) => (
                  <li key={t} className="flex items-start gap-2 text-white text-xs leading-snug">
                    <div className="w-1 h-1 rounded-full bg-lima mt-1.5 flex-shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/5491144401919?text=${encodeURIComponent(`Hola Hisoil, quisiera consultar sobre gestión de residuos para ${c.title}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-lima text-xs font-semibold hover:gap-2.5 transition-all"
              >
                Solicitar cotización
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
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
    const step = card ? card.offsetWidth + 20 : 320;
    el.scrollBy({ left: dir === 'left' ? -step : step, behavior: 'smooth' });
  };

  return (
    <section
      id="industrias"
      className="py-16 md:py-24 lg:py-32 pl-6 md:pl-12 lg:pl-20 bg-white overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto w-full pr-6 md:pr-12 lg:pr-20">
        <div
          ref={headerRef}
          className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-14 scroll-reveal ${headerVisible ? 'is-visible' : ''}`}
        >
          <div className="max-w-2xl">
            <div className="inline-block border border-oliva/30 px-3 py-1 mb-6">
              <span className="text-oliva text-xs font-mono uppercase tracking-widest">
                Casos de éxito por industria
              </span>
            </div>
            <h2 className="text-oliva mb-4">10 industrias, 10 residuos que sabemos gestionar.</h2>
            <p className="text-gray-700 leading-relaxed">
              Cada tarjeta une industria y residuo: qué genera cada sector y cómo lo transformamos
              en un recurso.
            </p>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative">
        {/* Fade sutil a los costados */}
        <div className="hidden md:block pointer-events-none absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r from-white/80 to-transparent" />
        <div className="hidden md:block pointer-events-none absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l from-white/80 to-transparent" />

        {/* Chevrons */}
        <button
          onClick={() => scrollBy('left')}
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
