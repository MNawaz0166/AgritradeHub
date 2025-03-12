const adminMiddleware=async(req,res,next)=>{
        try {
            const adminRole=req.user.userType;
            if(!adminRole){
                res.status(403).json({msg:"Access is denied user is not admin"})
            }
            next()
        } catch (error) {
            next(error)
            
        }
}
module.exports=adminMiddleware