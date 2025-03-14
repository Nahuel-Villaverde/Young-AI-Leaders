import { Link, Element } from 'react-scroll';
import Home from './components/Home';
import Header from './components/Header.jsx';
import AboutUs from './components/AboutUs.jsx';
import Comunidad from './components/Comunidad.jsx';
import SliderComunidad from './components/SliderComunidad.jsx';
import Proyectos from './components/Proyectos.jsx';
import Contacto from './components/Contacto.jsx';
import Footer from './components/Footer.jsx';
import './styles.css';

export default function App() {
  return (
    <div className="app-container">
      <Header />
      {/* Secciones */}
      <main className="main-content">
        <Element name="home"><Home /></Element>
        <Element name="aboutUs"><AboutUs /></Element>
        <Element name="comunidad"><Comunidad /></Element>
        <Element name="slidercomunidad"><SliderComunidad /></Element>
        <Element name="proyectos"><Proyectos /></Element>
        <Element name="contacto"><Contacto /></Element>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
