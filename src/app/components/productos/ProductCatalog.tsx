import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router';
import { ArrowUpRight, Sprout, Layers, TreePine, Mountain } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';
import { ImagePlaceholder } from '../ImagePlaceholder';
import { PRODUCTOS_SHOW_PLACEHOLDERS as SHOW_PLACEHOLDERS } from '../../data/products';

// Imágenes reales de producto (src/imports/productos)
import imgCompost from '../../../imports/productos/compost-1.webp';
import imgHumic from '../../../imports/productos/humic.webp';
import imgBiofert from '../../../imports/productos/biofert-1.webp';
import imgCarbon from '../../../imports/productos/carbon.webp';
import imgRegenera from '../../../imports/productos/regenera.webp';
import imgPremium from '../../../imports/productos/premium.webp';
import imgBerry from '../../../imports/productos/berry.webp';
import imgCannabis from '../../../imports/productos/cannabis.webp';
import imgCitrus from '../../../imports/productos/citrus.webp';
import imgTurf from '../../../imports/productos/turf.webp';
import imgHydro from '../../../imports/productos/hydro.webp';
import imgPalm from '../../../imports/productos/palm.webp';
import imgChip from '../../../imports/productos/chip.webp';
import imgSphagnum from '../../../imports/productos/sphagnum.webp';
import imgTierraFertil from '../../../imports/productos/tierra-fertil.webp';
import imgGreenroof from '../../../imports/productos/greenroof.webp';
import imgRestore from '../../../imports/productos/restore-1.webp';
import imgHydromulch from '../../../imports/productos/hydromulch.webp';
import imgNative from '../../../imports/productos/native.webp';
import imgOutdoor from '../../../imports/productos/outdoor.webp';

type LucideIcon = typeof Sprout;

// Product name -> real product photo. Products without a confirmed photo are
// intentionally omitted here — the card falls back to ImagePlaceholder rather
// than shipping a generic stock photo as if it were final.
const productImages: Record<string, string> = {
  // Agricultura
  'HiSoil Compost': imgCompost,
  'HiSoil Biofert': imgBiofert,
  'HiSoil Humic': imgHumic,
  'HiSoil Carbon': imgCarbon,
  'HiSoil Regenera': imgRegenera,
  // Sustratos Profesionales
  'HiSoil Premium': imgPremium,
  'HiSoil Berry': imgBerry,
  'HiSoil Cannabis': imgCannabis,
  'HiSoil Citrus': imgCitrus,
  'HiSoil Turf': imgTurf,
  'HiSoil Hydro': imgHydro,
  'HiSoil Palm': imgPalm,
  // Materias Primas
  'HiSoil Chip': imgChip,
  'HiSoil Sphagnum': imgSphagnum,
  // Paisajismo
  'HiSoil Tierra Fértil': imgTierraFertil,
  'HiSoil Outdoor': imgOutdoor,
  'HiSoil Green Roof': imgGreenroof,
  // Infraestructura
  'HiSoil Restore': imgRestore,
  'HiSoil HydroMulch': imgHydromulch,
  'HiSoil Native': imgNative,
};

// Name -> detail page slug
const productSlugs: Record<string, string> = {
  'HiSoil Compost': 'compost',
  'HiSoil Biofert': 'biofert',
  'HiSoil Humic': 'humic',
  'HiSoil Carbon': 'carbon',
  'HiSoil Regenera': 'regenera',
  'HiSoil Seed': 'seed',
  'HiSoil Plug': 'plug',
  'HiSoil Nursery': 'nursery',
  'HiSoil Premium': 'premium',
  'HiSoil Forest': 'forest',
  'HiSoil Tobacco': 'tobacco',
  'HiSoil Berry': 'berry',
  'HiSoil Cannabis': 'cannabis',
  'HiSoil Citrus': 'citrus',
  'HiSoil Turf': 'turf',
  'HiSoil Hydro': 'hydro',
  'HiSoil Palm': 'palm',
  'HiSoil Chip': 'chip',
  'HiSoil MiniChip': 'minichip',
  'HiSoil Sphagnum': 'sphagnum',
  'HiSoil Perlite': 'perlite',
  'HiSoil Vermiculite': 'vermiculite',
  'HiSoil Pometina': 'pometina',
  'HiSoil Tierra Fértil': 'tierra-fertil',
  'HiSoil Level': 'level',
  'HiSoil Outdoor': 'outdoor',
  'HiSoil Indoor': 'indoor',
  'HiSoil Green Roof': 'greenroof',
  'HiSoil Restore': 'restore',
  'HiSoil HydroMulch': 'hydromulch',
  'HiSoil Erosion': 'erosion',
  'HiSoil Native': 'native',
};

interface Product {
  name: string;
  /** Solo cuando el nombre no alcanza para resolver la ficha (ej. HiSoil Compost aparece en 2 familias) */
  slug?: string;
  desc: string;
  status?: 'a-desarrollar' | 'opcional';
}

interface SubCategory {
  title?: string;
  products: Product[];
}

interface Category {
  id: string;
  name: string;
  Icon: LucideIcon;
  eyebrow: string;
  intro: string;
  image: string;
  segments?: string;
  applications?: string;
  subcategories: SubCategory[];
}

const categories: Category[] = [
  {
    id: 'agricultura',
    name: 'Agricultura',
    Icon: Sprout,
    eyebrow: 'Línea A',
    intro:
      'Enmiendas, biofertilizantes y bioinsumos para cultivos extensivos e intensivos que regeneran el suelo y potencian el rendimiento.',
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1600',
    subcategories: [
      {
        products: [
          {
            name: 'HiSoil Compost',
            desc: 'Enmienda orgánica premium para la regeneración y fertilidad de los suelos.',
          },
          {
            name: 'HiSoil Biofert',
            desc: 'Biofertilizante biológico de última generación.',
          },
          {
            name: 'HiSoil Humic',
            desc: 'Enmienda orgánica húmica a base de compost y leonardita.',
          },
          {
            name: 'HiSoil Carbon',
            desc: 'Enmienda orgánica carbonizada para agricultura regenerativa.',
          },
          { name: 'HiSoil Regenera', desc: 'Programa integral para la regeneración de suelos.' },
        ],
      },
    ],
  },
  {
    id: 'sustratos',
    name: 'Sustratos Profesionales',
    Icon: Layers,
    eyebrow: 'Línea B',
    intro:
      'Sustratos profesionales formulados para maximizar el desarrollo radicular, la uniformidad del cultivo y el rendimiento en distintos sistemas productivos.',
    image:
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1600',
    subcategories: [
      {
        products: [
          { name: 'HiSoil Seed', desc: 'Sustrato profesional para siembra y germinación.' },
          {
            name: 'HiSoil Plug',
            desc: 'Sustrato profesional para producción de plantines en plugs.',
          },
          { name: 'HiSoil Nursery', desc: 'Sustrato profesional para viveros de producción.' },
          {
            name: 'HiSoil Premium',
            desc: 'Sustrato profesional premium para cultivos de alta exigencia.',
          },
          {
            name: 'HiSoil Forest',
            desc: 'Sustrato profesional para producción de plantines forestales.',
          },
          {
            name: 'HiSoil Tobacco',
            desc: 'Sustrato profesional para producción de plantines de tabaco.',
          },
          { name: 'HiSoil Berry', desc: 'Sustrato profesional para arándanos y frutos rojos.' },
          {
            name: 'HiSoil Cannabis',
            desc: 'Sustrato profesional para cannabis medicinal y cáñamo industrial.',
          },
          {
            name: 'HiSoil Citrus',
            desc: 'Sustrato profesional para producción de cítricos y frutales.',
          },
          { name: 'HiSoil Turf', desc: 'Sustrato profesional para producción de césped en rollo.' },
          { name: 'HiSoil Hydro', desc: 'Sustrato profesional para cultivos hidropónicos.' },
          {
            name: 'HiSoil Palm',
            desc: 'Sustrato profesional para palmeras y plantas ornamentales.',
          },
        ],
      },
    ],
  },
  {
    id: 'materiasprimas',
    name: 'Materias Primas',
    Icon: Layers,
    eyebrow: 'Línea C',
    intro:
      'Materias primas seleccionadas para la formulación de sustratos profesionales, cobertura decorativa y proyectos de paisajismo.',
    image:
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1600',
    subcategories: [
      {
        products: [
          { name: 'HiSoil Chip', desc: 'Astillas de madera para cobertura decorativa (Mulch).' },
          {
            name: 'HiSoil MiniChip',
            desc: 'Astillas finas de madera para cobertura decorativa premium.',
          },
          { name: 'HiSoil Sphagnum', desc: 'Turba sphagnum natural de Tierra del Fuego.' },
          { name: 'HiSoil Perlite', desc: 'Perlita expandida para sustratos profesionales.' },
          {
            name: 'HiSoil Vermiculite',
            desc: 'Vermiculita expandida para sustratos profesionales.',
          },
          { name: 'HiSoil Pometina', desc: 'Pometina volcánica para formulación de sustratos.' },
        ],
      },
    ],
  },
  {
    id: 'paisajismo',
    name: 'Jardinería, Paisajismo y Sustratos',
    Icon: TreePine,
    eyebrow: 'Línea D',
    intro:
      'Sustratos y enmiendas para empresas de paisajismo, countries, parques y desarrollos inmobiliarios.',
    image:
      'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1600',
    segments:
      'Empresas de paisajismo · Clubes · Countries · Desarrollos inmobiliarios · Parques · Jardines · Plazas · Constructoras',
    subcategories: [
      {
        title: 'Línea de Sustratos HiSoil',
        products: [
          {
            name: 'HiSoil Compost',
            slug: 'compost-paisajismo',
            desc: 'Enmienda orgánica para jardinería, paisajismo y espacios verdes.',
          },
          {
            name: 'HiSoil Tierra Fértil',
            desc: 'Tierra enriquecida lista para jardinería, paisajismo y espacios verdes.',
          },
          {
            name: 'HiSoil Level',
            desc: 'Sustrato para nivelación, preparación y acondicionamiento de terrenos.',
          },
          {
            name: 'HiSoil Outdoor',
            desc: 'Sustrato profesional para plantas de exterior, jardines y paisajismo.',
          },
          {
            name: 'HiSoil Indoor',
            desc: 'Sustrato profesional para plantas de interior y decoración vegetal.',
          },
          {
            name: 'HiSoil Green Roof',
            desc: 'Sustrato técnico liviano para techos verdes, terrazas y cubiertas vegetadas.',
          },
        ],
      },
    ],
  },
  {
    id: 'infraestructura',
    name: 'Infraestructura & Restauración Ambiental',
    Icon: Mountain,
    eyebrow: 'Línea E',
    intro:
      'Soluciones para revegetación, recuperación de suelos y compensaciones ambientales en grandes obras.',
    image:
      'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1600',
    applications:
      'Revegetación · Recuperación de suelos · Taludes · Canteras · Minería · Obras civiles · Corredores viales · Compensaciones ambientales',
    subcategories: [
      {
        products: [
          {
            name: 'HiSoil Restore',
            desc: 'Sustrato profesional para recuperación integral de suelos degradados y revegetación ambiental.',
          },
          {
            name: 'HiSoil HydroMulch',
            desc: 'Sistema profesional de hidrosiembra para revegetación, control de erosión y restauración ambiental.',
          },
          {
            name: 'HiSoil Erosion',
            desc: 'Sistema profesional para control de erosión y estabilización de suelos.',
            status: 'a-desarrollar',
          },
          {
            name: 'HiSoil Native',
            desc: 'Mezclas profesionales de semillas nativas para restauración ecológica y revegetación de ecosistemas.',
            status: 'a-desarrollar',
          },
        ],
      },
    ],
  },
];

interface ProductCardProps {
  p: Product;
  index: number;
}

function ProductCard({ p, index }: ProductCardProps) {
  const [ref, visible] = useReveal<HTMLAnchorElement>({ threshold: 0.15 });
  const img = SHOW_PLACEHOLDERS ? undefined : productImages[p.name];
  const slug =
    p.slug ??
    productSlugs[p.name] ??
    p.name.toLowerCase().replace('hisoil ', '').replace(/\s+/g, '-');

  return (
    <Link
      to={`/productos/${slug}`}
      ref={ref}
      className={`scroll-reveal group bg-white border border-oliva/15 hover:border-oliva/50 hover:shadow-2xl rounded-2xl overflow-hidden transition-all duration-500 flex flex-col h-full block ${visible ? 'is-visible' : ''}`}
      style={{ transitionDelay: visible ? `${(index % 4) * 0.05}s` : '0s' }}
    >
      {/* Imagen — ~38% de la card */}
      <div className="relative aspect-[9/4] overflow-hidden flex-shrink-0">
        {img ? (
          <img
            loading="lazy"
            decoding="async"
            src={img}
            alt={p.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <ImagePlaceholder label={p.name} />
        )}
        {p.status && (
          <span
            className={`absolute top-3 right-3 text-[9px] font-mono uppercase tracking-widest px-2 py-1 rounded-full whitespace-nowrap ${
              p.status === 'a-desarrollar' ? 'bg-lima text-oliva' : 'bg-white/90 text-oliva/70'
            }`}
          >
            {p.status === 'a-desarrollar' ? 'a desarrollar' : 'opcional'}
          </span>
        )}
      </div>

      {/* Contenido */}
      <div className="flex flex-col flex-1 min-w-0 p-5">
        <h4 className="font-bold text-base md:text-lg leading-tight text-oliva mb-2">{p.name}</h4>
        <p className="text-sm leading-relaxed mb-4 flex-1 text-gray-700 line-clamp-3">{p.desc}</p>
        <div className="flex items-center justify-between pt-3 border-t border-oliva/10">
          <span className="text-xs font-mono text-oliva/60 group-hover:text-oliva transition-colors duration-300">
            Ver ficha técnica
          </span>
          <ArrowUpRight className="w-4 h-4 text-oliva/50 group-hover:text-oliva group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
        </div>
      </div>
    </Link>
  );
}

interface CategoryBlockProps {
  category: Category;
  index: number;
}

function CategoryBlock({ category, index }: CategoryBlockProps) {
  const [ref, visible] = useReveal<HTMLDivElement>({ threshold: 0.15 });
  const { Icon } = category;
  const totalProducts = category.subcategories.reduce((sum, sc) => sum + sc.products.length, 0);

  return (
    <section
      ref={ref}
      id={category.id}
      className={`scroll-reveal py-16 md:py-24 border-t border-oliva/10 first:border-t-0 ${visible ? 'is-visible' : ''}`}
    >
      {/* Category header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-10 md:mb-14 items-start">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-oliva/10 backdrop-blur-md border border-oliva/20 flex items-center justify-center hover:bg-lima/25 hover:border-lima/40 transition-all duration-500">
              <Icon className="w-6 h-6 text-oliva" />
            </div>
            <div className="text-oliva text-xs font-mono uppercase tracking-widest">
              {String(index + 1).padStart(2, '0')} · {category.eyebrow}
            </div>
          </div>
          <h2 className="text-oliva mb-4">{category.name}</h2>
          <p className="text-gray-700 leading-relaxed mb-6">{category.intro}</p>

          {category.segments && (
            <div className="mb-4">
              <div className="text-oliva text-[10px] font-mono uppercase tracking-widest mb-2">
                Segmentos
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">{category.segments}</p>
            </div>
          )}
          {category.applications && (
            <div className="mb-4">
              <div className="text-oliva text-[10px] font-mono uppercase tracking-widest mb-2">
                Aplicaciones
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">{category.applications}</p>
            </div>
          )}

          <div className="inline-flex items-center gap-2 mt-2 bg-oliva/5 border border-oliva/15 rounded-full px-4 py-2">
            <span className="text-oliva font-bold text-lg">{totalProducts}</span>
            <span className="text-oliva/70 text-xs font-mono uppercase tracking-widest">
              productos
            </span>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden">
            {SHOW_PLACEHOLDERS ? (
              <ImagePlaceholder label={`${category.name} — imagen editorial de familia`} />
            ) : (
              <img
                loading="lazy"
                decoding="async"
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
              />
            )}
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="space-y-10">
        {category.subcategories.map((sub, si) => (
          <div key={si}>
            {sub.title && (
              <div className="mb-6 flex items-center gap-3">
                <div className="h-px flex-1 bg-oliva/15" />
                <h3 className="text-oliva font-bold text-lg md:text-xl">{sub.title}</h3>
                <div className="h-px flex-1 bg-oliva/15" />
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
              {sub.products.map((p, i) => (
                <ProductCard key={p.name + i} p={p} index={i} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ProductCatalog() {
  const [active, setActive] = useState('agricultura');
  const chipRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  // Scroll-spy: watch each category section and update active chip based on visibility.
  useEffect(() => {
    const sections = categories
      .map((c) => document.getElementById(c.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    // The section closest to the top of the viewport (accounting for sticky headers) wins.
    const OFFSET = 200; // header (~80) + chip nav (~60) + comfort margin

    const onScroll = () => {
      let currentId = sections[0].id;
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top - OFFSET <= 0) {
          currentId = section.id;
        } else {
          break;
        }
      }
      setActive(currentId);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Keep the active chip scrolled into view within its horizontal container.
  useEffect(() => {
    const el = chipRefs.current[active];
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }, [active]);

  return (
    <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 bg-nata">
      <div className="max-w-[1600px] mx-auto w-full">
        {/* Sticky category nav */}
        <div className="sticky top-20 z-30 -mx-6 md:-mx-12 lg:-mx-20 px-6 md:px-12 lg:px-20 py-4 bg-nata/85 backdrop-blur-md border-y border-oliva/10 mb-8">
          <div className="flex items-center gap-2 md:gap-3 overflow-x-auto scrollbar-hide">
            <span className="text-oliva/50 text-[10px] font-mono uppercase tracking-widest flex-shrink-0 mr-2">
              Ir a
            </span>
            {categories.map((c) => (
              <a
                key={c.id}
                ref={(el) => {
                  chipRefs.current[c.id] = el;
                }}
                href={`#${c.id}`}
                onClick={() => setActive(c.id)}
                className={`whitespace-nowrap text-sm px-4 py-2 rounded-full border transition-all flex-shrink-0 ${
                  active === c.id
                    ? 'bg-oliva text-white border-oliva'
                    : 'text-oliva border-oliva/25 hover:border-oliva'
                }`}
              >
                {c.name}
              </a>
            ))}
          </div>
        </div>

        {categories.map((c, i) => (
          <CategoryBlock key={c.id} category={c} index={i} />
        ))}
      </div>
    </section>
  );
}
