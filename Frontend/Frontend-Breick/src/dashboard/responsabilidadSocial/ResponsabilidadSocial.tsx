import Footer from "../../components/Footer";
import MiniFooter from "../../components/MiniFooter";

import resposocial from "/resposocial.jpg";
import bitter from "/bitter-naranja.png";
import bolsa from "/bolsa.jpg";
import wilmer from "/wilmer.jpg";
import piensaverde from "/putts-piensa-verde.png";
import rse from "/logo-rse.png";
import pimientacreativa from "/creativa.jpg";
import pimientacieli from "/cieli.jpg";
import caleidoscopio from "/caleidoscopio.jpg";
import vid_pimienta from "/pimienta-video.mp4";

import './ResponsabilidadSocial.css';
import GallerySection from "../../components/Galeria";

export default function ResponsabilidadSocial() {
  return (
    <>
      <div>
        {/* Banner */}
        <div className="banner">
          <div
            className="banner-image"
            style={{ backgroundImage: `url(${resposocial})` }}
          />
          <div className="banner-content">
            <h1 className="banner-title">Responsabilidad <br></br> social empresarial</h1>
            <p className="banner-text">
              Te presentamos un poco del trabajo que realizamos.
            </p>
          </div>
        </div>

        <div className="respo-section-container" style={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }}>
          <h2 className="respo-section-title" style={{ marginBottom: 0 }}>SOBRE «RSE» EN BREICK</h2>
          <div className="respo-section-container" style={{ boxShadow: 'none' }}>
            <div className="respo-left-section" style={{ width: '60%' }}>
              <p className="section-text">
                En Breick, creemos que somos capaces de asumir un compromiso para actuar de forma transparente con la sociedad a través de diversos proyectos que vayan en pro y desarrollo de la sociedad y de nuestros clientes.<br></br>
                Parte de la esencia de Breick es compartir lo que somos y lo que tenemos como empresa para dar a la sociedad e ir creciendo y desarrollándonos juntos.
              </p>
            </div>
            <div className="respo-right-section" style={{ width: '40%' }}>
              <div className="image-container">
                <img src={rse} className="section-img" />
              </div>
            </div>
          </div>
        </div>

        <div className="respo-section-container" style={{ display: 'flex', flexDirection: 'column' }}>
          <h2 className="respo-section-title">SOBRE la alianza BREICK – piensa verde</h2>
          <div className="respo-section-container" style={{ boxShadow: 'none' }}>

            <div className="respo-left-section" >
              <div className="image-container">
                <img src={piensaverde} className="section-img" />
              </div>
            </div>
            <div className="respo-right-section">
              <p className="section-text">
                Como empresa Boliviana comprometida con el medio ambiente y el país, unimos fuerza con Piensa Verde, plataforma dedicada a concienciar sobre la conservación de bosques, áreas protegidas y especies en Bolivia, direccionando fondos a áreas de todo el país.
                <br></br>
                <br></br>
                En conjunto desarrollamos un producto especial: el Pack 3 tabletas Piensa Verde que cuenta con 3 tabletas 1 de chocolate con leche, 1 chocolate semiamargo y 1 chocolate blanco. Que cuenta con una presentación especial de 3 animales que se encuentran en peligro de extinción en nuestro país.
                <br></br>
                A través de la venta de este tripack se busca  recaudar fondos para apoyar a la Gala Verde y a diferentes áreas protegidas. Además de concientizar sobre los peligros a los que estas especies se encuentran expuestos
              </p>
            </div>
          </div>
        </div>

        <div className="respo-section-container" style={{ display: 'flex', flexDirection: 'column' }}>
          <h2 className="respo-section-title">SOBRE la alianza BREICK – visión mundial</h2>
          <div className="respo-section-container" style={{ boxShadow: 'none' }}>

            <div className="respo-left-section" >
              <div className="image-container">
                <img src={bitter} className="section-img" />
              </div>
            </div>
            <div className="respo-right-section">
              <p className="section-text">
                En el marco de la segunda versión de la campaña NUTRIKITS de World Vision Bolivia, Chocolates Breick, presenta la tableta de chocolate Bitter Naranja con vitamina C.
                <br></br>
                “Ya inicia la época de invierno en nuestro país, las niñas y niños están asistiendo al colegio de forma presencial y están expuestos a temperaturas bajas, es por esta razón que como Chocolates Breick ha decidido apoyar a la niñez con un porcentaje de las ventas de la tableta que contiene vitamina C. Este porcentaje de ingresos irá directamente a apoyar a miles de niñas y niños en situación altamente vulnerable que participan de los proyectos y programas de la ONG World Vision Bolivia, en el departamento de Cochabamba” afirmó Germán Aparicio, Gerente General de Breick.
                <br></br>
                <br></br>
                “Esta tableta se creó como el proyecto de RSE de la gestión,trabajando de la mano con World Vision, y la misma tiene como objetivo aportar parte de las ventas  a los niños y niñas de Bolivia en situaciones de vulnerabilidad”, añadió Aparicio.
              </p>
            </div>
          </div>
        </div>

        <div className="respo-section-container" style={{ display: 'flex', flexDirection: 'column' }}>
          <h2 className="respo-section-title">SOBRE ALIANZA COMERCIAL BREICK – WANDERLUST</h2>
          <div className="respo-section-container" style={{ boxShadow: 'none' }}>

            <div className="respo-left-section" >
              <div className="image-container">
                <img src={bolsa} className="section-img" />
              </div>
            </div>
            <div className="respo-right-section">
              <p className="section-text">
                En Breick, compartimos la idea de la importancia a la vida, al medio ambiente, y, en especial, al trabajo de los bolivianos en tiempos difíciles.
                <br></br>
                La única manera de apoyarnos en el día a día entre empresas y comunidad, es a través del trabajo en equipo, con la finalidad de compartir lo que somos y lo que tenemos como Breick, para dar a la sociedad, salir adelante e ir creciendo y desarrollándonos juntos.
                <br></br>
                Por ello, considerando nuestra Responsabilidad Social Empresarial y el compromiso que asumimos de actuar de forma transparente con la sociedad, consideramos a  la micro empresa Wanderlust; quien se encarga de dar trabajo a madres solteras y artesanos en situación compleja de la ciudad de El Alto para que puedan confeccionar bolsas de tela de algodón 100% orgánico, dando énfasis a que las bolsas son 100% bolivianas, hechas a mano y con mucho amor.
                <br></br>
                El público al que apuntamos con esta alianza comercial, es por un lado a los clientes actuales de Breick y, por otro lado, a quienes apoyen a las empresas bolivianas y, por sobretodo, le den valor al esfuerzo, sacrificio y cariño de los bolivianos. Es decir, a quienes puedan entender el concepto, y además, contribuir con su compra a ambas empresas.
              </p>
            </div>
          </div>
        </div>

        <div className="respo-section-container" style={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }}>
          <h2 className="respo-section-title" style={{ marginBottom: 0 }}>PROPUESTA DE VALOR</h2>
          <div className="respo-section-container" style={{ boxShadow: 'none' }}>
            <div className="respo-left-section" style={{ width: '60%' }}>
              <p className="section-text">
                Con este proyecto, queremos potenciar a la empresa confeccionadora Wanderlust,  destacando, por un lado, el trabajo que ofrecen a madres solteras bolivianas y artesanos, y, por otro lado, el cuidado del medio ambiente y la concientización del uso de bolsas de tela.
                <br></br>
                Además, de generar una relación estable para beneficio de ambas marcas, de los Hecho en Bolivia y de la generación de conciencia por lo boliviano.
              </p>
            </div>
            <div className="respo-right-section" style={{ width: '40%' }}>
              <div className="image-container">
                <img src={wilmer} className="section-img" />
              </div>
            </div>
          </div>
        </div>

        <GallerySection />

        <div className="video-container">
          <video controls>
            <source src={vid_pimienta} type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>

        <div className="respo-section-container" style={{ display: 'flex', flexDirection: 'column' }}>
          <h2 className="respo-section-title">SOBRE ALIANZA COMERCIAL BREICK – PIMIENTA</h2>
          <div className="respo-section-container" style={{ boxShadow: 'none' }}>

            <div className="respo-left-section" >
              <div className="image-container">
                <img src={pimientacreativa} className="section-img" />
              </div>
            </div>
            <div className="respo-right-section">
              <p className="section-text">
                A través de esta alianza comercial con el estudio de diseño Pimienta, buscamos consolidar nuestro plan de Responsabilidad Social Empresarial por medio de la realización de productos diferenciados que incluyan un concepto creativo de diseño de empaques desarrollado por miembros de dicha institución, conformado por personas adultas con discapacidad intelectual, síndrome de Down y autismo, que trabajan de forma normalizada e integrada con diseñadoras gráficas en la ciudad de La Paz.
              </p>
            </div>
          </div>
          <p className="section-text" style={{ fontWeight: 'bold', alignContent: 'center', textAlign: 'center' }}>
            No existen limitaciones para la creatividad y cualquier persona es capaz de desarrollar grandes ideas.
          </p>
          <p className="section-text" style={{ marginLeft: '4rem', marginRight: '4rem', marginBottom: '40px' }}>
            El público al que apuntamos con esta alianza comercial, es por un lado a los clientes actuales de Breick y, por otro lado, a gente que pueda entender el concepto que está por detrás de la etiqueta del producto. Personas que estén dispuestas a contribuir con el desarrollo del Estudio de diseño Pimienta a través de la compra de uno de los productos que nacen a partir de este proyecto.
          </p>
        </div>

        <div className="respo-section-container" style={{ display: 'flex', flexDirection: 'column', marginTop: '10px', marginBottom: '10px' }}>
          <h2 className="respo-section-title" style={{ marginBottom: 0 }}>PROPUESTA DE VALOR</h2>
          <div className="respo-section-container" style={{ boxShadow: 'none' }}>
            <div className="respo-left-section" style={{ width: '60%' }}>
              <p className="section-text">
                Con este proyecto, queremos potenciar al estudio de diseño Pimienta, destacando, por un lado, el valor de los diseños y propuesta creativa, y, por otro lado, el valor y talento de su equipo humano. Además, de generar una relación estable a largo plazo entre ambas marcas para beneficio mutuo y en pro de la generación de conciencia de nuestros potenciales clientes.
                <br></br>
                Por cada compra de alguno de estos cuatro productos, Breick contribuirá un % de estas ventas al equipo de Pimienta para su desarrollo como estudio de diseño.
              </p>
            </div>
            <div className="respo-right-section" style={{ width: '40%' }}>
              <div className="image-container">
                <img src={pimientacieli} className="section-img" />
              </div>
            </div>
          </div>
        </div>
        <div className="respo-section-container" style={{ display: 'flex', flexDirection: 'column', marginTop: '10px', marginBottom: '40px' }}>
          <h2 className="respo-section-title" style={{ textAlign: "center", marginBottom: 10 }}>LÍNEA DE TABLETAS CALEIDOSCOPIO</h2>
          <div className="image-container">
            <img src={caleidoscopio} />
          </div>
          <div className="respo-section-container" style={{ boxShadow: 'none' }}>
            <div className="respo-left-section" style={{ width: '50%' }}>
              <p className="section-text" style={{ fontWeight: 'bold' }}>
                Los empaques fueron elaborados por el equipo del estudio de diseño Pimienta en cuanto a propuesta creativa de imagen y diseño; y transformados en etiquetas finales por parte del equipo Breick.
              </p>
            </div>
            <div className="respo-right-section" style={{ width: '50%' }}>
              <p className="section-text" style={{ fontWeight: 'bold' }}>
                Estas 4 tabletas de edición limitada, estarán disponibles para su venta en todas las sucursales y Puntos de venta Breick a nivel nacional.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <MiniFooter />
    </>

  )
}
