import {PERSISTENCE_TYPES} from '../config.js';
import ProductModelMem from './products-mem.js';
import ProductModelFS from "./products-fs.js";
import ProductModelMongoDB from './products-mongodb.js';

class ProductModel {
    static get (type) {
        console.log(`##### Persistencia -> ${type} #####`);
        switch (type) {
            case PERSISTENCE_TYPES.TYPE_MEMORY:
                return new ProductModelMem();
            case PERSISTENCE_TYPES.TYPE_FILE:
                return new ProductModelFS();
            case PERSISTENCE_TYPES.TYPE_MONGODB:
            default:
                return new ProductModelMongoDB();

        }
    }
}

export default ProductModel;
