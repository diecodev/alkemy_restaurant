import "./styles/recipes.css"
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext } from "react";
import { PlatosContext } from "../App";

export default function Recipe({recipe, remove=false}) {
  const {platos, setPlatos} = useContext(PlatosContext);
  const { id, image, vegetarian, title, diets} = recipe;

  const handleRemoveFromMenu = (e) =>{
    e.preventDefault();
    setPlatos(platos.filter(plato => plato.id !== id));
  }

  const handleAddToMenu = (e)=>{
    e.preventDefault();
    if (!platos){
      setPlatos([{id, image, vegetarian, title, diets}]);
      return;
    }

    const repetido = !!platos.find((plato) => plato.id === id)

    if(repetido){
      Swal.fire("Error", "Este plato ya está en el menú", "error");
      return;
    }
    
    if (vegetarian){
      const platosVegetarianos = platos.filter(plato => !!plato.vegetarian)
      platosVegetarianos.length < 2 
      ? setPlatos([...platos, {id, image, vegetarian, title, diets}])
      : Swal.fire("Error!", "No puede añadir más platos vegetarianos", "error");
      return;
    }

    if (!vegetarian){
      const platosNoVegetarianos = platos.filter(plato => !plato.vegetarian)
      platosNoVegetarianos.length < 2 
      ? setPlatos([...platos, {id, image, vegetarian, title, diets}])
      : Swal.fire("Error!", "No puede añadir más platos NO vegetarianos", "error");
      return;
    }
  }

  return (
    <div className="recipeItem">
      <img src={image} alt={title} />
      <Link className="anchor" to={`/recipe/${id}`}>
        <h3>{title}</h3>
      </Link>
      <div>
        <h4 className="features">Características: </h4>
        {diets.map(feature => <span key={feature} className="feature">{feature}</span>)}
      </div>
      {!remove && <button onClick={handleAddToMenu} className="addToMenuBtn">Añadir al menú</button>}
      {remove && <button style={{backgroundColor: 'rgba(255, 0,0)'}} onClick={handleRemoveFromMenu} className="addToMenuBtn">Eliminar del menú</button>}
    </div>
  )
}