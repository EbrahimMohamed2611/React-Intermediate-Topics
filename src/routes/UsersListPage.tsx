import React from "react";
import { Link } from "react-router-dom";

function UsersListPage() {
  const users = [
    { id: 1, name: "Ebrahim Mohamed" },
    { id: 2, name: "Mohamed Hamza" },
    { id: 3, name: "Taha El Fakharany" },
    { id: 4, name: "Hamda Abd Rabou" },
    { id: 5, name: "Salah El Gouhary" },
  ];
  return (
    <div>
      <h1 className="text mx-3">Users</h1>
      <ul className="list-group mx-3">
        {users.map((user) => (
          <li className="list-group-item" key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersListPage;
