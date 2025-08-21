import authDraw from "../assets/auth.svg";
import logo from "../assets/logo_managr.svg";

function AuthLayout({ children }) {
  return (
    <section className="flex">
      <div className="w-full h-screen lg:w-[60vw] p-6 flex flex-col">
        <header className="space-y-2 bg-white">
          <h2 className="flex items-center gap-2 text-slate-700 font-semibold text-xl">
            <img src={logo} alt="Logo Managr" className="w-7" />
            Managr
          </h2>
          <p className="text-[16px] text-slate-600">
            Administra tus proyectos de forma fácil.
          </p>
        </header>
        {children}
      </div>
      <div className="hidden md:flex lg:lg:w-[40vw] h-screen bg-[#326AEB] items-center justify-center">
        <img src={authDraw} alt="Draw for auth page" className="" />
      </div>
    </section>
  );
}

export default AuthLayout;
