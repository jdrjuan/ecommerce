import mongoose from 'mongoose';
import DB from '../services/DB/MongoDB.js';

const productsSchema = mongoose.Schema({
    name: String,
    description: String,
    brand: String,
    cost: Number,
    stock: Number,
    category: String,
    image: String,
});

const ProductsModel = mongoose.model('products', productsSchema);

class ProductModelMongoDB {

    ////////////////////////////////////////////////////////////////////////////////
    //                              CRUD - C: Create                              //
    ////////////////////////////////////////////////////////////////////////////////

    async createProduct (product) {
        if (!await DB.connectDB()) {
            console.error('Conexión no establecida');
            return {};
        }
        try {
            const newProduct = new ProductsModel(product);
            await newProduct.save();
            return newProduct;
        } catch (error) {
            console.log(`Se produjo un error al intentar dar de alta el producto: ${error.message}`);
            return {};
        }
    }


    ////////////////////////////////////////////////////////////////////////////////
    //                               CRUD - R: Read                               //
    ////////////////////////////////////////////////////////////////////////////////

    async readProducts () {
        if (!await DB.connectDB()) {
            console.error('Conexión no establecida');
            return [];
        }
        try {
            const products = await ProductsModel.find({});
            return products;
        } catch (error) {
            console.error(`Se produjo un error al intentar obtener los productos: ${error.message}`);
            return [];
        }
    }

    async readProduct (id) {
        if (!await DB.connectDB()) {
            console.error('Conexión no establecida');
            return {};
        }
        try {
            // const products = await ProductsModel.find({ _id: id });
            // if (products.length === 0) {
            //     return {};
            // }
            // return products[0];
            // const product = await ProductsModel.findOne({ _id: id}) || {};
            // return product;
            const product = await ProductsModel.findById(id);
            return product || {};
        } catch (error) {
            console.error(`Se produjo un error al intentar obtener el producto solicitado: ${error.message}`);
            return {};
        }
    }


    ////////////////////////////////////////////////////////////////////////////////
    //                              CRUD - U: Update                              //
    ////////////////////////////////////////////////////////////////////////////////

    async updateProduct (id, product) {
        if (!await DB.connectDB()) {
            console.error('Conexión no establecida');
            return {};
        }
        try {
            // const updatedProduct = await ProductsModel.updateOne({ _id: id }, { $set: product });
            // const updatedProduct = await ProductsModel.findOneAndUpdate({ _id: id }, { $set: product });
            // const updatedProduct = await ProductsModel.findOneAndUpdate({ _id: id }, { $set: product }, {
            //     returnDocument: 'after'
            // });
            const updatedProduct = await ProductsModel.findOneAndUpdate({ _id: id }, { $set: product }, {
                new: true
            });
            return updatedProduct || {};
        } catch (error) {
            console.error(`Se produjo un error al intentar modificar el producto especificado: ${error.message}`);
            return {};
        }
    }


    ////////////////////////////////////////////////////////////////////////////////
    //                              CRUD - D: Delete                              //
    ////////////////////////////////////////////////////////////////////////////////

    async deleteProduct (id) {
        if (!await DB.connectDB()) {
            console.error('Conexión no establecida');
            return {};
        }
        try {
            // const removedProduct = await ProductsModel.deleteOne({ _id: id });
            const removedProduct = await ProductsModel.findByIdAndDelete(id);
            return removedProduct || {};
        } catch (error) {
            console.error(`Se produjo un error al intentar eliminar el producto especificado: ${error.message}`);
            return {};
        }
    }


}

export default ProductModelMongoDB;
