import { BrowserRouter, Routes, Route } from 'react-router';
import { ModalProvider } from './context/ModalContext';
import { PresupuestoModal } from './components/PresupuestoModal';
import { ScrollToAnchor } from './components/ScrollToAnchor';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CompostHighlight } from './components/CompostHighlight';
import { HomeRubros } from './components/HomeRubros';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';
import AboutPage from './AboutPage';
import ServiciosPage from './ServiciosPage';
import ProductosPage from './ProductosPage';
import ProductoDetallePage from './ProductoDetallePage';
import PortfolioPage from './PortfolioPage';
import MembresiaPage from './MembresiaPage';
import ContactoPage from './ContactoPage';

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <CompostHighlight />
        <HomeRubros />
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
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nosotros" element={<AboutPage />} />
          <Route path="/servicios" element={<ServiciosPage />} />
          <Route path="/productos" element={<ProductosPage />} />
          <Route path="/productos/:slug" element={<ProductoDetallePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/membresia" element={<MembresiaPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
        </Routes>
        <PresupuestoModal />
      </BrowserRouter>
    </ModalProvider>
  );
}
