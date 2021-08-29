import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

import { fetchTrendingMovies } from "../../services/ApiMovies";
import { ListMovies } from "../ListMovies";

export const HomePage = () => {
  const [trendMovies, setTrendMovies] = useState(null);

  useEffect(() => {
    fetchTrendingMovies().then((response) => setTrendMovies(response.results));
  }, []);

  return (
    <div>
      <h1>Trending today</h1>

      {trendMovies && <ListMovies listMovies={trendMovies} />}
    </div>
  );
};
