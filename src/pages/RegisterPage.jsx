import { useState } from "react";
import { Link } from "react-router-dom";
import { validateEmail } from "../utils/helpers";

import Input from "../components/form/Input";

function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: false,
    password: false,
    fullName: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailValid = validateEmail(email);
    const passwordValid = password.trim().length >= 8;

    setErrors({
      email: !emailValid,
      password: !passwordValid,
      fullName: fullName.trim() === "",
    });

    if (fullName && emailValid && passwordValid) {
      console.log("Datos correctos");

      setFullName("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="h-full flex-grow flex flex-col items-center justify-center mt-4">
      <h2 className="text-xl font-semibold text-slate-600 mb-8">Regístrate</h2>
      <form
        onSubmit={handleSubmit}
        className="mt-4 w-full max-w-md flex flex-col gap-4"
      >
        <Input
          type="text"
          id="fullName"
          name="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          label="Nombre completo"
          htmlFor="fullName"
          placeholder="Jhon Due"
          aria-label="Nombre completo"
        />
        {errors.fullName ? (
          <p className="text-sm text-red-400 -mt-2">
            Ingresa tu nombre completo.
          </p>
        ) : (
          ""
        )}

        <Input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Correo electrónico"
          htmlFor="email"
          placeholder="ejemplo@correo.com"
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
  );
}

export default RegisterPage;
