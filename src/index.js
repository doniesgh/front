import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import 'boxicons';
import App from "./App";
import { UsersContextProviders } from "views/controller/tables/Context/userContext";
import { AuthContextProvider } from "views/auth/context/AuthContext";
import {ReclamationsContextProvider} from "views/admin/Reclamation/Contexts/reclamationContext"
import { EquipementsContextProvider } from "views/admin/equipement/context/equipementContext";
import {ChartContextProvider} from "views/admin/default/context/chartContext"
import { TechReclamationProvider } from "views/technicien/reclamation/Contexts/reclamationContext";
//import { ProfilContextProvider } from "views/technicien/profil/context/profilContext";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AuthContextProvider>
  <UsersContextProviders>
  <ReclamationsContextProvider>
  <EquipementsContextProvider>
  <ChartContextProvider>
  <TechReclamationProvider>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </TechReclamationProvider>
  </ChartContextProvider>
  </EquipementsContextProvider>
  </ReclamationsContextProvider>
  </UsersContextProviders>
  </AuthContextProvider>
);
