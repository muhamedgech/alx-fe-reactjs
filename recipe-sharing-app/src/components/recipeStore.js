import {create} from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  
  // Action to update search term
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Action to filter recipes based on the search term
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) || 
      recipe.description.toLowerCase().includes(state.searchTerm.toLowerCase())  // Add description search if needed
    ),
  })),

  // Initialize recipes (can be called when recipes are fetched or added)
  setRecipes: (recipes) => set({ recipes }),

}));
