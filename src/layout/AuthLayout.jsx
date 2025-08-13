import { Outlet } from "react-router-dom";
import undrawAuth from "../assets/undraw_tasks.svg";

function AuthLayout() {
  return (
    <div className="w-screen min-h-screen flex flex-col md:flex-row">
      <main className="w-full h-full px-6 py-8 md:w-1/2 lg:w-[60vw]">
        <Outlet />
      </main>

      {/* divide content */}
      <div className="hidden md:flex items-center justify-center md:w-1/2 bg-blue-600 shadow-md lg:w-[40vw]">
        <img
          src={undrawAuth}
          alt="undraw for auth layout"
          className="w-[80%] max-w-xl object-contain"
        />
      </div>
    </div>
  );
}

export default AuthLayout;
