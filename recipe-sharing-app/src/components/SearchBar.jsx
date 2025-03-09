// src/components/SearchBar.js
import React from 'react';
import { useRecipeStore } from '../store/recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);  // Update search term in state
    filterRecipes();  // Trigger filtering based on the updated search term
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search recipes..."
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
