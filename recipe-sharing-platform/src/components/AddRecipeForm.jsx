import React, { useState } from "react";

const AddRecipeForm = () => {
  // State to manage form inputs and validation
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparationSteps, setPreparationSteps] = useState("");
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Front-end validation
    const newErrors = {};

    if (!title) newErrors.title = "Title is required";
    if (!ingredients) newErrors.ingredients = "Ingredients are required";
    if (!preparationSteps) newErrors.preparationSteps = "Preparation steps are required";
    if (ingredients.split(",").length < 2) newErrors.ingredients = "Ingredients should contain at least two items";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // If validation passes, submit the data (You can replace this with your API submission logic)
    console.log({ title, ingredients, preparationSteps });

    // Reset form and show success message
    setTitle("");
    setIngredients("");
    setPreparationSteps("");
    setSuccessMessage("Recipe submitted successfully!");
    setErrors({});
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">Add a New Recipe</h2>

      {successMessage && (
        <div className="bg-green-100 text-green-800 p-3 mb-4 rounded-md text-center">
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Recipe Title */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Recipe Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter recipe title"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">
            Ingredients (separate by commas)
          </label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows="4"
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter ingredients, separated by commas"
          />
          {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
        </div>

        {/* Preparation Steps */}
        <div className="mb-4">
          <label htmlFor="preparationSteps" className="block text-sm font-medium text-gray-700">
            Preparation Steps
          </label>
          <textarea
            id="preparationSteps"
            value={preparationSteps}
            onChange={(e) => setPreparationSteps(e.target.value)}
            rows="6"
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter preparation steps"
          />
          {errors.preparationSteps && <p className="text-red-500 text-sm">{errors.preparationSteps}</p>}
        </div>

        {/* Submit Button */}
        <div className="mb-4 text-center">
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;
