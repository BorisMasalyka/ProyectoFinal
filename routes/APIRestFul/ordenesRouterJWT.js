const { Router } = require("express");
const jwetStr = require(`../../authenticationJWT/passport`);
const authorizationJWT = require(`../../middleware/authenticateJWT`);

const {
    viewOrdenesController,
    createOrdenController,
} = require("../../controller/APIRestFul/ordenesControllerJWT");

//Authentication
jwetStr();

const ordenesRouter = Router();

ordenesRouter.get(`/`, authorizationJWT, viewOrdenesController);
ordenesRouter.post(`/`, authorizationJWT, createOrdenController);


module.exports = ordenesRouter;



