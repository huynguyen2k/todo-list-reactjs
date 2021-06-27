import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { Wrapper } from '../styled-component/Component'
import { connect } from 'react-redux'
import TodoList from './TodoList'
import Modal from './Modal'

class Main extends Component {

    render() {
        return (
            <ThemeProvider theme={this.props.selectedTheme}>
                <Wrapper>
                    <TodoList />
                    <Modal />
                </Wrapper>
            </ThemeProvider>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectedTheme: state.ThemeReducer.selectedTheme
    }
}

export default connect(mapStateToProps)(Main)