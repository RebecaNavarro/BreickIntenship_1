import React from 'react';

const Footer: React.FC = () => {
  const footerStyle: React.CSSProperties = {
    position: 'relative',
    padding: '3rem 2rem',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    overflow: 'hidden',
  };

  const backgroundStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'url(chocolate.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'blur(8px)',
    transform: 'scale(1.1)',
  };

  const overlayStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  };

  const contentStyle: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    zIndex: 1,
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const columnStyle: React.CSSProperties = {
    flex: '1',
    minWidth: '250px',
    padding: '0 1.5rem',
    marginBottom: '1.5rem',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '1.3rem',
    marginBottom: '1.5rem',
    fontWeight: 600,
    letterSpacing: '0.5px',
    color: '#fff',
    textTransform: 'uppercase',
    fontFamily: '"Montserrat", sans-serif',
  };

  const textStyle: React.CSSProperties = {
    lineHeight: '1.8',
    marginBottom: '1rem',
    fontFamily: '"Open Sans", sans-serif',
    fontWeight: 300,
  };

  const linkStyle: React.CSSProperties = {
    color: '#f8b195',
    textDecoration: 'none',
    display: 'inline-block',
    marginBottom: '0.5rem',
    transition: 'all 0.3s ease',
    borderBottom: '1px solid transparent',
    paddingBottom: '2px',
  };
  const linkHoverStyle = {
    ...linkStyle,
    color: '#fff',
    borderBottom: '1px solid #f8b195',
  };

  return (
    <footer style={footerStyle} className=' fade-in'>
      <div style={backgroundStyle}></div>
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
        <div style={columnStyle}>
          <h3 style={titleStyle}>DIRECCIÓN</h3>
          <address style={textStyle}>
            VILLA EL CARMEN<br />
            Calle 4 Nro. 57 – Casilla 867<br />
            La Paz – Bolivia
          </address>
        </div>

        <div style={columnStyle}>
          <h3 style={titleStyle}>CATÁLOGO</h3>
          <a 
            href="#" 
            style={linkStyle}
            onMouseEnter={(e) => Object.assign(e.currentTarget.style, linkHoverStyle)}
            onMouseLeave={(e) => Object.assign(e.currentTarget.style, linkStyle)}
          >
            Catálogo en PDF
          </a>
          
        </div>

        <div style={columnStyle}>
          <h3 style={titleStyle}>CONTACTO</h3>
          <div style={textStyle}>
            <strong style={{ fontWeight: 500 }}>TELÉFONO</strong><br />
            (+591) 777-07991<br />
            (+591 – 2) 2212184
          </div>
          <div style={textStyle}>
            <strong style={{ fontWeight: 500 }}>MAIL</strong><br />
            <a 
              href="mailto:info@breck.com.bo" 
              style={linkStyle}
              onMouseEnter={(e) => Object.assign(e.currentTarget.style, linkHoverStyle)}
              onMouseLeave={(e) => Object.assign(e.currentTarget.style, linkStyle)}
            >
              info@breck.com.bo
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;