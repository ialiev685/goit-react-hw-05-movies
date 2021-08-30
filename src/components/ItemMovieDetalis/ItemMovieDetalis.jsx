import React from "react";

import { Cast } from "../Cast";
import { Reviews } from "../Reviews";
import { Link, Route, useRouteMatch } from "react-router-dom";
import PropTypes from "prop-types";

export const ItemMovieDetalis = ({ movieDetalis, toReturn }) => {
  const { title, overview, popularity, genres, poster_path } = movieDetalis;

  const { url, path } = useRouteMatch();

  return (
    <div className="movie-detalis">
      <div className="movie-detalis__wrapper">
        <img
          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
          alt={title}
          className="movie-detalis__poster"
        />
        <ul className="movie-detalis__discription">
          <li>
            <h1>{title}</h1>
            <p>User Score: {Math.ceil(popularity)}%</p>
          </li>
          <li>
            <h2>Overview</h2>
            <p>{overview}</p>
          </li>
          <li>
            <h2>Genres</h2>
            <ul className="movie-detalis__genres">
              {genres &&
                genres.map((el, index) => <li key={index}>{el.name}</li>)}
            </ul>
          </li>
        </ul>
      </div>
      <div className="movie-detalis__additionally">
        <h3>Additional information</h3>
        <ul className="movie-detalis__list-additionally">
          <li className="movie-detalis__item">
            <Link to={{ pathname: `${url}/cast`, state: { from: toReturn } }}>
              Cast
            </Link>
          </li>
          <li className="movie-detalis__item">
            <Link
              to={{ pathname: `${url}/reviews`, state: { from: toReturn } }}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <div>
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

ItemMovieDetalis.propTypes = {
  movieDetalis: PropTypes.shape({
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    popularity: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })),
    poster_path: PropTypes.string,
  }),
};
