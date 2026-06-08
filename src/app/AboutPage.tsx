import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AboutHero } from './components/about/AboutHero';
import { WhoWeAre } from './components/about/WhoWeAre';
import { MisionVision } from './components/about/MisionVision';
import { Valores } from './components/about/Valores';
import { CircularEconomy } from './components/about/CircularEconomy';
import { ImpactoKPIs } from './components/about/ImpactoKPIs';
import { TeamSection } from './components/about/TeamSection';
import { ComoTrabajamos } from './components/about/ComoTrabajamos';
import { ClientesAlianzas } from './components/about/ClientesAlianzas';
import { FinalCTA } from './components/about/FinalCTA';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <AboutHero />
        <WhoWeAre />
        <MisionVision />
        <Valores />
        <CircularEconomy />
        <ImpactoKPIs />
        <TeamSection />
        <ComoTrabajamos />
        <ClientesAlianzas />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
