import {useQuery} from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import {CACHE_KEY_TODOS} from "../constants";
import todoService, {Todo} from "../services/todoService";


const useTodos = () => {
    // const apiClient = new APIClient<Todo>('/todos')
    return useQuery<Todo[], Error>({
        queryKey: CACHE_KEY_TODOS,
        queryFn: todoService.getAll
    });
}


export default useTodos;