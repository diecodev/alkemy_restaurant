import Menu from "./Menu";
import "./styles/hero.css";
import "./styles/recipes.css"
import Swal from "sweetalert2";
import Spinner from "./Spinner";
import { useEffect, useState } from "react";
import {getRandomRecipes} from "../utils/getRandomRecipes";
import Recipe from "./Recipe";

export default function Hero() {
  document.title="Alkemy Restaurant - Home"
  
  // States to handle the spinner and recipes
  const [isLoading, setIsLoading] = useState(true);
  const [recipes, setRecipes] = useState([]);

  // taking the recipes data
  useEffect(() => {

    async function randomRecipes(){
      const allRecipes = await getRandomRecipes();
      const response = JSON.parse(allRecipes);
      if (response.recipes){
        setIsLoading(false);
        setRecipes(response.recipes);
      }
      if(response.error){
        setIsLoading(false);
        Swal.fire("Error", response.error.message,"error");
      }
    }

    randomRecipes();
  }, [])
  

  return (
    <main>
      <header>
        <h1>Alkemy Restaurant Menu</h1>
      </header>
      <div className="menuCtn">
        <h2>Menú seleccionado 📃:</h2>
        <Menu />
      </div>
      <section>
        {
          isLoading
          ? <div className="spinner"><Spinner /></div>
          : <>
              <h2>Platos del día 🍝:</h2>
              <div className="recipesCtn">
                { recipes.map((recipe)=> <Recipe recipe={recipe} add={true} remove={false} key={recipe.id} />)}
              </div>
            </>
        }
      </section>
    </main>
  )

}