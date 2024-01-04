import { config as dotEnvConfig } from 'dotenv';
dotEnvConfig();

const PERSISTENCE_TYPES = {
    TYPE_MEMORY: 'MEMORY',
    TYPE_FILE: 'FILE',
    TYPE_MONGODB: 'MONGODB',
};

const config = {
    PERSISTENCE_TYPE: process.env.PERSISTENCE_TYPE || PERSISTENCE_TYPES.TYPE_MONGODB,
    PORT: process.env.PORT || 8080,
    MONGODB_CONNECTION_STRING: process.env.MONGODB_CONNECTION_STRING || 'mongodb://127.0.0.1/ecommerce',
};

export {PERSISTENCE_TYPES, config as default};
