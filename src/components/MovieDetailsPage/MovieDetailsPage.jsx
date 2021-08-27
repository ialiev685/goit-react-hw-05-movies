import { useParams, Link, useRouteMatch } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { fetchMovieId } from "../../services";

export const MovieDetailsPage = () => {
  const { url } = useRouteMatch();

  const [title, setTitle] = useState("");
  const [overview, setOverview] = useState("");
  const [popularity, setPopularity] = useState(0);
  const [genres, setGenres] = useState(null);
  const [image, setImage] = useState("");
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieId(movieId).then((response) => {
      setTitle(response.original_title);
      setOverview(response.overview);
      setPopularity(response.popularity);
      setGenres(response.genres);
      setImage(`https://image.tmdb.org/t/p/w300/${response.poster_path}`);
    });
  }, [movieId]);

  return (
    <div>
      <img src={image} alt={title} />
      <ul>
        <li>
          <h1>{title}</h1>
          <p>User Score: {popularity}</p>
        </li>
        <li>
          <h2>Overview</h2>
          <p>{overview}</p>
        </li>
        <li>
          <h2>Genres</h2>
          <ul>
            {genres &&
              genres.map((el, index) => <li key={index}>{el.name}</li>)}
          </ul>
        </li>
      </ul>
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to={`${url}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`${url}/reviews`}>Reviews</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
