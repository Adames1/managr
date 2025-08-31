import { createContext, useEffect, useState } from "react";
import { listenUserWorkspaces } from "../services/data";
import { useAuth } from "../hooks/useAuth";

export const CrudContext = createContext();

export const CrudProvider = ({ children }) => {
  const { user } = useAuth();
  const [workspaces, setWorkspaces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.uid) return;

    const unsubscribe = listenUserWorkspaces(user.uid, (data) => {
      setWorkspaces(data);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [user?.uid]);

  return (
    <CrudContext.Provider value={{ workspaces, loading }}>
      {children}
    </CrudContext.Provider>
  );
};
