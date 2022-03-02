import { useContext } from "react"
import { MenuItem } from "./MenuItem"
import { PlatosContext } from "../App"
import "./styles/recipes.css"

export default function Menu() {
  const { platos } = useContext(PlatosContext);

  if(platos.length == 0 || !platos){
    return (
      <div style={{color: "grey"}}><i>No hay items agregados al menú...</i></div>
    )
  }

  if(platos){
    return (
      <div className="menuItemsCtn">
        {platos.map(p => <MenuItem key={p.id} plato={p} remove={true} />)}
      </div>
    )
  }
}