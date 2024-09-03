import React, { useState, useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';

const AddRecipeForm = () => {
  const { addRecipe } = useContext(RecipeContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe({ name, description });
    setName('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Agrega una nueva receta</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Nombre de la receta
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
          Instrucciones para cocinar
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          rows="4"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
            }
          }}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-violet-400 text-white font-bold py-2 px-4 rounded-md hover:violet-500 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-opacity-75"
      >
        Agregar a la lista
      </button>
    </form>
  );
};

export default AddRecipeForm;
