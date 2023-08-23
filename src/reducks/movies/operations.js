import API from "../../API";
import { fetchMoviesAction } from "./action";

const api = new API() 
export const fetchMovies = params => {
    return async dispatch => {
        return api.getMovies(params).then(movies => {
            console.log(movies.results)
            dispatch(fetchMoviesAction(movies))
        })
        .catch(error =>{
            alert('Failed to connnect to API: /movies/')
        })
    }
}