import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ContactoHero } from './components/contacto/ContactoHero';
import { FormularioPresupuesto } from './components/contacto/FormularioPresupuesto';
import { ContactoDirecto } from './components/contacto/ContactoDirecto';
import { MapaUbicacion } from './components/contacto/MapaUbicacion';

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <ContactoHero />
        <FormularioPresupuesto />
        <ContactoDirecto />
        <MapaUbicacion />
      </main>
      <Footer />
    </div>
  );
}
