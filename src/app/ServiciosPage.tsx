import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ServiciosHero } from './components/servicios/ServiciosHero';
import { ServiceOverview } from './components/servicios/ServiceOverview';
import { HowItWorks } from './components/servicios/HowItWorks';
import { ServiceBenefits } from './components/servicios/ServiceBenefits';
import { WhoIsItFor } from './components/servicios/WhoIsItFor';
import { MidPageCTA } from './components/servicios/MidPageCTA';
import { RelatedCaseStudies } from './components/servicios/RelatedCaseStudies';
import { ServiciosFAQ } from './components/servicios/ServiciosFAQ';
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
        <WhoIsItFor />
        <MidPageCTA />
        <RelatedCaseStudies />
        <ServiciosFAQ />
        <FinalCTAServicios />
      </main>
      <Footer />
    </div>
  );
}
