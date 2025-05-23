import React from 'react';
import { useNavigate } from 'react-router-dom';

interface CardData {
  id: string;
  title: string;
  imageUrl: string;
  imageAlt: string;
  description: string;
  buttonText: string;
  locationUrl: string;
}

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
    <div className="w-full  bg-white rounded-lg p-4 m-2 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
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
          className="w-full bg-fuchsia-700 text-white px-4 py-2 rounded-md hover:bg-emerald-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-50"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

const CardGrid: React.FC = () => {
  const cardsData: CardData[] = [
    {
      id: "1",
      title: "Megacenter",
      imageUrl: "https://breick.com.bo/wp-content/uploads/2020/05/lapazcenter.jpg",
      imageAlt: "Megacenter",
      description:
        "Zona Irpavi. Complejo Megacenter Av. Rafael Pabón, piso 1 Local S/N. Horarios de atención: Lunes a Domingo de 10:00 am a 10:00 pm",
      buttonText: "Ver Ubicación",
      locationUrl: "https://maps.app.goo.gl/2qu4wwpxPDfxgzv58",
    },
    {
      id: "2",
      title: "Cine Center",
      imageUrl: "https://breick.com.bo/wp-content/uploads/2020/06/islaSCZ.jpg",
      imageAlt: "Ciner Center",
      description:
        "Cine Center, 2do anillo entre René Moreno y monseñor  Santiesteban, Zona el Trompillo  piso 1 local s/n Horarios de atención: Lunes a Domingo de 10:00 am a 10:00 pm",
      buttonText: "Ver Ubicación",
      locationUrl: "https://maps.app.goo.gl/LNcMNpFieAwuTSKa9",
    },
  ];

  return (
    <div className="w-full flex flex-wrap justify-center gap-10 py-6">
      {cardsData.map((card) => (
        <div key={card.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3">
          <Card
            title={card.title}
            imageUrl={card.imageUrl}
            imageAlt={card.imageAlt}
            description={card.description}
            buttonText={card.buttonText}
            locationUrl={card.locationUrl}
          />
        </div>
      ))}
    </div>
  );
};

const BlogSection: React.FC = () => {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-slate-100 py-6 sm:py-12">
      <div className="min-h-28">
        <div className="max-w-screen-lg mx-auto py-4">
          <h2 className="font-bold text-center text-6xl text-slate-700 font-display">
            Nuestras Islas
          </h2>
          <CardGrid />
        </div>
      </div>
    </div>
  );
};

export default BlogSection;