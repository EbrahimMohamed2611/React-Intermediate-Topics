import React from "react";
import {Task, TaskAction} from "../taskReducer";

interface TasksContextType {
    tasks: Task[];
    dispatch: React.Dispatch<TaskAction>;
}

const TaskContext = React.createContext<TasksContextType>({} as TasksContextType);
export default TaskContext;