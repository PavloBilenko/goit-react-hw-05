import React from "react";
import { NavLink } from "react-router-dom";
import "../../index.css";

const Navigation = () => {
  return (
    <nav className="header navigation">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "active nav-link" : "nav-link"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={({ isActive }) =>
          isActive ? "active nav-link" : "nav-link"
        }
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
