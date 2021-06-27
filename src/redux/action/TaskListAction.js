import { ADD_TASK, CLEAR_ALL_TASK, DELETE_TASK, DONE_TASK, EDIT_TASK } from "../type/TaskListType"

export const addTaskAction = (title) => {
    return {
        type: ADD_TASK,
        title
    }
}

export const deleteTaskAction = (taskId) => {
    return {
        type: DELETE_TASK,
        taskId
    }
}

export const doneTaskAction = (taskId) => {
    return {
        type: DONE_TASK,
        taskId  
    }
}

export const editTaskAction = (task) => {
    return {
        type: EDIT_TASK,
        task
    }
}

export const clearAllTasks = () => {
    return {
        type: CLEAR_ALL_TASK
    }
}