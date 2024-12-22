import React , { useState , useEffect } from 'react'
import { Search } from 'lucide-react'
import RecipeCard from '../components/RecipeCard';
import { useParams } from 'react-router-dom';


const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const { mealid } = useParams();
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getInfo = async () => {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
        const jsonData = await response.json();
        
        if (jsonData.meals) {
          setInfo(jsonData.meals[0]);
        } else {
          setError('Data not found');
        }
      } catch (err) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    getInfo();
  }, [mealid]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="bg-[#faf9fb] p-10 flex-1">
      <div className='max-w-screen-lg mx-auto'>
        <form>
          <label className='input shadow-md flex items-center'>
            <Search size={24} className='border rounded-full ml-5' />
            <input 
              type="text" 
              className="text-sm md:text-md grow p-4" 
              placeholder="What you want to cook today..." 
              onChange={(e) => fetchRecipes(e.target.value)} 
            />    
          </label>
        </form>

        <p className='font-bold text-3xl md:text-5xl mt-4'>Recommended Recipes</p>
        <p className='text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight'>Popular Choices</p>

        <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {/* {!loading &&
            recipes.map(({ recipe }, index) => (
              <RecipeCard key={index} recipe={recipe} {...getRandomColor()} />
            ))}

          {loading &&
            [...Array(9)].map((_, index) => (
              <div key={index} className='flex flex-col gap-4 w-full'>
                <div className='skeleton h-32 w-full'></div>
                <div className='flex justify-between'>
                  <div className='skeleton h-4 w-28'></div>
                  <div className='skeleton h-4 w-24'></div>
                </div>
                <div className='skeleton h-4 w-1/2'></div>
              </div>
            ))} */}
      {!info ? (
        <div>Data not found</div>
      ) : (
        <div>
          <img src={info.strMealThumb} alt={info.strMeal} />
          <h1>Recipe Details</h1>
          <button>{info.strMeal}</button>
          <h3>Instructions</h3>
          <p>{info.strInstructions}</p>
        </div>
      )}

        </div>
      </div>
    </div>
  );
};

export default HomePage;
