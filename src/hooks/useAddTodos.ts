import {useMutation, useQueryClient} from "@tanstack/react-query";

import axios from "axios";
import {CACHE_KEY_TODOS} from "../constants";
import APIClient from "../services/apiClient";
import todoService, {Todo} from "../services/todoService";


interface AddTodoContext{
    previousTodos:Todo[];
}

const useAddTodos = (resetField: ()=> void) => {

    const queryClient = useQueryClient();
    return useMutation<Todo, Error, Todo, AddTodoContext>({
        mutationFn: (todo: Todo) => {
            return todoService.post(todo);
        },
        onMutate: (newTodo: Todo) => {
            //FIRST: take snapshot of the current data in the cache
            const previousTodos = queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS) || [];
            //SECOND: do the optimistic update
            queryClient.setQueryData <Todo[]>(CACHE_KEY_TODOS, todos => [newTodo, ...(todos || [])])
            // now we need to return the context object that contains the previous todos
            return {previousTodos}
        },
        onSuccess: (savedTodo, newTodo) => {
            console.log(savedTodo);
            // APPROACH-1 : invalidate the cached data
            // queryClient.invalidateQueries({
            //     queryKey: CACHE_KEY_TODOS
            // })
            //APPROACH-2: update the data in the cache
            // queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) => [savedTodo, ...(todos || [])]);

            queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS,
                (todos) => todos?.map((todo) => todo == newTodo ? newTodo : todo))
            resetField()

        },
        onError: (error, newTodo, context) => {
            if (!context) return;
            queryClient.setQueryData(CACHE_KEY_TODOS, context.previousTodos);
        }
    })
}

export default useAddTodos;