import useAuth from "../auth/useAuth";
import { useContext } from "react";
import TaskContext from "./tasksContext";
import useAuthStore from "../auth/store";

const useTasks = () => useContext(TaskContext);

const TaskList = () => {
  const { tasks, dispatch } = useTasks();

  // const { user } = useAuth();
  const { userName } = useAuthStore();

  return (
    <div>
      <p>User: ({userName})</p>
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
