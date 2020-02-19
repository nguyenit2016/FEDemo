import { getListProduct, deleteProduct, addProduct } from './utils/api.js'
import SanPham from './models/SanPham.js';

let renderHtml = () => {
    let content = `
    <div class="card text-white bg-dark">
    <div class="card-body">
      <h4 class="card-title">Danh sách sản phẩm</h4>
      <div class='container'>
        <div class="row">
          <div class="col-md-3">
            <input id="maSP" class="form-control" placeholder="Mã SP" disabled />
          </div>
          <div class="col-md-3">
            <input id="tenSP" class="form-control" placeholder="Tên SP" />
          </div>
          <div class="col-md-3">
            <input id="gia" class="form-control" placeholder="Giá" />
          </div>
          <div class="col-md-3">
            <input id="hinhAnh" class="form-control" placeholder="Link hình" />
          </div>
        </div>
        <br />
        <button id="btnThem" class="btn btn-success" onclick="themSanPham();">Thêm sản phẩm</button>
        <button id="btnCapNhat" class="btn btn-success">Cap nhat</button>
      </div>
    </div>
  </div>
  <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th>Mã SP</th>
          <th>Tên SP</th>
          <th>Giá </th>
          <th>Hình ảnh</th>
          <th></th>
        </tr>
      </thead>
      <tbody id="tblDanhSachSanPham">

      </tbody>
    </table>
  </div>
    `;

    document.getElementById('root').innerHTML = content;
}

let renderTable = () => {
    getListProduct()
    .then((res) => {
        let contentTable = ``;
        res.data.map(item => {
            contentTable += `
            <tr>
                <td>${item.id}</td>
                <td>${item.tenSP}</td>
                <td>${item.gia}</td>
                <td><img src="${item.hinhAnh}" widht="50px" height="50px" /></td>
                <td>
                    <button class="btn btn-sm btn-warning">Sửa</button>
                    <button class="btn btn-sm btn-danger" onclick="xoaSanPham(${item.id})">Xóa</button>
                </td>
            </tr>
            `;
        });
        document.getElementById('tblDanhSachSanPham').innerHTML = contentTable;
    })
    .catch((err) => {
        console.log(err);
    })
}

window.xoaSanPham = xoaSanPham;
window.themSanPham = themSanPham;

function xoaSanPham(id) {
    deleteProduct(id)
    .then((res) => {
        renderTable();
    })
    .catch((err) => {
        console.log(err);
    })
}

function themSanPham(){
    let sanPham = new SanPham("abc", 123, "./assets/img/sp_note7.png");
    addProduct(sanPham)
    .then((res) => {
        renderTable();
    })
    .catch((err) => {

    });
}

renderHtml();
renderTable();