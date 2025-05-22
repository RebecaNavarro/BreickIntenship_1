import { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaShoppingBag,
  FaPhone,
  FaUsers,
  FaQuestionCircle,
  FaTags,
  FaHandsHelping,
  FaMapMarkerAlt,
} from "react-icons/fa";

const DashboardLayout = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { label: "Inicio", to: "/inicio", icon: <FaBars className="mr-2" /> },
    {
      label: "Catálogo",
      to: "/catalogo",
      icon: <FaShoppingBag className="mr-2" />,
    },
    { label: "Contacto", to: "/contacto", icon: <FaPhone className="mr-2" /> },
    { label: "Nosotros", to: "/nosotros", icon: <FaUsers className="mr-2" /> },
    {
      label: "Preguntas",
      to: "/preguntas",
      icon: <FaQuestionCircle className="mr-2" />,
    },
    {
      label: "Promociones",
      to: "/promociones",
      icon: <FaTags className="mr-2" />,
    },
    {
      label: "Responsabilidad Social",
      to: "/responsabilidadSocial",
      icon: <FaHandsHelping className="mr-2" />,
    },
    {
      label: "Sucursales",
      to: "/sucursales",
      icon: <FaMapMarkerAlt className="mr-2" />,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="w-full bg-gradient-to-r from-teal-600 to-teal-500 text-white shadow-lg">
        <div className="py-3 px-2 lg:px-2 max-w-[1440px] m-auto flex items-center justify-between">
          <Link to="/inicio" className="flex  flex-shrink-0">
            <img 
            className="block "
            src="/breick.png"
            width={120}
            height={90}
            >
              
            </img>
          </Link>

          {!isMobile ? (
            <div className="flex gap-4 lg:gap-6 text-sm lg:text-base font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`py-2 px-3 rounded-md flex items-center hover:bg-teal-700 hover:text-white transition-colors duration-300 ${
                    location.pathname === link.to
                      ? "bg-teal-700 font-semibold"
                      : ""
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

        {/* Mobile Menu */}
        {isMobile && (
          <div
            className={`fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-teal-700 px-4 py-6 text-lg flex flex-col gap-2 transform transition-transform duration-300 z-50 ${
              menuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={`py-3 px-4 rounded-md flex items-center hover:bg-teal-600 transition-colors duration-300 ${
                  location.pathname === link.to
                    ? "bg-teal-800 font-semibold"
                    : ""
                }`}
              >
                {link.icon}
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
