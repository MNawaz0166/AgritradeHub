const Contact = require("../models/contact_model");
// logic for handling contacts
const contact=async(req,res)=>{
    try {
    const {userName,email,subject,message}=req.body;
    const newContact=new Contact({
      userName,
      email,
      subject,
      message
    })
    await newContact.save();
    res.status(200).json({msg:"message sent successfully"})
      
    } catch (error) {
      console.log("error in contact controler",error)
      return res.status(500).json({msg:"message is not delivered", error:error.message})
    }
  }
  module.exports=contact