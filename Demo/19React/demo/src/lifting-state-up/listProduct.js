import React, { Component } from 'react'
import Product from './product'
import data from './data.json'

export default class listProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listProduct: data,
            productDetail: data[0]
        };
    }

    handleDetail(product) {
        this.setState({
            productDetail: product
        });
    }

    renderProduct() {
        let listProduct = this.state.listProduct;
        return (
            listProduct.map(item => {
                return (
                    <Product key={item.maSP} product={item} productDetail={this.handleDetail} />
                );
            })
        );
    }

    renderProductDetail() {
        let { productDetail } = this.state;
        return (
            <div className="row">
                <div className="col-sm-5">
                    <img className="img-fluid" src={productDetail.hinhAnh} alt="" />
                </div>
                <div className="col-sm-7">
                    <h3>Thông số kỹ thuật</h3>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>Màn hình</td>
                                <td>{productDetail.manHinh}</td>
                            </tr>
                            <tr>
                                <td>Hệ điều hành</td>
                                <td>{productDetail.cameraTruoc}</td>
                            </tr>
                            <tr>
                                <td>Camera trước</td>
                                <td>{productDetail.cameraTruoc}</td>
                            </tr>
                            <tr>
                                <td>Camera sau</td>
                                <td>{productDetail.cameraSau}</td>
                            </tr>
                            <tr>
                                <td>RAM</td>
                                <td>{productDetail.ram}</td>
                            </tr>
                            <tr>
                                <td>ROM</td>
                                <td>{productDetail.rom}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.renderProduct()}
                </div>

                {this.renderProductDetail()}
            </div>
        )
    }
}
