const express=require("express");
const router=express.Router();
const adminMiddleware=require("../middlewares/admin_middleware")
const adminController=require("../Controllers/admin_controller")
const authMiddleware=require("../middlewares/auth-middleware")
router.route("/users").get(authMiddleware,adminMiddleware,adminController.getAllUsers);
router.route("/users/delete/:id").delete(authMiddleware,adminMiddleware,adminController.deleteUser);
router.route("/contacts").get(authMiddleware,adminMiddleware,adminController.getAllContacts);
router.route("/contacts/delete/:id").delete(authMiddleware,adminMiddleware,adminController.deleteContact);
router.route("/listings").get(authMiddleware,adminMiddleware,adminController.getAllListings);
router.route("/listings/delete/:id").delete(authMiddleware,adminMiddleware,adminController.deleteListing);
module.exports=router;