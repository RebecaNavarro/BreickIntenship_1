import Footer from "../../components/Footer";
import MiniFooter from "../../components/MiniFooter";
import contact_banner from "/lapazcenter.jpg";
import './Contact.css';

export default function Contact() {
  return (
    <>
      <div>
        {/* Banner */}
        <div className="banner">
          <div
            className="banner-image"
            style={{ backgroundImage: `url(${contact_banner})` }}
          />
          <div className="banner-content">
            <h1 className="banner-title">CONTÁCTANOS</h1>
            <p className="banner-text">
              Escriba preguntas o comentarios sobre nuestra empresa, estaremos encantados de recibir novedades sobre nuestros clientes.
            </p>
          </div>
        </div>

        {/* Sección sumate a nuestros proveedores */}
        <div className="banner">
          <div
            className="section-background"
          />
          <div className="section-content">
            <h1 className="contact-section-title">Súmate a nuestros proveedores</h1>
            <p className="contact-section-text">
              Invitamos a empresas publicitarias, imprentas offset, digitales, flexográficas, impresiones de gran escala y similares a inscribirse a nuestro registro de proveedores.
            </p>
            <button className="register-button">
              Registrarse
            </button>
          </div>
        </div>
        {/* Contacto y suscripción */}
        <div className="contact-container">
          <div className="contact-background" />
          <div className="contact-content-wrapper">
            {/* Sección Contacto */}
            <div className="contact-form-section">
              <h1 className="section-title">CONTACTO</h1>

              <form className="contact-form">
                <div className="form-row">
                  <div className="form-group half-width">
                    <input
                      type="text"
                      placeholder="Nombre"
                      autoComplete="off"
                      className="form-input"
                      maxLength={20}
                    />
                  </div>
                  <div className="form-group half-width">
                    <input
                      type="text"
                      placeholder="Correo electrónico"
                      autoComplete="off"
                      className="form-input"
                      maxLength={20}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Teléfono móvil"
                    autoComplete="off"
                    className="form-input"
                    maxLength={20}
                  />
                </div>

                <div className="form-group">
                  <textarea
                    placeholder="Mensaje"
                    autoComplete="off"
                    className="form-textarea"
                    rows={5}
                  ></textarea>
                </div>

                <button type="submit" className="submit-button">
                  ENVIAR
                </button>
              </form>
            </div>

            {/* Sección Suscríbete */}
            <div className="subscribe-section" >
              <h1 className="section-title">SUSCRÍBETE</h1>
              <p className="subscribe-description">
                Registre su correo electrónico para recibir las últimas noticias sobre nuestros productos y promociones.
              </p>

              <form className="subscribe-form">
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Correo electrónico"
                    autoComplete="off"
                    className="form-input"
                  />
                </div>

                <button type="submit" className="submit-button">
                  ENVIAR
                </button>
              </form>
            </div>

          </div>
        </div>
        <Footer />
        <MiniFooter />
      </div >
    </>

  );
};