import React from 'react';

interface ClubBreickProps {
  imageUrl: string;
  imageAlt?: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink?: string;
  titleColor?: string;
  buttonColor?: string;
  buttonHoverColor?: string;
  shadowColor?: string;
}

const ClubBreick: React.FC<ClubBreickProps> = ({
  imageUrl,
  imageAlt = "Club Breick",
  title,
  description,
  buttonText,
  buttonLink = "#",
  titleColor = "#000000",
  buttonColor = "#62358C",
  buttonHoverColor = "#16878C",
  shadowColor = "rgba(128, 0, 128, 0.3)"
}) => {
  return (
    <div style={{
      maxWidth: '1000px',
      margin: '0 auto',
      padding: '40px 20px',
      fontFamily: 'Arial, sans-serif',
      display: 'flex',
      alignItems: 'center',
      gap: '40px',
      flexWrap: 'wrap' // Para responsive
    }}>
      {/* Columna de la imagen */}
      <div style={{ flex: 1, minWidth: '300px' }}>
        <img 
          src={imageUrl} 
          alt={imageAlt}
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            objectFit: 'cover'
          }}
        />
      </div>

      {/* Columna del contenido */}
      <div style={{ flex: 1, minWidth: '300px' }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          color: titleColor,
          marginBottom: '20px',
          textTransform: 'uppercase'
        }}>
          {title}
        </h1>

        <p style={{
          fontSize: '1.1rem',
          lineHeight: '1.6',
          marginBottom: '30px',
          color: '#555'
        }}>
          {description}
        </p>

        <a 
          href={buttonLink} 
          style={{ textDecoration: 'none', display: 'inline-block' }}
        >
          <button style={{
            backgroundColor: buttonColor,
            color: 'white',
            border: 'none',
            padding: '15px 30px',
            fontSize: '1rem',
            borderRadius: '30px',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.3s',
            boxShadow: `0 4px 8px ${shadowColor}`,
            minWidth: '200px'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverColor}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonColor}>
            {buttonText}
          </button>
        </a>
      </div>
    </div>
  );
};

export default ClubBreick;