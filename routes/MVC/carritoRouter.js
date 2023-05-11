const { Router } = require("express");

const {
  viewCart,
  addProductToCart,
  deleteCartById,
  deleteProductById,
} = require("../../controller/MVC/carritoController");

const carritoRouter = Router();

carritoRouter.get(`/`, viewCart);
carritoRouter.post(`/addProduct`, addProductToCart);
carritoRouter.post(`/deleteProduct`, deleteProductById);
//carritoRouter.delete(`/deleteProduct`, deleteProductById);  // cambiar el de arriba por este, falta implementar.
carritoRouter.delete(`/:id`, deleteCartById);

module.exports = carritoRouter;



