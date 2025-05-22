import contact_banner from "/lapazcenter.jpg";
import './Contact.css';

export default function Contact(){
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
      {/* Contenido principal */}
      {/* ... */}
    </div>
  );
};