import { useState } from 'react';
import { ArrowUpRight, Sprout, Layers, TreePine, Mountain } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';

type LucideIcon = typeof Sprout;

// Product name -> image (single map for all lines, matches by name)
const productImages: Record<string, string> = {
  // Agricultura
  'HiSoil Compost': 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=700&q=80&fit=crop',
  'HiSoil Biofert': 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=700&q=80&fit=crop',
  'HiSoil Humic': 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=700&q=80&fit=crop',
  'HiSoil Carbon': 'https://images.unsplash.com/photo-1596568359553-a56de6970068?w=700&q=80&fit=crop',
  'HiSoil NPK Organic': 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=700&q=80&fit=crop',
  'HiSoil Phospho': 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=700&q=80&fit=crop',
  'HiSoil Potassium': 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=700&q=80&fit=crop',
  'HiSoil BioProtect': 'https://images.unsplash.com/photo-1470753523043-63c8b7f0e6a2?w=700&q=80&fit=crop',
  'HiSoil AgroEco': 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=700&q=80&fit=crop',
  'HiSoil Regenera': 'https://images.unsplash.com/photo-1508175688576-0c076b47b5b5?w=700&q=80&fit=crop',
  // Sustratos
  'HiSoil Seed': 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=700&q=80&fit=crop',
  'HiSoil Plug': 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?w=700&q=80&fit=crop',
  'HiSoil Nursery': 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=700&q=80&fit=crop',
  'HiSoil Premium': 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=700&q=80&fit=crop',
  'HiSoil Forest': 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=700&q=80&fit=crop',
  'HiSoil Tobacco': 'https://images.unsplash.com/photo-1509085300046-3c17b53a08b6?w=700&q=80&fit=crop',
  'HiSoil Berry': 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=700&q=80&fit=crop',
  'HiSoil Cannabis': 'https://images.unsplash.com/photo-1536819114556-1e10f967fb61?w=700&q=80&fit=crop',
  'HiSoil Citrus': 'https://images.unsplash.com/photo-1567306301408-9b74779a11af?w=700&q=80&fit=crop',
  'HiSoil Turf': 'https://images.unsplash.com/photo-1590689085281-b8f77bffb6bb?w=700&q=80&fit=crop',
  'HiSoil Hydro': 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=700&q=80&fit=crop',
  'HiSoil Palm': 'https://images.unsplash.com/photo-1449752955586-8fbc39a6d68b?w=700&q=80&fit=crop',
  // Paisajismo
  'HiSoil Tierra Fértil': 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=700&q=80&fit=crop',
  'HiSoil Level': 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=700&q=80&fit=crop',
  'HiSoil Outdoor': 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=700&q=80&fit=crop',
  'HiSoil Indoor': 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=700&q=80&fit=crop',
  'HiSoil GreenRoof': 'https://images.unsplash.com/photo-1527863280617-15596f92e5c8?w=700&q=80&fit=crop',
  'HiSoil Chip': 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=700&q=80&fit=crop',
  'HiSoil MiniChip': 'https://images.unsplash.com/photo-1518131955366-a2b23ded8ed8?w=700&q=80&fit=crop',
  'HiSoil Sphagnum': 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=700&q=80&fit=crop',
  'HiSoil Perlite': 'https://images.unsplash.com/photo-1596568359553-a56de6970068?w=700&q=80&fit=crop',
  'HiSoil Pometina': 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=700&q=80&fit=crop',
  'HiSoil Vermiculite': 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=700&q=80&fit=crop',
  // Infraestructura
  'HiSoil Restore': 'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=700&q=80&fit=crop',
  'HiSoil HydroMulch': 'https://images.unsplash.com/photo-1518131955366-a2b23ded8ed8?w=700&q=80&fit=crop',
  'HiSoil Erosion': 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=700&q=80&fit=crop',
  'HiSoil Native': 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=700&q=80&fit=crop',
};

interface Product {
  name: string;
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
    intro: 'Enmiendas, biofertilizantes y bioinsumos para cultivos extensivos e intensivos que regeneran el suelo y potencian el rendimiento.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1600',
    subcategories: [
      {
        products: [
          { name: 'HiSoil Compost', desc: 'Enmienda orgánica para cultivos extensivos e intensivos.' },
          { name: 'HiSoil Biofert', desc: 'Biofertilizante líquido con microorganismos para aplicación al suelo y fertirriego.' },
          { name: 'HiSoil Humic', desc: 'Concentrado de ácidos húmicos y fúlvicos.' },
          { name: 'HiSoil Carbon', desc: 'Mejorador de suelo rico en carbono estable.' },
          { name: 'HiSoil NPK Organic', desc: 'Fertilizante organomineral de liberación gradual.' },
          { name: 'HiSoil Phospho', desc: 'Fertilizante enriquecido con fósforo.' },
          { name: 'HiSoil Potassium', desc: 'Fertilizante enriquecido con potasio.' },
          { name: 'HiSoil BioProtect', desc: 'Bioinsumo con microorganismos benéficos.' },
          { name: 'HiSoil AgroEco', desc: 'Biofertilizante certificado para producción orgánica.' },
          { name: 'HiSoil Regenera', desc: 'Programa de regeneración de suelos.' },
        ],
      },
    ],
  },
  {
    id: 'sustratos',
    name: 'Sustratos Profesionales',
    Icon: Layers,
    eyebrow: 'Línea B',
    intro: 'Mezclas formuladas para maximizar el desarrollo radicular, la uniformidad del cultivo y el rendimiento.',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1600',
    subcategories: [
      {
        products: [
          { name: 'HiSoil Seed', desc: 'Sustrato para siembra y germinación.' },
          { name: 'HiSoil Plug', desc: 'Sustrato para producción de plantines en plugs.' },
          { name: 'HiSoil Nursery', desc: 'Sustrato para viveros de producción.' },
          { name: 'HiSoil Premium', desc: 'Mezcla premium para cultivos exigentes.' },
          { name: 'HiSoil Forest', desc: 'Sustrato para producción forestal.' },
          { name: 'HiSoil Tobacco', desc: 'Sustrato específico para tabaco.' },
          { name: 'HiSoil Berry', desc: 'Sustrato optimizado para arándanos y frutos rojos.' },
          { name: 'HiSoil Cannabis', desc: 'Sustrato profesional para cannabis medicinal.' },
          { name: 'HiSoil Citrus', desc: 'Sustrato para cítricos y frutales.' },
          { name: 'HiSoil Turf', desc: 'Sustrato para producción de césped en rollo.' },
          { name: 'HiSoil Hydro', desc: 'Sustrato para cultivos hidropónicos.' },
          { name: 'HiSoil Palm', desc: 'Sustrato para palmeras y plantas ornamentales.', status: 'opcional' },
        ],
      },
    ],
  },
  {
    id: 'paisajismo',
    name: 'Paisajismo & Techos Verdes',
    Icon: TreePine,
    eyebrow: 'Línea C',
    intro: 'Sustratos y materias primas para empresas de paisajismo, countries, parques y desarrollos inmobiliarios.',
    image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1600',
    segments: 'Empresas de paisajismo · Clubes · Countries · Desarrollos inmobiliarios · Parques · Jardines · Plazas · Constructoras',
    subcategories: [
      {
        title: 'Línea de Sustratos HiSoil',
        products: [
          { name: 'HiSoil Compost', desc: 'Compost premium.' },
          { name: 'HiSoil Tierra Fértil', desc: 'Tierra enriquecida para jardinería y paisajismo.' },
          { name: 'HiSoil Level', desc: 'Sustrato para nivelación y acondicionamiento de terrenos.' },
          { name: 'HiSoil Outdoor', desc: 'Sustrato para plantas de exterior.' },
          { name: 'HiSoil Indoor', desc: 'Sustrato para plantas de interior.' },
          { name: 'HiSoil GreenRoof', desc: 'Sustrato para terrazas y techos verdes.' },
        ],
      },
      {
        title: 'Línea de Materias Primas',
        products: [
          { name: 'HiSoil Chip', desc: 'Astillas de madera para cobertura.' },
          { name: 'HiSoil MiniChip', desc: 'Astillas finas seleccionadas.' },
          { name: 'HiSoil Sphagnum', desc: 'Turba sphagnum.' },
          { name: 'HiSoil Perlite', desc: 'Perlita expandida.' },
          { name: 'HiSoil Pometina', desc: 'Pometina para formulación de sustratos.' },
          { name: 'HiSoil Vermiculite', desc: 'Vermiculita expandida.' },
        ],
      },
    ],
  },
  {
    id: 'infraestructura',
    name: 'Infraestructura & Restauración Ambiental',
    Icon: Mountain,
    eyebrow: 'Línea D',
    intro: 'Soluciones para revegetación, recuperación de suelos y compensaciones ambientales en grandes obras.',
    image: 'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1600',
    applications: 'Revegetación · Recuperación de suelos · Taludes · Canteras · Minería · Obras civiles · Corredores viales · Compensaciones ambientales',
    subcategories: [
      {
        products: [
          { name: 'HiSoil Restore', desc: 'Sustrato para recuperación integral de suelos degradados.' },
          { name: 'HiSoil Compost', desc: 'Compost profesional para uso extensivo.' },
          { name: 'HiSoil Biofert', desc: 'Biofertilizante para acelerar la revegetación.' },
          { name: 'HiSoil Carbon', desc: 'Mejorador de suelo rico en carbono estable.' },
          { name: 'HiSoil HydroMulch', desc: 'Aplicación hidráulica para taludes y grandes superficies.', status: 'a-desarrollar' },
          { name: 'HiSoil Erosion', desc: 'Control de erosión en pendientes y bordes.', status: 'a-desarrollar' },
          { name: 'HiSoil GreenRoof', desc: 'Sustrato para terrazas y techos verdes.' },
          { name: 'HiSoil Native', desc: 'Mezcla con semillas nativas para restauración ecológica.' },
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
  const [ref, visible] = useReveal<HTMLDivElement>({ threshold: 0.15 });
  const img = productImages[p.name];

  return (
    <div
      ref={ref}
      className={`scroll-reveal group relative overflow-hidden bg-white border border-oliva/15 hover:border-oliva/50 hover:shadow-2xl rounded-2xl p-5 md:p-6 transition-all duration-500 flex flex-col min-h-[220px] ${visible ? 'is-visible' : ''}`}
      style={{ transitionDelay: visible ? `${(index % 4) * 0.05}s` : '0s' }}
    >
      {/* Hover image background */}
      {img && (
        <>
          <img
            src={img}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 pointer-events-none"
          />
          {/* Solo un gradient oscuro suave para asegurar contraste del texto — la imagen sigue visible */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        </>
      )}

      {/* Contenido */}
      <div className="relative z-10 flex gap-4 h-full">
        {/* Thumbnail cuadrado con imagen */}
        <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 rounded-xl overflow-hidden border border-oliva/15 group-hover:border-white/40 transition-colors duration-500 relative">
          {img ? (
            <img
              src={img}
              alt={p.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-oliva/10 flex items-center justify-center">
              <span className="text-oliva/40 font-mono text-xs">HiSoil</span>
            </div>
          )}
        </div>

        {/* Textos y footer */}
        <div className="flex flex-col flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3 mb-2">
            <h4 className="font-bold text-base md:text-lg leading-tight transition-colors duration-500 text-oliva group-hover:text-white">
              {p.name}
            </h4>
            {p.status && (
              <span className={`text-[9px] font-mono uppercase tracking-widest px-2 py-1 rounded-full flex-shrink-0 whitespace-nowrap transition-colors duration-500 ${
                p.status === 'a-desarrollar'
                  ? 'bg-lima/20 text-oliva border border-lima/40 group-hover:bg-lima group-hover:text-oliva group-hover:border-lima'
                  : 'bg-oliva/10 text-oliva/70 border border-oliva/20 group-hover:bg-white/20 group-hover:text-white group-hover:border-white/40'
              }`}>
                {p.status === 'a-desarrollar' ? 'a desarrollar' : 'opcional'}
              </span>
            )}
          </div>
          <p className="text-sm leading-relaxed mb-4 flex-1 transition-colors duration-500 text-gray-700 group-hover:text-white/90">
            {p.desc}
          </p>
          <div className="flex items-center justify-between pt-3 border-t transition-colors duration-500 border-oliva/10 group-hover:border-white/25">
            <span className="text-xs font-mono transition-colors duration-500 text-oliva/60 group-hover:text-lima">
              Ver ficha técnica
            </span>
            <ArrowUpRight className="w-4 h-4 transition-all duration-500 text-oliva/50 group-hover:text-lima group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </div>
    </div>
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
              <div className="text-oliva text-[10px] font-mono uppercase tracking-widest mb-2">Segmentos</div>
              <p className="text-gray-700 text-sm leading-relaxed">{category.segments}</p>
            </div>
          )}
          {category.applications && (
            <div className="mb-4">
              <div className="text-oliva text-[10px] font-mono uppercase tracking-widest mb-2">Aplicaciones</div>
              <p className="text-gray-700 text-sm leading-relaxed">{category.applications}</p>
            </div>
          )}

          <div className="inline-flex items-center gap-2 mt-2 bg-oliva/5 border border-oliva/15 rounded-full px-4 py-2">
            <span className="text-oliva font-bold text-lg">{totalProducts}</span>
            <span className="text-oliva/70 text-xs font-mono uppercase tracking-widest">productos</span>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="aspect-[16/10] rounded-2xl overflow-hidden">
            <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
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

  return (
    <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 bg-nata">
      <div className="max-w-[1600px] mx-auto w-full">
        {/* Sticky category nav */}
        <div className="sticky top-20 z-30 -mx-6 md:-mx-12 lg:-mx-20 px-6 md:px-12 lg:px-20 py-4 bg-nata/85 backdrop-blur-md border-y border-oliva/10 mb-8">
          <div className="flex items-center gap-2 md:gap-3 overflow-x-auto">
            <span className="text-oliva/50 text-[10px] font-mono uppercase tracking-widest flex-shrink-0 mr-2">Ir a</span>
            {categories.map((c) => (
              <a
                key={c.id}
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
