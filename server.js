import express from 'express';
import config from './config.js';
import routerProducts from './routers/products.js';

const PORT = config.PORT;

const app = express();

// Middleware para que esté disponible la propiedad req.body en las rutas
// > Para formato x-www-form-urlencoded:
app.use(express.urlencoded( { extended: true } ));
// > Para formato JSON:
app.use(express.json());

app.use(express.static('public', { extensions: ['html', 'htm'] }));

app.use('/api/products', routerProducts);

const server = app.listen(PORT, () => console.log(`Servidor Express escuchando en el puerto ${PORT}`));
server.on('error', error => console.log(`Se produjo un error al intentar iniciar el servidor Express: ${error.message}`));
