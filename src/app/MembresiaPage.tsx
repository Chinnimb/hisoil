import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FichaClienteHero } from './components/membresia/FichaClienteHero';
import { FichaClienteForm } from './components/membresia/FichaClienteForm';

export default function MembresiaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <FichaClienteHero />
        <FichaClienteForm />
      </main>
      <Footer />
    </div>
  );
}
