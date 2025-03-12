const express=require("express");
const router=express.Router();
const controllers=require("../Controllers/controller");
const signUpSchema=require("../validators/validator")
const validation=require("../middlewares/validation_middlewares")
const authMiddleware=require("../middlewares/auth-middleware");
// const checkSeller = require("../middlewares/check_seller_middleware");
router.route("/register").post(validation(signUpSchema),controllers.register);
router.route("/login").post(controllers.login)
router.route("/user").get(authMiddleware,controllers.user)
// router.route("/products").post(authMiddleware,checkSeller,controllers.product)
module.exports=router;