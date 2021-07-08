import { themes } from '../config/themes'
import { ADD_TASK, DELETE_TASK, DONE_ALL_TASKS, DONE_TASK, TOGGLE_THEME, UPDATE_TASK } from '../constants/ActionType'


const initialState = {
    selectedTheme: themes.darkTheme,
    taskList: [],
    doneAllTasks: false
}

const todoListReducer = (state = initialState, action) => {

    switch (action.type) {

        case TOGGLE_THEME: {
            if (action.themeName === 'dark-theme') {
                state.selectedTheme = themes.lightTheme
            } else {
                state.selectedTheme = themes.darkTheme
            }

            return {...state}
        }

        case ADD_TASK: {
            const taskIndex = state.taskList.findIndex(task => task.title === action.newTask.title)
            const newTaskList = [...state.taskList]

            if (taskIndex === -1) {
                newTaskList.push(action.newTask)
                state.taskList = newTaskList
            } else {
                alert('Your task already exists!')
            }

            return {...state}
        }

        case DELETE_TASK: {
            const taskIndex = state.taskList.findIndex(task => task.id === action.taskId)

            if (taskIndex !== -1) {
                const newTaskList = [...state.taskList]
                newTaskList.splice(taskIndex, 1)
                state.taskList = newTaskList
            }

            return {...state}
        }

        case DONE_TASK: {
            const taskIndex = state.taskList.findIndex(task => task.id === action.taskId)

            if (taskIndex !== -1) {
                const newTaskList = [...state.taskList]
                newTaskList[taskIndex].done = !newTaskList[taskIndex].done
                state.taskList = newTaskList
                
                state.doneAllTasks = state.taskList.every(task => task.done)
            }
            return {...state}
        }

        case DONE_ALL_TASKS: {
            return {
                ...state,
                taskList: [],
                doneAllTasks: false
            }
        }

        case UPDATE_TASK: {
            const isExistedTitleIndex = state.taskList.findIndex(task => task.id !== action.task.id && task.title === action.task.title)
        
            if (isExistedTitleIndex !== -1) {
                alert('Your task title is existed!')
                return {...state}
            }

            const taskIndex = state.taskList.findIndex(task => task.id === action.task.id)

            if (taskIndex !== -1) {
                const newTaskList = [...state.taskList]
                newTaskList[taskIndex] = action.task
                state.taskList = newTaskList
            }
            return {...state}
        }

        default: 
            return state
    }
}

export default todoListReducer