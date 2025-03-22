import "./Proyectos.css";

function Proyectos() {
  return (
    <section className="proyectos-section" id="proyectos">
      <img
        src="/Afondo.png"
        alt="imagen de fondo"
        className="fondo-imagen-proyectos"
      />
      <div className="proyect-section-container">
        {/* <h2 className='proyectos-titulo-section'>Proyectos destacados</h2> */}
        <h2 className="proyectos-titulo-section">Nuestros Socios</h2>

        <div className="socios-grid">
          <div className="socio-item">
            <a
              href="https://redappe.org.ar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/Redappe.webp"
                alt="REDAPPE"
                className="logo-socio-img"
              />
            </a>
             {/*<p className="nombre-socio">REDAPPE</p>*/}
          </div>
          <div className="socio-item">
            <a
              href="https://www.instagram.com/cpoliticauba/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/Ciencia-Política-UBA.webp"
                alt="Ciencia Política UBA"
                className="logo-socio-img"
              />
            </a>
            {/*<p className="nombre-socio">Ciencia Política UBA</p>*/}
          </div>
        </div>

        {/* <h3 className="proximamente">Próximamente</h3> */}
      </div>
    </section>
  );
}

export default Proyectos;
