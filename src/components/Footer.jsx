import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <img src="/Afondo.png" alt="Decoración" className="fondo-imagen" />

      <div className="container_display_grid">
        <div className="area_1">Área 1</div>
        <div className="area_2">Área 2</div>
        <div className="area_3">
          <div class="linea-div3"></div>
        </div>
        <div className="area_4">
          <p className="derechos">
            © 2025 Young AI Leaders. Todos los derechos reservados.
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
