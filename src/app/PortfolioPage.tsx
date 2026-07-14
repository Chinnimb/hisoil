import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PortfolioHero } from './components/portfolio/PortfolioHero';
import { ClientLogoWall } from './components/portfolio/ClientLogoWall';
import { ProjectsGallery } from './components/portfolio/ProjectsGallery';
import { FeaturedCase } from './components/portfolio/FeaturedCase';
import { ResultsMetrics } from './components/portfolio/ResultsMetrics';
import { PortfolioFinalCTA } from './components/portfolio/PortfolioFinalCTA';

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <PortfolioHero />
        <ClientLogoWall />
        <ProjectsGallery />
        <FeaturedCase />
        <ResultsMetrics />
        <PortfolioFinalCTA />
      </main>
      <Footer />
    </div>
  );
}
