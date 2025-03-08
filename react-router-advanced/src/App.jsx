import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
import NotFound from './components/NotFound';
import BlogPost from './components/BlogPost';
import UserProfile from './components/UserProfile';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';  // Import AuthProvider

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<Home />} />

          {/* Protected Route for Profile */}
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>}>
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>

          {/* Dynamic Route for User Profile */}
          <Route path="/user/:id" element={<UserProfile />} />

          {/* Dynamic Route for Blog Post */}
          <Route path="/blog/:id" element={<BlogPost />} />

          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
