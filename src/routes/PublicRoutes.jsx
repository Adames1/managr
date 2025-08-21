import { useAuth } from "../hooks/useAuth";
import { Outlet, Navigate } from "react-router-dom";

function PublicRoutes() {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

export default PublicRoutes;
