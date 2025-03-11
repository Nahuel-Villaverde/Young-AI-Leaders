import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import "./Contacto.css";

function Contacto() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Enviar el correo usando EmailJS
    emailjs
      .sendForm("service_s7jwf3r", "template_g1oaig8", "#contactForm", "KuRTTgtRMJAHGNlQA")
      .then(
        (result) => {
          console.log("Correo enviado:", result.text);
          alert("Mensaje enviado con éxito.");
        },
        (error) => {
          console.log("Error al enviar el correo:", error.text);
          alert("Hubo un error al enviar el mensaje.");
        }
      );
  };

  return (
    <section className="contact-section" id="contacto">
      <div className="contact-container">
        <div className="contact-info">
          <h2 className="contact-title">Contacto</h2>
          <h3 className="contact-subtitle">Estamos aquí para ayudarte</h3>
          <span className="contact-span">Email: contacto@ejemplo.com</span>
          <span className="contact-span">Teléfono: +54 123 456 789</span>
          <div className="contact-icons">
            <a href="mailto:contacto@ejemplo.com" className="icon gmail-icon">📧</a>
            <a href="https://linkedin.com" target="_blank" className="icon linkedin-icon">🔗</a>
          </div>
        </div>

        <div className="contact-form-container">
          <h3 className="form-title">Envíanos tu Mensaje</h3>
          <form onSubmit={handleSubmit(onSubmit)} id="contactForm" className="contact-form">
            <input 
              type="text" 
              name="from_name" 
              placeholder="Nombre" 
              {...register("from_name", { required: "El nombre es obligatorio" })} 
              className="form-input"
            />
            {errors.nombre && <span className="error-message">{errors.nombre.message}</span>}

            <input 
              type="email" 
              name="email" 
              placeholder="Email" 
              {...register("email", { 
                required: "El email es obligatorio", 
                pattern: { value: /\S+@\S+\.\S+/, message: "Email inválido" }
              })} 
              className="form-input"
            />
            {errors.email && <span className="error-message">{errors.email.message}</span>}

            <textarea 
              name="message" 
              placeholder="Escribe tu mensaje..." 
              {...register("message", { required: "El mensaje no puede estar vacío" })} 
              className="form-textarea"
            />
            {errors.mensaje && <span className="error-message">{errors.mensaje.message}</span>}

            <button type="submit" className="submit-button">Enviar</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
