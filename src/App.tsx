import "./App.css";
import NavBar from "./state-management/NavBar";
import Home from "./state-management/Home";
import AuthProvider from "./state-management/auth/AuthProvider";
import { TasksProvider } from "./state-management/tasks";
import Counter from "./state-management/counter/Countert";

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
          <Counter />
          <NavBar />
          <Home />
        </TasksProvider>
      </AuthProvider>

      {/*<LoginStatus/>*/}
      {/*<TaskList/>*/}

      {/*<TodoForm/>*/}
      {/*<TodoList/>*/}
      {/*<InfinitePosts/>*/}
      {/*<PaginatedPosts/>*/}
      {/*<Posts/>*/}
    </>
  );
}

export default App;
