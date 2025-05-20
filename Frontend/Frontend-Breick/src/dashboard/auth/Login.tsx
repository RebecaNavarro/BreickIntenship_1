import { useState } from "react";
import logo from "/logo.png";
import "./Login.css";

function Login() {

  return (
    <div id="login" className="login-container">
      <div id="leftside" className="login-left">
        <div className="login-branding">
          <img
            id="logo"
            src={logo}
            alt="Logo Breick"
            className="login-logo"
          />
        </div>
      </div>

      <div id="rightside" className="login-right">
        <div className="login-form-container">
          <h1 id="h1-inicio-sesion" className="login-title">
            Iniciar Sesión
          </h1>
          
          <form id="inicio-sesion" className="login-form">
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
                id="input-usuario"
                name="username"
                placeholder="Ingresar nombre de usuario"
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
                Contraseña
              </label>
              <input
                type="password"
                id="in"
                name="password"
                placeholder="ingresar contraseña"
                autoComplete="off"
                className="form-input"
              />
            </div>
            
            <div className="form-options">
              <div className="remember-me">
                <input
                  type="checkbox"
                  id="remember"
                  className="remember-checkbox"
                />
                <label htmlFor="remember" className="remember-label">
                  Recordarme
                </label>
              </div>
              <a href="#" className="forgot-password">
                Olvidaste tu contraseña?
              </a>
            </div>
            
            <button
              type="submit"
              className="login-button"
            >
              Iniciar sesión
            </button>
          </form>
          
          <div className="signup-link">
            <a href="#" className="signup-text">
              Registrarse
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;