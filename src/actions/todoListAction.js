import { ADD_TASK, DELETE_TASK, DONE_ALL_TASKS, DONE_TASK, TOGGLE_THEME, UPDATE_TASK } from '../constants/ActionType'

export const toggleThemeAction = (themeName) => {
    return {
        type: TOGGLE_THEME,
        themeName
    }
}

export const addTaskAction = (newTask) => {
    return {
        type: ADD_TASK,
        newTask
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

export const doneAllTasksAction = () => {
    return {
        type: DONE_ALL_TASKS
    }
}

export const updateTaskAction = (task) => {
    return {
        type: UPDATE_TASK,
        task
    }
}