import {useState} from 'react'
import './App.css'
import Posts from "./components/posts";
import PaginatedPosts from "./components/PaginationPost";
import InfinitePosts from "./components/InfinitePost";

function App() {
    const [count, setCount] = useState(0)

    return (
        <InfinitePosts/>
        // <PaginatedPosts/>
        // <Posts/>
        // <TodoList/>
    )
}

export default App
