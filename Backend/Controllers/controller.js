const User = require("../models/user-model");
const Listing=require("../models/listing_model")
//registration router
const register = async (req, res) => {
  try {
    // res.status(200).send(req.body)
    const {name, email, phone, password,address,userType } = req.body;
    console.log(req.body);
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).send("the user is already exists");
    }
    //hashing the password
    // const saltRound=10;
    // const hash_password=await bcrypt.hash(password,saltRound)
    const userCreated = await User.create({ name, email, password, phone,address,userType}); //password:hash_password
    res
      .status(200)
      .send({
        msg: "registration successful",
        token: await userCreated.generateToken(),
        userId: userCreated._id.toString(),
      });
  } catch (err) {
    console.log(err)
    res.status(400).send({ msg: "the page is not found" });
  }
};
//login router logic
const login = async (req, res) => {
  try {
    // res.status(200).send("hello from the login page.")
    const { email, password } = req.body;
    console.log(req.body);
    const userExist =await User.findOne({ email });
    console.log(userExist)
    if (!userExist) {
      return res.status(400).send({ msg: "invalid credentals" });
    }
    // const user = await bcrypt.compare(password, userExist.password);
    const user=await userExist.comparePassword(password);
    if (user) {
      res
        .status(200)
        .send({
          msg: "login successful",
          token: await userExist.generateToken(),
          userId: userExist._id.toString(),
        });
    }
    else{
        res.status(401).send({msg:"Invalid email or password"})
    }
  } catch (error) {
    res.status(500).send("internal server error.");
  }
};
//user route logic
const user= async(req,res)=>{
  try {
    const userData=req.user;
    console.log("userdata",userData)
    res.status(200).send({msg:userData})
  } catch (err) {
    console.log("error in user logic", err)
  }
}
// const user = async (req, res) => {
//   try {
//     const userData = req.user;  // Assuming `req.user` contains the authenticated user's data

//     // If the user is a seller, fetch all listings for that seller
//     if (userData.userType === "seller") {
//       const listings = await Listing.find({ seller: userData._id }); // Assuming listings are related by seller ID
//       res.status(200).send({ msg: userData, listings });
//     } else {
//       res.status(200).send({ msg: userData });
//     }

//   } catch (err) {
//     console.log("Error in user logic", err);
//     res.status(500).send({ error: "Something went wrong." });
//   }
// };



module.exports = {register, login,user};
