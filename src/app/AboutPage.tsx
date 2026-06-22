import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AboutHero } from './components/about/AboutHero';
import { WhoWeAre } from './components/about/WhoWeAre';
import { Valores } from './components/about/Valores';
import { TeamSection } from './components/about/TeamSection';
import { FinalCTA } from './components/about/FinalCTA';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <AboutHero />
        <WhoWeAre />
        <Valores />
        <TeamSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
