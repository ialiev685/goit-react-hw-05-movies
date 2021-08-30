import React, { useState, useEffect } from "react";
import { fetchSearchMovie } from "../../services";
import { ListMovies } from "../ListMovies";
import { useLocation, useHistory } from "react-router-dom";

import "./MoviesPage.scss";

export const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const [searchName, setSearchName] = useState("");
  const [findMovies, setFindMovies] = useState(null);
  const [error, setError] = useState("");

  const location = useLocation();
  const history = useHistory();

  const queryFromUrl = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    if (!query) return;

    fetchSearchMovie(query)
      .then((response) => setFindMovies(response.results))
      .catch((error) => setError(error.message));
  }, [query]);

  useEffect(() => {
    if (!queryFromUrl) return;
    setQuery(queryFromUrl);
  }, [queryFromUrl]);

  const handleChange = (e) => {
    setSearchName(e.target.value.trim());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(searchName);

    history.push({ ...location, search: `query=${searchName}` });
    setSearchName("");
  };

  return (
    <>
      <form className="form-control" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          autoFocus
          autoComplete="off"
          placeholder="Search images"
          value={searchName}
          className="form-control__input"
        />

        <button className="form-control__button" type="submit">
          search
        </button>
      </form>
      {findMovies && <ListMovies listMovies={findMovies} />}
      {error && <p>{error}</p>}
    </>
  );
};
