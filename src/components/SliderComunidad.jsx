import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import "./SliderComunidad.css";

const miembros = [
  {
    id: 1,
    nombre: "Victoria Franco",
    img: "/Victoria-Franco.webp",
    linkedin: "https://www.linkedin.com/in/victoria-franco",
  },
  {
    id: 2,
    nombre: "Milagros Singer",
    img: "/Milagros-Singer.webp",
    linkedin: "https://www.linkedin.com/in/victoria-franco",
  },
  {
    id: 3,
    nombre: "Mathias Ramos Cuñarro",
    img: "/Mathias-Ramos-Cuñarro.webp",
    linkedin: "https://www.linkedin.com/in/victoria-franco",
  },
  {
    id: 4,
    nombre: "Julián Asinsten",
    img: "/Julián-Asinsten.webp",
    linkedin: "https://www.linkedin.com/in/victoria-franco",
  },
  {
    id: 5,
    nombre: "Lucía Scorzelli",
    img: "/Lucía-Scorzelli.webp",
    linkedin: "https://www.linkedin.com/in/victoria-franco",
  },
  {
    id: 6,
    nombre: "Agustín Fernandes",
    img: "/Agustín-Fernandes.webp",
    linkedin: "https://www.linkedin.com/in/victoria-franco",
  },
  // Duplicar los miembros para mejorar el efecto de loop
  {
    id: 7,
    nombre: "Victoria Franco",
    img: "/Victoria-Franco.webp",
    linkedin: "https://www.linkedin.com/in/victoria-franco",
  },
  {
    id: 8,
    nombre: "Milagros Singer",
    img: "/Milagros-Singer.webp",
    linkedin: "https://www.linkedin.com/in/victoria-franco",
  },
  {
    id: 9,
    nombre: "Mathias Ramos Cuñarro",
    img: "/Mathias-Ramos-Cuñarro.webp",
    linkedin: "https://www.linkedin.com/in/victoria-franco",
  },
  {
    id: 10,
    nombre: "Julián Asinsten",
    img: "/Julián-Asinsten.webp",
    linkedin: "https://www.linkedin.com/in/victoria-franco",
  },
  {
    id: 11,
    nombre: "Lucía Scorzelli",
    img: "/Lucía-Scorzelli.webp",
    linkedin: "https://www.linkedin.com/in/victoria-franco",
  },
  {
    id: 12,
    nombre: "Agustín Fernandes",
    img: "/Agustín-Fernandes.webp",
    linkedin: "https://www.linkedin.com/in/victoria-franco",
  },
];

function SliderComunidad() {
  return (
    <section className="slidercomunidad-section">
      <h2 className="otrosMiembrosTitle">Otros miembros</h2>
      <Swiper
        modules={[Autoplay, FreeMode]}
        spaceBetween={100}
        slidesPerView="auto"
        loop={true}
        freeMode={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={5000}
        freeModeMomentum={false}
        allowTouchMove={true}
        draggable={true}
        className="otrosMiembrosSlider"
      >
        {miembros.map((miembro, index) => (
          <SwiperSlide key={index} className="miembroSlide">
            <div className="cardSlider">
              <img src={miembro.img} alt={miembro.nombre} />
              <div className="cardSlider-content">
                <h3>{miembro.nombre}</h3>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon linkedin-icon"
                >
                  <img src="/linkedin.webp" alt="LinkedIn" />
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default SliderComunidad;
