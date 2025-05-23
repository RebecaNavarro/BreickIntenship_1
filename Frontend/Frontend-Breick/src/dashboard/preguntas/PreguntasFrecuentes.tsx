import MiniFooter from "../../components/MiniFooter";
import resposocial from "/resposocial.jpg";

import mision from "/mision.jpg";

import './PreguntasFrecuentes.css';

export default function Preguntas() {
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
            <h1 className="banner-title">Preguntas Frecuentes</h1>
          </div>
        </div>

        {/* sucursales */}
        <h2 className="preg-tittle">Sucursales</h2>
        <div className="sucursales-container">
          <div className="preg-left-left-section">
            <div className="image-container">
              <img src={mision} alt="Misión" className="section-img" />
            </div>
            <h2 className="preg-section-title">LA PAZ</h2>
            <p className="section-text" style={{ textAlign: 'left' }}>
              <ul>
                <li>EMAPA</li>
                <li>Hipermaxi</li>
                <li>Fidalga</li>
                <li>Andys</li>
                <li>Bonn supermercados</li>
                <li>Juan Del Sur</li>
                <li>DELICORP</li>
                <li>Makro</li>
              </ul>
            </p>
          </div>
          <div className="preg-left-section">
            <div className="image-container">
              <img src={mision} alt="Misión" className="section-img" />
            </div>
            <h2 className="preg-section-title">COCHABAMBA</h2>
            <p className="section-text" style={{ textAlign: 'left' }}>
              <ul>
                <li>IC Norte</li>
                <li>Supermercado America</li>
                <li>Supermercado Hass</li>
                <li>Supermercado Zaas</li>
                <li>Super Mercado Q´Barato</li>
                <li>Super Mercado K´Barato</li>
                <li>Super Mercado Rote</li>
                <li>Super Mercado Homepac</li>
                <li>Super Mercado Oferton</li>
                <li>Super Express</li>
                <li>Super Mercado Grupo América</li>
                <li>EMAPA</li>
              </ul>
            </p>
          </div>
          <div className="preg-right-section">
            <div className="image-container">
              <img src={mision} alt="Visión" className="section-img" />
            </div>
            <h2 className="preg-section-title">SANTA CRUZ</h2>
            <p className="section-text" style={{ textAlign: 'left' }}>
              <ul>
                <li>Hipermaxi</li>
                <li>Mini Market Cristo</li>
                <li>Mini Market Listo</li>
                <li>Micro Mercado Igliola</li>
                <li>Micro Mercado El Baraillio</li>
                <li>Minimarket Okororo</li>
                <li>Bateforte</li>
                <li>EMAPA</li>
                <li>Tía</li>
                <li>Micro Mercado Sacacuchi</li>
              </ul>
            </p>
          </div>
          <div className="preg-right-right-section">
            <div className="image-container">
              <img src={mision} alt="Visión" className="section-img" />
            </div>
            <h2 className="preg-section-title">TARIJA</h2>
            <p className="section-text" style={{ textAlign: 'left' }}>
              <ul>
                <li>Supermercado Urkupina</li>
                <li>Supermercado C&A</li>
                <li>Supermercado Tarija</li>
                <li>Supermercado Molcor</li>
                <li>Supermercado Las pascuas</li>
                <li>Micro market Belgrano</li>
                <li>Micro market estrella del sur</li>
                <li>Micro market Colosal</li>
                <li>Micro market Virgen de Guadalupe</li>
                <li>Market sucre</li>
                <li>EMAPA</li>
                <li>Micro market Doña Nelva</li>
              </ul>
            </p>
          </div>
        </div>

        {/* distribuidores */}
        <div className="distribuidores-container h-80">
          <h2 className="distribuidores-title">Distribución</h2>
          <div className="distribuidores-content">
            <div id="distribuidores-left" className="distribuidores-left">
              <p className="section-text2">
                <b>Santa Cruz</b> <br></br>
                <ul>
                  <li>78982094</li>
                  <li>77707991</li>
                </ul>
              </p>
            </div>
            <div id="distribuidores-right" className="distribuidores-right">
              <p className="section-text2">
                <b>Beni, Oruro, Pando y Potosí</b>
                <ul>
                  <li>Edwin Choque –  78982062</li>
                  <li>Marcelino Altamirano – 78982064</li>
                </ul>
              </p>
            </div>
          </div>
        </div>

      </div>
      <MiniFooter />
    </>
  )
}
