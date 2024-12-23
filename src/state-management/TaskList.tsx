import React, {useReducer} from 'react';
import taskReducer from "./taskReducer";


const TaskList = () => {
    // const [tasks, setTasks] = useState<Task[]>([]);
    const [tasks, dispatch] = useReducer(taskReducer, []);
    return (
        <div>
            <button className="btn btn-primary my-3"
                    onClick={() =>
                        dispatch({
                                type: 'ADD',
                                newTask: {id: Date.now(), title: 'Task' + Date.now()}
                            }
                        )}>
                Add Task
            </button>
            <ul className="list-group">
                {tasks.map(task => (
                    <li key={task.id} className="list-group-item d-flex justify-content-between">
                        <span className="flex-grow-1">{task.title}</span>
                        <button className="btn btn-outline-danger"
                                onClick={() => dispatch({type: 'DELETE', taskId: task.id})}
                        >Delete
                        </button>

                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
