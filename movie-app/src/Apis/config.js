import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: `https://api.themoviedb.org/3`,
    params: {
        api_key: process.env.REACT_APP_Base_URL,
        page:'1',
        language:'en'
    }
})



