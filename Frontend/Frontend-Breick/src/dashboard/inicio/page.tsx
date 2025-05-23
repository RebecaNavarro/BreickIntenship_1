import Footer from "../../components/Footer";
import BottomCards from "../../components/Inicio/BottomCards";
import Suscribete from "../../components/Inicio/Suscribete";
import VideoInicio from "../../components/Inicio/VideoInicio";
import HorizontalCards from "../../components/MainCards";
import ChocolateCarrusel from "../../components/MainCarrusel";
import MiniFooter from "../../components/MiniFooter";

export default function Inicio() {
  return (
    <>
    

      <div className="container mx-auto">
        <ChocolateCarrusel />
      </div>
      <div className="flex flex-col ">
        <div className="flex flex-col justify-center mx-auto">

        <h1 className="text-4xl font-bold mb-4">
          Conoce la variedad de nuestros productos
        </h1>
        <p className="text-lg text-gray-700">
          Descubre de nuestra gran variedad de productos, en nuestro catálogo
          ONLINE
        </p>
        </div>
        <HorizontalCards />
        <VideoInicio />
        <BottomCards
          imageUrl="https://breick.com.bo/wp-content/uploads/2024/10/clubbreick.jpeg"
          title="CLUB BREICK"
          description="Queda atento a nuestras redes sociales, contaremos con sorpresas muy pronto!"
          buttonText="CARACTERÍSTICAS"
          buttonLink="/promocionfinalizada"
          titleColor="#000000" // Morado
          buttonColor="#62358C" // Morado
          buttonHoverColor="#4a2a6b" // Morado más oscuro
          shadowColor="rgba(98, 53, 140, 0.3)"
        />
        <BottomCards
          imageUrl="https://breick.com.bo/wp-content/uploads/2022/07/Imagen_recetas.jpg"
          title="PRUEBA NUESTRAS RECETAS"
          description="Disfruta de nuestros productos y crea deliciosos, postres, tortas y bebidas con nuestras recetas especiales"
          buttonText="VER MAS"
          buttonLink="/Frontend/Frontend-Breick/src/dashboard/promociones/PromocionFinalizada.tsx"
          titleColor="#000000" // Morado
          buttonColor="#62358C" // Morado
          buttonHoverColor="#4a2a6b" // Morado más oscuro
          shadowColor="rgba(98, 53, 140, 0.3)"
        />
        <BottomCards
          imageUrl="https://breick.com.bo/wp-content/uploads/2020/05/foto-inico-2c.jpg"
          title="CONOCE NUESTRA VARIEDAD DE BOMBONES"
          description="Disfruta de cada una de la variedad de bombones que tenemos para ti "
          buttonText="RECETARIO"
          buttonLink="/Frontend/Frontend-Breick/src/dashboard/promociones/PromocionFinalizada.tsx"
          titleColor="#000000" // Morado
          buttonColor="#62358C" // Morado
          buttonHoverColor="#4a2a6b" // Morado más oscuro
          shadowColor="rgba(98, 53, 140, 0.3)"
        />
        <Suscribete/>
        <Footer/>
        <MiniFooter/>
      </div>
    </>
  );
}
