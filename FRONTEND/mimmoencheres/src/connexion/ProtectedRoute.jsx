
import React from 'react';
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  console.log("Current user:", user);

  if (!user) {
    // user is not authenticated
    return <Navigate to="/login" replace/>;
  }
  return children ? children : <Outlet />;
};

export default ProtectedRoute;