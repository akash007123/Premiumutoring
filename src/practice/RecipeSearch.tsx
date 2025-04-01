import { useState, useEffect } from 'react';
import axios from 'axios';

interface Recipe {
  id: number;
  title: string;
  image: string;
}

const RecipeSearch = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const appKey = '04c829daacf7449d867e906796df7191';

  useEffect(() => {
    if (!query) return;

    const fetchRecipes = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get('https://api.spoonacular.com/recipes/complexSearch', {
          params: {
            query,
            apiKey: appKey,
            number: 12, // Fetch more recipes for grid layout
          },
        });

        setRecipes(response.data.results);
      } catch (err) {
        console.error('Error fetching recipes:', err);
        setError('Failed to fetch recipes.');
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [query]);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full">
          <h1 className="text-3xl font-semibold text-center mb-6">Search Recipes</h1>
          
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6"
            placeholder="Enter ingredients (e.g., chicken, tomato)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          {loading && <p className="text-center text-gray-500">Loading...</p>}
          {error && <p className="text-center text-red-500">{error}</p>}

          {recipes.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {recipes.map((recipe) => (
                <div key={recipe.id} className="border border-gray-300 rounded-lg overflow-hidden shadow-md bg-white">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="font-semibold text-xl mb-2">{recipe.title}</h2>
                    <a
                      href={`https://spoonacular.com/recipes/${recipe.title}-${recipe.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      View Recipe
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default RecipeSearch;
