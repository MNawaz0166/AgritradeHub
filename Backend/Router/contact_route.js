const express=require("express");
const router=express.Router();
const contactRoute=require("../Controllers/contact_controller")
router.route('/contact').post(contactRoute)
module.exports=router;