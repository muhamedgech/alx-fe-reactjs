// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import RecipeDetails from './components/RecipeDetails'; // Assumes this is already implemented
import AddRecipeForm from './components/AddRecipeForm'; // Import the AddRecipeForm

const App = () => {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing Application</h1>

        {/* Main Navigation */}
        <nav>
          <Link to="/">Home</Link>
          <Link to="/favorites">My Favorites</Link>
          <Link to="/recommendations">Recommendations</Link>
          <Link to="/add-recipe">Add Recipe</Link> {/* Link to Add Recipe Form */}
        </nav>

        {/* Routing */}
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/favorites" element={<FavoritesList />} />
          <Route path="/recommendations" element={<RecommendationsList />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/add-recipe" element={<AddRecipeForm />} /> {/* Route for Add Recipe Form */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
