import React from 'react';
import { RecipeProvider } from './context/RecipeContext';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';

function App() {
  return (
    <RecipeProvider>
      <div className="flex min-h-screen bg-indigo-300">
        <aside className="w-64 bg-cyan-500 text-white min-h-screen p-6">
          <h2 className="text-xl font-bold mb-6">Menú</h2>
          <nav>
            <ul>
              <li className="mb-4">
                <a
                  href="#recipes-list"
                  className="text-white hover:text-violet-300"
                >
                  Ir a la Lista de Recetas
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        <main className="flex-1 flex items-center justify-center p-6">
          <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
            <h1 className="text-3xl font-bold mb-6 text-indigo-350">Recetas de cocina</h1>
            <AddRecipeForm />
            <div id="recipes-list">
              <RecipeList />
            </div>
          </div>
        </main>
      </div>
    </RecipeProvider>
  );
}

export default App;
