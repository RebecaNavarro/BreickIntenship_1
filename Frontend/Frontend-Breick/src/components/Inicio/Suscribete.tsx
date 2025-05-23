import { useState } from 'react';

const Suscribete = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

interface FormData {
    name: string;
    email: string;
}

interface HandleSubmitEvent extends React.FormEvent<HTMLFormElement> {}

const handleSubmit = (e: HandleSubmitEvent): void => {
    e.preventDefault();

    // Validación simple
    if (!name.trim()) {
        setError('Por favor ingresa tu nombre');
        return;
    }

    if (!email.includes('@')) {
        setError('Por favor ingresa un correo electrónico válido');
        return;
    }

    // Aquí iría la lógica para enviar los datos al servidor
    const data: FormData = { name, email };
    console.log('Datos enviados:', data);

    // Resetear el formulario y mostrar mensaje de éxito
    setSubscribed(true);
    setName('');
    setEmail('');
    setError('');
};

  if (subscribed) {
    return (
      <div className="flex flex-col items-center justify-center bg-amber-800 text-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h2 className="text-2xl font-bold mb-2">¡Gracias por suscribirte!</h2>
        <p className="text-center">Te hemos enviado un correo de confirmación. Pronto recibirás nuestras mejores ofertas.</p>
      </div>
    );
  }

  return (
    <div className="bg-amber-800 text-white p-6 rounded-lg shadow-lg w-full  ">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold mb-2">¡SUSCRÍBETE!</h1>
        <p className="text-amber-100">
          Registra tu nombre y correo electrónico para recibir noticias sobre nuevos productos y promociones exclusivas.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
            <p>{error}</p>
          </div>
        )}

        <div>
          
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5"
            placeholder="Correo electrónico"
            required
          />
        </div>

        

        <button
          type="submit"
          className="w-full text-white bg-gradient-to-r from-amber-500 to-amber-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-3 text-center transition-all duration-300"
        >
          Suscribirme
        </button>
      </form>
    </div>
  );
};

export default Suscribete;