import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { validateEmail } from "../utils/helpers";
import { useAuth } from "../hooks/useAuth";
import { useUser } from "../hooks/useUser";
import toast from "react-hot-toast";
import Input from "../components/form/Input";
import { serverTimestamp } from "firebase/firestore";

function RegisterPage() {
  const { register } = useAuth();
  const { createUser } = useUser();

  // Estados para los campos del formulario
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: false,
    password: false,
    fullName: false,
  });

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const emailValid = validateEmail(email);
    const passwordValid = password.trim().length >= 8;
    const nameValid = fullName.trim() !== "";

    // Actualiza estado de errores para mostrar mensajes en UI
    setErrors({
      email: !emailValid,
      password: !passwordValid,
      fullName: !nameValid,
    });

    if (nameValid && emailValid && passwordValid) {
      try {
        // Registra en Firebase Auth y obtiene credenciales
        const userCredential = await register(email, password);
        const { uid } = userCredential.user;

        // Guarda datos adicionales en Firestore
        await createUser({
          uid,
          email,
          displayName: fullName,
          createdAt: serverTimestamp(),
        });

        toast.success("¡Registro exitoso! Bienvenido 👋");

        setFullName("");
        setEmail("");
        setPassword("");

        navigate("/");
      } catch (error) {
        toast.error(error.message || "Error al registrar el usuario");
      }
    }
  };

  return (
    <div className="h-full flex-grow flex flex-col items-center justify-center mt-4">
      <h2 className="text-xl font-semibold text-slate-600 mb-8">Regístrate</h2>
      <form
        onSubmit={handleRegister}
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
