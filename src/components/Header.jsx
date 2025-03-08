import { Link } from 'react-scroll';
import { useEffect, useState } from "react";
import './Header.css';

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <Link to="home" smooth={true} duration={500} offset={-200} className="logo-container">
        <img src="/Logo-YoungAi.png" alt="Logo Young Ai" />
      </Link>
      <nav>
        <ul className="nav-links">
          <li><Link to="aboutUs" smooth={true} duration={500} offset={-80} className="nav-item">About Us</Link></li>
          <li><Link to="comunidad" smooth={true} duration={500} className="nav-item">Comunidad</Link></li>
          <li><Link to="proyectos" smooth={true} duration={500}  className="nav-item">Proyectos</Link></li>
          <li><Link to="contacto" smooth={true} duration={500} offset={-80} className="nav-item">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
