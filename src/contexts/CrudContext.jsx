import { createContext, useEffect, useState } from "react";
import { listenUserWorkspaces, listenUserProjects } from "../services/data";
import { useAuth } from "../hooks/useAuth";

export const CrudContext = createContext();

export const CrudProvider = ({ children }) => {
  const { user } = useAuth();
  const [workspaces, setWorkspaces] = useState([]);
  const [projects, setProjects] = useState([]);
  const [workspaceId, setWorkspaceId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.uid) return;

    const unsubscribe = listenUserWorkspaces(user.uid, (data) => {
      setWorkspaces(data);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [user?.uid]);

  useEffect(() => {
    if (!user?.uid || !workspaceId) return;

    setLoading(true);

    const unsubscribe = listenUserProjects(user.uid, workspaceId, (data) => {
      setProjects(data);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [user?.uid, workspaceId]);

  return (
    <CrudContext.Provider
      value={{
        workspaces,
        loading,
        setWorkspaceId,
        projects,
      }}
    >
      {children}
    </CrudContext.Provider>
  );
};
