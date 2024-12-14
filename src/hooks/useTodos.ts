import axios from "axios";
import {useQuery} from "@tanstack/react-query";

interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

const useTodos = () => {
    return useQuery<Todo[], Error>({
        queryKey: ['todos'],
        queryFn: () =>
            axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
                .then(response => response.data)
    });
}


export default useTodos;