import './AboutUs.css';

function AboutUs() {
  return (
    <section className="aboutContainer">
      {/* Contenedor superior con título y descripción */}
      <div className="topSection">
        <div className="leftSpacer"></div> {/* Espaciador izquierdo */}
        <div className="textContainer">
          <h2 className="title">Nuestro Objetivo</h2>
          <p className="subtitle">
            Fomentar la colaboración y la innovación en IA para el bien social.
          </p>
        </div>
        <div className="rightSpacer"></div> {/* Espaciador derecho */}
      </div>

      <div className="middleSection">
        {/* Contenido del lado izquierdo */}
        <div className="leftContent">
          <p className="leftDescription">
            Conectamos a jóvenes apasionados por la IA para generar impacto real.
            <br />
            <span className="highlightOne">
              Aprende, colabora y transforma el 
            </span>  
            <span className="highlightTwo">
              futuro con innovación.
            </span>
          </p>
          <button className="ctaButton">Conocer más</button>
        </div>

        {/* Contenedor de las tarjetas */}
        <div className="cardsContainer">
          <div className="card">
            <h3>🛠️ Innovación con Impacto Social</h3>
            <p>
              Desarrollo de proyectos en IA alineados con los ODS de la ONU.
              Exploramos soluciones tecnológicas que aborden desafíos globales,
              asegurando que la inteligencia artificial tenga un impacto positivo
              en la sociedad.
            </p>
            <span className="cardNumber">01</span>
          </div>
          <div className="card">
            <h3>🌍 Colaboración Global</h3>
            <p>
              Una red internacional de jóvenes líderes en IA. Facilitamos la
              cooperación entre distintos centros y regiones para potenciar la
              diversidad de ideas y la sinergia entre proyectos.
            </p>
            <span className="cardNumber">02</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
