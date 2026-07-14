import { useState } from 'react';
import { Link } from 'react-router';
import { ArrowUpRight, Sprout, Layers, TreePine, Mountain } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';

type LucideIcon = typeof Sprout;

// Verified image pool — all agriculture / soil / plant related
const IMG = {
  fieldSunset: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=400&fit=crop',
  cornCrop: 'https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?w=400&h=400&fit=crop',
  wheatField: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=400&fit=crop',
  soilDark: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=400&h=400&fit=crop',
  handSoil: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop',
  compostPile: 'https://images.unsplash.com/photo-1611843467160-25afb8df1074?w=400&h=400&fit=crop',
  greenSprout: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400&h=400&fit=crop',
  seedlings: 'https://images.unsplash.com/photo-1595855759920-86582396756a?w=400&h=400&fit=crop',
  cropRows: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=400&h=400&fit=crop',
  greenLeaves: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop',
  farmerHand: 'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=400&h=400&fit=crop',
  waterDrops: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?w=400&h=400&fit=crop',
  regenAgri: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=400&fit=crop',
  berry: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&h=400&fit=crop',
  cannabisLeaf: 'https://images.unsplash.com/photo-1536819114556-1e10f967fb61?w=400&h=400&fit=crop',
  citrusFruit: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?w=400&h=400&fit=crop',
  grassLawn: 'https://images.unsplash.com/photo-1493589976221-c2357c31ad77?w=400&h=400&fit=crop',
  hydroponics: 'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=400&h=400&fit=crop',
  palmLeaf: 'https://images.unsplash.com/photo-1516214104703-d870798883c5?w=400&h=400&fit=crop',
  gardenTools: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop',
  indoorPlant: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=400&fit=crop',
  outdoorGarden: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400&h=400&fit=crop',
  greenRoof: 'https://images.unsplash.com/photo-1527863280617-15596f92e5c8?w=400&h=400&fit=crop',
  woodChips: 'https://images.unsplash.com/photo-1445264718234-a623be589d37?w=400&h=400&fit=crop',
  mossGreen: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&h=400&fit=crop',
  perlite: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=400&h=400&fit=crop',
  tobaccoLeaf: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=400&fit=crop',
  landscape: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=400&fit=crop',
  taludes: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400&h=400&fit=crop',
  nativeSeeds: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=400&h=400&fit=crop',
};

// Product name -> image
const productImages: Record<string, string> = {
  // Agricultura
  'HiSoil Compost': IMG.compostPile,
  'HiSoil Biofert': IMG.greenSprout,
  'HiSoil Humic': IMG.soilDark,
  'HiSoil Carbon': IMG.farmerHand,
  'HiSoil NPK Organic': IMG.wheatField,
  'HiSoil Phospho': IMG.cropRows,
  'HiSoil Potassium': IMG.cornCrop,
  'HiSoil BioProtect': IMG.greenLeaves,
  'HiSoil AgroEco': IMG.regenAgri,
  'HiSoil Regenera': IMG.fieldSunset,
  // Sustratos
  'HiSoil Seed': IMG.seedlings,
  'HiSoil Plug': IMG.seedlings,
  'HiSoil Nursery': IMG.handSoil,
  'HiSoil Premium': IMG.cropRows,
  'HiSoil Forest': IMG.landscape,
  'HiSoil Tobacco': IMG.tobaccoLeaf,
  'HiSoil Berry': IMG.berry,
  'HiSoil Cannabis': IMG.cannabisLeaf,
  'HiSoil Citrus': IMG.citrusFruit,
  'HiSoil Turf': IMG.grassLawn,
  'HiSoil Hydro': IMG.hydroponics,
  'HiSoil Palm': IMG.palmLeaf,
  // Paisajismo
  'HiSoil Tierra Fértil': IMG.gardenTools,
  'HiSoil Level': IMG.handSoil,
  'HiSoil Outdoor': IMG.outdoorGarden,
  'HiSoil Indoor': IMG.indoorPlant,
  'HiSoil GreenRoof': IMG.greenRoof,
  'HiSoil Chip': IMG.woodChips,
  'HiSoil MiniChip': IMG.woodChips,
  'HiSoil Sphagnum': IMG.mossGreen,
  'HiSoil Perlite': IMG.perlite,
  'HiSoil Pometina': IMG.soilDark,
  'HiSoil Vermiculite': IMG.perlite,
  // Infraestructura
  'HiSoil Restore': IMG.taludes,
  'HiSoil HydroMulch': IMG.waterDrops,
  'HiSoil Erosion': IMG.taludes,
  'HiSoil Native': IMG.nativeSeeds,
};

// Name -> detail page slug
const productSlugs: Record<string, string> = {
  'HiSoil Compost': 'compost',
  'HiSoil Biofert': 'biofert',
  'HiSoil Humic': 'humic',
  'HiSoil Carbon': 'carbon',
  'HiSoil NPK Organic': 'npk-organic',
  'HiSoil Phospho': 'phospho',
  'HiSoil Potassium': 'potassium',
  'HiSoil BioProtect': 'bioprotect',
  'HiSoil AgroEco': 'agroeco',
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
  'HiSoil Tierra Fértil': 'tierra-fertil',
  'HiSoil Level': 'level',
  'HiSoil Outdoor': 'outdoor',
  'HiSoil Indoor': 'indoor',
  'HiSoil GreenRoof': 'greenroof',
  'HiSoil Chip': 'chip',
  'HiSoil MiniChip': 'minichip',
  'HiSoil Sphagnum': 'sphagnum',
  'HiSoil Perlite': 'perlite',
  'HiSoil Pometina': 'pometina',
  'HiSoil Vermiculite': 'vermiculite',
  'HiSoil Restore': 'restore',
  'HiSoil HydroMulch': 'hydromulch',
  'HiSoil Erosion': 'erosion',
  'HiSoil Native': 'native',
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
  const [ref, visible] = useReveal<HTMLAnchorElement>({ threshold: 0.15 });
  const img = productImages[p.name];
  const slug = productSlugs[p.name] ?? p.name.toLowerCase().replace('hisoil ', '').replace(/\s+/g, '-');

  return (
    <Link
      to={`/productos/${slug}`}
      ref={ref}
      className={`scroll-reveal group relative overflow-hidden bg-white border border-oliva/15 hover:border-oliva/50 hover:shadow-2xl rounded-2xl p-5 md:p-6 transition-all duration-500 flex flex-col min-h-[220px] block ${visible ? 'is-visible' : ''}`}
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
