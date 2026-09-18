import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import { ModalProvider } from './context/ModalContext';
import { PresupuestoModal } from './components/PresupuestoModal';
import { ScrollToAnchor } from './components/ScrollToAnchor';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { NosotrosTagline } from './components/NosotrosTagline';
import { CompostHighlight } from './components/CompostHighlight';
import { FeaturedProducts } from './components/FeaturedProducts';
import { ServicesOverview } from './components/ServicesOverview';
import { CaseStudies } from './components/CaseStudies';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';
// Cada pagina en su propio chunk: entrar a /contacto no baja el catalogo
// de productos. La home no va aca porque es la primera pantalla.
const AboutPage = lazy(() => import('./AboutPage'));
const ServiciosPage = lazy(() => import('./ServiciosPage'));
const ProductosPage = lazy(() => import('./ProductosPage'));
const ProductoDetallePage = lazy(() => import('./ProductoDetallePage'));
const PortfolioPage = lazy(() => import('./PortfolioPage'));
const SumatePage = lazy(() => import('./SumatePage'));
const ContactoPage = lazy(() => import('./ContactoPage'));

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <NosotrosTagline />
        <CompostHighlight />
        <FeaturedProducts />
        <ServicesOverview />
        <CaseStudies />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ModalProvider>
      <BrowserRouter>
        <ScrollToAnchor />
        <Suspense fallback={<div className="min-h-screen bg-white" />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/nosotros" element={<AboutPage />} />
            <Route path="/servicios" element={<ServiciosPage />} />
            <Route path="/productos" element={<ProductosPage />} />
            <Route path="/productos/:slug" element={<ProductoDetallePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/sumate" element={<SumatePage />} />
            <Route path="/contacto" element={<ContactoPage />} />
          </Routes>
        </Suspense>
        <PresupuestoModal />
      </BrowserRouter>
    </ModalProvider>
  );
}
