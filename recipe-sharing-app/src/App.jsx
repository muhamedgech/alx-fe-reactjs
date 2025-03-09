// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import RecipeDetails from './components/RecipeDetails'; // Assumes this is already implemented

const App = () => {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing Application</h1>

        {/* Main Navigation */}
        <nav>
          <a href="/">Home</a>
          <a href="/favorites">My Favorites</a>
          <a href="/recommendations">Recommendations</a>
        </nav>

        {/* Routing */}
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/favorites" element={<FavoritesList />} />
          <Route path="/recommendations" element={<RecommendationsList />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
