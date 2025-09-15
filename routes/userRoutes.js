const express =require("express");
const { loginController, registerController, authController } = require("../controllers/userCtrl");

const authMiddleware = require("../middlewares/authMiddleware");



// router boject
const router = express.Router();

//routes
//login ||post

router.post("/login",loginController);

//register post

router.post("/register",registerController);
// Auth ||Post

router.post('/getUserData',authMiddleware,authController);
module.exports =router;