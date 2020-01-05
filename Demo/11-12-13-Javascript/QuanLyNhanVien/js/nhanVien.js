var mangNhanVien = [];
function NhanVien(_maNV, _hoTen, _email, _matKhau, _ngaylam, _chucVu) {
    this.maNV = _maNV;
    this.hoTen = _hoTen;
    this.email = _email;
    this.matKhau = _matKhau;
    this.ngaylam = _ngaylam;
    this.chucVu = _chucVu;
    this.luongCoBan = 10000000;

    this.tinhTongLuong = function () {
        if (_chucVu === "Sếp") {
            return this.luongCoBan * 3;
        } else if (_chucVu === "Trưởng phòng") {
            return this.luongCoBan * 5;
        } else {
            return this.luongCoBan;
        }
    }
    this.tongLuong = this.tinhTongLuong();
}

function themNV() {
    var maNV = document.getElementById("msnv").value;
    var hoTen = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var matKhau = document.getElementById("password").value;
    var ngaylam = document.getElementById("datepicker").value;
    var chucVu = document.getElementById("chucvu").value;

    var nhanVien = new NhanVien(maNV, hoTen, email, matKhau, ngaylam, chucVu);

    mangNhanVien.push(nhanVien);
    console.log(mangNhanVien);
    hienThiNhanVien(mangNhanVien);
    luuLocalStorage();
    $("#myModal").modal("hide");
}

function hienThiNhanVien(MangNhanVien) {
    var content = "";
    for (let index = 0; index < MangNhanVien.length; index++) {
        const nhanVien = MangNhanVien[index];

        content += `
            <tr>
                <td>${nhanVien.maNV}</td>
                <td>${nhanVien.hoTen}</td>
                <td>${nhanVien.email}</td>
                <td>${nhanVien.ngaylam}</td>
                <td>${nhanVien.chucVu}</td>
                <td>${nhanVien.tongLuong}</td>
                <td><button class="btn btn-danger" id="btnXoaNV" onclick = xoaNhanVien(event); data-id="${nhanVien.maNV}" >Xóa</button></td>
            </tr>
        `
    }

    var tbodyNhanVien = document.getElementById("tableDanhSach");
    tbodyNhanVien.innerHTML = content;
}

function luuLocalStorage() {
    //Chuyển sang kiểu json
    var jsonData = JSON.stringify(mangNhanVien);
    //Lưu vào localStorage
    localStorage.setItem("DSNhanVien", jsonData);
}

function layDataFromLocalStorage() {
    //Lấy thông tin từ localstorage
    var jsonData = localStorage.getItem("DSNhanVien");
    //Chuyển về kiểu dữ liệu ban đầu
    var dsNhanVien = JSON.parse(jsonData);
    mangNhanVien = dsNhanVien;
    hienThiNhanVien(mangNhanVien);
}

function xoaNhanVien(e) {
    var btnXoa = e.target;
    var maNV = btnXoa.getAttribute("data-id");
    var nvIndex = mangNhanVien.findIndex(x => x.maNV === maNV);
    mangNhanVien.splice(nvIndex, 1);
    luuLocalStorage();
    hienThiNhanVien(mangNhanVien);
}