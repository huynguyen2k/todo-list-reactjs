import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTaskAction, deleteTaskAction, doneTaskAction, editTaskAction } from '../redux/action/TaskListAction'
import { toggleThemeAction } from '../redux/action/ThemeAction'


class TodoList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            taskTitle: '',
            taskEdit: {},
            disabledAddBtn: false,
            disabledUpdateBtn: true
        }
    }

    handleInputChange = (event) => {
        this.setState({
            taskTitle: event.target.value,
            taskEdit: {...this.state.taskEdit, title: event.target.value}
        })
    }

    handleKeyPress = (event) => {
        if (event.key === 'Enter' && !this.state.disabledAddBtn) {
            this.props.addTask(this.state.taskTitle)
            this.resetState()
        }
    }

    handleEdit = (task) => {
        this.setState({
            taskTitle: task.title,
            taskEdit: task,
            disabledAddBtn: true,
            disabledUpdateBtn: false
        })
    }

    resetState = () => {

        this.setState({
            taskTitle: '',
            taskEdit: {},
            disabledAddBtn: false,
            disabledUpdateBtn: true
        })
    }

    renderTaskList = () => {
        return this.props.taskList.map((task, index) => {
            return (
                <li className="task-item" key={index}>
                    <span className="title">{task.title}</span>
                    <div className="icons">
                        <div onClick={() => {
                            this.props.doneTask(task.id)
                        }} className={`icon check-icon ${task.isFinished ? "active": ""}`}>
                            <svg className="svg-inline--fa fa-check fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
                        </div>
                        <div className="icon edit-icon" onClick={() => {this.handleEdit(task)}}>
                            <svg className="svg-inline--fa fa-edit fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"></path></svg>
                        </div>
                        <div onClick={() => {this.props.deleteTask(task.id)}} className="icon trash-icon">
                            <svg className="svg-inline--fa fa-trash fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"></path></svg>
                        </div>
                    </div>
                </li>
            )
        })
    }

    render() {

        return (
            <div className="todo-list">
                <div className="todo-list__theme" onClick={() => {
                    this.props.toggleTheme(this.props.selectedTheme.themeName)
                }}>
                    {this.props.selectedTheme.themeIcon}
                </div>
                <h1 className="todo-list__header">Todo List</h1>
                <div className="todo-list__add-task">
                    <input value={this.state.taskTitle} onChange={this.handleInputChange} onKeyPress={this.handleKeyPress} type="text" placeholder="Enter your task!" />
                    <button className="add-task-btn" onClick={() => {
                        this.props.addTask(this.state.taskTitle)
                        this.resetState()
                    }} disabled={this.state.disabledAddBtn ? 'disabled' : ''}>Add</button>
                    <button className="update-task-btn" onClick={() => {
                        this.props.editTask(this.state.taskEdit)
                        this.resetState()
                    }} disabled={this.state.disabledUpdateBtn ? 'disabled' : ''}>Update</button>
                </div>
                <ul className="todo-list__task-list">
                    {this.renderTaskList()}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        taskList: state.TaskListReducer,
        selectedTheme: state.ThemeReducer.selectedTheme
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        addTask: (title) => {
            dispatch(addTaskAction(title))
        },

        editTask: (task) => {
            dispatch(editTaskAction(task))
        },

        deleteTask: (taskId) => {
            dispatch(deleteTaskAction(taskId))
        },

        doneTask: (taskId) => {
            dispatch(doneTaskAction(taskId))
        },

        toggleTheme: (themeName) => {
            dispatch(toggleThemeAction(themeName))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)