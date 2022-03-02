import { createContext } from "react"
import Hero from "./components/Hero";
import Login from "./components/Login";
import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import SpecificRecipe from "./components/SpecificRecipe";
import NotFound from "./components/NotFound";

export const Context = createContext({
  token: "no token yet.",
})

export const PlatosContext = createContext({})

function App() {
  const [token, setToken] = useState("");
  const [platos, setPlatos] = useState(false)

  useEffect(() => {
    if(window.localStorage.getItem("token")) setToken(window.localStorage.getItem("token"));
    if(window.localStorage.getItem("menu")) setPlatos(window.localStorage.getItem("menu"));
  }, [])
  

  return (
    <Context.Provider value={{
      token,
      setToken,
    }} >
      <PlatosContext.Provider value={{
        platos,
        setPlatos
      }}>
        <Routes>
          <Route path="/" element={ window.localStorage.getItem("token") ? <Hero/> : <Login /> } />
          <Route path="recipe/:recipeId" element={ window.localStorage.getItem("token") ? <SpecificRecipe /> : <Navigate to="/" /> } />
          <Route path="*" element={ <NotFound /> } />
        </Routes>
      </PlatosContext.Provider>
    </Context.Provider>
  );
}

export default App;
