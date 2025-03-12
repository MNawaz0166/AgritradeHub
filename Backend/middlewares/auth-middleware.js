const jwt=require("jsonwebtoken");
const User=require("../models/user-model")
const authMiddleware=async(req,res,next)=>{
    const token=req.header("Authorization");
    if(!token){
        res.status(200).json({msg:"Unautherized HTTP request, token not provided"})
    }
    // console.log(token)
    const jwtToken=token.replace("Bearer"," ").trim();
    console.log(jwtToken)
    try {
        const isVerified=jwt.verify(jwtToken,process.env.JWT_SECRET_KEY)
        console.log(isVerified)
        const userData=await User.findOne({email:isVerified.email}).select({password:0})
        // console.log(userData)
        req.user=userData;
        req.token=token;
        req.id=userData._id;
        next() 
    } catch (error) {
        res.status(400).json({msg:"unauthorized,Please create an account!"})
    }
    
}
module.exports=authMiddleware