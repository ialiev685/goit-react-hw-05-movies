import React from "react";

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
