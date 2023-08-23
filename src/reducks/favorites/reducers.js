import initialState from "../store/initialState"
import * as Actions from "./action"

export const favoritesReducer =(state=initialState.favorites, action) => {
    switch(action.type) {
        case Actions.ADD_FAVORITES:
            return {
                ...state,
                list: action.payload,
            }
        case Actions.FETCH_FAVORITES:
            return {
                ...state,
                list : action.payload
            }
        case Actions.DELETE_FAVORITES:
            return {
                ...state,
                list : action.payload
            }
        default:
            return state;
    }
}