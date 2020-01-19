function SinhVien(_maSV, _tenSV, _loaiSV, _diemToan, _diemLy, _diemHoa, _diemRL) {
  this.maSinhVien = _maSV;
  this.tenSV = _tenSV;
  this.loaiSV = _loaiSV;
  this.diemToan = _diemToan;
  this.diemLy = _diemLy;
  this.diemHoa = _diemHoa;
  this.diemRL = _diemRL;
  this.tinhDTB = function () {
    return (this.diemToan + this.diemLy + this.diemHoa) / 3;
  }
}

var mangSinhVien = [];

function ThemSinhVien() {
  // B1: Lay thong tin
  var maSV = document.getElementById("txtMaSV").value;
  var tenSV = document.getElementById("txtTenSV").value;
  var loaiSV = document.getElementById("loaiSV").value;
  var diemToan = parseFloat(document.getElementById("txtDiemToan").value);
  var diemLy = parseFloat(document.getElementById("txtDiemLy").value);
  var diemHoa = parseFloat(document.getElementById("txtDiemHoa").value);
  var diemRL = parseFloat(document.getElementById("txtDiemRenLuyen").value);

  // B2: To chuc doi tuong
  var sinhVien = new SinhVien(maSV, tenSV, loaiSV, diemToan, diemLy, diemHoa, diemRL);

  // B3: Push vao mangSinhVien
  mangSinhVien.push(sinhVien);
  console.log(mangSinhVien);

  // B4: HienThi
  HienThi2();
}

function HienThi1(sinhVien) {
  var tbodySinhVien = document.getElementById("tbodySinhVien");
    var trSinhVien = document.createElement("tr");
    
    var tdMaSV = document.createElement("td");
    tdMaSV.innerHTML = sinhVien.maSinhVien; // Cho noi dung cua the td
    trSinhVien.appendChild(tdMaSV); // Cho biet the td khi duoc tao ra nam o dau

    var tdTenSV = document.createElement("td");
    tdTenSV.innerHTML = sinhVien.tenSV;
    trSinhVien.appendChild(tdTenSV);

    var tdLoaiSV = document.createElement("td");
    tdLoaiSV.innerHTML = sinhVien.loaiSV;
    trSinhVien.appendChild(tdLoaiSV);

    var tdDTBSV = document.createElement("td");
    tdDTBSV.innerHTML = sinhVien.tinhDTB();
    trSinhVien.appendChild(tdDTBSV);

    var tdDiemRLSV = document.createElement("td");
    tdDiemRLSV.innerHTML = sinhVien.diemRL;
    trSinhVien.appendChild(tdDiemRLSV);

    tbodySinhVien.appendChild(trSinhVien);
}

function HienThi2(){
  var content = "";
  for (let index = 0; index < mangSinhVien.length; index++) {
    const sinhVien = mangSinhVien[index];
    
    content += `
    <tr>
      <td>${sinhVien.maSinhVien}</td>
      <td>${sinhVien.tenSV}</td>
      <td>${sinhVien.loaiSV}</td>
      <td>${sinhVien.tinhDTB()}</td>
      <td>${sinhVien.diemRL}</td>
    </tr>
  `;
  }

  var tbodySinhVien = document.getElementById("tbodySinhVien");
  tbodySinhVien.innerHTML = "";
  tbodySinhVien.innerHTML = content;
}