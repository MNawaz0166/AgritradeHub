const mongoose=require("mongoose");
const contactSchema=new mongoose.Schema({
    userName:{type:String, required:true},
    email:{type:String,required:true},
    subject:{type:String,required:true},
    message:{type:String,required:true}
})
const Contact=new mongoose.model("Contact",contactSchema);
module.exports=Contact;