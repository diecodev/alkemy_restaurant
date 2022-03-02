import axios from "axios";


function handleFormSubmit() {
    const email = document.querySelector("#formEmail").value;
    const password = document.querySelector("#formPassword").value;
    const values = email.trim() !== "" && password!=="";


    if (!values) return new Error("Por favor diligenciar los campos correctamente");

    return axios({
        url: "http://challenge-react.alkemy.org/",
        method: "POST",
        data: {
            email,
            password
        }
    })
    .then(response => response.data)
    .catch(error => error.response.data)
}
export default handleFormSubmit