import React, { Component } from 'react'

export default class State extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false,
            userName: 'nguyen'
        }
    }

    dangNhap = () => {
        this.state.isLogin = true;
        this.setState({
            isLogin: true
        })
    }

    renderHTML = () => {
        return (
            <div>
                {
                    !this.state.isLogin ? <button className='btn btn-success' onClick={this.dangNhap}>Dang nhap</button>
                    :
                    <p>hello {this.state.userName}</p>
                }
            </div>
        );
    }

    render() {
        return (
            <div>
                state
                {this.renderHTML()}
            </div>
        )
    }
}
