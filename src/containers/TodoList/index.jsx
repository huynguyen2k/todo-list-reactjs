import React from 'react'

// components
import TaskForm from '../../components/TaskForm/index'
import TaskList from '../../components/TaskList/index'

// react-hooks
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// actions
import { addTaskAction, deleteTaskAction, doneTaskAction, toggleThemeAction, updateTaskAction } from '../../actions/todoListAction'


export default function TodoList() {
    console.log('render TodoList')

    // dispatch
    const dispatch = useDispatch()

    // react-hooks
    const selectedTheme = useSelector(state => state.todoListReducer.selectedTheme)
    const taskList = useSelector(state => state.todoListReducer.taskList)

    const [ taskEdit, setTaskEdit ] = useState(null)

    // handle functions
    const handleToggleTheme = () => {
        dispatch(toggleThemeAction(selectedTheme.themeName))
    }

    const handleTaskAdd = (taskTitle) => {
        const newTask = {
            id: Date.now(),
            title: taskTitle,
            done: false,
        }

        dispatch(addTaskAction(newTask))
    }

    const handleTaskDelete = (taskId) => {
        dispatch(deleteTaskAction(taskId))
    }

    const handleTaskDone = (taskId) => {
        dispatch(doneTaskAction(taskId))
    }

    const handleTaskEdit = (task) => {
        setTaskEdit(task)
    }

    const handleTaskUpdate = (task) => {
        dispatch(updateTaskAction(task))
    }

    return (
        <div className="todo-list">
            <div 
                className="todo-list__theme"
                onClick={handleToggleTheme}
            >
                {selectedTheme.themeIcon}
            </div>
            <h1 className="todo-list__header">Todo List</h1>
            <TaskForm onTaskUpdate={handleTaskUpdate} onTaskAdd={handleTaskAdd} taskEdit={taskEdit} />
            <TaskList onTaskEdit={handleTaskEdit} onTaskDone={handleTaskDone} onTaskDelete={handleTaskDelete} tasks={taskList} />
        </div>
    )
}
