import React, { useState, useEffect } from "react";
import { fetchSearchMovie } from "../../services";
import { ListMovies } from "../ListMovies";
import { useLocation, useHistory } from "react-router-dom";

export const MoviesPage = () => {
  const location = useLocation();
  const history = useHistory();
  console.log("search", history);

  const [query, setQuery] = useState("");
  const [searchName, setSearchName] = useState("");
  const [findMovies, setFindMovies] = useState(null);
  useEffect(() => {
    if (!query) return;

    fetchSearchMovie(query).then((response) => setFindMovies(response.results));
  }, [query]);

  const handleChange = (e) => {
    setSearchName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(searchName);

    history.push({ ...location, search: `query=${searchName}` });
    setSearchName("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          autoFocus
          autoComplete="off"
          placeholder="Search images"
          value={searchName}
        />

        <button type="submit">search</button>
      </form>
      {findMovies && <ListMovies listMovies={findMovies} />}
    </>
  );
};
