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
      title: "Bombonería Plaza",
      imageUrl: "https://breick.com.bo/wp-content/uploads/2021/07/sucre2.png",
      imageAlt: "Bombonería Sucre",
      description:
        " Plaza 25 de mayo. Horarios de atención: Lunes a Sábado de: 08:00am a  a 9:00 pm",
      buttonText: "Ver Ubicación",
      locationUrl: "https://maps.app.goo.gl/PKum33ertUXnUazq5",
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