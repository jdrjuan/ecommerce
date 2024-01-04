import mongoose from 'mongoose';
import config from '../../config.js';

let connected = false;

const connectDB = async () => {
    try {
        // console.log('conectado?', connected);
        await mongoose.connect(config.MONGODB_CONNECTION_STRING, {
            serverSelectionTimeoutMS: 4000
        });
        console.log('Conexión con MongoDB exitosa');
        connected = true;
        return true;
    } catch (error) {
        console.log(`Se produjo un error al intentar establecer la conexión con MongoDB: ${error.message}`);
        return false;
    }
};

export default {
    connected,
    connectDB
};
