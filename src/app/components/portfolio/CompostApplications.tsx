import { TreePine, Building2, Wheat, Mountain } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';

const applications = [
  {
    Icon: TreePine,
    tag: 'Paisajismo',
    title: 'Central Park Conservancy',
    place: 'Nueva York · Estados Unidos',
    description: 'Los programas de mantenimiento de Central Park incorporan compost para mejorar la estructura del suelo, aumentar la infiltración de agua y favorecer el desarrollo del césped y del arbolado urbano.',
    benefits: [
      'Mayor desarrollo radicular',
      'Mejor retención de humedad',
      'Reducción del uso de fertilizantes',
      'Mayor resistencia del césped al tránsito',
      'Incremento de la actividad biológica del suelo',
    ],
    image: 'https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?w=1200&q=85&fit=crop',
  },
  {
    Icon: Building2,
    tag: 'Techos Verdes',
    title: 'Chicago City Hall',
    place: 'Chicago · Estados Unidos',
    description: 'El techo verde del Ayuntamiento utiliza un sustrato liviano con materia orgánica estabilizada. Demostró beneficios en reducción de temperatura superficial, retención de agua de lluvia y aislamiento térmico del edificio.',
    benefits: [
      'Reducción del efecto isla de calor',
      'Menor escorrentía de aguas pluviales',
      'Mayor biodiversidad urbana',
      'Ahorro energético',
      'Mayor vida útil de la impermeabilización',
    ],
    image: 'https://images.unsplash.com/photo-1527863280617-15596f92e5c8?w=1200&q=85&fit=crop',
  },
  {
    Icon: Wheat,
    tag: 'Agricultura',
    title: 'Universidad Estatal de Iowa',
    place: 'Iowa · Estados Unidos',
    description: 'Ensayo de largo plazo en rotación maíz, soja y trigo. El compost aumentó materia orgánica, mejoró fertilidad y mantuvo rendimientos superiores. El maíz aumentó hasta 10–11% y el trigo alrededor de 4%.',
    benefits: [
      'Mayor materia orgánica',
      'Menor necesidad de fertilización mineral',
      'Mejora de la estructura del suelo',
      'Mayor estabilidad de rendimiento',
      'Mejor desempeño en siembra directa',
    ],
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=85&fit=crop',
  },
  {
    Icon: Mountain,
    tag: 'Recuperación de Suelos',
    title: 'Restauración de áreas mineras',
    place: 'Europa, Australia y EE.UU.',
    description: 'Proyectos de restauración ambiental utilizan compost para recuperar suelos degradados por minería. Se aplicaron dosis de 60 a 100 t/ha para lograr recuperación exitosa de la vegetación.',
    benefits: [
      'Recuperación de la fertilidad',
      'Mayor infiltración de agua',
      'Disminución de la erosión',
      'Establecimiento de vegetación permanente',
      'Incremento de la biodiversidad',
    ],
    image: 'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=1200&q=85&fit=crop',
  },
];

interface CardProps {
  a: typeof applications[number];
  index: number;
}

function AppCard({ a, index }: CardProps) {
  const [ref, visible] = useReveal<HTMLDivElement>({ threshold: 0.15 });
  const { Icon } = a;

  return (
    <div
      ref={ref}
      className={`scroll-reveal group bg-white rounded-2xl overflow-hidden border border-oliva/15 hover:border-oliva/40 hover:shadow-2xl transition-all duration-500 flex flex-col md:flex-row ${visible ? 'is-visible' : ''}`}
      style={{ transitionDelay: visible ? `${(index % 2) * 0.1}s` : '0s' }}
    >
      {/* Image */}
      <div className="relative md:w-2/5 aspect-[16/9] md:aspect-auto overflow-hidden flex-shrink-0">
        <img src={a.image} alt={a.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-noche/70 via-transparent to-transparent" />
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
            <Icon className="w-5 h-5 text-white" />
          </div>
          <span className="bg-white/95 text-oliva text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full font-semibold">{a.tag}</span>
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 p-6 md:p-8 flex flex-col">
        <div className="mb-4">
          <h3 className="text-oliva font-bold text-xl md:text-2xl leading-tight mb-1">{a.title}</h3>
          <div className="text-gray-600 text-xs font-mono">{a.place}</div>
        </div>
        <p className="text-gray-700 text-sm leading-relaxed mb-5">{a.description}</p>

        <div className="mt-auto pt-4 border-t border-oliva/10">
          <div className="text-oliva text-[10px] font-mono uppercase tracking-widest mb-3">Beneficios comprobados</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
            {a.benefits.map((b) => (
              <div key={b} className="flex items-start gap-2 text-gray-700 text-xs">
                <div className="w-1.5 h-1.5 rounded-full bg-lima mt-1.5 flex-shrink-0" />
                <span>{b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function CompostApplications() {
  const [headerRef, headerVisible] = useReveal<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section className="theme-compost py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 bg-oliva relative overflow-hidden">
      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 0,transparent 80px),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 0,transparent 80px)`,
        }}
      />
      <div className="relative max-w-[1600px] mx-auto w-full">
        <div
          ref={headerRef}
          className={`max-w-3xl mb-12 md:mb-16 scroll-reveal ${headerVisible ? 'is-visible' : ''}`}
        >
          <div className="inline-block border border-lima/40 bg-lima/10 px-3 py-1 mb-6">
            <span className="text-lima text-xs font-mono uppercase tracking-widest">Referencias internacionales</span>
          </div>
          <h2 className="text-white mb-4">Aplicaciones comprobadas del compost.</h2>
          <p className="text-white/85 leading-relaxed text-lg">
            El compost demostró su eficacia en proyectos agrícolas, urbanos y ambientales de todo el mundo. Ejemplos respaldados por investigaciones y experiencias internacionales.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {applications.map((a, i) => (
            <AppCard key={a.title} a={a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
