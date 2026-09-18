import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SumateHero } from './components/sumate/SumateHero';
import { SumateForm } from './components/sumate/SumateForm';

export default function SumatePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <SumateHero />
        <SumateForm />
      </main>
      <Footer />
    </div>
  );
}
