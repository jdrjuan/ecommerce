import api from '../api/products.js';

////////////////////////////////////////////////////////////////////////////////
//                               GET Controller                               //
////////////////////////////////////////////////////////////////////////////////

const getProducts = async (req, res) => {
    const products = await api.getProducts();
    res.json(products);
};

const getProduct = async (req, res) => {
    const id = req.params.id;
    const product = await api.getProduct(id);
    res.json(product);
};


///////////////////////////////////////////////////////////////////////////////
//                              POST Controller                              //
///////////////////////////////////////////////////////////////////////////////

const postProduct = async (req, res) => {
    const {name, brand, cost, stock, category, image, description} = req.body;
    const product = { name, brand, cost, stock, category, image, description, };
    const newProduct = await api.createProduct(product);
    res.json(newProduct);
};


////////////////////////////////////////////////////////////////////////////////
//                               PUT Controller                               //
////////////////////////////////////////////////////////////////////////////////

const putProduct = async (req, res) => {
    const id = req.params.id;

    const {name, brand, cost, stock, category, image, description} = req.body;
    const product = {id, name, brand, cost, stock, category, image, description, };
    
    const updatedProduct = await api.updateProduct(id, product);
    res.json(updatedProduct);
};


///////////////////////////////////////////////////////////////////////////////
//                             DELETE Controller                             //
///////////////////////////////////////////////////////////////////////////////

const deleteProduct = async (req, res) => {
    const id = req.params.id;

    const removedProduct = await api.deleteProduct(id);
    res.json(removedProduct);
};


export default {
    // getProducts: getProducts,
    getProducts,
    getProduct,
    postProduct,
    putProduct,
    deleteProduct,
};
