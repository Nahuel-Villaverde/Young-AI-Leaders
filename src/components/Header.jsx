import { Link } from 'react-scroll';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <Link to="home" smooth={true} duration={500} offset={-200} className="logo-container">
        <div className="logo-bar"></div>
        <span className="logo">YANA</span>
      </Link>
      <nav>
        <ul className="nav-links">
          <li><Link to="servicios" smooth={true} duration={500} offset={-80} className="nav-item">Servicios</Link></li>
          <li><Link to="planes" smooth={true} duration={500} offset={-80} className="nav-item">Planes</Link></li>
          <li><Link to="metodologia" smooth={true} duration={500} offset={-80} className="nav-item">Metodología</Link></li>
          <li><Link to="clientes" smooth={true} duration={500} offset={-80} className="nav-item">Clientes</Link></li>
          <li><Link to="contacto" smooth={true} duration={500} offset={-80} className="nav-item">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
