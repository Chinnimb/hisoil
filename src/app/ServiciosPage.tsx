import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ServiciosHero } from './components/servicios/ServiciosHero';
import { ServiceOverview } from './components/servicios/ServiceOverview';
import { HowItWorks } from './components/servicios/HowItWorks';
import { ServiceBenefits } from './components/servicios/ServiceBenefits';
import { FinalCTAServicios } from './components/servicios/FinalCTAServicios';

export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <ServiciosHero />
        <ServiceOverview />
        <HowItWorks />
        <ServiceBenefits />
        <FinalCTAServicios />
      </main>
      <Footer />
    </div>
  );
}
