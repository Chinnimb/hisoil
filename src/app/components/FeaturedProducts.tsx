import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';

const products = [
  {
    name: "Compost Premium",
    tagline: "Enmienda orgánica de alta carga biológica que regenera suelos cansados y aumenta la materia orgánica en menos de una campaña.",
    image: "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900",
    href: "/productos",
  },
  {
    name: "Bioestimulantes Naturales",
    tagline: "Estimulación foliar y radicular para resistencia al estrés hídrico, mejor llenado de grano y respuesta más rápida en cada ciclo.",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900",
    href: "/productos",
  },
  {
    name: "Fertilizantes Líquidos",
    tagline: "Nutrición vegetal de absorción rápida diseñada para cultivos extensivos. Resultados visibles en 7 días en hoja y raíz.",
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900",
    href: "/productos",
  },
];

export function FeaturedProducts() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 bg-nata">
      <div className="max-w-[1600px] mx-auto w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
          <div className="max-w-2xl">
            <div className="inline-block border border-gray-300 px-3 py-1 mb-6">
              <span className="text-gray-600 text-xs font-mono uppercase tracking-widest">Productos</span>
            </div>
            <h2 className="text-oliva">Tecnología agrícola para resultados reales.</h2>
          </div>
          <Link to="/productos">
            <button className="border border-oliva text-oliva px-6 py-3 rounded-full text-sm font-medium hover:bg-oliva hover:text-white transition-all flex-shrink-0">
              Ver catálogo →
            </button>
          </Link>
        </div>

        {/* Product cards — Farm Minerals style: green bg, photo top, text bottom, arrow corner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {products.map((p, i) => (
            <Link
              key={p.name}
              to={p.href}
              className="group block reveal-up"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="relative bg-oliva rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                {/* Photo */}
                <div className="relative aspect-[5/4] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Arrow corner */}
                  <div className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center group-hover:bg-white group-hover:text-oliva transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5 text-white group-hover:text-oliva transition-colors" />
                  </div>
                </div>
                {/* Copy block */}
                <div className="p-7 md:p-8 lg:p-10 flex-1 flex flex-col">
                  <h3 className="text-white font-bold text-2xl md:text-[1.7rem] leading-[1.15] mb-5">{p.name}</h3>
                  <p className="text-white/80 text-xs md:text-sm uppercase tracking-wider leading-relaxed">
                    {p.tagline}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
