import { BrowserRouter, Routes, Route } from 'react-router';
import { ModalProvider } from './context/ModalContext';
import { PresupuestoModal } from './components/PresupuestoModal';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhatDoYouNeed } from './components/WhatDoYouNeed';
import { ServicesOverview } from './components/ServicesOverview';
import { FeaturedProducts } from './components/FeaturedProducts';
import { CaseStudies } from './components/CaseStudies';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';
import AboutPage from './AboutPage';
import ServiciosPage from './ServiciosPage';
import ProductosPage from './ProductosPage';
import PortfolioPage from './PortfolioPage';
import MembresiaPage from './MembresiaPage';
import ContactoPage from './ContactoPage';

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <WhatDoYouNeed />
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
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nosotros" element={<AboutPage />} />
          <Route path="/servicios" element={<ServiciosPage />} />
          <Route path="/productos" element={<ProductosPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/membresia" element={<MembresiaPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
        </Routes>
        <PresupuestoModal />
      </BrowserRouter>
    </ModalProvider>
  );
}
