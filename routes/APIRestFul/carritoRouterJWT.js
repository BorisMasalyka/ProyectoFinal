const { Router } = require("express");const 
jwetStr = require(`../../authenticationJWT/passport`);
const authorizationJWT = require(`../../middleware/authenticateJWT`);

const {
  viewCart,
  addProductToCart,
  deleteCartById,
  deleteProductById,
} = require("../../controller/APIRestFul/carritoControllerjwt");

//Authentication
jwetStr();

const carritoRouter = Router();

carritoRouter.get(`/`,authorizationJWT, viewCart);
carritoRouter.post(`/addProduct`,authorizationJWT, addProductToCart);
carritoRouter.delete(`/deleteProduct`,authorizationJWT, deleteProductById);
carritoRouter.delete(`/:id`,authorizationJWT, deleteCartById);

module.exports = carritoRouter;



