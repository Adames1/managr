import { useState } from "react";
import { Link } from "react-router-dom";
import { validateEmail } from "../utils/helpers";

import Input from "../components/form/Input";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: false, password: false });

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailValid = validateEmail(email);
    const passwordValid = password.trim().length >= 8;

    setErrors({
      email: !emailValid,
      password: !passwordValid,
    });

    if (emailValid && passwordValid) {
      console.log("Datos correctos");

      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="h-full flex-grow flex flex-col items-center justify-center mt-4">
      <h2 className="text-xl font-semibold text-slate-600 mb-8">
        Inicia sesión
      </h2>
      <form
        onSubmit={handleSubmit}
        className="mt-4 w-full max-w-md flex flex-col gap-4"
      >
        <Input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Correo electrónico"
          htmlFor="email"
          placeholder="jhondue@correo.com"
          aria-label="Correo electrónico"
        />

        {errors.email ? (
          <p className="text-sm text-red-400 -mt-2">
            Este no es un correo valido.
          </p>
        ) : (
          ""
        )}

        <Input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Contraseña"
          htmlFor="password"
          placeholder="Minimo 8 caracteres"
          aria-label="Contraseña"
        />

        {errors.password ? (
          <p className="text-sm text-red-400 -mt-2">
            La contraseña debe tener al menos 8 caracteres.
          </p>
        ) : (
          ""
        )}

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 transition-all duration-200 ease-in-out text-white font-medium rounded-sm py-3 cursor-pointer"
        >
          Iniciar sesión
        </button>

        <p className="mt-6 text-sm text-slate-600 w-full text-center">
          ¿No tienes cuenta?{" "}
          <Link to="/register" className="font-medium underline text-blue-500">
            Regístrate aquí
          </Link>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;
