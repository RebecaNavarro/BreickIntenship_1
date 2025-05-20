

import HorizontalCards from '../../components/MainCards';
import ChocolateCarrusel from '../../components/MainCarrusel';

export default function Inicio() {
  return (
    <>
      <div className='container mx-auto'>
      <ChocolateCarrusel />
      </div>
      <div className="flex flex-col items-center p-3 h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Conoce la variedad de nuestros productos</h1>
        <p className="text-lg text-gray-700">Descubre de nuestra gran variedad de productos, en nuestro catálogo ONLINE</p>
        <HorizontalCards />
      </div>  
    </>
  )
}
