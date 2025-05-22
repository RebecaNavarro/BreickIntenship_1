import { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaShoppingBag,
  FaUsers,
  FaQuestionCircle,
  FaTags,
  FaHandsHelping,
  FaMapMarkerAlt,
  FaUserCircle,
  FaPhoneAlt,
} from "react-icons/fa";

const DashboardLayout = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setMenuOpen(false); 
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { label: "Inicio", to: "/inicio", icon: <FaBars className="mr-2" /> },
    { label: "Catálogo", to: "/catalogo", icon: <FaShoppingBag className="mr-2" /> },
    { label: "Contacto", to: "/contacto", icon: <FaPhoneAlt className="mr-2" /> },
    { label: "Nosotros", to: "/nosotros", icon: <FaUsers className="mr-2" /> },
    { label: "Preguntas", to: "/preguntas", icon: <FaQuestionCircle className="mr-2" /> },
    { label: "Promociones", to: "/promociones", icon: <FaTags className="mr-2" /> },
    {label: "Responsabilidad Social",to: "/responsabilidadSocial",icon: <FaHandsHelping className="mr-2" />,},
    { label: "Sucursales", to: "/sucursales", icon: <FaMapMarkerAlt className="mr-2" /> },
    { label: "Login", to: "/auth", icon: <FaUserCircle className="mr-2" /> },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="w-full bg-gradient-to-r from-teal-600 to-teal-500 text-white shadow-lg">
        <div className="px-4 py-3 mx-auto max-w-7xl flex items-center justify-between">
          <Link to="/inicio" className="flex items-center flex-shrink-0">
            <img
              className="w-24 h-auto md:w-28"
              src="/breick.png"
              alt="Logo"
            />
          </Link>

          {!isMobile ? (
            <div className="flex items-center gap-2 text-sm md:text-base font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`py-2 px-3 rounded-md flex items-center hover:bg-teal-700 hover:text-white transition-colors duration-300 ${
                    location.pathname === link.to ? "bg-teal-700 font-semibold" : ""
                  }`}
                >
                  {link.icon}
                  {link.label}
                </Link>
              ))}
            </div>
          ) : (
            <div onClick={toggleMenu} className="text-2xl cursor-pointer p-2">
              {menuOpen ? <FaTimes /> : <FaBars />}
            </div>
          )}
        </div>

        {isMobile && menuOpen && (
          <div
            className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-3/4 max-w-xs bg-teal-700 px-4 py-6 text-lg flex flex-col gap-2 transform transition-transform duration-300 z-50"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={`py-3 px-4 rounded-md flex items-center hover:bg-teal-600 transition-colors duration-300 ${
                  location.pathname === link.to ? "bg-teal-800 font-semibold" : ""
                }`}
              >
                {link.icon}
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
      <main className="flex-grow bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;