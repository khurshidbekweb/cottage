import axios from "axios"

export const coustumAxios = {
    auth: data => axios.post('https://fakestoreapi.com/auth/login', data)
} 