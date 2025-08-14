import { Outlet } from "react-router-dom";
import Header from "../components/auth/Header";
import undrawAuth from "../assets/undraw_tasks.svg";

function AuthLayout() {
  return (
    <div className="flex">
      <section className="w-screen h-screen px-6 py-8 md:w-1/2 lg:w-[50vw]">
        <Header />
        <Outlet />
      </section>

      {/* divide content */}
      <div className="hidden md:flex items-center justify-center md:w-1/2 bg-blue-600 shadow-md lg:w-[50vw]">
        <img
          src={undrawAuth}
          alt="undraw for auth layout"
          className="w-[80%] max-w-2xl object-contain"
        />
      </div>
    </div>
  );
}

export default AuthLayout;
