import { createContext, useState } from "react";
import { addNewUser } from "../services/auth/users";

export const UserContext = createContext();

function UserProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createUser = async (dataUser) => {
    setLoading(true);
    setError(null);
    try {
      const userId = await addNewUser(dataUser);
      return userId;
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider value={{ createUser, loading, error }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
