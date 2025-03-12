const express=require("express");
const Listing=require("../models/listing_model")
const router=express.Router();
router.route('/buy').get( async (req, res) => {
    try {
      const products = await Listing.find(); // Assuming you're using MongoDB
      console.log("product is fetched")
      res.status(200).json({msg:"product is fetched ",products});
    } catch (error) {
      console.log("failed to fetch products")
      res.status(500).json({ error: "Failed to fetch products" });
    }})
module.exports=router;

  