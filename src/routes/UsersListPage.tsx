import React from "react";
import { Link } from "react-router-dom";

function UsersListPage() {
  const users = [
    { id: 1, name: "Ebrahim Mohamed", age: 25, title: "Software-Engineer" },
    { id: 2, name: "Mohamed Hamza", age: 27, title: "Back-End-Developer" },
    { id: 3, name: "Taha El Fakharany", age: 28, title: "Front-End-Developer" },
    { id: 4, name: "Hamda Abd Rabou", age: 29, title: "Application-Developer" },
    { id: 5, name: "Salah El Gouhary", age: 30, title: "DEVOPS" },
  ];
  return (
    <div>
      <h1 className="text mx-3">Users</h1>
      <ul className="list-group mx-3">
        {users.map((user) => (
          <li className="list-group-item" key={user.id}>
            <Link
              to={`/users/${user.id}?title=${user.title}&name=${user.name}&age=${user.age}`}
            >
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersListPage;
