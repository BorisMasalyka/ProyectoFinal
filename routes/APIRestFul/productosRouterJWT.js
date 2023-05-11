const { Router } = require("express");
const jwetStr = require(`../../authenticationJWT/passport`);
const authorizationJWT = require(`../../middleware/authenticateJWT`);

const {
  getAllProducts,
  getProductById,
  addProduct,
  updateProductById,
  deleteProductById,
  getProductsBtCategory
} = require("../../controller/APIRestFul/productosControllersJWT");

//Authentication
jwetStr();

const productosRouter = Router();

productosRouter.get(`/`,  authorizationJWT, getAllProducts);
productosRouter.get(`/:id`,authorizationJWT, getProductById);
productosRouter.get(`/categoria/:categoria`,authorizationJWT, getProductsBtCategory);
productosRouter.post(`/`,authorizationJWT, addProduct);
productosRouter.put(`/:id`,authorizationJWT, updateProductById);
productosRouter.delete(`/:id`,authorizationJWT, deleteProductById);

module.exports = productosRouter;