import React, { useState, useEffect } from "react";
import { fetchSearchMovie } from "../../services";
import { ListMovies } from "../ListMovies";

export const SearchControl = () => {
  const [query, setQuery] = useState("");
  const [searchName, setSerachName] = useState("");
  const [findMovies, setFindMovies] = useState(null);
  useEffect(() => {
    if (!query) return;

    fetchSearchMovie(query).then((response) => setFindMovies(response.results));
  }, [query]);

  const handleChange = (e) => {
    setSerachName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(searchName);
    setSerachName("");
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
