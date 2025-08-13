import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutes() {
  const userLogin = false;

  if (!userLogin) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}

export default PrivateRoutes;
