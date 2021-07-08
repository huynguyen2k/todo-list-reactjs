import React from 'react'

// styled-components
import { ThemeProvider } from 'styled-components'
import { Wrapper } from '../../style-component/Wrapper'

// react hooks
import { useDispatch, useSelector } from 'react-redux'

// containers
import TodoList from '../TodoList/index'

// components
import Modal from '../../components/Modal/index'
import { doneAllTasksAction } from '../../actions/todoListAction'


export default function TodoListApp() {
    console.log('render todoListApp')

    // react-hooks
    const dispatch = useDispatch()
    const selectedTheme = useSelector(state => state.todoListReducer.selectedTheme)
    const doneAllTasks = useSelector(state => state.todoListReducer.doneAllTasks)
    
    // handle functions
    const handleDoneAllTasks = () => {
        dispatch(doneAllTasksAction())
    }

    return (
        <ThemeProvider theme={selectedTheme}>
            <Wrapper>
                <TodoList />
                <Modal doneAllTasks={doneAllTasks} onDoneAllTasks={handleDoneAllTasks} />
            </Wrapper>
        </ThemeProvider>
    )
}
