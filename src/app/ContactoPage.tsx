import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ContactoHero } from './components/contacto/ContactoHero';
import { FormularioPresupuesto } from './components/contacto/FormularioPresupuesto';
import { ContactoDirecto } from './components/contacto/ContactoDirecto';
import { InfoEmpresa } from './components/contacto/InfoEmpresa';
import { MapaUbicacion } from './components/contacto/MapaUbicacion';
import { FAQContacto } from './components/contacto/FAQContacto';
import { FinalCTAContacto } from './components/contacto/FinalCTAContacto';

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <ContactoHero />
        <FormularioPresupuesto />
        <ContactoDirecto />
        <InfoEmpresa />
        <MapaUbicacion />
        <FAQContacto />
        <FinalCTAContacto />
      </main>
      <Footer />
    </div>
  );
}
