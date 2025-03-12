const checkSeller=async(req,res,next)=>{
    try {
        const user=req.user;
        console.log(user.userType)
        if(user.userType!=="seller"){
            res.status(403).json({ msg: "Only sellers can list products." });
        }
        else{
            res.status(200).json({user})
        next()
        }
    } catch (error) {
        
    }
}
module.exports=checkSeller;