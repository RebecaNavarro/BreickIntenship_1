import { useState } from "react";
import logo from "/logo.png"
import "./Login.css";

function Login() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-gray-100 flex justify-center items-center h-screen">
        <div id="leftside" className="w-1/2 h-screen hidden lg:block">
          <img
            src={logo}
            alt="Logo"
            className="object-cover w-full h-full"
          />
        </div>

        <div id="rightside" className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
          <h1 className="h1">
            Iniciar Sesión
          </h1>

          <form action="#" method="POST">
            <div className="mb-4">
              <label
                htmlFor="username"
                className="text block text-gray-600"
              >
                Usuario
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Ingresar nombre de usuario"
                autoComplete="off"
                className="input w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="text block text-gray-600"
              >
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Ingresar contraseña"
                autoComplete="off"
                className="input w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-6">
              <a
                href="#"
                className="text-blue-500 hover:underline"
              >
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2"
            >
              Iniciar sesión
            </button>
          </form>

          <div className="mt-6 text-center">
            <a href="#" className="text-blue-500 hover:underline">
              Registrarse
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
