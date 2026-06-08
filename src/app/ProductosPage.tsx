import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ProductosHero } from './components/productos/ProductosHero';
import { ProductCategories } from './components/productos/ProductCategories';
import { NeedSelector } from './components/productos/NeedSelector';
import { FeaturedProducts } from './components/productos/FeaturedProducts';
import { CombosSection } from './components/productos/CombosSection';
import { TabbedProducts } from './components/productos/TabbedProducts';
import { ProductSpotlight } from './components/productos/ProductSpotlight';
import { FieldResults } from './components/productos/FieldResults';
import { RelatedServices } from './components/productos/RelatedServices';
import { ProductosFAQ } from './components/productos/ProductosFAQ';
import { FinalCTAProductos } from './components/productos/FinalCTAProductos';

export default function ProductosPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <ProductosHero />
        <ProductCategories />
        <NeedSelector />
        <FeaturedProducts />
        <CombosSection />
        <TabbedProducts />
        <ProductSpotlight />
        <FieldResults />
        <RelatedServices />
        <ProductosFAQ />
        <FinalCTAProductos />
      </main>
      <Footer />
    </div>
  );
}
