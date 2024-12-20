import React, {useRef} from 'react';
import useAddTodos from "../hooks/useAddTodos";

const TodoForm = () => {
    // Because the hook should concern about data management we cannot reset the field direct in
    const addTodo = useAddTodos(() => {
        if (title.current) title.current.value = '';
    })

    const title = useRef<HTMLInputElement>(null);
    return (
        <>
            {addTodo.error && <div className="alert alert-danger">{addTodo.error.message}</div>}
            <form className="row m-3" onSubmit={(event) => {
                event.preventDefault();
                console.log(title.current?.value);
                if (title.current && title.current.value)
                    addTodo.mutate({
                        id: 0,
                        title: title.current?.value,
                        completed: false,
                        userId: 1
                    })
            }}>
                <div className='col'>
                    <input ref={title} type="todo" className="form-control" id="todo"/>
                </div>
                <div className='col'>
                    <button disabled={addTodo.isLoading} type="submit" className="btn btn-primary">
                        {addTodo.isLoading ? 'Adding....' : 'Add'}</button>
                </div>
            </form>
        </>
    );
};

export default TodoForm;
