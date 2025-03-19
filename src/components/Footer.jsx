import { Link } from "react-scroll";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <img src="/Afondo.png" alt="Imagen de fondo" className="fondo-imagen" />

      <div className="container_display_grid">
        <div className="area_1">
          <img className="logo-color" src="/Logo-YoungAi-FullColor.webp" alt="Logo de Young Ai Leaders Buenos Aires Hub" />
          <p className="logo_title">
            Una comunidad global impulsando la inteligencia artificial para el
            bien social
          </p>
          <p className="logo_subtitle">Young AI Leaders, 2025</p>
          <div className="contact-icons">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="icon_footer linkedin-icon"
            >
              <img src="/linkedin.webp" alt="Imagen con redirección a LinkedIn" />
            </a>
            <a
              href="mailto:contacto@ejemplo.com"
              className="icon_footer gmail-icon"
            >
              <img src="/gmail.webp" alt="Imagen con redirección a Gmail" />
            </a>
          </div>
        </div>

        {/* 🔹 Menú de navegación en el footer con la misma lógica del header */}
        <div className="area_2">
          <nav className="footer-nav">
            <ul className="footer-links">
              <li>
                <Link
                  to="aboutUs"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="footer-link"
                >
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link
                  to="comunidad"
                  smooth={true}
                  duration={500}
                  className="footer-link"
                >
                  Comunidad
                </Link>
              </li>
              <li>
                <Link
                  to="proyectos"
                  smooth={true}
                  duration={500}
                  className="footer-link"
                >
                  Proyectos
                </Link>
              </li>
              <li>
                <Link
                  to="contacto"
                  smooth={true}
                  duration={500}
                  className="footer-link"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="area_3">
          <div className="linea-div3"></div>
        </div>

        <div className="area_4">
          <p className="derechos">
            © 2025 Young AI Leaders. Todos los derechos reservados
          </p>
        </div>

        <div className="area_5">
          <a href="#" rel="noopener noreferrer">
            <p className="termino_y_condiciones">Términos y Condiciones</p>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
