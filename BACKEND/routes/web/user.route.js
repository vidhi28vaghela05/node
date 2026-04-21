const express = require("express");
const {body} = require("express-validator");
const userController = require("../../controllers/user.controller");
const middleware = require("../../middlewares/user.middleware")

const router = express.Router();

// register user
// second validation -- use express validator package
router.post("/register", [
    body("username")
    .isLength({ min:5 })
    .withMessage("username must be 5 charecter long"), 
    body("email").isEmail().withMessage("Enter valid email"),
    body("password").isLength({ min: 6 }).withMessage("password min 6 char need")
], userController.registerUser);

// login user
// router --> controller
router.post("/login",[
    body("email").isEmail().withMessage("Enter valid Email"),
    body("password")
    .isLength({ min: 6 })
    .withMessage("password must be 6 charcters long"),
], userController.loginUser);

// profile
// route --> middleware --> controller
router.get("/profile", middleware.authUser, userController.profileUser)

module.exports = router;
