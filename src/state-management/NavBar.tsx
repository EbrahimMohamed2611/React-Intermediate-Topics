import React, { useContext } from "react";
import LoginStatus from "./auth/LoginStatus";
import TaskContext from "./tasks/tasksContext";
import useCounterStore from "./counter/store";

const NavBar = () => {
  const { tasks } = useContext(TaskContext);
  const { counter } = useCounterStore();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light  d-flex justify-content-between">
      <span className="badge text-bg-secondary mx-2">
        {tasks.length} and Counter: ({counter})
      </span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
