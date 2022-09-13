export const ADD_MOVIE_FAVORITE = "ADD_MOVIE_FAVORITE";
export const REMOVE_MOVIE_FAVORITE = "REMOVE_MOVIE_FAVORITE";
export const GET_MOVIE_DETAIL = "GET_MOVIE_DETAIL"
export const GET_MOVIES = "GET_MOVIES"

export function addMovieFavorite(payload) {
   return { type: ADD_MOVIE_FAVORITE, payload: payload};
}

export function removeMovieFavorite(payload) {
   return { type: REMOVE_MOVIE_FAVORITE, payload: payload};
}

export function getMovieDetail(idMovie) {
   return function(dispatch) {
      return fetch(`http://www.omdbapi.com/?apikey=f9cfa94&i=${idMovie}`)
        .then(response => response.json())
        .then(data => {
         dispatch({ type: GET_MOVIE_DETAIL, payload: data});
      });
   };
}  
  
export function getMovies(title) {
  return function(dispatch) {
    return fetch("http://www.omdbapi.com/?apikey=f9cfa94&s="+ title)
      .then(response => response.json())
      .then(json => {
       dispatch({ type: GET_MOVIES, payload: json });
    });
  };
}