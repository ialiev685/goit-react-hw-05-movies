import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import API from "../../services";

export const HomePage = () => {
  const [listFilms, setListFilms] = useState(null);

  useEffect(() => {
    API().then((response) => setListFilms(response.results));
  }, []);

  return (
    <div>
      <h1>Trending today</h1>

      {listFilms && (
        <ul>
          {listFilms.map((el) => {
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
