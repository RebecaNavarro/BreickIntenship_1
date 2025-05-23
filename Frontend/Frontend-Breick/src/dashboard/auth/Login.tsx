import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import logo from "/logo.png";
import "./Login.css";

function Login() {
  const [method, setMethod] = useState("signin");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    try {
      const response = await axios.post('http://tu-backend.com/api/auth/login', {
        email: formData.email,
        password: formData.password
      });
      
      // Guardar token en localStorage o contexto
      localStorage.setItem('authToken', response.data.token);
      
      // Redirigir al dashboard o página principal
      navigate('/dashboard');
      
    } catch (err) {
      setError("Usuario o contraseña incorrectos");
      console.error("Error en login:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validar que las contraseñas coincidan
    if (formData.password !== formData.confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }
    
    setLoading(true);
    setError("");
    
    try {
      const response = await axios.post('http://tu-backend.com/api/auth/register', {
        username: formData.username,
        email: formData.email,
        password: formData.password
      });
      
      // Cambiar a vista de login después de registro exitoso
      setMethod("signin");
      setError(""); // Limpiar errores
      alert("Registro exitoso. Por favor inicia sesión.");
      
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Error en el registro");
      } else {
        setError("Error en el registro");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page flex">
      {method === "signin" && (
        <div id="login" className="login-container justify-center items-center">
          <div id="login-leftside" className="login-left">
            <div id="login-form-container" className="login-form-container">
              <h1 id="h1-login" className="login-title">Iniciar Sesión</h1>
              
              {error && <div className="error-message">{error}</div>}
              
              <form id="login" className="login-form" onSubmit={handleLogin}>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Usuario</label>
                  <input
                    type="text"
                    id="input-email"
                    name="email"
                    placeholder="Ingresar nombre de usuario"
                    autoComplete="off"
                    className="form-input"
                    maxLength={20}
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="password" className="form-label">Contraseña</label>
                  <input
                    type="password"
                    id="input-password"
                    name="password"
                    maxLength={10}
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Ingresar contraseña"
                    autoComplete="off"
                    className="form-input"
                    required
                  />
                </div>
                
                {/* <div className="form-options">
                  <div className="remember-me">
                    <input
                      type="checkbox"
                      id="remember-checkbox"
                      className="remember-checkbox"
                    />
                    <label htmlFor="remember" className="remember-label">Recordarme</label>
                  </div>
                  <a href="#" className="forgot-password">Olvidaste tu contraseña?</a>
                </div> */}
                
                <button
                  type="submit"
                  className="login-button"
                  disabled={loading}
                >
                  {loading ? "Cargando..." : "Iniciar sesión"}
                </button>
              </form>
            </div>
          </div>
          
          <div id="login-rightside" className="login-right" style={{ flexDirection: 'column', gap: '20px' }}>
            <img src={logo} alt="Logo" className="login-logo" />
            <button
              className="signup-button"
              type="button"
              onClick={() => setMethod("signup")}
            >
              ¿Aún no tienes una cuenta?
            </button>
          </div>
        </div>
      )}
      
      {method === "signup" && (
        <div id="signup" className="signup-container justify-center items-center">
          <div id="signup-leftside" className="signup-left" style={{ flexDirection: 'column', gap: '20px' }}>
            <img src={logo} alt="Logo" className="login-logo" />
            <button
              className="login-button"
              type="button"
              onClick={() => setMethod("signin")}
            >
              ¿Ya tienes una cuenta?
            </button>
          </div>
          
          <div id="signup-rightside" className="signup-right">
            <div className="signup-form-container">
              <h1 id="h1-signup" className="login-title">Registrarse</h1>
              
              {error && <div className="error-message">{error}</div>}
              
              <form id="signup" className="login-form" onSubmit={handleRegister}>
                <div className="form-group">
                  <label htmlFor="username" className="form-label">Usuario</label>
                  <input
                    type="text"
                    id="input-usuario"
                    name="username"
                    placeholder="Ingresar nombre de usuario"
                    autoComplete="off"
                    className="form-input"
                    maxLength={20}
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="input-email-register"
                    name="email"
                    placeholder="Ingresar correo electrónico"
                    autoComplete="off"
                    className="form-input"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="password" className="form-label">Contraseña</label>
                  <input
                    type="password"
                    id="input-password-register"
                    name="password"
                    maxLength={10}
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Ingresar contraseña"
                    autoComplete="off"
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="confirmPassword" className="form-label">Confirmar contraseña</label>
                  <input
                    type="password"
                    id="input-confirm-password"
                    name="confirmPassword"
                    maxLength={10}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Repetir Contraseña"
                    autoComplete="off"
                    className="form-input"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="signup-button"
                  disabled={loading}
                >
                  {loading ? "Registrando..." : "Registrarse"}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;