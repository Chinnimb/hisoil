import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ProductosHero } from './components/productos/ProductosHero';
import { ProductCatalog } from './components/productos/ProductCatalog';
import { RelatedServices } from './components/productos/RelatedServices';
import { FinalCTAProductos } from './components/productos/FinalCTAProductos';

export default function ProductosPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <ProductosHero />
        <ProductCatalog />
        <RelatedServices />
        <FinalCTAProductos />
      </main>
      <Footer />
    </div>
  );
}
