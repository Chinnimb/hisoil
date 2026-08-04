import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PortfolioHero } from './components/portfolio/PortfolioHero';
import { CarbonCredits } from './components/portfolio/CarbonCredits';
import { IndustryCases } from './components/portfolio/IndustryCases';
import { CompostApplications } from './components/portfolio/CompostApplications';
import { PortfolioFinalCTA } from './components/portfolio/PortfolioFinalCTA';

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <PortfolioHero />
        <CarbonCredits />
        <IndustryCases />
        <CompostApplications />
        <PortfolioFinalCTA />
      </main>
      <Footer />
    </div>
  );
}
