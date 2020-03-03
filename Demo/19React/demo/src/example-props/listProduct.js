import React, { Component } from 'react'
import Product from './product'
import data from './data.json'

export default class ListProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listProduct: data
        };
    }

    renderProduct() {
        let { listProduct } = this.state;
        return (
            listProduct.map(item => {
                return (
                    <Product product={item} />
                );
            })
        );
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.renderProduct()}
                </div>
            </div>
        )
    }
}
