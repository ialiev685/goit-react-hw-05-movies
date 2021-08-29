import React from "react";
import { Link, useLocation } from "react-router-dom";

export const ItemMovie = ({ id, title }) => {
  const location = useLocation();
  return (
    <li>
      <Link to={{ pathname: `/movies/${id}`, state: { from: location } }}>
        {title}
      </Link>
    </li>
  );
};
