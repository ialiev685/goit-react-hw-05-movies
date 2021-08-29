import React from "react";
import { Link, useLocation } from "react-router-dom";

export const ListMovies = ({ listMovies }) => {
  const location = useLocation();
  console.log("list", location);
  return (
    <ul>
      {listMovies.map((el) => {
        return (
          <li key={el.id}>
            {/* <Link to={`/movies/${el.id}`}>{el.title}</Link> */}
            <Link
              to={{ pathname: `/movies/${el.id}`, state: { from: location } }}
            >
              {el.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
