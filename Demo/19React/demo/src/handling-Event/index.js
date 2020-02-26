import React, { Component } from 'react'

export default class HandlingEvent extends Component {
    clickMe = () => {
        
    }

    clickMeParams = (params) => {
        alert(params);
    }

    render() {
        return (
            <div>
                <h1>Handling event</h1>
                <button className='btn btn-success' onClick={this.clickMe}>Click me</button>
                <button className='btn btn-success' onClick={() => {this.clickMeParams('abcsed')}}>Click me params</button>
            </div>
        )
    }
}
