import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],  // Store for all recipes
  favorites: [],  // Store for user's favorite recipes
  recommendations: [],  // Store for personalized recommendations

  // Add a recipe to favorites
  addFavorite: (recipeId) => set(state => {
    if (!state.favorites.includes(recipeId)) {
      return { favorites: [...state.favorites, recipeId] };
    }
  }),

  // Remove a recipe from favorites
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),

  // Generate personalized recommendations (this is a basic version)
  generateRecommendations: () => set(state => {
    // Simple mock implementation where recommendations are based on favorites
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5  // Mock logic
    );
    return { recommendations: recommended };
  }),
}));

export { useRecipeStore };
