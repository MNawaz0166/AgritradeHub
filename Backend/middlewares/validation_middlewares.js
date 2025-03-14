const validationMiddle=(schema)=>async(req,res,next)=>{
try {
    const parseBody=await schema.parseAsync(req.body);
    req.body=parseBody;
    next();
} catch (err) {
    console.log(err.errors[0].message)
    const message=err.errors[0].message;
    res.status(400).send({msg:message})
}
}
module.exports=validationMiddle;