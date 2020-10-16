import React, { useEffect, useState } from 'react';
import Recipe from './components/Recipe';
import './App.css';

function App() {

    const APP_ID = "e749499f";
    const APP_KEY = "2326ce39061883f8bb80ae91e53fdb8b";

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState('chicken');
    
    useEffect( () => {
      const getRecipe = async () => {
        await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        .then(response => response.json())
        .then((data) => {
          setRecipes(data.hits);
        });
      }
      
      getRecipe();
    }, [query]);
    console.log(recipes);

    const getSearch = (e) => {
      e.preventDefault();
      setQuery(search);
      setSearch('');
    }
    const updateSearch = (e) => {
      setSearch(e.target.value);
    }
    return (
        <div className="App">
          <form onSubmit={getSearch} className="searchForm">
            <input type="text" className="searchBar" value={search} onChange={updateSearch} />
            <button type="submit" className="searchBtn">Search</button>
          </form>

          <div className="detail">
            {recipes.map((recipe) => (
              <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories}
              image={recipe.recipe.image} ingredients={recipe.recipe.ingredients} />
            ) )}
          </div>
        </div>
    );
}

export default App;
