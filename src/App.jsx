import AppRouter from "./routes/AppRouter";
import { AuthProvider } from "./contexts/AuthContext";
import { CrudProvider } from "./contexts/CrudContext";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <AuthProvider>
      <CrudProvider>
        <Toaster position="top-right" reverseOrder={false} />
        <AppRouter />
      </CrudProvider>
    </AuthProvider>
  );
}

export default App;
