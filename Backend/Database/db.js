
const mongoose=require("mongoose");
// const URI='mongodb://127.0.0.1:27017/ATH_admin';
const URI=process.env.MONGODB_URI;
const connectDB=async()=>{
    try {
        await mongoose.connect(URI);
        console.log("the database is connected.")
        
    } catch (error) {
        console.log("connection to database is faild.");
    }
};
module.exports=connectDB;
//password mnawazje