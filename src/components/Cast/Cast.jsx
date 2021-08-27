import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCast } from "../../services";

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    fetchCast(movieId).then((response) => setCast(response.cast));
  }, [movieId]);
  return (
    <div>
      <ul>
        {cast &&
          cast.map(({ cast_id, character, name, profile_path }) => (
            <li key={cast_id}>
              <img
                src={
                  profile_path &&
                  `https://image.tmdb.org/t/p/w200/${profile_path}`
                }
                alt={name}
              />
              <p>{name}</p>
              <p>character: {character}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};
