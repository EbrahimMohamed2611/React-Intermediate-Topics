import React from "react";
import { Outlet } from "react-router-dom";
import UsersList from "./UsersList";

function UserPage() {
  return (
    <div className="row">
      <div className="col">
        <UsersList />
      </div>
      <div className="col">
        <Outlet />
      </div>
    </div>
  );
}

export default UserPage;
