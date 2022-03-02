import axios from "axios";

export function getRandomRecipes() {
    return axios({
        url: `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=50&tags=paleo`,
        method: "GET",
    }).then(response => JSON.stringify({recipes: response.data.recipes})).catch(error => JSON.stringify({error: error.response.data}))
}