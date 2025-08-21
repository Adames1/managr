import { useState } from "react";

import { useAuth } from "../../hooks/useAuth";
import AuthLayout from "../../layouts/AuthLayout";
import LinkPageForm from "../../components/auth/Link";
import { registerUser } from "../../services/auth";
import { createUserProfile } from "../../services/user";
import { serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

import Input from "../../components/auth/Input";
import Button from "../../components/auth/Button";

import { LoaderCircle } from "lucide-react";
import toast from "react-hot-toast";
import validator from "validator";

function Register() {
  const { loading } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleRegisterUser = async (e) => {
    e.preventDefault();

    const validName = name.trim();
    const validEmail = validator.isEmail(email.trim());
    const validPassword = password.trim();

    try {
      if (!validName && !validEmail && !validPassword) {
        setError(true);
        return;
      }

      // create user
      const { user: firebaseUser } = await registerUser(email, password);
      // save info user
      await createUserProfile(firebaseUser.uid, {
        userUid: firebaseUser.uid,
        userName: name,
        userEmail: email,
        createdAt: serverTimestamp(),
      });

      toast.success("Tu registro a sido existoso. Bienvenido!");

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
        <h2 className="font-medium text-slate-700">Crea una cuenta</h2>
        <form
          onSubmit={handleRegisterUser}
          className="w-full max-w-md flex flex-col gap-3"
        >
          <Input
            type="text"
            label="Nombre completo"
            id="input-name"
            placeholder="Jhon Due"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {error && (
            <p className="text-sm text-red-500">
              Debes ingresar tu nombre y apellido.
            </p>
          )}

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
                "Registrando..."
              </span>
            ) : (
              "Registrar"
            )}
          </Button>
        </form>

        <LinkPageForm
          link="/login"
          title="¿Ya tienes una cuenta?"
          linkTitle="Inicia sesión"
        />
      </div>
    </AuthLayout>
  );
}

export default Register;
