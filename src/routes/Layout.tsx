import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <NavBar />
      <div className="main mx-3">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
