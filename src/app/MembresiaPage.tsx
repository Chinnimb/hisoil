import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MembresiaHero } from './components/membresia/MembresiaHero';
import { QueEsMembresia } from './components/membresia/QueEsMembresia';
import { BeneficiosMembresia } from './components/membresia/BeneficiosMembresia';
import { ComoFunciona } from './components/membresia/ComoFunciona';
import { PlanesMembresia } from './components/membresia/PlanesMembresia';
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
        <FinalCTAMembresia />
      </main>
      <Footer />
    </div>
  );
}
