import Swal from "sweetalert2";
import handleSearchBoxButton from "../utils/handleSearchBoxButton"

const SearchBox = ({btn}) => {

  const handleSearch = async (e) => {
    e.preventDefault();

    const searchInput = document.getElementById('search');


    const query = searchInput.value;
    if(query.length < 2) return Swal.fire("Error", "Favor ingresa dos o más letras para poder iniciar una búsqueda.", "error");

    const result = await handleSearchBoxButton(query);
    if(result.results.length == 0 || result.error) return Swal.fire("Error", "No se ha podido establecer conexión con el servidor, favor verifica tu conexión a internet", "error");
    
    btn(result.results);
  }

  return (
    <form style={{display: 'flex', gap: '25px', height: 'fit-content'}}>
      <input
        type="text"
        id="search"
        placeholder="Search a recipe"
        name="search" 
      />
      <button style={{
        padding: '5px 20px',
        fontSize: '16px',
        border: 'none',
        backgroundColor: '#09f',
        borderRadius: '5px',
        fontWeight: '600',
        color: '#fff',
        cursor: 'pointer',
        }} type="submit"
        onClick={handleSearch}
        >Search</button>
    </form>
  )
}
export default SearchBox