import React from "react";

import { ItemMovie } from "../ItemMovie";

export const ListMovies = ({ listMovies }) => {
  return (
    <ul className="list-movies">
      {listMovies.map((el) => (
        <ItemMovie key={el.id} id={el.id} title={el.title} />
      ))}
    </ul>
  );
};
