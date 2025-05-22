import mision from "/mision.jpg";
import vision from "/vision.jpg";
import quienesomos from "/quienesosmos.jpg";
import "./Nosotros.css";

export default function Nosotros() {

  return (
    <>
      <div>
        {/*Banner*/}
        <div className="banner">
          <div
            className="banner-image"
            style={{ backgroundImage: `url(${quienesomos})` }}
          />
          <div className="banner-content">
            <h1 className="banner-title">QUIENES SOMOS</h1>
          </div>
        </div>

        {/* Sección Solo texto */}
        <div className="main-content">
          <div className="text-section">
            <p className="text">
              INCADEX S.R.L. (Industria de Cacao de Exportación) nació como una empresa exportadora de cacao. Al cabo de unos años invirtió en maquinaria de punta para la fabricación de chocolates y creó la reconocida marca "Breick". Ésta se convirtió en la mayor industria de chocolates en Bolivia, ampliando sus líneas de producción de tabletas a bombones, grageas, insumos de repostería, galletas y ahora gomitas; un conjunto de más de cien productos que la empresa confecciona hoy en día.
            </p>
            <br />
            <p className="text">
              El trabajo dentro de Breick va desde la elaboración y fabricación de todas las líneas de productos hasta la distribución de los mismos en los departamentos de: La Paz, Cochabamba y Santa Cruz como ejes centrales; y a través de vendedores internos y externos de la empresa a los departamentos de: Oruro, Potosí, Sucre y Tarija.
            </p>
            <p className="text">
              Debido a las condiciones climatológicas, es muy difícil que los productos se distribuyan en zonas muy cálidas como los departamentos de Beni y Pando, dado que la marca busca ofrecer productos de alta calidad a todos sus clientes.
            </p>
          </div>

          {/* Sección Misión y Visión */}
          <div id="mision-vision-container" className="mision-vision-container">
            <div id="mision" className="left-section">
              <div className="image-container">
                <img src={mision} alt="Misión" className="section-img" />
              </div>
              <h2 className="section-title">Misión</h2>
              <p className="section-text">
                La calidad de los productos ha hecho que en los últimos años, nuestro mercado crezca a un ritmo sostenido, convirtiéndonos en la marca de chocolates bolivianos más importante. Es nuestra misión mantener ese prestigio, y con la innovación en tecnología, fabricar y ofrecer siempre un producto que brinde satisfacción y confianza a nuestros consumidores.
              </p>
            </div>
            <div id="vision" className="right-section">
              <div className="image-container">
                <img src={vision} alt="Visión" className="section-img" />
              </div>
              <h2 className="section-title">Visión</h2>
              <p className="section-text">
                Liderar la industria del chocolate encabezando tendencias y llegando a segmentos estratégicos en el territorio nacional. Además, expandirnos a territorio extranjero, exportando el chocolate más fino hecho en Bolivia.
              </p>
            </div>
          </div>

          {/* Sección Valores */}
          <div id="valores-container" className="valores-container">
            <h2 className="valores-title">Valores</h2>
            <div className="valores-content">
              <div id="valores-left" className="valores-left">
                <p className="section-text2">
                  <b>Integridad:</b> Manera de comportarse coherentemente con los valores personales y los valores de la empresa. <br /><br />
                  <b>Respeto:</b> Implica ser tolerante y considerado con quien no piensa igual que tú, quien no comparte los mismos gustos o intereses. <br /><br />
                  <b>Compromiso social:</b> Es un deber hacia la sociedad, donde la institución se preocupa por el bienestar de las personas, por su salud. Valor ligado a la honestidad, es decir, que la empresa evitará todo lo que dañe a los consumidores y provocar el menor impacto negativo posible en la sociedad.
                </p>
              </div>
              <div id="valores-right" className="valores-right">
                <p className="section-text2">
                  <b>Trabajo en equipo:</b> Es el trabajo hecho por varios individuos, con diferentes tareas pero un objetivo en común. Se necesita la capacidad de aceptar responsabilidad y apoyo entre los integrantes.<br /><br />
                  <b>Honestidad:</b> Es una cualidad humana que consiste en decir la verdad y actuar de acuerdo como se piensa y se siente.<br /><br />
                  <b>Esfuerzo:</b> Sin importar la dificultad de lo presentado, brindar lo mejor de nosotros para lograr los objetivos.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}