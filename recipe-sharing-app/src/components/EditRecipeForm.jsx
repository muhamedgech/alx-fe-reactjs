// src/components/EditRecipeForm.jsx
import React, { useState, useEffect } from 'react';
import { useRecipeStore } from '../store/recipeStore';
import { useNavigate, useParams } from 'react-router-dom';

const EditRecipeForm = () => {
  const { recipeId } = useParams();  // Get the recipeId from the URL parameters
  const recipe = useRecipeStore(state => state.recipes.find(recipe => recipe.id === recipeId));  // Find the recipe from the store
  const updateRecipe = useRecipeStore(state => state.updateRecipe);  // Update recipe method from Zustand store
  const [title, setTitle] = useState('');  // State for title input
  const [description, setDescription] = useState('');  // State for description input
  const navigate = useNavigate();  // To navigate after the form submission

  // When the recipe changes, update the state with the current recipe values
  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description);
    }
  }, [recipe]);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();  // Prevent default form submission
    if (recipe) {
      updateRecipe({ id: recipe.id, title, description });  // Update the recipe with new data
      navigate(`/recipe/${recipe.id}`);  // Redirect to the recipe details page after update
    }
  };

  // Show a loading state or error message if the recipe doesn't exist
  if (!recipe) return <div>Recipe not found</div>;

  return (
    <div>
      <h2>Edit Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}  // Update state when input changes
            placeholder="Recipe Title"
            required  // Make the title input required
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}  // Update state when textarea changes
            placeholder="Recipe Description"
            required  // Make the description input required
          />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditRecipeForm;
