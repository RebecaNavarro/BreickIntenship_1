import Footer from "../../components/Footer";
import MiniFooter from "../../components/MiniFooter";
import IslasCards from "../../components/Sucursales/IslasCards";
import SucursalesCochabambaCards from "../../components/Sucursales/SucursalesCochabambaCards";
import SucursalesElAltoCards from "../../components/Sucursales/SucursalesElAltoCards";
import SucursalesLaPazCards from "../../components/Sucursales/SucursalesLaPazCards";
import SucursalesSucre from "../../components/Sucursales/SucursalesSucre";
import SucursalesTarijaSantaCruz from "../../components/Sucursales/SucursalesTarijaSantaCruz";

export default function Sucursales() {
  return (
    <>
      <div className="banner">
          <div
            className="banner-image"
            style={{ backgroundImage: `url(https://i0.wp.com/www.viviendoporelmundo.com/wp-content/uploads/2015/04/La-Paz-10.jpg?fit=700%2C525&ssl=1)` }}
          />
          <div className="banner-content">
            <h1 className="banner-title">SUCURSALES</h1>
          </div>
        </div>
      <div className="container mx-auto py-10">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-8">
          La Paz
        </h2>
        <SucursalesLaPazCards />
      </div>

      <div className="container mx-auto py-10">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-8">
          El Alto
        </h2>
        <SucursalesElAltoCards />
      </div>

      <div className="container mx-auto py-10">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-8">
          Cochabamba
        </h2>
        <SucursalesCochabambaCards />
      </div>
      <div className="container mx-auto py-10">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-8">
          Tarija y Santa Cruz
        </h2>
        <SucursalesTarijaSantaCruz />
      </div>
      <div className="container mx-auto py-10">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-8">
          Sucre
        </h2>
        <SucursalesSucre />
      </div>
      <IslasCards/>
      <Footer/>
      <MiniFooter/>
    </>
  );
}