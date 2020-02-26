import React, { Component } from 'react';

export default class RenderingElement extends Component{
    userName = "abc";

    renderInfo = () => {
        return (
            <p>{this.userName}</p>
        );
    }

    render() {
        return (
            <div>
                <h1>rendering element {this.renderInfo()}</h1>
            </div>
        );
    }
}