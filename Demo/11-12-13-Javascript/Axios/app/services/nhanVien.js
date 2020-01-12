function NhanVienServices(){
    this.getNhanVien = function() {
        axios({
            method: 'GET',
            url: 'https://5e1a933231118200148f209a.mockapi.io/api/v1/NhanVien'
        }).then((res) => {
            console.log(res);
        }).catch((res) => {
            console.log(res);
        });
    }
}