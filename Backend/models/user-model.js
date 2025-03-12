const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const JWT=require("jsonwebtoken");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  address:{
    type:String,
    required:true
  },
  userType:{
    type:String,
    required:true,enum: ['buyer', 'seller'] 
  }
});
// Pre-save middleware to hash password
userSchema.pre("save", async function (next) {
  console.log("pre method", this);
  const user = this;
  //  Only hash password if it's new or modified
  if (!user.isModified("password")) {
    return next();
  }
  // Generate salt and hash the password
  try {
    const saltRound = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(user.password, saltRound);
    user.password = hash_password;
  } catch (err) {
    next(err);
  }
});
//compare password
userSchema.methods.comparePassword=async function (password) {
  return bcrypt.compare(password,this.password);
}
//jwt token
userSchema.methods.generateToken=async function () {
    try {
        return JWT.sign({
             userID:this._id.toString(),
             email:this.email,
             userType:this.userType
        },
        process.env.JWT_SECRET_KEY,
        {
          expiresIn:"30d"
        }
    )} catch (error) {
        console.error(error);
    }
}
const User = new mongoose.model("User", userSchema);
module.exports = User;