import React from "react";

import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute() {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  const user = useSelector((state) => state.auth.user);
  console.log(user)

  if (isAuthenticated) {
    return <Outlet />;
  } else {
    return <Navigate to="/" replace />;
  }
}

export default ProtectedRoute;
