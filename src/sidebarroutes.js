import React from "react";
import Dashboard from "views/admin/default";
import Profile from "views/admin/profile";
import Equipement from "views/admin/equipement";

// Auth Imports

// Icon Imports
import {
  MdEscalator,
  MdHome,
  MdPerson,
  MdEventAvailable,
 
  MdHistory,
  MdMap
  
} from "react-icons/md";
import Calandar from "views/admin/calandar";
import { IoMdAlert } from "react-icons/io";
import ManageReclamation from "views/admin/Reclamation";
import History from "views/admin/History";
import MapComponent from "views/admin/Map/Map";

const routes = [

  {
    name: "Acceuil",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <Dashboard />,
    allowedRoles: ['COORDINATRICE'] // Liste des rôles autorisés pour accéder à cette route

  },
  {
    name: "Map",
    layout: "/admin",
    path: "map",
    icon: <MdMap className="h-6 w-6" />,
    component: <MapComponent />,
    allowedRoles: ['COORDINATRICE'] // Liste des rôles autorisés pour accéder à cette route
  },

  
  {
    name: "calendrier",
    layout: "/admin",
    path: "calendrier",
    icon: <MdEventAvailable  className="h-6 w-6" />,
    component:< Calandar/>,
    allowedRoles: ['COORDINATRICE'] // Liste des rôles autorisés pour accéder à cette route

  },

  
  {
    name: "Reclamations",
    layout: "/admin",
    path: "reclamations",
    icon: <IoMdAlert className="h-6 w-6" />,
    component: <ManageReclamation />,
    allowedRoles: ['COORDINATRICE'] // Liste des rôles autorisés pour accéder à cette route

  },
 {
    name: "Equipement",
    layout: "/admin",
    path: "equipement",
    icon: <MdEscalator className="h-6 w-6" />,
    component: <Equipement/>,
    allowedRoles: ['COORDINATRICE'] // Liste des rôles autorisés pour accéder à cette route

  },
  {
    name: "history",
    layout: "/admin",
    path: "history",
    icon: <MdHistory className="h-6 w-6" />,
    component: <History/>,
    allowedRoles: ['COORDINATRICE'] // Liste des rôles autorisés pour accéder à cette route

  },
  {
    name: "Profile",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
    allowedRoles: ['COORDINATRICE'] // Liste des rôles autorisés pour accéder à cette route

  },
];
export default routes;


  /*
  {
    name: "help",
    layout: "/admin",
    path: "help",
    icon: <MdHelp className="h-6 w-6" />,
    component: <ContactUS/>,
    allowedRoles: ['COORDINATRICE'] // Liste des rôles autorisés pour accéder à cette route

  },
  
  {
    name: "Utilisateurs",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "utilisateurs",
    component: <DataTables />,
    allowedRoles: ['COORDINATRICE'] // Liste des rôles autorisés pour accéder à cette route

  },
  {
    name: "ajouter utilisateur",
    layout: "/admin",
    path: "add",
    icon: <MdHelp className="h-6 w-6" />,
    component: <UserForm/>,
    allowedRoles: ['COORDINATRICE'] // Liste des rôles autorisés pour accéder à cette route

  }
    {
    name: "sign up",
    layout: "/auth",
    path: "sign-up",
    icon: <MdLogout className="h-6 w-6" />,
    component: <SignUp />,
    allowedRoles: ['COORDINATRICE'] // Liste des rôles autorisés pour accéder à cette route

  },
  {
    name: "Log out",
    layout: "/auth",
    path: "sign-in",
    icon: <MdLogout className="h-6 w-6" />,
    component: <SignIn />,
    allowedRoles: ['COORDINATRICE'] // Liste des rôles autorisés pour accéder à cette route

  },
  
  */