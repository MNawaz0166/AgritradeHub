const cloudinary = require("cloudinary").v2;
const fs=require("fs")
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
});
const uploadOnCloudinary=async(localFilePath)=>{
     try {
        if(!localFilePath)
        {
            console.log("local file path does not exist")
            return null;
        }
        const response= await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        console.log("file is uploaded successfully", response.url)
        return response;
     } catch (error) {
        fs.unlinkSync(localFilePath)
     }
}
module.exports= uploadOnCloudinary;