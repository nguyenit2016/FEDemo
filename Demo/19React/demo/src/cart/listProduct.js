import React, { Component } from "react";
import Product from './product'

export default class ListProduct extends Component {
  renderHTML = () => {
    return (
      this.props.listProduct.map(item => {
        return (
          <Product
          key={item.maSP}
          product={item}
          productDetail={this.props.productDetail}
          addToCart={this.props.addToCart}
          />
        );
      })
    );
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.renderHTML()}
        </div>
      </div>
    );
  }
}
