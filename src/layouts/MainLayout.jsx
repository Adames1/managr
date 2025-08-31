import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { getUserProfile } from "../services/user";
import Header from "../components/navegation/Header";
import Sidebar from "../components/navegation/Sidebar";

function MainLayout({ children }) {
  const { user } = useAuth();
  const [displayName, setDisplayName] = useState("");

  useEffect(() => {
    const fetchDataUser = async () => {
      const result = await getUserProfile(user.uid);
      const { userName } = result;
      setDisplayName(userName);
    };

    fetchDataUser();
  }, [user.uid]);

  return (
    <section className="flex relative">
      <Sidebar />
      <div className="w-full">
        <Header displayName={displayName} />
        <main className="py-6 px-6 md:px-10">{children}</main>
      </div>
    </section>
  );
}

export default MainLayout;
