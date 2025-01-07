import React from "react";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <ul className="nav mx-3 my-3 navbar-light bg-light">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">
          React App
        </a>
      </li>
      <li className="nav-item">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link activated" : "nav-link"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/users"
          className={({ isActive }) =>
            isActive ? "nav-link activated" : "nav-link"
          }
        >
          Users
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/contacts"
          className={({ isActive }) =>
            isActive ? "nav-link activated" : "nav-link"
          }
        >
          Contacts
        </NavLink>
      </li>
    </ul>
  );
}

export default NavBar;
