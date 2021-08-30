import React from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

export const ItemMovie = ({ id, title }) => {
  const location = useLocation();
  return (
    <li className="item-movie">
      <Link to={{ pathname: `/movies/${id}`, state: { from: location } }}>
        {title}
      </Link>
    </li>
  );
};

ItemMovie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
