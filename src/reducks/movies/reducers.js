import initialState from "../store/initialState"
import * as Actions from "./action"

export const moviesReducer =(state=initialState.movies, action) => {
    switch(action.type) {
        case Actions.FETCH_MOVIES:
            return {
                ...state,
                results: action.payload.movies,
            }
        default:
            return state;
    }
}