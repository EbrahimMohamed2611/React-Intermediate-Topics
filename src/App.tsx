import {useState} from 'react'
import './App.css'
import TaskList from "./state-management/TaskList";
import LoginStatus from "./state-management/LoginStatus";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <LoginStatus/>
            <TaskList/>
            {/*<Counter/>*/}
            {/*<TodoForm/>*/}
            {/*<TodoList/>*/}
            {/*<InfinitePosts/>*/}
            {/*<PaginatedPosts/>*/}
            {/*<Posts/>*/}
        </>
    )
}

export default App
