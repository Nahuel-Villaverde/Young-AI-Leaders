import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "./SliderComunidad.css";

const miembros = [
  { id: 1, nombre: "Victoria Franco", img: "/Victoria.png" },
  { id: 2, nombre: "Milagros Singer", img: "/Milagros.png" },
  { id: 3, nombre: "Mathias Ramos Cuñarro", img: "/Mathias.png" },
  { id: 4, nombre: "Julián Asinsten", img: "/Julian.png" },
  { id: 5, nombre: "Otro Miembro", img: "/Otro.png" },
  { id: 6, nombre: "Miembro Extra", img: "/Extra.png" },
  { id: 7, nombre: "Miembro Extra", img: "/Extra.png" },
  { id: 8, nombre: "Miembro Extra", img: "/Extra.png" },
  { id: 9, nombre: "Miembro Extra", img: "/Extra.png" },
  { id: 10, nombre: "Miembro Extra", img: "/Extra.png" },
  { id: 11, nombre: "Miembro Extra", img: "/Extra.png" },
];

function SliderComunidad() {
  return (
    <section className="slidercomunidad-section">
      <h2 className="otrosMiembrosTitle">Otros miembros</h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30} // Más espacio entre tarjetas
        slidesPerView={"auto"} // Ajuste dinámico de tarjetas
        loop={true} // Scroll infinito
        autoplay={{
          delay: 0, // Sin pausa
          disableOnInteraction: false, // No se detiene si el usuario interactúa
        }}
        speed={5000} // Desplazamiento más fluido
        allowTouchMove={false} // Bloquea el arrastre manual
        centeredSlides={true} // Centra los elementos
        className="otrosMiembrosSlider"
      >
        {miembros.map((miembro) => (
          <SwiperSlide key={miembro.id} className="miembroSlide">
            <div className="card">
              <img src={miembro.img} alt={miembro.nombre} />
              <div className="card-content">
                <h3>{miembro.nombre}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default SliderComunidad;
