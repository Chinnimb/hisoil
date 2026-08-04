import { useState } from 'react';
import { Beef, Beer, Wheat, GlassWater, FlaskConical, Home, ShoppingCart, Factory, Layers3, Trophy, ArrowUpRight } from 'lucide-react';
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
    title: 'Industria Frigorífica',
    headline: 'Tratamiento de efluentes y valorización de rumen',
    treats: [
      'Compostaje de rumen y contenido digestivo',
      'Gestión de barros biológicos',
      'Tratamiento de efluentes',
      'Certificados de disposición final',
    ],
    companies: ['Quickfood', 'Frigorífico Cañuelas', 'Frigorífico Costanzo', 'Pekan', 'Marilú Damiano', 'Matadero Frigorífico Merlo', 'Industria Cárnica del Oeste', 'Soychú'],
    image: 'https://images.unsplash.com/photo-1544427920-c49ccfb85579?w=1200&q=85&fit=crop',
  },
  {
    id: 'cervecera',
    Icon: Beer,
    title: 'Industria Cervecera',
    headline: 'Valorización de bagazo y tratamiento de efluentes',
    treats: [
      'Bagazo de malta',
      'Levaduras',
      'Barros biológicos',
      'Efluentes industriales',
    ],
    companies: ['Cervecería y Maltería Quilmes'],
    image: 'https://images.unsplash.com/photo-1571613454045-b78cef6e7d6c?w=1200&q=85&fit=crop',
  },
  {
    id: 'alimenticia',
    Icon: Wheat,
    title: 'Industria Alimenticia',
    headline: 'Gestión integral de residuos orgánicos',
    treats: [
      'Restos de producción',
      'Productos fuera de especificación',
      'Lodos',
      'Compostaje industrial',
    ],
    companies: ['Molinos Río de la Plata', 'Bagley', 'PepsiCo', 'Molino Cañuelas', 'Alfajores Jorgito', 'Pilares Compañías Alimenticias', 'Pan\'s Company', 'Alimentaria La Pompeya', 'Frescovo'],
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&q=85&fit=crop',
  },
  {
    id: 'bebidas',
    Icon: GlassWater,
    title: 'Industria de Bebidas',
    headline: 'Economía circular para subproductos industriales',
    treats: [
      'Destilerías',
      'Bebidas sin alcohol',
      'Vinícolas',
      'Efluentes',
    ],
    companies: ['Grupo Peñaflor', 'Campari', 'Fratelli Branca', 'Refres Now'],
    image: 'https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=1200&q=85&fit=crop',
  },
  {
    id: 'laboratorios',
    Icon: FlaskConical,
    title: 'Laboratorios y Biotecnología',
    headline: 'Gestión ambiental de residuos industriales',
    treats: [
      'Barros biológicos',
      'Residuos orgánicos',
      'Cumplimiento normativo',
    ],
    companies: ['Biogénesis Bagó', 'Mabxience', 'Sinergium Biotech', 'Laboratorio CKC', 'Laboratorio Dewey', 'Internacional Farmacéutica Argentina'],
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1200&q=85&fit=crop',
  },
  {
    id: 'barrios-cerrados',
    Icon: Home,
    title: 'Barrios Cerrados y Urbanizaciones',
    headline: 'Compostaje de residuos verdes y poda',
    treats: [
      'Poda',
      'Césped',
      'Hojas',
      'Residuos de mantenimiento',
    ],
    companies: ['Nordelta', 'Puertos del Lago', 'Albanueva', 'Barrio Septiembre', 'Los Lagartos', 'Hacoaj'],
    image: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=1200&q=85&fit=crop',
  },
  {
    id: 'retail',
    Icon: ShoppingCart,
    title: 'Retail y Centros Logísticos',
    headline: 'Gestión de residuos orgánicos y poda',
    treats: [
      'Residuos alimenticios',
      'Frutas y verduras',
      'Mantenimiento de espacios verdes',
    ],
    companies: ['Coto', 'Cencosud', 'Día', 'Farmacity', 'Plaza Logística', 'Exologística', 'AXIS Logística'],
    image: 'https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?w=1200&q=85&fit=crop',
  },
  {
    id: 'agroindustria',
    Icon: Factory,
    title: 'Agroindustria',
    headline: 'Valorización de residuos agroindustriales',
    treats: [
      'Residuos vegetales',
      'Barros',
      'Compost para uso agrícola',
    ],
    companies: ['Ingredion', 'Agroindustrias Quilmes', 'Compañía Argentina de Aceite', 'Cooperativa Aceitera La Matanza', 'Refinería del Centro'],
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=85&fit=crop',
  },
  {
    id: 'curtiembres',
    Icon: Layers3,
    title: 'Curtiembres',
    headline: 'Tratamiento de residuos orgánicos industriales',
    treats: [
      'Barros',
      'Carnazas',
      'Efluentes',
    ],
    companies: ['JBS Leather', 'La Hispano Argentina Curtiembre'],
    image: 'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=1200&q=85&fit=crop',
  },
  {
    id: 'clubes',
    Icon: Trophy,
    title: 'Clubes y Grandes Predios',
    headline: 'Gestión sustentable de residuos verdes',
    treats: [
      'Poda',
      'Césped',
      'Hojas',
      'Compost para reutilización interna',
    ],
    companies: ['Hipódromo de Palermo', 'Los Lagartos Country Club', 'Olivos Golf Club', 'Club Náutico Hacoaj'],
    image: 'https://images.unsplash.com/photo-1493589976221-c2357c31ad77?w=1200&q=85&fit=crop',
  },
];

interface CardProps {
  c: IndustryCase;
  index: number;
}

function IndustryCard({ c, index }: CardProps) {
  const [ref, visible] = useReveal<HTMLDivElement>({ threshold: 0.15 });
  const [expanded, setExpanded] = useState(false);
  const { Icon } = c;
  const visibleCompanies = expanded ? c.companies : c.companies.slice(0, 4);

  return (
    <div
      ref={ref}
      id={c.id}
      className={`scroll-reveal group bg-white rounded-2xl overflow-hidden border border-oliva/15 hover:border-oliva/40 hover:shadow-2xl transition-all duration-500 flex flex-col ${visible ? 'is-visible' : ''}`}
      style={{ transitionDelay: visible ? `${(index % 3) * 0.08}s` : '0s' }}
    >
      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <img src={c.image} alt={c.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-noche/85 via-noche/30 to-transparent" />

        {/* Icon + number */}
        <div className="absolute top-4 left-4 flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:bg-lima group-hover:border-lima transition-all duration-500">
            <Icon className="w-5 h-5 text-white group-hover:text-oliva transition-colors duration-500" />
          </div>
          <span className="text-white/50 font-bold font-mono text-2xl">{String(index + 1).padStart(2, '0')}</span>
        </div>

        {/* Title at bottom */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white font-bold text-xl md:text-2xl leading-tight mb-1">{c.title}</h3>
          <p className="text-white/85 text-sm">{c.headline}</p>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 md:p-7 flex-1 flex flex-col">
        <div className="mb-5">
          <div className="text-oliva text-[10px] font-mono uppercase tracking-widest mb-3">Qué tratamos</div>
          <ul className="space-y-2">
            {c.treats.map((t) => (
              <li key={t} className="flex items-start gap-2 text-gray-700 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-lima mt-2 flex-shrink-0" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto pt-5 border-t border-oliva/10">
          <div className="text-oliva text-[10px] font-mono uppercase tracking-widest mb-3">Empresas del sector</div>
          <div className="flex flex-wrap gap-1.5">
            {visibleCompanies.map((company) => (
              <span key={company} className="bg-oliva/8 text-oliva text-xs font-medium px-2.5 py-1 rounded-full border border-oliva/15">
                {company}
              </span>
            ))}
            {c.companies.length > 4 && (
              <button
                onClick={() => setExpanded((v) => !v)}
                className="text-oliva text-xs font-mono px-2.5 py-1 rounded-full border border-oliva/25 hover:bg-oliva hover:text-white transition-all"
              >
                {expanded ? '− ver menos' : `+${c.companies.length - 4} más`}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function IndustryCases() {
  const [headerRef, headerVisible] = useReveal<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-[1600px] mx-auto w-full">
        <div
          ref={headerRef}
          className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16 scroll-reveal ${headerVisible ? 'is-visible' : ''}`}
        >
          <div className="max-w-2xl">
            <div className="inline-block border border-oliva/30 px-3 py-1 mb-6">
              <span className="text-oliva text-xs font-mono uppercase tracking-widest">Casos de éxito por industria</span>
            </div>
            <h2 className="text-oliva mb-4">10 industrias que confían en nuestro servicio.</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Cada tarjeta representa un problema resuelto: qué residuos tratamos, qué servicios ejecutamos y las empresas del sector que trabajan con Hisoil.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cases.map((c, i) => (
            <IndustryCard key={c.id} c={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
