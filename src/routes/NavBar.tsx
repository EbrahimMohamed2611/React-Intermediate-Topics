import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <ul className="nav mx-3 my-3">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">
          React App
        </a>
      </li>
      <li className="nav-item">
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/users" className="nav-link">
          Users
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/contacts" className="nav-link">
          Contacts
        </Link>
      </li>
    </ul>
  );
}

export default NavBar;
