import { Link } from "react-router-dom";

import Header from "../components/auth/Header";

function RegisterPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="flex flex-col justify-center min-h-screen">
      {/* header component for layout auth */}
      <Header />

      {/* form auth */}
      <div className="flex-grow flex flex-col items-center justify-center mt-4">
        <h2 className="text-xl font-semibold text-slate-600 mb-8">
          Regístrate
        </h2>
        <form
          onSubmit={handleSubmit}
          className="mt-4 w-full max-w-md flex flex-col gap-4"
        >
          <div className="flex flex-col w-full">
            <label htmlFor="fullName" className="text-sm text-slate-600 mb-1">
              Nombre completo
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="w-full border rounded-sm px-4 py-3 text-sm placeholder:text-sm focus:border-blue-500 focus:outline focus:outline-blue-500 transition-all duration-200 ease-in-out"
              placeholder="Jhon Due"
              aria-label="Nombre Completo"
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="email" className="text-sm text-slate-600 mb-1">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border rounded-sm px-4 py-3 text-sm placeholder:text-sm focus:border-blue-500 focus:outline focus:outline-blue-500 transition-all duration-200 ease-in-out"
              placeholder="ejemplo@correo.com"
              aria-label="Correo electrónico"
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="password" className="text-sm text-slate-600 mb-1">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border rounded-sm px-4 py-3 text-sm placeholder:text-sm focus:border-blue-500 focus:outline focus:outline-blue-500 transition-all duration-200 ease-in-out"
              placeholder="Contraseña"
              aria-label="Contraseña"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 transition-all duration-200 ease-in-out text-white font-medium rounded-sm py-3 cursor-pointer"
          >
            Registrarse
          </button>

          <p className="mt-6 text-sm text-slate-600 w-full text-center">
            ¿Ya tienes cuenta?{" "}
            <Link to="/login" className="font-medium underline text-blue-500">
              Inicia sesión
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default RegisterPage;
