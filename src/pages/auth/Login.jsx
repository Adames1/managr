import { useState } from "react";

import AuthLayout from "../../layouts/AuthLayout";
import { useAuth } from "../../hooks/useAuth";
import LinkPageForm from "../../components/auth/Link";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/auth";

import Input from "../../components/auth/Input";
import Button from "../../components/auth/Button";

import { LoaderCircle } from "lucide-react";
import toast from "react-hot-toast";
import validator from "validator";

function Login() {
  const { loading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLoginUser = async (e) => {
    e.preventDefault();

    const validEmail = validator.isEmail(email.trim());
    const validPassword = password.trim();

    try {
      if (!validEmail && !validPassword) {
        setError(true);
        return;
      }

      // signIn user
      await loginUser(email, password);

      toast.success("Has iniciado sesion con exito. Bienvenido!");

      navigate("/");
      setError(false);
    } catch (error) {
      toast.error(error.message);
      console.error(error.message);
    }
  };

  return (
    <AuthLayout>
      <div className="w-full flex flex-col flex-1 gap-8 items-center justify-center">
        <h2 className="font-medium text-slate-700">Inicia sesión</h2>
        <form
          onSubmit={handleLoginUser}
          className="w-full max-w-md flex flex-col gap-3"
        >
          <Input
            type="email"
            label="Correo electrónico"
            id="input-email"
            placeholder="jhondue@correo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && (
            <p className="text-sm text-red-500">Este correo no es valido.</p>
          )}

          <Input
            type="password"
            label="Contraseña"
            id="input-password"
            placeholder="Minimo 8 caracteres"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && (
            <p className="text-sm text-red-500">
              Minimo de caracteres debe ser 8.
            </p>
          )}

          <Button type="submit" disabled={loading}>
            {loading ? (
              <span className="flex items-center justify-between gap-2">
                <LoaderCircle size={24} className="animate-spin" />
                "Iniciando sesión..."
              </span>
            ) : (
              "Iniciar sesión"
            )}
          </Button>
        </form>

        <LinkPageForm
          link="/register"
          title="¿Aún no tienes una cuenta?"
          linkTitle="Regístrate"
        />
      </div>
    </AuthLayout>
  );
}

export default Login;
