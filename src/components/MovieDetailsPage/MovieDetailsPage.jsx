import {
  useParams,
  Link,
  useRouteMatch,
  Route,
  useHistory,
  useLocation,
} from "react-router-dom";
import React, { useState, useEffect } from "react";
import { fetchMovieId } from "../../services";

import { Cast } from "../Cast";
import { Reviews } from "../Reviews";

export const MovieDetailsPage = () => {
  const { url, path } = useRouteMatch();

  const history = useHistory();
  const location = useLocation();

  const toReturn = location.state.from;

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

  const goBack = () => {
    history.push(location.state.from);
  };

  return (
    <div>
      <button type="button" onClick={goBack}>
        Go back
      </button>
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
            <Link to={{ pathname: `${url}/cast`, state: { from: toReturn } }}>
              Cast
            </Link>
          </li>
          <li>
            <Link
              to={{ pathname: `${url}/reviews`, state: { from: toReturn } }}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <div className="show-cast-reviews">
        <Route path={`${path}/cast`}>
          <Cast />
        </Route>
        <Route path={`${path}/reviews`}>
          <Reviews />
        </Route>
      </div>
    </div>
  );
};
