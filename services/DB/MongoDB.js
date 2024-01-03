import mongoose from 'mongoose';

let connected = false;

const connectDB = async () => {
    try {
        // console.log('conectado?', connected);
        await mongoose.connect('mongodb://127.0.0.1/ecommerce', {
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
