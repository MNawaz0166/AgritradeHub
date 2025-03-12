const User=require("../models/user-model");
const Contact=require("../models/contact_model")
const Listing=require("../models/listing_model")
//geting all users
const getAllUsers=async(req,res)=>{
    try {
        const users=await User.find({},{password:0})
        console.log(users)
        if(!users || users.length===0){
            res.status(404).json({msg:"No users found!"})
        }
        res.status(200).json(users);
    } catch (error) {
     console.log("error whole fetching all users",error)   
    }

}
// delete a user
const deleteUser=async(req,res)=>{
    try {
        const id=req.params.id;
        await User.deleteOne({_id:id})
        res.status(200).json({msg:"user deleted Successfully"})
    } catch (error) {
        console.log("error in deleteing a user")
    }

}
//gettn all contacts
const getAllContacts=async(req,res,next)=>{
    try {
        const contacts=await Contact.find();
        console.log(contacts)
        if(!contacts || contacts.length===0){
            res.status(404).json({msg:"No Contacts found!"})
        }
        res.status(200).json(contacts)
        next()
    } catch (error) {
        console.log("error while fetching all contacts")
    }
}
//delete a contact
const deleteContact=async(req,res)=>{
    try {
        const id=req.params.id;
        await Contact.deleteOne({_id:id})
        res.status(200).json({msg:"product deleted Successfully"})
    } catch (error) {
        console.log("error in deleteing a listing")
    }

}
const getAllListings=async(req,res,next)=>{
  try {
    const listings=await Listing.find();
    if(!listings || listings.length===0){
        res.status(404).json({msg:"No Listings Found"})
    }
    res.status(200).json(listings)

    next()
  } catch (error) {
    console.log('error while fetching all listings')
  }
}
//delete a listing
const deleteListing=async(req,res)=>{
    try {
        const id=req.params.id;
        await Listing.deleteOne({_id:id})
        res.status(200).json({msg:"contact deleted Successfully"})
    } catch (error) {
        console.log("error in deleteing a contact")
    }

}
module.exports={getAllUsers,getAllContacts,getAllListings,deleteUser,deleteListing,deleteContact}