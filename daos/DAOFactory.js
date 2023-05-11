const ProductosDAOMongoDB = require(`./productos/ProductosDAOMongoDB`);
const CarritoDAOMongoDB = require(`./carritos/CarritoDAOMongoDB`);
const OrdenesDAOMongoDB = require(`./ordenes/OrdenesDAOMongoDB`);
const MessagesDAOMongoDB = require(`./mensajes/MessageDAOMongoDB`);

const getStorage = () => {
    const storage = `MongoDb`;
    switch (storage) {
        case `MongoDB`:
            return {
                productos: new ProductosDAOMongoDB(),
                carrito: new CarritoDAOMongoDB(),
                ordenes: new OrdenesDAOMongoDB(),
                mensajes: new MessagesDAOMongoDB()
            }
            break

        default:
            return {
                productos: new ProductosDAOMongoDB(),
                carrito: new CarritoDAOMongoDB(),
                ordenes: new OrdenesDAOMongoDB(),
                mensajes: new MessagesDAOMongoDB()
            }
            break
    }
}

module.exports = getStorage;