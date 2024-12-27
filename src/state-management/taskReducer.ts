export interface Task {
    id: number;
    title: string
}

//FIRST: define interface for Adding
interface AddTask {
    type: 'ADD',
    newTask: Task
}

//SECOND: define interface for Deleting
interface DeleteTask {
    type: 'DELETE',
    taskId: number
}

// Combine the two types
export type TaskAction = DeleteTask | AddTask;

const taskReducer = (tasks: Task[], action: TaskAction): Task[] => {
    switch (action.type) {
        case 'ADD':
            return [action.newTask, ...tasks];
        case 'DELETE':
            return tasks.filter((task) => task.id !== action.taskId);
    }
    return tasks;
}

export default taskReducer;

