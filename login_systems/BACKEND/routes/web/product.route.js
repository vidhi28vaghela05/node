const express = require("express");
const router = express.Router();
const userMiddleware = require("../../middlewares/user.middleware");
const roleMiddleware = require("../../middlewares/roles.middleware");

// create product
router.post("/add", userMiddleware.authUser, roleMiddleware("admin","manager"));

// get all product

// get single product

// update product

// delete product

module.exports = router;