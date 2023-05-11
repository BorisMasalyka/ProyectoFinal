const { Router } = require(`express`);
const jwetStr = require(`../../authenticationJWT/passport`);

const {
    loginJWTController,
    registerJWTController
} = require(`../../controller/APIRestFul/userControllerJWT`);

//Authentication
jwetStr();

const loginJWTRouter = Router();
const registerJWTRouter = Router();

//Login
loginJWTRouter.post(`/`, loginJWTController);
registerJWTRouter.post(`/`, registerJWTController);

module.exports = {
    loginJWTRouter,
    registerJWTRouter
};