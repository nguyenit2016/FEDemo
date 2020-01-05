// C1: var a = Object.create();
// C2: 
var sinhVien = {
  maSV: "001",
  tenSV: "Tuan",
  showInfo: function () {
    console.log(this.tenSV);
    return this.tenSV;
  }
}

//C3: Thông qua lớp đối tượng (chỉ thông qua hàm constructor)
function SinhVien(_maSV, _tenSV) {
  this.maSV = _maSV;
  this.tenSV = _tenSV;
  this.showInfo = function () {
    console.log(this.tenSV);
  }
}

var sinhVien2 = new SinhVien("002", "Long");
console.log(sinhVien2);
