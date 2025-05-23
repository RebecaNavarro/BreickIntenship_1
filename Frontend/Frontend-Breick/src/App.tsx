import { Routes, Route } from 'react-router-dom';
import DashboardLayout from './dashboard/layout';
import Inicio from './dashboard/inicio/page';
import Catalogo from './dashboard/catalogo/page';
import Contacto from './dashboard/contacto/Contact.tsx';
import Nosotros from './dashboard/nosotros/Nosotros.tsx';
import Preguntas from './dashboard/preguntas/page';
import { Promociones } from './dashboard/promociones/page';
import ResponsabilidadSocial from './dashboard/responsabilidadSocial/page';
import Sucursales from './dashboard/sucursales/page';
import Login from './dashboard/auth/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route path="inicio" element={<Inicio />} />
        <Route path="catalogo" element={<Catalogo />} />  
        <Route path="contacto" element={<Contacto />} />
        <Route path="nosotros" element={<Nosotros />} />
        <Route path="preguntas" element={<Preguntas />} />
        <Route path="promociones" element={<Promociones />} />
        <Route path="responsabilidadSocial" element={<ResponsabilidadSocial />} />
        <Route path="sucursales" element={<Sucursales />} />
        <Route path="auth" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
