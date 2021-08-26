// import React from "react";
import { NavLink } from "react-router-dom";

import "./Navigation.scss";

export const Navigation = () => {
  return (
    <nav className="navigation">
      <NavLink to="/" className="navigation__link" activeClassName="">
        Home
      </NavLink>
      <NavLink to="/movies" className="navigation__link" activeClassName="">
        Movies
      </NavLink>
    </nav>
  );
};
