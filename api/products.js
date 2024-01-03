import config from '../config.js';
// import Model from '../models/products-mem.js';
// import Model from '../models/products-fs.js';
// import Model from '../models/products-mongodb.js';
import Model from '../models/products.js';

// const model = new Model();
// const model = Model.get('MEM');
// const model = Model.get('FS');
// const model = Model.get('MONGO_DB');
const model = Model.get(config.PERSISTENCE_TYPE);

///////////////////////////////////////////////////////////////////////////////
//                                API Get All                                //
///////////////////////////////////////////////////////////////////////////////

const getProducts = async () => {
    const products = await model.readProducts();
    return products;
}


///////////////////////////////////////////////////////////////////////////////
//                                API Get One                                //
///////////////////////////////////////////////////////////////////////////////

const getProduct = async id => {
    const product = await model.readProduct(id);
    return product;
}


////////////////////////////////////////////////////////////////////////////////
//                                 API Create                                 //
////////////////////////////////////////////////////////////////////////////////

const createProduct = async product => {
    const createdProduct = await model.createProduct(product);
    return createdProduct;
};


////////////////////////////////////////////////////////////////////////////////
//                                 API Update                                 //
////////////////////////////////////////////////////////////////////////////////

const updateProduct = async (id, product) => {
    const updatedProduct = await model.updateProduct(id, product);
    return updatedProduct;
};


////////////////////////////////////////////////////////////////////////////////
//                                 API Delete                                 //
////////////////////////////////////////////////////////////////////////////////

const deleteProduct = async id => {
    const removedProduct = await model.deleteProduct(id);
    return removedProduct;
};


export default {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
};
