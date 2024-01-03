import { promises as fs } from 'fs';

class ProductModelFS {

    productsFileName = 'products.dat';
    charset = 'utf-8';

    async getProductsFromFile () {
        let products = [];
        try {
            const fileContent = await fs.readFile(this.productsFileName, this.charset);
            products = JSON.parse(fileContent);
        } catch (error) {
            console.error(error.message);
        }
        return products;
    }

    async saveProductsToFile (products) {
        try {
            await fs.writeFile(this.productsFileName, JSON.stringify(products, null, '\t'));
        } catch (error) {
            console.error(error.message);
        }
    }


    getNextProductId (products) {
        const nextId = String(Number(products[products.length - 1].id) + 1);
        return nextId;
    }


    ////////////////////////////////////////////////////////////////////////////////
    //                              CRUD - C: Create                              //
    ////////////////////////////////////////////////////////////////////////////////

    async createProduct (product) {
        const products = await this.getProductsFromFile();
        product.id = this.getNextProductId(products);
        products.push(product);
        await this.saveProductsToFile(products);
        return product;
    }


    ////////////////////////////////////////////////////////////////////////////////
    //                               CRUD - R: Read                               //
    ////////////////////////////////////////////////////////////////////////////////

    async readProducts () {
        const products = await this.getProductsFromFile();
        return products;
    }

    async readProduct (id) {
        const products = await this.getProductsFromFile();
        const product = products.find(prod => prod.id === id) || {};
        return product;
    }


    ////////////////////////////////////////////////////////////////////////////////
    //                              CRUD - U: Update                              //
    ////////////////////////////////////////////////////////////////////////////////

    async updateProduct (id, product) {
        const products = await this.getProductsFromFile();
        let index = products.findIndex(prod => prod.id === id);
        if (index === -1) {
            return {};
        }
        products[index] = product;
        await this.saveProductsToFile(products);
        return product;
    }


    ////////////////////////////////////////////////////////////////////////////////
    //                              CRUD - D: Delete                              //
    ////////////////////////////////////////////////////////////////////////////////

    async deleteProduct (id) {
        const products = await this.getProductsFromFile();
        let index = products.findIndex(prod => prod.id === id);
        if (index === -1) {
            return {};
        }
        const removedProduct = products.splice(index, 1)[0];
        await this.saveProductsToFile(products);
        return removedProduct;
    }

}

export default ProductModelFS;
