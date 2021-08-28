// import React from "react";
import { NavLink } from "react-router-dom";

import "./Navigation.scss";

export const Navigation = () => {
  return (
    <nav className="navigation">
      <NavLink
        exact
        to="/"
        className="navigation__link"
        activeClassName="navigation__active-link"
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className="navigation__link"
        activeClassName="navigation__active-link"
      >
        Movies
      </NavLink>
    </nav>
  );
};
