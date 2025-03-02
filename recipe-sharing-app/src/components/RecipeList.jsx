import React, { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
  const recipes = useRecipeStore(state => state.recipes);

  useEffect(() => {
    // Initially filter recipes if there's a search term
    if (filteredRecipes.length === 0) {
      // If no search term, show all recipes
      useRecipeStore.getState().filterRecipes();
    }
  }, [filteredRecipes]);

  return (
    <div>
      <h2>Recipe List</h2>
      <div>
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map(recipe => (
            <div key={recipe.id}>
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
            </div>
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </div>
    </div>
  );
};

export default RecipeList;
