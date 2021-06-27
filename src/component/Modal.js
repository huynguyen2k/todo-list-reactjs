import React, { Component } from 'react'
import { connect } from 'react-redux'
import { clearAllTasks } from '../redux/action/TaskListAction'

class Modal extends Component {

    constructor(props) {
        super(props)

        this.state = {
            displayModal: {
                display: 'none'
            }
        }
    }

    resetState = () => {
        this.setState({
            displayModal: {
                display: 'none'
            }
        })
    }

    render() {
        return (
            <div className="modal" style={this.state.displayModal}>
                <div className="modal__content">
                    <h1 className="modal__header">Congratulations!</h1>
                    <div className="modal__body">
                        <div className="icon">
                            <svg className="svg-inline--fa fa-check-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                        </div>
                        <h3 className="title">All tasks already done!</h3>
                    </div>
                    <div className="modal__footer text-right">
                        <button onClick={() => {
                            this.props.clearAllTasks()
                            this.resetState()
                        }} className="btn success-btn">OK</button>
                    </div>
                </div>
            </div>
        )
    }

    componentDidUpdate() {
        let totalDone =  this.props.taskList.reduce((result, task) => {
            return result + task.isFinished
        }, 0)

        if (totalDone <= 0) return

        if (totalDone === this.props.taskList.length && 
            this.state.displayModal.display === 'none') {
    
            this.setState({
                displayModal: {
                    display: 'flex'
                }
            })
        }
    }
}

const mapStateToProps = (state) => {
    return {
        taskList: state.TaskListReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearAllTasks: () => {
            dispatch(clearAllTasks())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)