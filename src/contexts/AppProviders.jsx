import AuthProvider from "../contexts/AuthContext";
import UserProvider from "../contexts/UserContext";

export default function AppProviders({ children }) {
  return (
    <AuthProvider>
      <UserProvider>{children}</UserProvider>
    </AuthProvider>
  );
}
