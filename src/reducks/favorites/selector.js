import { createSelector } from "reselect";


const favoritesSelector = state => state.favorites;


export const getFavorites = createSelector([favoritesSelector], state => state);