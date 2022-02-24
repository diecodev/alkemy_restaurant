import Menu from "./Menu"
import "./styles/hero.css"

export default function Hero() {
  document.title="Alkemy Restaurant - Home"
  
  return (
    <main>
      <div className="menuCtn">
        <h2>Menú seleccionado 🍲:</h2>
        <Menu />
      </div>
    </main>
  )

}