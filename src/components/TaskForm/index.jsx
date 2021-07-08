import React, { useEffect, useState } from 'react'


export default function TaskForm(props) {
    console.log('render TaskForm')

    // props
    const { taskEdit, onTaskAdd, onTaskUpdate } = props

    // react-hooks
    const [ taskTitle, setTaskTitle ] = useState('')
    const [ buttons, setButtons ] = useState({
        disabledAdd: false,
        disabledUpdate: true,
    })

    useEffect(() => {
        if (typeof taskEdit !== 'object' || taskEdit === null) return

        setTaskTitle(taskEdit.title)
        setButtons({
            disabledAdd: true,
            disabledUpdate: false,
        })
    }, [taskEdit])


    // handle functions
    const handleTaskTitleChange = (e) => {
        const { value } = e.target
        setTaskTitle(value)
    }

    const handleTaskSubmit = (e) => {
        e.preventDefault()

        if (taskTitle.trim() === '') {
            alert('Your task must not empty!')
            return
        }

        if (onTaskAdd) {
            onTaskAdd(taskTitle)
        }
        setTaskTitle('')
    }

    const handleTaskUpdate = () => {
        if (taskTitle.trim() === '') {
            alert('Your task title cannot empty!')
            return
        }

        if (onTaskUpdate) {
            onTaskUpdate({
                ...taskEdit,
                title: taskTitle
            })
            setTaskTitle('')
            setButtons({
                disabledAdd: false,
                disabledUpdate: true,
            })
        }
    }

    return (
        <div>
            <form className="todo-list__add-task" onSubmit={handleTaskSubmit}>
                <input onChange={handleTaskTitleChange} value={taskTitle} type="text" placeholder="Enter your task!" />
                <button disabled={buttons.disabledAdd} type="submit" className="add-task-btn">Add</button>
                <button disabled={buttons.disabledUpdate} onClick={handleTaskUpdate} type="button" className="update-task-btn">Update</button>
            </form>
        </div>
    )
}
