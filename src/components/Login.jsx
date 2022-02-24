import "./styles/login.css";
import Swal from "sweetalert2";
import handleFormSubmit from "../utils/handleFormSubmit";
import { useContext } from "react";
import {Context as tokenContext} from "../App"

const Login = () => {
  document.title="Alkemy Restaurant - Login"

  const {setToken} = useContext(tokenContext);
  
  const handleSubmit = async (e) =>{
    e.preventDefault();
    const button = document.querySelector("#formBtn");
    button.disabled = true;

    Swal.fire({
      titleText: "Estamos procesando tu solicitud, por favor espera. 😀",
      showConfirmButton: false,
      allowEnterKey: false,
      allowOutsideClick: false,
      allowEscapeKey: false,
    });

    // petición a la API
    const result = await handleFormSubmit();
    
    // lógica para mostrar la alerta.
    if(result.token) {
      Swal.close();
      window.localStorage.setItem("token", result.token);
      setToken(result.token)
    }
    if(result.error) {
      Swal.fire({
        title: "Error",
        titleText: result.error,
        icon: "error",
        allowOutsideClick: ()=> !Swal.isLoading(),
        allowEnterKey: ()=> !Swal.isLoading(),
      });
      button.disabled = false;
    }
  }

  return (
    <div className="formWrapper">
      <form className="form" onSubmit={ handleSubmit }>
        <legend>🥗 Por favor inicia sesión para continuar 🍖</legend>
        <input required autoComplete="off" type="email" name="email" id="formEmail" placeholder="Email" />
        <input required type="password" name="password" id="formPassword" placeholder="Password" />
        <button id="formBtn" className="formBtn" type="submit">Enviar</button>
      </form>
    </div>
  )
}
export default Login