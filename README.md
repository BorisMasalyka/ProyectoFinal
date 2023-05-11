
## Introduction
eCommerce Website [NodeJs]


### MVC:
#### General:
- / --> home
- /signup --> signup
- /bienvenida --> bienvenida.
- /formAddProduct --> agregar productos [usuarios admin].
- /serverData --> datos del servidor [usuarios admin].
- /error/:msg --> visualización de errores.

#### Productos:
- /api/productos (GET)--> se obtienen todos los productos.
- /api/productos/:id (GET)--> se obtiene un producto específico por ID.
- /api/productos/categoria/:categoria (GET) --> se obtienen los productos por una categoría específica.
- /api/productos/modificar (POST)--> visualización para modificar producto [usuarios admin]..
- /api/productos/ (POST)--> agregar producto [usuarios admin].
- /api/productos/:id (PUT)--> modificar producto [usuarios admin].
- /api/productos/:id (DELETE)--> eliminar producto[usuarios admin].

#### Carrito:
- /api/carrito (GET)--> se visualiza el carrito.
- /api/carrito/addProduct (POST)--> se agrega el producto al carrito.
- /api/carrito/deleteProduct (DELETE)--> se elimina un producto específico del carrito.
- /api/carrito/:id (DELETE)--> se elimina el carrito para crear la orden.

#### Órdenes:
- /api/ordenes (GET)--> se visualizan todas las órdenes [usuarios admin].
- /api/ordenes (POST)--> se crea la órden.

#### Chat:
- /chat (GET)--> se visualiza el chat.
- /chat/individual (GET)--> se visualizan los mensajes enviados por el usuario.

#### Login:
- /login (GET)--> se visualiza la interfaz para acceder.
- /login (POST)--> se envian los datos del login

#### Signup:
- /signup (GET)--> se visualiza la interfaz para registrarse
- /signup (POST)--> se envian los datos para registrarse.

#### Logout:
- /logout (GET)--> logout.
- /signup (POST)--> se envian los datos para registrarse.

#### Profile:
- /profile (GET)--> se visualiza el perfil.


### API Restful:
#### General:
- / --> home
- /signup --> signup
- /bienvenida --> bienvenida.
- /formAddProduct --> agregar productos [usuarios admin].
- /serverData --> datos del servidor [usuarios admin].
- /error/:msg --> visualización de errores.

#### Productos:
- /apiRestful/productos (GET)--> se obtienen todos los productos.
- /apiRestful/productos/:id (GET)--> se obtiene un producto específico por ID.
- /apiRestful/productos/categoria/:categoria (GET) --> se obtienen los productos por una categoría específica.
- /apiRestful/productos/modificar (POST)--> visualización para modificar producto [usuarios admin]..
- /apiRestful/productos/ (POST)--> agregar producto [usuarios admin].
- /apiRestful/productos/:id (PUT)--> modificar producto [usuarios admin].
- /apiRestful/productos/:id (DELETE)--> eliminar producto[usuarios admin].

#### Carrito:
- /apiRestful/carrito (GET)--> se visualiza el carrito.
- /apiRestful/carrito/addProduct (POST)--> se agrega el producto al carrito.
- /apiRestful/carrito/deleteProduct (DELETE)--> se elimina un producto específico del carrito.
- /apiRestful/carrito/:id (DELETE)--> se elimina el carrito para crear la orden.

#### Órdenes:
- /apiRestful/ordenes (GET)--> se visualizan todas las órdenes [usuarios admin].
- /apiRestful/ordenes (POST)--> se crea la órden.

#### Login:
- /apiRestful/login (POST)--> se envian los datos del login

#### Signup:
- /apiRestful/signup (POST)--> se envian los datos para registrarse.


### Estructura DB:
[![imagen-2022-11-01-124056205.png](https://i.postimg.cc/P5dwKQJy/imagen-2022-11-01-124056205.png)](https://postimg.cc/F7nzHcjk)

### Usuario:
- User: admin, pass: 123456.

## Run server:
Para Iniciar el sevidor en forma local:
#### Run server: `nodemon server.js - CLUSTER`  --> modo Cluster
#### Run server: `nodemon server.js ` --> modo Fork

## Heroku:
Comandos útiles:
``` 
heroku login

heroku git:clone -a nombreDelProyecto 

git add .
git commit -m "comentario sobre el commit"
git push heroku master
```

## github:
Comandos útiles:
``` 
git add .
git commit -m "comentario sobre el commit"
git push origin master
```

## Test API - Postman
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white)
> [Documentación API](https://documenter.getpostman.com/view/15433212/2s8YRcNwSy)


## Libraries
| Library                                                          | Description                 |
| ---------------------------------------------------------------- | --------------------------------------- |
| [Artillery](https://www.npmjs.com/package/artillery)             | Testing server - developers             |
| [bcrypt](https://www.npmjs.com/package/bcrypt)                   | Hash passwords                          |
| [cluster](https://www.npmjs.com/package/cluster)                 | Multi-core server                       |
| [connect-mongo](https://www.npmjs.com/package/connect-mongo)     | MongoDB storage connextion              |
| [dotenv](https://www.npmjs.com/package/dotenv)                   | Environment variables                   |
| [ejs](https://www.npmjs.com/package/ejs)                         | Embedded JS templates                   |
| [express](https://www.npmjs.com/package/express)                 | Framework for NodeJs                    |
| [express-session](https://www.npmjs.com/package/express-session) | Session for express                     |
| [log4js](https://www.npmjs.com/package/log4js)                   | Log framework for NodeJs                |
| [minimist](https://www.npmjs.com/package/minimist)               | Parse argument options                  |
| [mongoose](https://www.npmjs.com/package//mongoose)              | MongoDB tool                            |
| [multer](https://www.npmjs.com/package/multer)                   | Middleware - Uploading files            |
| [nodemailer](https://www.npmjs.com/package/nodemailer)           | Send emails from NodeJs                 |
| [nodemon](https://www.npmjs.com/package/nodemon)                 | Send emails from NodeJs                 |
| [passport](https://www.npmjs.com/package/passport)               | Authentication middleware               |
| [passport-jwt](https://www.npmjs.com/package/passport-jwt)       | Authentication JWT                      |
| [passport-local](https://www.npmjs.com/package/passport-local)   | Local authenticatipn                    |
| [PM2](https://www.npmjs.com/package/pm2)                         | Process manager for NodeJs              |
| [socket.io](https://www.npmjs.com/package/socket.io)             | Real-Time communication                 |
| [twilio](https://www.npmjs.com/package/twilio)                   | Internet and telecommunications networks|

