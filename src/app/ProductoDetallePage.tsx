import { Link, useParams, Navigate } from 'react-router';
import { ArrowLeft, ArrowUpRight, Check, ChevronRight, ShoppingCart, Eye, Sparkles, ShieldCheck, Package, Thermometer } from 'lucide-react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { useModal } from './context/ModalContext';
import { getProductBySlug, getRelatedProducts, lineLabels, isCompostProduct } from './data/products';
import { useReveal } from './hooks/useReveal';

export default function ProductoDetallePage() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;
  const { open } = useModal();
  const [heroRef, heroVisible] = useReveal<HTMLDivElement>({ threshold: 0.1 });

  if (!product) {
    return <Navigate to="/productos" replace />;
  }

  const { Icon } = product;
  const related = getRelatedProducts(product.slug, product.line);
  const isCompost = isCompostProduct(product.slug);

  return (
    <div className={`min-h-screen bg-nata ${isCompost ? 'theme-compost' : ''}`}>
      <Header />
      <main>
        {/* Breadcrumb */}
        <nav className="border-b border-oliva/10 bg-white">
          <div className="max-w-[1600px] mx-auto w-full px-6 md:px-12 lg:px-20 py-4 flex items-center gap-2 text-xs font-mono text-oliva/60 overflow-x-auto">
            <Link to="/" className="hover:text-oliva transition-colors whitespace-nowrap">Inicio</Link>
            <ChevronRight className="w-3 h-3 flex-shrink-0" />
            <Link to="/productos" className="hover:text-oliva transition-colors whitespace-nowrap">Productos</Link>
            <ChevronRight className="w-3 h-3 flex-shrink-0" />
            <Link to={`/productos#${product.line}`} className="hover:text-oliva transition-colors whitespace-nowrap">{lineLabels[product.line]}</Link>
            <ChevronRight className="w-3 h-3 flex-shrink-0" />
            <span className="text-oliva font-semibold whitespace-nowrap">{product.name}</span>
          </div>
        </nav>

        {/* Back link + compost badge */}
        <div className="max-w-[1600px] mx-auto w-full px-6 md:px-12 lg:px-20 pt-8 flex items-center justify-between gap-4">
          <Link
            to="/productos"
            className="inline-flex items-center gap-2 text-oliva/70 hover:text-oliva transition-colors text-sm font-medium group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Volver al catálogo
          </Link>
          {isCompost && (
            <div className="hidden md:inline-flex items-center gap-2 border border-oliva/30 rounded-full px-4 py-2 bg-white">
              <span className="w-2 h-2 rounded-full bg-lima" />
              <span className="text-oliva text-[10px] font-mono uppercase tracking-widest font-semibold">Línea Tierra Cálida</span>
            </div>
          )}
        </div>

        {/* Hero */}
        <section
          ref={heroRef}
          className={`py-10 md:py-14 lg:py-16 px-6 md:px-12 lg:px-20 scroll-reveal ${heroVisible ? 'is-visible' : ''}`}
        >
          <div className="max-w-[1600px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Image */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-oliva/10 shadow-xl">
              <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover" />
              {product.badge && (
                <span className="absolute top-5 left-5 bg-lima text-oliva text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 rounded-full font-bold shadow">
                  {product.badge}
                </span>
              )}
              {product.status && (
                <span className={`absolute top-5 right-5 text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 rounded-full font-bold shadow ${
                  product.status === 'a-desarrollar' ? 'bg-white text-oliva border border-oliva/40' : 'bg-white text-oliva/70 border border-oliva/20'
                }`}>
                  {product.status === 'a-desarrollar' ? 'a desarrollar' : 'opcional'}
                </span>
              )}
            </div>

            {/* Info */}
            <div className="flex flex-col">
              {/* Line tag */}
              <div className="inline-flex items-center gap-2 self-start mb-6">
                <div className="w-9 h-9 rounded-lg bg-oliva/10 backdrop-blur-md border border-oliva/20 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-oliva" />
                </div>
                <span className="text-oliva text-[11px] font-mono uppercase tracking-widest">
                  {lineLabels[product.line]}
                </span>
              </div>

              <h1 className="text-oliva font-bold leading-tight mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                {product.name}
              </h1>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">{product.short}</p>

              {/* Key specs */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white border border-oliva/15 rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Package className="w-3.5 h-3.5 text-oliva/60" />
                    <span className="text-oliva/60 text-[10px] font-mono uppercase tracking-widest">Formato</span>
                  </div>
                  <div className="text-oliva font-semibold text-sm">{product.format}</div>
                </div>
                <div className="bg-white border border-oliva/15 rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-oliva/60" />
                    <span className="text-oliva/60 text-[10px] font-mono uppercase tracking-widest">Aplicación</span>
                  </div>
                  <div className="text-oliva font-semibold text-sm">{product.usage}</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={open}
                  className="flex-1 flex items-center justify-center gap-2 bg-oliva text-white font-semibold py-3.5 px-6 rounded-full hover:bg-lima hover:text-oliva transition-all shadow-lg"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Consultar precio
                </button>
                <a
                  href="https://wa.me/5491100000000?text=Hola%20Hisoil,%20quisiera%20consultar%20por%20un%20producto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 border border-oliva text-oliva font-semibold py-3.5 px-6 rounded-full hover:bg-oliva hover:text-white transition-all"
                >
                  <Eye className="w-4 h-4" />
                  Hablar con un asesor
                </a>
              </div>

              {/* Certifications */}
              {product.certifications && product.certifications.length > 0 && (
                <div className="mt-6 pt-6 border-t border-oliva/10">
                  <div className="flex items-center gap-2 mb-3">
                    <ShieldCheck className="w-4 h-4 text-oliva" />
                    <span className="text-oliva text-[10px] font-mono uppercase tracking-widest">Certificaciones</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.certifications.map((c) => (
                      <span key={c} className="text-oliva text-xs font-mono bg-lima/20 border border-lima/40 px-2.5 py-1 rounded-full">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="py-10 md:py-14 px-6 md:px-12 lg:px-20 bg-white border-y border-oliva/10">
          <div className="max-w-[1600px] mx-auto w-full grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
            <div>
              <div className="text-oliva text-[10px] font-mono uppercase tracking-widest mb-3">Descripción</div>
              <h2 className="text-oliva text-2xl md:text-3xl font-bold leading-tight">¿Qué es {product.name}?</h2>
            </div>
            <div className="lg:col-span-2">
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">{product.description}</p>
            </div>
          </div>
        </section>

        {/* Composition + Benefits */}
        <section className="py-14 md:py-20 px-6 md:px-12 lg:px-20 bg-nata">
          <div className="max-w-[1600px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Composition */}
            <div className="bg-white border border-oliva/15 rounded-2xl p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-oliva/10 backdrop-blur-md border border-oliva/20 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-oliva" />
                </div>
                <h3 className="text-oliva font-bold text-xl">Composición técnica</h3>
              </div>
              <ul className="space-y-3">
                {product.composition.map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-oliva/10 border border-oliva/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-oliva" strokeWidth={3} />
                    </div>
                    <span className="text-gray-700 text-sm leading-relaxed">{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-oliva rounded-2xl p-8 md:p-10 text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-lima/25 backdrop-blur-md border border-lima/40 flex items-center justify-center">
                  <Check className="w-5 h-5 text-lima" />
                </div>
                <h3 className="text-white font-bold text-xl">Beneficios clave</h3>
              </div>
              <ul className="space-y-3">
                {product.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full bg-lima/25 border border-lima/40 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-2.5 h-2.5 text-lima" />
                    </div>
                    <span className="text-white/90 text-sm leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Applications + Crops */}
        <section className="py-14 md:py-20 px-6 md:px-12 lg:px-20 bg-white">
          <div className="max-w-[1600px] mx-auto w-full grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div>
              <div className="text-oliva text-[10px] font-mono uppercase tracking-widest mb-3">Cómo usar</div>
              <h3 className="text-oliva text-2xl md:text-3xl font-bold leading-tight mb-4">Formas de aplicación</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Recomendaciones técnicas del equipo Hisoil. Consultá con un asesor para ajustes específicos a tu operación.</p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {product.applications.map((a, i) => (
                <div key={a} className="bg-paja/40 border border-oliva/10 rounded-xl p-5 flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-oliva text-white flex items-center justify-center flex-shrink-0 font-mono text-xs font-bold">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <span className="text-gray-700 text-sm leading-relaxed">{a}</span>
                </div>
              ))}
            </div>

            {product.crops && product.crops.length > 0 && (
              <>
                <div className="lg:col-span-3 pt-8 mt-4 border-t border-oliva/10">
                  <div className="text-oliva text-[10px] font-mono uppercase tracking-widest mb-4">Cultivos recomendados</div>
                  <div className="flex flex-wrap gap-2">
                    {product.crops.map((c) => (
                      <span key={c} className="bg-oliva/10 text-oliva font-semibold text-sm px-4 py-2 rounded-full border border-oliva/20">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </section>

        {/* Packaging + Storage */}
        <section className="py-14 md:py-20 px-6 md:px-12 lg:px-20 bg-paja/40">
          <div className="max-w-[1600px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="bg-white border border-oliva/15 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-oliva/10 backdrop-blur-md border border-oliva/20 flex items-center justify-center">
                  <Package className="w-5 h-5 text-oliva" />
                </div>
                <h3 className="text-oliva font-bold text-lg">Presentaciones</h3>
              </div>
              <ul className="space-y-2">
                {product.packaging.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-gray-700 text-sm">
                    <Check className="w-4 h-4 text-oliva flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-oliva/15 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-oliva/10 backdrop-blur-md border border-oliva/20 flex items-center justify-center">
                  <Thermometer className="w-5 h-5 text-oliva" />
                </div>
                <h3 className="text-oliva font-bold text-lg">Almacenamiento</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">{product.storage}</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 md:py-20 px-6 md:px-12 lg:px-20 bg-oliva">
          <div className="max-w-[1600px] mx-auto w-full text-center max-w-3xl">
            <h2 className="text-white font-bold text-3xl md:text-4xl mb-4">¿Querés cotizar {product.name}?</h2>
            <p className="text-white/75 leading-relaxed mb-8 text-lg">Nuestro equipo técnico analiza tu operación y te propone un plan a medida. Respuesta en menos de 24 hs.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={open}
                className="bg-lima text-oliva font-bold py-3.5 px-8 rounded-full hover:bg-white transition-all shadow-lg"
              >
                Consultar precio
              </button>
              <a
                href="https://wa.me/5491100000000?text=Hola%20Hisoil,%20quisiera%20consultar%20por%20un%20producto"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/50 text-white font-medium py-3.5 px-8 rounded-full hover:bg-white/10 transition-all"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Related */}
        {related.length > 0 && (
          <section className="py-14 md:py-20 px-6 md:px-12 lg:px-20 bg-white">
            <div className="max-w-[1600px] mx-auto w-full">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
                <div>
                  <div className="text-oliva text-[10px] font-mono uppercase tracking-widest mb-3">Relacionados</div>
                  <h2 className="text-oliva text-2xl md:text-3xl font-bold">Otros productos de {lineLabels[product.line]}</h2>
                </div>
                <Link to="/productos" className="text-oliva font-medium text-sm hover:text-lima transition-colors flex items-center gap-2">
                  Ver catálogo completo <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {related.map((r) => {
                  const RIcon = r.Icon;
                  return (
                    <Link
                      key={r.slug}
                      to={`/productos/${r.slug}`}
                      className="group bg-white border border-oliva/15 hover:border-oliva/40 hover:shadow-2xl rounded-2xl overflow-hidden transition-all duration-500 flex flex-col"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img src={r.image} alt={r.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-noche/70 via-transparent to-transparent" />
                        <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
                          <RIcon className="w-4 h-4 text-white" />
                        </div>
                        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:bg-lima group-hover:border-lima transition-all">
                          <ArrowUpRight className="w-3.5 h-3.5 text-white group-hover:text-oliva transition-colors" />
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="text-oliva font-bold text-lg mb-2">{r.name}</h3>
                        <p className="text-gray-700 text-xs leading-relaxed line-clamp-2">{r.short}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
