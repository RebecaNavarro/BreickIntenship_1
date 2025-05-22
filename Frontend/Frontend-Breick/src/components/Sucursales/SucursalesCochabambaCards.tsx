import React from 'react';
import { useNavigate } from 'react-router-dom';

interface CardProps {
  title: string;
  imageUrl: string;
  imageAlt: string;
  description: string;
  buttonText: string;
  locationUrl: string;
}

const Card: React.FC<CardProps> = ({
  title,
  imageUrl,
  imageAlt,
  description,
  buttonText,
  locationUrl,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (locationUrl.startsWith('http')) {
      window.open(locationUrl, '_blank'); 
    } else {
      navigate(locationUrl); 
    }
  };

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white rounded-lg p-4 m-2 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
      <div className="w-full mb-4 pb-2 border-b border-gray-300">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <div>
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-48 object-cover rounded-md mb-3"
        />
        <p className="mb-4 text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
        <button
          onClick={handleClick}
          className="w-full bg-emerald-300 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors duration-200 focus:outline-none focus:ring-2  focus:ring-opacity-50"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

const CardGrid: React.FC = () => {
  const cardsData = [
    {
      title: "Bombonería Central",
      imageUrl: "https://breick.com.bo/wp-content/uploads/2023/06/Captura-de-Pantalla-2023-06-12-a-las-3.51.19-p.-m.png",
      imageAlt: "Bombonería Cochabamba",
      description:
        "Zona: Central Avenida Heroinas, entre calles Ayacucho y Baptista. Edificio: Centro Comercial RRR, planta baja local 147, nro. 143, Horarios de atención: Lunes a sábado: 8:00 am a 8:00 pm",
      buttonText: "Ver Ubicación",
      locationUrl: "https://maps.app.goo.gl/dasKhU71RsPCxNHD6",
    },
    {
      title: "Bombonería Queru Queru",
      imageUrl: "https://breick.com.bo/wp-content/uploads/2024/10/aniceto-padilla.jpg",
      imageAlt: "Bombonería Queru Queru",
      description:
        "Zona: Central Avenida Heroinas, entre calles Ayacucho y Baptista. Edificio: Centro Comercial RRR, planta baja local 147, nro. 143, Horarios de atención: Lunes a sábado: 8:00 am a 8:00 pm",
      buttonText: "Ver Ubicación",
      locationUrl: "https://maps.app.goo.gl/LRxkeHDD9gD535jq5",
    },
    
  ];

  return (
    <div className="w-full flex flex-wrap justify-center gap-4 py-6">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          imageUrl={card.imageUrl}
          imageAlt={card.imageAlt}
          description={card.description}
          buttonText={card.buttonText}
          locationUrl={card.locationUrl}
        />
      ))}
    </div>
  );
};

export default CardGrid;