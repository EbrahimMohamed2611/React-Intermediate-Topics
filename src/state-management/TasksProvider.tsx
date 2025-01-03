import React, { useReducer } from "react";
import taskReducer from "./taskReducer";
import TaskContext from "./contexts/tasksContext";

interface Props {
  children: React.ReactNode;
}

function TasksProvider({ children }: Props) {
  const [tasks, taskDispatch] = useReducer(taskReducer, []);

  return (
    <TaskContext.Provider value={{ tasks, dispatch: taskDispatch }}>
      {children}
    </TaskContext.Provider>
  );
}

export default TasksProvider;
