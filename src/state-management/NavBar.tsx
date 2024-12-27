import React, {useContext} from 'react';
import LoginStatus from "./LoginStatus";
import TaskContext from "./contexts/tasksContext";

const NavBar = () => {
    const {tasks} = useContext(TaskContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light  d-flex justify-content-between">
            <span className="badge text-bg-secondary mx-2">{tasks.length}</span>
            <LoginStatus/>
        </nav>
    );
};

export default NavBar;
