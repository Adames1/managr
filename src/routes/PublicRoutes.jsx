import { Navigate, Outlet } from "react-router-dom";

function PublicRoutes() {
  const userLogin = false;

  if (!userLogin) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}

export default PublicRoutes;
