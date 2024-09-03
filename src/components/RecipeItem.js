import React, { useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';

const RecipeItem = ({ recipe, id }) => {
  const { deleteRecipe } = useContext(RecipeContext);

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 mb-4">
      <h2 className="text-xl font-semibold mb-2">{recipe.name}</h2>
      <p className="text-gray-700 mb-4">{recipe.description}</p>
      <button
        onClick={() => deleteRecipe(id)}
        className="bg-rose-500 text-white font-bold py-2 px-4 rounded-md hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-600 focus:ring-opacity-75"
      >
        Borrar
      </button>
    </div>
  );
};

export default RecipeItem;
