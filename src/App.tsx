import { useReducer, useState } from "react";
import "./App.css";
import NavBar from "./state-management/NavBar";
import Home from "./state-management/Home";
import TaskContext from "./state-management/contexts/tasksContext";
import taskReducer from "./state-management/taskReducer";
import AuthProvider from "./state-management/AuthProvider";
import TasksProvider from "./state-management/TasksProvider";

function App() {
  //   const [count, setCount] = useState(0);
  //   const [tasks, taskDispatch] = useReducer(taskReducer, []);

  return (
    <>
      {/*           App
              Home          NavBar
              TaskList
        */}
      <AuthProvider>
        <TasksProvider>
          <NavBar />
          <Home />
        </TasksProvider>
      </AuthProvider>

      {/*<LoginStatus/>*/}
      {/*<TaskList/>*/}
      {/*<Counter/>*/}
      {/*<TodoForm/>*/}
      {/*<TodoList/>*/}
      {/*<InfinitePosts/>*/}
      {/*<PaginatedPosts/>*/}
      {/*<Posts/>*/}
    </>
  );
}

export default App;
