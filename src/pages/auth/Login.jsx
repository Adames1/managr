import { useState } from "react";
import AuthLayout from "../../layouts/AuthLayout";
import { useAuth } from "../../hooks/useAuth";
import Input from "../../components/auth/Input";
import Button from "../../components/auth/Button";
import LinkPageForm from "../../components/auth/Link";
import { LoaderCircle } from "lucide-react";

function Login() {
  const { loading } = useAuth();

  const handleLoginUser = async (e) => {
    e.preventDefault();
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
          />
          <Input
            type="password"
            label="Contraseña"
            id="input-password"
            placeholder="Minimo 8 caracteres"
          />
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
