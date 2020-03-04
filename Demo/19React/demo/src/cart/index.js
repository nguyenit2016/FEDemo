import React, { Component } from "react";
import ListProduct from "./listProduct";
import data from './data.json';
import Modal from "./modal";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listProduct: data,
      productDetail: data[0],
      gioHang: [],
      tongSoLuong: 0
    };
  }

  handleProductDetail = (product) => {
    this.setState({ productDetail: product });
  }

  handleAddToCart = (product) => {
    let giohangTemp = [...this.state.gioHang];
    let indexOfProduct = giohangTemp.findIndex(x => x.maSP === product.maSP);
    if (indexOfProduct >= 0) {
      giohangTemp[indexOfProduct].soLuong += 1;
    } else {
      const sanPham = {
        maSP: product.maSP,
        tenSP: product.tenSP,
        hinhAnh: product.hinhAnh,
        soLuong: 1,
        giaBan: product.giaBan
      };
      giohangTemp = [...giohangTemp, sanPham]
    }

    this.setState({
      gioHang: giohangTemp
    });
  }
  handleChangeQuantity = (maSP, isIncrease) => {
    let giohangTemp = [...this.state.gioHang];
    let indexOfProduct = giohangTemp.findIndex(x => x.maSP === maSP);
    let product = giohangTemp[indexOfProduct];
    let soLuong = isIncrease ? (product.soLuong + 1) : (product.soLuong - 1)
    giohangTemp[indexOfProduct].soLuong = soLuong;
    if (soLuong == 0) {
      giohangTemp.splice(indexOfProduct, 1);
    }
    this.setState({
      gioHang: [...giohangTemp]
    });
  }

  deleteProduct = (maSP) => {
    let giohang = [...this.state.gioHang];
    let indexOfProduct = giohang.findIndex(x => x.maSP === maSP);
    giohang.splice(indexOfProduct, 1);
    this.setState({
      gioHang: [...giohang]
    });
  }

  tongSoLuong = () => {
    return (
      this.state.gioHang.reduce((tongSoLuong, product) => {
        return tongSoLuong += product.soLuong
      }, 0)
    );
  }

  render() {
    let { productDetail } = this.state;
    return (
      <div>
        <h3 className="title">Bài tập giỏ hàng</h3>
        <div className="container">
          <button
            className="btn btn-danger"
            data-toggle="modal"
            data-target="#modelId"
          >
            Giỏ hàng ({this.tongSoLuong()})
          </button>
        </div>
        <ListProduct
          listProduct={this.state.listProduct}
          productDetail={this.handleProductDetail}
          addToCart={this.handleAddToCart}
        />
        <Modal gioHang={this.state.gioHang} handleChangeQuantity={this.handleChangeQuantity} deleteProduct={this.deleteProduct} />
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
                  <td>{productDetail.heDieuHanh}</td>
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
      </div>
    );
  }
}
