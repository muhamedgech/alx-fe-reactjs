import React from 'react';
import { Navigate } from 'react-router-dom';  // Import Navigate for redirection
import { useAuth } from '../context/AuthContext';  // Import the useAuth hook

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();  // Get authentication state from context

  if (!isAuthenticated) {
    return <Navigate to="/" />;  // Redirect to home page if not authenticated
  }

  return children;  // If authenticated, render the protected content (children)
}

export default ProtectedRoute;
