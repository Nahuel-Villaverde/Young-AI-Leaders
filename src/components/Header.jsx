import { Link } from 'react-scroll';
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import './Header.css';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <Link to="home" smooth={true} duration={500} offset={-200} className="logo-container">
        <img src="/Buenos-Aires-Hub-Logo.webp" alt="Logo Young Ai" />
      </Link>
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li><Link to="aboutUs" smooth={true} duration={500} offset={-80} className="nav-item" onClick={() => setMenuOpen(false)}>About Us</Link></li>
          <li><Link to="comunidad" smooth={true} duration={500} className="nav-item" onClick={() => setMenuOpen(false)}>Comunidad</Link></li>
          <li><Link to="proyectos" smooth={true} duration={500}  className="nav-item" onClick={() => setMenuOpen(false)}>Proyectos</Link></li>
          <li><Link to="contacto" smooth={true} duration={500} className="nav-item" onClick={() => setMenuOpen(false)}>Contacto</Link></li>
        </ul>
      </nav>
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>
    </header>
  );
}

export default Header;
