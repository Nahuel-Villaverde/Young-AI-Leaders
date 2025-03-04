import { Link, Element } from 'react-scroll';
import Home from './components/Home';
import Header from './components/Header';
import Servicios from './components/Servicios';
import Planes from './components/Planes';
import Metodologia from './components/Metodologia';
import Clientes from './components/Clientes';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import './styles.css';

export default function App() {
  return (
    <div className="app-container">
      <Header />
      {/* Secciones */}
      <main className="main-content">
        <Element name="home"><Home /></Element>
        <Element name="servicios"><Servicios /></Element>
        <Element name="planes"><Planes /></Element>
        <Element name="metodologia"><Metodologia /></Element>
        <Element name="clientes"><Clientes /></Element>
        <Element name="contacto"><Contacto /></Element>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
