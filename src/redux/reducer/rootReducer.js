import { combineReducers } from 'redux'
import ThemeReducer from './ThemeReducer'
import TaskListReducer from './TaskListReducer'

const rootReducer = combineReducers({
    ThemeReducer,
    TaskListReducer
})

export default rootReducer