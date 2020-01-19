var baseUrlNhanVien = "https://5e1a933231118200148f209a.mockapi.io/api/v1/NhanVien/";
function NhanVienServices() {
    this.getNhanVien = () => {
        axios({
            method: 'GET',
            url: baseUrlNhanVien
        }).then((res) => {
            var content = ``;
            res.data.map((val, index) => {
                content += `<tr>
                <td>${val.id}</td>
                <td>${val.taiKhoan}</td>
                <td>${val.matKhau}</td>
                <td>${val.hoTen}</td>
                <td>${val.email}</td>
                <td>${val.soDienThoai}</td>
                <td>${val.maLoaiNguoiDung}</td>
                <td><button class="btn btn-warning" onclick="EditNhanVien('${val.id}');">Sửa</button><button class="btn btn-danger" onclick="DeleteNhanVien('${val.id}');">Xóa</button></td>
            </tr>`;
            });
            document.getElementById("tblDanhSachNguoiDung").innerHTML = content;
        }).catch((err) => {
            console.log(err);
        });
    }
}

function CreateNhanVien() {
    $(".modal-body input").val("");

    document.getElementById("editNV").style.display = 'none';
    document.getElementById("createNV").style.display = 'block';
    $("#myModal").modal("show");
}

function CreateNV() {
    var taiKhoan = document.getElementById("TaiKhoan").value;
    var hoTen = document.getElementById("HoTen").value;
    var matKhau = document.getElementById("MatKhau").value;
    var email = document.getElementById("Email").value;
    var soDienThoai = document.getElementById("SoDienThoai").value;
    var maLoaiNguoiDung = document.getElementById("MaLoaiNguoiDung").value;

    axios({
        method: 'POST',
        url: baseUrlNhanVien,
        data: {
            taiKhoan: taiKhoan,
            hoTen: hoTen,
            matKhau: matKhau,
            email: email,
            soDienThoai: soDienThoai,
            maLoaiNguoiDung: maLoaiNguoiDung
        }
    }).then((res) => {
        var nhanVienServices = new NhanVienServices();
        nhanVienServices.getNhanVien();
        $("#myModal").modal("hide");
    }).catch((err) => {
        console.log(err);
        $("#myModal").modal("hide");
    });
}

function EditNhanVien(maNV) {
    document.getElementById("createNV").style.display = 'none';
    document.getElementById("editNV").style.display = 'block';
    axios({
        method: 'GET',
        url: baseUrlNhanVien + maNV,
    }).then((res) => {
        var nhanVien = res.data;
        document.getElementById("TaiKhoanHidden").value = nhanVien.id;
        document.getElementById("TaiKhoan").value = nhanVien.taiKhoan;
        document.getElementById("HoTen").value = nhanVien.hoTen;
        document.getElementById("MatKhau").value = nhanVien.matKhau;
        document.getElementById("Email").value = nhanVien.email;
        document.getElementById("SoDienThoai").value = nhanVien.soDienThoai;
        document.getElementById("MaLoaiNguoiDung").value = nhanVien.maLoaiNguoiDung;

        $("#myModal").modal("show");
    }).catch((err) => {
        console.log(err);
    });
}

function EditNV() {
    var maNV = document.getElementById("TaiKhoanHidden").value;
    var taiKhoan = document.getElementById("TaiKhoan").value;
    var hoTen = document.getElementById("HoTen").value;
    var matKhau = document.getElementById("MatKhau").value;
    var email = document.getElementById("Email").value;
    var soDienThoai = document.getElementById("SoDienThoai").value;
    var maLoaiNguoiDung = document.getElementById("MaLoaiNguoiDung").value;

    axios({
        method: 'PUT',
        url: baseUrlNhanVien + maNV,
        data: {
            taiKhoan: taiKhoan,
            hoTen: hoTen,
            matKhau: matKhau,
            email: email,
            soDienThoai: soDienThoai,
            maLoaiNguoiDung: maLoaiNguoiDung
        }
    }).then((res) => {
        var nhanVienServices = new NhanVienServices();
        nhanVienServices.getNhanVien();
        $("#myModal").modal("hide");
    }).catch((err) => {
        console.log(err);
        $("#myModal").modal("hide");
    });
}

function DeleteNhanVien(maNV) {
    document.getElementById("TaiKhoanHidden").value = maNV;
    $("#myModalDelete").modal("show");
}

function DeleteNV() {
    var maNV = document.getElementById("TaiKhoanHidden").value;
    axios({
        method: 'DELETE',
        url: baseUrlNhanVien + maNV,
    }).then((res) => {
        var nhanVienServices = new NhanVienServices();
        nhanVienServices.getNhanVien();
        $("#myModalDelete").modal("hide");
    }).catch((err) => {
        console.log(err);
        $("#myModalDelete").modal("hide");
    });
}