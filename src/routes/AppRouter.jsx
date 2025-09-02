import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import PublicRoutes from "./PublicRoutes";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Dashboard from "../pages/user/Dashboard";
import Workspace from "../pages/user/Workspace";
import WorkspacesDetails from "../pages/user/WorkspacesDetails";
import ProjectsDetails from "../pages/user/ProjectsDetails";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* rutas privadas */}
        <Route element={<ProtectedRoutes />}>
          <Route index element={<Dashboard />} />
          <Route path="/workspaces" element={<Workspace />} />
          <Route path="/workspaces/:id" element={<WorkspacesDetails />} />
          <Route
            path="/workspaces/:id/projects/:id"
            element={<ProjectsDetails />}
          />
        </Route>

        {/* rutas publicas */}
        <Route element={<PublicRoutes />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
