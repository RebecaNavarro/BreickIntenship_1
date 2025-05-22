import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const MiniFooter: React.FC = () => {
  return (
    <footer className="footer footer-center w-full p-4 bg-stone-800 text-white">
      <div className="flex items-center justify-center gap-100 flex-wrap">
        <p className="flex items-center gap-1">
          © Todos los derechos reservados | Diseñado & Desarrollado por 
          <a className="font-semibold" href="mailto:m.sohanemon@gmail.com">
            CheckMark SRL 
          </a>
        </p>
        <div className="flex items-center gap-3">
          <a
            href="https://www.facebook.com/tuUsuario"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-blue-600 hover:text-blue-800 text-xl"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/tuUsuario"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-pink-600 hover:text-pink-800 text-xl"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default MiniFooter;
