const express = require(`express`);
const { Server: HttpServer } = require(`http`);
const { Server: IOServer } = require(`socket.io`);
const app = express();
const passport = require('passport');
const log4js = require('./utils/logs');
const MongoStore = require(`connect-mongo`);
const dotenv = require(`dotenv`);
const parseArgs = require(`minimist`);
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);
const socketIoChat = require(`./sockets/socketChat`);
const cluster = require(`cluster`);
const os = require(`os`);
const numCPUs = os.cpus().length;

dotenv.config();

app.use(express.static(`./public`));
app.use("/api", express.static("./public"));
app.use("/error", express.static("./public"));
app.use("/api/productos", express.static("./public"));
app.use("/chat/individual", express.static("./public"));
app.use("/api/productos/categoria", express.static("./public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());

const session = require('express-session');

//Middleware: session
app.use(session({
    store: MongoStore.create({
        mongoUrl: process.env.URL_MONGO,
        ttl: 10,
    }),
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 600000 }
}));

app.use(passport.session());

const args = parseArgs(process.argv.slice(2));

//Views
app.set(`views`, `./views`);
app.set(`view engine`, `ejs`);

//Logg console / warm 
const loggerConsole = log4js.getLogger(`default`);
const loggerArchiveWarn = log4js.getLogger(`warnArchive`);
const loggerArchiveError = log4js.getLogger(`errorArchive`);

//Run server
const CLUSTER = args.CLUSTER;
const PORT = process.env.PORT || 8080;

const runServer = (PORT) => {
    httpServer.listen(PORT, () => loggerConsole.debug(`Servidor escuchando el puerto ${PORT}`));
}

if (CLUSTER) {
    if (cluster.isMaster) {
        for (let i = 0; i < numCPUs; i++) {
            cluster.fork();
        }
        cluster.on(`exit`, (worker, code, signal) => {
            cluster.fork();
        });
    } else {
        runServer(PORT);
    }
} else {
    runServer(PORT);
}

app.use((req, res, next) => {
    loggerConsole.info(`
    Ruta consultada: ${req.originalUrl}
    Metodo ${req.method}`);
    next();
});

//Log session
const isLogged = ((req, res, next) => {
    let msgError = `Para acceder a esta URL debe iniciar sesión`
    if (req.user) {
        next();
    } else {
        return res.render('viewError', { msgError })
    }
});

//Routers import MVC
const productosRouter = require(`./routes/MVC/productosRouter`);
const carritoRouter = require(`./routes/MVC/carritoRouter`);
const { loginRouter } = require(`./routes/MVC/userRouter`);
const { signupRouter } = require(`./routes/MVC/userRouter`);
const { logoutRouter } = require(`./routes/MVC/userRouter`);
const { profileRouter } = require(`./routes/MVC/userRouter`);
const generalViewsRouter = require(`./routes/MVC/generalViewsRouter`);
const ordenesRouter = require(`./routes/MVC/ordenesRouter`);
const chatRouter = require(`./routes/MVC/chatRouter`);

//Routers import API Restful
const { loginJWTRouter } = require(`./routes/APIRestFul/userRouterJWT`);
const { registerJWTRouter } = require(`./routes/APIRestFul/userRouterJWT`);
const productosRouterJWT = require(`./routes/APIRestFul/productosRouterJWT`);
const ordenesRouterJWT = require(`./routes/APIRestFul/ordenesRouterJWT`);
const carritoRouterJWT = require(`./routes/APIRestFul/carritoRouterJWT`);

//Routers MVC
app.use(`/`, generalViewsRouter);
app.use(`/api/productos`, isLogged, productosRouter);
app.use(`/api/carrito`, isLogged, carritoRouter);
app.use(`/api/ordenes`, isLogged, ordenesRouter);
app.use(`/chat`, isLogged, chatRouter);
app.use(`/login`, loginRouter);
app.use(`/signup`, signupRouter);
app.use('/logout', isLogged, logoutRouter);
app.use(`/profile`, isLogged, profileRouter);

//Routers API Restful
app.use(`/apiRestful/login`, loginJWTRouter);
app.use(`/apiRestful/signup`, registerJWTRouter);
app.use(`/apiRestful/productos`, productosRouterJWT);
app.use(`/apiRestful/carrito`, carritoRouterJWT);
app.use(`/apiRestful/ordenes`, ordenesRouterJWT);

//Socket chat:
socketIoChat(io);

app.use((req, res) => {
    loggerConsole.warn(`
    Estado: 404
    Ruta consultada: ${req.originalUrl}
    Metodo ${req.method}`);

    loggerArchiveWarn.warn(`Estado: 404, Ruta consultada: ${req.originalUrl}, Metodo ${req.method}`);
    const msgError = `Estado: 404, Ruta consultada: ${req.originalUrl}, Metodo ${req.method}`;

    res.render(`viewError`, { msgError });
});

