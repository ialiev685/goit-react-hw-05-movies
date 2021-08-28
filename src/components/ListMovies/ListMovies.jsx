import React from "react";
import { Link } from "react-router-dom";

export const ListMovies = ({ listMovies }) => {
  return (
    <ul>
      {listMovies.map((el) => {
        return (
          <li key={el.id}>
            <Link to={`/movies/${el.id}`}>{el.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};
