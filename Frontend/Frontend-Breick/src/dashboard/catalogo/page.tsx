import CatalogoCards from "../../components/Calatogo/CatalogoCards";
import Footer from "../../components/Footer";
import MiniFooter from "../../components/MiniFooter";

export default function Catalogo() {
  return (
    <>
      <div className="bg-gray-50 flex items-center min-h-[20vh]">
        <section
          className="w-full bg-cover bg-center py-44 relative"
          style={{ backgroundImage: 'url(/bombones.jpg)' }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="container mx-auto text-center text-white relative z-10">
            <h1 className="text-5xl font-bold mb-4 drop-shadow-lg animate-fade-in">
              TIENDA
            </h1>
            <p className="text-lg font-light drop-shadow-md">
              Explora nuestra gran variedad de productos. Porque compartir es delicioso.
            </p>
          </div>
        </section>
      </div>
      <div className="flex justify-center m-10">

      <CatalogoCards/>
      </div>
      <Footer/>
      <MiniFooter/>
    </>
  )
}
