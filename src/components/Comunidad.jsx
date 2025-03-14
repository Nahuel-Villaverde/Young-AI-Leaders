import './Comunidad.css';

function Comunidad() {
    return (
      <section className="comunidad-section" id="comunidad">
       <div className="grid-container">
        <div className="grid-item">
          <h2>Oportunidades de Crecimiento</h2>
          <p>Al participar, accederás a mentorías, capacitaciones y eventos exclusivos que fortalecerán tus habilidades técnicas y de liderazgo en IA para el bien social.</p>
        </div>
        <div className="grid-item">
          <h2>Formar Parte de la Comunidad</h2>
          <p>Si eres un joven entusiasta de la inteligencia artificial con ganas de generar impacto social, puedes unirte a nuestra red global y colaborar en proyectos innovadores alineados con los ODS de la ONU.</p>
        </div>
        <div className="grid-item">
          <span className='ul-title'>Requisitos</span>
          <ul className="stats-list">
            <li>Asistir a reuniones mensuales.</li>
            <li>Participar en al menos un proyecto específi co del centro por año.</li>
            <li>Participar en al menos 1 proyecto con AI for Good por año.</li>
            <li>Colabora con al menos otro centro, dentro o fuera de tu región.</li>
            <li>Contribuir a la visión de la comunidad de aprovechar la IA para el bien social.</li>
            <li>Respetar los estatutos y reglas de la comunidad.</li>
            <li>Asegúrese de que todas sus acciones y proyectos se centren en cómo la IA puede ayudar a apoyar los ODS de las Naciones Unidas.</li>
          </ul>
        </div>
        <div className="grid-item">
          <div className="stats-metrics">
            <div className="metric">
              <span className="stat-number">+20</span>
              <span className="stat-label">Centros Activos</span>
            </div>
            <div className="metric">
              <span className="stat-number">+12</span>
              <span className="stat-label">Países Representados</span>
            </div>
            <div className="metric">
              <span className="stat-number">+300</span>
              <span className="stat-label">Proyectos Desarrollados</span>
            </div>
          </div>
        </div>
      </div>


      <div className='buttons-comnidad-container'>
        <button className='button-comnidad-1'>Únete a la comunidad</button>
        <button className='button-comnidad-2'>Explorar proyectos</button>
      </div>




      <div className="cards-container">
      <div className="card">
        <img src="/Seba.webp" alt="Imagen 1" />
        <div className="card-content">
          <h3>Sebastián D’agrosa Okita</h3>
          <h4>Líder del Centro</h4>
          <p>Coordina operaciones y fomenta la colaboración.</p>
        </div>
      </div>

      <div className="card">
        <img src="/Facundo.webp" alt="Imagen 2" />
        <div className="card-content">
          <h3>Facundo Benítez Piloni</h3>
          <h4>Líder Regional</h4>
          <p>Facilita cooperación entre centros y proyectos.</p>
        </div>
      </div>

      <div className="card">
        <img src="/Ignacio.webp" alt="Imagen 3" />
        <div className="card-content">
          <h3>Ignacio Panza</h3>
          <h4>Líder de Impacto</h4>
          <p>Mide y reporta el impacto en relación con los ODS.</p>
        </div>
      </div>
    </div>

    </section>
    );
  }
  
  export default Comunidad;
  