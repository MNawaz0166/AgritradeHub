const express=require("express");
const router=express.Router();
const listController=require("../Controllers/listing_controller")
const upload=require("../middlewares/multer_middleware")
const authMiddleware=require("../middlewares/auth-middleware")
const checkSeller=require("../middlewares/checkseller_middleware")
router.route("/sell").post(authMiddleware,checkSeller,upload.single("img"),listController)
module.exports=router;