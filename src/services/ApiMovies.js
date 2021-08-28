const KEY = "84329a5e6f042ddf8ad0e4967f6ce51f";

const fetchTrendingMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}`
  ).then((response) => response.json());
};

const fetchMovieId = (movieId) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${KEY}&language=en-US`
  ).then((response) => response.json());
};

const fetchCast = (movieId) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${KEY}&language=en-US`
  ).then((response) => response.json());
};

const fetchReviews = (movieId) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`
  ).then((response) => response.json());
};

const fetchSearchMovie = (serachQuery) => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&query=${serachQuery}&page=1&include_adult=false`
  ).then((response) => response.json());
};

export {
  fetchMovieId,
  fetchTrendingMovies,
  fetchCast,
  fetchReviews,
  fetchSearchMovie,
};
