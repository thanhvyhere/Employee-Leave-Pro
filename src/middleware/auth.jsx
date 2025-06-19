// AuthRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const isTokenValid = (token) => {
  try {
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    return decoded.exp ? decoded.exp > currentTime : true;
  } catch {
    return false;
  }
};

export const AuthRoute = ({ children, requiredRole }) => {
  const token = localStorage.getItem("token");

  if (!token || !isTokenValid(token)) {
    return <Navigate to="/login" />;
  }

  try {
    const decoded = jwtDecode(token);

    if (requiredRole && decoded.role !== requiredRole) {
      return <Navigate to="/unauthorized" />;
    }

    return children;
  } catch (err) {
    console.error("Token decode error:", err);
    return <Navigate to="/login" />;
  }
};
