import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <nav className="nav">
      <Link className="nav-link" to="/users">
        Users
      </Link>
      <Link className="nav-link active" to="/contacts">
        Contact Us
      </Link>
    </nav>
  );
}

export default Home;
