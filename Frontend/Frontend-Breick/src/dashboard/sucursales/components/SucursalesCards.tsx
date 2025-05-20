import React from 'react';

interface CardProps {
  title: string;
  imageUrl: string;
  imageAlt: string;
  description: string;
  buttonText: string;
}

const Card: React.FC<CardProps> = ({ title, imageUrl, imageAlt, description, buttonText }) => {
  return (
    <div className="backdrop w-10/12 md:w-1/4 bg-white bg-opacity-10 rounded p-3 text-white border border-white shadow-lg">
      {/* header */}
      <div className="w-full mb-3 pb-3 border-b border-1 border-white">
        <h3 className="text-xl text-black font-semibold text-shadow">{title}</h3>
      </div>
      {/* body */}
      <div>
        <img src={imageUrl} alt={imageAlt} className="w-full h-48 object-cover mb-2" />
        <p className="mb-3 tracking-wide text-base text-black text-shadow">
          {description}
        </p>
        <button className="backdrop bg-white hover:bg-cyan-200 text-black bg-opacity-0 border border-black px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-40 hover:bg-opacity-10 text-lg">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

const CardGrid: React.FC = () => {
  const cardsData = [
    {
      title: "Something Good",
      imageUrl: "https://i.postimg.cc/SxLx0fHV/bg01.jpg",
      imageAlt: "image1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, omnis.",
      buttonText: "Ubicacion"
    },
    {
      title: "Something Good",
      imageUrl: "https://i.postimg.cc/J4khxLqf/bg02.jpg",
      imageAlt: "image2",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, omnis.",
      buttonText: "Ubicacion"
    },
    {
      title: "Something Good",
      imageUrl: "https://i.postimg.cc/VNYLzb8w/bg03.jpg",
      imageAlt: "image3",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, omnis.",
      buttonText: "Ubicacion"
    }
  ];

  return (
    <div className="w-full min-h-screen flex flex-wrap justify-center items-center gap-3 py-5">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          imageUrl={card.imageUrl}
          imageAlt={card.imageAlt}
          description={card.description}
          buttonText={card.buttonText}
        />
      ))}
    </div>
  );
};

export default CardGrid;