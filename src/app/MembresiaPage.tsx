import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SumateHero } from './components/membresia/SumateHero';
import { SumateForm } from './components/membresia/SumateForm';

export default function MembresiaPage() {
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
