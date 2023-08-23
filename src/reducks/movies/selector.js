import { createSelector } from 'reselect';

const movieSelector = state => state;


export const getMovies = createSelector([movieSelector], state => state)