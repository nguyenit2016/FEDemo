// Tao 1 lop doi tuong SinhVien
function SinhVien(_maSV, _tenSV, _loaiSV, _diemToan, _diemVan) {
  this.maSinhVien = _maSV;
  this.tenSV = _tenSV;
  this.loaiSV = _loaiSV;
  this.diemToan = _diemToan;
  this.diemVan = _diemVan;
  this.tinhDTB = function () {
    return (this.diemToan + this.diemVan) / 2;
  }
  this.xepLoai = function () {
    var diemTB = this.tinhDTB();
    var xepLoai = "";
    if (diemTB >= 5) {
      xepLoai = "Gioi"
    } else {
      xepLoai = "Do"
    }
    return xepLoai;
  }
}

function HienThiThongTin() {
  // B1: Lay thong tin
  var maSV = document.getElementById("txtMaSV").value;
  var tenSV = document.getElementById("txtTenSV").value;
  var loaiSV = document.getElementById("loaiSV").value;
  var diemToan = parseFloat(document.getElementById("txtDiemToan").value);
  var diemVan = parseFloat(document.getElementById("txtDiemVan").value);

  // B2: To chuc thanh 1 doi tuong (Su dung 1 trong 2 cach)
  var sinhVien = new SinhVien(maSV, tenSV, loaiSV, diemToan, diemVan);

  // B3: Hien Thi
  document.getElementById("spanTenSV").innerHTML = sinhVien.tenSV;
  document.getElementById("spanMaSV").innerHTML = sinhVien.maSinhVien;
  document.getElementById("spanLoaiSV").innerHTML = sinhVien.loaiSV;
  document.getElementById("spanDTB").innerHTML = sinhVien.tinhDTB();
  document.getElementById("spanXepLoai").innerHTML = sinhVien.xepLoai();
}