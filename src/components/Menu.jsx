import { useContext } from "react"
import { MenuItem } from "./MenuItem"
import { PlatosContext } from "../App"
import NoArticlesMenu from "./NoArticlesMenu";

export default function Menu() {
  const { platos } = useContext(PlatosContext);

  if(platos){
    return (
      <>
        {platos.map((p, i) => <MenuItem key={i} plato={p} />)}
      </>
    )
  }
  if(!platos){
    return (
      <NoArticlesMenu />
    )
  }
}