import { createContext, useState, useEffect } from "react";
import { auth } from "../services/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { registerUser, signInUser, signOutUser } from "../services/auth/auth";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unSubscribe();
  }, []);

  const register = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const userCredential = await registerUser(email, password);
      return userCredential;
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      await signInUser(email, password);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    setLoading(true);
    setError(null);
    try {
      await signOutUser();
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{ loading, error, register, login, signOut, user }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
