import { useState, useEffect, useCallback } from 'react';

export default function  ChocolateCarousel  () {
  const chocolateImages = [
  '/ca3.png', // Chocolate 1
  'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', // Chocolate 2
  'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', // Chocolate 3
];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const goToSlide = useCallback((slideIndex: number) => {
    setCurrentSlide(slideIndex);
    setIsAutoPlaying(true); // Reinicia el autoplay al cambiar manualmente
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % chocolateImages.length);
  }, [chocolateImages.length]);

  // Efecto para el autoplay
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <div className="relative h-auto fade-in">
      {/* Slides */}
      <div className="slider-container relative h-96 overflow-hidden">
        {chocolateImages.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          >
            <div 
              className="bg-cover bg-center h-full text-white p-10 flex items-center"
              style={{ backgroundImage: `url(${image})` }}
            >
              {/* <div className="md:w-1/2 bg-black bg-opacity-50 p-6 rounded-lg">
                <p className="font-bold text-sm uppercase">Deliciosos Chocolates</p>
                <p className="text-3xl font-bold">Chocolate {index + 1}</p>
                <p className="text-2xl mb-6 leading-none">Disfruta de nuestro premium chocolate</p>
                <a 
                  href="#" 
                  className="bg-purple-800 py-3 px-6 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800 transition-colors"
                >
                  Comprar ahora
                </a>
              </div> */}
            </div>
          </div>
        ))}
      </div>

      {/* Indicadores */}
      <div className="flex justify-center space-x-2 mt-4">
        {chocolateImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full ${index === currentSlide ? 'bg-purple-800' : 'bg-purple-400'}`}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Controles manuales */}
      <button 
        onClick={() => {
          setCurrentSlide(prev => (prev - 1 + chocolateImages.length) % chocolateImages.length);
          setIsAutoPlaying(false);
        }}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
        aria-label="Slide anterior"
      >
        &lt;
      </button>
      <button 
        onClick={() => {
          nextSlide();
          setIsAutoPlaying(false);
        }}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
        aria-label="Slide siguiente"
      >
        &gt;
      </button>
    </div>
  );
};
