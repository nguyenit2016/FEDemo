import React, { Component } from 'react'

export default class BaiTapCar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filePath: './img/imgRedCar.jpg'
        }
    }

    changeColorCar = (filePath) => {
        this.setState({ filePath });
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-6'>
                            <img src={this.state.filePath} className='img-fluid' />
                        </div>
                        <div className='col-sm-6'>
                            <button className='btn btn-danger' onClick={() => { this.changeColorCar('./img/imgRedCar.jpg') }}>Red</button>
                            <button className='btn btn-default' onClick={() => { this.changeColorCar('./img/imgSilverCar.jpg') }}>Sliver</button>
                            <button className='btn btn-dark' onClick={() => { this.changeColorCar('./img/imgBlackCar.jpg') }}>Black</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
