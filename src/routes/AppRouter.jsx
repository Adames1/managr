import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Dashboard from "../pages/user/Dashboard";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* rutas privadas */}
        <Route element={<ProtectedRoutes />}>
          <Route index element={<Dashboard />} />
        </Route>

        {/* rutas publicas */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
