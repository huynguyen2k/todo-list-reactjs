import { ADD_TASK, CLEAR_ALL_TASK, DELETE_TASK, DONE_TASK, EDIT_TASK } from '../type/TaskListType'

const taskList = []

const TaskListReducer = (state = taskList, action) => {

    switch (action.type) {

        case ADD_TASK: {

            if (action.title.trim() === '') {
                alert('Your task title can not be empty!')
                return [...state]
            }

            let taskIndex = state.findIndex(task => task.title.toLowerCase() === action.title.toLowerCase())

            if (taskIndex !== -1) {
                alert('Your task is existed!')
                return [...state]
            }
        
            const newTask = {
                id: state.length + 1,
                title: action.title,
                isFinished: false
            }

            state.push(newTask)
            break
        }

        case EDIT_TASK: {
            let isExistTaskTitle = !!state.find(task => (task.title === action.task.title && task.id !== action.task.id))

            if (isExistTaskTitle) {
                alert('Your task title is existed!')
            } else if (action.task.title.trim() === '') {
                alert('Your task title can not be empty!')
            } else {
                const task = state.find(task => task.id === action.task.id)

                if (task) {
                    task.title = action.task.title
                }
            }

            break
        }

        case DELETE_TASK: {
            let taskIndex = state.findIndex(task => task.id === action.taskId)

            if (taskIndex !== -1) {
                state.splice(taskIndex, 1)
            }

            break
        }

        case DONE_TASK: {
            let taskIndex = state.findIndex(task => task.id === action.taskId)

            if (taskIndex !== -1) {
                state[taskIndex].isFinished = !state[taskIndex].isFinished
            }

            break
        }

        case CLEAR_ALL_TASK: {
            state = []
            break;
        }

        default:
    }
    
    return [...state]
}

export default TaskListReducer