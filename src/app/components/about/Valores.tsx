import { Handshake, FlaskConical, Leaf, Users, Award, Scale } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';

const valores = [
  {
    number: "01",
    Icon: Handshake,
    title: "Compromiso",
    quote: "Nos involucramos en cada proyecto hasta alcanzar los resultados esperados.",
    description: "Acompañamos a nuestros clientes desde el diagnóstico inicial hasta la implementación y el seguimiento técnico, construyendo relaciones de largo plazo basadas en la confianza.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=900&q=85&fit=crop",
  },
  {
    number: "02",
    Icon: FlaskConical,
    title: "Innovación",
    quote: "Desarrollamos soluciones adaptadas a cada desafío.",
    description: "Incorporamos nuevas tecnologías, procesos y conocimientos para mejorar continuamente nuestros productos y servicios, ofreciendo soluciones eficientes y de alto valor agregado.",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=900&q=85&fit=crop",
  },
  {
    number: "03",
    Icon: Leaf,
    title: "Sustentabilidad",
    quote: "La economía circular es nuestra forma de trabajar.",
    description: "Promovemos la valorización de residuos orgánicos, la recuperación de nutrientes y la regeneración de suelos mediante procesos que reducen el impacto ambiental y generan beneficios económicos.",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=900&q=85&fit=crop",
  },
  {
    number: "04",
    Icon: Users,
    title: "Cercanía",
    quote: "Cada cliente cuenta con un equipo que conoce su realidad.",
    description: "Brindamos atención personalizada, acompañamiento permanente y respuestas ágiles para adaptar cada solución a las necesidades de cada proyecto.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=900&q=85&fit=crop",
  },
  {
    number: "05",
    Icon: Award,
    title: "Calidad",
    quote: "La calidad comienza en el proceso.",
    description: "Aplicamos controles durante cada etapa de producción para garantizar productos confiables, trazables y consistentes, cumpliendo con los estándares técnicos y ambientales correspondientes.",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=900&q=85&fit=crop",
  },
  {
    number: "06",
    Icon: Scale,
    title: "Responsabilidad",
    quote: "Cada decisión tiene impacto sobre el ambiente y las personas.",
    description: "Trabajamos con transparencia, compromiso y responsabilidad, promoviendo prácticas que contribuyen al desarrollo sostenible y al cumplimiento de los objetivos ambientales de nuestros clientes.",
    image: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=900&q=85&fit=crop",
  },
];

interface ValorCardProps {
  v: typeof valores[number];
  index: number;
}

function ValorCard({ v, index }: ValorCardProps) {
  const [ref, visible] = useReveal<HTMLDivElement>({ threshold: 0.2 });
  const { Icon } = v;

  return (
    <div
      ref={ref}
      className={`scroll-reveal group ${visible ? 'is-visible' : ''}`}
      style={{ transitionDelay: visible ? `${(index % 3) * 0.12}s` : '0s' }}
    >
      <div className="relative bg-white rounded-2xl overflow-hidden border border-oliva/15 hover:border-oliva/40 hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
        {/* Image with hover zoom */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={v.image}
            alt={v.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-noche/80 via-noche/25 to-transparent" />

          {/* Number top right */}
          <div className="absolute top-4 right-4 text-white/40 group-hover:text-lima transition-colors duration-500 font-bold font-mono text-3xl">
            {v.number}
          </div>

          {/* Icon + title at bottom */}
          <div className="absolute bottom-5 left-5 right-5 flex items-end gap-3">
            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center flex-shrink-0 group-hover:bg-lima group-hover:border-lima transition-all duration-500">
              <Icon className="w-5 h-5 text-white group-hover:text-oliva transition-colors duration-500" />
            </div>
            <h3 className="text-white font-bold text-2xl leading-tight">{v.title}</h3>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 md:p-7 flex-1 flex flex-col">
          <p className="text-oliva font-semibold leading-snug mb-3 text-lg">"{v.quote}"</p>
          <p className="text-gray-700 text-sm leading-relaxed">{v.description}</p>

          {/* Animated underline */}
          <div className="mt-5 h-[2px] bg-oliva/10 relative overflow-hidden rounded-full">
            <div className="absolute inset-y-0 left-0 bg-lima transition-all duration-700 ease-out w-0 group-hover:w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Valores() {
  const [headerRef, headerVisible] = useReveal<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 bg-paja">
      <div className="max-w-[1600px] mx-auto w-full">
        {/* Header */}
        <div
          ref={headerRef}
          className={`max-w-3xl mb-12 md:mb-16 scroll-reveal ${headerVisible ? 'is-visible' : ''}`}
        >
          <div className="inline-block border border-oliva/30 px-3 py-1 mb-6">
            <span className="text-oliva text-xs font-mono uppercase tracking-widest">05 — Lo que nos guía</span>
          </div>
          <h2 className="text-oliva mb-6">Seis valores. Una sola forma de trabajar.</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Cada proyecto refleja nuestra manera de entender la sustentabilidad: compromiso técnico, mejora continua y soluciones pensadas para generar impacto positivo en el ambiente y en nuestros clientes.
          </p>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {valores.map((v, i) => (
            <ValorCard key={v.number} v={v} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
