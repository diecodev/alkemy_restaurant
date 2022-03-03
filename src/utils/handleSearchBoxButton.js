import axios from 'axios';

const handleSearchBoxButton = (query) => {
    return axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${query}&number=3&addRecipeInformation=true`)
.then(response => response.data)
.catch(error => error.response.data)
}
export default handleSearchBoxButton