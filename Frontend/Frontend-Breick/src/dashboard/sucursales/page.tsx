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
      <div className="bg-gray-50 flex items-center min-h-[20vh]">
        <section
          className="w-full bg-cover bg-center py-24 relative"
          style={{ backgroundImage: 'url(/lapaz.png)' }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="container mx-auto text-center text-white relative z-10">
            <h1 className="text-5xl font-bold mb-4 drop-shadow-lg animate-fade-in">
              Nuestras Sucursales
            </h1>
            <p className="text-lg font-light drop-shadow-md">
              Descubre nuestras ubicaciones en La Paz
            </p>
          </div>
        </section>
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