import './Proyectos.css';

function Proyectos() {
  return (
    <section className="proyectos-section" id="proyectos">
      <div className='proyect-section-container'>
        <h2 className='proyectos-titulo-section'>Proyectos destacados</h2>
        <div className='proyects-container'>
          <div className='proyect'>
            <img src="/proyect1.png" alt="proyecto 1" />
            <h3>AI Learning Hub</h3>
            <p>Una plataforma educativa impulsada por IA que ayuda a jóvenes a aprender sobre inteligencia artificial a su propio ritmo. Con recursos interactivos, ejercicios prácticos y mentorías, este proyecto busca democratizar el acceso a la educación en IA.</p>
          </div>

          <div className='proyect'>
            <img src="/proyect1.png" alt="proyecto 1" />
            <h3>AI Learning Hub</h3>
            <p>Una plataforma educativa impulsada por IA que ayuda a jóvenes a aprender sobre inteligencia artificial a su propio ritmo. Con recursos interactivos, ejercicios prácticos y mentorías, este proyecto busca democratizar el acceso a la educación en IA.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Proyectos;
