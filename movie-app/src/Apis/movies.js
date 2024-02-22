import { axiosInstance } from "./config"

export const getMoviesList = (page ,language) => {
    return axiosInstance.get('/movie/popular',{ params: {page, language} });
}
export const getMovieDetails = (id,language) => {
    return axiosInstance.get(`/movie/${id}`,{ params: { language} });
}


