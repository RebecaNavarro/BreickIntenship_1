import contact_banner from "/lapazcenter.jpg";
import './Contact.css';

export default function Contact() {
  return (
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
      {/* Contacto y registro */}
      <div className="contact-container">
        <div
          className="contact-background"
        />
        <div className="contact-content">
          <div className="contact-left">
            <h1 className="contact-title">
              Contacto
            </h1>

            <form className="contact-form">
              <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
                <div className="contact-group" style={{ flex: 1 }}>
                  <input
                    type="text"
                    placeholder="Nombre"
                    autoComplete="off"
                    className="contact-form-input"
                    maxLength={20}
                  />
                </div>
                <div className="contact-group" style={{ flex: 1 }}>
                  <input
                    type="text"
                    placeholder="Correo electrónico"
                    autoComplete="off"
                    className="contact-form-input"
                    maxLength={20}
                  />
                </div>
              </div>
              <div className="contact-group">
                <input
                  type="text"
                  placeholder="Teléfono móvil"
                  autoComplete="off"
                  className="contact-form-input"
                  maxLength={20}
                />
              </div>
              <div className="contact-group">
                <input
                  type="text"
                  placeholder="Mensaje"
                  autoComplete="off"
                  className="contact-form-input h-50"
                  maxLength={20}
                />
              </div>

              <button
                type="submit"
                className="contact-send-button"
              >
                Enviar
              </button>
            </form>
          </div>
          <div className="suscribete-right">
            <h1 className="login-title">
              Iniciar Sesión
            </h1>
          </div>
        </div>

      </div>
    </div>

  );
};