import { NavLink } from "react-router-dom";
import logo from "../../assets/logo_managr.svg";
import { ChartPie, BriefcaseBusiness, LogOut } from "lucide-react";
import { logOutUser } from "../../services/auth";

function Sidebar() {
  return (
    <aside className="h-screen p-2 bg-slate-50 shadow-sm md:w-[320px]">
      <div className="h-full flex flex-col items-center justify-between gap-4">
        <h2 className="flex w-full items-center gap-2 text-slate-700 font-semibold text-lg p-2 border-b border-slate-300">
          <img src={logo} alt="Logo Managr" className="w-5" />
          <span className="sr-only md:not-sr-only">Managr</span>
        </h2>

        {/* navegation */}
        <nav className="w-full flex flex-col flex-1 gap-3 items-center md:items-start">
          <NavLink
            to="/"
            className="w-full flex items-center gap-2 px-2 py-1 rounded-md"
          >
            <ChartPie size={20} className="" />
            <span className="sr-only md:not-sr-only">Dashboard</span>
          </NavLink>
          <NavLink
            to="/workspaces"
            className="w-full flex items-center gap-2 px-2 py-1 rounded-md"
          >
            <BriefcaseBusiness size={20} className="" />
            <span className="sr-only md:not-sr-only">Workspaces</span>
          </NavLink>
        </nav>

        <button
          onClick={() => logOutUser()}
          type="button"
          className="w-full flex items-center gap-2 p-2 border-t border-slate-300 cursor-pointer"
        >
          <LogOut size={20} className="" />
          <span className="sr-only md:not-sr-only text-[15px]">
            Cerrar sesion
          </span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
