import React from 'react';
import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

export const AuthManager = function AuthManager({ children }) {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/login" />;
  }

  try {
    const decoded = jwtDecode(token);

    // Kiểm tra role phải là "manager"
    if (decoded.role !== 'manager') {
      return <Navigate to="/unauthorized" />;
    }

    return children;
  } catch (err) {
    console.error('Invalid token', err);
    return <Navigate to="/login" />;
  }
}

export const AuthEmployee = function AuthEmployee({ children }) {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/login" />;
  }

  try {
    const decoded = jwtDecode(token);

    // Kiểm tra role phải là "employee"
    if (decoded.role !== 'employee') {
      return <Navigate to="/unauthorized" />;
    }

    return children;
  } catch (err) {
    console.error('Invalid token', err);
    return <Navigate to="/login" />;
  }
}
