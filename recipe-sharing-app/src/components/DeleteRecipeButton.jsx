// src/components/DeleteRecipeButton.jsx
import React from 'react';
import { useRecipeStore } from '../store/recipeStore';
import { useNavigate } from 'react-router-dom';  // Import useNavigate from react-router-dom

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const navigate = useNavigate();  // Initialize the navigate function

  const handleDelete = () => {
    deleteRecipe(recipeId);  // Delete the recipe from the store
    navigate('/');  // Redirect to the homepage (or recipe list, for example)
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
};

export default DeleteRecipeButton;
