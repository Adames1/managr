import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { getUserProfile } from "../../services/user";

function Header() {
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
    <header className="w-full bg-white border-b border-slate-200 p-4 flex items-center justify-end">
      <h2 className="text-[15px] font-medium text-slate-600">
        Hola, {displayName}
      </h2>
    </header>
  );
}

export default Header;
