import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchMovieId } from "../../services/ApiMovies";

export const MovieDetailsPage = () => {
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

      console.log(response);
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
            <Link>Cast</Link>
          </li>
          <li>
            <Link>Reviews</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
