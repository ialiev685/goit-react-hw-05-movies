import React from "react";

const KEY = "84329a5e6f042ddf8ad0e4967f6ce51f";

const fetchTrendingMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}&page=1`
  ).then((response) => response.json());
};

const fetchMovieId = (movieId) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${KEY}&language=en-US`
  ).then((response) => response.json());
};

export { fetchMovieId, fetchTrendingMovies };
