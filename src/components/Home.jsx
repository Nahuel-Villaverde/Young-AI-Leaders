import './Home.css';

function Home() {
  return (
    <section className="section home-container" id="home">
      <div className="image-overlay"></div>

      <div className='home-content'>
        <h1 className='home-title'>Young AI Leaders</h1>
        <h2>Impulsando la IA para el Bien</h2>
        <span>Colaboración e innovación global en inteligencia artificial</span>
        <button>Únete a la comunidad</button>
      </div>
    </section>
  );
}

export default Home;
