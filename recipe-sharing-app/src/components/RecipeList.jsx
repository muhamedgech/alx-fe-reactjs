import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes); // Add filteredRecipes for search functionality
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);
  const favorites = useRecipeStore(state => state.favorites);
  const filterRecipes = useRecipeStore(state => state.filterRecipes); // Assuming you are filtering recipes based on a search term

  const toggleFavorite = (recipeId) => {
    if (favorites.includes(recipeId)) {
      removeFavorite(recipeId);
    } else {
      addFavorite(recipeId);
    }
  };

  useEffect(() => {
    filterRecipes();  // This will filter recipes based on the current search term.
  }, [recipes]); // Re-run filter when recipes change

  const recipesToDisplay = filteredRecipes.length > 0 ? filteredRecipes : recipes; // Display filtered recipes or all recipes if no filter

  return (
    <div>
      <h2>Recipe List</h2>
      {recipesToDisplay.length > 0 ? (
        recipesToDisplay.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <button onClick={() => toggleFavorite(recipe.id)}>
              {favorites.includes(recipe.id) ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
            {/* Add a Link to navigate to the RecipeDetails component */}
            <Link to={`/recipe/${recipe.id}`}>View Details</Link>
          </div>
        ))
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
};

export default RecipeList;
