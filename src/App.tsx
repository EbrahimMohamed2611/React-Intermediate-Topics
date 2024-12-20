import {useState} from 'react'
import './App.css'
import TodoForm from "./components/TodoForm";
import TodoList from "./components/todos";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <TodoForm/>
            <TodoList/>
            {/*<InfinitePosts/>*/}
            {/*<PaginatedPosts/>*/}
            {/*<Posts/>*/}
        </>
    )
}

export default App
