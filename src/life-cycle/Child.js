import React, { Component } from 'react'

export default class Child extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            number: this.props.number
        }

        console.log('Child constructor')
    }

    static getDerivedStateFromProps(newProps, newState) {
        console.log('Child getDerivedStateFromProps', newProps, newState)

        return null
    }    

    shouldComponentUpdate(newProps, newState) {
        console.log('Child shouldComponentUpdate', newProps, newState)

        return true
    }

    render() {
        console.log('Child render')

        return (
            <div></div>
        )
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Child getSnapshotBeforeUpdate', prevProps, prevState)
        return 123
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Child componentDidUpdate', prevProps, prevState, snapshot)
    }

    componentDidMount() {
        console.log('Child componentDidMount')
    }

    componentWillUnmount() {
        console.log('Child componentWillUnmount')
    }

}
