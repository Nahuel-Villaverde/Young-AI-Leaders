import { Link } from 'react-scroll';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <Link to="home" smooth={true} duration={500} offset={-200} className="logo-container">
        <img src="/Logo-YoungAi.png" alt="Logo Young Ai" />
      </Link>
      <nav>
        <ul className="nav-links">
          <li><Link to="aboutUs" smooth={true} duration={500} offset={-80} className="nav-item">About Us</Link></li>
          <li><Link to="comunidad" smooth={true} duration={500} offset={-80} className="nav-item">Comunidad</Link></li>
          <li><Link to="proyectos" smooth={true} duration={500} offset={-80} className="nav-item">Proyectos</Link></li>
          <li><Link to="contacto" smooth={true} duration={500} offset={-80} className="nav-item">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
