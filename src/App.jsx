import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "views/auth/hooks/useAuthContext";
import AdminLayout from "layouts/admin";
import TechLayout from "layouts/technicien";
import ClientLayout from "layouts/client";
import HelpdeskLayout from "layouts/help-desk";
import NoAccess from "layouts/noaccess";
import Page404 from "layouts/page404";
import AuthLayout from "layouts/auth";
import ControllerLayout from "layouts/Controller"
import { io } from "socket.io-client";
const App = () => {
  const { user } = useAuthContext();

  const { state } = useAuthContext();
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    setSocket(io('http://localhost:5000'));
  },[])
  useEffect(() => {
    socket?.emit("newUser",user);
  },[socket,user])
  return (
    <Routes>
     
     <Route path="auth/*" element={!user ? <AuthLayout /> : <Navigate to="/noacces" />} />
     <Route path="client/*" element={user  && user.role ==='CLIENT'? <ClientLayout socket={socket} /> : <Navigate to="/auth/sign-in" />} />
      <Route path="helpdesk/*" element={user && user.role ==='HELPDESK' ? <HelpdeskLayout socket={socket} /> : <Navigate to="/auth/sign-in" />} />
      <Route path="tech/*" element={user && user.role ==='TECHNICIEN'? <TechLayout socket={socket} /> : <Navigate to="/auth/sign-in" />} />
      <Route path="manager/*" element={user && user.role ==='ADMIN'? <ControllerLayout socket={socket} /> : <Navigate to="/auth/sign-in" />} />
      <Route path="admin/*" element={user && user.role ==='COORDINATRICE'? <AdminLayout socket={socket} /> : <Navigate to="/auth/sign-in" />} />
      <Route path="/" element={<Navigate to="/auth/sign-in" replace />} />
      <Route path="*" element={<Page404 />} />
      <Route path="/noacces" element={<NoAccess />} />
    </Routes>
  );
};
export default App;
