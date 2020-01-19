function tinhTien(){
    //Loai xe
    var uberX = document.getElementById("uberX");
    var uberSUV = document.getElementById("uberSUV");
    var uberBlack = document.getElementById("uberBlack");
    
    //So km
    var soKM = parseInt(document.getElementById("soKM").value);
    //Thoi gian cho
    var thoiGianCho = parseInt(document.getElementById("thoiGianCho").value);
    
    //Tinh tien
    if(uberX.checked){
        var tongTienCho = thoiGianCho * 2000;
        TinhTongTien(tongTienCho, 8000, 12000, 10000, soKM);
    }
    if(uberSUV.checked){
        var tongTienCho = thoiGianCho * 3000;
        TinhTongTien(tongTienCho, 9000, 14000, 12000, soKM);
    }
    if(uberBlack.checked){
        var tongTienCho = thoiGianCho * 4000;
        TinhTongTien(tongTienCho, 10000, 16000, 14000, soKM);
    }
}
function TinhTongTien(tongTienCho, donGia1km, donGia20km, donGiaHon20km, soKM){
    var soTienPhaiTra = 0;
    if(soKM <= 1){
        soTienPhaiTra += donGia1km + tongTienCho;
    }else if(soKM <= 20){
        soTienPhaiTra += ((soKM - 1) * donGia20km) + tongTienCho + donGia1km;
    }else{
        soTienPhaiTra += ((soKM - 20) * donGiaHon20km) + tongTienCho + donGia1km + (19 * donGia20km);
    }
    var thanhTien = document.getElementById("thanhTien");
    thanhTien.innerHTML = formatNumber(soTienPhaiTra) + " vnđ";
}
function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}