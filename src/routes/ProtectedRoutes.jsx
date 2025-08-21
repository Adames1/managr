import { useAuth } from "../hooks/useAuth";
import { Outlet, Navigate } from "react-router-dom";

function ProtectedRoutes() {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoutes;
