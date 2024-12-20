import APIClient from "./apiClient";

export interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}


export default new APIClient<Todo>('/todos'); // this way of export insure the singleton pattern