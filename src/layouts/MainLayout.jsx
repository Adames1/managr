import Header from "../components/navegation/Header";
import Sidebar from "../components/navegation/Sidebar";

function MainLayout({ children }) {
  return (
    <section className="flex">
      <Sidebar />
      <div className="w-full">
        <Header />
        <main className="p-4">{children}</main>
      </div>
    </section>
  );
}

export default MainLayout;
