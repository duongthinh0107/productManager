let productManager = new ProductManager();
productManager.showListProduct();
function save() {
    let name = document.getElementById('name').value;
    let price = document.getElementById('price').value;
    let author = document.getElementById('author').value;

    productManager.add(name,price,author);
}

function deleteManager(index){
    productManager.destroy(index);
    if (confirm('ban co muon xoa khong')){
        productManager.destroy(index);
    }
}