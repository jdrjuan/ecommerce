
const getProducts = async () => {
    const response = await fetch('http://127.0.0.1:8080/api/products')
    const products = await response.json();
    products.forEach(product => {
        console.group(product.name);
        console.log('Id:', product._id);
        console.log('Marca:', product.brand);
        console.log('Costo:', product.cost);
        console.log('Stock:', product.stock);
        console.groupEnd();
    });
};

getProducts();
