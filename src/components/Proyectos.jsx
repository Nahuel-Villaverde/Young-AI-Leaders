import './Proyectos.css';

function Proyectos() {
  return (
    <section className="proyectos-section" id="proyectos">
      <img src="/Afondo.png" alt="Decoración" className="fondo-imagen" />
      <div className='proyect-section-container'>
        <h2 className='proyectos-titulo-section'>Proyectos destacados</h2>
        <div className='proyects-container'>
          <div className='proyect'>
            <img src="/proyect1.png" alt="proyecto 1" />
            <h3>AI Learning Hub</h3>
            <p>Una plataforma educativa impulsada por IA que ayuda a jóvenes a aprender sobre inteligencia artificial a su propio ritmo. Con recursos interactivos, ejercicios prácticos y mentorías, este proyecto busca democratizar el acceso a la educación en IA.</p>
          </div>

          <div className='proyect'>
            <img src="/proyect2.png" alt="proyecto 2" />
            <h3>Community Connect</h3>
            <p>Un asistente virtual basado en IA diseñado para mejorar la comunicación entre comunidades locales y organizaciones. Ayuda a responder preguntas frecuentes, conectar a voluntarios con proyectos y brindar información sobre iniciativas de impacto social.</p>
          </div>
        </div>

        <button className='button-proyect'>Ver más</button>
      </div>
    </section>
  );
}

export default Proyectos;
