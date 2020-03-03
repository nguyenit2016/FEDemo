import React, { Component } from 'react'
import ClassProps from './classProps'
import FunctionProps from './functionProps'

export default class Props extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: 'nguyen'
        };
    }
    render() {
        return (
            <div>
                props
                <ClassProps name={this.state.userName} />
                <FunctionProps name={this.state.userName} />
            </div>
        )
    }
}
