import React, { useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';
import RecipeItem from './RecipeItem';

const RecipeList = () => {
  const { recipes } = useContext(RecipeContext);

  return (
    <div className="p-4">
      {recipes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe, index) => (
            <RecipeItem key={index} id={index} recipe={recipe} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">No hay recetas disponibles. Agregá algunas!</p>
      )}
    </div>
  );
};

export default RecipeList;
