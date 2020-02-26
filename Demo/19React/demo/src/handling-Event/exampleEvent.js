import React, { Component } from 'react'

export default class ExampleEvent extends Component {
    isLogin = false;
    userName = 'nguyen';

    dangNhap = () => {
        this.isLogin = true;
    }

    renderHTML = () => {
        return (
            <div>
                {
                    !this.isLogin ? <button className='btn btn-success' onClick={this.dangNhap}>Dang nhap</button>
                    :
                    <p>hello {this.userName}</p>
                }
            </div>
        );
    }

    render() {
        return (
            <div>
                <h1>Example event</h1>
                {this.renderHTML()}
            </div>
        )
    }
}
