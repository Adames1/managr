import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { Toaster } from "react-hot-toast";
import AppProviders from "./contexts/AppProviders";

function App() {
  return (
    <BrowserRouter>
      <AppProviders>
        <Toaster />
        <AppRoutes />
      </AppProviders>
    </BrowserRouter>
  );
}

export default App;
