import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
import NotFound from './components/NotFound';
import ProtectedRoute from './components/ProtectedRoute';
import UserProfile from './components/UserProfile';  // Import the new UserProfile component

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home />} />

        {/* Protected Route for Profile */}
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>}>
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>

        {/* Dynamic Route for User Profiles */}
        <Route path="/blog/:id" element={<UserProfile />} />  {/* Dynamic user profile route */}

        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
