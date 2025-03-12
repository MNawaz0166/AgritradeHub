const Listing = require("../models/listing_model");
const uploadOnCloudinary=require("../utils/cloudinary")
const listProduct=async(req,res)=>{
    try {
         const {proName,category,price,quantity,description}=req.body;
         console.log("proName",proName)
         const imgLocalPath=req.file.path;
         console.log(imgLocalPath)
         if(!imgLocalPath){
            res.status(400).json({msg:"image is required"})
         }
         const result=await uploadOnCloudinary(imgLocalPath)
         if(!result){
            console.log('image is not uploading')
            res.status(400).json({msg:"image is required"})
         }
         const newProduct=new Listing({
            proName,
            category,
            price,
            quantity,
            description,
            img:result.url
         })
         await newProduct.save();
        res.status(200).json({msg:"Product Added Successfully!"})
        console.log("listing contoller is working properly")
    } catch (error) {
         res.status(500).json({ msg: "Server error while saving the product", error });
        console.log("error in handling listing controller")
    }
}
module.exports=listProduct