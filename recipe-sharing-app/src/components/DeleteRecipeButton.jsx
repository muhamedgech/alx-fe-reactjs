// DeleteRecipeButton.jsx
import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleDelete = () => {
    deleteRecipe(recipeId); // Delete the recipe from the Zustand store
    navigate('/'); // Redirect to the homepage (or recipe list) after deletion
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
};

export default DeleteRecipeButton;
