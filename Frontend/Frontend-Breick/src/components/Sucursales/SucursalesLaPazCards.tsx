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
      imageUrl: "https://breick.com.bo/wp-content/uploads/2020/05/federicocentral.jpg",
      imageAlt: "Bombonería Central",
      description:
        "Zona: Central Calle Federico Zuazo, Edificio Park Inn, Nº 1598. Teléfono / Fax: 2364264. Horarios de atención: Lunes a Sábados: 9:00 am a 8:00 pm",
      buttonText: "Ver Ubicación",
      locationUrl: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x915f207017cb4145:0x7fc3c4a6b46ed4bd?source=g.page.share",
    },
    {
      title: "Bomboneria Sur",
      imageUrl: "https://breick.com.bo/wp-content/uploads/2021/07/sur.jpg",
      imageAlt: "Sucursal Miraflores",
      description:
        "Zona: Calacoto. Calle 21, casi Esq. Ignacio Cordero, Nº 8382 - Of. 3. Teléfono / Fax: 2771133. Lunes a Sábados: 9:00 am a 8:00 pm",
      buttonText: "Ver Ubicación",
      locationUrl: "https://maps.app.goo.gl/ivmwWkFB9hQHmsHDA",
    },
    {
      title: "Bomboneria Sopocachi",
      imageUrl: "https://breick.com.bo/wp-content/uploads/2020/05/sopocachi.jpg",
      imageAlt: "Sucursal Sopocachi",
      description:
        "Zona: Sopocachi. Calle Miguel de Cervantes, Esq. Mendez Arcos. Estación Línea Amarilla Mi Teleférico. Lunes a Sábados: 9:00 am a 8:00 pm",
      buttonText: "Ver Ubicación",
      locationUrl: "https://maps.app.goo.gl/K2gB94JgVUS3PjnQA",
    },
    {
      title: "Bomboneria Miraflores",
      imageUrl: "https://breick.com.bo/wp-content/uploads/2025/04/Abr-05-sin-letras.jpg",
      imageAlt: "Sucursal Miraflores",
      description:
        "Zona: Miraflores. Calle Claudio Sanjinez, esquina Francisco de Miranda No. 1587, Zona Miraflores. Lunes a Sábados: 9:00 am a 8:00 pm",
      buttonText: "Ver Ubicación",
      locationUrl: "https://maps.app.goo.gl/PM2Sm1XDAvi92yxbA",
    },
    {
      title: "Bomboneria Sur El Bosque",
      imageUrl: "https://breick.com.bo/wp-content/uploads/2025/04/IMG_04571-scaled.jpg",
      imageAlt: "Sucursal Sur El Bosque",
      description:
        "Zona: Calacoto. Calle 15 de Calacoto, entre Sánchez Bustamante y Julio Patiño, en El Bosque Boulevard Local #3 Martes a Domingo: 10:00 am a 10:00 pm",
      buttonText: "Ver Ubicación",
      locationUrl: "https://maps.app.goo.gl/a335gmz1qAg1L3ZP8",
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