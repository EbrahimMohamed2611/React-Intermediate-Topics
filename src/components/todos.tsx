import React from 'react';
import useTodos from "../hooks/useTodos";


const TodoList = () => {
    const {data: todos, error, isLoading} = useTodos();

    if (error) return <div className="alert alert-danger m-5">{error.message}</div>
    if (isLoading) return <p>Loading.....</p>
    return (
        <ul className="list-group m-5">
            {todos?.map((todo) => (<li key={todo.id} className="list-group-item">{todo.title}</li>))}
        </ul>
    );
};

export default TodoList;
