import React from "react";
import { Task, TaskAction } from "./TasksProvider";

interface TasksContextType {
  tasks: Task[];
  dispatch: React.Dispatch<TaskAction>;
}

const TaskContext = React.createContext<TasksContextType>(
  {} as TasksContextType
);
export default TaskContext;
