import React, { Component } from 'react';
import data from './data.json';

export default class ExampleListKey extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listMovie: data
        }
    }

    renderHTML = () => {
        return (
            this.state.listMovie.map(item => {
                return (
                    <div className='col-sm-3' key={item.maPhim}>
                        <img className='img-fluid' src={item.hinhAnh} />
                        <div>{item.tenPhim}</div>
                    </div>
                );
            })
        );
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    {this.renderHTML()}
                </div>
            </div>
        )
    }
}
