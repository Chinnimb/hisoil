import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MembresiaHero } from './components/membresia/MembresiaHero';
import { QueEsMembresia } from './components/membresia/QueEsMembresia';
import { BeneficiosMembresia } from './components/membresia/BeneficiosMembresia';
import { ComoFunciona } from './components/membresia/ComoFunciona';
import { PlanesMembresia } from './components/membresia/PlanesMembresia';
import { EnviosRecurrentes } from './components/membresia/EnviosRecurrentes';
import { AreaMiembros } from './components/membresia/AreaMiembros';
import { TestimoniosMembresia } from './components/membresia/TestimoniosMembresia';
import { FAQMembresia } from './components/membresia/FAQMembresia';
import { FinalCTAMembresia } from './components/membresia/FinalCTAMembresia';

export default function MembresiaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <MembresiaHero />
        <QueEsMembresia />
        <BeneficiosMembresia />
        <ComoFunciona />
        <PlanesMembresia />
        <EnviosRecurrentes />
        <AreaMiembros />
        <TestimoniosMembresia />
        <FAQMembresia />
        <FinalCTAMembresia />
      </main>
      <Footer />
    </div>
  );
}
