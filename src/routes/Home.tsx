import React from "react";
import { Link, Outlet } from "react-router-dom";
import NavBar from "./NavBar";

function Home() {
  return (
    <>
      <div className="card mx-3">
        <div className="card-body">This is some text within a card body.</div>
      </div>
      <Link className="mx-3 my-3" to="/users">
        Users
      </Link>
    </>
  );
}

export default Home;
