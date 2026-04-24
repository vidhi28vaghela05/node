const express = require("express");
const router = express.Router();
const userMiddleware = require("../../middlewares/user.middleware");
const roleMiddleware = require("../../middlewares/roles.middleware");
const productController = require("../../controllers/product.controller");

// create product
router.post(
  "/add",
  userMiddleware.authUser,
  roleMiddleware.allowRoles("admin", "manager"),
  productController.CreateProduct,
);

// get all product
router.get("/all", productController.GetAllProduct);

// get single product

// update product

// delete product

module.exports = router;
