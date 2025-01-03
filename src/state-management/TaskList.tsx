import React, { useContext, useReducer } from "react";
import taskReducer from "./taskReducer";
import TaskContext from "./contexts/tasksContext";
import AuthContext from "./contexts/authContext";
import useTasks from "./hooks/useTasks";
import useAuth from "./hooks/useAuth";

const TaskList = () => {
  // const [tasks, setTasks] = useState<Task[]>([]);
  // const [tasks, dispatch] = useReducer(taskReducer, []);
  // const {tasks, dispatch} = useContext(TaskContext);
  const { tasks, dispatch } = useTasks();
  const { user } = useAuth();

  return (
    <div>
      <p>User: ({user})</p>
      <button
        className="btn btn-primary my-3"
        onClick={() =>
          dispatch({
            type: "ADD",
            newTask: { id: Date.now(), title: "Task" + Date.now() },
          })
        }
      >
        Add Task
      </button>
      <ul className="list-group">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between"
          >
            <span className="flex-grow-1">{task.title}</span>
            <button
              className="btn btn-outline-danger"
              onClick={() => dispatch({ type: "DELETE", taskId: task.id })}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
