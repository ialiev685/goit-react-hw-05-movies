import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { fetchTrendingMovies } from "../../services/ApiMovies";

export const HomePage = () => {
  const [listMovies, setListMovies] = useState(null);

  useEffect(() => {
    fetchTrendingMovies().then((response) => setListMovies(response.results));
  }, []);

  // console.log(useRouteMatch());

  return (
    <div>
      <h1>Trending today</h1>

      {listMovies && (
        <ul>
          {listMovies.map((el) => {
            return (
              <li key={el.id}>
                <Link to={`/movies/${el.id}`}>{el.title}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
