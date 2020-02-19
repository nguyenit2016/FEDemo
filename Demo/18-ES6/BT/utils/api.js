const getListProduct = () => axios.get('http://5a6451dcf2bae00012ca1a6a.mockapi.io/api/SanPham');
const deleteProduct = (id) => axios.delete(`http://5a6451dcf2bae00012ca1a6a.mockapi.io/api/SanPham/${id}`);
const addProduct = (product) => {
    return axios({
        url: "http://5a6451dcf2bae00012ca1a6a.mockapi.io/api/SanPham",
        method: "POST",
        data: product
    })
}

export { getListProduct, deleteProduct, addProduct };