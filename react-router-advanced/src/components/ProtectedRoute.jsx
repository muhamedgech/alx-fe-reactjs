import React from 'react';
import { Redirect } from 'react-router-dom';  // Import Redirect to navigate
import { useAuth } from '../context/AuthContext';  // Import the useAuth hook

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();  // Get authentication state from the context

  if (!isAuthenticated) {
    return <Redirect to="/" />;  // Redirect to the home page (or login page) if not authenticated
  }

  return children;  // If authenticated, render the protected content (children)
}

export default ProtectedRoute;
