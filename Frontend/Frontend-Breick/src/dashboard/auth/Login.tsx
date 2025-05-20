import { useState } from "react";
import { useEffect } from "react";

import logo from "/logo.png";

import "./Login.css";

function Login() {

  const [method, setMethod] = useState("signin");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const changeToSignUp = () => setMethod("signup");
  const changeToSignIn = () => setMethod("signin");

  return (
    <div className="login-page">
      
      {method === "signin" && (
      <div id="login" className="login-container justify-center items-center">
        <div id="login-leftside" className="login-left">
          <div id="login-form-container" className="login-form-container">
            <h1 id="h1-login" className="login-title">
              Iniciar Sesión
            </h1>
            
            <form id="login" className="login-form">
              <div className="form-group">
                <label
                  id="label-usuario"
                  htmlFor="username"
                  className="form-label"
                >
                  Usuario
                </label>
                <input
                  type="text"
                  id="input-username"
                  placeholder="Ingresar nombre de usuario"
                  autoComplete="off"
                  className="form-input"
                  maxLength={20}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              
              <div className="form-group">
                <label
                  id="label-password"
                  htmlFor="password"
                  className="form-label"
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  id="input-password"
                  maxLength={10}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Ingresar contraseña"
                  autoComplete="off"
                  className="form-input"
                />
              </div>
              <div className="form-options">
                <div className="remember-me">
                  <input
                    type="checkbox"
                    id="remember-checkbox"
                    className="remember-checkbox"
                  />
                  <label id="label-remember" htmlFor="remember" className="remember-label">
                    Recordarme
                  </label>
                </div>
                <a id="forgot-password" href="#" className="forgot-password">
                  Olvidaste tu contraseña?
                </a>
              </div>
              <button
                id="btn-login"
                type="submit"
                className="login-button"
              >
                Iniciar sesión
              </button>
            </form>
          </div>
        </div>
        <div id="login-rightside" className="login-right" style={{ flexDirection: 'column', gap: '20px' }}>
          <img 
            id="login-logo" 
            src={logo} 
            alt="Logo" 
            className="login-logo" 
          />
          <button
            id="btn-go-to-signup"
            className="signup-button"
            type="button"  
            onClick={changeToSignUp}  
          >
            ¿Aún no tienes una cuenta?
          </button>
        </div>
      </div> 
      )}
      {method === "signup" && (
      <div id="signup" className="signup-container justify-center items-center">
        <div id="signup-leftside" className="signup-left" style={{ flexDirection: 'column', gap: '20px' }}>
          <img 
            id="signup-logo"
            src={logo} 
            alt="Logo" 
            className="login-logo" 
          />
          <button
            id="btn-go-to-login"
            className="login-button"
            type="button"  
            onClick={changeToSignIn}  
          >
            ¿Ya tienes una cuenta?
          </button>
        </div>
        <div id="signup-rightside" className="signup-right">
          <div className="signup-form-container">
            <h1 id="h1-signup" className="login-title">
              Registrarse
            </h1>
            <form id="signup" className="login-form">
              <div className="form-group">
                <label
                  id="label-usuario-signup"
                  htmlFor="username"
                  className="form-label"
                >
                  Usuario
                </label>
                <input
                  type="text"
                  id="input-usuario"
                  placeholder="Ingresar nombre de usuario"
                  autoComplete="off"
                  className="form-input"
                  maxLength={20}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label
                  id="label-usuario-signup"
                  htmlFor="username"
                  className="form-label"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="input-usuario"
                  placeholder="Ingresar correo electrónico"
                  autoComplete="off"
                  className="form-input"
                  maxLength={20}
                />
              </div>
              
              <div className="form-group">
                <label
                  id="label-password"
                  htmlFor="password"
                  className="form-label"
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  id="in"
                  maxLength={10}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Ingresar contraseña"
                  autoComplete="off"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label
                  id="label-password"
                  htmlFor="password"
                  className="form-label"
                >
                  Confirmar contraseña
                </label>
                <input
                  type="password"
                  id="in"
                  maxLength={10}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Repetir Contraseña"
                  autoComplete="off"
                  className="form-input"
                />
              </div>
              <button
                id="btn-signup"
                type="submit"
                className="signup-button"
              >
                Registrarse
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