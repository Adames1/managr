import { useAuth } from "../hooks/useAuth";
import { Outlet, Navigate } from "react-router-dom";
import Loading from "../components/Loader/Loading";

function ProtectedRoutes() {
  const { user, loading } = useAuth();

  if (loading) return <Loading />;
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoutes;
