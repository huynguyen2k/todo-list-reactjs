import React, { Component } from 'react'
import Child from './Child'


export default class LifeCycle extends Component {

    constructor(props) {
        super(props)

        this.state = {
            number: 1
        }

        console.log('Lifecycle constructor')
    }

    static getDerivedStateFromProps(newProps, newState) {
        console.log('Lifecycle getDerivedStateFromProps', newProps, newState)

        return null
    }

    shouldComponentUpdate(newProps, newState) {
        console.log('Lifecycle shouldComponentUpdate', newProps, newState)

        return true
    }

    render() {
        console.log('LifeCycle render')

        return (
            <div>
                <button onClick={() => {
                    this.setState({number: this.state.number + 1})
                }}>Click</button>
                <Child number={this.state.number} />
                {/* {this.state.number === 1 ? <Child /> : ''} */}
            </div>
        )
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifeCycle getSnapshotBeforeUpdate', prevProps, prevState)

        return 123
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('LifeCycle componentDidUpdate', prevProps, prevState, snapshot)
    }

    componentDidMount() {
        console.log('LifeCycle componentDidMount')
    }
}
