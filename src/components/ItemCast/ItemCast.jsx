import React from "react";
import PropTypes from "prop-types";

export const ItemCast = ({ character, name, profile }) => {
  return (
    <li>
      <img
        src={profile && `https://image.tmdb.org/t/p/w200/${profile}`}
        alt={name}
      />
      <p>{name}</p>
      <p>character: {character}</p>
    </li>
  );
};

ItemCast.propTypes = {
  character: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  profile: PropTypes.string,
};
