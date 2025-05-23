import { useNavigate } from "react-router-dom";

export default function HorizontalCards(){
  
  const navigate = useNavigate();
  const cardsData = [
    {
      id: 1,
      imageUrl: '/cajas.png',
      title: 'Linea de cajas y servicios',
      buttonText: 'Catalogo'
    },
    {
      id: 2,
      imageUrl: '/tabletas.png',
      title: 'Linea de Tabletas',
      buttonText: 'Catalogo'
    },
    {
      id: 3,
      imageUrl: '/reposteria.png',
      title: 'Linea de Reposteria',
      buttonText: 'Catalogo'
    }
  ];

  const navigateCatalogo = () => {
    navigate('/catalogo');
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 p-8">
      {cardsData.map((card) => (
        <div 
          key={card.id}
          className="relative group w-96 h-96 overflow-hidden rounded-lg shadow-xl transition-all duration-300 hover:scale-105"
        >
          <img 
            className="object-cover w-full h-full transform duration-700 group-hover:scale-110" 
            src={card.imageUrl} 
            alt={card.title} 
          />
          
          {/* Overlay oscuro */}
          <div className="absolute w-full h-full  opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
          
          {/* Contenido que aparece al hacer hover */}
          <div className="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
            <div className="absolute w-full flex place-content-evenly">
              <p className="capitalize font-serif font-bold text-3xl text-center text-amber-50 mt-60">
                {card.title}
              </p>
            </div>
            
            <button 
            className="absolute left-1/4 bottom-4 bg-amber-900 text-black font-bold rounded-lg h-10 w-48 hover:bg-gray-200 transition-colors"
            onClick={navigateCatalogo}>
              {card.buttonText}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
