export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

export const addFavorite = (movie) => {
    return {type: ADD_FAVORITE, payload: movie};
}

