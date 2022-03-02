import Recipe from "./Recipe";

export function MenuItem({plato, remove}) {
  return (
    <Recipe recipe={plato} remove={remove} />
  )
}